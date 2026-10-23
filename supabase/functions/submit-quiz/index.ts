// VidyaSetu Edge Function: submit-quiz
// Trusted server-side quiz scoring and duplicate prevention
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
      { auth: { persistSession: false } }
    );

    const authHeader = req.headers.get("Authorization");
    if (!authHeader) {
      return new Response(JSON.stringify({ error: "Missing authorization header" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const token = authHeader.replace("Bearer ", "");
    const { data: { user }, error: userError } = await supabaseClient.auth.getUser(token);
    if (userError || !user) {
      return new Response(JSON.stringify({ error: "Unauthorized user" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const { lessonId, answers, isOfflineSync } = await req.json();

    if (!lessonId || !Array.isArray(answers)) {
      return new Response(JSON.stringify({ error: "Invalid payload format" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Fetch verified questions and correct options from database
    const { data: questions, error: qError } = await supabaseClient
      .from("questions")
      .select("id, points, question_options(id, is_correct)")
      .eq("lesson_id", lessonId);

    if (qError || !questions) {
      return new Response(JSON.stringify({ error: "Failed to fetch lesson questions" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    let correctCount = 0;
    const totalQuestions = questions.length;
    const answerRecords = [];

    for (const q of questions) {
      const submitted = answers.find((a: any) => a.questionId === q.id);
      const correctOption = q.question_options?.find((opt: any) => opt.is_correct);
      const isCorrect = submitted && correctOption && submitted.selectedOptionId === correctOption.id;
      if (isCorrect) correctCount++;
      answerRecords.push({
        question_id: q.id,
        selected_option_id: submitted?.selectedOptionId || null,
        is_correct: !!isCorrect,
      });
    }

    const scorePercentage = totalQuestions > 0 ? (correctCount / totalQuestions) * 100 : 0;
    const starsEarned = scorePercentage >= 80 ? 3 : scorePercentage >= 50 ? 2 : 1;

    // Check if user already has an attempt to prevent duplicate star inflating
    const { data: existingAttempts } = await supabaseClient
      .from("quiz_attempts")
      .select("id, stars_earned")
      .eq("student_id", user.id)
      .eq("lesson_id", lessonId);

    const hasCompletedBefore = existingAttempts && existingAttempts.length > 0;
    const netStarsToAward = hasCompletedBefore ? 0 : starsEarned;

    // Record attempt
    const { data: attempt, error: insertError } = await supabaseClient
      .from("quiz_attempts")
      .insert({
        lesson_id: lessonId,
        student_id: user.id,
        score_percentage: scorePercentage,
        total_questions: totalQuestions,
        correct_count: correctCount,
        stars_earned: starsEarned,
        is_offline_sync: !!isOfflineSync,
      })
      .select()
      .single();

    if (insertError) {
      throw insertError;
    }

    // Award stars if first successful attempt
    if (netStarsToAward > 0) {
      await supabaseClient.rpc("increment_stars", { user_id: user.id, stars: netStarsToAward });
    }

    return new Response(
      JSON.stringify({
        success: true,
        attemptId: attempt.id,
        scorePercentage,
        correctCount,
        totalQuestions,
        starsEarned,
        netStarsAwarded: netStarsToAward,
      }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
