// VidyaSetu Footer Component
import { i18n } from '../i18n/i18n.js';
import { getConnectionStatus } from '../config/supabase.js';

export function renderFooter() {
  const conn = getConnectionStatus();

  return `
    <footer style="background-color: var(--color-surface); border-top: 1px solid var(--color-border); padding: var(--spacing-12) 0 var(--spacing-6) 0; margin-top: auto;">
      <div class="container">
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: var(--spacing-8); margin-bottom: var(--spacing-8);">
          <!-- Col 1: Brand & Mission -->
          <div>
            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;">
              <img src="/icons/favicon.svg" alt="VidyaSetu" style="width: 32px; height: 32px;" />
              <strong style="font-size: var(--font-size-lg); color: var(--color-primary);">${i18n.t('brand_name')}</strong>
            </div>
            <p style="font-size: var(--font-size-sm); color: var(--color-text-muted); line-height: 1.6;">
              ${i18n.t('tagline')}. Dedicated to empowering children and teachers in rural government schools across India with high-quality, activity-based digital learning.
            </p>
            <div style="margin-top: 14px;">
              <span class="badge ${conn.isLive ? 'badge-success' : 'badge-warning'}">
                ${conn.label}
              </span>
            </div>
          </div>

          <!-- Col 2: Navigation -->
          <div>
            <h5 style="margin-bottom: 12px; color: var(--color-text); font-size: var(--font-size-base);">Quick Exploration</h5>
            <ul style="list-style: none; display: grid; gap: 8px; font-size: var(--font-size-sm);">
              <li><a href="#/home">${i18n.t('nav_home')}</a></li>
              <li><a href="#/lessons">${i18n.t('nav_lessons')}</a></li>
              <li><a href="#/games">${i18n.t('nav_games')}</a></li>
              <li><a href="#/student">${i18n.t('nav_student')}</a></li>
              <li><a href="#/teacher">${i18n.t('nav_teacher')}</a></li>
              <li><a href="#/admin">${i18n.t('nav_admin')}</a></li>
              <li><a href="#/offline">📥 ${i18n.t('nav_offline')}</a></li>
            </ul>
          </div>

          <!-- Col 3: Languages & Inclusion -->
          <div>
            <h5 style="margin-bottom: 12px; color: var(--color-text); font-size: var(--font-size-base);">Regional Languages</h5>
            <p style="font-size: var(--font-size-sm); color: var(--color-text-muted); line-height: 1.6;">
              Learning materials available in <strong>ಕನ್ನಡ, हिन्दी, తెలుగు, தமிழ், മലയാളം, मराठी, বাংলা,</strong> and <strong>English</strong>.
            </p>
            <div style="margin-top: 12px; font-size: var(--font-size-xs); color: var(--color-text-light);">
              Designed for low-cost smartphones, shared village school tablets, and desktop computers.
            </div>
          </div>

          <!-- Col 4: Child Privacy & Standards -->
          <div>
            <h5 style="margin-bottom: 12px; color: var(--color-text); font-size: var(--font-size-base);">Child Privacy & Safety</h5>
            <p style="font-size: var(--font-size-sm); color: var(--color-text-muted); line-height: 1.6;">
              ✓ Zero advertising trackers<br>
              ✓ Minimal child data collection<br>
              ✓ Teacher-supervised classroom accounts<br>
              ✓ Offline-first local data retention
            </p>
          </div>
        </div>

        <div style="border-top: 1px solid var(--color-border-light); padding-top: var(--spacing-6); display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 12px; font-size: var(--font-size-xs); color: var(--color-text-muted);">
          <div>
            © 2026 VidyaSetu Learning Foundation. Free and Open for Government Schools.
          </div>
          <div style="display: flex; gap: 16px;">
            <span>WCAG 2.2 AA Accessible</span>
            <span>Progressive Web App (PWA)</span>
            <span>Offline-Ready</span>
          </div>
        </div>
      </div>
    </footer>
  `;
}
