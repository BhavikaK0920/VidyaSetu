-- VidyaSetu Seed Data
-- Multilingual Digital Learning Platform for Rural Government Schools
-- Provides realistic sample schools, teachers, students, lessons, and activities

-- Languages
INSERT INTO languages (code, name, native_name) VALUES
('en', 'English', 'English'),
('hi', 'Hindi', 'हिन्दी'),
('kn', 'Kannada', 'ಕನ್ನಡ'),
('te', 'Telugu', 'తెలుగు'),
('ta', 'Tamil', 'தமிழ்'),
('ml', 'Malayalam', 'മലയാളം'),
('mr', 'Marathi', 'मराठी'),
('bn', 'Bengali', 'বাংলা')
ON CONFLICT (code) DO UPDATE SET name = EXCLUDED.name;

-- Sample School
INSERT INTO schools (id, code, name, village, district, state, pin_code) VALUES
('a0000000-0000-0000-0000-000000000001', 'KA-SHIV-01', 'Govt Higher Primary School', 'Shivapura', 'Mandya', 'Karnataka', '571401'),
('a0000000-0000-0000-0000-000000000002', 'MH-RAMP-02', 'Zilla Parishad Primary School', 'Rampur', 'Kolhapur', 'Maharashtra', '416101')
ON CONFLICT (id) DO NOTHING;

-- Sample Profiles
INSERT INTO profiles (id, role, full_name, display_name, preferred_language, grade_level, stars_count) VALUES
('b0000000-0000-0000-0000-000000000001', 'admin', 'Smt. Rajeshwari Patil', 'Admin Rajeshwari', 'kn', NULL, 0),
('b0000000-0000-0000-0000-000000000002', 'teacher', 'Shri Suresh Kumar', 'Master Suresh', 'kn', NULL, 0),
('b0000000-0000-0000-0000-000000000003', 'content_editor', 'Dr. Meena Deshmukh', 'Editor Meena', 'hi', NULL, 0),
('b0000000-0000-0000-0000-000000000004', 'student', 'Aarav Gowda', 'Aarav', 'kn', 4, 45),
('b0000000-0000-0000-0000-000000000005', 'student', 'Pooja Nayak', 'Pooja', 'kn', 4, 30),
('b0000000-0000-0000-0000-000000000006', 'student', 'Rohan Shinde', 'Rohan', 'mr', 5, 25)
ON CONFLICT (id) DO NOTHING;

-- Subjects
INSERT INTO subjects (id, code, name, icon, color_hex, display_order) VALUES
('c0000000-0000-0000-0000-000000000001', 'MATH', 'Mathematics', 'calculator', '#176B55', 1),
('c0000000-0000-0000-0000-000000000002', 'EVS', 'Environmental Studies', 'leaf', '#2A8B5B', 2),
('c0000000-0000-0000-0000-000000000003', 'SCI', 'Science', 'flask-conical', '#1D7873', 3),
('c0000000-0000-0000-0000-000000000004', 'ENG', 'English & Vocabulary', 'languages', '#D97706', 4),
('c0000000-0000-0000-0000-000000000005', 'REG', 'Regional Language (Kannada/Hindi)', 'book-open', '#7C3AED', 5),
('c0000000-0000-0000-0000-000000000006', 'SOC', 'Social Studies', 'globe', '#EA580C', 6)
ON CONFLICT (id) DO NOTHING;

-- Classes 1 to 8 for School 1
INSERT INTO classes (id, school_id, grade_number, section_name, academic_year, class_teacher_id) VALUES
('d0000000-0000-0000-0000-000000000001', 'a0000000-0000-0000-0000-000000000001', 1, 'A', '2026-27', 'b0000000-0000-0000-0000-000000000002'),
('d0000000-0000-0000-0000-000000000002', 'a0000000-0000-0000-0000-000000000001', 2, 'A', '2026-27', 'b0000000-0000-0000-0000-000000000002'),
('d0000000-0000-0000-0000-000000000003', 'a0000000-0000-0000-0000-000000000001', 3, 'A', '2026-27', 'b0000000-0000-0000-0000-000000000002'),
('d0000000-0000-0000-0000-000000000004', 'a0000000-0000-0000-0000-000000000001', 4, 'A', '2026-27', 'b0000000-0000-0000-0000-000000000002'),
('d0000000-0000-0000-0000-000000000005', 'a0000000-0000-0000-0000-000000000001', 5, 'A', '2026-27', 'b0000000-0000-0000-0000-000000000002'),
('d0000000-0000-0000-0000-000000000006', 'a0000000-0000-0000-0000-000000000001', 6, 'A', '2026-27', 'b0000000-0000-0000-0000-000000000002'),
('d0000000-0000-0000-0000-000000000007', 'a0000000-0000-0000-0000-000000000001', 7, 'A', '2026-27', 'b0000000-0000-0000-0000-000000000002'),
('d0000000-0000-0000-0000-000000000008', 'a0000000-0000-0000-0000-000000000001', 8, 'A', '2026-27', 'b0000000-0000-0000-0000-000000000002')
ON CONFLICT (id) DO NOTHING;

