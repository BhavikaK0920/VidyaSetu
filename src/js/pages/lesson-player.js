// VidyaSetu Interactive Lesson Player
// Full Multilingual Support across Concept Cards, Step-by-Step Worked Examples,
// Audio Read-Aloud, Interactive Matching, and Instant-Feedback Quizzes

import { i18n } from '../i18n/i18n.js';
import { lessonRepository } from '../repositories/lesson.repository.js';
import { quizService } from '../services/quiz.service.js';
import { audioService } from '../services/audio.service.js';
import { cacheManager } from '../offline/cache-manager.js';
import { getLocalizedLesson } from '../utils/localization.js';
import { toast } from '../components/toast.js';

export async function renderLessonPlayer(lessonId) {
  const baseLesson = await lessonRepository.getLessonById(lessonId);
  const currentLang = i18n.getCurrentLanguage();
  const languages = i18n.getAvailableLanguages();

  if (!baseLesson) {
    return `
      <div class="container" style="padding: 60px 16px; text-align: center;">
        <div style="font-size: 48px; margin-bottom: 16px;">🔍</div>
        <h2>Lesson Not Found</h2>
        <p style="color: var(--color-text-muted); margin-bottom: 24px;">The requested lesson could not be loaded or has not been published yet.</p>
        <a href="#/student" class="btn btn-primary">Return to Student Dashboard</a>
      </div>
    `;
  }

  const lesson = getLocalizedLesson(baseLesson, currentLang);
  const sections = lesson.sections || [];
  const hasInteractiveActivity = Boolean(lesson.interactive_activity);
  const quizQuestions = lesson.quiz || [];
  const totalSteps = sections.length + (hasInteractiveActivity ? 1 : 0) + quizQuestions.length;

  return `
    <div class="lesson-player-page container" style="padding-top: var(--spacing-6); padding-bottom: var(--spacing-16);">
      <!-- Top Navigation & Language Selector Bar -->
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--spacing-4); flex-wrap: wrap; gap: 12px;">
        <a href="#/student" class="btn btn-outline btn-sm" id="btn-exit-lesson">
          ← ${i18n.t('nav_student')}
        </a>

        <div style="display: flex; align-items: center; gap: 10px; flex-wrap: wrap;">
          <!-- In-Player Language Switcher -->
          <div class="lang-selector-wrap" style="display: flex; align-items: center; gap: 6px;">
            <span style="font-size: var(--font-size-xs); font-weight: bold; color: var(--color-text-muted);">🗣️ Language:</span>
            <select class="lang-select" id="player-lang-selector" aria-label="Lesson Language" style="font-size: 13px; padding: 6px 28px 6px 12px;">
              ${languages.map(l => `
                <option value="${l.code}" ${l.code === currentLang ? 'selected' : ''}>
                  ${l.native} (${l.name})
                </option>
              `).join('')}
            </select>
            <span class="lang-select-arrow" style="right: 8px;">▼</span>
          </div>

          <span class="badge badge-primary">Class ${lesson.grade_level}</span>
          <span class="badge">${lesson.subject_name}</span>
          ${lesson.is_downloaded ? '<span class="badge badge-success">📥 Offline Ready</span>' : ''}
        </div>
      </div>

      <!-- Main Interactive Player Card -->
      <div class="lesson-player-container" id="player-container" data-lesson-id="${lesson.id}">
        <!-- Header -->
        <div class="player-header">
          <div style="flex: 1; margin-right: 16px;">
            <div style="font-size: var(--font-size-xs); color: var(--color-primary-dark); font-weight: bold; margin-bottom: 2px;">
              STEP <span id="current-step-display">1</span> OF ${totalSteps}
            </div>
            <h3 id="player-lesson-title" style="font-size: var(--font-size-xl); margin-bottom: 6px; color: var(--color-text);">
              ${lesson.title}
            </h3>
            <!-- Progress Bar -->
            <div class="progress-bar-wrap" style="height: 6px;">
              <div class="progress-bar-fill" id="player-progress-fill" style="width: ${(1 / totalSteps) * 100}%;"></div>
            </div>
          </div>

          <!-- Audio Read-Aloud Button -->
          <button class="btn-audio" id="btn-read-aloud" title="Listen to pronunciation & narration in your language">
            🔊 <span id="audio-btn-text">${i18n.t('btn_listen_audio')}</span>
          </button>
        </div>

        <!-- Dynamic Body -->
        <div class="player-body" id="player-body-content">
          <!-- Step content dynamically rendered here -->
        </div>

        <!-- Footer Navigation -->
        <div class="player-footer">
          <button class="btn btn-outline" id="btn-player-prev" disabled>
            ← ${i18n.t('btn_previous')}
          </button>

          <div id="step-hint-text" style="font-size: var(--font-size-xs); color: var(--color-text-muted);">
            Explore and interact before proceeding
          </div>

          <button class="btn btn-primary" id="btn-player-next">
            ${i18n.t('btn_next')} →
          </button>
        </div>
      </div>
    </div>
  `;
}

