// VidyaSetu Supervised Content Management & Admin Portal
// Enforces full lifecycle: Draft -> Submitted for Review -> Approved -> Published (or Rejected with feedback)

import { i18n } from '../i18n/i18n.js';
import { authService } from '../services/auth.service.js';
import { adminService } from '../services/admin.service.js';
import { lessonRepository } from '../repositories/lesson.repository.js';
import { sampleSubjects, sampleSchools } from '../data/sample-data.js';
import { toast } from '../components/toast.js';

export async function renderAdminDashboard() {
  const user = authService.getCurrentUser();
  const role = authService.getRole();
  const isAdminOrEditor = role === 'admin' || role === 'content_editor';

  // Fetch all lessons regardless of status
  const allLessons = await lessonRepository.getAllLessons();
  const auditLogs = adminService.getAuditLogs();

  return `
    <div class="admin-portal container" style="padding-top: var(--spacing-8); padding-bottom: var(--spacing-16);">
      <!-- Header -->
      <div class="card" style="margin-bottom: var(--spacing-8); background: linear-gradient(135deg, var(--color-surface) 0%, #FEF9E7 100%); border-left: 6px solid var(--color-accent);">
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px;">
          <div>
            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 6px;">
              <span style="font-size: 32px;">👩‍💼</span>
              <h2>${i18n.t('admin_title')}</h2>
            </div>
            <p style="color: var(--color-text-muted);">
              Supervised Educational Content Review, Role Permissions & Platform Governance
            </p>
          </div>

          <div style="display: flex; gap: 10px; flex-wrap: wrap;">
            <button class="btn btn-primary btn-sm" id="btn-create-lesson-modal">
              ✍️ Create New Lesson Draft
            </button>
          </div>
        </div>
      </div>

      <!-- Content Lifecycle Workflow Visualizer -->
      <div class="card" style="margin-bottom: var(--spacing-8); padding: var(--spacing-5);">
        <div style="font-size: var(--font-size-xs); font-weight: bold; color: var(--color-text-muted); text-transform: uppercase; margin-bottom: 12px;">
          SUPERVISED CONTENT REVIEW PIPELINE
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px; font-size: var(--font-size-sm); font-weight: bold;">
          <div style="display: flex; align-items: center; gap: 6px; padding: 6px 12px; background: #F1F5F9; border-radius: 6px; color: #475569;">
            <span>📝</span> Draft (Teacher/Editor)
          </div>
          <span>➔</span>
          <div style="display: flex; align-items: center; gap: 6px; padding: 6px 12px; background: #FEF3C7; border-radius: 6px; color: #B45309;">
            <span>📬</span> Submitted for Review
          </div>
          <span>➔</span>
          <div style="display: flex; align-items: center; gap: 6px; padding: 6px 12px; background: #E0F2FE; border-radius: 6px; color: #0369A1;">
            <span>🔍</span> Approved by Reviewer
          </div>
          <span>➔</span>
          <div style="display: flex; align-items: center; gap: 6px; padding: 6px 12px; background: #DCFCE7; border-radius: 6px; color: #15803D;">
            <span>🚀</span> Published (Live to Students)
          </div>
        </div>
      </div>

      <!-- Lessons Editorial Queue Table -->
      <div class="card" style="margin-bottom: var(--spacing-10);">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--spacing-4); flex-wrap: wrap; gap: 12px;">
          <div>
            <h3>Educational Curriculum Catalog & Editorial Queue</h3>
            <p style="font-size: var(--font-size-sm); color: var(--color-text-muted);">
              Manage lessons, review submitted drafts, and control live releases.
            </p>
          </div>
          <span class="badge badge-primary">Total: ${allLessons.length} Lessons</span>
        </div>

        <div class="table-responsive">
          <table class="data-table">
            <thead>
              <tr>
                <th>Lesson Title & Subject</th>
                <th>Class</th>
                <th>Status</th>
                <th>Created By</th>
                <th>Supervised Action</th>
              </tr>
            </thead>
            <tbody>
              ${allLessons.map(lesson => {
                const statusColors = {
                  draft: 'background:#F1F5F9; color:#475569;',
                  submitted: 'background:#FEF3C7; color:#B45309;',
                  approved: 'background:#E0F2FE; color:#0369A1;',
                  published: 'background:#DCFCE7; color:#15803D;',
                  rejected: 'background:#FEE2E2; color:#DC2626;'
                };

                return `
                  <tr>
                    <td>
                      <strong>${lesson.title}</strong>
                      <div style="font-size: var(--font-size-xs); color: var(--color-text-muted);">
                        ${lesson.subject_name || lesson.subject_id} • ${lesson.estimated_minutes} mins
                      </div>
                      ${lesson.reviewer_feedback ? `
                        <div style="font-size: 11px; color: #DC2626; margin-top: 4px;">
                          Feedback: "${lesson.reviewer_feedback}"
                        </div>
                      ` : ''}
                    </td>
                    <td>Class ${lesson.grade_level}</td>
                    <td>
                      <span class="badge" style="${statusColors[lesson.status] || ''}">
                        ${lesson.status.toUpperCase()}
                      </span>
                    </td>
                    <td>${lesson.created_by || 'Staff'}</td>
                    <td>
                      <div style="display: flex; gap: 6px; flex-wrap: wrap;">
                        ${lesson.status === 'draft' || lesson.status === 'rejected' ? `
                          <button class="btn btn-outline btn-sm btn-submit-review" data-id="${lesson.id}" style="font-size: 11px; padding: 4px 8px;">
                            📬 Submit
                          </button>
                        ` : ''}

                        ${lesson.status === 'submitted' && isAdminOrEditor ? `
                          <button class="btn btn-primary btn-sm btn-approve-lesson" data-id="${lesson.id}" style="font-size: 11px; padding: 4px 8px;">
                            ✓ Approve
                          </button>
                          <button class="btn btn-outline btn-sm btn-reject-lesson" data-id="${lesson.id}" style="font-size: 11px; padding: 4px 8px; color: #DC2626;">
                            ✕ Reject
                          </button>
                        ` : ''}

                        ${lesson.status === 'approved' && role === 'admin' ? `
                          <button class="btn btn-accent btn-sm btn-publish-lesson" data-id="${lesson.id}" style="font-size: 11px; padding: 4px 8px;">
                            🚀 Publish Live
                          </button>
                        ` : ''}

                        ${lesson.status === 'published' && role === 'admin' ? `
                          <button class="btn btn-outline btn-sm btn-unpublish-lesson" data-id="${lesson.id}" style="font-size: 11px; padding: 4px 8px;">
                            Unpublish
                          </button>
                        ` : ''}

                        <a href="#/lesson/${lesson.id}" class="btn btn-secondary btn-sm" style="font-size: 11px; padding: 4px 8px;">
                          Preview
                        </a>
                      </div>
                    </td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      </div>

      <!-- Schools and Governance Section -->
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--spacing-6); margin-bottom: var(--spacing-10);" class="hero-grid">
        <!-- School Records -->
        <div class="card">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <h4>Authorized Rural School Records</h4>
            <span class="badge badge-success">Active</span>
          </div>
          ${sampleSchools.map(sch => `
            <div style="padding: 12px; background: var(--color-surface-hover); border-radius: var(--radius-md); border: 1px solid var(--color-border); margin-bottom: 8px;">
              <strong>${sch.name}</strong>
              <div style="font-size: var(--font-size-xs); color: var(--color-text-muted); margin-top: 2px;">
                Code: ${sch.code} • ${sch.village}, ${sch.district}, ${sch.state}
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Role Permissions & Access Control -->
        <div class="card">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <h4>Row-Level Security & Role Policies</h4>
            <span class="badge badge-primary">Database Enforced</span>
          </div>
          <div style="font-size: var(--font-size-xs); color: var(--color-text-muted); line-height: 1.6;">
            <p><strong>Students:</strong> Read only published lessons for enrolled class. Update only personal quiz and progress records.</p>
            <p style="margin-top: 6px;"><strong>Teachers:</strong> Manage authorized classes, view assigned student progress, create lesson drafts.</p>
            <p style="margin-top: 6px;"><strong>Administrators:</strong> Publish reviewed content, manage school and class enrollments, review immutable audit logs.</p>
          </div>
        </div>
      </div>

      <!-- Real-time Immutable Audit Logs -->
      <div class="card">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--spacing-4);">
          <div>
            <h3>Platform & Content Audit Trail</h3>
            <p style="font-size: var(--font-size-sm); color: var(--color-text-muted);">
              Immutable ledger of administrative changes and publication actions.
            </p>
          </div>
          <span class="badge badge-accent">Live Activity</span>
        </div>

        <div class="table-responsive">
          <table class="data-table">
            <thead>
              <tr>
                <th>Action</th>
                <th>Actor</th>
                <th>Details</th>
                <th>Timestamp</th>
              </tr>
            </thead>
            <tbody>
              ${auditLogs.slice(0, 8).map(log => `
                <tr>
                  <td><span class="badge" style="font-family: monospace;">${log.action}</span></td>
                  <td><strong>${log.actor}</strong></td>
                  <td>${log.details}</td>
                  <td style="font-size: 11px; color: var(--color-text-muted);">
                    ${new Date(log.timestamp).toLocaleString()}
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>

      <!-- Create Lesson Draft Modal -->
      <div id="create-lesson-modal" class="modal-overlay" style="display: none;">
        <div class="modal-content" style="max-width: 650px; padding: var(--spacing-6);">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
            <h3>Create New Lesson Draft</h3>
            <button id="btn-close-create-modal" style="font-size: 20px; color: var(--color-text-muted);">✕</button>
          </div>

          <form id="create-lesson-form">
            <div style="margin-bottom: 12px;">
              <label style="display: block; font-size: var(--font-size-sm); font-weight: bold; margin-bottom: 4px;">Lesson Title:</label>
              <input type="text" id="draft-title" required placeholder="e.g. Exploring Shapes in Village Architecture" class="card" style="width: 100%; padding: 8px 12px; font-size: var(--font-size-sm);" />
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 12px;">
              <div>
                <label style="display: block; font-size: var(--font-size-sm); font-weight: bold; margin-bottom: 4px;">Grade Level (Class 1–8):</label>
                <select id="draft-grade" class="card" style="width: 100%; padding: 8px;">
                  ${[1, 2, 3, 4, 5, 6, 7, 8].map(g => `<option value="${g}">Class ${g}</option>`).join('')}
                </select>
              </div>

              <div>
                <label style="display: block; font-size: var(--font-size-sm); font-weight: bold; margin-bottom: 4px;">Subject:</label>
                <select id="draft-subject" class="card" style="width: 100%; padding: 8px;">
                  ${sampleSubjects.filter(s => s.id !== 'all').map(s => `<option value="${s.id}">${s.name}</option>`).join('')}
                </select>
              </div>
            </div>

            <div style="margin-bottom: 12px;">
              <label style="display: block; font-size: var(--font-size-sm); font-weight: bold; margin-bottom: 4px;">Curriculum Summary / Objectives:</label>
              <textarea id="draft-summary" required rows="2" placeholder="Brief explanation of what children will learn..." class="card" style="width: 100%; padding: 8px 12px; font-size: var(--font-size-sm);"></textarea>
            </div>

            <div style="margin-bottom: 16px;">
              <label style="display: block; font-size: var(--font-size-sm); font-weight: bold; margin-bottom: 4px;">Concept Card Explanation:</label>
              <textarea id="draft-concept" required rows="3" placeholder="Key concept text in clear, child-friendly village context..." class="card" style="width: 100%; padding: 8px 12px; font-size: var(--font-size-sm);"></textarea>
            </div>

            <div style="display: flex; justify-content: flex-end; gap: 12px;">
              <button type="button" class="btn btn-outline btn-sm" id="btn-cancel-create">Cancel</button>
              <button type="submit" class="btn btn-primary btn-sm">Save Draft</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  `;
}

export function setupAdminDashboardEvents() {
  const modal = document.getElementById('create-lesson-modal');
  const openModalBtn = document.getElementById('btn-create-lesson-modal');
  const closeModalBtn = document.getElementById('btn-close-create-modal');
  const cancelBtn = document.getElementById('btn-cancel-create');
  const form = document.getElementById('create-lesson-form');

  if (openModalBtn && modal) {
    openModalBtn.addEventListener('click', () => { modal.style.display = 'flex'; });
    closeModalBtn?.addEventListener('click', () => { modal.style.display = 'none'; });
    cancelBtn?.addEventListener('click', () => { modal.style.display = 'none'; });
  }

  // Handle Create Lesson Draft form submit
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const title = document.getElementById('draft-title').value;
      const grade = document.getElementById('draft-grade').value;
      const subject = document.getElementById('draft-subject').value;
      const summary = document.getElementById('draft-summary').value;
      const concept = document.getElementById('draft-concept').value;

      await adminService.createLessonDraft({
        title,
        grade_level: grade,
        subject_id: subject,
        summary,
        sections: [
          {
            id: 'sec-draft-1',
            title: 'Foundational Discovery',
            type: 'concept',
            read_aloud: concept,
            content: `<div class="learning-card"><h4>Key Concept</h4><p>${concept}</p></div>`
          }
        ],
        quiz: [
          {
            id: 'q-draft-1',
            prompt: `What is the core takeaway of "${title}"?`,
            options: [
              { id: 'opt1', text: 'To understand the fundamental principles', is_correct: true },
              { id: 'opt2', text: 'None of the above', is_correct: false }
            ],
            hint: 'Review the concept card.',
            explanation: 'Correct! You understood the key principle.'
          }
        ]
      });

      modal.style.display = 'none';
      toast.success(`Draft lesson "${title}" created successfully!`);
      // Reload page content
      window.location.reload();
    });
  }

  // Handle Submit for Review
  document.querySelectorAll('.btn-submit-review').forEach(btn => {
    btn.addEventListener('click', async () => {
      const id = btn.getAttribute('data-id');
      await adminService.submitForReview(id);
      toast.info('Lesson submitted for review!');
      window.location.reload();
    });
  });

  // Handle Approve
  document.querySelectorAll('.btn-approve-lesson').forEach(btn => {
    btn.addEventListener('click', async () => {
      const id = btn.getAttribute('data-id');
      await adminService.approveLesson(id, 'Meets regional government curriculum guidelines.');
      toast.success('Lesson approved by reviewer!');
      window.location.reload();
    });
  });

  // Handle Reject
  document.querySelectorAll('.btn-reject-lesson').forEach(btn => {
    btn.addEventListener('click', async () => {
      const id = btn.getAttribute('data-id');
      const reason = prompt('Enter feedback reason for rejection:', 'Needs clearer child-friendly examples.');
      if (reason) {
        await adminService.rejectLesson(id, reason);
        toast.warning('Lesson returned to draft with feedback.');
        window.location.reload();
      }
    });
  });

  // Handle Publish Live
  document.querySelectorAll('.btn-publish-lesson').forEach(btn => {
    btn.addEventListener('click', async () => {
      const id = btn.getAttribute('data-id');
      await adminService.publishLesson(id);
      toast.success('Lesson published live to students!');
      window.location.reload();
    });
  });

  // Handle Unpublish
  document.querySelectorAll('.btn-unpublish-lesson').forEach(btn => {
    btn.addEventListener('click', async () => {
      const id = btn.getAttribute('data-id');
      await adminService.unpublishLesson(id);
      toast.info('Lesson unpublished back to draft.');
      window.location.reload();
    });
  });
}
