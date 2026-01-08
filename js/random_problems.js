/*
 * Enhanced Practice Problems module for the Epidemic Engine
 *
 * This script powers the "Practice Problems" chapter in Tools & Appendices.
 * Problems are drawn from a variety of common epidemiologic calculations used
 * in Science Olympiad Disease Detectives, including relative risk, risk
 * difference, odds ratio, attributable risk proportion, vaccine efficacy,
 * sensitivity, specificity, positive predictive value and negative
 * predictive value. Each time the user loads the page or clicks "New
 * Problem" a fresh 2×2 table is generated along with the appropriate
 * question prompt and an input for the learner’s answer. Immediate
 * feedback explains the correct calculation and highlights common
 * mistakes.
 */

(function () {
  // Ensure global content container exists
  window.EPIDEMIC_ENGINE_CONTENT = window.EPIDEMIC_ENGINE_CONTENT || {};

  // Register chapter metadata. The actual problems will be injected into
  // #rp-problem-container by this script when the chapter is loaded.
  window.EPIDEMIC_ENGINE_CONTENT.random_problems = {
    title: 'Practice Problems',
    difficulty: 'C',
    content: `
      <h1>Interactive Practice Problems</h1>
      <p>
        Test your understanding of outbreak mathematics and diagnostic testing. Each problem
        presents a 2×2 table and asks you to compute a key epidemiologic measure. Work to two
        decimal places and then click <strong>Check Answer</strong> for feedback. Click
        <strong>New Problem</strong> to practise a different concept.
      </p>
      <div id="rp-problem-container" style="margin-top: 2rem;"></div>
    `
  };

  // Types of problems supported. Each entry maps to a generator function and
  // an explanation template. The key is used in prompts and scoring.
  const MEASURES = {
    rr: { name: 'Relative Risk', category: 'exposure' },
    rd: { name: 'Risk Difference', category: 'exposure' },
    or: { name: 'Odds Ratio', category: 'exposure' },
    arp: { name: 'Attributable Risk Proportion', category: 'exposure' },
    ve: { name: 'Vaccine Efficacy', category: 'exposure' },
    sensitivity: { name: 'Sensitivity', category: 'test' },
    specificity: { name: 'Specificity', category: 'test' },
    ppv: { name: 'Positive Predictive Value', category: 'test' },
    npv: { name: 'Negative Predictive Value', category: 'test' }
  };

  // State for the current problem
  let currentProblem = null;

  // Utility: random integer between min and max inclusive
  function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  /**
   * Generate a new problem of the given measure type for exposure-based measures.
   * Returns an object containing counts (a, b, c, d) and computed statistics.
   */
  function generateExposureProblem(measure) {
    // Generate counts for exposed vs unexposed
    const exposedTotal = randInt(40, 120);
    const exposedIll = randInt(5, Math.max(5, Math.min(exposedTotal - 5, 60)));
    const exposedWell = exposedTotal - exposedIll;
    const unexposedTotal = randInt(40, 120);
    const unexposedIll = randInt(2, Math.max(2, Math.min(unexposedTotal - 2, 40)));
    const unexposedWell = unexposedTotal - unexposedIll;
    const a = exposedIll;
    const b = exposedWell;
    const c = unexposedIll;
    const d = unexposedWell;
    const riskExposed = a / (a + b);
    const riskUnexposed = c / (c + d);
    const oddsExposed = a / b;
    const oddsUnexposed = c / d;
    const rr = riskExposed / riskUnexposed;
    const rd = riskExposed - riskUnexposed;
    const or = oddsExposed / oddsUnexposed;
    const arp = rd / riskExposed; // as a proportion
    // For vaccine efficacy, treat unexposed as unvaccinated group; high risk
    const ve = ((riskUnexposed - riskExposed) / riskUnexposed);
    return {
      type: measure,
      counts: { a, b, c, d },
      riskExposed,
      riskUnexposed,
      oddsExposed,
      oddsUnexposed,
      rr,
      rd,
      or,
      arp,
      ve
    };
  }

  /**
   * Generate a new problem of the given measure type for diagnostic test measures.
   * Returns an object containing counts and computed statistics.
   */
  function generateTestProblem(measure) {
    // Generate a simple diagnostic 2×2: Disease Yes/No vs Test Positive/Negative
    const diseaseYes = randInt(40, 150);
    const diseaseNo = randInt(40, 150);
    const truePos = randInt(10, Math.max(10, Math.floor(diseaseYes * 0.8)));
    const falseNeg = diseaseYes - truePos;
    const trueNeg = randInt(10, Math.max(10, Math.floor(diseaseNo * 0.8)));
    const falsePos = diseaseNo - trueNeg;
    const a = truePos;
    const b = falsePos;
    const c = falseNeg;
    const d = trueNeg;
    const sensitivity = a / (a + c);
    const specificity = d / (b + d);
    const ppv = a / (a + b);
    const npv = d / (c + d);
    return {
      type: measure,
      counts: { a, b, c, d },
      sensitivity,
      specificity,
      ppv,
      npv
    };
  }

  /**
   * Generate a random problem across all measure types.
   */
  function generateProblem() {
    const keys = Object.keys(MEASURES);
    const randomKey = keys[randInt(0, keys.length - 1)];
    const measure = MEASURES[randomKey];
    let problem;
    if (measure.category === 'exposure') {
      problem = generateExposureProblem(randomKey);
    } else {
      problem = generateTestProblem(randomKey);
    }
    problem.displayName = measure.name;
    return problem;
  }

  /**
   * Format a number as a percentage with one decimal place, dropping trailing zeros.
   */
  function formatPercent(value) {
    return (value * 100).toFixed(1).replace(/\.0$/, '');
  }

  /**
   * Format a ratio with two decimal places.
   */
  function formatRatio(value) {
    return value.toFixed(2);
  }

  /**
   * Build the HTML table for a 2×2 problem. Accepts counts {a, b, c, d} and a flag
   * indicating whether the row labels should be "Exposed/Unexposed" or
   * "Disease Yes/Disease No". Returns a string of HTML.
   */
  function buildTable(counts, category) {
    let row1 = 'Exposed';
    let row2 = 'Unexposed';
    let col1 = 'Ill';
    let col2 = 'Well';
    if (category === 'test') {
      row1 = 'Disease Yes';
      row2 = 'Disease No';
      col1 = 'Test +';
      col2 = 'Test –';
    }
    const { a, b, c, d } = counts;
    const totalRow1 = a + b;
    const totalRow2 = c + d;
    return `
      <table class="neo-table" style="max-width:500px; margin: 1rem 0; border: 2px solid var(--navy-primary); border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
        <thead>
          <tr style="background: var(--navy-primary); color: white;">
            <th style="padding: 0.75rem; text-align: center; border-right: 1px solid rgba(255,255,255,0.2);"></th>
            <th style="padding: 0.75rem; text-align: center; border-right: 1px solid rgba(255,255,255,0.2);">${col1}</th>
            <th style="padding: 0.75rem; text-align: center; border-right: 1px solid rgba(255,255,255,0.2);">${col2}</th>
            <th style="padding: 0.75rem; text-align: center; background: rgba(0,0,0,0.2);">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr style="background: white;">
            <td style="padding: 0.75rem; font-weight: bold; background: #f8fafc; border-right: 1px solid #e2e8f0; border-bottom: 1px solid #e2e8f0;">${row1}</td>
            <td style="padding: 0.75rem; text-align: center; border-right: 1px solid #e2e8f0; border-bottom: 1px solid #e2e8f0; font-family: monospace; font-size: 1.1em;">${a}</td>
            <td style="padding: 0.75rem; text-align: center; border-right: 1px solid #e2e8f0; border-bottom: 1px solid #e2e8f0; font-family: monospace; font-size: 1.1em;">${b}</td>
            <td style="padding: 0.75rem; text-align: center; background: #f1f5f9; border-bottom: 1px solid #e2e8f0; font-weight: bold;">${totalRow1}</td>
          </tr>
          <tr style="background: white;">
            <td style="padding: 0.75rem; font-weight: bold; background: #f8fafc; border-right: 1px solid #e2e8f0;">${row2}</td>
            <td style="padding: 0.75rem; text-align: center; border-right: 1px solid #e2e8f0; font-family: monospace; font-size: 1.1em;">${c}</td>
            <td style="padding: 0.75rem; text-align: center; border-right: 1px solid #e2e8f0; font-family: monospace; font-size: 1.1em;">${d}</td>
            <td style="padding: 0.75rem; text-align: center; background: #f1f5f9; font-weight: bold;">${totalRow2}</td>
          </tr>
        </tbody>
      </table>
    `;
  }

  /**
   * Render the current problem into the DOM. Creates the table, prompt,
   * input, and attaches event handlers for checking and generating new
   * problems. This function assigns to the global `currentProblem`.
   */
  function renderProblem() {
    const container = document.getElementById('rp-problem-container');
    if (!container) return;
    // Generate and store new problem
    currentProblem = generateProblem();
    const { counts, type, displayName: _displayName } = currentProblem;
    const category = MEASURES[type].category;

    // Build table and prompt based on problem type
    const tableHTML = buildTable(counts, category);
    let promptText = '';
    let formulaHTML = '';
    switch (type) {
      case 'rr':
        promptText = 'Calculate the relative risk (risk ratio) of disease among the exposed compared with the unexposed.';
        formulaHTML = '<code>RR = [a/(a+b)] / [c/(c+d)]</code>';
        break;
      case 'rd':
        promptText = 'Calculate the risk difference (risk exposed minus risk unexposed).';
        formulaHTML = '<code>RD = [a/(a+b)] - [c/(c+d)]</code>';
        break;
      case 'or':
        promptText = 'Calculate the odds ratio of disease for the exposed versus the unexposed.';
        formulaHTML = '<code>OR = (a/b) / (c/d)</code>';
        break;
      case 'arp':
        promptText = 'Calculate the attributable risk proportion (also called attributable fraction among the exposed). Express as a percentage.';
        formulaHTML = '<code>ARP = ([a/(a+b)] - [c/(c+d)]) / [a/(a+b)] × 100%</code>';
        break;
      case 've':
        promptText = 'Assuming the first row represents vaccinated individuals and the second row unvaccinated individuals, calculate the vaccine efficacy (VE). Express as a percentage.';
        formulaHTML = '<code>VE = ([c/(c+d)] - [a/(a+b)]) / [c/(c+d)] × 100%</code>';
        break;
      case 'sensitivity':
        promptText = 'Calculate the sensitivity of the test.';
        formulaHTML = '<code>Sensitivity = TP / (TP + FN) = a / (a + c)</code>';
        break;
      case 'specificity':
        promptText = 'Calculate the specificity of the test.';
        formulaHTML = '<code>Specificity = TN / (FP + TN) = d / (b + d)</code>';
        break;
      case 'ppv':
        promptText = 'Calculate the positive predictive value (PPV) of the test.';
        formulaHTML = '<code>PPV = TP / (TP + FP) = a / (a + b)</code>';
        break;
      case 'npv':
        promptText = 'Calculate the negative predictive value (NPV) of the test.';
        formulaHTML = '<code>NPV = TN / (TN + FN) = d / (c + d)</code>';
        break;
    }

    // Build input controls
    const inputPlaceholder = (type === 'arp' || type === 've' || type === 'sensitivity' || type === 'specificity' || type === 'ppv' || type === 'npv') ? 'e.g., 75.0' : 'e.g., 2.50';
    const tableAndPrompt = `
      ${tableHTML}
      <p style="margin-bottom:0.5rem;">${promptText}</p>
      <p style="font-size:0.9rem; color:var(--text-muted); margin-top:0; margin-bottom:1rem;">${formulaHTML}</p>
      <div style="display:flex; flex-wrap:wrap; gap:0.5rem; align-items:center; margin-bottom:1rem;">
        <input id="rp-answer" type="number" step="0.01" placeholder="${inputPlaceholder}" style="width:120px; padding:0.4rem; border:1px solid var(--border-color); border-radius:4px;" />
        <button id="rp-check-btn" class="neo-btn">Check Answer</button>
        <button id="rp-new-btn" class="neo-btn secondary">New Problem</button>
      </div>
      <div id="rp-feedback" style="margin-top:0.5rem;"></div>
    `;
    container.innerHTML = tableAndPrompt;

    // Attach handlers
    document.getElementById('rp-check-btn').onclick = function () {
      checkAnswer();
    };
    document.getElementById('rp-new-btn').onclick = function () {
      renderProblem();
    };
  }

  /**
   * Provide feedback based on the user's answer. Accepts the input value,
   * compares to the true metric and prints explanation. Answers are considered
   * correct if within ±0.05 for ratios or ±2 percentage points for percentages.
   */
  function checkAnswer() {
    const feedback = document.getElementById('rp-feedback');
    const inputEl = document.getElementById('rp-answer');
    if (!feedback || !inputEl || !currentProblem) return;
    const userVal = parseFloat(inputEl.value);
    if (isNaN(userVal)) {
      feedback.innerHTML = `<p style="color: var(--danger-primary);">Please enter a numeric value.</p>`;
      return;
    }
    const { type } = currentProblem;
    let correctVal;
    let tolerance;
    // Determine the correct value and tolerance depending on measure type
    if (type === 'rr') {
      correctVal = currentProblem.rr;
      tolerance = 0.05;
    } else if (type === 'rd') {
      correctVal = currentProblem.rd;
      tolerance = 0.05;
    } else if (type === 'or') {
      correctVal = currentProblem.or;
      tolerance = 0.05;
    } else if (type === 'arp') {
      correctVal = currentProblem.arp * 100; // convert to percent
      tolerance = 2; // percentage points
    } else if (type === 've') {
      correctVal = currentProblem.ve * 100;
      tolerance = 2;
    } else if (type === 'sensitivity') {
      correctVal = currentProblem.sensitivity * 100;
      tolerance = 2;
    } else if (type === 'specificity') {
      correctVal = currentProblem.specificity * 100;
      tolerance = 2;
    } else if (type === 'ppv') {
      correctVal = currentProblem.ppv * 100;
      tolerance = 2;
    } else if (type === 'npv') {
      correctVal = currentProblem.npv * 100;
      tolerance = 2;
    }
    const diff = Math.abs(userVal - correctVal);

    // Build explanation string
    const { counts } = currentProblem;
    const { a, b, c, d } = counts;
    let explanation = '';
    switch (type) {
      case 'rr':
        explanation = `Risk in exposed = ${formatPercent(currentProblem.riskExposed)}%. Risk in unexposed = ${formatPercent(currentProblem.riskUnexposed)}%. RR = ${formatRatio(currentProblem.rr)}.`;
        break;
      case 'rd':
        explanation = `Risk in exposed = ${formatPercent(currentProblem.riskExposed)}%. Risk in unexposed = ${formatPercent(currentProblem.riskUnexposed)}%. RD = ${formatRatio(currentProblem.rd)}.`;
        break;
      case 'or':
        explanation = `Odds in exposed = ${formatRatio(currentProblem.oddsExposed)}. Odds in unexposed = ${formatRatio(currentProblem.oddsUnexposed)}. OR = ${formatRatio(currentProblem.or)}.`;
        break;
      case 'arp':
        explanation = `Risk difference = ${formatPercent(currentProblem.rd)}%. ARP = (RD / Risk in exposed) × 100% = ${formatPercent(currentProblem.arp)}%.`;
        break;
      case 've':
        explanation = `Attack rate unvaccinated = ${formatPercent(currentProblem.riskUnexposed)}%. Attack rate vaccinated = ${formatPercent(currentProblem.riskExposed)}%. VE = ${formatPercent(currentProblem.ve)}%.`;
        break;
      case 'sensitivity':
        explanation = `Sensitivity = TP / (TP + FN) = ${a} / (${a} + ${c}) = ${formatPercent(currentProblem.sensitivity)}%.`;
        break;
      case 'specificity':
        explanation = `Specificity = TN / (FP + TN) = ${d} / (${b} + ${d}) = ${formatPercent(currentProblem.specificity)}%.`;
        break;
      case 'ppv':
        explanation = `PPV = TP / (TP + FP) = ${a} / (${a} + ${b}) = ${formatPercent(currentProblem.ppv)}%.`;
        break;
      case 'npv':
        explanation = `NPV = TN / (TN + FN) = ${d} / (${c} + ${d}) = ${formatPercent(currentProblem.npv)}%.`;
        break;
    }

    const correctDisplay = (type === 'rr' || type === 'rd' || type === 'or') ? formatRatio(correctVal) : `${correctVal.toFixed(1).replace(/\.0$/, '')}%`;
    if (diff <= tolerance) {
      feedback.innerHTML = `<p style="color: var(--success-primary);"><strong>Correct!</strong> ${explanation}</p>`;
    } else {
      feedback.innerHTML = `<p style="color: var(--danger-primary);"><strong>Not quite.</strong> ${explanation} The correct value is ${correctDisplay}.</p>`;
    }
  }

  /**
   * Poll for the problem container and render the first problem once the chapter is loaded.
   */
  function waitForContainer() {
    const container = document.getElementById('rp-problem-container');
    if (container) {
      renderProblem();
    } else {
      setTimeout(waitForContainer, 200);
    }
  }

  // Expose initialization API globally for Tools Manager
  window.RandomProblems = {
    init: function () {
      // Ensure container exists logic is handled by Tools Manager or polling
      waitForContainer();
    },
    render: renderProblem
  };

  // Start polling once
  waitForContainer();
})();