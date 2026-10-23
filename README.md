# VidyaSetu — Multilingual Digital Learning Platform for Rural Government Schools

> **“Bridging Villages Through Learning.”**

VidyaSetu is a modern, responsive, accessible, offline-first digital learning platform designed specifically for students in **Classes 1–8** and educators in rural government and small-village schools across India.

---

## 1. Visual Identity & Design System

- **Brand Name:** VidyaSetu
- **Tagline:** “Bridging Villages Through Learning”
- **Logo Concept:** An open book forming an archway bridge, with a rising sun and sprout symbolizing growth and opportunity.
- **Color Palette:**
  - **Primary Forest Green:** `#176B55` (stability, learning, growth)
  - **Secondary Mint Green:** `#E6F4ED` (approachable, high readability)
  - **Warm Saffron Accent:** `#F2B84B` (celebration, energy, milestones)
  - **Off-White Warm Background:** `#FBFAF6` (reduces eye strain on low-cost screens)
  - **Dark Slate-Green Text:** `#20332E` (WCAG 2.2 AA compliant contrast)
- **Typography:** Outfit / Inter with `Noto Sans` fallback for Indian regional scripts.
- **Accessibility:** Minimum touch targets of 48px, visible focus outlines, high-contrast text, screen-reader landmarks, and reduced-motion support.

---

## 2. Core Modules & Portals

### 🌟 Public Homepage & Landing Page (`#/home`)
- **Hero Section:** “Big Dreams Begin with Small Steps.” Supporting text and custom SVG book-bridge illustration.
- **Curriculum Overview:** Mathematics, Science, Environmental Studies (EVS), English, Regional Languages, Social Studies.
- **Interactive Demonstrations:** Multilingual audio read-aloud test, step-by-step workflow, and offline mode demonstration.
- **Teacher & Classroom Benefits:** Multi-grade support, difficulty alerts, and classroom teaching pack downloads.

### 👦 Student Learning Portal (`#/student`)
- **Class 1 to 8 Selector:** Switch grades instantly with one click.
- **Personalized Greeting:** Tracks stars earned (⭐) and active learning streak.
- **Lesson Library:** Filter by subject, difficulty, and offline-downloaded status.
- **One-Tap Offline Download:** Cache lessons into device storage for offline use.
- **Achievements Shelf:** Unlocks badges like *First Step on the Bridge*, *Village Math Explorer*, and *Green Sprout Guardian*.

### 📖 Interactive Lesson Player (`#/lesson/:id`)
- **Step-by-Step Flow:**
  1. **Concept Cards:** Visual illustrations and village-grounded explanations.
  2. **Worked Examples:** Real-world examples (e.g. sharing chapatis, counting neem seeds).
  3. **Read-Aloud Narration:** Built-in speech synthesis across languages (`🔊 Read Aloud`).
  4. **Interactive Practice:** Matching pairs and picture-choice activities.
  5. **Instant-Feedback Quiz:** Positive cheering feedback for correct answers; helpful hints and retry chances for incorrect answers.
  6. **Lesson Summary Screen:** Score percentage, stars awarded, mastered concepts, and revision advice.
  - *No fake completions:* Lessons are marked completed only when the quiz is evaluated.

### 🎮 Educational Games Section (`#/games`)
1. **Number Bridge:** Counting and number sequence stepping-stone puzzle.
2. **Eco-Sorter:** Environmental studies game sorting wet compost vs. recyclable dry waste.
3. **Multilingual Memory Match:** Flip-card matching of regional words and pictures.
4. **Speed Math Challenge:** Quick mental arithmetic with encouraging praise.

### 👨‍🏫 Teacher Portal (`#/teacher`)
- **Classroom Overview:** Assigned classes (e.g., Class 4A, 5A), student attendance, and completion statistics.
- **Difficulty Alerts:** Automatic detection of concepts where multiple students struggled.
- **Assignment Manager:** Assign lessons with due dates.
- **Export Classroom Report:** Generates formatted CSV download for headmasters and parents.
- **Offline Classroom Pack:** Bundle all class lessons for offline classroom projector/tablet.

