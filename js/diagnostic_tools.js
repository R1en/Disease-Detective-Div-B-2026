/*
 * Diagnostic Tools module (Enhanced)
 *
 * Interactive diagnostic test calculator with real-time computation of:
 * - Sensitivity (True Positive Rate)
 * - Specificity (True Negative Rate)
 * - Positive Predictive Value (PPV)
 * - Negative Predictive Value (NPV)
 * - Accuracy
 * - Prevalence
 * - Likelihood Ratios (LR+, LR-)
 */

(function () {
  if (!window.EPIDEMIC_ENGINE_CONTENT) {
    window.EPIDEMIC_ENGINE_CONTENT = {};
  }

  // Interactive Calculator Logic
  window.DiagnosticCalculator = {
    values: { tp: 0, fp: 0, fn: 0, tn: 0 },

    init() {
      const container = document.getElementById('diag-calc-container');
      if (!container) return;
      this.render();
      this.attachListeners();
    },

    render() {
      const container = document.getElementById('diag-calc-container');
      if (!container) return;

      container.innerHTML = `
        <div class="neo-card" style="margin-bottom: 2rem;">
          <h3 style="margin-top: 0;"><i class="ph-bold ph-grid-four"></i> Enter Diagnostic Test Data</h3>
          
          <!-- 2x2 Input Table -->
          <div style="overflow-x: auto; margin-bottom: 1.5rem;">
            <table style="border-collapse: collapse; width: 100%; max-width: 450px; margin: 0 auto;">
              <thead>
                <tr>
                  <th style="border: 2px solid #1e293b; padding: 0.75rem; background: #f8fafc;"></th>
                  <th colspan="2" style="border: 2px solid #1e293b; padding: 0.75rem; background: var(--navy-primary); color: white; text-align: center;">
                    Disease Status
                  </th>
                </tr>
                <tr>
                  <th style="border: 2px solid #1e293b; padding: 0.75rem; background: var(--navy-primary); color: white;">Test Result</th>
                  <th style="border: 2px solid #1e293b; padding: 0.75rem; background: #dcfce7; color: #166534; font-weight: bold;">Present (D+)</th>
                  <th style="border: 2px solid #1e293b; padding: 0.75rem; background: #fee2e2; color: #991b1b; font-weight: bold;">Absent (D-)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style="border: 2px solid #1e293b; padding: 0.75rem; background: #dbeafe; font-weight: bold;">Positive (T+)</td>
                  <td style="border: 2px solid #1e293b; padding: 0.5rem; background: #f0fdf4;">
                    <input type="number" id="diag-tp" class="diag-input" value="0" min="0" 
                           style="width: 100%; padding: 0.5rem; border: 2px solid #22c55e; border-radius: 4px; text-align: center; font-size: 1.1rem; font-weight: bold;">
                    <div style="font-size: 0.75rem; color: #166534; margin-top: 0.25rem; text-align: center;">TP (True Positive)</div>
                  </td>
                  <td style="border: 2px solid #1e293b; padding: 0.5rem; background: #fff1f2;">
                    <input type="number" id="diag-fp" class="diag-input" value="0" min="0"
                           style="width: 100%; padding: 0.5rem; border: 2px solid #ef4444; border-radius: 4px; text-align: center; font-size: 1.1rem; font-weight: bold;">
                    <div style="font-size: 0.75rem; color: #991b1b; margin-top: 0.25rem; text-align: center;">FP (False Positive)</div>
                  </td>
                </tr>
                <tr>
                  <td style="border: 2px solid #1e293b; padding: 0.75rem; background: #fef9c3; font-weight: bold;">Negative (T-)</td>
                  <td style="border: 2px solid #1e293b; padding: 0.5rem; background: #fef3c7;">
                    <input type="number" id="diag-fn" class="diag-input" value="0" min="0"
                           style="width: 100%; padding: 0.5rem; border: 2px solid #f59e0b; border-radius: 4px; text-align: center; font-size: 1.1rem; font-weight: bold;">
                    <div style="font-size: 0.75rem; color: #92400e; margin-top: 0.25rem; text-align: center;">FN (False Negative)</div>
                  </td>
                  <td style="border: 2px solid #1e293b; padding: 0.5rem; background: #eff6ff;">
                    <input type="number" id="diag-tn" class="diag-input" value="0" min="0"
                           style="width: 100%; padding: 0.5rem; border: 2px solid #3b82f6; border-radius: 4px; text-align: center; font-size: 1.1rem; font-weight: bold;">
                    <div style="font-size: 0.75rem; color: #1e40af; margin-top: 0.25rem; text-align: center;">TN (True Negative)</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style="display: flex; gap: 0.5rem; justify-content: center; margin-bottom: 1rem;">
            <button class="neo-btn small primary" onclick="DiagnosticCalculator.loadExample('high_sens')">
              <i class="ph ph-test-tube"></i> High Sensitivity
            </button>
            <button class="neo-btn small outline" onclick="DiagnosticCalculator.loadExample('high_spec')">
              <i class="ph ph-shield-check"></i> High Specificity
            </button>
            <button class="neo-btn small outline" onclick="DiagnosticCalculator.loadExample('balanced')">
              <i class="ph ph-scales"></i> Balanced
            </button>
            <button class="neo-btn small danger" onclick="DiagnosticCalculator.clear()">
              <i class="ph ph-trash"></i> Clear
            </button>
          </div>
        </div>

        <!-- Results Section -->
        <div id="diag-results" class="neo-card" style="background: #f8fafc;">
          <h3 style="margin-top: 0;"><i class="ph-bold ph-chart-pie"></i> Results</h3>
          <div id="diag-results-content">
            <p style="color: #64748b; text-align: center;">Enter values above to calculate metrics.</p>
          </div>
        </div>
      `;
    },

    attachListeners() {
      document.querySelectorAll('.diag-input').forEach(input => {
        input.addEventListener('input', () => this.calculate());
      });
    },

    loadExample(type) {
      let tp, fp, fn, tn;

      if (type === 'high_sens') {
        // Screening test: high sensitivity, lower specificity
        tp = 95; fp = 30; fn = 5; tn = 70;
      } else if (type === 'high_spec') {
        // Confirmatory test: high specificity, lower sensitivity
        tp = 70; fp = 5; fn = 30; tn = 95;
      } else {
        // Balanced
        tp = 80; fp = 15; fn = 20; tn = 85;
      }

      document.getElementById('diag-tp').value = tp;
      document.getElementById('diag-fp').value = fp;
      document.getElementById('diag-fn').value = fn;
      document.getElementById('diag-tn').value = tn;

      this.calculate();
    },

    clear() {
      document.getElementById('diag-tp').value = 0;
      document.getElementById('diag-fp').value = 0;
      document.getElementById('diag-fn').value = 0;
      document.getElementById('diag-tn').value = 0;
      this.calculate();
    },

    calculate() {
      const tp = parseInt(document.getElementById('diag-tp').value) || 0;
      const fp = parseInt(document.getElementById('diag-fp').value) || 0;
      const fn = parseInt(document.getElementById('diag-fn').value) || 0;
      const tn = parseInt(document.getElementById('diag-tn').value) || 0;

      const total = tp + fp + fn + tn;
      const diseasePos = tp + fn;
      const diseaseNeg = fp + tn;
      const testPos = tp + fp;
      const testNeg = fn + tn;

      if (total === 0) {
        document.getElementById('diag-results-content').innerHTML = `
          <p style="color: #64748b; text-align: center;">Enter values above to calculate metrics.</p>
        `;
        return;
      }

      // Calculate metrics
      const sensitivity = diseasePos > 0 ? (tp / diseasePos) * 100 : 0;
      const specificity = diseaseNeg > 0 ? (tn / diseaseNeg) * 100 : 0;
      const ppv = testPos > 0 ? (tp / testPos) * 100 : 0;
      const npv = testNeg > 0 ? (tn / testNeg) * 100 : 0;
      const accuracy = total > 0 ? ((tp + tn) / total) * 100 : 0;
      const prevalence = total > 0 ? (diseasePos / total) * 100 : 0;

      // Likelihood ratios
      const falseNegRate = diseasePos > 0 ? (fn / diseasePos) : 0;
      const falseposRate = diseaseNeg > 0 ? (fp / diseaseNeg) : 0;
      const lrPlus = falseposRate > 0 ? (sensitivity / 100) / falseposRate : Infinity;
      const lrMinus = (100 - specificity) > 0 ? falseNegRate / (specificity / 100) : 0;

      // Interpretation helpers
      const sensInterp = sensitivity >= 90 ? 'Excellent' : sensitivity >= 70 ? 'Good' : 'Poor';
      const specInterp = specificity >= 90 ? 'Excellent' : specificity >= 70 ? 'Good' : 'Poor';
      const sensColor = sensitivity >= 90 ? '#16a34a' : sensitivity >= 70 ? '#f59e0b' : '#dc2626';
      const specColor = specificity >= 90 ? '#16a34a' : specificity >= 70 ? '#f59e0b' : '#dc2626';

      document.getElementById('diag-results-content').innerHTML = `
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1rem; margin-bottom: 1.5rem;">
          
          <!-- Sensitivity -->
          <div class="neo-card small" style="text-align: center; border-left: 4px solid ${sensColor};">
            <div style="font-size: 2rem; font-weight: bold; color: ${sensColor};">${sensitivity.toFixed(1)}%</div>
            <div style="font-weight: bold;">Sensitivity</div>
            <div style="font-size: 0.8rem; color: #64748b;">TP / (TP + FN)</div>
            <div style="font-size: 0.75rem; margin-top: 0.25rem; color: ${sensColor};">${sensInterp}</div>
          </div>

          <!-- Specificity -->
          <div class="neo-card small" style="text-align: center; border-left: 4px solid ${specColor};">
            <div style="font-size: 2rem; font-weight: bold; color: ${specColor};">${specificity.toFixed(1)}%</div>
            <div style="font-weight: bold;">Specificity</div>
            <div style="font-size: 0.8rem; color: #64748b;">TN / (TN + FP)</div>
            <div style="font-size: 0.75rem; margin-top: 0.25rem; color: ${specColor};">${specInterp}</div>
          </div>

          <!-- PPV -->
          <div class="neo-card small" style="text-align: center; border-left: 4px solid var(--accent-purple);">
            <div style="font-size: 2rem; font-weight: bold; color: var(--accent-purple);">${ppv.toFixed(1)}%</div>
            <div style="font-weight: bold;">PPV</div>
            <div style="font-size: 0.8rem; color: #64748b;">TP / (TP + FP)</div>
          </div>

          <!-- NPV -->
          <div class="neo-card small" style="text-align: center; border-left: 4px solid var(--accent-blue);">
            <div style="font-size: 2rem; font-weight: bold; color: var(--accent-blue);">${npv.toFixed(1)}%</div>
            <div style="font-weight: bold;">NPV</div>
            <div style="font-size: 0.8rem; color: #64748b;">TN / (TN + FN)</div>
          </div>

          <!-- Accuracy -->
          <div class="neo-card small" style="text-align: center; border-left: 4px solid var(--teal-accent);">
            <div style="font-size: 2rem; font-weight: bold; color: var(--teal-accent);">${accuracy.toFixed(1)}%</div>
            <div style="font-weight: bold;">Accuracy</div>
            <div style="font-size: 0.8rem; color: #64748b;">(TP+TN) / Total</div>
          </div>

          <!-- Prevalence -->
          <div class="neo-card small" style="text-align: center; border-left: 4px solid var(--accent-orange);">
            <div style="font-size: 2rem; font-weight: bold; color: var(--accent-orange);">${prevalence.toFixed(1)}%</div>
            <div style="font-weight: bold;">Prevalence</div>
            <div style="font-size: 0.8rem; color: #64748b;">(TP+FN) / Total</div>
          </div>
        </div>

        <!-- Advanced Metrics -->
        <div class="neo-card small" style="background: white;">
          <h4 style="margin-top: 0;"><i class="ph-bold ph-trend-up"></i> Advanced: Likelihood Ratios</h4>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
            <div>
              <strong>LR+ (Positive):</strong> ${lrPlus === Infinity ? '∞' : lrPlus.toFixed(2)}
              <div style="font-size: 0.8rem; color: #64748b;">${lrPlus > 10 ? 'Strong rule-in' : lrPlus > 5 ? 'Moderate' : 'Weak'}</div>
            </div>
            <div>
              <strong>LR- (Negative):</strong> ${lrMinus.toFixed(3)}
              <div style="font-size: 0.8rem; color: #64748b;">${lrMinus < 0.1 ? 'Strong rule-out' : lrMinus < 0.2 ? 'Moderate' : 'Weak'}</div>
            </div>
          </div>
        </div>

        <!-- Summary Stats -->
        <div style="margin-top: 1rem; padding: 1rem; background: #f0f9ff; border-radius: 8px; border-left: 4px solid #0284c7;">
          <strong>Summary:</strong> 
          Total: ${total} | Disease+: ${diseasePos} | Disease-: ${diseaseNeg} | Test+: ${testPos} | Test-: ${testNeg}
        </div>

        <!-- Interpretation Guide -->
        <div class="accordion" style="margin-top: 1rem;">
          <div class="accordion-header"><i class="ph ph-question"></i> Interpretation Guide</div>
          <div class="accordion-content">
            <ul style="padding-left: 1.2rem; margin: 0;">
              <li><strong>High Sensitivity:</strong> Good for screening (few false negatives). If negative, disease is unlikely (SnNout).</li>
              <li><strong>High Specificity:</strong> Good for confirmation (few false positives). If positive, disease is likely (SpPin).</li>
              <li><strong>PPV depends on prevalence:</strong> In low prevalence, even good tests have low PPV.</li>
              <li><strong>LR+ > 10:</strong> Strong evidence FOR disease. <strong>LR- < 0.1:</strong> Strong evidence AGAINST disease.</li>
            </ul>
          </div>
        </div>
      `;

      // Setup accordion
      const accordions = document.querySelectorAll('.accordion-header');
      accordions.forEach(header => {
        header.addEventListener('click', () => {
          header.parentElement.classList.toggle('active');
        });
      });
    }
  };

  window.EPIDEMIC_ENGINE_CONTENT.diagnostic_tools = {
    title: 'Diagnostic Tools',
    difficulty: 'B/C',
    content: `
      <h1><i class="ph-bold ph-stethoscope"></i> Diagnostic Test Calculator</h1>
      
      <p class="lead">Interactive calculator for evaluating diagnostic test performance. Enter your 2×2 table data to instantly compute sensitivity, specificity, predictive values, and more.</p>

      <div class="study-tip" style="margin-bottom: 2rem;">
        <div class="callout-header"><i class="ph ph-lightbulb"></i> Key Concepts</div>
        <div class="callout-content">
          <p><strong>SnNout:</strong> High <u>Sn</u>ensitivity, <u>N</u>egative result rules <u>out</u> disease.</p>
          <p><strong>SpPin:</strong> High <u>Sp</u>ecificity, <u>P</u>ositive result rules <u>in</u> disease.</p>
        </div>
      </div>

      <div id="diag-calc-container"></div>

      <script>
        setTimeout(() => {
          if (window.DiagnosticCalculator) {
            window.DiagnosticCalculator.init();
          }
        }, 100);
      </script>

      <h2 style="margin-top: 3rem;">Quick Reference</h2>
      
      <div class="neo-card" style="overflow-x: auto;">
        <table class="table" style="width: 100%; border-collapse: collapse;">
          <thead>
            <tr style="background: var(--navy-primary); color: white;">
              <th style="padding: 0.75rem;">Metric</th>
              <th style="padding: 0.75rem;">Formula</th>
              <th style="padding: 0.75rem;">Interpretation</th>
            </tr>
          </thead>
          <tbody>
            <tr style="background: #f8fafc;">
              <td style="padding: 0.75rem; font-weight: bold;">Sensitivity</td>
              <td style="padding: 0.75rem;"><code>TP / (TP + FN)</code></td>
              <td style="padding: 0.75rem;">How well test detects disease (true positive rate)</td>
            </tr>
            <tr>
              <td style="padding: 0.75rem; font-weight: bold;">Specificity</td>
              <td style="padding: 0.75rem;"><code>TN / (TN + FP)</code></td>
              <td style="padding: 0.75rem;">How well test rules out disease (true negative rate)</td>
            </tr>
            <tr style="background: #f8fafc;">
              <td style="padding: 0.75rem; font-weight: bold;">PPV</td>
              <td style="padding: 0.75rem;"><code>TP / (TP + FP)</code></td>
              <td style="padding: 0.75rem;">If positive, probability of disease</td>
            </tr>
            <tr>
              <td style="padding: 0.75rem; font-weight: bold;">NPV</td>
              <td style="padding: 0.75rem;"><code>TN / (TN + FN)</code></td>
              <td style="padding: 0.75rem;">If negative, probability of no disease</td>
            </tr>
            <tr style="background: #f8fafc;">
              <td style="padding: 0.75rem; font-weight: bold;">Accuracy</td>
              <td style="padding: 0.75rem;"><code>(TP + TN) / Total</code></td>
              <td style="padding: 0.75rem;">Overall correct classification rate</td>
            </tr>
            <tr>
              <td style="padding: 0.75rem; font-weight: bold;">LR+</td>
              <td style="padding: 0.75rem;"><code>Sens / (1 - Spec)</code></td>
              <td style="padding: 0.75rem;">>10 = strong rule-in, 5-10 = moderate</td>
            </tr>
            <tr style="background: #f8fafc;">
              <td style="padding: 0.75rem; font-weight: bold;">LR-</td>
              <td style="padding: 0.75rem;"><code>(1 - Sens) / Spec</code></td>
              <td style="padding: 0.75rem;"><0.1 = strong rule-out</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="exam-trap" style="margin-top: 2rem;">
        <div class="callout-header"><i class="ph ph-warning"></i> Exam Trap</div>
        <div class="callout-content">
          <p><strong>Don't confuse Sensitivity/Specificity with PPV/NPV!</strong></p>
          <ul>
            <li>Sensitivity/Specificity are <strong>fixed properties</strong> of the test.</li>
            <li>PPV/NPV <strong>change with prevalence</strong> - in low prevalence populations, even great tests have low PPV!</li>
          </ul>
        </div>
      </div>
    `
  };
})();