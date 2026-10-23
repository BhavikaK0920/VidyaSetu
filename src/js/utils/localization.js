// VidyaSetu Lesson Localization Utility
// Deeply resolves localized titles, summaries, sections, interactive activities, and quiz questions

export function getLocalizedLesson(lesson, lang = 'en') {
  if (!lesson) return null;
  if (!lang || lang === 'en' || !lesson.translations || !lesson.translations[lang]) {
    return lesson;
  }

  const trans = lesson.translations[lang];

  // Merge sections
  const localizedSections = (lesson.sections || []).map((baseSec, index) => {
    const transSec = trans.sections && trans.sections[index];
    if (!transSec) return baseSec;
    return {
      ...baseSec,
      title: transSec.title || baseSec.title,
      read_aloud: transSec.read_aloud || baseSec.read_aloud,
      content: transSec.content || baseSec.content
    };
  });

  // Merge interactive activity
  let localizedActivity = lesson.interactive_activity;
  if (lesson.interactive_activity && trans.interactive_activity) {
    localizedActivity = {
      ...lesson.interactive_activity,
      title: trans.interactive_activity.title || lesson.interactive_activity.title,
      instructions: trans.interactive_activity.instructions || lesson.interactive_activity.instructions,
      pairs: (lesson.interactive_activity.pairs || []).map((basePair, index) => {
        const transPair = trans.interactive_activity.pairs && trans.interactive_activity.pairs[index];
        if (!transPair) return basePair;
        return {
          ...basePair,
          left: transPair.left || basePair.left,
          right: transPair.right || basePair.right
        };
      })
    };
  }

  // Merge quiz questions
  const localizedQuiz = (lesson.quiz || []).map((baseQ, index) => {
    const transQ = trans.quiz && trans.quiz[index];
    if (!transQ) return baseQ;
    return {
      ...baseQ,
      prompt: transQ.prompt || baseQ.prompt,
      hint: transQ.hint || baseQ.hint,
      explanation: transQ.explanation || baseQ.explanation,
      options: (baseQ.options || []).map((baseOpt, optIndex) => {
        const transOpt = transQ.options && transQ.options[optIndex];
        if (!transOpt) return baseOpt;
        return {
          ...baseOpt,
          text: transOpt.text || baseOpt.text
        };
      })
    };
  });

  return {
    ...lesson,
    title: trans.title || lesson.title,
    summary: trans.summary || lesson.summary,
    sections: localizedSections,
    interactive_activity: localizedActivity,
    quiz: localizedQuiz
  };
}
