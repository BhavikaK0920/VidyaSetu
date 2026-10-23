// VidyaSetu Main Application Controller
import { i18n } from './i18n/i18n.js';
import { syncManager } from './offline/sync-manager.js';
import { authService } from './services/auth.service.js';
import { renderNavbar, setupNavbarEvents, updateActiveNavLink } from './components/navbar.js';
import { renderFooter } from './components/footer.js';
import { router } from './router.js';

class App {
  constructor() {
    this.init();
  }

  async init() {
    console.log('[VidyaSetu] Initializing Digital Learning Platform...');

    // 1. Render layout shell (Header, Main viewport, Footer)
    this.renderLayout();

    // 2. Setup Navbar interactions
    setupNavbarEvents();

    // 3. Register PWA Service Worker for offline caching
    this.registerServiceWorker();

    // 4. Subscribe to Language changes (re-renders layout and route)
    i18n.subscribe(() => {
      this.renderLayout();
      setupNavbarEvents();
      router.handleRouting();
    });

    // 5. Subscribe to Auth user changes
    authService.subscribe(() => {
      this.renderLayout();
      setupNavbarEvents();
      router.handleRouting();
    });

    // 6. Subscribe to Online / Offline Sync changes
    syncManager.onStatusChange((status) => {
      const badge = document.getElementById('sync-status-btn');
      const text = document.getElementById('sync-status-text');
      if (badge && text) {
        badge.className = `sync-status-badge ${status}`;
        text.textContent = i18n.t(`status_${status}`) || status;
      }
    });

    // 7. Initialize router
    router.init();
  }

  renderLayout() {
    const navContainer = document.getElementById('navbar-mount');
    const footerContainer = document.getElementById('footer-mount');

    if (navContainer) {
      navContainer.innerHTML = renderNavbar();
    }

    if (footerContainer) {
      footerContainer.innerHTML = renderFooter();
    }
  }

  registerServiceWorker() {
    if ('serviceWorker' in navigator && window.location.protocol.startsWith('http')) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
          .then(registration => {
            console.log('[VidyaSetu PWA] ServiceWorker registered with scope:', registration.scope);
          })
          .catch(err => {
            console.warn('[VidyaSetu PWA] ServiceWorker registration failed:', err);
          });
      });
    }
  }
}

// Bootstrap when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new App();
});
