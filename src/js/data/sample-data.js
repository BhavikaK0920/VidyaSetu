// VidyaSetu Master Data & Roles

export const sampleSchools = [
  {
    id: 'school-1',
    code: 'KA-SHIV-01',
    name: 'Govt Higher Primary School',
    village: 'Shivapura',
    district: 'Mandya',
    state: 'Karnataka',
    pin_code: '571401'
  }
];

export const sampleSubjects = [
  { id: 'all', code: 'ALL', name: 'All Subjects', icon: 'grid', color: '#176B55' },
  { id: 'math', code: 'MATH', name: 'Mathematics', icon: 'calculator', color: '#176B55' },
  { id: 'evs', code: 'EVS', name: 'Environmental Studies', icon: 'leaf', color: '#2A8B5B' },
  { id: 'sci', code: 'SCI', name: 'Science', icon: 'flask-conical', color: '#1D7873' },
  { id: 'eng', code: 'ENG', name: 'English & Vocabulary', icon: 'languages', color: '#D97706' },
  { id: 'reg', code: 'REG', name: 'Regional Languages', icon: 'book-open', color: '#7C3AED' },
  { id: 'soc', code: 'SOC', name: 'Social Studies', icon: 'globe', color: '#EA580C' }
];

export const sampleUsers = [
  {
    id: 'user-student-1',
    role: 'student',
    name: 'Aarav Gowda',
    grade_level: 4,
    school_name: 'Govt Higher Primary School, Shivapura',
    preferred_lang: 'kn',
    stars: 45,
    avatar: '👦'
  },
  {
    id: 'user-teacher-1',
    role: 'teacher',
    name: 'Master Suresh Kumar',
    school_name: 'Govt Higher Primary School, Shivapura',
    assigned_classes: [3, 4, 5],
    avatar: '👨‍🏫'
  },
  {
    id: 'user-admin-1',
    role: 'admin',
    name: 'Smt. Rajeshwari Patil (BEO / Headmistress)',
    school_name: 'District Education Office, Mandya',
    avatar: '👩‍💼'
  }
];

export const sampleAchievements = [
  { id: 'ach-1', code: 'FIRST_STEP', title: 'First Bridge Step', desc: 'Completed your first VidyaSetu lesson!', icon: '🌱', unlocked: true },
  { id: 'ach-2', code: 'MATH_EXPLORER', title: 'Village Math Explorer', desc: 'Scored 100% on Fractions or Counting', icon: '⭐', unlocked: true },
  { id: 'ach-3', code: 'ECO_CHAMPION', title: 'Green Sprout Guardian', desc: 'Finished The Journey of Water with 3 stars', icon: '💧', unlocked: true },
  { id: 'ach-4', code: 'OFFLINE_HERO', title: 'Offline Champion', desc: 'Downloaded 2 lessons for zero-internet learning', icon: '📥', unlocked: false },
  { id: 'ach-5', code: 'PUZZLE_MASTER', title: 'Puzzle Master', desc: 'Cleared the Number Bridge & Eco-Sorter games', icon: '🏆', unlocked: false }
];

export const sampleClassroomData = {
  class_id: 'class-4a',
  grade: 4,
  section: 'A',
  enrolled_count: 28,
  active_today: 24,
  average_quiz_score: 82,
  completion_rate: 79,
  students: [
    { id: 's1', name: 'Aarav Gowda', completed_lessons: 4, avg_score: 95, stars: 45, status: 'On Track' },
    { id: 's2', name: 'Pooja Nayak', completed_lessons: 3, avg_score: 88, stars: 30, status: 'On Track' },
    { id: 's3', name: 'Kiran Basappa', completed_lessons: 2, avg_score: 65, stars: 20, status: 'Needs Revision in Fractions' },
    { id: 's4', name: 'Meena Reddy', completed_lessons: 4, avg_score: 92, stars: 40, status: 'On Track' },
    { id: 's5', name: 'Basavaraj Hiremath', completed_lessons: 1, avg_score: 55, stars: 10, status: 'Needs Revision' },
    { id: 's6', name: 'Lakshmi Bai', completed_lessons: 3, avg_score: 84, stars: 32, status: 'On Track' }
  ],
  difficult_concepts: [
    { topic: 'Fractions (Equivalent parts 2/4 vs 1/2)', student_count_struggled: 7 },
    { topic: 'Water Cycle: Condensation vs Evaporation', student_count_struggled: 4 }
  ]
};
