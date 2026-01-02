/*
 * Diagnostic Tools module (Phase 8)
 *
 * This module defines a new chapter under Tools & Appendices that
 * consolidates definitions and formulas for diagnostic test evaluation.
 * Students can review sensitivity, specificity, predictive values and
 * accuracy and link directly to the Practice Problems generator to
 * practice calculations.  The content is static and does not require
 * any additional scripting.
 */

(function () {
  if (!window.EPIDEMIC_ENGINE_CONTENT) {
    window.EPIDEMIC_ENGINE_CONTENT = {};
  }
  window.EPIDEMIC_ENGINE_CONTENT.diagnostic_tools = {
    title: 'Diagnostic Tools',
    difficulty: 'C',
    content: `
      <h1>Diagnostic Tests & Measures</h1>
      <p>Diagnostic tests are evaluated using a handful of core metrics.  These metrics quantify
      how well a test distinguishes between individuals with and without a condition.</p>
      <h2>Key Metrics</h2>
      <ul>
        <li><strong>Sensitivity (True Positive Rate):</strong> proportion of people with the disease who test positive. Formula: TP / (TP + FN).</li>
        <li><strong>Specificity (True Negative Rate):</strong> proportion of people without the disease who test negative. Formula: TN / (TN + FP).</li>
        <li><strong>Positive Predictive Value (PPV):</strong> among those who test positive, the proportion who truly have the disease. Formula: TP / (TP + FP).</li>
        <li><strong>Negative Predictive Value (NPV):</strong> among those who test negative, the proportion who truly do not have the disease. Formula: TN / (TN + FN).</li>
        <li><strong>Accuracy:</strong> proportion of all tested individuals who are correctly classified. Formula: (TP + TN) / (TP + TN + FP + FN).</li>
      </ul>
      <h2>2×2 Diagnostic Table</h2>
      <table style="border-collapse:collapse; max-width:500px; margin-bottom:1rem;">
        <thead>
          <tr>
            <th style="border:1px solid #000;"></th>
            <th colspan="2" style="border:1px solid #000;">Disease Status</th>
          </tr>
          <tr>
            <th style="border:1px solid #000;">Test Result</th>
            <th style="border:1px solid #000;">Present</th>
            <th style="border:1px solid #000;">Absent</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="border:1px solid #000;">Positive</td>
            <td style="border:1px solid #000;">TP</td>
            <td style="border:1px solid #000;">FP</td>
          </tr>
          <tr>
            <td style="border:1px solid #000;">Negative</td>
            <td style="border:1px solid #000;">FN</td>
            <td style="border:1px solid #000;">TN</td>
          </tr>
        </tbody>
      </table>
      <p>You can practice calculating these measures using the <a href="#" onclick="loadChapter('random_problems'); return false;">Practice Problems</a> tool.  When prompted, select <em>sensitivity</em>, <em>specificity</em>, <em>PPV</em> or <em>NPV</em> from the metric picker.</p>
    `
  };
})();