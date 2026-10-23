// VidyaSetu Navbar Component
import { i18n } from '../i18n/i18n.js';
import { syncManager } from '../offline/sync-manager.js';
import { authService } from '../services/auth.service.js';
import { toast } from './toast.js';

export function renderNavbar() {
  const currentLang = i18n.getCurrentLanguage();
  const languages = i18n.getAvailableLanguages();
  const user = authService.getCurrentUser();
  const role = authService.getRole();
  const syncStatus = syncManager.getStatus();

  const syncLabels = {
    online: i18n.t('status_online'),
    offline: i18n.t('status_offline'),
    syncing: i18n.t('status_syncing')
  };

  const navHtml = `
    <header class="navbar">
      <div class="container">
        <!-- Brand Logo -->
        <a href="#/home" class="brand-logo" id="nav-brand-logo">
          <img src="/icons/favicon.svg" alt="VidyaSetu Logo" class="brand-logo-img" />
          <div class="brand-text-wrap">
            <span class="brand-title">${i18n.t('brand_name')}</span>
            <span class="brand-tagline">${i18n.t('tagline')}</span>
          </div>
        </a>

        <!-- Desktop Navigation Links -->
        <ul class="nav-links">
          <li><a href="#/home" class="nav-link" data-route="/home">${i18n.t('nav_home')}</a></li>
          <li><a href="#/lessons" class="nav-link" data-route="/lessons">${i18n.t('nav_lessons')}</a></li>
          <li><a href="#/games" class="nav-link" data-route="/games">${i18n.t('nav_games')}</a></li>
          <li><a href="#/student" class="nav-link" data-route="/student">${i18n.t('nav_student')}</a></li>
          <li><a href="#/teacher" class="nav-link" data-route="/teacher">${i18n.t('nav_teacher')}</a></li>
          <li><a href="#/admin" class="nav-link" data-route="/admin">${i18n.t('nav_admin')}</a></li>
          <li>
            <a href="#/offline" class="nav-link" data-route="/offline" title="${i18n.t('nav_offline')}">
              📥 ${i18n.t('nav_offline')}
            </a>
          </li>
        </ul>

        <!-- Action Items (Sync Badge, Lang Picker, Role Switcher) -->
        <div class="nav-actions">
          <!-- Online/Offline Sync Pill -->
          <button class="sync-status-badge ${syncStatus}" id="sync-status-btn" title="Click to manually synchronize local progress">
            <span class="status-dot"></span>
            <span id="sync-status-text">${syncLabels[syncStatus]}</span>
          </button>

          <!-- Language Selector -->
          <div class="lang-selector-wrap">
            <select class="lang-select" id="language-selector" aria-label="Select Language">
              ${languages.map(l => `
                <option value="${l.code}" ${l.code === currentLang ? 'selected' : ''}>
                  ${l.native} (${l.name})
                </option>
              `).join('')}
            </select>
            <span class="lang-select-arrow">▼</span>
          </div>

          <!-- Role Switcher -->
          <select class="btn btn-secondary btn-sm" id="role-selector" aria-label="Switch User Role" style="font-size:12px; padding:6px 10px;">
            <option value="student" ${role === 'student' ? 'selected' : ''}>👦 Student (Aarav - Cl. 4)</option>
            <option value="teacher" ${role === 'teacher' ? 'selected' : ''}>👨‍🏫 Teacher (Suresh)</option>
            <option value="admin" ${role === 'admin' ? 'selected' : ''}>👩‍💼 Admin (Rajeshwari)</option>
          </select>

          <!-- Mobile Hamburger Toggle -->
          <button class="mobile-menu-btn" id="mobile-menu-toggle" aria-label="Toggle Navigation">
            ☰
          </button>
        </div>
      </div>

      <!-- Mobile Navigation Drawer -->
      <div class="mobile-drawer" id="mobile-nav-drawer">
        <a href="#/home" class="nav-link">${i18n.t('nav_home')}</a>
        <a href="#/lessons" class="nav-link">${i18n.t('nav_lessons')}</a>
        <a href="#/games" class="nav-link">${i18n.t('nav_games')}</a>
        <a href="#/student" class="nav-link">${i18n.t('nav_student')}</a>
        <a href="#/teacher" class="nav-link">${i18n.t('nav_teacher')}</a>
        <a href="#/admin" class="nav-link">${i18n.t('nav_admin')}</a>
        <a href="#/offline" class="nav-link">📥 ${i18n.t('nav_offline')}</a>
      </div>
    </header>
  `;

  return navHtml;
}

export function setupNavbarEvents() {
  // 1. Language selector change
  const langSelect = document.getElementById('language-selector');
  if (langSelect) {
    langSelect.addEventListener('change', (e) => {
      const selected = e.target.value;
      i18n.setLanguage(selected);
      toast.success(`Language changed to ${selected.toUpperCase()}`);
    });
  }

  // 2. Role selector change
  const roleSelect = document.getElementById('role-selector');
  if (roleSelect) {
    roleSelect.addEventListener('change', (e) => {
      const newRole = e.target.value;
      authService.switchRole(newRole);
      toast.info(`Switched role to ${newRole.toUpperCase()}`);
      if (newRole === 'student') window.location.hash = '#/student';
      else if (newRole === 'teacher') window.location.hash = '#/teacher';
      else if (newRole === 'admin') window.location.hash = '#/admin';
    });
  }

  // 3. Sync status click
  const syncBtn = document.getElementById('sync-status-btn');
  if (syncBtn) {
    syncBtn.addEventListener('click', async () => {
      toast.info('Synchronizing pending lessons and quiz attempts...');
      try {
        const res = await syncManager.syncPendingEvents();
        if (res && res.syncedCount > 0) {
          toast.success(`Successfully synchronized ${res.syncedCount} item(s)!`);
        } else {
          toast.success('Everything is already up-to-date!');
        }
      } catch (err) {
        toast.warning('Offline: Pending items safely preserved locally.');
      }
    });
  }

  // 4. Mobile drawer toggle
  const mobileBtn = document.getElementById('mobile-menu-toggle');
  const drawer = document.getElementById('mobile-nav-drawer');
  if (mobileBtn && drawer) {
    mobileBtn.addEventListener('click', () => {
      drawer.classList.toggle('open');
    });

    // Close on link click
    drawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        drawer.classList.remove('open');
      });
    });
  }

  // 5. Update active link highlighting
  updateActiveNavLink();
}

export function updateActiveNavLink() {
  const hash = window.location.hash || '#/home';
  document.querySelectorAll('.nav-link').forEach(link => {
    const route = link.getAttribute('data-route');
    if (route && hash.startsWith('#' + route)) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}