### 👩‍💼 Supervised Content Management & Admin Portal (`#/admin`)
- **Supervised Lifecycle Pipeline:**
  $$\text{Draft} \longrightarrow \text{Submitted for Review} \longrightarrow \text{Approved} \longrightarrow \text{Published}$$
  *(Rejected content returns to Draft with reviewer feedback).*
- **Content Creation Modal:** Create drafts with grade level (1–8), subject, concept cards, and quiz questions.
- **Approval & Publishing Controls:** Only authorized Content Editors and Administrators can approve and publish live lessons.
- **School & Class Records:** Manage rural government school codes, districts, and memberships.
- **Immutable Audit Logs:** Real-time log of administrative actions, reviews, and releases.

### 📥 Offline Download Shelf (`#/offline`)
- View all locally cached lessons stored in IndexedDB.
- Check device storage usage.
- Review pending synchronization events with retry status.
- One-click **Sync All Local Progress**.

---

## 3. Technology Stack & Architecture

- **Frontend:**
  - Vanilla HTML5 semantic structure
  - CSS3 with custom design tokens (`tokens.css`, `global.css`, `components.css`, `responsive.css`)
  - Modular JavaScript ES Modules (`src/js/`)
  - Vite v6 for bundling, development server, and production builds
  - Progressive Web App (PWA) with `manifest.json` and `service-worker.js`
- **Offline Storage:**
  - **Service Worker:** Application shell caching with versioned invalidation (`vidyasetu-v1.0.0`)
  - **IndexedDB (`VidyaSetuOfflineDB`):** Downloaded lesson packs, quiz attempts, progress, and sync event queue.
  - **Sync Manager:** Detects `online`/`offline` events, manages retry counters, and synchronizes queue.
- **Backend & Database:**
  - **Supabase (PostgreSQL):** 23 normalized tables with foreign keys, indexes, timestamps, constraints, and Row-Level Security (RLS) policies.
  - **Local Educational Offline Mode:** If Supabase credentials are not present in `.env`, the app automatically activates high-fidelity local mode using IndexedDB, clearly marked with an informative status badge.

---

## 4. Database Architecture (Supabase PostgreSQL)

All 23 normalized tables are defined in `supabase/migrations/20261023000000_create_vidyasetu_schema.sql`:

1. `schools`
2. `profiles`
3. `school_memberships`
4. `classes`
5. `subjects`
6. `languages`
7. `lessons`
8. `lesson_translations`
9. `lesson_sections`
10. `activities`
11. `questions`
12. `question_options`
13. `content_reviews`
14. `assignments`
15. `assignment_students`
16. `quiz_attempts`
17. `quiz_answers`
18. `lesson_progress`
19. `achievements`
20. `student_achievements`
21. `bookmarks`
22. `offline_sync_events`
23. `audit_logs`

### Row Level Security (RLS) Policies
Defined in `supabase/migrations/20261023000001_create_rls_policies.sql`:
- **Students:** Can read published lessons suitable for their grade; read and write only their own progress and quiz attempts.
- **Teachers:** Can access only classes and students for which they have authorization; create lesson drafts.
- **Content Editors & Admins:** Review drafts, approve/reject lessons, and manage curriculum metadata.
- **Audit Logs:** System insertable; accessible only by Administrators.

---

## 5. Local Setup & Execution

### Prerequisites
- Node.js (v18+)
- npm (v9+)

### Installation
```bash
# Clone or open workspace
cd VidyaSetu

# Install dependencies
npm install
```

### Running Locally
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Running Automated Tests
```bash
npm test
```
Runs 18 unit and integration tests across 5 test suites (i18n, lesson filtering, quiz scoring, content workflow, offline sync).

### Production Build
```bash
npm run build
npm run preview
```

---

## 6. Environment Configuration

Create a `.env` file in the root directory (based on `.env.example`):
```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-publishable-anon-key
```
*Note: If left empty, VidyaSetu seamlessly operates in Local Educational Offline Mode.*

---

## 7. Child Privacy & Data Protection

- **Minimal Data Collection:** No collection of birth dates, precise GPS locations, phone numbers, or photographs.
- **Zero Ads & Trackers:** No third-party marketing or tracking scripts.
- **Role Isolation:** Private student scores are not publicly visible or shared across students.
- **Teacher-Supervised:** Accounts are organized around school enrollments.