-- Sample Lessons
INSERT INTO lessons (id, subject_id, grade_level, title, slug, summary, estimated_minutes, difficulty_level, status, created_by, published_at) VALUES
('e0000000-0000-0000-0000-000000000001', 'c0000000-0000-0000-0000-000000000001', 4, 'Understanding Fractions with Chapati & Mangoes', 'fractions-chapati-mangoes', 'Learn half (1/2), one-third (1/3), and quarter (1/4) using everyday village examples.', 15, 'beginner', 'published', 'b0000000-0000-0000-0000-000000000003', now()),
('e0000000-0000-0000-0000-000000000002', 'c0000000-0000-0000-0000-000000000002', 4, 'The Journey of Water: Our Village Tank to Rain', 'journey-of-water-village-tank', 'Discover how water evaporates, forms clouds, and returns as life-giving monsoon rain.', 12, 'beginner', 'published', 'b0000000-0000-0000-0000-000000000003', now()),
('e0000000-0000-0000-0000-000000000003', 'c0000000-0000-0000-0000-000000000003', 5, 'Parts of a Plant and Seed Germination', 'plant-parts-germination', 'Hands-on discovery of roots, stems, leaves, flowers, and how a seed wakes up with water.', 18, 'intermediate', 'published', 'b0000000-0000-0000-0000-000000000003', now()),
('e0000000-0000-0000-0000-000000000004', 'c0000000-0000-0000-0000-000000000004', 3, 'My Village Animals and Their Sounds', 'village-animals-sounds', 'Learn English words and pronunciations for domestic and wild animals in our surroundings.', 10, 'beginner', 'published', 'b0000000-0000-0000-0000-000000000003', now()),
('e0000000-0000-0000-0000-000000000005', 'c0000000-0000-0000-0000-000000000001', 2, 'Counting & Grouping with Neem Seeds', 'counting-neem-seeds', 'Count up to 50 in bundles of tens and units using dry seeds and pebbles.', 10, 'beginner', 'published', 'b0000000-0000-0000-0000-000000000003', now()),
('e0000000-0000-0000-0000-000000000006', 'c0000000-0000-0000-0000-000000000006', 6, 'Our Panchayati Raj: How Village Governance Works', 'village-panchayat-governance', 'Understand the Gram Sabha, the Sarpanch, and how villagers resolve community issues.', 20, 'intermediate', 'submitted', 'b0000000-0000-0000-0000-000000000002', NULL)
ON CONFLICT (id) DO NOTHING;

-- Sample Achievements
INSERT INTO achievements (id, code, title, description, icon) VALUES
('f0000000-0000-0000-0000-000000000001', 'FIRST_STEP', 'First Step on the Bridge', 'Completed your first VidyaSetu lesson!', 'award'),
('f0000000-0000-0000-0000-000000000002', 'MATH_WIZARD', 'Village Math Explorer', 'Scored 100% on a Mathematics quiz', 'calculator'),
('f0000000-0000-0000-0000-000000000003', 'ECO_CHAMPION', 'Green Sprout Guardian', 'Mastered the Water Cycle and Eco-Sorter game', 'leaf'),
('f0000000-0000-0000-0000-000000000004', 'OFFLINE_CHAMP', 'Offline Learner', 'Downloaded 2 lessons and studied without internet', 'download-cloud')
ON CONFLICT (id) DO NOTHING;

-- Initial Audit Log
INSERT INTO audit_logs (id, actor_id, action, target_entity, target_id, details) VALUES
('10000000-0000-0000-0000-000000000001', 'b0000000-0000-0000-0000-000000000001', 'SEED_PLATFORM', 'system', NULL, '{"message": "Initialized VidyaSetu foundational curriculum data"}'::jsonb)
ON CONFLICT (id) DO NOTHING;
