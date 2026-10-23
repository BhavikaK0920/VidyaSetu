// VidyaSetu Hash-based Single Page Application Router
import { renderHomePage, setupHomePageEvents } from './pages/home.js';
import { renderStudentDashboard, setupStudentDashboardEvents } from './pages/student-dashboard.js';
import { renderLessonPlayer, setupLessonPlayerEvents } from './pages/lesson-player.js';
import { renderGamesPage, setupGamesEvents } from './pages/games.js';
import { renderTeacherDashboard, setupTeacherDashboardEvents } from './pages/teacher-dashboard.js';
import { renderAdminDashboard, setupAdminDashboardEvents } from './pages/admin-dashboard.js';
import { renderOfflineLessonsPage, setupOfflineLessonsEvents } from './pages/offline-lessons.js';
import { updateActiveNavLink } from './components/navbar.js';

class Router {
  constructor() {
    this.routes = {};
    this.currentRoute = null;
    window.addEventListener('hashchange', () => this.handleRouting());
  }

  register(path, renderFn, setupFn) {
    this.routes[path] = { renderFn, setupFn };
  }

  async handleRouting() {
    const rawHash = window.location.hash || '#/home';
    const cleanHash = rawHash.split('?')[0]; // strip query string
    const appMain = document.getElementById('main-content');
    if (!appMain) return;

    window.scrollTo({ top: 0, behavior: 'smooth' });

    // 1. Dynamic route matching: #/lesson/:id
    const lessonMatch = cleanHash.match(/^#\/lesson\/(.+)$/);
    if (lessonMatch) {
      const lessonId = lessonMatch[1];
      appMain.innerHTML = await renderLessonPlayer(lessonId);
      setupLessonPlayerEvents(lessonId);
      updateActiveNavLink();
      return;
    }

    // 2. Direct static route matching
    const route = this.routes[cleanHash] || this.routes['#/home'];
    if (route) {
      this.currentRoute = cleanHash;
      appMain.innerHTML = await route.renderFn();
      if (route.setupFn) {
        route.setupFn();
      }
      updateActiveNavLink();
    } else {
      // Fallback
      window.location.hash = '#/home';
    }
  }

  init() {
    this.handleRouting();
  }
}

export const router = new Router();

// Register application routes
router.register('#/home', renderHomePage, setupHomePageEvents);
router.register('#/lessons', renderStudentDashboard, setupStudentDashboardEvents);
router.register('#/student', renderStudentDashboard, setupStudentDashboardEvents);
router.register('#/games', renderGamesPage, setupGamesEvents);
router.register('#/teacher', renderTeacherDashboard, setupTeacherDashboardEvents);
router.register('#/admin', renderAdminDashboard, setupAdminDashboardEvents);
router.register('#/offline', renderOfflineLessonsPage, setupOfflineLessonsEvents);
