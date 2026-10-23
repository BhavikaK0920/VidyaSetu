-- VidyaSetu Seed Data
-- Multilingual Digital Learning Platform for Rural Government Schools
-- Provides realistic sample schools, teachers, students, lessons across Classes 1 to 8

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

-- Sample Lessons for Classes 1 to 8
INSERT INTO lessons (id, subject_id, grade_level, title, slug, summary, estimated_minutes, difficulty_level, status, created_by, published_at) VALUES
('e0000000-0000-0000-0000-000000000010', 'c0000000-0000-0000-0000-000000000001', 1, 'Fun Counting 1 to 10 with Tamarind Seeds & Marbles', 'counting-1-to-10-seeds-marbles', 'Learn to count numbers from 1 to 10 using shiny seeds and marbles.', 10, 'beginner', 'published', 'b0000000-0000-0000-0000-000000000003', now()),
('e0000000-0000-0000-0000-000000000005', 'c0000000-0000-0000-0000-000000000001', 2, 'Counting in Bundles of Tens with Neem Twigs', 'counting-tens-neem-twigs', 'Master place value by bundling 10 twigs into one ten to count up to 50 easily.', 12, 'beginner', 'published', 'b0000000-0000-0000-0000-000000000003', now()),
('e0000000-0000-0000-0000-000000000004', 'c0000000-0000-0000-0000-000000000004', 3, 'My Village Animals and Their Sounds', 'village-animals-sounds', 'Learn English words and pronunciations for domestic and wild animals in our surroundings.', 10, 'beginner', 'published', 'b0000000-0000-0000-0000-000000000003', now()),
('e0000000-0000-0000-0000-000000000001', 'c0000000-0000-0000-0000-000000000001', 4, 'Understanding Fractions with Chapati & Mangoes', 'fractions-chapati-mangoes', 'Learn half (1/2), one-third (1/3), and quarter (1/4) using everyday village examples.', 15, 'beginner', 'published', 'b0000000-0000-0000-0000-000000000003', now()),
('e0000000-0000-0000-0000-000000000002', 'c0000000-0000-0000-0000-000000000002', 4, 'The Journey of Water: Our Village Tank to Rain', 'journey-of-water-village-tank', 'Discover how water evaporates, forms clouds, and returns as life-giving monsoon rain.', 12, 'beginner', 'published', 'b0000000-0000-0000-0000-000000000003', now()),
('e0000000-0000-0000-0000-000000000003', 'c0000000-0000-0000-0000-000000000003', 5, 'Parts of a Plant and Seed Germination', 'plant-parts-germination', 'Hands-on discovery of roots, stems, leaves, flowers, and how a seed wakes up with water.', 18, 'intermediate', 'published', 'b0000000-0000-0000-0000-000000000003', now()),
('e0000000-0000-0000-0000-000000000006', 'c0000000-0000-0000-0000-000000000006', 6, 'Our Panchayati Raj: How Village Governance Works', 'village-panchayat-governance', 'Understand the Gram Sabha, the Sarpanch, and how villagers resolve community issues.', 20, 'intermediate', 'published', 'b0000000-0000-0000-0000-000000000002', now()),
('e0000000-0000-0000-0000-000000000011', 'c0000000-0000-0000-0000-000000000003', 7, 'Nutrition in Animals: How Cattle Digest Tough Grass', 'nutrition-animals-cattle-digestion', 'Study the four-chambered stomach of ruminants and cud chewing.', 20, 'intermediate', 'published', 'b0000000-0000-0000-0000-000000000003', now()),
('e0000000-0000-0000-0000-000000000012', 'c0000000-0000-0000-0000-000000000003', 8, 'Crop Production & Modern Sustainable Agriculture', 'crop-production-sustainable-agriculture', 'Explore Kharif vs Rabi seasons, soil preparation, and drip irrigation.', 22, 'advanced', 'published', 'b0000000-0000-0000-0000-000000000003', now()),
('e0000000-0000-0000-0000-000000000013', 'c0000000-0000-0000-0000-000000000006', 8, 'The Indian Constitution & Right to Education (RTE)', 'indian-constitution-right-to-education', 'Understand Article 21A, fundamental rights, and free compulsory education.', 20, 'advanced', 'published', 'b0000000-0000-0000-0000-000000000003', now())
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
('10000000-0000-0000-0000-000000000001', 'b0000000-0000-0000-0000-000000000001', 'SEED_PLATFORM', 'system', NULL, '{"message": "Initialized VidyaSetu foundational curriculum data across Classes 1-8"}'::jsonb)
ON CONFLICT (id) DO NOTHING;
