// VidyaSetu Student Learning Portal & Dashboard
import { i18n } from '../i18n/i18n.js';
import { authService } from '../services/auth.service.js';
import { lessonRepository } from '../repositories/lesson.repository.js';
import { cacheManager } from '../offline/cache-manager.js';
import { sampleSubjects, sampleAchievements } from '../data/sample-data.js';
import { toast } from '../components/toast.js';

export async function renderStudentDashboard() {
  const user = authService.getCurrentUser() || { name: 'Aarav Gowda', grade_level: 4, stars: 45 };
  const currentGrade = user.grade_level || 4;
  const currentLang = i18n.getCurrentLanguage();

  // Load lessons for current grade
  const lessons = await lessonRepository.filterLessons({
    gradeLevel: currentGrade,
    status: 'published'
  });

  const downloadedLessons = await cacheManager.getDownloadedLessons();
  const completedIds = JSON.parse(localStorage.getItem('vidyasetu_completed_quizzes') || '[]');

  // Active / Continue lesson
  const continueLesson = lessons[0] || null;

  return `
    <div class="student-dashboard container" style="padding-top: var(--spacing-8); padding-bottom: var(--spacing-16);">
      <!-- Greeting Header & Stats Bar -->
      <div class="card" style="margin-bottom: var(--spacing-8); background: linear-gradient(135deg, var(--color-surface) 0%, #E6F4ED 100%); border: 2px solid #c7e3d6;">
        <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: var(--spacing-4);">
          <div>
            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
              <span style="font-size: 28px;">👦</span>
              <h2>Namaste, ${user.name}!</h2>
            </div>
            <p style="color: var(--color-text-muted);">
              Welcome to your digital learning desk. Currently exploring <strong>Class ${currentGrade}</strong> curriculum.
            </p>
          </div>

          <!-- Quick Badges: Stars & Class Pill -->
          <div style="display: flex; align-items: center; gap: var(--spacing-4);">
            <div style="background: white; border: 1px solid var(--color-accent); padding: 8px 18px; border-radius: var(--radius-full); display: flex; align-items: center; gap: 8px; box-shadow: var(--shadow-sm);">
              <span style="font-size: 20px;">⭐</span>
              <span style="font-size: var(--font-size-lg); font-weight: var(--font-weight-heavy); color: #B45309;" id="student-stars-badge">${user.stars || 45}</span>
              <span style="font-size: var(--font-size-xs); color: var(--color-text-muted); font-weight: 600;">Stars Earned</span>
            </div>

            <div style="background: white; border: 1px solid var(--color-primary-light); padding: 8px 16px; border-radius: var(--radius-full); font-size: var(--font-size-sm); font-weight: var(--font-weight-bold); color: var(--color-primary);">
              Class ${currentGrade}
            </div>
          </div>
        </div>

        <!-- Class 1 to 8 Selector Pills -->
        <div style="margin-top: var(--spacing-6); border-top: 1px solid var(--color-border); padding-top: var(--spacing-4);">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
            <span style="font-size: var(--font-size-xs); font-weight: var(--font-weight-bold); color: var(--color-text-muted); text-transform: uppercase; letter-spacing: 0.05em;">
              ${i18n.t('class_select_title')}
            </span>
            <span style="font-size: var(--font-size-xs); color: var(--color-text-light);">
              Tap to switch grade level (Classes 1–8)
            </span>
          </div>

          <div class="class-selector-bar" id="student-class-selector">
            ${[1, 2, 3, 4, 5, 6, 7, 8].map(g => `
              <button class="class-pill ${g === currentGrade ? 'active' : ''}" data-grade="${g}">
                ${i18n.t('class_prefix')} ${g}
              </button>
            `).join('')}
          </div>
        </div>
      </div>

      <!-- Continue Learning & Daily Challenge Grid -->
      <div style="display: grid; grid-template-columns: 1.3fr 0.7fr; gap: var(--spacing-6); margin-bottom: var(--spacing-10);" class="hero-grid">
        <!-- Continue Learning Card -->
        ${continueLesson ? `
          <div class="card card-interactive" style="border-left: 6px solid var(--color-primary);">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px;">
              <span class="badge badge-primary">📌 Continue Learning</span>
              <span class="badge badge-accent">⏱️ ${continueLesson.estimated_minutes} ${i18n.t('badge_minutes')}</span>
            </div>
            <h3 style="margin-bottom: 8px;">${getLocalizedTitle(continueLesson, currentLang)}</h3>
            <p style="font-size: var(--font-size-sm); color: var(--color-text-muted); margin-bottom: var(--spacing-4);">
              ${getLocalizedSummary(continueLesson, currentLang)}
            </p>
            <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px;">
              <div style="display: flex; align-items: center; gap: 8px;">
                <span class="badge">${continueLesson.subject_name}</span>
                ${continueLesson.is_downloaded ? '<span class="badge badge-success">✓ Saved Offline</span>' : ''}
              </div>
              <a href="#/lesson/${continueLesson.id}" class="btn btn-primary btn-sm">
                ▶ Resume Lesson
              </a>
            </div>
          </div>
        ` : `
          <div class="card">
            <h4>No lesson in progress</h4>
            <p>Pick a lesson from the library below to start learning!</p>
          </div>
        `}

        <!-- Daily Practice / Star Challenge -->
        <div class="card" style="background: linear-gradient(135deg, #FFFBEB 0%, #FEF3C7 100%); border-color: #FCD34D;">
          <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 10px;">
            <span style="font-size: 24px;">🎯</span>
            <h4 style="color: #92400E;">Daily Village Challenge</h4>
          </div>
          <p style="font-size: var(--font-size-sm); color: #B45309; line-height: 1.5; margin-bottom: 16px;">
            Solve the <strong>Number Bridge</strong> puzzle or complete a Science activity today to earn +5 bonus stars!
          </p>
          <a href="#/games" class="btn btn-accent btn-sm" style="width: 100%;">
            🎮 Play Daily Game
          </a>
        </div>
      </div>

      <!-- Subject Filter Tabs -->
      <div style="margin-bottom: var(--spacing-8);">
        <h3 style="margin-bottom: var(--spacing-4);">${i18n.t('nav_subjects')}</h3>
        <div class="grid-subjects" id="subject-filter-grid">
          ${sampleSubjects.map(sub => `
            <div class="subject-card ${sub.id === 'all' ? 'active' : ''}" data-subject="${sub.id}">
              <div class="subject-icon-box">
                ${getSubjectEmoji(sub.id)}
              </div>
              <div class="subject-title">${sub.name}</div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Lesson Library Section -->
      <div style="margin-bottom: var(--spacing-12);">
        <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 16px; margin-bottom: var(--spacing-6);">
          <div>
            <h3>Lessons for Class ${currentGrade}</h3>
            <p style="font-size: var(--font-size-sm); color: var(--color-text-muted);">
              Showing interactive activity-based lessons suitable for this class.
            </p>
          </div>

          <!-- Search & Filters -->
          <div style="display: flex; gap: 10px; flex-wrap: wrap;">
            <input type="text" id="lesson-search-input" placeholder="${i18n.t('filter_search_placeholder')}" class="card" style="padding: 8px 16px; font-size: var(--font-size-sm); min-width: 240px; border-radius: var(--radius-md);" />
            <select id="lesson-diff-filter" class="card" style="padding: 8px 12px; font-size: var(--font-size-sm); border-radius: var(--radius-md);">
              <option value="all">${i18n.t('filter_difficulty_all')}</option>
              <option value="beginner">${i18n.t('filter_beginner')}</option>
              <option value="intermediate">${i18n.t('filter_intermediate')}</option>
              <option value="advanced">${i18n.t('filter_advanced')}</option>
            </select>
          </div>
        </div>

        <!-- Lessons Grid Container -->
        <div class="grid-cards" id="lessons-grid-container">
          ${renderLessonCards(lessons, currentLang, completedIds)}
        </div>
      </div>

      <!-- Achievements & Badges Earned -->
      <div class="card" style="margin-top: var(--spacing-10);">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--spacing-6);">
          <div>
            <h3>Badges & Milestones</h3>
            <p style="font-size: var(--font-size-sm); color: var(--color-text-muted);">
              Encouraging milestones celebrating hard work and curiosity.
            </p>
          </div>
          <span class="badge badge-accent">⭐ 3 Unlocked</span>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: var(--spacing-4);">
          ${sampleAchievements.map(ach => `
            <div style="padding: var(--spacing-4); border-radius: var(--radius-md); border: 1px solid ${ach.unlocked ? '#A7F3D0' : 'var(--color-border)'}; background: ${ach.unlocked ? '#F0FDF4' : 'var(--color-surface-hover)'}; display: flex; flex-direction: column; align-items: center; text-align: center;">
              <span style="font-size: 32px; margin-bottom: 8px; filter: ${ach.unlocked ? 'none' : 'grayscale(100%) opacity(0.5)'};">
                ${ach.icon}
              </span>
              <strong style="font-size: var(--font-size-sm); margin-bottom: 4px; color: ${ach.unlocked ? 'var(--color-text)' : 'var(--color-text-muted)'};">
                ${ach.title}
              </strong>
              <p style="font-size: var(--font-size-xs); color: var(--color-text-muted); line-height: 1.4;">
                ${ach.desc}
              </p>
              <span class="badge ${ach.unlocked ? 'badge-success' : ''}" style="margin-top: 8px; font-size: 10px;">
                ${ach.unlocked ? 'Unlocked ✓' : 'In Progress'}
              </span>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

function renderLessonCards(lessons, currentLang, completedIds) {
  if (!lessons || lessons.length === 0) {
    return `
      <div style="grid-column: 1 / -1; text-align: center; padding: 48px 16px; background: white; border-radius: var(--radius-lg); border: 2px dashed var(--color-border);">
        <div style="font-size: 40px; margin-bottom: 12px;">📚</div>
        <h4>No lessons match your current filters</h4>
        <p style="color: var(--color-text-muted); font-size: var(--font-size-sm);">
          Try selecting "All Subjects" or choosing a different class grade above.
        </p>
      </div>
    `;
  }

  return lessons.map(lesson => {
    const isCompleted = completedIds.includes(lesson.id);
    const title = getLocalizedTitle(lesson, currentLang);
    const summary = getLocalizedSummary(lesson, currentLang);

    return `
      <div class="lesson-card card-interactive" data-lesson-id="${lesson.id}">
        <div class="lesson-card-header" style="background: linear-gradient(135deg, ${lesson.cover_color || '#176B55'}, #0F4A3A);">
          <span class="lesson-card-badge">Class ${lesson.grade_level} • ${lesson.subject_name}</span>
          ${lesson.is_downloaded ? `
            <span class="lesson-offline-tag" title="Saved locally on device">
              📥 Offline
            </span>
          ` : ''}
          <div style="position: absolute; bottom: 12px; right: 12px; font-size: 28px; opacity: 0.9;">
            ${getSubjectEmoji(lesson.subject_id)}
          </div>
        </div>

        <div class="lesson-card-body">
          <div class="lesson-card-title">${title}</div>
          <div class="lesson-card-desc">${summary}</div>

          <div style="display: flex; gap: 8px; margin-bottom: 14px; flex-wrap: wrap;">
            <span class="badge">${lesson.difficulty_level}</span>
            <span class="badge">⏱️ ${lesson.estimated_minutes} mins</span>
            ${isCompleted ? '<span class="badge badge-success">✓ Completed</span>' : ''}
          </div>

          <div style="display: flex; gap: 8px; margin-top: auto;">
            <a href="#/lesson/${lesson.id}" class="btn btn-primary btn-sm" style="flex: 1;">
              ${isCompleted ? 'Review Lesson' : 'Start Lesson'}
            </a>
            <button class="btn btn-outline btn-sm btn-download-toggle" data-id="${lesson.id}" title="${lesson.is_downloaded ? 'Remove offline copy' : 'Download for offline'}" style="padding: 0 10px;">
              ${lesson.is_downloaded ? '✓ Saved' : '📥'}
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

export function setupStudentDashboardEvents() {
  const currentLang = i18n.getCurrentLanguage();
  let activeSubject = 'all';
  let activeDifficulty = 'all';
  let searchQuery = '';
  const completedIds = JSON.parse(localStorage.getItem('vidyasetu_completed_quizzes') || '[]');

  async function updateFilteredLessons() {
    const user = authService.getCurrentUser();
    const grade = user?.grade_level || 4;

    const filtered = await lessonRepository.filterLessons({
      gradeLevel: grade,
      subjectId: activeSubject,
      difficulty: activeDifficulty,
      searchQuery,
      status: 'published'
    });

    const grid = document.getElementById('lessons-grid-container');
    if (grid) {
      grid.innerHTML = renderLessonCards(filtered, currentLang, completedIds);
      bindDownloadButtons();
    }
  }

  // 1. Class Pill Selector
  document.querySelectorAll('#student-class-selector .class-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      const g = btn.getAttribute('data-grade');
      authService.setGradeLevel(g);
      document.querySelectorAll('#student-class-selector .class-pill').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      toast.info(`Switched to Class ${g}`);
      updateFilteredLessons();
    });
  });

  // 2. Subject Filter Cards
  document.querySelectorAll('#subject-filter-grid .subject-card').forEach(card => {
    card.addEventListener('click', () => {
      const sub = card.getAttribute('data-subject');
      activeSubject = sub;
      document.querySelectorAll('#subject-filter-grid .subject-card').forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      updateFilteredLessons();
    });
  });

  // 3. Search Bar
  const searchInput = document.getElementById('lesson-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      updateFilteredLessons();
    });
  }

  // 4. Difficulty dropdown
  const diffSelect = document.getElementById('lesson-diff-filter');
  if (diffSelect) {
    diffSelect.addEventListener('change', (e) => {
      activeDifficulty = e.target.value;
      updateFilteredLessons();
    });
  }

  // 5. Offline Download Toggle Buttons
  function bindDownloadButtons() {
    document.querySelectorAll('.btn-download-toggle').forEach(btn => {
      btn.addEventListener('click', async (e) => {
        e.stopPropagation();
        const id = btn.getAttribute('data-id');
        const lesson = await lessonRepository.getLessonById(id);
        if (!lesson) return;

        if (lesson.is_downloaded) {
          await cacheManager.removeLesson(id);
          toast.info(`Removed offline copy of "${lesson.title}"`);
        } else {
          await cacheManager.downloadLesson(lesson);
          toast.success(`Downloaded "${lesson.title}" for offline learning!`);
        }
        updateFilteredLessons();
      });
    });
  }

  bindDownloadButtons();
}

function getLocalizedTitle(lesson, lang) {
  if (lang !== 'en' && lesson.translations && lesson.translations[lang]?.title) {
    return lesson.translations[lang].title;
  }
  return lesson.title;
}

function getLocalizedSummary(lesson, lang) {
  if (lang !== 'en' && lesson.translations && lesson.translations[lang]?.summary) {
    return lesson.translations[lang].summary;
  }
  return lesson.summary;
}

function getSubjectEmoji(subjectId) {
  const map = { math: '📐', evs: '🌱', sci: '🔬', eng: '🔤', reg: '📚', soc: '🌍', all: '🗂️' };
  return map[subjectId] || '📖';
}
