-- VidyaSetu Row Level Security (RLS) Policies
-- Implements role-based access for Students, Teachers, Content Editors, and Admins

-- Enable RLS on all client-exposed tables
ALTER TABLE schools ENABLE ROW LEVEL SECURITY;
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE school_memberships ENABLE ROW LEVEL SECURITY;
ALTER TABLE classes ENABLE ROW LEVEL SECURITY;
ALTER TABLE subjects ENABLE ROW LEVEL SECURITY;
ALTER TABLE languages ENABLE ROW LEVEL SECURITY;
ALTER TABLE lessons ENABLE ROW LEVEL SECURITY;
ALTER TABLE lesson_translations ENABLE ROW LEVEL SECURITY;
ALTER TABLE lesson_sections ENABLE ROW LEVEL SECURITY;
ALTER TABLE activities ENABLE ROW LEVEL SECURITY;
ALTER TABLE questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE question_options ENABLE ROW LEVEL SECURITY;
ALTER TABLE content_reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE assignments ENABLE ROW LEVEL SECURITY;
ALTER TABLE assignment_students ENABLE ROW LEVEL SECURITY;
ALTER TABLE quiz_attempts ENABLE ROW LEVEL SECURITY;
ALTER TABLE quiz_answers ENABLE ROW LEVEL SECURITY;
ALTER TABLE lesson_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE achievements ENABLE ROW LEVEL SECURITY;
ALTER TABLE student_achievements ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookmarks ENABLE ROW LEVEL SECURITY;
ALTER TABLE offline_sync_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE audit_logs ENABLE ROW LEVEL SECURITY;

-- Helper function to get current user role
CREATE OR REPLACE FUNCTION get_current_user_role()
RETURNS user_role AS $$
  SELECT role FROM profiles WHERE auth_user_id = auth.uid() LIMIT 1;
$$ LANGUAGE sql STABLE SECURITY DEFINER;

-- 1. Subjects and Languages (Public read-only for active records)
CREATE POLICY "Anyone can view active subjects" ON subjects
  FOR SELECT USING (is_active = true);

CREATE POLICY "Anyone can view active languages" ON languages
  FOR SELECT USING (is_active = true);

-- 2. Lessons & Lesson Sections
-- Published lessons are readable by all authenticated users
CREATE POLICY "Read published lessons" ON lessons
  FOR SELECT USING (
    status = 'published'
    OR (auth.uid() IS NOT NULL AND (
      get_current_user_role() IN ('teacher', 'content_editor', 'admin')
      OR created_by = (SELECT id FROM profiles WHERE auth_user_id = auth.uid())
    ))
  );

CREATE POLICY "Content creators can insert lessons" ON lessons
  FOR INSERT WITH CHECK (
    get_current_user_role() IN ('content_editor', 'teacher', 'admin')
  );

CREATE POLICY "Content creators and admins can update lessons" ON lessons
  FOR UPDATE USING (
    get_current_user_role() = 'admin'
    OR (get_current_user_role() IN ('content_editor', 'teacher') AND created_by = (SELECT id FROM profiles WHERE auth_user_id = auth.uid()) AND status IN ('draft', 'rejected'))
  );

-- Lesson translations and sections mirror lesson access
CREATE POLICY "Read lesson translations" ON lesson_translations
  FOR SELECT USING (
    EXISTS (SELECT 1 FROM lessons WHERE lessons.id = lesson_translations.lesson_id AND (lessons.status = 'published' OR get_current_user_role() IN ('teacher', 'content_editor', 'admin')))
  );

CREATE POLICY "Read lesson sections" ON lesson_sections
  FOR SELECT USING (
    EXISTS (SELECT 1 FROM lessons WHERE lessons.id = lesson_sections.lesson_id AND (lessons.status = 'published' OR get_current_user_role() IN ('teacher', 'content_editor', 'admin')))
  );

