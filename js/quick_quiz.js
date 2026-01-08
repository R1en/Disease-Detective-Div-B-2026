/*
 * Quick Quiz module
 *
 * This module provides a rapid multiple‑choice quiz drawn from the
 * aggregated question banks. It operates independently of the bundled
 * FlashDrills implementation and is invoked when the user opens the
 * “Quick Quiz” chapter from the sidebar.  Questions are shuffled and
 * presented one at a time. After each response the explanation is
 * displayed and a “Next” button advances to the following question.
 */

(function () {
  // Attach module to EPIDEMIC_ENGINE_CONTENT
  if (!window.EPIDEMIC_ENGINE_CONTENT) {
    window.EPIDEMIC_ENGINE_CONTENT = {};
  }
  window.EPIDEMIC_ENGINE_CONTENT.quick_quiz = {
    title: 'Quick Quiz',
    difficulty: 'C',
    content: `
      <h1>Quick Quiz</h1>
      <p>
        Test yourself with a set of random multiple‑choice questions drawn from the entire quiz bank.
        Each question appears one at a time. Select an answer to see if you are correct and read the
        explanation. When finished, you can restart to try new questions.
      </p>
      <div id="qq-container" style="margin-top:2rem;"></div>
    `
  };

  // Utility to flatten the QUIZ_BANKS structure into a single array of question objects
  function getAllQuestions(difficultyFilter) {
    /*
     * Prefer the aggregated question pool exposed by the custom flash drills
     * loader. If available, clone it to avoid mutating the original.
     * Note: The aggregated pool is usually already flattened. filtering by tier 
     * is harder here unless the items preserve 'tier' or 'difficulty'.
     * For now, we assume the aggregated pool is mixed.
     */
    if (Array.isArray(window.AGGREGATED_QUIZ_POOL) && window.AGGREGATED_QUIZ_POOL.length > 0) {
      return window.AGGREGATED_QUIZ_POOL.map(item => {
        if (!item) return null;
        // If we want to filter by difficulty, we need the item to have metadata.
        // Assuming undefined difficulty is available to all.
        if (difficultyFilter === 'B' && (item.difficulty === 'advanced' || item.tier === 'advanced')) return null;

        const question = item.question || item.q || '';
        const options = Array.isArray(item.options) ? item.options.slice() : [];
        // Determine correct index: prefer `correct` then `answer`
        let correct = (typeof item.correct === 'number') ? item.correct : item.answer;
        // ensure correct is numeric
        correct = typeof correct === 'number' ? correct : 0;
        const explain = item.explain || '';
        const image = item.image || null;
        return { question, options, correct, explain, image };
      }).filter(Boolean);
    }

    // Fallback to flattening the QUIZ_BANKS structure.  This supports both
    // global and window scopes. The data bundle defines QUIZ_BANKS as a
    // global variable and also attaches it to window.
    const questions = [];
    const banks = (typeof QUIZ_BANKS !== 'undefined' && QUIZ_BANKS) || window.QUIZ_BANKS || {};
    Object.keys(banks).forEach(key => {
      const bank = banks[key];
      if (!bank) return;
      Object.keys(bank).forEach(tier => {
        // Filtering Logic:
        // If Div B is selected, exclude 'advanced' scripts
        if (difficultyFilter === 'B' && tier === 'advanced') return;

        const arr = bank[tier];
        if (Array.isArray(arr)) {
          arr.forEach(item => {
            if (!item) return;
            const question = item.question || item.q || '';
            const options = Array.isArray(item.options) ? item.options.slice() : [];
            let correct = (typeof item.correct === 'number') ? item.correct : item.answer;
            correct = typeof correct === 'number' ? correct : 0;
            const explain = item.explain || '';
            const image = item.image || null;
            if (question && options.length) {
              questions.push({ question, options, correct, explain, image });
            }
          });
        }
      });
    });
    return questions;
  }

  // Shuffle an array in place
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // State for the current quiz session
  const session = {
    pool: [],
    index: 0,
    correct: 0,
    total: 0
  };

  // Render the start screen into the container
  const config = {
    count: 10,
    difficulty: 'C'
  };

  function renderStart() {
    const container = document.getElementById('qq-container');
    if (!container) return;

    // Check global division preference if set and local config not manually toggled yet?
    // Actually, we want to respect the user's manual choice in this session if they made one.
    // But initially specific to global.
    if (window.currentDivision && !config.difficulty) config.difficulty = window.currentDivision;

    container.innerHTML = `
      <div class="neo-card" style="max-width:600px; margin:0 auto; padding:2rem; text-align:center;">
        <h2 style="margin-top:0; color:var(--navy-primary);">Begin Quiz</h2>
        <p>Select your preferences below and click Start.</p>
        
        <div style="margin-bottom:1.5rem;">
          <label style="display:block; margin-bottom:0.5rem; font-weight:bold; font-size:0.9rem; text-transform:uppercase; letter-spacing:1px;">Difficulty Level</label>
          <div id="grp-diff" style="display:flex; justify-content:center; gap:0.5rem;">
            <button class="neo-btn ${config.difficulty === 'B' ? 'primary' : 'outline'}" data-val="B" style="min-width:100px;">Div B</button>
            <button class="neo-btn ${config.difficulty === 'C' ? 'primary' : 'outline'}" data-val="C" style="min-width:100px;">Div C</button>
          </div>
        </div>

        <div style="margin-bottom:2rem;">
          <label style="display:block; margin-bottom:0.5rem; font-weight:bold; font-size:0.9rem; text-transform:uppercase; letter-spacing:1px;">Number of Questions</label>
          <div id="grp-count" style="display:flex; justify-content:center; gap:0.5rem;">
            <button class="neo-btn ${config.count === 5 ? 'primary' : 'outline'}" data-val="5" style="min-width:60px;">5</button>
            <button class="neo-btn ${config.count === 10 ? 'primary' : 'outline'}" data-val="10" style="min-width:60px;">10</button>
            <button class="neo-btn ${config.count === 15 ? 'primary' : 'outline'}" data-val="15" style="min-width:60px;">15</button>
          </div>
        </div>

        <button id="qq-start-btn" class="neo-btn primary" style="padding: 1rem 3rem; font-size: 1.2rem;">Start Quiz</button>
      </div>
    `;

    // Attach listeners
    container.querySelectorAll('#grp-diff button').forEach(btn => {
      btn.onclick = () => {
        config.difficulty = btn.getAttribute('data-val');
        renderStart();
      };
    });

    container.querySelectorAll('#grp-count button').forEach(btn => {
      btn.onclick = () => {
        config.count = parseInt(btn.getAttribute('data-val'));
        renderStart();
      };
    });

    document.getElementById('qq-start-btn').onclick = () => {
      startQuiz(config.count);
    };
  }

  // Override internal function logic (we are replacing the whole block)
  function startQuiz(count) {
    session.correct = 0;
    session.index = 0;

    // Filter by configured difficulty
    const all = getAllQuestions(config.difficulty);
    shuffle(all);
    session.pool = all.slice(0, count);
    session.total = session.pool.length;
    renderQuestion();
  }



  // Render the current question
  function renderQuestion() {
    const container = document.getElementById('qq-container');
    if (!container) return;
    // If we've exhausted the pool, show results
    if (session.index >= session.pool.length) {
      renderResults();
      return;
    }
    const q = session.pool[session.index];
    // Shuffle options but track correctness
    const options = q.options.map((text, idx) => ({ text, isCorrect: idx === q.correct }));
    shuffle(options);
    // Build HTML
    let html = `<div class="neo-card" style="max-width:800px; margin:0 auto; padding:2rem;">`;
    html += `<div style="margin-bottom:1.5rem; font-size:1.1rem; font-weight:500;">Q${session.index + 1} of ${session.total}: ${q.question}`;
    if (q.image) {
      html += `<img src="${q.image}" style="max-width:100%; margin-top:1rem; border-radius:8px;" alt="Question illustration">`;
    }
    html += `</div>`;
    html += `<div id="qq-options" style="display:grid; gap:1rem;">`;
    options.forEach((opt, idx) => {
      html += `<button class="neo-btn outline" data-correct="${opt.isCorrect}" style="text-align:left; padding:0.8rem;">`;
      html += `<span style="font-weight:bold; margin-right:0.5rem;">${String.fromCharCode(65 + idx)}.</span> ${opt.text}`;
      html += `</button>`;
    });
    html += `</div>`;
    html += `<div id="qq-feedback" style="margin-top:1.5rem;"></div>`;
    html += `</div>`;
    container.innerHTML = html;
    // Attach click handlers
    Array.from(container.querySelectorAll('#qq-options button')).forEach(btn => {
      btn.onclick = () => {
        const isCorrect = btn.getAttribute('data-correct') === 'true';
        checkAnswer(isCorrect, q.explain || '');
      };
    });
  }

  // Process the answer and show feedback
  function checkAnswer(isCorrect, explanation) {
    const feedback = document.getElementById('qq-feedback');
    if (!feedback) return;
    const color = isCorrect ? 'var(--success-primary)' : 'var(--danger-primary)';
    const prefix = isCorrect ? '<strong>Correct!</strong>' : '<strong>Incorrect.</strong>';
    if (isCorrect) session.correct++;
    feedback.innerHTML = `<p style="color:${color}; margin-top:0;">${prefix} ${explanation}</p>`;
    // Disable all option buttons
    const optionButtons = document.querySelectorAll('#qq-options button');
    optionButtons.forEach(btn => {
      btn.disabled = true;
      btn.style.pointerEvents = 'none';
    });
    // Add next button
    feedback.innerHTML += `<button id="qq-next-btn" class="neo-btn primary" style="margin-top:1rem;">Next</button>`;
    document.getElementById('qq-next-btn').onclick = () => {
      session.index++;
      renderQuestion();
    };
  }

  // Show quiz results
  function renderResults() {
    const container = document.getElementById('qq-container');
    if (!container) return;
    const percent = ((session.correct / session.total) * 100).toFixed(0);
    container.innerHTML = `
      <div class="neo-card" style="max-width:600px; margin:0 auto; padding:2rem; text-align:center;">
        <h2 style="margin-top:0; color:var(--navy-primary);">Quiz Complete</h2>
        <p>You answered <strong>${session.correct}</strong> out of <strong>${session.total}</strong> questions correctly (<strong>${percent}%</strong>).</p>
        <button id="qq-restart-btn" class="neo-btn primary">Restart</button>
      </div>
    `;
    document.getElementById('qq-restart-btn').onclick = () => {
      renderStart();
    };
  }

  // Wait for the Quick Quiz container to appear, then render the start screen
  function waitForContainer() {
    const container = document.getElementById('qq-container');
    if (container) {
      renderStart();
    } else {
      setTimeout(waitForContainer, 150);
    }
  }

  waitForContainer();

  // Reinitialise when navigating back to the chapter
  document.querySelectorAll('.nav-item').forEach(btn => {
    if (btn.getAttribute('data-chapter') === 'quick_quiz') {
      btn.addEventListener('click', () => {
        setTimeout(() => {
          waitForContainer();
        }, 150);
      });
    }
  });
})();