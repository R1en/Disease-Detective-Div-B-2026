
(() => {
  // Global dashboard renderer
  window.renderCoachDashboard = function (containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    if (!window.AnalyticsManager) {
      container.innerHTML = '<p class="text-danger">Analytics Engine not loaded.</p>';
      return;
    }

    const global = window.AnalyticsManager.getGlobalStats();
    const weakAreas = window.AnalyticsManager.getWeakAreas().slice(0, 5); // Top 5
    const history = window.AnalyticsManager.getHistory().slice(0, 5); // Last 5 attempts

    let historyHtml = '';
    if (history.length === 0) {
      historyHtml = '<p>No exams recorded yet.</p>';
    } else {
      historyHtml = '<ul class="neo-list">';
      history.forEach(h => {
        historyHtml += `
                  <li>
                      <strong>${h.mode === 'simulation' ? 'Sim' : 'Quiz'}</strong>: 
                      ${h.score}/${h.maxScore} (${h.percent}%) 
                      <small class="text-muted">- ${new Date(h.timestamp).toLocaleDateString()}</small>
                  </li>`;
      });
      historyHtml += '</ul>';
    }

    let weakHtml = '';
    if (weakAreas.length === 0) {
      weakHtml = '<p>No data available yet.</p>';
    } else {
      weakHtml = '<ul class="neo-list">';
      weakAreas.forEach(w => {
        weakHtml += `<li><span class="bad-tag">${w.topic}</span>: ${w.count} misses</li>`;
      });
      weakHtml += '</ul>';
    }

    container.innerHTML = `
          <div class="stats-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem; margin-top: 1rem;">
              <div class="neo-card">
                  <h3><i class="ph-bold ph-chart-bar"></i> Performance</h3>
                  <div class="big-stat" style="font-size: 2.5rem; color: var(--navy-primary); font-weight: bold;">
                      ${global.averageScore}%
                  </div>
                  <p>Average Score across ${global.totalAttempts} attempts</p>
              </div>
              <div class="neo-card warning">
                  <h3><i class="ph-bold ph-warning"></i> Top Weak Areas</h3>
                  ${weakHtml}
              </div>
          </div>
          
          <div class="neo-card" style="margin-top: 1rem;">
              <h3><i class="ph-bold ph-clock-counter-clockwise"></i> Recent Activity</h3>
              ${historyHtml}
          </div>

          <div class="neo-card" style="margin-top: 1rem; border-left: 5px solid var(--accent-orange);">
               <h3><i class="ph-bold ph-eye-slash"></i> Proctor Tools</h3>
               <p>Use "Proctor Mode" to hide hints and explanations during mock exams.</p>
               <div style="display: flex; gap: 1rem; align-items: center; margin-top: 0.5rem;">
                  <button class="neo-btn" id="proctor-toggle" onclick="window.toggleProctorMode()">
                      ${localStorage.getItem('dd_proctor_mode') === 'true' ? 'Disable Proctor Mode' : 'Enable Proctor Mode'}
                  </button>
                  <span id="proctor-status" style="font-weight: bold; color: ${localStorage.getItem('dd_proctor_mode') === 'true' ? 'red' : 'green'};">
                      ${localStorage.getItem('dd_proctor_mode') === 'true' ? 'ACTIVE (Hints Hidden)' : 'INACTIVE (Hints Visible)'}
                  </span>
               </div>
          </div>
      `;
  };

  window.toggleProctorMode = function () {
    const current = localStorage.getItem('dd_proctor_mode') === 'true';
    const newState = !current;
    localStorage.setItem('dd_proctor_mode', newState);

    // Update UI
    const btn = document.getElementById('proctor-toggle');
    const status = document.getElementById('proctor-status');
    if (btn && status) {
      btn.textContent = newState ? 'Disable Proctor Mode' : 'Enable Proctor Mode';
      status.textContent = newState ? 'ACTIVE (Hints Hidden)' : 'INACTIVE (Hints Visible)';
      status.style.color = newState ? 'red' : 'green';
    }

    // Reload page recommendation
    if (confirm(`Proctor Mode ${newState ? 'ENABLED' : 'DISABLED'}. Reload to apply changes?`)) {
      location.reload();
    }
  };

})();
