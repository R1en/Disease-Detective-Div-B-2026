/*
 * Custom Flash Drills loader
 *
 * This module repairs the Flash Drills feature by aggregating all quiz
 * questions into a single pool and overriding the `getRandomQuestion`
 * method of the FlashDrills class. The original compiled code expects
 * each bank to expose a flattened `questions` array, but the quiz data
 * is organised by difficulty. Without a `questions` property, the pool
 * remains empty and the drills fail to load. This script runs after
 * the data and core bundles and reconstructs the quiz banks so that
 * FlashDrills can draw questions from all parts. It also provides
 * filtering by math vs content questions based on keywords and the
 * question type property.
 */

 (function () {
  // Only proceed if the FlashDrills class exists and the quiz banks are
  // available. FlashDrills may be defined with const/let (not on window).
  // Use typeof to detect its presence reliably.
  if (typeof FlashDrills === 'undefined' || !window.QUIZ_BANKS) return;

  const banks = window.QUIZ_BANKS;
  const aggregated = [];


  // Flatten each chapter’s questions into a single array and attach as
  // bank.questions. This allows the compiled template to find them. At
  // the same time, push all questions into the aggregated pool for
  // cross-chapter sampling.
  Object.keys(banks).forEach(key => {
    const bank = banks[key];
    if (!bank) return;
    const flat = [];
    Object.keys(bank).forEach(tier => {
      const arr = bank[tier];
      if (Array.isArray(arr)) {
        flat.push(...arr);
      }
    });
    bank.questions = flat;
    aggregated.push(...flat);
  });

  // Expose the aggregated pool on the global object.  This makes the
  // entire collection of quiz questions accessible to other modules
  // (e.g., the Quick Quiz) without needing to re‑flatten the banks.
  // Without this, the aggregated array is scoped to this IIFE and
  // cannot be discovered by external code. Assigning to
  // window.AGGREGATED_QUIZ_POOL preserves backward compatibility and
  // avoids polluting the global namespace with multiple new variables.
  window.AGGREGATED_QUIZ_POOL = aggregated;

  // Helper to determine if a question is math-oriented. Looks at the
  // explicit type field (e.g., 'calculation' or 'math') and also
  // scans the question text for the word "calculate".
  function isMathQuestion(q) {
    const text = (q.question || '').toString().toLowerCase();
    return q.type === 'calculation' || q.type === 'math' || text.includes('calculate');
  }

  // Override getRandomQuestion. Instead of iterating over banks that may
  // lack a questions array, we draw directly from the aggregated pool.
  FlashDrills.prototype.getRandomQuestion = function () {
    const pool = [];
    aggregated.forEach(q => {
      if (!q) return;
      const math = isMathQuestion(q);
      if (this.mode === 'math' && math) {
        pool.push(q);
      } else if (this.mode === 'content' && !math) {
        pool.push(q);
      } else if (this.mode === 'all') {
        pool.push(q);
      }
    });
    if (pool.length === 0) return null;
    return pool[Math.floor(Math.random() * pool.length)];
  };

  /*
   * Override the start and nextQuestion methods to leverage a pre-filtered
   * and shuffled pool of questions. The original implementation called
   * `nextQuestion()` immediately which, in turn, relied on
   * `getRandomQuestion()`. By preparing a customPool ahead of time we
   * ensure that questions are drawn sequentially and that the pool
   * respects the selected mode (all, math, content). When the pool is
   * exhausted it is reshuffled. The streak counter continues to be
   * maintained by the existing checkAnswer() logic.
   */

  // Preserve references to the original methods in case we need fallback
  const __origNext__ = FlashDrills.prototype.nextQuestion;

  FlashDrills.prototype.start = function () {
    const select = document.getElementById('drill-mode');
    this.mode = select ? select.value : 'all';
    this.streak = 0;
    // Build a custom pool filtered by mode
    const pool = [];
    aggregated.forEach(q => {
      if (!q) return;
      const math = isMathQuestion(q);
      if (this.mode === 'math' && math) {
        pool.push(q);
      } else if (this.mode === 'content' && !math) {
        pool.push(q);
      } else if (this.mode === 'all') {
        pool.push(q);
      }
    });
    // Shuffle the pool for randomness
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }
    this.customPool = pool;
    this.customIndex = 0;
    // Immediately render the first question
    this.nextQuestion();
  };

  FlashDrills.prototype.nextQuestion = function () {
    // If there is no custom pool fallback to original behaviour
    if (!this.customPool || this.customPool.length === 0) {
      return __origNext__.call(this);
    }
    // Reshuffle when we reach the end
    if (this.customIndex >= this.customPool.length) {
      for (let i = this.customPool.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.customPool[i], this.customPool[j]] = [this.customPool[j], this.customPool[i]];
      }
      this.customIndex = 0;
    }
    this.currentQuestion = this.customPool[this.customIndex++];
    // If currentQuestion somehow undefined, skip
    if (!this.currentQuestion) {
      return this.nextQuestion();
    }
    this.renderQuestion();
  };
})();