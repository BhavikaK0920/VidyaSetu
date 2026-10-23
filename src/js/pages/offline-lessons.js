// VidyaSetu Offline Download Manager & Shelf
import { i18n } from '../i18n/i18n.js';
import { cacheManager } from '../offline/cache-manager.js';
import { syncManager } from '../offline/sync-manager.js';
import { offlineDB } from '../offline/database.js';
import { toast } from '../components/toast.js';

export async function renderOfflineLessonsPage() {
  const downloaded = await cacheManager.getDownloadedLessons();
  const pendingEvents = await offlineDB.getPendingSyncEvents();
  const syncStatus = syncManager.getStatus();

  return `
    <div class="offline-page container" style="padding-top: var(--spacing-8); padding-bottom: var(--spacing-16);">
      <!-- Header -->
      <div class="card" style="margin-bottom: var(--spacing-8); background: linear-gradient(135deg, var(--color-surface) 0%, #E6F4ED 100%); border-left: 6px solid #10B981;">
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px;">
          <div>
            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 6px;">
              <span style="font-size: 32px;">📥</span>
              <h2>Offline Learning Manager</h2>
            </div>
            <p style="color: var(--color-text-muted);">
              All lessons listed here are stored directly in your browser's IndexedDB. You can study them anywhere without internet connectivity.
            </p>
          </div>

          <div style="display: flex; gap: 10px; align-items: center; flex-wrap: wrap;">
            <button class="btn btn-primary btn-sm" id="btn-sync-all-offline">
              🔄 Sync All Local Progress
            </button>
          </div>
        </div>
      </div>

      <!-- Storage & Sync Status Cards -->
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--spacing-6); margin-bottom: var(--spacing-8);" class="hero-grid">
        <div class="card">
          <div style="font-size: var(--font-size-xs); color: var(--color-text-muted); font-weight: bold; margin-bottom: 6px;">
            DEVICE STORAGE USE
          </div>
          <div style="display: flex; align-items: baseline; gap: 8px;">
            <span style="font-size: 32px; font-weight: var(--font-weight-heavy); color: var(--color-primary);">${downloaded.length}</span>
            <span style="font-size: var(--font-size-base); color: var(--color-text-muted);">Lessons Saved Locally</span>
          </div>
          <p style="font-size: var(--font-size-xs); color: var(--color-text-light); margin-top: 6px;">
            Uses safe IndexedDB quota. Works even in Airplane Mode.
          </p>
        </div>

        <div class="card">
          <div style="font-size: var(--font-size-xs); color: var(--color-text-muted); font-weight: bold; margin-bottom: 6px;">
            PENDING SYNCHRONIZATION QUEUE
          </div>
          <div style="display: flex; align-items: baseline; gap: 8px;">
            <span style="font-size: 32px; font-weight: var(--font-weight-heavy); color: ${pendingEvents.length > 0 ? '#D97706' : '#15803D'};">
              ${pendingEvents.length}
            </span>
            <span style="font-size: var(--font-size-base); color: var(--color-text-muted);">Events Queued</span>
          </div>
          <p style="font-size: var(--font-size-xs); color: var(--color-text-light); margin-top: 6px;">
            ${pendingEvents.length > 0 ? 'Will upload quiz scores automatically when Wi-Fi connects.' : 'All local scores and star rewards are in sync!'}
          </p>
        </div>
      </div>

      <!-- Downloaded Lessons Shelf -->
      <div class="card">
        <h3 style="margin-bottom: var(--spacing-4);">Locally Cached Lessons</h3>

        ${downloaded.length === 0 ? `
          <div style="text-align: center; padding: 48px 16px; background: white; border-radius: var(--radius-md); border: 2px dashed var(--color-border);">
            <div style="font-size: 40px; margin-bottom: 12px;">📭</div>
            <h4>No lessons saved offline yet</h4>
            <p style="color: var(--color-text-muted); font-size: var(--font-size-sm); margin-bottom: 16px;">
              Visit the lesson library to download lessons with one click.
            </p>
            <a href="#/lessons" class="btn btn-secondary btn-sm">Explore Lessons to Download</a>
          </div>
        ` : `
          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: var(--spacing-4);">
            ${downloaded.map(lesson => `
              <div class="card" style="border: 1px solid #A7F3D0; background: #F0FDF4; display: flex; flex-direction: column;">
                <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
                  <span class="badge badge-success">✓ Stored Locally</span>
                  <span class="badge">Class ${lesson.grade_level}</span>
                </div>
                <h4 style="font-size: var(--font-size-base); margin-bottom: 6px;">${lesson.title}</h4>
                <p style="font-size: var(--font-size-xs); color: var(--color-text-muted); margin-bottom: 14px; flex-grow: 1;">
                  ${lesson.summary}
                </p>
                <div style="display: flex; gap: 8px; margin-top: auto;">
                  <a href="#/lesson/${lesson.id}" class="btn btn-primary btn-sm" style="flex: 1;">
                    ▶ Open Offline
                  </a>
                  <button class="btn btn-outline btn-sm btn-delete-offline" data-id="${lesson.id}" title="Delete from device storage" style="color: #DC2626;">
                    🗑️
                  </button>
                </div>
              </div>
            `).join('')}
          </div>
        `}
      </div>
    </div>
  `;
}

export function setupOfflineLessonsEvents() {
  document.querySelectorAll('.btn-delete-offline').forEach(btn => {
    btn.addEventListener('click', async () => {
      const id = btn.getAttribute('data-id');
      await cacheManager.removeLesson(id);
      toast.info('Removed lesson from offline storage.');
      window.location.reload();
    });
  });

  const syncBtn = document.getElementById('btn-sync-all-offline');
  if (syncBtn) {
    syncBtn.addEventListener('click', async () => {
      toast.info('Checking for pending events and syncing...');
      const res = await syncManager.syncPendingEvents();
      if (res && res.syncedCount > 0) {
        toast.success(`Successfully uploaded ${res.syncedCount} pending result(s)!`);
      } else {
        toast.success('All local events are fully up to date.');
      }
      window.location.reload();
    });
  }
}
