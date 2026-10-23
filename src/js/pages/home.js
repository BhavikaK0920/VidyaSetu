// VidyaSetu Homepage & Public Website
import { i18n } from '../i18n/i18n.js';
import { sampleSubjects } from '../data/sample-data.js';
import { sampleLessons } from '../data/sample-lessons.js';
import { audioService } from '../services/audio.service.js';

export function renderHomePage() {
  const currentLang = i18n.getCurrentLanguage();

  return `
    <div class="home-page">
      <!-- 1. Hero Section -->
      <section class="section" style="background: linear-gradient(180deg, #FDFBF7 0%, #E6F4ED 100%); border-bottom: 1px solid var(--color-border-light); padding-top: var(--spacing-10); padding-bottom: var(--spacing-16);">
        <div class="container">
          <div class="hero-grid" style="display: grid; grid-template-columns: 1.15fr 0.85fr; gap: var(--spacing-10); align-items: center;">
            <div>
              <div style="display: inline-flex; align-items: center; gap: 8px; background: white; border: 1px solid #c7e3d6; padding: 6px 14px; border-radius: var(--radius-full); font-size: var(--font-size-xs); font-weight: var(--font-weight-bold); color: var(--color-primary); margin-bottom: var(--spacing-4); box-shadow: var(--shadow-sm);">
                <span>🏫 Free for Rural Government Schools</span>
                <span>•</span>
                <span>Classes 1–8</span>
              </div>
              <h1 style="font-size: clamp(2rem, 4vw, 3.25rem); color: var(--color-text); line-height: 1.2; margin-bottom: var(--spacing-4); letter-spacing: -0.02em;">
                ${i18n.t('hero_title')}
              </h1>
              <p style="font-size: var(--font-size-lg); color: var(--color-text-muted); line-height: 1.6; margin-bottom: var(--spacing-8); max-width: 580px;">
                ${i18n.t('hero_subtitle')}
              </p>
              <div style="display: flex; flex-wrap: wrap; gap: var(--spacing-4); margin-bottom: var(--spacing-6);">
                <a href="#/student" class="btn btn-primary btn-lg" id="hero-btn-start">
                  🚀 ${i18n.t('hero_cta_primary')}
                </a>
                <a href="#/lessons" class="btn btn-secondary btn-lg" id="hero-btn-explore">
                  📖 ${i18n.t('hero_cta_secondary')}
                </a>
                <a href="#/games" class="btn btn-accent btn-lg" id="hero-btn-games">
                  🎮 ${i18n.t('nav_games')}
                </a>
              </div>
              <div style="display: flex; align-items: center; gap: 24px; font-size: var(--font-size-xs); color: var(--color-text-muted);">
                <span>✓ 100% Offline Capable</span>
                <span>✓ 8 Indian Regional Languages</span>
                <span>✓ Zero Ads & Child Safe</span>
              </div>
            </div>

            <!-- Hero Illustration -->
            <div style="display: flex; justify-content: center;">
              <div style="width: 100%; max-width: 520px; box-shadow: var(--shadow-xl); border-radius: var(--radius-xl); overflow: hidden; border: 2px solid white;">
                <img src="/illustrations/book-bridge.svg" alt="VidyaSetu Book Bridge connecting village learners" style="width: 100%; height: auto;" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 2. Featured Learning Subjects -->
      <section class="section">
        <div class="container">
          <div class="text-center" style="max-width: 640px; margin: 0 auto var(--spacing-10) auto;">
            <span class="badge badge-primary" style="margin-bottom: 8px;">Curriculum</span>
            <h2>Foundational Learning Subjects</h2>
            <p>Designed around real-world rural contexts — from village farms and local ecology to mathematics and languages.</p>
          </div>

          <div class="grid-subjects">
            ${sampleSubjects.filter(s => s.id !== 'all').map(subject => `
              <div class="subject-card" onclick="window.location.hash = '#/lessons?subject=${subject.id}'">
                <div class="subject-icon-box" style="background-color: ${subject.color}15; color: ${subject.color};">
                  ${getSubjectEmoji(subject.id)}
                </div>
                <div class="subject-title">${subject.name}</div>
                <div class="subject-meta">Classes 1–8 • Activity-Based</div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- 3. How VidyaSetu Works -->
      <section class="section" style="background-color: var(--color-surface); border-top: 1px solid var(--color-border); border-bottom: 1px solid var(--color-border);">
        <div class="container">
          <div class="text-center" style="max-width: 680px; margin: 0 auto var(--spacing-12) auto;">
            <span class="badge badge-accent" style="margin-bottom: 8px;">Step-by-Step</span>
            <h2>How VidyaSetu Works in Your School</h2>
            <p>A simple, dependable workflow engineered for rural connectivity constraints.</p>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: var(--spacing-6);">
            <div class="card" style="text-align: center;">
              <div style="width: 52px; height: 52px; border-radius: 50%; background: var(--color-secondary); color: var(--color-primary); display: flex; align-items: center; justify-content: center; font-size: 22px; font-weight: bold; margin: 0 auto var(--spacing-4) auto;">
                1
              </div>
              <h4 style="margin-bottom: 8px;">Choose Class & Language</h4>
              <p style="font-size: var(--font-size-sm);">Pick from Class 1 to 8 and switch instantly between 8 regional languages.</p>
            </div>

            <div class="card" style="text-align: center;">
              <div style="width: 52px; height: 52px; border-radius: 50%; background: var(--color-accent-subtle); color: #B45309; display: flex; align-items: center; justify-content: center; font-size: 22px; font-weight: bold; margin: 0 auto var(--spacing-4) auto;">
                2
              </div>
              <h4 style="margin-bottom: 8px;">Download for Offline</h4>
              <p style="font-size: var(--font-size-sm);">Save entire lesson packs with one tap when Wi-Fi is available. Learn anytime with zero data.</p>
            </div>

            <div class="card" style="text-align: center;">
              <div style="width: 52px; height: 52px; border-radius: 50%; background: #DCFCE7; color: #15803D; display: flex; align-items: center; justify-content: center; font-size: 22px; font-weight: bold; margin: 0 auto var(--spacing-4) auto;">
                3
              </div>
              <h4 style="margin-bottom: 8px;">Interactive Activities</h4>
              <p style="font-size: var(--font-size-sm);">Engage with illustrated story cards, voice read-aloud, matching puzzles, and instant-feedback quizzes.</p>
            </div>

            <div class="card" style="text-align: center;">
              <div style="width: 52px; height: 52px; border-radius: 50%; background: #E0F2FE; color: #0369A1; display: flex; align-items: center; justify-content: center; font-size: 22px; font-weight: bold; margin: 0 auto var(--spacing-4) auto;">
                4
              </div>
              <h4 style="margin-bottom: 8px;">Auto-Sync & Rewards</h4>
              <p style="font-size: var(--font-size-sm);">Stars, badges, and teacher progress reports synchronize automatically when connectivity is restored.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 4. Offline Learning Capabilities Showcase -->
      <section class="section" style="background-color: #F8FBF9;">
        <div class="container">
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--spacing-10); align-items: center;" class="hero-grid">
            <div style="border-radius: var(--radius-xl); overflow: hidden; box-shadow: var(--shadow-lg); border: 2px solid white;">
              <img src="/illustrations/offline-sync.svg" alt="Offline Learning & Synchronization" style="width: 100%; height: auto;" />
            </div>

            <div>
              <span class="badge badge-success" style="margin-bottom: 8px;">Offline-First Architecture</span>
              <h2 style="margin-bottom: var(--spacing-4);">Uninterrupted Learning, Even Without Internet</h2>
              <p style="font-size: var(--font-size-base); line-height: 1.6; color: var(--color-text-muted); margin-bottom: var(--spacing-6);">
                Rural schools often face power outages and weak cell signals. VidyaSetu stores lessons, voice clips, questions, and quiz attempts right inside the device using IndexedDB and Service Workers.
              </p>
              <ul style="list-style: none; display: grid; gap: 12px; margin-bottom: var(--spacing-6); font-size: var(--font-size-sm);">
                <li style="display: flex; gap: 10px;">
                  <span style="color: var(--color-primary); font-weight: bold;">✓</span>
                  <span><strong>One-Tap Download:</strong> Pre-load math and science modules on shared tablets.</span>
                </li>
                <li style="display: flex; gap: 10px;">
                  <span style="color: var(--color-primary); font-weight: bold;">✓</span>
                  <span><strong>Local Quiz Scoring:</strong> Children receive instant explanations and hints without waiting for a server.</span>
                </li>
                <li style="display: flex; gap: 10px;">
                  <span style="color: var(--color-primary); font-weight: bold;">✓</span>
                  <span><strong>Safe Sync Queue:</strong> Idempotent event queues prevent duplicate rewards or lost submissions.</span>
                </li>
              </ul>
              <a href="#/offline" class="btn btn-primary">
                📥 View Offline Download Manager
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- 5. Multilingual Voice & Audio Feature -->
      <section class="section">
        <div class="container">
          <div class="card" style="background: linear-gradient(135deg, var(--color-secondary) 0%, #FFFFFF 100%); border: 2px solid #c7e3d6; padding: var(--spacing-8);">
            <div style="display: grid; grid-template-columns: 1.2fr 0.8fr; gap: var(--spacing-8); align-items: center;" class="hero-grid">
              <div>
                <span class="badge badge-accent" style="margin-bottom: 8px;">Pronunciation & Accessibility</span>
                <h3 style="margin-bottom: var(--spacing-3);">Learning in 8 Indian Regional Languages</h3>
                <p style="font-size: var(--font-size-base); color: var(--color-text-muted); line-height: 1.6; margin-bottom: var(--spacing-4);">
                  Language should never be a barrier to understanding a scientific law or mathematical concept. VidyaSetu supports audio read-aloud and reviewed regional translations.
                </p>
                <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: var(--spacing-4);">
                  <span class="badge">ಕನ್ನಡ (Kannada)</span>
                  <span class="badge">हिन्दी (Hindi)</span>
                  <span class="badge">తెలుగు (Telugu)</span>
                  <span class="badge">தமிழ் (Tamil)</span>
                  <span class="badge">മലയാളം (Malayalam)</span>
                  <span class="badge">मराठी (Marathi)</span>
                  <span class="badge">বাংলা (Bengali)</span>
                  <span class="badge">English</span>
                </div>
              </div>
              <div style="text-align: center; background: white; padding: var(--spacing-6); border-radius: var(--radius-lg); border: 1px solid var(--color-border); box-shadow: var(--shadow-sm);">
                <div style="font-size: 36px; margin-bottom: 8px;">🔊</div>
                <h4 style="margin-bottom: 8px;">Test Audio Read-Aloud</h4>
                <p style="font-size: var(--font-size-xs); color: var(--color-text-muted); margin-bottom: 16px;">
                  Click to listen to a sample lesson greeting in your selected language:
                </p>
                <button class="btn btn-secondary btn-sm" id="btn-sample-audio">
                  ▶ Play Read-Aloud Sample
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 6. Teacher and Classroom Benefits -->
      <section class="section" style="background-color: var(--color-surface); border-top: 1px solid var(--color-border);">
        <div class="container">
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--spacing-10); align-items: center;" class="hero-grid">
            <div>
              <span class="badge badge-primary" style="margin-bottom: 8px;">For Teachers & Headmasters</span>
              <h2 style="margin-bottom: var(--spacing-4);">Empowering Village Educators</h2>
              <p style="font-size: var(--font-size-base); color: var(--color-text-muted); line-height: 1.6; margin-bottom: var(--spacing-6);">
                Teachers in rural schools often manage multi-grade classrooms. VidyaSetu provides real-time visibility into individual learning difficulties and lesson completion.
              </p>
              <div style="display: grid; gap: 16px; margin-bottom: var(--spacing-6);">
                <div style="padding: 12px; background: var(--color-secondary); border-radius: var(--radius-md); border-left: 4px solid var(--color-primary);">
                  <strong>Difficulty Alerts:</strong> Identifies concepts where 5+ students struggled on a quiz.
                </div>
                <div style="padding: 12px; background: var(--color-accent-subtle); border-radius: var(--radius-md); border-left: 4px solid var(--color-accent);">
                  <strong>Offline Classroom Packs:</strong> Download all lessons for a class to a single teacher phone or laptop.
                </div>
                <div style="padding: 12px; background: #DCFCE7; border-radius: var(--radius-md); border-left: 4px solid #15803D;">
                  <strong>Classroom Reports:</strong> Export progress data for school inspections and parent meetings.
                </div>
              </div>
              <a href="#/teacher" class="btn btn-secondary">
                👨‍🏫 Open Teacher Dashboard
              </a>
            </div>

            <div style="border-radius: var(--radius-xl); overflow: hidden; box-shadow: var(--shadow-lg); border: 2px solid white;">
              <img src="/illustrations/classroom.svg" alt="Teacher and students in rural government school classroom" style="width: 100%; height: auto;" />
            </div>
          </div>
        </div>
      </section>

      <!-- 7. Final Call to Action -->
      <section class="section" style="background: linear-gradient(135deg, var(--color-primary) 0%, #0F4A3A 100%); color: white; text-align: center;">
        <div class="container" style="max-width: 720px;">
          <h2 style="color: white; font-size: clamp(1.8rem, 3.5vw, 2.5rem); margin-bottom: var(--spacing-4);">
            Every Village Child Deserves Inspiring Learning
          </h2>
          <p style="color: #c7e3d6; font-size: var(--font-size-lg); line-height: 1.6; margin-bottom: var(--spacing-8);">
            Start exploring interactive lessons in Mathematics, Science, Environmental Studies, and Languages today.
          </p>
          <div style="display: flex; justify-content: center; flex-wrap: wrap; gap: var(--spacing-4);">
            <a href="#/student" class="btn btn-accent btn-lg">
              ✨ Start Learning as Student
            </a>
            <a href="#/admin" class="btn btn-outline btn-lg" style="color: white; border-color: rgba(255,255,255,0.4);">
              ⚙️ Admin & Content Portal
            </a>
          </div>
        </div>
      </section>
    </div>
  `;
}

export function setupHomePageEvents() {
  const audioBtn = document.getElementById('btn-sample-audio');
  if (audioBtn) {
    audioBtn.addEventListener('click', () => {
      const text = `${i18n.t('brand_name')} — ${i18n.t('hero_title')}`;
      audioService.speak(text, i18n.getCurrentLanguage(), () => {
        audioService.playBeep(true);
      });
    });
  }
}

function getSubjectEmoji(subjectId) {
  const map = {
    math: '📐',
    evs: '🌱',
    sci: '🔬',
    eng: '🔤',
    reg: '📚',
    soc: '🌍'
  };
  return map[subjectId] || '📖';
}
