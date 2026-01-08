(() => {
    /**
     * Epidemic Engine Navigation System
     * Handles sidebar navigation and dynamic content loading
     */

    const _APP_VERSION = 'v6.0.0';

    document.addEventListener('DOMContentLoaded', () => {
        // console.log(`[EPIDEMIC ENGINE] Initializing ${APP_VERSION}...`);

        // Setup navigation
        setupNavigation();
        setupProtection(); // Content Protection

        // History API Integration: Handle initial load based on URL hash
        const hash = window.location.hash.slice(1); // Remove '#'
        const initialChapter = hash || 'welcome';

        // Load initial content (don't push state for initial load)
        loadChapter(initialChapter, false);

        // History API Integration: Handle Back/Forward buttons
        window.addEventListener('popstate', (event) => {
            if (event.state && event.state.chapter) {
                loadChapter(event.state.chapter, false);
            } else {
                // Fallback for hash-only navigation or empty state
                const currentHash = window.location.hash.slice(1);
                loadChapter(currentHash || 'welcome', false);
            }
        });

        // Initialize UI Helpers
        /**
         * Global UI Utilities for notifications and modals.
         * @namespace
         */
        window.UI = {
            /**
             * Shows a temporary toast notification.
             * @param {string} msg - The message to display.
             * @param {string} [type='info'] - 'info', 'success', or 'error'.
             */
            toast: function (msg, type = 'info') {
                const el = document.createElement('div');
                el.className = `neo-toast ${type}`;
                el.innerHTML = `<i class="ph-bold ${type === 'success' ? 'ph-check' : 'ph-info'}"></i> ${msg}`;
                document.body.appendChild(el);
                setTimeout(() => el.classList.add('show'), 10);
                setTimeout(() => {
                    el.classList.remove('show');
                    setTimeout(() => el.remove(), 300);
                }, 3000);
            },
            modal: function (title, msg, onConfirm) {
                const overlay = document.createElement('div');
                overlay.className = 'neo-modal-overlay';
                overlay.innerHTML = `
                <div class="neo-modal">
                    <div class="neo-modal-header">
                        <h3>${title}</h3>
                        <button class="neo-btn icon-only" onclick="this.closest('.neo-modal-overlay').remove()"><i class="ph-bold ph-x"></i></button>
                    </div>
                    <div class="neo-modal-body">${msg}</div>
                    <div class="neo-modal-footer">
                        <button class="neo-btn outline" onclick="this.closest('.neo-modal-overlay').remove()">Cancel</button>
                        <button class="neo-btn primary" id="neo-modal-confirm">Confirm</button>
                    </div>
                </div>
            `;
                document.body.appendChild(overlay);
                setTimeout(() => overlay.classList.add('show'), 10);

                document.getElementById('neo-modal-confirm').addEventListener('click', () => {
                    onConfirm();
                    overlay.classList.remove('show');
                    setTimeout(() => overlay.remove(), 300);
                });
            }
        };
        // Service Worker Registration
        if ('serviceWorker' in navigator && (window.location.protocol === 'http:' || window.location.protocol === 'https:')) {
            navigator.serviceWorker.register('sw.js')
                .then(reg => { }) // console.log('[ServiceWorker] Registered', reg))
                .catch(err => console.error('[ServiceWorker] Failed', err));
        }
    });

    /**
     * Initializes navigation event listeners.
     * Handles clicking on sidebar items, updating active states, and mobile menu behavior.
     */
    function setupNavigation() {
        const navItems = document.querySelectorAll('.nav-item');

        // Coach Mode Visibility
        const isCoach = new URLSearchParams(window.location.search).get('coach') === '1';
        if (isCoach) {
            document.querySelectorAll('.coach-only').forEach(el => el.style.display = 'block');
            document.body.classList.add('coach-mode');
        }

        navItems.forEach(item => {
            item.addEventListener('click', () => {
                // Remove active class and aria-current from all items
                navItems.forEach(nav => {
                    nav.classList.remove('active');
                    nav.removeAttribute('aria-current');
                });

                // Add active class and aria-current to clicked item
                item.classList.add('active');
                item.setAttribute('aria-current', 'page');

                // Load chapter content
                const chapterId = item.getAttribute('data-chapter');
                loadChapter(chapterId);

                // Close mobile menu if open (Architecture fix for mobile UX)
                const sidebar = document.getElementById('sidebar');
                if (sidebar && sidebar.classList.contains('open')) {
                    window.toggleMobileMenu(false); // Use function to sync ARIA state
                }
            });
        });
    }

    /**
     * Loads a specific chapter/section into the main content container.
     * Handles history state, active navigation highlighting, and module initialization.
     * 
     * @param {string} chapterId - The ID of the chapter to load (e.g., 'ch1', 'tools').
     * @param {boolean} [updateHistory=true] - Whether to push this state to browser history.
     */
    function loadChapter(chapterId, updateHistory = true) {
        // v5: No auto-save. quizEngine is cleaned up via cleanup() on exit.
        window.quizEngine = null;

        // Alias home to welcome
        if (chapterId === 'home') chapterId = 'welcome';

        // console.log('[EPIDEMIC ENGINE] Loading chapter:', chapterId);

        // Set context for CSS (e.g. print styles)
        document.body.setAttribute('data-chapter', chapterId);

        // History API Integration: Update URL and History Stack
        if (updateHistory) {
            history.pushState({ chapter: chapterId }, '', `#${chapterId}`);
        }

        // Update Active Nav State (Synchronize sidebar with history)
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(nav => {
            // Handle both 'home' and 'welcome' data-chapter attributes for the home button
            const targetAttr = nav.getAttribute('data-chapter');
            if (targetAttr === chapterId || (chapterId === 'welcome' && targetAttr === 'home')) {
                nav.classList.add('active');
                nav.setAttribute('aria-current', 'page');
            } else {
                nav.classList.remove('active');
                nav.removeAttribute('aria-current');
            }
        });

        if (window.AnalyticsManager) window.AnalyticsManager.logChapterView(chapterId);

        const container = document.getElementById('content-container');

        // Load chapter content
        const content = getChapterContent(chapterId);
        container.innerHTML = content;

        // Rules Compliance Integration (Pedagogical Architecture)
        if (window.RulesEngine) {
            const badges = window.RulesEngine.renderBadges(chapterId);
            if (badges) {
                const h1 = container.querySelector('h1');
                if (h1) {
                    h1.insertAdjacentHTML('afterend', badges);
                } else {
                    container.insertAdjacentHTML('afterbegin', badges);
                }
            }
        }

        // Initialize Interactive Visuals (Phase 2 Audits)
        // HTML5 Security blocks innerHTML script execution, so we init manually here.
        // Initialize Interactive Visuals (Phase 2 Audits)
        // HTML5 Security blocks innerHTML script execution, so we init manually here.
        setTimeout(() => {
            if (typeof VisualComponents !== 'undefined') {
                const triadRoot = document.getElementById('triad-interactive-root');
                if (triadRoot) {
                    // console.log('[EPIDEMIC ENGINE] Rendering Triad...');
                    try {
                        VisualComponents.renderTriad('triad-interactive-root');
                    } catch (e) { console.error('Triad Render Error:', e); }
                }

                const simRoot = document.getElementById('control-sim-root');
                if (simRoot) {
                    // console.log('[EPIDEMIC ENGINE] Rendering Control Simulator...');
                    try {
                        VisualComponents.renderControlSimulator('control-sim-root');
                    } catch (e) { console.error('Sim Render Error:', e); }
                }
            } else {
                console.warn('[EPIDEMIC ENGINE] VisualComponents not loaded.');
            }
        }, 50);

        // Auto-Navigation: Add Next Button
        const activeNav = document.querySelector(`.nav-item[data-chapter="${chapterId}"]`);
        if (activeNav) {
            // Find next visible nav item (skipping hidden coach items if not coach)
            const allNavs = Array.from(document.querySelectorAll('.nav-item'));
            const currentIndex = allNavs.indexOf(activeNav);

            if (currentIndex > -1 && currentIndex < allNavs.length - 1) {
                const nextNav = allNavs[currentIndex + 1];
                // Ensure next item is not hidden (e.g. coach resources if not coach)
                // Note: Don't use offsetParent because sidebar might be hidden on mobile!
                const isHidden = nextNav.style.display === 'none' || nextNav.classList.contains('hidden');

                if (nextNav && !isHidden) {
                    const nextId = nextNav.getAttribute('data-chapter');
                    const nextTitle = nextNav.textContent.trim();

                    const nextBtnHtml = `
                    <div style="margin-top: 3rem; padding-top: 1.5rem; border-top: 1px solid #eee; display: flex; justify-content: flex-end;">
                        <button class="neo-btn primary" onclick="document.querySelector('.nav-item[data-chapter=\\'${nextId}\\']').click()">
                            Next: ${nextTitle} <i class="ph-bold ph-arrow-right"></i>
                        </button>
                    </div>
                `;
                    container.insertAdjacentHTML('beforeend', nextBtnHtml);
                }
            }
        }

        // Setup accordions after content loads
        setTimeout(() => setupAccordions(), 100);

        // Initialize tools if drills chapter
        if (chapterId === 'drills') {
            setTimeout(() => {
                if (window.TOOLS_MANAGER) {
                    window.TOOLS_MANAGER.init();
                } else {
                    console.warn('[EPIDEMIC ENGINE] TOOLS_MANAGER not found, retrying...');
                    setTimeout(() => {
                        if (window.TOOLS_MANAGER) window.TOOLS_MANAGER.init();
                    }, 500);
                }
            }, 100);
        }

        // Initialize Interactive Scenarios
        if (chapterId === 'interactive_scenarios' && window.ScenarioEngine) {
            setTimeout(() => window.ScenarioEngine.init('interactive-cases-root'), 100);
        }

        // Initialize Home Dashboard
        if (chapterId === 'welcome' && window.HomeDashboard) {
            setTimeout(() => window.HomeDashboard.init('home-root'), 100);
        }




        // Initialize Glossary if appendix-g
        if (chapterId === 'appendix-g' && window.appendixEngine) {
            setTimeout(() => window.appendixEngine.initGlossary('glossary-root'), 100);
        }

        // Initialize Flashcards if appendix-f
        if (chapterId === 'appendix-f' && window.appendixEngine) {
            setTimeout(() => window.appendixEngine.initFlashcards('flashcard-root'), 100);
        }

        // Initialize Pathogens if appendix-p
        if (chapterId === 'appendix-p' && window.appendixEngine) {
            setTimeout(() => window.appendixEngine.initPathogens('pathogen-root'), 100);
        }

        // Initialize Curve Types if appendix-curves
        if (chapterId === 'appendix-curves' && window.appendixEngine) {
            setTimeout(() => window.appendixEngine.initCurveTypes('curve-types-root'), 100);
        }


        // Initialize My Progress
        if (chapterId === 'my_progress' && window.AnalyticsManager) {
            setTimeout(() => {
                const history = window.AnalyticsManager.getHistory();
                const container = document.getElementById('analytics-history-list');
                if (container) {
                    if (history.length === 0) {
                        container.innerHTML = '<p style="color: #666; font-style: italic;">No quizzes taken yet.</p>';
                    } else {
                        container.innerHTML = history.map(h => `
                        <div style="display:flex; justify-content:space-between; align-items:center; padding: 0.75rem 0; border-bottom: 1px solid #eee;">
                            <div>
                                <strong>${h.quizId.replace(/_/g, ' ').toUpperCase()}</strong>
                                <div style="font-size:0.8rem; color:#666;">${new Date(h.timestamp).toLocaleDateString()} ${new Date(h.timestamp).toLocaleTimeString()}</div>
                            </div>
                            <div style="text-align:right;">
                                <div style="font-weight:bold; font-size:1.1rem; color: ${h.percent >= 80 ? '#22c55e' : (h.percent >= 60 ? '#f59e0b' : '#ef4444')}">
                                    ${h.score}/${h.maxScore}
                                </div>
                                <div style="font-size:0.8rem; color:#666;">${h.percent}%</div>
                            </div>
                        </div>
                    `).join('');
                    }
                }

                // Attach Clear History Listener
                const clearBtn = document.getElementById('clear-history-btn');
                if (clearBtn) {
                    clearBtn.addEventListener('click', () => {
                        if (typeof window.UI !== 'undefined') {
                            window.UI.modal('Clear History?', 'Are you sure you want to delete all progress? This cannot be undone.', () => {
                                window.AnalyticsManager.reset();
                                location.reload();
                            });
                        } else if (confirm('Clear all history?')) {
                            window.AnalyticsManager.reset();
                            location.reload();
                        }
                    });
                }
            }, 100);
        }

        // Initialize Case Library with category grouping and interactive details
        // Initialize Case Library with expanded exam features
        if (chapterId === 'case_library' && typeof CASE_LIBRARY !== 'undefined') {
            setTimeout(() => {
                const container = document.getElementById('case-library-container');
                if (!container) return;

                // Classification helper (Expanded)
                const getCategory = (c) => {
                    const idStr = c.id.toString();
                    if (idStr === 'C_Special' || idStr === 'C40') return 'Special Concepts';

                    const idNum = parseInt(idStr.replace('C', ''));
                    if (!isNaN(idNum)) {
                        if (idNum <= 15) return 'Food & Waterborne';
                        if (idNum <= 25) return 'Vector & Zoonotic';
                        if (idNum <= 32) return 'Respiratory';
                        if (idNum <= 39) return 'Other & Bioterror';
                        return 'Other';
                    }
                    return 'Other';
                };

                // Group cases
                const categories = {};
                CASE_LIBRARY.forEach((c, idx) => {
                    const cat = getCategory(c);
                    if (!categories[cat]) categories[cat] = [];
                    categories[cat].push({ c, idx });
                });

                // Build HTML
                let html = '';
                const catOrder = ['Food & Waterborne', 'Vector & Zoonotic', 'Respiratory', 'Other & Bioterror', 'Special Concepts', 'Other'];

                catOrder.forEach(cat => {
                    if (!categories[cat] || categories[cat].length === 0) return;
                    html += `<h2 style="color: var(--accent-purple); margin-top: 2rem; border-bottom: 2px solid #eee; padding-bottom: 0.5rem;"><i class="ph-bold ph-files"></i> ${cat}</h2>`;
                    if (cat === 'Food & Waterborne') {
                        html += `<p style="font-size: 0.9rem; color: #666; margin-bottom: 1rem;">
                        <strong>Exam Tip:</strong> Foodborne outbreaks are the #1 most common exam topic. Master the "classic" pathogens (Salmonella, Norovirus, Staph aureus) below.
                    </p>`;
                    }
                    html += `<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 1.5rem; margin-top: 1rem;">`;

                    categories[cat].forEach(({ c, idx }) => {
                        const objectivesHtml = c.learning_objectives ?
                            `<ul style="font-size: 0.85rem; margin-top: 0.5rem; color: #555; padding-left: 1.2rem;">${c.learning_objectives.map(o => `<li>${o}</li>`).join('')}</ul>` : '';

                        html += `
                    <div class="neo-card" style="border: 1px solid #ddd; display: flex; flex-direction: column;">
                        <div style="flex: 1;">
                            <div style="display:flex; justify-content:space-between; align-items: flex-start;">
                                <h3 style="margin: 0; color: var(--navy-primary); font-size: 1.2rem;">${c.title}</h3>
                                <span class="neo-badge small" style="background:#f3f4f6; flex-shrink:0;">${c.id}</span>
                            </div>
                            <div style="font-size: 0.95rem; color: #444; margin: 0.75rem 0; line-height: 1.5;">${c.scenario_text || c.description || 'No scenario available.'}</div>
                            
                            ${objectivesHtml ? `
                            <div style="background: #f9fafb; padding: 0.5rem; border-radius: 4px; border-left: 3px solid var(--accent-blue);">
                                <strong style="font-size: 0.8rem; text-transform: uppercase; color: var(--accent-blue);">Objectives:</strong>
                                ${objectivesHtml}
                            </div>` : ''}
                        </div>
                        
                        <div style="margin-top: 1rem; padding-top: 1rem; border-top: 1px dashed #ccc;">
                            <button class="neo-btn small outline full-width" onclick="window.toggleCaseDetails(${idx})">
                                <i class="ph-bold ph-student"></i> Study Case
                            </button>
                        </div>
                        
                        <div id="case-details-${idx}" style="display: none; margin-top: 1rem; border-top: 2px solid var(--accent-orange); padding-top: 1rem; animation: fadeIn 0.3s ease;">
                            <div style="text-align:center; margin-bottom:1rem;">
                                <span class="neo-badge" style="background: var(--accent-orange); color: black; font-weight:bold; font-size: 1rem;">${c.disease}</span>
                            </div>

                            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; font-size: 0.85rem; margin-bottom: 1rem; background:#f5f7fa; padding:0.5rem; border-radius:4px;">
                                <div><strong>Agent:</strong><br>${c.agent}</div>
                                <div><strong>Incubation:</strong><br>${c.incubation}</div>
                                <div><strong>Curve:</strong><br>${c.curve}</div>
                                <div><strong>Transmission:</strong><br>${c.transmission}</div>
                            </div>

                            ${c.spot_map ? `
                            <div style="margin-bottom: 1rem; font-size: 0.9rem;">
                                <strong style="color:var(--navy-primary);"><i class="ph-bold ph-map-pin"></i> Spot Map Pattern:</strong>
                                <div style="background: #fff; border: 1px solid #eee; padding: 0.5rem; border-radius: 4px; border-left: 2px solid #ef4444; margin-top:0.25rem;">${c.spot_map}</div>
                            </div>` : ''}

                            ${c.counterfactual ? `
                            <div style="margin-bottom: 1rem; font-size: 0.9rem;">
                                <strong style="color:var(--navy-primary);"><i class="ph-bold ph-arrows-merge"></i> Counterfactual ("What If"):</strong>
                                <div style="background: #fff; border: 1px solid #eee; padding: 0.5rem; border-radius: 4px; border-left: 2px solid #3b82f6; font-style: italic; margin-top:0.25rem;">${c.counterfactual}</div>
                            </div>` : ''}

                             ${c.questions ? `
                            <div style="margin-top: 1rem;">
                                <strong><i class="ph-bold ph-question"></i> Discussion:</strong>
                                ${c.questions.map(q => `
                                    <div style="margin-top: 0.5rem; font-size: 0.9rem; border-bottom:1px dotted #eee; padding-bottom:0.5rem;">
                                        <div style="font-weight:600; color:#333;">Q: ${q.q}</div>
                                        <div style="color: var(--accent-green); margin-top: 0.25rem;">A: ${q.a}</div>
                                    </div>
                                `).join('')}
                            </div>` : ''}
                            
                            ${c.enhanced_questions && c.enhanced_questions.length > 0 ? `
                            <div class="enhanced-questions-section" style="margin-top: 1.5rem; border-top: 2px solid var(--accent-purple); padding-top: 1rem;">
                                <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1rem;">
                                    <i class="ph-bold ph-exam" style="color: var(--accent-purple); font-size: 1.2rem;"></i>
                                    <strong style="color: var(--accent-purple); font-size: 1.1rem;">Exam-Style Practice Questions</strong>
                                    <span class="neo-badge small" style="background: var(--accent-purple); color: white;">${c.enhanced_questions.length} Questions</span>
                                </div>
                                ${c.enhanced_questions.map((eq, qIdx) => `
                                    <div class="enhanced-question-block" style="background: #faf5ff; border: 1px solid #e9d5ff; border-radius: 8px; padding: 1rem; margin-bottom: 1rem;">
                                        <div style="font-weight: 600; color: #333; margin-bottom: 0.75rem; line-height: 1.5;">
                                            ${eq.q}
                                        </div>
                                        <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                                            ${eq.options.map((opt, optIdx) => `
                                                <button class="enhanced-option neo-btn small outline" 
                                                        data-case="${idx}" data-q="${qIdx}" data-opt="${optIdx}" data-correct="${eq.correct}"
                                                        onclick="window.checkEnhancedAnswer(this, ${optIdx}, ${eq.correct})"
                                                        style="text-align: left; justify-content: flex-start; white-space: normal; height: auto; padding: 0.75rem;">
                                                    <span style="display: inline-block; width: 24px; height: 24px; border-radius: 50%; background: #e9d5ff; color: var(--accent-purple); text-align: center; line-height: 24px; margin-right: 0.5rem; flex-shrink: 0; font-weight: bold;">${String.fromCharCode(65 + optIdx)}</span>
                                                    <span>${opt}</span>
                                                </button>
                                            `).join('')}
                                        </div>
                                        <div id="enhanced-feedback-${idx}-${qIdx}" style="display: none; margin-top: 1rem; padding: 1rem; border-radius: 6px; font-size: 0.9rem; line-height: 1.6;">
                                        </div>
                                        ${eq.trap ? `
                                        <div id="enhanced-trap-${idx}-${qIdx}" style="display: none; margin-top: 0.5rem; padding: 0.75rem; background: #fef3c7; border: 1px solid #fbbf24; border-radius: 6px; font-size: 0.85rem;">
                                            <strong style="color: #b45309;"><i class="ph-bold ph-warning"></i> Common Trap:</strong> ${eq.trap}
                                        </div>` : ''}
                                    </div>
                                `).join('')}
                            </div>` : ''}
                        </div>
                    </div>
                    `;

                    });
                    html += `</div>`;
                });

                container.innerHTML = html;

                // Toggle logic
                window.toggleCaseDetails = function (index) {
                    const details = document.getElementById(`case-details-${index}`);
                    const btn = details ? details.parentElement.parentElement.querySelector('button') : null;
                    if (!details) return;

                    if (details.style.display === 'none') {
                        details.style.display = 'block';
                        if (btn) { btn.classList.add('secondary'); btn.innerHTML = '<i class="ph-bold ph-x"></i> Close Case'; }
                    } else {
                        details.style.display = 'none';
                        if (btn) { btn.classList.remove('secondary'); btn.innerHTML = '<i class="ph-bold ph-student"></i> Study Case'; }
                    }
                };

                // Enhanced question answer checker
                window.checkEnhancedAnswer = function (btn, selected, correct) {
                    const caseIdx = btn.dataset.case;
                    const qIdx = btn.dataset.q;
                    const feedbackEl = document.getElementById(`enhanced-feedback-${caseIdx}-${qIdx}`);
                    const trapEl = document.getElementById(`enhanced-trap-${caseIdx}-${qIdx}`);

                    // Disable all buttons in this question
                    const questionBlock = btn.closest('.enhanced-question-block');
                    const allBtns = questionBlock.querySelectorAll('.enhanced-option');
                    allBtns.forEach(b => {
                        b.disabled = true;
                        b.style.cursor = 'default';
                        b.onclick = null;
                    });

                    // Highlight correct and incorrect
                    allBtns.forEach((b, idx) => {
                        if (idx === correct) {
                            b.style.background = '#dcfce7';
                            b.style.borderColor = '#22c55e';
                            b.querySelector('span:first-child').style.background = '#22c55e';
                            b.querySelector('span:first-child').style.color = 'white';
                        } else if (idx === selected && selected !== correct) {
                            b.style.background = '#fee2e2';
                            b.style.borderColor = '#ef4444';
                            b.querySelector('span:first-child').style.background = '#ef4444';
                            b.querySelector('span:first-child').style.color = 'white';
                        }
                    });

                    // Get the case data to display explanation
                    const caseData = CASE_LIBRARY[parseInt(caseIdx)];
                    if (caseData && caseData.enhanced_questions && caseData.enhanced_questions[parseInt(qIdx)]) {
                        const q = caseData.enhanced_questions[parseInt(qIdx)];

                        const isCorrect = selected === correct;
                        feedbackEl.style.display = 'block';
                        feedbackEl.style.background = isCorrect ? '#dcfce7' : '#fee2e2';
                        feedbackEl.style.border = isCorrect ? '1px solid #22c55e' : '1px solid #ef4444';
                        feedbackEl.innerHTML = `
                        <div style="font-weight: bold; color: ${isCorrect ? '#16a34a' : '#dc2626'}; margin-bottom: 0.5rem;">
                            <i class="ph-bold ${isCorrect ? 'ph-check-circle' : 'ph-x-circle'}"></i>
                            ${isCorrect ? 'Correct!' : 'Incorrect'}
                        </div>
                        <div style="color: #333;">${q.explain || 'See explanation above.'}</div>
                    `;

                        // Show trap warning if present
                        if (trapEl && !isCorrect) {
                            trapEl.style.display = 'block';
                        }
                    }
                };

            }, 100);
        }

        // Initialize Interactive Scenarios
        if (chapterId === 'interactive_scenarios') {
            setTimeout(() => {
                if (window.ScenarioEngine) {
                    window.ScenarioEngine.init();
                }
            }, 100);
        }

        // Initialize Appendix
        if (chapterId === 'appendix' && typeof APPENDIX_DATA !== 'undefined') {
            setTimeout(() => {
                // Render Rules
                const rulesContainer = document.getElementById('rules-container');
                if (rulesContainer) {
                    rulesContainer.innerHTML = APPENDIX_DATA.RULES.map((r, idx) => `
                    <div class="neo-card small" style="margin-bottom: 0.5rem; cursor: pointer; transition: all 0.2s;" 
                         onclick="const el = document.getElementById('rule-detail-${idx}'); const icon = this.querySelector('.chevron'); 
                                  if(el.style.display==='none'){el.style.display='block'; icon.style.transform='rotate(180deg)';} 
                                  else {el.style.display='none'; icon.style.transform='rotate(0deg)';}">
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <div>
                                <strong style="font-size: 1.05rem;">${r[0]}</strong>
                                <div style="margin-top: 0.25rem;">
                                    ${r[1].map(tag => `<span class="neo-badge small" style="opacity:0.8; font-size:0.75rem;">${tag}</span>`).join(' ')}
                                </div>
                            </div>
                            <i class="ph-bold ph-caret-down chevron" style="transition: transform 0.2s;"></i>
                        </div>
                        <div id="rule-detail-${idx}" style="display: none; margin-top: 1rem; padding-top: 1rem; border-top: 1px dashed #ccc; font-size: 0.95rem; line-height: 1.5; color: #333; animation: fadeIn 0.2s;">
                            ${r[2] || "No detailed description available."}
                        </div>
                    </div>
                `).join('');
                }

                // Color Palette for Cycling
                const PALETTE = ['var(--accent-blue)', 'var(--accent-orange)', 'var(--accent-green)', 'var(--accent-purple)', 'var(--accent-pink)'];
                const BG_PALETTE = ['#eff6ff', '#fff7ed', '#f0fdf4', '#faf5ff', '#fdf2f8']; // Matches tailwind 50s
                const BORDER_PALETTE = ['#bfdbfe', '#fed7aa', '#bbf7d0', '#e9d5ff', '#fbcfe8']; // Matches tailwind 200s

                // Render Biases
                const biasesContainer = document.getElementById('biases-container');
                if (biasesContainer) {
                    biasesContainer.innerHTML = APPENDIX_DATA.BIASES.map((b, idx) => {
                        const color = PALETTE[idx % PALETTE.length];
                        const bg = BG_PALETTE[idx % BG_PALETTE.length];
                        const border = BORDER_PALETTE[idx % BORDER_PALETTE.length];

                        return `
                    <div class="neo-card small" style="border-left: 4px solid ${color};">
                        <strong style="color: ${color}; display: block; margin-bottom: 0.5rem; font-size: 1.1rem;">${b[0]}</strong>
                        <p style="font-size: 0.95rem; margin-bottom: 0.75rem;">${b[1]}</p>
                        <div style="font-size: 0.85rem; color: #444; background: ${bg}; padding: 0.5rem; border-radius: 4px; border: 1px solid ${border};">
                            <i class="ph-bold ph-shield-check" style="color: ${color}; margin-right: 4px;"></i> 
                            <strong>Fix:</strong> ${b[2]}
                        </div>
                    </div>
                `;
                    }).join('');
                }

                // Initialize Glossary, Flashcards, Pathogens, and Curves if engine exists
                if (window.appendixEngine) {
                    if (chapterId === 'appendix') {
                        console.log('[Nav] Initializing Appendix Resources...');

                        if (typeof window.appendixEngine.initGlossary === 'function')
                            window.appendixEngine.initGlossary('glossary-root');

                        if (typeof window.appendixEngine.initFlashcards === 'function')
                            window.appendixEngine.initFlashcards('flashcard-root');

                        if (typeof window.appendixEngine.initPathogens === 'function') {
                            console.log('[Nav] Calling initPathogens...');
                            window.appendixEngine.initPathogens('pathogen-root');
                        } else {
                            console.error('[Nav] initPathogens not found on appendixEngine!');
                        }

                        if (typeof window.appendixEngine.initCurveTypes === 'function') {
                            console.log('[Nav] Calling initCurveTypes...');
                            window.appendixEngine.initCurveTypes('curve-types-root');
                        } else {
                            console.error('[Nav] initCurveTypes not found on appendixEngine!');
                        }
                    }
                    if (chapterId === 'appendix-g') {
                        window.appendixEngine.initGlossary('glossary-root');
                    }
                    if (chapterId === 'appendix-f') {
                        window.appendixEngine.initFlashcards('flashcard-root');
                    }
                } else {
                    console.error('[Nav] appendixEngine not defined when loading appendix!');
                }

                // Render Mnemonics
                const mnemsContainer = document.getElementById('mnemonics-container');
                if (mnemsContainer) {
                    mnemsContainer.innerHTML = APPENDIX_DATA.MNEMS.map((m, idx) => {
                        const color = PALETTE[(idx + 2) % PALETTE.length]; // Offset start for variety

                        return `
                    <div class="neo-card" style="margin-bottom: 1rem; border-left: 4px solid ${color};">
                        <h3 style="color: ${color}; margin-bottom: 0.5rem;">${m[0]}</h3>
                        <p style="font-size: 1.1rem;">${m[1]}</p>
                    </div>
                `;
                    }).join('');
                }

                // Render Resources
                const resourcesContainer = document.getElementById('resources-container');
                if (resourcesContainer && APPENDIX_DATA.RESOURCES) {
                    resourcesContainer.innerHTML = APPENDIX_DATA.RESOURCES.map(r => `
                    <div class="neo-card small" style="display: flex; flex-direction: column; justify-content: space-between;">
                        <div>
                            <strong style="font-size: 1.1rem; display: block; margin-bottom: 0.5rem;">${r.title}</strong>
                            <p style="font-size: 0.9rem; color: #666; margin-bottom: 1rem;">${r.desc}</p>
                        </div>
                        <a href="${r.url}" target="_blank" class="neo-btn small secondary" style="text-align: center; text-decoration: none;">
                            <i class="ph-bold ph-arrow-square-out"></i> Visit Site
                        </a>
                    </div>
                `).join('');
                }

                // Define showTab globally if not already
                // Define showTab globally if not already
                window.showTab = function (tabId) {
                    // console.log('[SHOWTAB] Called with tabId:', tabId);

                    // Hide all
                    document.querySelectorAll('.tab-content').forEach(el => el.style.display = 'none');

                    // Show target
                    const tabContent = document.getElementById(tabId);
                    if (tabContent) {
                        tabContent.style.display = 'block';
                    } else {
                        console.warn('[SHOWTAB] Target tab content not found:', tabId);
                    }

                    // Update active buttons
                    document.querySelectorAll('.neo-btn.small').forEach(el => el.classList.remove('active'));

                    // Safely handle event object
                    const evt = window.event;
                    if (evt && evt.target && evt.target.classList.contains('neo-btn')) {
                        evt.target.classList.add('active');
                    }

                    // Robust Initialization Helper
                    const initComponent = (methodName, containerId) => {
                        if (window.appendixEngine && typeof window.appendixEngine[methodName] === 'function') {
                            // console.log(`[SHOWTAB] Initializing ${methodName}...`);
                            setTimeout(() => window.appendixEngine[methodName](containerId), 10);
                        } else {
                            console.error(`[SHOWTAB] Failed to init ${methodName}. Engine or method missing.`);
                        }
                    };

                    // Map tabs to init methods
                    const map = {
                        'flashcards': ['initFlashcards', 'flashcard-root'],
                        'glossary': ['initGlossary', 'glossary-root'],
                        'formulas': ['initFormulas', 'formulas-root'],
                        'tables': ['initTables', 'tables-root'],
                        'logic': ['initLogic', 'logic-root'],
                        'pathogens': ['initPathogens', 'pathogen-root'],
                        'curves': ['initCurveTypes', 'curve-types-root']
                    };

                    if (map[tabId]) {
                        initComponent(map[tabId][0], map[tabId][1]);
                    }
                };
            }, 100);
        }

        // Auto-Resume Logic for Quizzes - DISABLED (v5 has no pause)
        // if (window.startQuiz) { ... }

        // Auto-Resume Logic for Simulations - DISABLED (v5 has no pause)
        // if (chapterId === 'simulation' && window.startSimulationExam) { ... }

        // Scroll to top
        const mainContent = document.querySelector('.main-content');
        if (mainContent) {
            mainContent.scrollTop = 0;
        }
    }

    function getChapterContent(chapterId) {
        // Alias home to welcome
        if (chapterId === 'home') chapterId = 'welcome';

        // Load from content management system
        if (window.EPIDEMIC_ENGINE_CONTENT && window.EPIDEMIC_ENGINE_CONTENT[chapterId]) {
            return window.EPIDEMIC_ENGINE_CONTENT[chapterId].content;
        }

        // Fallback for undefined chapters
        return `
        <h1>Content In Development</h1>
        <p class="lead">This chapter is currently being developed.</p>
        
        <div class="study-tip">
            <div class="callout-header">
                <i class="ph ph-info"></i>
                Coming Soon
            </div>
            <div class="callout-content">
                <p>This chapter will include comprehensive coverage with:</p>
                <ul>
                    <li>Detailed explanations</li>
                    <li>Real-world examples</li>
                    <li>Exam tips and traps</li>
                    <li>Practice problems</li>
                </ul>
            </div>
        </div>
    `;
    }

    // Setup accordion functionality
    // Setup accordion functionality with accessibility
    function setupAccordions() {
        const accordionHeaders = document.querySelectorAll('.accordion-header');

        accordionHeaders.forEach(header => {
            // Accessibility attributes
            header.setAttribute('role', 'button');
            header.setAttribute('tabindex', '0');
            if (!header.hasAttribute('aria-expanded')) {
                header.setAttribute('aria-expanded', 'false');
            }

            // Remove existing listeners to avoid duplicates
            const newHeader = header.cloneNode(true);
            header.parentNode.replaceChild(newHeader, header);

            const toggle = () => {
                const isActive = newHeader.classList.toggle('active');
                newHeader.setAttribute('aria-expanded', isActive);

                const content = newHeader.nextElementSibling;
                if (content && content.classList.contains('accordion-content')) {
                    content.classList.toggle('show');
                }
            };

            newHeader.addEventListener('click', toggle);

            // Keyboard support (Enter/Space)
            newHeader.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault(); // Prevent scrolling for Space
                    toggle();
                }
            });
        });
    }

    // Make functions globally available
    window.loadChapter = loadChapter;
    window.setupAccordions = setupAccordions;

    // Global functions for Quiz and Simulation
    // Global functions for Quiz and Simulation
    window.startQuiz = function (partId) {
        console.log('QuizEngine v5 startQuiz:', partId);

        // Check if new engine is loaded
        if (typeof window.QuizEngine === 'undefined') {
            console.error('QuizEngine not loaded.');
            return;
        }

        // 1. Get Settings (Before wiping DOM)
        const diffSelect = document.getElementById('difficulty-' + partId);
        const difficulty = diffSelect ? diffSelect.value : 'balanced';

        // 2. Clear Screen for Full-Page Mode
        const mainContainer = document.getElementById('content-container');
        if (!mainContainer) return;

        mainContainer.innerHTML = '<div id="quiz-fullscreen-root" style="height: 100%;"></div>';

        // Use centralized helper from QuizEngine
        const questions = window.QuizEngine.getQuestionsForPart(partId, difficulty);

        if (questions.length === 0) {
            console.error('No questions found for quiz:', partId);
            mainContainer.innerHTML = `
            <div class="alert alert-warning">
                <h3>No Questions Found</h3>
                <p>Could not load questions for difficulty: ${difficulty}</p>
                <button class="neo-btn outline" onclick="loadChapter('quiz_${partId}')">Go Back</button>
            </div>`;
            return;
        }

        // Initialize QuizEngine v5
        window.quizEngine = new window.QuizEngine({
            quizId: partId,
            mode: 'practice',
            containerId: 'quiz-fullscreen-root',
            questions: questions,
            timeLimit: null,
            enableInstantFeedback: true
        });
        window.quizEngine.start();
    };

    window.startSimulation = function () {
        window.startSimulationExam(1);
    };

    // Start one of several simulation exams
    window.startSimulationExam = function (examNumber) {
        console.log('QuizEngine v5 startSimulationExam:', examNumber);

        if (typeof window.QuizEngine === 'undefined') {
            console.error('QuizEngine not loaded');
            return;
        }

        // 1. Get Settings
        const diffSelect = document.getElementById('difficulty-sim');
        const difficulty = diffSelect ? diffSelect.value : 'balanced';

        // 2. Clear Screen for Full-Page Mode
        const mainContainer = document.getElementById('content-container');
        if (!mainContainer) return;

        mainContainer.innerHTML = '<div id="sim-fullscreen-root" style="height: 100%;"></div>';

        const { questions, boundaries: _boundaries } = window.QuizEngine.generateSimulation(difficulty);

        if (questions.length === 0) {
            if (typeof window.UI !== 'undefined') window.UI.toast("Failed to generate exam - check content data.", "error");
            else alert("Failed to generate exam - check content data.");

            // Restore content on failure
            loadChapter('simulation');
            return;
        }

        // Initialize QuizEngine v5 in exam mode
        window.quizEngine = new window.QuizEngine({
            quizId: 'simulation-' + examNumber,
            mode: 'simulation',
            containerId: 'sim-fullscreen-root',
            questions: questions,
            timeLimit: 50 * 60
        });
        window.quizEngine.start();
    };

    /* ================= RESPONSIVE NAV ================= */

    window.toggleMobileMenu = function (forceState = null) {
        const sidebar = document.getElementById('sidebar');
        const overlay = document.querySelector('.sidebar-overlay');
        const btn = document.getElementById('mobile-menu-toggle');

        if (!sidebar) return;

        // Determine target state
        const isOpen = (forceState !== null) ? forceState : !sidebar.classList.contains('open');

        if (isOpen) {
            sidebar.classList.add('open');
            if (overlay) overlay.classList.add('active');
            sidebar.removeAttribute('aria-hidden');
            // Focus management: Trap focus (MVP: just focus first item)
            setTimeout(() => {
                const firstItem = sidebar.querySelector('.nav-item');
                if (firstItem) firstItem.focus();
            }, 100);
        } else {
            sidebar.classList.remove('open');
            if (overlay) overlay.classList.remove('active');
            sidebar.setAttribute('aria-hidden', 'true');
            // Return focus to toggle button
            if (btn) btn.focus();
        }

        if (btn) btn.setAttribute('aria-expanded', isOpen);
    };

    // Auto-close on nav click (mobile)
    // Auto-close on nav click is handled in setupNavigation()
    document.addEventListener('DOMContentLoaded', () => {
        // Menu Button Logic
        const menuBtn = document.getElementById('mobile-menu-toggle');
        if (menuBtn) {
            menuBtn.addEventListener('click', window.toggleMobileMenu);
        }
    });

    /* ================= CONTENT PROTECTION ================= */
    function setupProtection() {
        // 1. Disable Right Click
        document.addEventListener('contextmenu', e => {
            // Allow right click on inputs for accessibility? Usually no custom menu there either if protected.
            if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
                e.preventDefault();
            }
        });

        // 2. Disable Shortcuts
        document.addEventListener('keydown', e => {
            // Block Ctrl+S (Save), Ctrl+U (Source), Ctrl+C (Copy)
            // Allow Ctrl+P (Print) as we have specific print styles
            if ((e.ctrlKey || e.metaKey) && ['s', 'u', 'c'].includes(e.key.toLowerCase())) {
                e.preventDefault();
                if (window.UI && window.UI.toast) window.UI.toast('Content Protected', 'warning');
            }
            // Block F12 (DevTools)
            if (e.key === 'F12') {
                e.preventDefault();
            }
            // Block Ctrl+Shift+I (DevTools)
            if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === 'i') {
                e.preventDefault();
            }
        });

        // 3. Inject CSS for Selection and Dragging
        const style = document.createElement('style');
        style.id = 'protection-styles';
        style.textContent = `
        body { 
            -webkit-user-select: none; 
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none; 
        }
        /* Allow selection in key interactive areas */
        input, textarea, [contenteditable], .selectable { 
            -webkit-user-select: text; 
            user-select: text; 
        }
        img { 
            -webkit-user-drag: none; 
            user-drag: none; 
            pointer-events: none; /* Prevent drag/context on images */
        }
    `;
        document.head.appendChild(style);

        // console.log('[EPIDEMIC ENGINE] Content Protection Active');
    }
})();