CREATE POLICY "Read lesson activities" ON activities
  FOR SELECT USING (
    EXISTS (SELECT 1 FROM lessons WHERE lessons.id = activities.lesson_id AND (lessons.status = 'published' OR get_current_user_role() IN ('teacher', 'content_editor', 'admin')))
  );

CREATE POLICY "Read questions and options" ON questions
  FOR SELECT USING (
    EXISTS (SELECT 1 FROM lessons WHERE lessons.id = questions.lesson_id AND (lessons.status = 'published' OR get_current_user_role() IN ('teacher', 'content_editor', 'admin')))
  );

CREATE POLICY "Read question options" ON question_options
  FOR SELECT USING (true);

-- 3. Profiles
CREATE POLICY "Users can view their own profile" ON profiles
  FOR SELECT USING (auth_user_id = auth.uid() OR get_current_user_role() IN ('teacher', 'admin'));

CREATE POLICY "Users can update their own profile" ON profiles
  FOR UPDATE USING (auth_user_id = auth.uid());

-- 4. Lesson Progress
CREATE POLICY "Students manage own progress" ON lesson_progress
  FOR ALL USING (
    student_id = (SELECT id FROM profiles WHERE auth_user_id = auth.uid())
  );

CREATE POLICY "Teachers can view class students progress" ON lesson_progress
  FOR SELECT USING (
    get_current_user_role() IN ('teacher', 'admin')
  );

-- 5. Quiz Attempts & Answers
CREATE POLICY "Students manage own quiz attempts" ON quiz_attempts
  FOR ALL USING (
    student_id = (SELECT id FROM profiles WHERE auth_user_id = auth.uid())
  );

CREATE POLICY "Teachers view student quiz attempts" ON quiz_attempts
  FOR SELECT USING (
    get_current_user_role() IN ('teacher', 'admin')
  );

CREATE POLICY "Manage quiz answers" ON quiz_answers
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM quiz_attempts
      WHERE quiz_attempts.id = quiz_answers.quiz_attempt_id
      AND (quiz_attempts.student_id = (SELECT id FROM profiles WHERE auth_user_id = auth.uid()) OR get_current_user_role() IN ('teacher', 'admin'))
    )
  );

-- 6. Content Reviews
CREATE POLICY "Admins and editors manage reviews" ON content_reviews
  FOR ALL USING (
    get_current_user_role() IN ('content_editor', 'admin')
  );

-- 7. Assignments
CREATE POLICY "Teachers manage assignments" ON assignments
  FOR ALL USING (
    teacher_id = (SELECT id FROM profiles WHERE auth_user_id = auth.uid()) OR get_current_user_role() = 'admin'
  );

CREATE POLICY "Students view their class assignments" ON assignments
  FOR SELECT USING (true);

CREATE POLICY "Manage assignment students" ON assignment_students
  FOR ALL USING (
    student_id = (SELECT id FROM profiles WHERE auth_user_id = auth.uid()) OR get_current_user_role() IN ('teacher', 'admin')
  );

-- 8. Achievements & Bookmarks
CREATE POLICY "Public read achievements" ON achievements FOR SELECT USING (true);
CREATE POLICY "Students manage own achievements" ON student_achievements
  FOR ALL USING (student_id = (SELECT id FROM profiles WHERE auth_user_id = auth.uid()));

CREATE POLICY "Students manage own bookmarks" ON bookmarks
  FOR ALL USING (student_id = (SELECT id FROM profiles WHERE auth_user_id = auth.uid()));

-- 9. Offline Sync Events
CREATE POLICY "Users can insert and view their sync events" ON offline_sync_events
  FOR ALL USING (student_id = (SELECT id FROM profiles WHERE auth_user_id = auth.uid()));

-- 10. Audit Logs
CREATE POLICY "Only admins read audit logs" ON audit_logs
  FOR SELECT USING (get_current_user_role() = 'admin');

CREATE POLICY "System can record audit logs" ON audit_logs
  FOR INSERT WITH CHECK (true);
