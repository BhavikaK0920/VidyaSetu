// VidyaSetu Teacher Portal & Classroom Analytics
import { i18n } from '../i18n/i18n.js';
import { authService } from '../services/auth.service.js';
import { sampleClassroomData } from '../data/sample-data.js';
import { sampleLessons } from '../data/sample-lessons.js';
import { toast } from '../components/toast.js';

export function renderTeacherDashboard() {
  const user = authService.getCurrentUser();
  const data = sampleClassroomData;

  return `
    <div class="teacher-portal container" style="padding-top: var(--spacing-8); padding-bottom: var(--spacing-16);">
      <!-- Teacher Header -->
      <div class="card" style="margin-bottom: var(--spacing-8); background: linear-gradient(135deg, var(--color-surface) 0%, #E6F4ED 100%); border-left: 6px solid var(--color-primary);">
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px;">
          <div>
            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 6px;">
              <span style="font-size: 32px;">👨‍🏫</span>
              <h2>Teacher Portal — Master Suresh Kumar</h2>
            </div>
            <p style="color: var(--color-text-muted);">
              Govt Higher Primary School, Shivapura • Assigned to <strong>Class 4A & 5A</strong>
            </p>
          </div>

          <div style="display: flex; gap: 10px; flex-wrap: wrap;">
            <button class="btn btn-primary btn-sm" id="btn-assign-lesson">
              ➕ Assign New Lesson
            </button>
            <button class="btn btn-secondary btn-sm" id="btn-export-report">
              📊 Export Classroom Report (CSV)
            </button>
            <button class="btn btn-accent btn-sm" id="btn-download-pack">
              📥 Offline Teaching Pack
            </button>
          </div>
        </div>
      </div>

      <!-- KPI Metrics Overview -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(210px, 1fr)); gap: var(--spacing-4); margin-bottom: var(--spacing-8);">
        <div class="card" style="border-top: 4px solid var(--color-primary);">
          <div style="font-size: var(--font-size-xs); color: var(--color-text-muted); font-weight: bold;">ENROLLED STUDENTS</div>
          <div style="font-size: 32px; font-weight: var(--font-weight-heavy); color: var(--color-primary); margin: 6px 0;">
            ${data.enrolled_count}
          </div>
          <span style="font-size: var(--font-size-xs); color: var(--color-success);">✓ ${data.active_today} Active Today</span>
        </div>

        <div class="card" style="border-top: 4px solid #10B981;">
          <div style="font-size: var(--font-size-xs); color: var(--color-text-muted); font-weight: bold;">AVERAGE QUIZ SCORE</div>
          <div style="font-size: 32px; font-weight: var(--font-weight-heavy); color: #047857; margin: 6px 0;">
            ${data.average_quiz_score}%
          </div>
          <span style="font-size: var(--font-size-xs); color: var(--color-text-muted);">Across 4 Subjects</span>
        </div>

        <div class="card" style="border-top: 4px solid var(--color-accent);">
          <div style="font-size: var(--font-size-xs); color: var(--color-text-muted); font-weight: bold;">COMPLETION RATE</div>
          <div style="font-size: 32px; font-weight: var(--font-weight-heavy); color: #B45309; margin: 6px 0;">
            ${data.completion_rate}%
          </div>
          <span style="font-size: var(--font-size-xs); color: var(--color-text-muted);">Assigned curriculum</span>
        </div>

        <div class="card" style="border-top: 4px solid #DC2626;">
          <div style="font-size: var(--font-size-xs); color: var(--color-text-muted); font-weight: bold;">REVISION REQUIRED</div>
          <div style="font-size: 32px; font-weight: var(--font-weight-heavy); color: #DC2626; margin: 6px 0;">
            2 Topics
          </div>
          <span style="font-size: var(--font-size-xs); color: #991B1B;">Fractions & Water Cycle</span>
        </div>
      </div>

      <!-- Difficult Concepts Alert Box -->
      <div class="card" style="background: #FFFBEB; border: 1px solid #FCD34D; margin-bottom: var(--spacing-8); padding: var(--spacing-5);">
        <div style="display: flex; align-items: flex-start; gap: 12px;">
          <span style="font-size: 24px;">💡</span>
          <div>
            <h4 style="color: #92400E; margin-bottom: 4px;">Formative Assessment Alert — Concepts Requiring Classroom Revision</h4>
            <p style="font-size: var(--font-size-sm); color: #B45309; margin-bottom: 8px;">
              Automated analysis of recent quiz attempts highlights these topics where multiple village students need hands-on chalkboard explanation:
            </p>
            <div style="display: flex; flex-wrap: wrap; gap: 10px;">
              ${data.difficult_concepts.map(c => `
                <span class="badge" style="background: white; border: 1px solid #F59E0B; color: #92400E; font-size: 12px;">
                  ⚠️ ${c.topic} (${c.student_count_struggled} students struggled)
                </span>
              `).join('')}
            </div>
          </div>
        </div>
      </div>

      <!-- Enrolled Students Table -->
      <div class="card" style="margin-bottom: var(--spacing-10);">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--spacing-4); flex-wrap: wrap; gap: 12px;">
          <div>
            <h3>Class 4A Students Roster</h3>
            <p style="font-size: var(--font-size-sm); color: var(--color-text-muted);">
              Track individual progress, quiz mastery, and revision alerts.
            </p>
          </div>
          <span class="badge badge-primary">Showing 6 Students</span>
        </div>

        <div class="table-responsive">
          <table class="data-table">
            <thead>
              <tr>
                <th>Student Name</th>
                <th>Completed Lessons</th>
                <th>Avg Quiz Score</th>
                <th>Stars</th>
                <th>Status & Revision Needs</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              ${data.students.map(st => `
                <tr>
                  <td>
                    <strong>${st.name}</strong>
                  </td>
                  <td>${st.completed_lessons} / 5</td>
                  <td>
                    <span style="font-weight: bold; color: ${st.avg_score >= 80 ? '#15803D' : st.avg_score >= 60 ? '#D97706' : '#DC2626'};">
                      ${st.avg_score}%
                    </span>
                  </td>
                  <td>⭐ ${st.stars}</td>
                  <td>
                    <span class="badge ${st.status === 'On Track' ? 'badge-success' : 'badge-warning'}">
                      ${st.status}
                    </span>
                  </td>
                  <td>
                    <button class="btn btn-outline btn-sm btn-nudge-student" data-name="${st.name}" style="padding: 4px 10px; font-size: 11px;">
                      Remind
                    </button>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>

      <!-- Modal placeholder for assigning lesson -->
      <div id="assign-lesson-modal" style="display: none;" class="modal-overlay">
        <div class="modal-content" style="padding: var(--spacing-6);">
          <h3 style="margin-bottom: 12px;">Assign Lesson to Class 4A</h3>
          <p style="font-size: var(--font-size-sm); color: var(--color-text-muted); margin-bottom: 16px;">
            Select a verified curriculum lesson and set an optional completion date:
          </p>

          <div style="margin-bottom: 16px;">
            <label style="display: block; font-size: var(--font-size-sm); font-weight: bold; margin-bottom: 6px;">Select Lesson:</label>
            <select class="card" id="select-assign-lesson-id" style="width: 100%; padding: 10px;">
              ${sampleLessons.map(l => `
                <option value="${l.id}">[Class ${l.grade_level}] ${l.title} (${l.subject_name})</option>
              `).join('')}
            </select>
          </div>

          <div style="margin-bottom: 24px;">
            <label style="display: block; font-size: var(--font-size-sm); font-weight: bold; margin-bottom: 6px;">Due Date:</label>
            <input type="date" id="assign-due-date" class="card" style="width: 100%; padding: 10px;" value="${new Date(Date.now() + 86400000 * 7).toISOString().split('T')[0]}" />
          </div>

          <div style="display: flex; justify-content: flex-end; gap: 12px;">
            <button class="btn btn-outline btn-sm" id="btn-cancel-assign">Cancel</button>
            <button class="btn btn-primary btn-sm" id="btn-confirm-assign">Confirm Assignment</button>
          </div>
        </div>
      </div>
    </div>
  `;
}

export function setupTeacherDashboardEvents() {
  // Export Report Button (Generates CSV download)
  const exportBtn = document.getElementById('btn-export-report');
  if (exportBtn) {
    exportBtn.addEventListener('click', () => {
      const data = sampleClassroomData;
      let csv = 'Student ID,Name,Completed Lessons,Average Score,Stars,Status\n';
      data.students.forEach(s => {
        csv += `${s.id},"${s.name}",${s.completed_lessons},${s.avg_score}%,${s.stars},"${s.status}"\n`;
      });

      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.setAttribute('href', url);
      link.setAttribute('download', `VidyaSetu_Class_4A_Report_${new Date().toISOString().split('T')[0]}.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      toast.success('Downloaded Classroom Report CSV!');
    });
  }

  // Offline Teaching Pack
  const packBtn = document.getElementById('btn-download-pack');
  if (packBtn) {
    packBtn.addEventListener('click', () => {
      toast.info('Bundling all Class 4A lessons for offline classroom projector/tablet...');
      setTimeout(() => {
        toast.success('Class 4A Teaching Pack successfully cached for zero-internet teaching!');
      }, 800);
    });
  }

  // Assign modal
  const assignBtn = document.getElementById('btn-assign-lesson');
  const modal = document.getElementById('assign-lesson-modal');
  const cancelBtn = document.getElementById('btn-cancel-assign');
  const confirmBtn = document.getElementById('btn-confirm-assign');

  if (assignBtn && modal) {
    assignBtn.addEventListener('click', () => {
      modal.style.display = 'flex';
    });

    cancelBtn?.addEventListener('click', () => {
      modal.style.display = 'none';
    });

    confirmBtn?.addEventListener('click', () => {
      const select = document.getElementById('select-assign-lesson-id');
      const lessonTitle = select?.options[select.selectedIndex]?.text || 'Lesson';
      modal.style.display = 'none';
      toast.success(`Assigned "${lessonTitle}" to Class 4A with due date!`);
    });
  }

  // Nudge button
  document.querySelectorAll('.btn-nudge-student').forEach(btn => {
    btn.addEventListener('click', () => {
      const name = btn.getAttribute('data-name');
      toast.info(`Sent friendly reminder to ${name}`);
    });
  });
}