export function setupLessonPlayerEvents(lessonId) {
  let rawLesson = null;
  let localizedLesson = null;
  let currentStepIndex = 0;
  let totalSteps = 1;
  const userAnswers = []; // stores { questionId, selectedOptionId }
  let matchingState = { selectedLeft: null, completedPairs: new Set() };
  let currentLang = i18n.getCurrentLanguage();

  const bodyEl = document.getElementById('player-body-content');
  const prevBtn = document.getElementById('btn-player-prev');
  const nextBtn = document.getElementById('btn-player-next');
  const stepDisplay = document.getElementById('current-step-display');
  const progressFill = document.getElementById('player-progress-fill');
  const readAloudBtn = document.getElementById('btn-read-aloud');
  const hintText = document.getElementById('step-hint-text');
  const titleEl = document.getElementById('player-lesson-title');
  const playerLangSelect = document.getElementById('player-lang-selector');

  function updateLessonForLanguage() {
    if (!rawLesson) return;
    currentLang = i18n.getCurrentLanguage();
    localizedLesson = getLocalizedLesson(rawLesson, currentLang);

    if (titleEl) {
      titleEl.textContent = localizedLesson.title;
    }

    const sections = localizedLesson.sections || [];
    const hasActivity = Boolean(localizedLesson.interactive_activity);
    const questions = localizedLesson.quiz || [];
    totalSteps = sections.length + (hasActivity ? 1 : 0) + questions.length;

    renderCurrentStep();
  }

  lessonRepository.getLessonById(lessonId).then(loaded => {
    if (!loaded) return;
    rawLesson = loaded;
    updateLessonForLanguage();
  });

  // Handle in-player language selector change
  if (playerLangSelect) {
    playerLangSelect.addEventListener('change', (e) => {
      const selected = e.target.value;
      i18n.setLanguage(selected);
      toast.success(`Lesson language switched to ${selected.toUpperCase()}!`);
      updateLessonForLanguage();
    });
  }

  function renderCurrentStep() {
    if (!localizedLesson) return;
    audioService.stop();

    const sections = localizedLesson.sections || [];
    const hasActivity = Boolean(localizedLesson.interactive_activity);
    const questions = localizedLesson.quiz || [];

    // Update progress
    const progressPercent = Math.round(((currentStepIndex + 1) / totalSteps) * 100);
    if (stepDisplay) stepDisplay.textContent = currentStepIndex + 1;
    if (progressFill) progressFill.style.width = `${progressPercent}%`;

    if (prevBtn) prevBtn.disabled = currentStepIndex === 0;

    // 1. Are we on an introductory / worked example section?
    if (currentStepIndex < sections.length) {
      const sec = sections[currentStepIndex];
      renderSection(sec);
      if (nextBtn) {
        nextBtn.textContent = `${i18n.t('btn_next')} →`;
        nextBtn.disabled = false;
      }
      return;
    }

    // 2. Are we on the interactive matching activity?
    const activityIndex = sections.length;
    if (hasActivity && currentStepIndex === activityIndex) {
      renderInteractiveActivity(localizedLesson.interactive_activity);
      return;
    }

    // 3. Are we on a quiz question?
    const quizStartIndex = sections.length + (hasActivity ? 1 : 0);
    const qIndex = currentStepIndex - quizStartIndex;
    if (qIndex >= 0 && qIndex < questions.length) {
      renderQuizQuestion(questions[qIndex], qIndex, questions.length);
      return;
    }

    // 4. Finished all steps -> render final summary
    renderLessonSummary();
  }

  function renderSection(section) {
    bodyEl.innerHTML = `
      <div style="max-width: 680px; margin: 0 auto; animation: fadeIn 0.3s ease;">
        <span class="badge badge-accent" style="margin-bottom: 12px; text-transform: uppercase;">
          ${section.type === 'concept' ? '📖 Concept' : '💡 Worked Example'}
        </span>
        <h2 style="font-size: var(--font-size-2xl); margin-bottom: 16px;">${section.title}</h2>
        <div style="font-size: var(--font-size-base); line-height: 1.7; color: var(--color-text);">
          ${section.content}
        </div>
      </div>
    `;

    // Configure read-aloud button for this section in the current language
    if (readAloudBtn) {
      readAloudBtn.onclick = () => {
        const textToRead = section.read_aloud || section.title;
        audioService.speak(textToRead, currentLang);
        toast.info(`Reading aloud in ${currentLang.toUpperCase()}...`);
      };
    }
  }

  function renderInteractiveActivity(activity) {
    const pairs = activity.pairs || [];
    bodyEl.innerHTML = `
      <div style="max-width: 680px; margin: 0 auto;">
        <span class="badge badge-primary" style="margin-bottom: 12px;">Interactive Practice</span>
        <h2 style="font-size: var(--font-size-2xl); margin-bottom: 8px;">${activity.title}</h2>
        <p style="font-size: var(--font-size-sm); color: var(--color-text-muted); margin-bottom: 24px;">
          ${activity.instructions}
        </p>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;" id="pairs-container">
          <!-- Left Column -->
          <div style="display: flex; flex-direction: column; gap: 12px;">
            ${pairs.map(p => `
              <button class="option-btn match-left-btn ${matchingState.completedPairs.has(p.id) ? 'correct' : ''}" data-id="${p.id}" ${matchingState.completedPairs.has(p.id) ? 'disabled' : ''}>
                <strong style="font-size: 18px;">${p.left}</strong>
              </button>
            `).join('')}
          </div>

          <!-- Right Column -->
          <div style="display: flex; flex-direction: column; gap: 12px;">
            ${[...pairs].sort(() => 0.5 - Math.random()).map(p => `
              <button class="option-btn match-right-btn ${matchingState.completedPairs.has(p.id) ? 'correct' : ''}" data-id="${p.id}" ${matchingState.completedPairs.has(p.id) ? 'disabled' : ''}>
                <span>${p.right}</span>
              </button>
            `).join('')}
          </div>
        </div>

        <div id="matching-feedback" style="margin-top: 20px;"></div>
      </div>
    `;

    // Bind matching events
    document.querySelectorAll('.match-left-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.match-left-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        matchingState.selectedLeft = btn.getAttribute('data-id');
      });
    });

    document.querySelectorAll('.match-right-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        if (!matchingState.selectedLeft) {
          toast.warning('Please click an item on the left first!');
          return;
        }

        const rightId = btn.getAttribute('data-id');
        const feedbackEl = document.getElementById('matching-feedback');

        if (rightId === matchingState.selectedLeft) {
          audioService.playBeep(true);
          matchingState.completedPairs.add(rightId);
          matchingState.selectedLeft = null;

          document.querySelector(`.match-left-btn[data-id="${rightId}"]`)?.classList.add('correct');
          btn.classList.add('correct');

          feedbackEl.innerHTML = `
            <div class="feedback-banner success">
              <span>✓ <strong>${i18n.t('quiz_correct')}</strong></span>
            </div>
          `;

          if (matchingState.completedPairs.size === pairs.length) {
            toast.success('All pairs matched! Proceed to the quiz.');
            if (nextBtn) nextBtn.disabled = false;
          }
        } else {
          audioService.playBeep(false);
          feedbackEl.innerHTML = `
            <div class="feedback-banner error">
              <span>💡 ${i18n.t('quiz_hint')} Look closely and try again.</span>
            </div>
          `;
        }
      });
    });

    if (nextBtn) {
      nextBtn.textContent = `${i18n.t('btn_continue')} →`;
      nextBtn.disabled = matchingState.completedPairs.size < pairs.length;
    }
  }

  function renderQuizQuestion(question, qIndex, totalQuizCount) {
    const existing = userAnswers.find(a => a.questionId === question.id);
    let selectedOptionId = existing ? existing.selectedOptionId : null;

    bodyEl.innerHTML = `
      <div style="max-width: 680px; margin: 0 auto;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
          <span class="badge badge-accent">${i18n.t('quiz_question')} ${qIndex + 1} ${i18n.t('quiz_of')} ${totalQuizCount}</span>
          <span style="font-size: var(--font-size-xs); color: var(--color-text-muted);">Points: 10</span>
        </div>

        <div class="question-prompt">${question.prompt}</div>

        <div class="options-grid">
          ${question.options.map((opt, i) => `
            <button class="option-btn ${selectedOptionId === opt.id ? 'selected' : ''}" data-opt-id="${opt.id}">
              <span style="width: 28px; height: 28px; border-radius: 50%; background: var(--color-secondary); color: var(--color-primary); display: flex; align-items: center; justify-content: center; font-weight: bold; margin-right: 12px; flex-shrink: 0;">
                ${String.fromCharCode(65 + i)}
              </span>
              <span>${opt.text}</span>
            </button>
          `).join('')}
        </div>

        <div id="quiz-feedback-box"></div>
      </div>
    `;

    // Configure read-aloud for question in active language
    if (readAloudBtn) {
      readAloudBtn.onclick = () => {
        audioService.speak(question.prompt, currentLang);
      };
    }

    // Option selection & immediate evaluation
    const feedbackBox = document.getElementById('quiz-feedback-box');
    document.querySelectorAll('.option-btn[data-opt-id]').forEach(btn => {
      btn.addEventListener('click', () => {
        const optId = btn.getAttribute('data-opt-id');
        const chosen = question.options.find(o => o.id === optId);

        // Record answer
        const existingAns = userAnswers.findIndex(a => a.questionId === question.id);
        if (existingAns >= 0) {
          userAnswers[existingAns].selectedOptionId = optId;
        } else {
          userAnswers.push({ questionId: question.id, selectedOptionId: optId });
        }

        document.querySelectorAll('.option-btn[data-opt-id]').forEach(b => {
          b.classList.remove('selected', 'correct', 'incorrect');
        });

        if (chosen.is_correct) {
          btn.classList.add('correct');
          audioService.playBeep(true);
          feedbackBox.innerHTML = `
            <div class="feedback-banner success">
              <div>
                <strong>${i18n.t('quiz_correct')}</strong>
                <p style="margin-top: 4px; font-size: var(--font-size-sm);">${question.explanation || 'Great job!'}</p>
              </div>
            </div>
          `;
          if (nextBtn) nextBtn.disabled = false;
        } else {
          btn.classList.add('incorrect');
          audioService.playBeep(false);
          feedbackBox.innerHTML = `
            <div class="feedback-banner error">
              <div>
                <strong>${i18n.t('quiz_hint')}</strong>
                <p style="margin-top: 4px; font-size: var(--font-size-sm);">${question.hint || 'Think carefully and try another option.'}</p>
              </div>
            </div>
          `;
        }
      });
    });

    if (nextBtn) {
      const isLast = qIndex === totalQuizCount - 1;
      nextBtn.textContent = isLast ? `${i18n.t('btn_submit_quiz')} 🎉` : `${i18n.t('btn_next')} →`;
      nextBtn.disabled = !selectedOptionId;
    }
  }

  function renderLessonSummary() {
    const result = quizService.evaluateSubmission({
      lesson: localizedLesson,
      answers: userAnswers
    });

    bodyEl.innerHTML = `
      <div style="max-width: 620px; margin: 0 auto; text-align: center; animation: scaleUp 0.3s ease;">
        <div style="font-size: 64px; margin-bottom: 16px;">
          ${result.scorePercentage >= 80 ? '🌟' : result.scorePercentage >= 50 ? '🎉' : '🌱'}
        </div>
        <h2 style="font-size: var(--font-size-3xl); margin-bottom: 8px;">${i18n.t('quiz_completed_title')}</h2>
        <p style="color: var(--color-text-muted); font-size: var(--font-size-base); margin-bottom: 24px;">
          ${localizedLesson.title}
        </p>

        <!-- Score & Stars Box -->
        <div class="card" style="background: linear-gradient(135deg, #F0FDF4 0%, #DCFCE7 100%); border-color: #86EFAC; margin-bottom: 24px; padding: 24px;">
          <div style="display: flex; justify-content: space-around; align-items: center;">
            <div>
              <div style="font-size: var(--font-size-sm); color: #166534; font-weight: bold;">${i18n.t('quiz_score')}</div>
              <div style="font-size: 36px; font-weight: var(--font-weight-heavy); color: #15803D;">${result.scorePercentage}%</div>
              <div style="font-size: var(--font-size-xs); color: #166534;">${result.correctCount} of ${result.totalQuestions} Correct</div>
            </div>

            <div style="height: 50px; width: 1px; background: #86EFAC;"></div>

            <div>
              <div style="font-size: var(--font-size-sm); color: #92400E; font-weight: bold;">${i18n.t('quiz_stars_earned')}</div>
              <div style="font-size: 36px; color: #F59E0B;">
                ${'⭐'.repeat(result.starsEarned)}
              </div>
              <div style="font-size: var(--font-size-xs); color: #92400E;">
                ${result.netStarsAwarded > 0 ? `+${result.netStarsAwarded} Stars Added!` : 'Previously recorded'}
              </div>
            </div>
          </div>
        </div>

        <!-- Mastered vs Revise -->
        <div style="text-align: left; display: grid; gap: 12px; margin-bottom: 28px;">
          ${result.conceptsMastered.length > 0 ? `
            <div style="padding: 12px 16px; background: white; border-radius: 8px; border: 1px solid #A7F3D0;">
              <strong style="color: #065F46; font-size: var(--font-size-sm);">✓ ${i18n.t('quiz_concepts_mastered')}</strong>
              <ul style="margin-left: 20px; font-size: var(--font-size-xs); color: var(--color-text); margin-top: 6px;">
                ${result.conceptsMastered.map(c => `<li>${c}</li>`).join('')}
              </ul>
            </div>
          ` : ''}

          ${result.conceptsToRevise.length > 0 ? `
            <div style="padding: 12px 16px; background: white; border-radius: 8px; border: 1px solid #FCD34D;">
              <strong style="color: #92400E; font-size: var(--font-size-sm);">💡 ${i18n.t('quiz_concepts_revise')}</strong>
              <ul style="margin-left: 20px; font-size: var(--font-size-xs); color: var(--color-text); margin-top: 6px;">
                ${result.conceptsToRevise.map(c => `<li>${c}</li>`).join('')}
              </ul>
            </div>
          ` : ''}
        </div>

        <!-- Actions -->
        <div style="display: flex; gap: 16px; justify-content: center; flex-wrap: wrap;">
          <a href="#/student" class="btn btn-primary btn-lg">
            🏠 ${i18n.t('nav_student')}
          </a>
          <a href="#/games" class="btn btn-accent btn-lg">
            🎮 ${i18n.t('nav_games')}
          </a>
        </div>
      </div>
    `;

    // Hide Next/Prev buttons on summary
    if (prevBtn) prevBtn.style.display = 'none';
    if (nextBtn) nextBtn.style.display = 'none';
    if (hintText) hintText.style.display = 'none';
  }

  // Button navigation listeners
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      currentStepIndex++;
      renderCurrentStep();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (currentStepIndex > 0) {
        currentStepIndex--;
        renderCurrentStep();
      }
    });
  }
}
