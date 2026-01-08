/**
 * Analytics Manager
 * Handles local storage of quiz and exam results.
 * Respects privacy: No data leaves the device.
 */
class AnalyticsManager {
    constructor() {
        this.STORAGE_KEY = 'dd_analytics_v1';
        this.storageAvailable = this._isStorageAvailable();
        this.data = this._load();
        if (!this.data.chapterViews) this.data.chapterViews = {};
    }

    _isStorageAvailable() {
        try {
            const testKey = '__test__';
            window.localStorage.setItem(testKey, '1');
            window.localStorage.removeItem(testKey);
            return true;
        } catch (e) {
            console.warn('LocalStorage not available, analytics disabled:', e);
            return false;
        }
    }

    _load() {
        if (!this.storageAvailable) return { attempts: [], chapterViews: {} };
        try {
            const stored = localStorage.getItem(this.STORAGE_KEY);
            const data = stored ? JSON.parse(stored) : { attempts: [], chapterViews: {}, missedQuestions: {} };
            if (!data.missedQuestions) data.missedQuestions = {};
            if (!data.chapterViews) data.chapterViews = {};
            return data;
        } catch (e) {
            console.error('Analytics load error:', e);
            return { attempts: [], chapterViews: {}, missedQuestions: {} };
        }
    }

    _save() {
        if (!this.storageAvailable) return;
        try {
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.data));
        } catch (e) {
            console.error('Analytics save error:', e);
        }
    }

    /**
     * Log a completed quiz/exam attempt
     * @param {string} quizId - e.g. 'part1', 'simulation-1'
     * @param {number} score - Raw score
     * @param {number} maxScore - Total possible
     * @param {string} mode - 'practice' or 'simulation'
     */
    logAttempt(quizId, score, maxScore, mode) {
        const attempt = {
            id: Date.now().toString(36) + Math.random().toString(36).substr(2),
            quizId,
            score,
            maxScore,
            percent: Math.round((score / maxScore) * 100),
            mode,
            timestamp: new Date().toISOString()
        };
        this.data.attempts.push(attempt);
        this._save();
        return attempt;
    }

    /**
     * Log a chapter view
     * @param {string} chapterId 
     */
    logChapterView(chapterId) {
        if (!this.data.chapterViews) this.data.chapterViews = {};

        if (!this.data.chapterViews[chapterId]) {
            this.data.chapterViews[chapterId] = { count: 0, lastViewed: null };
        }

        this.data.chapterViews[chapterId].count++;
        this.data.chapterViews[chapterId].lastViewed = new Date().toISOString();
        this._save();
    }

    /**
     * Get aggregate stats for a specific quiz
     */
    getStats(quizId) {
        const attempts = this.data.attempts.filter(a => a.quizId === quizId);
        if (!attempts.length) return null;

        const scores = attempts.map(a => a.score);
        const best = Math.max(...scores);
        const totalPossible = attempts[0].maxScore; // Assume constant max score
        const avg = scores.reduce((a, b) => a + b, 0) / scores.length;

        return {
            count: attempts.length,
            best,
            bestPercent: Math.round((best / totalPossible) * 100),
            avg: Math.round(avg * 10) / 10,
            avgPercent: Math.round((avg / totalPossible) * 100),
            lastDate: attempts[attempts.length - 1].timestamp
        };
    }

    /**
     * Get all history sorted by date desc
     */
    getHistory() {
        return [...this.data.attempts].sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    }

    getChapterStats() {
        const views = this.data.chapterViews || {};

        // Only count views for chapters that exist in the sidebar
        const navItems = Array.from(document.querySelectorAll('.nav-item'));
        const validChapterIds = new Set(navItems.map(item => item.getAttribute('data-chapter')).filter(Boolean));

        let viewedCount = 0;
        Object.keys(views).forEach(id => {
            if (validChapterIds.has(id)) viewedCount++;
        });

        const totalPossible = validChapterIds.size || 20;

        return {
            viewed: viewedCount,
            total: totalPossible,
            details: views
        };
    }

    getGlobalStats() {
        const attempts = this.data.attempts;
        if (!attempts || attempts.length === 0) {
            return { totalAttempts: 0, averageScore: 0 };
        }

        const totalPercent = attempts.reduce((sum, a) => sum + (a.percent || 0), 0);
        const avg = totalPercent / attempts.length;

        return {
            totalAttempts: attempts.length,
            averageScore: Math.round(avg * 10) / 10
        };
    }

    /**
     * Clear all data
     */
    reset() {
        this.data = { attempts: [], chapterViews: {}, missedQuestions: {} };
        this._save();

        // Also clear active quiz/sim progress
        if (this.storageAvailable) {
            Object.keys(localStorage).forEach(key => {
                if (key.startsWith('quiz_progress_')) {
                    localStorage.removeItem(key);
                }
            });
        }
    }

    /**
     * Log a missed question
     * @param {string} topic - e.g. "Chapter 4"
     * @param {string} text - The question text (used as ID since we lack UIDs sometimes)
     */
    logMissedQuestion(topic, text) {
        if (!this.storageAvailable) return;

        // Sanitize key
        const key = text.substring(0, 50).replace(/[^a-zA-Z0-9]/g, '');

        if (!this.data.missedQuestions[key]) {
            this.data.missedQuestions[key] = {
                topic: topic,
                text: text.substring(0, 100) + '...',
                count: 0
            };
        }

        this.data.missedQuestions[key].count++;
        this._save();
    }

    /**
     * Get weak areas sorted by miss count
     */
    getWeakAreas() {
        const topicCounts = {};
        Object.values(this.data.missedQuestions).forEach(mq => {
            if (!topicCounts[mq.topic]) topicCounts[mq.topic] = 0;
            topicCounts[mq.topic] += mq.count;
        });

        // Convert to array and sort
        return Object.entries(topicCounts)
            .sort((a, b) => b[1] - a[1]) // Descending
            .map(([topic, count]) => ({ topic, count }));
    }
}

// Global Instance
window.AnalyticsManager = new AnalyticsManager();

// CHAPTER REFERENCE UTILITY
// Maps chapter IDs to titles and sections for quiz question references

const CHAPTER_REFERENCE = {
    ch1: {
        title: "The Detective's Role",
        sections: ["1.1", "1.2", "1.3", "1.4"],
        topics: ["epidemiology definition", "distribution", "determinants", "population focus"]
    },
    ch2: {
        title: "History & Heroes",
        sections: ["2.0", "2.1", "2.2", "2.3"],
        topics: ["pioneers", "incubation period", "latency", "natural history", "carriers"]
    },
    ch3: {
        title: "The Triad & Chain",
        sections: ["3.1", "3.2", "3.3", "3.4", "3.5", "3.6"],
        topics: ["agent-host-environment", "chain of infection", "wheel model", "web model", "Rothman's pies"]
    },
    ch4: {
        title: "Measures of Frequency",
        sections: ["4.1", "4.2", "4.3"],
        topics: ["counts", "proportions", "rates", "incidence", "prevalence"]
    },
    ch5: {
        title: "Modes of Transmission",
        sections: ["5.1", "5.2", "5.3", "5.4"],
        topics: ["direct", "indirect", "airborne", "vector-borne", "vehicle", "surveillance systems"]
    },
    ch6: {
        title: "Natural History",
        sections: ["6.1", "6.2", "6.3"],
        topics: ["disease stages", "R0", "herd immunity threshold", "generation time"]
    },
    ch7: {
        title: "Investigation Roadmap",
        sections: ["7.1", "7.2", "7.3"],
        topics: ["outbreak investigation steps", "verify outbreak", "case definition", "hypothesis"]
    },
    ch8: {
        title: "Case Definitions",
        sections: ["8.1", "8.2", "8.3"],
        topics: ["person-place-time-clinical", "suspect-probable-confirmed", "sensitivity", "specificity"]
    },
    ch9: {
        title: "Line Lists & Data",
        sections: ["9.1", "9.2"],
        topics: ["line list", "data collection", "variables", "attack rates"]
    },
    ch10: {
        title: "Curve Logic",
        sections: ["10.1", "10.2", "10.3"],
        topics: ["epidemic curves", "point source", "continuous source", "propagated", "intermittent"]
    },
    ch11: {
        title: "Outbreak Math I",
        sections: ["11.1", "11.2", "11.3"],
        topics: ["attack rate", "risk ratio", "attributable risk", "AR%", "2x2 table"]
    },
    ch12: {
        title: "Outbreak Math II",
        sections: ["12.1", "12.2", "12.3"],
        topics: ["odds ratio", "confidence intervals", "study designs", "matched pairs", "Mantel-Haenszel"]
    },
    ch13: {
        title: "Hypothesis Testing",
        sections: ["13.1", "13.2", "13.3", "13.4", "13.5"],
        topics: ["null hypothesis", "p-value", "Type I error", "Type II error", "chi-square", "power"]
    },
    ch14: {
        title: "Data Synthesis",
        sections: ["14.1", "14.2"],
        topics: ["vital statistics", "YPLL", "SMR", "age-adjustment", "crude rates", "specific rates"]
    },
    ch15: {
        title: "Prevention Levels",
        sections: ["15.1", "15.2", "15.3"],
        topics: ["primary prevention", "secondary prevention", "tertiary prevention", "vaccination", "screening"]
    },
    ch16: {
        title: "Control Measures",
        sections: ["16.1", "16.2", "16.3"],
        topics: ["source control", "transmission interruption", "host protection", "ring vaccination", "chain of infection"]
    },
    ch17: {
        title: "Isolation & Ethics",
        sections: ["17.1", "17.2"],
        topics: ["isolation", "quarantine", "ethics", "autonomy", "public health law"]
    },
    ch18: {
        title: "Population Immunity",
        sections: ["18.1", "18.2"],
        topics: ["herd immunity", "HIT formula", "R0", "vaccination coverage", "waning immunity"]
    },
    ch19: {
        title: "Advanced Evaluation",
        sections: ["19.1", "19.2", "19.3"],
        topics: ["effect modification", "confounding", "stratification", "screening tests", "sensitivity", "specificity"]
    },
    ch20: {
        title: "Case Studies",
        sections: ["20.1"],
        topics: ["outbreak investigation", "case scenarios", "mega-cases"]
    },

    // Special chapters
    quiz_part1: { title: "Part I Quiz", sections: [], topics: [] },
    quiz_part2: { title: "Part II Quiz", sections: [], topics: [] },
    quiz_part3: { title: "Part III Quiz", sections: [], topics: [] },
    drills: { title: "Interactive Drills", sections: [], topics: ["2x2 calculator", "epi curve", "exposure window"] },
    simulation: { title: "Simulation Exams", sections: [], topics: [] },
    case_library: { title: "Case Library", sections: [], topics: [] },
    appendix: { title: "Appendix & Resources", sections: [], topics: ["glossary", "flashcards", "mnemonics", "formulas"] }
};

// Function to get chapter info from question
function getChapterInfo(question) {
    let chapId = question.chapter;

    // Smart Fallback: Parse 'topic' legacy field (e.g. "Chapter 7" -> "ch7")
    if (!chapId && question.topic && typeof question.topic === 'string') {
        const match = question.topic.match(/Chapter\s+(\d+)/i);
        if (match) {
            chapId = 'ch' + match[1];
        }
    }

    if (!chapId) return null;

    const chapterData = CHAPTER_REFERENCE[chapId];
    if (!chapterData) return null;

    return {
        id: chapId,
        title: chapterData.title,
        section: question.section || null,
        url: `#${chapId}`,
        fullTitle: question.section
            ? `${chapterData.title} (Section ${question.section})`
            : chapterData.title
    };
}

// Function to generate "Review Chapter" link HTML
function generateReviewLink(question) {
    const info = getChapterInfo(question);
    if (!info) return '';

    return `
        <div class="review-link" style="margin-top: 1rem; padding: 0.75rem; background: var(--accent-blue); border: 2px solid var(--border-color); border-radius: 8px; display: flex; align-items: center; gap: 0.5rem;">
            <i class="ph ph-book-open" style="font-size: 1.25rem;"></i>
            <div>
                <strong>Review:</strong> 
                <a href="${info.url}" onclick="loadChapter('${info.id}'); return false;" style="color: var(--navy-primary); font-weight: 600; text-decoration: none;">
                    ${info.fullTitle}
                </a>
            </div>
        </div>
    `;
}

// Function to find suggested chapter based on question keywords
function suggestChapter(questionText) {
    const text = questionText.toLowerCase();

    // Keyword mapping for common topics
    const keywordMap = {
        'epidemiology': 'ch1',
        'distribution': 'ch1',
        'determinants': 'ch1',
        'john snow': 'ch2',
        'graunt': 'ch2',
        'jenner': 'ch2',
        'koch': 'ch2',
        'semmelweis': 'ch2',
        'nightingale': 'ch2',
        'mary mallon': 'ch2',
        'typhoid mary': 'ch2',
        'incubation': 'ch2',
        'latency': 'ch2',
        'carrier': 'ch2',
        'triad': 'ch3',
        'agent': 'ch3',
        'host': 'ch3',
        'environment': 'ch3',
        'chain of infection': 'ch3',
        'reservoir': 'ch3',
        'portal': 'ch3',
        'incidence': 'ch4',
        'prevalence': 'ch4',
        'transmission': 'ch5',
        'airborne': 'ch5',
        'vector': 'ch5',
        'vehicle': 'ch5',
        'fomite': 'ch5',
        'r0': 'ch6',
        'r₀': 'ch6',
        'herd immunity': 'ch6',
        'outbreak investigation': 'ch7',
        'case definition': 'ch8',
        'suspect': 'ch8',
        'probable': 'ch8',
        'confirmed': 'ch8',
        'line list': 'ch9',
        'epidemic curve': 'ch10',
        'epi curve': 'ch10',
        'point source': 'ch10',
        'propagated': 'ch10',
        'attack rate': 'ch11',
        'risk ratio': 'ch11',
        'relative risk': 'ch11',
        'attributable risk': 'ch11',
        'odds ratio': 'ch12',
        'confidence interval': 'ch12',
        'matched': 'ch12',
        'mantel-haenszel': 'ch12',
        'null hypothesis': 'ch13',
        'p-value': 'ch13',
        'p value': 'ch13',
        'type i error': 'ch13',
        'type ii error': 'ch13',
        'chi-square': 'ch13',
        'chi square': 'ch13',
        'ypll': 'ch14',
        'smr': 'ch14',
        'age-adjusted': 'ch14',
        'primary prevention': 'ch15',
        'secondary prevention': 'ch15',
        'tertiary prevention': 'ch15',
        'vaccination': 'ch15',
        'control measure': 'ch16',
        'ring vaccination': 'ch16',
        'isolation': 'ch17',
        'quarantine': 'ch17',
        'ethics': 'ch17',
        'sensitivity': 'ch19',
        'specificity': 'ch19',
        'screening': 'ch19'
    };

    // Check for keyword matches
    for (const [keyword, chapter] of Object.entries(keywordMap)) {
        if (text.includes(keyword)) {
            return chapter;
        }
    }

    return null;
}

// Validation function to check unmapped questions
function validateQuestionMapping(quizBanks) {
    const unmapped = [];
    const invalid = [];

    Object.keys(quizBanks).forEach(part => {
        quizBanks[part].forEach((q, idx) => {
            if (!q.chapter) {
                unmapped.push({
                    part,
                    index: idx,
                    question: q.question.substring(0, 60) + '...',
                    suggested: suggestChapter(q.question)
                });
            } else if (!CHAPTER_REFERENCE[q.chapter]) {
                invalid.push({
                    part,
                    index: idx,
                    chapter: q.chapter,
                    question: q.question.substring(0, 60) + '...'
                });
            }
        });
    });

    return { unmapped, invalid };
}

// Export functions to window for global access
if (typeof window !== 'undefined') {
    window.CHAPTER_REFERENCE = CHAPTER_REFERENCE;
    window.getChapterInfo = getChapterInfo;
    window.generateReviewLink = generateReviewLink;
    window.suggestChapter = suggestChapter;
    window.validateQuestionMapping = validateQuestionMapping;
}

// Export for Node.js if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        CHAPTER_REFERENCE,
        getChapterInfo,
        generateReviewLink,
        suggestChapter,
        validateQuestionMapping
    };
}

// console.log("[DEBUG] epidemic-engine-tools.js LOADED");
// EPIDEMIC ENGINE TOOLS MANAGER
// Handles initialization and switching of interactive tools

// Global tool instances are declared in their respective files
// calc2x2, epiCurve, exposureCalc are expected to be available globally

window.TOOLS_MANAGER = {
    init: function () {
        // console.log("[TOOLS] Initializing Tools Manager...");
        // Check if we are actually in the tools interface
        if (!document.querySelector('.tools-container')) {
            // console.log("[TOOLS] Not in tools chapter, skipping init.");
            return;
        }

        // Small delay to ensure DOM is ready if called immediately
        setTimeout(() => {
            // Phase 15: Inject Herd Immunity Tab dynamically if missing
            const firstTab = document.querySelector('.tool-tab');
            if (firstTab && !document.querySelector('[data-tool="herd"]')) {
                // Add Tab
                const newTab = document.createElement('button');
                newTab.className = 'tool-tab';
                newTab.setAttribute('data-tool', 'herd');
                newTab.innerHTML = '<i class="ph-bold ph-users-three"></i> Herd Immunity';
                firstTab.parentNode.appendChild(newTab);

                // Add Container
                const firstContent = document.querySelector('.tool-content');
                if (firstContent) {
                    const newContent = document.createElement('div');
                    newContent.id = 'tool-container-herd';
                    newContent.className = 'tool-content';
                    firstContent.parentNode.appendChild(newContent);
                }
            }

            // Phase 16: Inject Infinite Outbreak Tab
            if (firstTab && !document.querySelector('[data-tool="infinite"]')) {
                const infTab = document.createElement('button');
                infTab.className = 'tool-tab';
                infTab.setAttribute('data-tool', 'infinite');
                infTab.innerHTML = '<i class="ph-bold ph-infinity"></i> Infinite';
                firstTab.parentNode.appendChild(infTab);

                const firstContent = document.querySelector('.tool-content');
                if (firstContent) {
                    const infContent = document.createElement('div');
                    infContent.id = 'tool-container-infinite';
                    infContent.className = 'tool-content';
                    firstContent.parentNode.appendChild(infContent);
                }
            }

            this.setupTabs();
            // Initialize default tool (2x2)
            if (typeof Calculator2x2 !== 'undefined' && document.getElementById('tool-container-2x2')) {
                // console.log("[TOOLS] Initializing default 2x2 calculator");
                calc2x2 = new Calculator2x2('tool-container-2x2');
            }
        }, 50);
    },

    retryCount: 0,
    setupTabs: function () {
        const tabs = document.querySelectorAll('.tool-tab');

        if (tabs.length === 0) {
            if (this.retryCount < 10) {
                this.retryCount++;
                // console.warn("[TOOLS] No tabs found! Retrying in 100ms...");
                setTimeout(() => this.setupTabs(), 100);
            }
            return;
        }
        this.retryCount = 0; // Reset on success

        tabs.forEach(tab => {
            // Remove old listeners by cloning (simple way to clear events without named functions)
            const newTab = tab.cloneNode(true);
            tab.parentNode.replaceChild(newTab, tab);

            newTab.addEventListener('click', (e) => {
                // console.log("[TOOLS] Tab clicked:", newTab.dataset.tool);
                e.preventDefault(); // Prevent default anchor behavior if any

                // Remove active class from all tabs and contents
                document.querySelectorAll('.tool-tab').forEach(t => t.classList.remove('active'));
                document.querySelectorAll('.tool-content').forEach(c => c.classList.remove('active'));

                // Add active class to clicked tab
                newTab.classList.add('active');

                // Show corresponding content
                const toolId = newTab.dataset.tool;
                const container = document.getElementById(`tool-container-${toolId}`);
                if (container) {
                    container.classList.add('active');
                    // console.log(`[TOOLS] Activated container: tool-container-${toolId}`);
                } else {
                    console.error(`[TOOLS] Container not found: tool-container-${toolId}`);
                }

                // Initialize specific tool if needed
                this.loadTool(toolId);
            });
        });
    },

    loadTool: function (toolId) {
        // console.log("[TOOLS] Loading tool:", toolId);
        try {
            switch (toolId) {
                case '2x2':
                    if (!calc2x2 && typeof Calculator2x2 !== 'undefined') {
                        calc2x2 = new Calculator2x2('tool-container-2x2');
                    }
                    break;
                case 'curve':
                    if (!epiCurve && typeof EpiCurve !== 'undefined') {
                        epiCurve = new EpiCurve('tool-container-curve');
                    }
                    break;
                case 'exposure':
                    if (!exposureCalc && typeof ExposureCalculator !== 'undefined') {
                        exposureCalc = new ExposureCalculator('tool-container-exposure');
                    }
                    break;
                case 'notesheet':
                    if (typeof NotesheetGenerator !== 'undefined') {
                        NotesheetGenerator.render('tool-container-notesheet');
                    }
                    break;
                case 'proctor':
                    if (!proctorTimer && typeof ProctorTimer !== 'undefined') {
                        proctorTimer = new ProctorTimer('tool-container-proctor');
                    }
                    break;
                case 'drills':
                    if (typeof FlashDrills !== 'undefined' && !window.flashDrillsInstance) {
                        window.flashDrillsInstance = new FlashDrills('tool-container-drills');
                    }
                    break;
                case 'herd':
                    if (typeof HerdImmunityCalculator !== 'undefined') {
                        new HerdImmunityCalculator('tool-container-herd');
                    }
                    break;
                case 'infinite':
                    if (typeof OutbreakGenerator !== 'undefined') {
                        OutbreakGenerator.renderTo('tool-container-infinite');
                    }
                    break;
            }
        } catch (err) {
            console.error("[TOOLS] Error loading tool:", err);
        }
    }
};

// Hook into the content loader
// This function is called by epidemic-engine-nav.js when a chapter loads
function onToolsChapterLoaded() {
    TOOLS_MANAGER.init();
}

// 2x2 TABLE CALCULATOR
// Auto-calculates RR, OR, AR, and other epidemiological measures

class Calculator2x2 {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        if (!this.container) return; // Silent return if container doesn't exist
        this.values = { a: 0, b: 0, c: 0, d: 0 };
        this.mode = 'unmatched';
        this.render();
    }

    render() {
        const html = `
            <div class="calculator-2x2">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                    <h2 style="margin: 0;"><i class="ph ph-calculator"></i> 2×2 Table Calculator</h2>
                </div>
                
                <div class="mode-selector" style="background: var(--surface-2); padding: 1rem; border-radius: 8px; margin-bottom: 1.5rem;">
                    <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
                        <div style="flex: 1; min-width: 200px;">
                            <label for="calc-mode" style="font-weight: 500; font-size: 0.9rem;">Analysis Mode:</label>
                            <select id="calc-mode" class="form-select" style="width: 100%; margin-top: 0.5rem;" onchange="calc2x2.setMode(this.value)">
                                <option value="unmatched">Standard (Unmatched / Cohort)</option>
                                <option value="matched">Matched Case-Control</option>
                                <option value="pt">Incidence Density (Person-Time)</option>
                                <option value="stratified">Stratified (Mantel-Haenszel)</option>
                            </select>
                        </div>
                        <div class="national-toggle" style="display: flex; align-items: center; margin-top: 1.5rem;">
                            <label class="switch" style="margin-right: 0.5rem;">
                                <input type="checkbox" id="national-mode-toggle" aria-label="Toggle National Statistics Mode" ${this.nationalMode ? 'checked' : ''} onchange="calc2x2.toggleNationalMode(this.checked)">
                                <span class="slider round"></span>
                            </label>
                            <span style="font-weight: bold; color: var(--navy-primary); font-size: 0.9rem;">National Stats</span>
                        </div>
                    </div>
                    <div id="mode-guidance" style="margin-top: 0.5rem; font-size: 0.9rem; color: var(--text-muted); font-style: italic;">
                        Standard 2x2 analysis for Cohort and Case-Control studies. Enter counts of individuals.
                    </div>
                </div>

                <div class="calc-actions" style="display: flex; gap: 1rem; margin-bottom: 1rem; flex-wrap: wrap;">
                    <button class="btn btn-secondary" onclick="calc2x2.toggleSteps()"><i class="ph-bold ph-function"></i> Show Math</button>
                    <button class="btn btn-secondary" onclick="calc2x2.copyResults()"><i class="ph-bold ph-copy"></i> Copy Results</button>
                    <button class="btn btn-outline" onclick="calc2x2.clear()">Clear</button>
                    <button class="btn btn-outline" onclick="calc2x2.loadExample()">Load Example</button>
                    <button class="btn btn-secondary" onclick="calc2x2.toggleImporter()" style="width: 100%; margin-top: 0.5rem;"><i class="ph-bold ph-upload"></i> Import Line List</button>
                </div>

                <div id="importer-section" class="neo-card small" style="display: none; background: #fff; border: 1px dashed var(--navy-primary); margin-bottom: 2rem;">
                    <div style="display:flex; justify-content:space-between; align-items:center;">
                        <h4 style="margin:0;">Import Line List Data</h4>
                        <button onclick="calc2x2.toggleImporter()" style="background:none; border:none; cursor:pointer;"><i class="ph-bold ph-x"></i></button>
                    </div>
                    <p style="font-size:0.9rem; color:#666; margin:0.5rem 0;">Paste rows (Excel/Sheets). Must have headers like "Exposure" and "Ill".</p>
                    <textarea id="import-area" aria-label="Paste CSV Data here" style="width:100%; height:120px; font-family:monospace; margin-bottom:0.5rem; border:1px solid #ccc; padding:0.5rem;" placeholder="ID      Exposure      Ill&#10;1       Yes           Yes&#10;2       No            No"></textarea>
                    <div style="display:flex; justify-content:space-between; align-items:center;">
                        <div id="import-error" style="color:var(--accent-orange); font-size:0.85rem; font-weight:bold;"></div>
                        <button class="neo-btn primary small" onclick="calc2x2.runImport()">Process Data</button>
                    </div>
                </div>

                <div id="calc-steps" class="neo-card small" style="display: none; background: #f8fafc; border: 1px dashed var(--navy-primary); margin-bottom: 2rem;">
                    <h4 style="margin-top: 0; color: var(--navy-primary);">Step-by-Step Breakdown</h4>
                    <div id="steps-content" style="font-family: monospace; font-size: 0.95rem;"></div>
                </div>
                
                <div class="table-2x2">
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th id="table-head-1">Disease + (Ill)</th>
                                <th id="table-head-2">Disease − (Well)</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td id="table-row-1"><strong>Exposed +</strong></td>
                                <td>
                                    <input type="number" id="cell-a" value="${this.values.a}" min="0" class="cell-input" 
                                           aria-label="Cell A: Exposed and Ill"
                                           title="a = True Positives (Exposed and Ill)">
                                    <div style="font-size: 0.7rem; color: #666; text-align: center;">a</div>
                                </td>
                                <td>
                                    <input type="number" id="cell-b" value="${this.values.b}" min="0" class="cell-input"
                                           aria-label="Cell B: Exposed and Well"
                                           title="b = False Positives (Exposed but Well)">
                                    <div style="font-size: 0.7rem; color: #666; text-align: center;">b</div>
                                </td>
                                <td class="total-cell" id="total-a-b">0</td>
                            </tr>
                            <tr>
                                <td id="table-row-2"><strong>Exposed −</strong></td>
                                <td>
                                    <input type="number" id="cell-c" value="${this.values.c}" min="0" class="cell-input"
                                           aria-label="Cell C: Unexposed and Ill"
                                           title="c = False Negatives (Unexposed but Ill)">
                                    <div style="font-size: 0.7rem; color: #666; text-align: center;">c</div>
                                </td>
                                <td>
                                    <input type="number" id="cell-d" value="${this.values.d}" min="0" class="cell-input"
                                           aria-label="Cell D: Unexposed and Well"
                                           title="d = True Negatives (Unexposed and Well)">
                                    <div style="font-size: 0.7rem; color: #666; text-align: center;">d</div>
                                </td>
                                <td class="total-cell" id="total-c-d">0</td>
                            </tr>
                            <tr>
                                <td><strong>Total</strong></td>
                                <td class="total-cell" id="total-a-c">0</td>
                                <td class="total-cell" id="total-b-d">0</td>
                                <td class="total-cell grand-total" id="grand-total">0</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="results-grid" aria-live="polite" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-bottom: 2rem;">
                    <div class="neo-card small">
                        <strong>Attack Rate (Exp)</strong>
                        <div class="stat-value" id="ar-exposed">—</div>
                    </div>
                    <div class="neo-card small">
                        <strong>Attack Rate (Unexp)</strong>
                        <div class="stat-value" id="ar-unexposed">—</div>
                    </div>
                    <div class="neo-card small">
                        <strong>Relative Risk (RR)</strong>
                        <div class="stat-value accent" id="rr-value">—</div>
                        <div class="stat-sub" id="rr-interp"></div>
                    </div>
                    <div class="neo-card small">
                        <strong>Odds Ratio (OR)</strong>
                        <div class="stat-value accent" id="or-value">—</div>
                        <div class="stat-sub" id="or-interp"></div>
                        <div class="stat-sub" style="margin-top:0.25rem; font-size:0.8rem; color: var(--text-color); font-weight: bold;">
                           (OR ≈ RR if prev. &lt; 10%)
                        </div>
                    </div>
                    <div class="neo-card small">
                        <strong>Attr. Risk (RD)</strong>
                        <div class="stat-value" id="rd-value">—</div>
                    </div>
                     <div class="neo-card small">
                        <strong>Attr. Risk %</strong>
                        <div class="stat-value" id="ar-pct-value">—</div>
                    </div>
                </div>

                <div class="national-mode-section national-stat hidden" style="border-top: 2px dashed var(--border); padding-top: 1.5rem;">
                    <h3 style="color: var(--navy-primary); margin-top: 0;">Advanced Statistics (National Mode)</h3>
                    <div class="results-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1rem;">
                        <div class="neo-card small" style="background: #fdf2f8;">
                            <strong>Chi-Square</strong>
                            <div class="stat-value" id="chi-square-value">—</div>
                            <div class="stat-sub" id="p-value"></div>
                            <div class="stat-sub" id="chi-interp"></div>
                        </div>
                        <div class="neo-card small" style="background: #fdf2f8;">
                            <strong>95% CI (OR)</strong>
                            <div class="stat-value smaller" id="or-ci">—</div>
                            <div class="stat-sub">Woolf's Method</div>
                        </div>
                         <div class="neo-card small" style="background: #fdf2f8;">
                            <strong>95% CI (RR)</strong>
                            <div class="stat-value smaller" id="rr-ci">—</div>
                            <div class="stat-sub">Taylor Series</div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        this.container.innerHTML = html;
        this.attachListeners();
        this.calculate();
    }

    copyResults() {
        const { a, b, c, d } = this.values;
        const rr = document.getElementById('rr-value').textContent;
        const or = document.getElementById('or-value').textContent;
        const arExp = document.getElementById('ar-exposed').textContent;
        const arUnexp = document.getElementById('ar-unexposed').textContent;
        const rd = document.getElementById('rd-value').textContent;

        const text = `2x2 Calculation Results:
------------------------
       Ill  Well
Exp+   ${a}   ${b}
Exp-   ${c}   ${d}
------------------------
Attack Rate (Exp): ${arExp}
Attack Rate (Unexp): ${arUnexp}
Relative Risk (RR): ${rr}
Odds Ratio (OR): ${or}
Attributable Risk: ${rd}
`;
        navigator.clipboard.writeText(text).then(() => {
            const btns = this.container.querySelectorAll('.btn-secondary');
            // Assuming the copy button is the second one, but safer to find by icon or text
            let btn = null;
            btns.forEach(b => {
                if (b.textContent.includes('Copy')) btn = b;
            });

            if (btn) {
                const original = btn.innerHTML;
                btn.innerHTML = '<i class="ph-bold ph-check"></i> Copied!';
                setTimeout(() => btn.innerHTML = original, 2000);
            }
        }).catch(err => {
            console.error('Failed to copy', err);
            if (typeof window.UI !== 'undefined') window.UI.toast('Failed to copy to clipboard', 'error');
            else alert('Failed to copy to clipboard');
        });
    }

    attachListeners() {
        ['a', 'b', 'c', 'd'].forEach(cell => {
            const input = document.getElementById(`cell-${cell}`);
            if (input) {
                input.addEventListener('input', (e) => {
                    let val = parseInt(e.target.value);
                    if (isNaN(val) || val < 0) val = 0;
                    // Dont overwrite user typing empty string, only on calc
                    this.values[cell] = val;
                    this.calculate();
                });
                // Enforce on blur
                input.addEventListener('blur', (e) => {
                    let val = parseInt(e.target.value);
                    if (isNaN(val) || val < 0) {
                        e.target.value = 0;
                        this.values[cell] = 0;
                        this.calculate();
                    }
                });
            }
        });
    }

    toggleSteps() {
        const steps = document.getElementById('calc-steps');
        const btn = this.container.querySelector('.btn-secondary');
        if (steps.style.display === 'none') {
            steps.style.display = 'block';
            btn.innerHTML = '<i class="ph-bold ph-function"></i> Hide Math';
        } else {
            steps.style.display = 'none';
            btn.innerHTML = '<i class="ph-bold ph-function"></i> Show Math';
        }
    }

    calculate() {
        // Sanitize values to ensure they are numbers
        this.values.a = Number(this.values.a) || 0;
        this.values.b = Number(this.values.b) || 0;
        this.values.c = Number(this.values.c) || 0;
        this.values.d = Number(this.values.d) || 0;

        const { a, b, c, d } = this.values;

        // Update totals
        document.getElementById('total-a-b').textContent = Number((a + b).toFixed(1));
        document.getElementById('total-c-d').textContent = Number((c + d).toFixed(1));
        document.getElementById('total-a-c').textContent = Number((a + c).toFixed(1));
        document.getElementById('total-b-d').textContent = Number((b + d).toFixed(1));
        document.getElementById('grand-total').textContent = Number((a + b + c + d).toFixed(1));

        const mode = this.mode || 'unmatched';
        const stepsContainer = document.getElementById('steps-content');

        let rr = 0, or = 0, arExposed = 0, arUnexposed = 0, arPct = 0;

        if (mode === 'matched') {
            // McNemar's OR = b / c
            or = c > 0 ? b / c : 0;

            document.getElementById('rr-value').textContent = "N/A";
            document.getElementById('or-value').textContent = this.formatNumber(or);
            document.getElementById('ar-exposed').textContent = "N/A";
            document.getElementById('ar-unexposed').textContent = "N/A";
            document.getElementById('rd-value').textContent = "N/A";
            document.getElementById('ar-pct-value').textContent = "N/A";

            if (stepsContainer) {
                stepsContainer.innerHTML = `
                    <div style="margin-bottom: 0.5rem;"><strong>Matched Case-Control:</strong> Analyze <em>discordant pairs</em>.</div>
                    <div><strong>Odds Ratio (OR):</strong> b / c = ${b} / ${c} = <strong>${this.formatNumber(or)}</strong></div>
                `;
            }

            this.interpretValue('or-interp', or, 'odds');
            document.getElementById('rr-interp').textContent = "Not used in Matched";

            this.interpretValue('or-interp', or, 'odds');
            document.getElementById('rr-interp').textContent = "Not used in Matched";

        } else if (mode === 'stratified') {
            // We need a second table for this... 
            // For simplicity in this tool, we will assume Strata 1 is the user input A-D, 
            // and we will prompt or look for hidden inputs for Strata 2.
            // BUT simpler: Just show a "Work in Progress" message or minimal UI for now,
            // or render input fields for Stratum 2 dynamically.

            // Dynamic injection of Stratum 2 inputs if missing
            const stratum2 = document.getElementById('stratum-2-container');
            if (!stratum2) {
                this.injectStratum2();
                return; // Re-render triggers calc again
            }

            // Get Stratum 2 values
            const a2 = Number(document.getElementById('cell-a2').value) || 0;
            const b2 = Number(document.getElementById('cell-b2').value) || 0;
            const c2 = Number(document.getElementById('cell-c2').value) || 0;
            const d2 = Number(document.getElementById('cell-d2').value) || 0;

            // Calculate MH OR
            // OR_MH = Sum( (ad)/N ) / Sum( (bc)/N )
            const n1 = a + b + c + d || 1;
            const n2 = a2 + b2 + c2 + d2 || 1;

            const num1 = (a * d) / n1;
            const denom1 = (b * c) / n1;

            const num2 = (a2 * d2) / n2;
            const denom2 = (b2 * c2) / n2;

            const orMH = (num1 + num2) / (denom1 + denom2) || 0;

            // Crude OR (Total)
            const A = a + a2, B = b + b2, C = c + c2, D = d + d2;
            const orCrude = (A * D) / (B * C) || 0;

            document.getElementById('or-value').textContent = this.formatNumber(orMH);
            document.getElementById('rr-value').textContent = "use OR"; // MH RR is harder

            // Display Logic
            if (stepsContainer) {
                const diff = Math.abs(orCrude - orMH) / orMH;
                const isConfounded = diff > 0.1; // 10% rule

                stepsContainer.innerHTML = `
                    <div><strong>Stratum 1 (Above):</strong> OR1 = ${(a * d) / (b * c) ? ((a * d) / (b * c)).toFixed(2) : 0}</div>
                    <div><strong>Stratum 2 (Below):</strong> OR2 = ${(a2 * d2) / (b2 * c2) ? ((a2 * d2) / (b2 * c2)).toFixed(2) : 0}</div>
                    <hr>
                    <div><strong>Crude OR:</strong> ${orCrude.toFixed(2)}</div>
                    <div><strong>Adjusted OR (Mantel-Haenszel):</strong> ${orMH.toFixed(2)}</div>
                    <div style="margin-top:0.5rem; color: ${isConfounded ? 'red' : 'green'}; font-weight:bold;">
                        ${isConfounded ? 'Change > 10% → Confounding Present!' : 'Change < 10% → No Major Confounding.'}
                    </div>
                 `;
            }

            this.interpretValue('or-interp', orMH, 'odds');

        } else if (mode === 'pt') {
            arExposed = b > 0 ? a / b : 0;
            arUnexposed = d > 0 ? c / d : 0;
            const irr = arUnexposed > 0 ? arExposed / arUnexposed : 0;

            document.getElementById('ar-exposed').textContent = arExposed.toFixed(4);
            document.getElementById('ar-unexposed').textContent = arUnexposed.toFixed(4);
            document.getElementById('rr-value').textContent = this.formatNumber(irr);
            document.getElementById('or-value').textContent = "N/A";

            const rd = arExposed - arUnexposed;
            document.getElementById('rd-value').textContent = rd.toFixed(4);

            arPct = irr > 0 ? (((irr - 1) / irr) * 100) : 0;
            document.getElementById('ar-pct-value').textContent = this.formatPercent(arPct / 100);

            if (stepsContainer) {
                stepsContainer.innerHTML = `
                    <div style="margin-bottom: 0.5rem;"><strong>Incidence Rate (Exp):</strong> Cases / PT = ${a} / ${b} = <strong>${arExposed.toFixed(4)}</strong></div>
                    <div style="margin-bottom: 0.5rem;"><strong>Incidence Rate (Unexp):</strong> Cases / PT = ${c} / ${d} = <strong>${arUnexposed.toFixed(4)}</strong></div>
                    <div style="margin-bottom: 0.5rem;"><strong>Rate Ratio (IRR):</strong> IR(exp) / IR(unexp) = ${arExposed.toFixed(4)} / ${arUnexposed.toFixed(4)} = <strong>${this.formatNumber(irr)}</strong></div>
                `;
            }

            this.interpretValue('rr-interp', irr, 'risk');
            document.getElementById('or-interp').textContent = "N/A for Person-Time";

        } else {
            const totalExposed = a + b;
            const totalUnexposed = c + d;

            arExposed = totalExposed > 0 ? (a / totalExposed) : 0;
            arUnexposed = totalUnexposed > 0 ? (c / totalUnexposed) : 0;

            rr = arUnexposed > 0 ? (arExposed / arUnexposed) : 0;
            or = (b > 0 && c > 0) ? ((a * d) / (b * c)) : 0;

            document.getElementById('ar-exposed').textContent = this.formatPercent(arExposed);
            document.getElementById('ar-unexposed').textContent = this.formatPercent(arUnexposed);
            document.getElementById('rr-value').textContent = this.formatNumber(rr);
            document.getElementById('or-value').textContent = this.formatNumber(or);

            const rd = arExposed - arUnexposed;
            document.getElementById('rd-value').textContent = this.formatPercent(rd);

            arPct = rr > 0 ? (((rr - 1) / rr) * 100) : 0;
            document.getElementById('ar-pct-value').textContent = this.formatPercent(arPct / 100);

            if (stepsContainer) {
                stepsContainer.innerHTML = `
                    <div style="margin-bottom: 0.5rem;"><strong>1. Attack Rate (Exposed):</strong> a / (a+b) = ${a} / ${totalExposed} = <strong>${arExposed.toFixed(3)}</strong> (${(arExposed * 100).toFixed(1)}%)</div>
                    <div style="margin-bottom: 0.5rem;"><strong>2. Attack Rate (Unexposed):</strong> c / (c+d) = ${c} / ${totalUnexposed} = <strong>${arUnexposed.toFixed(3)}</strong> (${(arUnexposed * 100).toFixed(1)}%)</div>
                    <div style="margin-bottom: 0.5rem;"><strong>3. Relative Risk (RR):</strong> AR(exp) / AR(unexp) = ${arExposed.toFixed(3)} / ${arUnexposed.toFixed(3)} = <strong>${this.formatNumber(rr)}</strong></div>
                    <div style="margin-bottom: 0.5rem;"><strong>4. Odds Ratio (OR):</strong> (a×d) / (b×c) = (${a}×${d}) / (${b}×${c}) = ${a * d} / ${b * c} = <strong>${this.formatNumber(or)}</strong></div>
                `;
            }

            this.interpretValue('rr-interp', rr, 'risk');
            this.interpretValue('or-interp', or, 'odds');

            if (this.nationalMode) {
                this.calculateNationalStats(a, b, c, d, or, rr);
            }
        }
    }

    interpretValue(elementId, val, type) {
        const el = document.getElementById(elementId);
        if (!el) return;

        if (val > 1) {
            el.textContent = type === 'risk' ? `Exposure increases risk by ${((val - 1) * 100).toFixed(0)}%` : `${val.toFixed(2)}× higher odds`;
            el.style.color = 'var(--danger)';
        } else if (val < 1 && val > 0) {
            el.textContent = type === 'risk' ? `Exposure decreases risk by ${((1 - val) * 100).toFixed(0)}%` : `${(1 / val).toFixed(2)}× lower odds`;
            el.style.color = 'var(--success)';
        } else if (val === 1) {
            el.textContent = 'No association';
            el.style.color = 'var(--text-muted)';
        } else {
            el.textContent = '—';
            el.style.color = 'var(--text-muted)';
        }
    }

    setMode(mode) {
        this.mode = mode;
        const guidance = document.getElementById('mode-guidance');
        const thDisease = document.getElementById('table-head-1');
        const thHealthy = document.getElementById('table-head-2');
        const rowExp = document.getElementById('table-row-1');
        const rowUnexp = document.getElementById('table-row-2');

        // Reset guidance styles
        if (guidance) {
            guidance.style.background = 'transparent';
            guidance.style.padding = '0';
            guidance.style.borderRadius = '0';
            guidance.style.color = 'var(--text-muted)';
        }

        if (mode === 'matched') {
            if (guidance) guidance.textContent = "Matched Case-Control. Use the 2x2 of Pairs. Cells represent PAIRS, not people.";
            if (thDisease) thDisease.innerHTML = "Control Exposed (+)";
            if (thHealthy) thHealthy.innerHTML = "Control Unexposed (-)";
            if (rowExp) rowExp.innerHTML = "<strong>Case Exposed (+)</strong>";
            if (rowUnexp) rowUnexp.innerHTML = "<strong>Case Unexposed (-)</strong>";
        } else if (mode === 'pt') {
            if (guidance) guidance.textContent = "Incidence Density. 'Disease -' column becomes 'Person-Time'. Enter summed time.";
            if (thDisease) thDisease.innerHTML = "Cases";
            if (thHealthy) thHealthy.innerHTML = "Person-Time";
            if (rowExp) rowExp.innerHTML = "<strong>Exposed</strong>";
            if (rowUnexp) rowUnexp.innerHTML = "<strong>Unexposed</strong>";
        } else if (mode === 'stratified') {
            if (guidance) guidance.innerHTML = "<strong>Mantel-Haenszel Analysis:</strong> Check for Confounding. Enter Stratum 1 above, Stratum 2 below.";
            if (thDisease) thDisease.innerHTML = "Disease +";
            if (thHealthy) thHealthy.innerHTML = "Disease -";

            // Show Strata 2
            this.injectStratum2();
        } else {
            if (guidance) guidance.textContent = "Standard 2x2 analysis for Cohort and Case-Control studies. Enter counts of individuals.";
            if (thDisease) thDisease.innerHTML = "Disease + (Ill)";
            if (thHealthy) thHealthy.innerHTML = "Disease − (Well)";
            if (rowExp) rowExp.innerHTML = "<strong>Exposed +</strong>";
            if (rowUnexp) rowUnexp.innerHTML = "<strong>Exposed −</strong>";
        }
        this.calculate();
    }

    toggleNationalMode(checked) {
        this.nationalMode = checked;
        const stats = this.container.querySelectorAll('.national-stat');
        stats.forEach(el => {
            if (this.nationalMode) {
                el.classList.remove('hidden');
            } else {
                el.classList.add('hidden');
            }
        });
        this.calculate();
    }

    calculateNationalStats(a, b, c, d, or, rr) {
        const total = a + b + c + d;
        if (total > 0) {
            const expA = ((a + c) * (a + b)) / total;
            const expB = ((b + d) * (a + b)) / total;
            const expC = ((a + c) * (c + d)) / total;
            const expD = ((b + d) * (c + d)) / total;

            const chi = (Math.pow(a - expA, 2) / expA) +
                (Math.pow(b - expB, 2) / expB) +
                (Math.pow(c - expC, 2) / expC) +
                (Math.pow(d - expD, 2) / expD);

            document.getElementById('chi-square-value').textContent = chi.toFixed(2);

            let pVal = "";
            if (chi > 6.63) pVal = "< 0.01 (Highly Sig)";
            else if (chi > 3.84) pVal = "< 0.05 (Significant)";
            else pVal = "> 0.05 (Not Sig)";

            document.getElementById('p-value').textContent = pVal;
            document.getElementById('chi-interp').textContent = chi > 3.84 ? "Reject Null Hypothesis" : "Fail to Reject Null";
        }

        if (a > 0 && b > 0 && c > 0 && d > 0) {
            const lnOR = Math.log(or);
            const seOR = Math.sqrt((1 / a) + (1 / b) + (1 / c) + (1 / d));
            const lowerOR = Math.exp(lnOR - (1.96 * seOR));
            const upperOR = Math.exp(lnOR + (1.96 * seOR));
            document.getElementById('or-ci').textContent = `95 % CI: ${lowerOR.toFixed(2)} - ${upperOR.toFixed(2)} `;
        } else {
            document.getElementById('or-ci').textContent = "Cannot calc CI (zeros)";
        }

        if (a > 0 && c > 0) {
            const lnRR = Math.log(rr);
            const seRR = Math.sqrt(((1 / a) + (1 / c)) - ((1 / (a + b)) + (1 / (c + d))));
            const lowerRR = Math.exp(lnRR - (1.96 * seRR));
            const upperRR = Math.exp(lnRR + (1.96 * seRR));
            document.getElementById('rr-ci').textContent = `95 % CI: ${lowerRR.toFixed(2)} - ${upperRR.toFixed(2)} `;
        } else {
            document.getElementById('rr-ci').textContent = "Cannot calc CI (zeros)";
        }
    }

    formatNumber(num) {
        if (num === 0 || !isFinite(num)) return '—';
        return num.toFixed(2);
    }

    formatPercent(num) {
        if (num === 0 || !isFinite(num)) return '—';
        return `${(num * 100).toFixed(1)}% `;
    }

    clear() {
        this.values = { a: 0, b: 0, c: 0, d: 0 };
        ['a', 'b', 'c', 'd'].forEach(cell => {
            const input = document.getElementById(`cell-${cell}`);
            if (input) input.value = 0;
        });

        // Reset mode and guidance styles
        this.setMode('unmatched');
        document.getElementById('calc-mode').value = 'unmatched';

        this.calculate();
    }

    loadExample() {
        const mode = document.getElementById('calc-mode').value;

        if (mode === 'matched') {
            // Matched Pairs Example (Foodborne pairs)
            this.values = { a: 15, b: 35, c: 5, d: 45 }; // b and c are discordant pairs
            ['a', 'b', 'c', 'd'].forEach(cell => {
                const input = document.getElementById(`cell-${cell}`);
                if (input) input.value = this.values[cell];
            });
            this.setMode('matched');
            const guidance = document.getElementById('mode-guidance');
            if (guidance) {
                guidance.innerHTML = '<strong style="color: var(--navy-primary);">Matched Example:</strong> 35 pairs were Case-Exposed/Control-Unexposed (b), only 5 were Case-Unexposed/Control-Exposed (c). OR is high.';
                guidance.style.background = '#eef2ff';
            }
        } else if (mode === 'pt') {
            // Person-Time Example
            this.values = { a: 10, b: 1000, c: 5, d: 1000 };
            ['a', 'b', 'c', 'd'].forEach(cell => {
                const input = document.getElementById(`cell-${cell}`);
                if (input) input.value = this.values[cell];
            });
            this.setMode('pt');
            const guidance = document.getElementById('mode-guidance');
            if (guidance) {
                guidance.innerHTML = '<strong style="color: var(--navy-primary);">PT Example:</strong> 10 cases in 1000 person-years exposed vs 5 in 1000 unexposed.';
                guidance.style.background = '#eef2ff';
            }
        } else {
            // Unmatched (Standard)
            this.values = { a: 85, b: 15, c: 10, d: 90 };
            ['a', 'b', 'c', 'd'].forEach(cell => {
                const input = document.getElementById(`cell-${cell}`);
                if (input) input.value = this.values[cell];
            });
            this.setMode('unmatched');

            const guidance = document.getElementById('mode-guidance');
            if (guidance) {
                guidance.innerHTML = '<strong style="color: var(--navy-primary);">Example Loaded:</strong> Chicken salad outbreak. Compare the high Attack Rate in exposed vs unexposed.';
                guidance.style.background = '#eef2ff';
                guidance.style.padding = '0.5rem';
                guidance.style.borderRadius = '4px';
            }
        }
        this.calculate();
    }

    toggleImporter() {
        const el = document.getElementById('importer-section');
        if (el) el.style.display = el.style.display === 'none' ? 'block' : 'none';
        if (el.style.display === 'block') document.getElementById('import-area').focus();
    }

    runImport() {
        const text = document.getElementById('import-area').value.trim();
        const errorEl = document.getElementById('import-error');
        errorEl.textContent = '';
        errorEl.style.color = 'var(--accent-orange)';

        if (!text) { errorEl.textContent = "No data entered."; return; }

        const lines = text.split(/\r?\n/).filter(l => l.trim().length > 0);
        if (lines.length < 2) { errorEl.textContent = "Need at least header and one row."; return; }

        // Naive Parser
        const header = lines[0].toLowerCase().split(/[\t,;|]+/).map(s => s.trim());
        let expIdx = header.findIndex(h => h.includes('exp') || h.includes('risk') || h.includes('food') || h.includes('eaten'));
        let illIdx = header.findIndex(h => h.includes('ill') || h.includes('sick') || h.includes('case') || h.includes('dis') || h.includes('outcome'));

        // Fallback
        if (expIdx === -1 && illIdx === -1) {
            if (header.length >= 3) { expIdx = 1; illIdx = 2; }
            else if (header.length === 2) { expIdx = 0; illIdx = 1; }
        }

        if (expIdx === -1 || illIdx === -1) {
            errorEl.innerHTML = "<strong>Format Error:</strong> Could not identify columns.<br>Please ensure your top row has headers like 'Exposure' and 'Ill'.<br><em>Example: ID, Exposure, Ill</em>";
            return;
        }

        let a = 0, b = 0, c = 0, d = 0;
        let processed = 0;

        for (let i = 1; i < lines.length; i++) {
            const row = lines[i].split(/[\t,;|]+/).map(s => s.trim());
            if (row.length <= Math.max(expIdx, illIdx)) continue;

            const expVal = this.parseBool(row[expIdx]);
            const illVal = this.parseBool(row[illIdx]);

            if (expVal === null || illVal === null) continue;

            if (expVal && illVal) a++;
            if (expVal && !illVal) b++;
            if (!expVal && illVal) c++;
            if (!expVal && !illVal) d++;
            processed++;
        }

        if (processed === 0) {
            errorEl.textContent = "No valid data rows found.";
            return;
        }

        this.values = { a, b, c, d };

        if (document.getElementById('cell-a')) document.getElementById('cell-a').value = a;
        if (document.getElementById('cell-b')) document.getElementById('cell-b').value = b;
        if (document.getElementById('cell-c')) document.getElementById('cell-c').value = c;
        if (document.getElementById('cell-d')) document.getElementById('cell-d').value = d;

        this.calculate();
        errorEl.style.color = 'green';
        errorEl.textContent = `Success! Processed ${processed} rows.`;

        // Hide after success
        setTimeout(() => {
            if (document.getElementById('import-error').textContent.includes('Success')) {
                this.toggleImporter();
            }
        }, 1500);
    }

    parseBool(val) {
        if (!val) return null;
        val = val.toLowerCase();
        if (['y', 'yes', '1', 'pos', '+', 'true'].some(x => val.startsWith(x))) return true;
        if (['n', 'no', '0', 'neg', '-', 'false'].some(x => val.startsWith(x))) return false;
        return null;
    }

    injectStratum2() {
        if (document.getElementById('stratum-2-container')) {
            document.getElementById('stratum-2-container').style.display = 'block';
            return;
        }

        const div = document.createElement('div');
        div.id = 'stratum-2-container';
        div.style.cssText = 'margin-top: 1rem; border-top: 2px dashed #ccc; padding-top: 1rem; background: #fffbe6; padding:1rem; border-radius:8px;';

        div.innerHTML = `
            <h4>Stratum 2 (e.g. Different Age Group)</h4>
            <table class="w-100">
                <tr>
                    <td>Exposed +</td>
                    <td><input type="number" id="cell-a2" value="0" class="cell-input" oninput="calc2x2.calculate()"></td>
                    <td><input type="number" id="cell-b2" value="0" class="cell-input" oninput="calc2x2.calculate()"></td>
                </tr>
                 <tr>
                    <td>Exposed -</td>
                    <td><input type="number" id="cell-c2" value="0" class="cell-input" oninput="calc2x2.calculate()"></td>
                    <td><input type="number" id="cell-d2" value="0" class="cell-input" oninput="calc2x2.calculate()"></td>
                </tr>
            </table>
        `;

        // Insert after first table
        const t1 = this.container.querySelector('.table-2x2');
        if (t1) t1.insertAdjacentElement('afterend', div);
    }
}

// Global instance
let calc2x2 = null;

class EpiCurve {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.cases = [];
        this.mode = 'plotter'; // 'plotter' or 'visualizer'
        this.visualizerType = 'point'; // 'point', 'continuous', 'propagated'
        this.render();
    }

    addCase(dateStr) {
        if (!dateStr) return;
        this.cases.push(dateStr);
        this.cases.sort();
        this.render();
    }

    // Cleaned up duplicate render and input methods


    removeCase(index) {
        this.cases.splice(index, 1);
        this.render();
    }

    clear() {
        if (typeof window.UI !== 'undefined') {
            window.UI.modal('Clear Data', 'Are you sure you want to clear all data?', () => {
                this.cases = [];
                this.render();
                window.UI.toast('Data cleared.', 'info');
            });
        } else if (confirm('Are you sure you want to clear all data?')) {
            this.cases = [];
            this.render();
        }
    }

    loadExample() {
        this.loadPointSource();
    }

    loadPointSource() {
        const baseDate = new Date().toISOString().split('T')[0];
        const pattern = [1, 2, 4, 7, 5, 3, 2, 1];
        this.populateData(baseDate, pattern);
        this.renderSummaryTable(this.summarizeByDate(this.cases));
        this.renderExplanation({
            title: "Point Source Outbreak",
            text: "Rapid rise to a peak, then gradual decline. Suggests a single, sharp exposure (e.g., contaminated potato salad at a picnic)."
        });
    }

    loadIntermittent() {
        const baseDate = new Date().toISOString().split('T')[0];
        // Intermittent: Peaks separated by non-incubation periods
        const pattern = [2, 3, 0, 0, 4, 5, 0, 0, 0, 3, 2];
        this.populateData(baseDate, pattern);
        this.renderSummaryTable(this.summarizeByDate(this.cases));
        this.renderExplanation({
            title: "Intermittent Common Source",
            text: "Irregular peaks reflecting the timing and extent of exposure. Suggests a source that is not constant (e.g., specific batches of contaminated product)."
        });
    }

    loadPropagated() {
        const baseDate = new Date().toISOString().split('T')[0];
        // Propagated: Successively larger peaks, spaced by incubation period
        // Approx incubation of 3 days for this fake data
        const pattern = [1, 0, 0, 2, 3, 0, 0, 5, 8, 4, 0, 0, 2];
        this.populateData(baseDate, pattern);
        this.renderSummaryTable(this.summarizeByDate(this.cases));
        this.renderExplanation({
            title: "Propagated (Person-to-Person)",
            text: "Successively taller peaks, separated by one incubation period. Suggests the disease is spreading from person to person (e.g., Measles)."
        });
    }

    populateData(baseDate, pattern) {
        this.cases = [];
        pattern.forEach((count, offset) => {
            for (let i = 0; i < count; i++) {
                this.cases.push(this.addDays(baseDate, offset));
            }
        });
        this.cases.sort();
        this.render();
    }

    renderExplanation(info) {
        const container = document.getElementById('epi-curve-explanation');
        if (!container) return;
        container.innerHTML = `
            <div class="neo-card small" style="border-left: 4px solid var(--accent-orange); margin-top: 1rem;">
                <h4>${info.title}</h4>
                <p>${info.text}</p>
            </div>
        `;
    }

    /**
     * Summarise an array of case dates into an array of objects with date and count.
     * @param {string[]} cases
     * @returns {{date: string, count: number}[]}
     */
    summarizeByDate(cases) {
        const counts = {};
        cases.forEach(d => {
            counts[d] = (counts[d] || 0) + 1;
        });
        return Object.keys(counts)
            .sort()
            .map(date => ({ date, count: counts[date] }));
    }

    /**
     * Render the summary data table into the dedicated container on the page.
     * @param {Array} summary
     */
    renderSummaryTable(summary) {
        const container = document.getElementById('epi-curve-table-container');
        if (!container) return;
        if (!summary || summary.length === 0) {
            container.innerHTML = '';
            return;
        }
        const rows = summary.map(row => {
            return `<tr><td>${row.date}</td><td style="text-align:left;">${row.count}</td></tr>`;
        }).join('');
        container.innerHTML = `
            <table class="table" style="width: auto; min-width: 300px; border-collapse: collapse;">
                <thead style="background: var(--navy-primary); color: white;">
                    <tr><th style="padding: 0.5rem; text-align:left;">Date (onset)</th><th style="padding: 0.5rem; text-align:left;">Number of cases</th></tr>
                </thead>
                <tbody>
                    ${rows}
                </tbody>
            </table>
        `;
    }



    addDays(dateStr, days) {
        const date = new Date(dateStr);
        date.setDate(date.getDate() + days);
        return date.toISOString().split('T')[0];
    }

    getHistogramData() {
        if (this.cases.length === 0) return { labels: [], data: [], max: 0 };

        const counts = {};
        let minDate = new Date(this.cases[0]);
        let maxDate = new Date(this.cases[this.cases.length - 1]);

        // Fill in gaps
        for (let d = new Date(minDate); d <= maxDate; d.setDate(d.getDate() + 1)) {
            const dateStr = d.toISOString().split('T')[0];
            counts[dateStr] = 0;
        }

        this.cases.forEach(date => {
            if (counts[date] !== undefined) counts[date]++;
        });

        const labels = Object.keys(counts).sort();
        const data = labels.map(date => counts[date]);
        const max = Math.max(...data, 1); // Ensure at least 1 for scale

        return { labels, data, max };
    }

    // --- Visualizer Methods ---

    setMode(mode) {
        this.mode = mode;
        this.render();
        if (mode === 'visualizer') {
            this.drawVisualizer();
        }
    }

    setVisualizerType(type) {
        this.visualizerType = type;
        this.drawVisualizer();
        this.updateVisualizerDescription();
    }

    drawVisualizer() {
        const canvas = document.getElementById('epiCanvas');
        if (!canvas) return;

        // Auto-Resize
        const container = canvas.parentElement;
        if (container) {
            canvas.width = container.clientWidth;
            // canvas.height remains fixed or could be ratio based
        }

        const ctx = canvas.getContext('2d');
        const type = this.visualizerType;

        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Set dimensions
        const padding = 40;
        const chartWidth = canvas.width - 2 * padding;
        const chartHeight = canvas.height - 2 * padding;

        // Draw axes
        ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--color-text') || '#000';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(padding, padding);
        ctx.lineTo(padding, canvas.height - padding);
        ctx.lineTo(canvas.width - padding, canvas.height - padding);
        ctx.stroke();

        // Labels
        ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--color-text') || '#000';
        ctx.font = '14px sans-serif';
        ctx.fillText('Cases', 10, 30);
        ctx.fillText('Time', canvas.width / 2 - 20, canvas.height - 10);

        // Generate data based on type
        let data = [];
        const maxCases = 50;

        if (type === 'point') {
            // Point source - bell curve
            for (let i = 0; i < 20; i++) {
                const x = i - 10;
                const y = maxCases * Math.exp(-x * x / 20);
                data.push(y);
            }
        } else if (type === 'continuous') {
            // Continuous - plateau
            for (let i = 0; i < 20; i++) {
                if (i < 3) data.push(maxCases * 0.1 * i);
                else if (i < 15) data.push(maxCases * 0.8 + Math.random() * maxCases * 0.2);
                else data.push(maxCases * 0.8 * (20 - i) / 5);
            }
        } else if (type === 'intermittent') {
            // Intermittent - Irregular peaks
            for (let i = 0; i < 25; i++) {
                let val = 0;
                // Peak 1
                if (Math.abs(i - 4) <= 2) val = maxCases * 0.6;
                // Peak 2
                if (Math.abs(i - 12) <= 1) val = maxCases * 0.8;
                // Peak 3
                if (Math.abs(i - 20) <= 2) val = maxCases * 0.5;

                // Add randomization
                if (val > 0) val += (Math.random() - 0.5) * (maxCases * 0.2);

                data.push(Math.max(0, val));
            }
        } else {
            // Propagated - multiple peaks
            for (let i = 0; i < 25; i++) {
                const peak1 = maxCases * 0.4 * Math.exp(-Math.pow(i - 5, 2) / 8);
                const peak2 = maxCases * 0.7 * Math.exp(-Math.pow(i - 12, 2) / 10);
                const peak3 = maxCases * 1.0 * Math.exp(-Math.pow(i - 20, 2) / 12);
                data.push(peak1 + peak2 + peak3);
            }
        }

        // Draw bars
        const barWidth = chartWidth / data.length;
        ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--navy-primary') || '#003d6b';

        data.forEach((value, index) => {
            const barHeight = (value / maxCases) * chartHeight;
            const x = padding + index * barWidth;
            const y = canvas.height - padding - barHeight;
            ctx.fillRect(x, y, barWidth * 0.8, barHeight);
        });
    }

    updateVisualizerDescription() {
        const descriptions = {
            point: `<h4 style="color: var(--color-primary);">Point Source Outbreak</h4>
                    <p><strong>Pattern:</strong> Single sharp peak with rapid rise and gradual decline (bell curve)</p>
                    <p><strong>Cause:</strong> Exposure to a common source over a brief, well-defined period</p>
                    <p><strong>Example:</strong> Food poisoning from contaminated potato salad at a single event</p>
                    <p><strong>Key Feature:</strong> Everyone exposed at approximately the same time</p>`,
            continuous: `<h4 style="color: var(--color-primary);">Continuous Common Source Outbreak</h4>
                    <p><strong>Pattern:</strong> Plateau or flat-topped curve</p>
                    <p><strong>Cause:</strong> Ongoing exposure to contaminated source over extended period</p>
                    <p><strong>Example:</strong> Contaminated water supply (like John Snow's cholera investigation)</p>
                    <p><strong>Key Feature:</strong> Source remains active, causing cases over multiple incubation periods</p>`,
            propagated: `<h4 style="color: var(--color-primary);">Propagated Outbreak</h4>
                    <p><strong>Pattern:</strong> Multiple peaks of increasing height</p>
                    <p><strong>Cause:</strong> Person-to-person transmission</p>
                    <p><strong>Example:</strong> Measles, influenza, COVID-19</p>
                    <p><strong>Key Feature:</strong> Peaks represent successive generations, spaced ~1 incubation period apart</p>`,
            intermittent: `<h4 style="color: var(--color-primary);">Intermittent Common Source</h4>
                    <p><strong>Pattern:</strong> Irregular peaks separated by periods with no cases</p>
                    <p><strong>Cause:</strong> Common source that is not constant (e.g., occasional batch of bad food)</p>
                    <p><strong>Example:</strong> Industrial waste released into water only on weekends</p>
                    <p><strong>Key Feature:</strong> Unpredictable timing, gaps reflect times when source was safe</p>`
        };
        const descContainer = document.getElementById('epi-description');
        if (descContainer) {
            descContainer.innerHTML = descriptions[this.visualizerType];
        }
    }

    // --- Render Main Interface ---

    addBulkCases(text) {
        if (!text) return;
        // Split by newlines, commas, or semicolons
        const potentialDates = text.split(/[\n,;]+/);
        let addedCount = 0;

        potentialDates.forEach(dStr => {
            const raw = dStr.trim();
            if (!raw) return;
            // Attempt simple standardization (YYYY-MM-DD)
            const d = new Date(raw);
            if (!isNaN(d.getTime())) {
                this.cases.push(d.toISOString().split('T')[0]);
                addedCount++;
            }
        });

        if (addedCount > 0) {
            this.cases.sort();
            this.render();
            if (typeof window.UI !== 'undefined') window.UI.toast(`Added ${addedCount} cases.`, 'success');
            else alert(`Added ${addedCount} cases.`);
        } else {
            if (typeof window.UI !== 'undefined') window.UI.toast('No valid dates found. Use YYYY-MM-DD format.', 'error');
            else alert('No valid dates found. Use YYYY-MM-DD format.');
        }
    }

    // --- Render Main Interface ---

    render() {
        const isPlotter = this.mode === 'plotter';

        let contentHtml = '';

        if (isPlotter) {
            const { labels, data, max } = this.getHistogramData();
            const peak = Math.max(...data, 0);
            const totalCases = this.cases.length;

            let chartHtml = '';
            if (totalCases > 0) {
                chartHtml = `
                    <div class="epi-chart-container">
                        <div class="y-axis">
                            <span>${max}</span>
                            <span>${Math.round(max / 2)}</span>
                            <span>0</span>
                        </div>
                        <div class="chart-bars">
                            ${labels.map((date, i) => {
                    const count = data[i];
                    const height = (count / max) * 100;
                    const isPeak = count === peak && count > 0;
                    return `
                                    <div class="bar-group" title="${date}: ${count} cases">
                                        <div class="bar ${isPeak ? 'peak' : ''}" style="height: ${height}%">
                                            ${count > 0 ? `<span class="bar-label">${count}</span>` : ''}
                                        </div>
                                        <div class="x-label">${date.slice(5)}</div>
                                    </div>
                                `;
                }).join('')}
                        </div>
                    </div>
                `;
            } else {
                chartHtml = `<div class="empty-state"><p>No cases recorded. Add a case to generate the curve.</p></div>`;
            }

            contentHtml = `
                <div class="tool-controls" style="display: flex; flex-direction: column; gap: 1rem;">
                    
                    <div style="display: flex; gap: 1rem; align-items: flex-start; flex-wrap: wrap;">
                        <div class="neo-card small" style="flex: 1; min-width: 250px;">
                            <label for="case-date-input" style="font-weight: bold; display: block; margin-bottom: 0.5rem;">Single Case:</label>
                            <div class="input-group">
                                <input type="date" id="case-date-input" class="form-input">
                                <button class="btn btn-primary" onclick="epiCurve.addCase(document.getElementById('case-date-input').value)">Add</button>
                            </div>
                        </div>

                        <div class="neo-card small" style="flex: 1; min-width: 250px;">
                            <label for="bulk-cases-input" style="font-weight: bold; display: block; margin-bottom: 0.5rem;">Bulk Entry:</label>
                            <textarea id="bulk-cases-input" class="form-input" rows="3" placeholder="Paste list of dates (YYYY-MM-DD)..."></textarea>
                            <button class="btn btn-secondary btn-sm" style="margin-top: 0.5rem; width: 100%;" onclick="epiCurve.addBulkCases(document.getElementById('bulk-cases-input').value)">
                                <i class="ph-bold ph-plus"></i> Add All
                            </button>
                        </div>
                    </div>

                    <div class="action-group" style="display: flex; flex-wrap: wrap; gap: 0.5rem; border-top: 1px solid var(--border-color); padding-top: 1rem;">
                        <button class="btn btn-outline" onclick="epiCurve.loadExample()">Load Point Source</button>
                        <button class="btn btn-outline" onclick="epiCurve.loadIntermittent()">Load Intermittent</button>
                        <button class="btn btn-outline" onclick="epiCurve.loadPropagated()">Load Propagated</button>
                        <button class="btn btn-outline" onclick="epiCurve.downloadCSV()"><i class="ph-bold ph-download-simple"></i> CSV</button>
                        <button class="btn btn-danger" onclick="epiCurve.clear()">Clear All</button>
                    </div>
                </div>

                <div class="stats-panel">
                    <table class="table" style="width: 100%; border-collapse: collapse; margin-bottom: 1rem;">
                        <thead>
                            <tr style="background: var(--surface-2);">
                                <th style="padding: 0.75rem; text-align: center; border: 1px solid var(--border-color);">Total Cases</th>
                                <th style="padding: 0.75rem; text-align: center; border: 1px solid var(--border-color);">Peak Cases</th>
                                <th style="padding: 0.75rem; text-align: center; border: 1px solid var(--border-color);">Duration</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style="padding: 1rem; text-align: center; font-size: 1.5rem; font-weight: bold; border: 1px solid var(--border-color);">${totalCases}</td>
                                <td style="padding: 1rem; text-align: center; font-size: 1.5rem; font-weight: bold; border: 1px solid var(--border-color); color: var(--accent-orange);">${peak}</td>
                                <td style="padding: 1rem; text-align: center; font-size: 1.5rem; font-weight: bold; border: 1px solid var(--border-color);">${labels.length || 0} days</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="chart-wrapper">
                    ${chartHtml}
                    <div style="text-align: center; margin-top: 0.5rem; font-size: 0.8rem; color: var(--text-muted); font-style: italic;">
                        See <strong>Chapter 6</strong> (Outbreaks) or <strong>Chapter 10</strong> (Study Design) for interpreting these curves.
                    </div>
                </div>

                <div class="case-list">
                    <h3>Case List</h3>
                    <div style="max-height: 300px; overflow-y: auto;">
                        <table class="table" style="width: auto; min-width: 400px; border-collapse: collapse; margin-right: auto;">
                            <thead>
                                <tr style="background: var(--surface-2); text-align: left;">
                                    <th style="padding: 0.5rem;">#</th>
                                    <th style="padding: 0.5rem;">Date</th>
                                    <th style="padding: 0.5rem; text-align: left;">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${this.cases.map((date, i) => `
                                    <tr style="border-bottom: 1px solid var(--border-color);">
                                        <td style="padding: 0.5rem;">${i + 1}</td>
                                        <td style="padding: 0.5rem;">${date}</td>
                                        <td style="padding: 0.5rem; text-align: left;">
                                            <button class="btn btn-sm btn-danger" onclick="epiCurve.removeCase(${i})" title="Remove case">
                                                <i class="ph ph-trash"></i>
                                            </button>
                                        </td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- Summary table and explanation for example datasets -->
                <div class="epi-curve-summary">
                    <h3>Example Data Table</h3>
                    <div id="epi-curve-table-container"></div>
                </div>
                <div class="epi-curve-explanation" style="margin-top: 1rem;">
                    <div id="epi-curve-explanation"></div>
                </div>
            `;
        } else {
            // Visualizer Mode
            contentHtml = `
                <div class="tool-controls">
                    <div class="input-group">
                        <label for="outbreak-type">Outbreak Type:</label>
                        <select id="outbreak-type" class="form-select" onchange="epiCurve.setVisualizerType(this.value)">
                            <option value="point" ${this.visualizerType === 'point' ? 'selected' : ''}>Point Source</option>
                            <option value="continuous" ${this.visualizerType === 'continuous' ? 'selected' : ''}>Continuous Common Source</option>
                            <option value="intermittent" ${this.visualizerType === 'intermittent' ? 'selected' : ''}>Intermittent Common Source</option>
                            <option value="propagated" ${this.visualizerType === 'propagated' ? 'selected' : ''}>Propagated</option>
                        </select>
                    </div>
                </div>

                <div class="chart-wrapper" style="text-align: center;">
                    <canvas id="epiCanvas" width="600" height="300" style="max-width: 100%; border: 1px solid var(--border-color); border-radius: 8px; background: var(--surface-color);"></canvas>
                </div>

                <div id="epi-description" class="callout" style="margin-top: 1rem;">
                    <!-- Description injected here -->
                </div>
            `;
        }

        const html = `
            <div class="tool-header">
                <h2><i class="ph ph-chart-bar"></i> Epi Curve Generator</h2>
                <div class="mode-switch" style="display: flex; gap: 10px; margin-top: 10px;">
                    <button class="btn ${isPlotter ? 'btn-primary' : 'btn-outline'}" onclick="epiCurve.setMode('plotter')">Data Plotter</button>
                    <button class="btn ${!isPlotter ? 'btn-primary' : 'btn-outline'}" onclick="epiCurve.setMode('visualizer')">Pattern Visualizer</button>
                </div>
            </div>
            ${contentHtml}
        `;

        this.container.innerHTML = html;

        if (!isPlotter) {
            this.updateVisualizerDescription();
            // Need to wait for DOM update to draw on canvas
            setTimeout(() => this.drawVisualizer(), 0);
        } else {
            // In plotter mode, update summary table and explanation if cases exist
            if (this.cases && this.cases.length > 0) {
                const summary = this.summarizeByDate(this.cases);
                this.renderSummaryTable(summary);
                // this.renderExplanation(summary); // REMOVED: Caused "undefined" title bug. Explanations are only for loaded examples.
            } else {
                // Clear summary and explanation if no cases
                const t = document.getElementById('epi-curve-table-container');
                const e = document.getElementById('epi-curve-explanation');
                if (t) t.innerHTML = '';
                if (e) e.innerHTML = '';
            }
        }
    }

    downloadCSV() {
        if (!this.cases || this.cases.length === 0) {
            if (typeof window.UI !== 'undefined') window.UI.toast('No data to export', 'error');
            else alert('No data to export');
            return;
        }
        const summary = this.summarizeByDate(this.cases);
        let csv = 'Date,Count\n';
        summary.forEach(row => {
            csv += `${row.date},${row.count}\n`;
        });
        const blob = new Blob([csv], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'epi_curve_data.csv';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
    }
}
// Global instance
let epiCurve = null;

class ExposureCalculator {
    constructor(containerId) {
        this.containerId = containerId;
        this.scale = 24; // Default zoom scale (hours +/- around window)
        this.currentWindow = null;
        this.render();
    }

    // Render the input form and placeholder containers for graph and examples
    render() {
        const container = document.getElementById(this.containerId);
        if (!container) return;
        container.innerHTML = `
            <div class="exposure-tool">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label class="field-label" for="exposure-onset">Symptom onset (local time)</label>
                        <input type="datetime-local" id="exposure-onset" class="field-input" />
                    </div>
                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <label class="field-label" for="exposure-min">Min incubation (hours)</label>
                            <input type="number" id="exposure-min" class="field-input" min="0" />
                        </div>
                        <div>
                            <label class="field-label" for="exposure-max">Max incubation (hours)</label>
                            <input type="number" id="exposure-max" class="field-input" min="0" />
                        </div>
                    </div>
                </div>
                <div class="mt-3 flex gap-2 flex-wrap">
                    <button class="btn btn-primary" id="exposure-calc-btn">Calculate window</button>
                    <button class="btn btn-secondary" id="exposure-step-btn" onclick="exposureCalc.toggleSteps()">Show Math</button>
                    <button class="btn btn-outline" onclick="exposureCalc.loadExample()">Load Example</button>
                    <button class="btn btn-secondary" id="exposure-clear-btn">Clear</button>
                </div>
                
                <div id="exposure-steps" class="neo-card small" style="display: none; background: #f8fafc; border: 1px dashed var(--navy-primary); margin-top: 1rem;">
                    <h4 style="margin-top: 0; color: var(--navy-primary);">Step-by-Step Breakdown</h4>
                    <div id="exposure-steps-content" style="font-family: monospace; font-size: 0.95rem;"></div>
                </div>

                <div class="mt-3 callout-info" id="exposure-result" aria-live="polite" style="border-left: 4px solid var(--accent-color); padding: 1rem; background: var(--surface-2);"></div>

                <div class="mt-4">
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <h3 class="tool-subheading" style="margin: 0;">Visual timeline</h3>
                        <div style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.8rem;">
                            <label>Zoom:</label>
                            <input type="range" min="6" max="168" value="24" id="exposure-zoom" oninput="exposureCalc.updateScale(this.value)">
                        </div>
                    </div>
                    <div id="exposure-graph" class="exposure-graph"></div>
                </div>
                <div class="mt-4">
                    <h3 class="tool-subheading">Practice scenarios</h3>
                    <div id="exposure-examples" class="exposure-examples"></div>
                </div>
            </div>
        `;
        // Attach event listeners
        const calcBtn = document.getElementById('exposure-calc-btn');
        const clearBtn = document.getElementById('exposure-clear-btn');
        if (calcBtn) calcBtn.addEventListener('click', () => this.calculate());
        if (clearBtn) clearBtn.addEventListener('click', () => this.clear());
        this.renderExamples();
    }

    // Format dates for display
    format(dt) {
        return dt.toLocaleString(undefined, {
            year: 'numeric', month: 'short', day: 'numeric',
            hour: 'numeric', minute: '2-digit'
        });
    }

    toggleSteps() {
        const steps = document.getElementById('exposure-steps');
        const btn = document.getElementById('exposure-step-btn');
        if (steps.style.display === 'none') {
            steps.style.display = 'block';
            btn.textContent = 'Hide Math';
        } else {
            steps.style.display = 'none';
            btn.textContent = 'Show Math';
        }
    }

    updateScale(val) {
        this.scale = Number(val);
        if (this.currentWindow) {
            this.renderGraph(this.currentWindow);
        }
    }

    // Perform the calculation and show result and graph
    calculate() {
        const onsetInput = document.getElementById('exposure-onset');
        const minInput = document.getElementById('exposure-min');
        const maxInput = document.getElementById('exposure-max');
        const resultBox = document.getElementById('exposure-result');
        if (!onsetInput || !minInput || !maxInput || !resultBox) return;
        const onsetStr = onsetInput.value;
        const minH = Number(minInput.value);
        const maxH = Number(maxInput.value);
        if (!onsetStr || isNaN(minH) || isNaN(maxH) || minH < 0 || maxH <= 0 || maxH < minH) {
            resultBox.innerHTML = `<p>Please enter a valid onset date/time and a valid incubation range (max ≥ min).</p>`;
            this.renderGraph(null);
            this.currentWindow = null;
            return;
        }
        const onset = new Date(onsetStr);
        const earliest = new Date(onset.getTime() - maxH * 3600 * 1000);
        const latest = new Date(onset.getTime() - minH * 3600 * 1000);
        this.currentWindow = { onset, earliest, latest, minH, maxH };

        resultBox.innerHTML = `
            <p><strong>Likely exposure window:</strong></p>
            <ul>
                <li>Earliest plausible exposure: <strong>${this.format(earliest)}</strong></li>
                <li>Latest plausible exposure: <strong>${this.format(latest)}</strong></li>
            </ul>
            <div class="study-tip" style="margin-top: 1rem; border-left: 4px solid var(--accent-orange); padding-left: 1rem;">
                <p class="text-sm font-bold">Exam Strategy:</p>
                <ul class="text-sm text-muted">
                    <li><strong>Individual cases:</strong> The exposure must be within the window (Earliest to Latest).</li>
                    <li><strong>Multiple cases:</strong> Look for the <strong>overlap</strong> of windows.</li>
                    <li><strong>Point Source:</strong> Count back one incubation period from the <strong>peak</strong> cases for the most probable exposure.</li>
                    <li><strong>Given Range (A-B days):</strong> Count back A days from the <em>first</em> case (start of window) and B days from the <em>last</em> case (end of window).</li>
                </ul>
            </div>
        `;

        // Populate Steps
        const stepsContainer = document.getElementById('exposure-steps-content');
        if (stepsContainer) {
            stepsContainer.innerHTML = `
                <div style="margin-bottom: 0.5rem;"><strong>Formula:</strong> Exposure = Onset Time - Incubation Period</div>
                <div style="margin-bottom: 0.5rem;"><strong>1. Earliest Exposure (using Max Incubation):</strong><br>
                ${this.format(onset)} - ${maxH} hours = <strong>${this.format(earliest)}</strong></div>
                <div><strong>2. Latest Exposure (using Min Incubation):</strong><br>
                ${this.format(onset)} - ${minH} hours = <strong>${this.format(latest)}</strong></div>
            `;
        }

        this.renderGraph(this.currentWindow);
    }

    // Clear inputs and outputs
    clear() {
        const onsetInput = document.getElementById('exposure-onset');
        const minInput = document.getElementById('exposure-min');
        const maxInput = document.getElementById('exposure-max');
        const resultBox = document.getElementById('exposure-result');
        const stepsContainer = document.getElementById('exposure-steps-content');

        if (onsetInput) onsetInput.value = '';
        if (minInput) minInput.value = '';
        if (maxInput) maxInput.value = '';
        if (resultBox) resultBox.innerHTML = '';
        if (stepsContainer) stepsContainer.innerHTML = '';
        this.currentWindow = null;

        this.renderGraph(null);
    }

    // Render timeline graph or placeholder
    renderGraph(windowObj) {
        const graph = document.getElementById('exposure-graph');
        if (!graph) return;

        if (!windowObj) {
            graph.innerHTML = `<p class="text-muted text-center" style="padding: 2rem;">Enter onset and incubation range above, or select an example.<br><span style="font-size: 2rem; opacity: 0.3;">⏳</span></p>`;
            return;
        }

        const { onset, earliest, latest, minH, maxH } = windowObj;

        // Viewport Logic
        // We want to see [Earliest Exposure - Padding] to [Onset + Padding]
        const padHours = Math.max(24, Math.abs(maxH) * 0.5); // Dynamic padding
        const viewStart = new Date(earliest.getTime() - padHours * 3600 * 1000);
        const viewEnd = new Date(onset.getTime() + (padHours / 2) * 3600 * 1000);
        const totalMs = viewEnd.getTime() - viewStart.getTime();

        // Store state for listeners
        this.graphState = { viewStart, totalMs, onset };

        const getPercent = (dt) => {
            let pct = ((dt.getTime() - viewStart.getTime()) / totalMs) * 100;
            return Math.max(0, Math.min(100, pct));
        };

        const winStartPct = getPercent(earliest);
        const winEndPct = getPercent(latest);
        const winWidth = Math.max(0.5, winEndPct - winStartPct);
        const onsetPct = getPercent(onset);

        // Render Interactive Graph
        graph.innerHTML = `
            <div class="exposure-vis-container" style="position: relative; height: 140px; background: white; border: 2px solid var(--border-color); border-radius: 8px; overflow: hidden; user-select: none;">
                
                <!-- Grid Lines (Every 12h or 24h) -->
                <div class="vis-grid" style="position: absolute; width: 100%; height: 100%; display: flex; justify-content: space-between; opacity: 0.5;">
                    ${this.renderGridLines(viewStart, viewEnd)}
                </div>

                <!-- Main Timeline Track -->
                <div style="position: absolute; top: 60px; left: 2%; right: 2%; height: 6px; background: var(--border-color); border-radius: 3px;"></div>

                <!-- Exposure Window Zone (The "Answer") -->
                <div class="exp-window-zone" style="position: absolute; top: 40px; height: 44px; left: ${winStartPct}%; width: ${winWidth}%; 
                     background: rgba(255, 171, 112, 0.3); border: 4px solid var(--accent-orange); border-radius: 6px; 
                     display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);">
                    <div style="font-size: 0.8rem; font-weight: 900; color: var(--navy-primary); background: white; padding: 2px 8px; border-radius: 4px; border: 2px solid var(--accent-orange); white-space: nowrap; text-transform: uppercase;">
                        Exposure Window
                    </div>
                    
                    <!-- Min Incubation Handle (Right side of window, closer to onset) -->
                    <div class="drag-handle min-handle" title="Min Incubation: ${minH}h" style="position: absolute; right: -8px; top: -2px; bottom: -2px; width: 16px; cursor: ew-resize; display: flex; align-items: center; justify-content: center;">
                        <div style="width: 6px; height: 24px; background: var(--accent-orange); border-radius: 3px; border: 1px solid white;"></div>
                    </div>

                    <!-- Max Incubation Handle (Left side of window, further from onset) -->
                    <div class="drag-handle max-handle" title="Max Incubation: ${maxH}h" style="position: absolute; left: -8px; top: -2px; bottom: -2px; width: 16px; cursor: ew-resize; display: flex; align-items: center; justify-content: center;">
                         <div style="width: 6px; height: 24px; background: var(--accent-orange); border-radius: 3px; border: 1px solid white;"></div>
                    </div>
                </div>

                <!-- Onset Marker (Fixed Anchor) -->
                <div class="onset-marker" style="position: absolute; top: 25px; bottom: 25px; left: ${onsetPct}%; width: 4px; background: var(--navy-primary); z-index: 10;">
                    <div style="position: absolute; top: -25px; left: -50px; width: 100px; text-align: center; background: var(--navy-primary); color: white; font-size: 0.75rem; padding: 2px 4px; border-radius: 4px; font-weight: bold;">
                        Symptom Onset<br>
                        ${this.formatShort(onset)}
                    </div>
                    <div style="position: absolute; bottom: 0; left: -6px; width: 16px; height: 16px; background: var(--navy-primary); border-radius: 50%;"></div>
                </div>

                <!-- Labels for Window Ends -->
                <div style="position: absolute; top: 90px; left: ${winStartPct}%; transform: translateX(-50%); text-align: center; font-size: 0.7rem; color: var(--text-muted);">
                    Earliest<br>${this.formatShort(earliest)}
                </div>
                <div style="position: absolute; top: 90px; left: ${winEndPct}%; transform: translateX(-50%); text-align: center; font-size: 0.7rem; color: var(--text-muted);">
                    Latest<br>${this.formatShort(latest)}
                </div>

            </div>
            <div style="margin-top: 0.5rem; text-align: center; font-size: 0.8rem; color: var(--text-muted); font-style: italic;">
                Drag the handles to adjust the Incubation Period.
            </div> 
        `;

        // Attach interactive listeners
        this.attachGraphListeners(graph, windowObj);
    }

    attachGraphListeners(container, windowObj) {
        const visContainer = container.querySelector('.exposure-vis-container');
        const minHandle = container.querySelector('.min-handle');
        const maxHandle = container.querySelector('.max-handle');
        const windowZone = container.querySelector('.exp-window-zone');

        if (!visContainer || !this.graphState) return;

        const { viewStart, totalMs, onset } = this.graphState;
        const width = visContainer.offsetWidth;

        // Calc conversion factor: Pixels -> Hours
        // totalMs maps to width (px)
        // 1 px = (totalMs / width) ms
        const pxToHours = (px) => {
            const ms = px * (totalMs / width);
            return ms / (3600 * 1000);
        };

        // Helper to update UI without re-render
        const updateVisuals = (newMin, newMax) => {
            // Update inputs
            const minInput = document.getElementById('exposure-min');
            const maxInput = document.getElementById('exposure-max');
            if (minInput) minInput.value = Math.round(newMin);
            if (maxInput) maxInput.value = Math.round(newMax);

            // Update Window Zone
            // Calculate new Percentages
            // Earliest (Max Incubation) -> Left Side
            // Latest (Min Incubation) -> Right Side

            const earliestTime = onset.getTime() - newMax * 3600000;
            const latestTime = onset.getTime() - newMin * 3600000;

            const getPercent = (t) => ((t - viewStart.getTime()) / totalMs) * 100;

            const leftPct = Math.max(0, getPercent(earliestTime));
            const rightPct = Math.min(100, getPercent(latestTime));
            const zoneWidth = Math.max(0.5, rightPct - leftPct);

            if (windowZone) {
                windowZone.style.left = `${leftPct}%`;
                windowZone.style.width = `${zoneWidth}%`;
            }

            // Update Handle Titles
            if (minHandle) minHandle.title = `Min Incubation: ${Math.round(newMin)}h`;
            if (maxHandle) maxHandle.title = `Max Incubation: ${Math.round(newMax)}h`;
        };

        // --- HANDLE DRAG ---
        const setupHandleDrag = (element, isMin) => {
            element.addEventListener('mousedown', (e) => {
                e.preventDefault();
                e.stopPropagation(); // Prevent background drag
                const startX = e.clientX;
                const startVal = isMin ? windowObj.minH : windowObj.maxH;

                const onMove = (moveEvent) => {
                    const deltaPx = moveEvent.clientX - startX;
                    const deltaH = pxToHours(deltaPx);

                    // Moving Right (Positive) -> Time Later -> Incubation Smaller
                    let newVal = startVal - deltaH;

                    // Constraints
                    if (newVal < 0) newVal = 0;

                    let currentMin = isMin ? newVal : parseFloat(document.getElementById('exposure-min')?.value || windowObj.minH);
                    let currentMax = isMin ? parseFloat(document.getElementById('exposure-max')?.value || windowObj.maxH) : newVal;

                    if (isMin) {
                        if (newVal > currentMax) newVal = currentMax; // Clamp to Max
                        currentMin = newVal;
                    } else {
                        if (newVal < currentMin) newVal = currentMin; // Clamp to Min
                        currentMax = newVal;
                    }

                    updateVisuals(currentMin, currentMax);
                };

                const onUp = () => {
                    document.removeEventListener('mousemove', onMove);
                    document.removeEventListener('mouseup', onUp);
                    this.calculate(); // Re-calc final state
                };

                document.addEventListener('mousemove', onMove);
                document.addEventListener('mouseup', onUp);
            });
        };

        // --- BACKGROUND DRAG (HIGHLIGHT) ---
        visContainer.addEventListener('mousedown', (e) => {
            if (e.target.closest('.drag-handle')) return; // Ignore handles
            e.preventDefault();

            const rect = visContainer.getBoundingClientRect();
            const startX = e.clientX - rect.left;

            // Initial click defines one edge. Drag defines the other.

            const onMove = (moveEvent) => {
                const currentX = moveEvent.clientX - rect.left;

                // Define range in pixels relative to container
                const p1 = Math.min(startX, currentX);
                const p2 = Math.max(startX, currentX);

                // Convert pixels to Time
                // px / width = timeOffset / totalMs
                const timeStart = viewStart.getTime() + (p1 / width) * totalMs;
                const timeEnd = viewStart.getTime() + (p2 / width) * totalMs;

                // Convert Time to Incubation Hours (Time = Onset - Incubation)
                // Incubation = (Onset - Time) / 3600000
                // Earlier time (timeStart) = Higher Incubation (Max)
                // Later time (timeEnd) = Lower Incubation (Min)

                let curMax = (onset.getTime() - timeStart) / 3600000;
                let curMin = (onset.getTime() - timeEnd) / 3600000;

                updateVisuals(Math.max(0, curMin), Math.max(0, curMax));
            };

            const onUp = () => {
                document.removeEventListener('mousemove', onMove);
                document.removeEventListener('mouseup', onUp);
                this.calculate();
            };

            document.addEventListener('mousemove', onMove);
            document.addEventListener('mouseup', onUp);
        });

        if (minHandle) setupHandleDrag(minHandle, true);
        if (maxHandle) setupHandleDrag(maxHandle, false);

        // Add cursor hint to container
        visContainer.style.cursor = 'crosshair';
    }

    renderGridLines(start, end) {
        let html = '';
        let current = new Date(start);
        current.setMinutes(0, 0, 0); // Snap to hour
        const totalMs = end.getTime() - start.getTime();

        // Determine interval based on span
        const spanHours = (end - start) / 3600000;
        let intervalHours = 6;
        if (spanHours > 48) intervalHours = 12;
        if (spanHours > 100) intervalHours = 24;

        while (current < end) {
            if (current > start) {
                const pct = ((current - start) / totalMs) * 100;
                const isDayStart = current.getHours() === 0;
                const label = isDayStart
                    ? current.toLocaleDateString(undefined, { month: 'short', day: 'numeric' })
                    : current.getHours() + ':00';

                html += `
                    <div style="position: absolute; left: ${pct}%; top: 0; bottom: 0; width: 1px; background: ${isDayStart ? '#cbd5e1' : '#f1f5f9'};">
                        <div style="position: absolute; bottom: 2px; left: 4px; font-size: 0.65rem; color: #94a3b8;">${label}</div>
                    </div>
                `;
            }
            current = new Date(current.getTime() + intervalHours * 3600 * 1000);
        }
        return html;
    }

    formatShort(dt) {
        return dt.toLocaleString(undefined, {
            month: 'numeric', day: 'numeric',
            hour: 'numeric', minute: '2-digit'
        });
    }

    // Render example scenarios
    renderExamples() {
        const container = document.getElementById('exposure-examples');
        if (!container) return;
        const examples = [
            {
                id: 'noro',
                title: 'Norovirus (12–48h)',
                onsetOffsetH: 0,
                min: 12,
                max: 48,
                note: 'Classic short incubation, often from a single meal.'
            },
            {
                id: 'salmonella',
                title: 'Salmonella (6–72h)',
                onsetOffsetH: -24,
                min: 6,
                max: 72,
                note: 'Wider window; exams often pick the middle.'
            },
            {
                id: 'ecoli',
                title: 'E. coli (3–4 days)',
                onsetOffsetH: -48,
                min: 72,
                max: 96,
                note: 'Common bacterial outbreak. Incubation is days, not hours.'
            },
            {
                id: 'hepA',
                title: 'Hepatitis A (15–50 days)',
                onsetOffsetH: -7 * 24,
                min: 15 * 24,
                max: 50 * 24,
                note: 'Very long incubation; you must look weeks back.'
            }
        ];
        container.innerHTML = examples.map(ex => {
            return `
                <div class="example-card" data-id="${ex.id}" style="cursor:pointer; border: 1px solid var(--border-color); padding: 0.5rem; border-radius: 4px; margin-bottom: 0.5rem; background: #fff;">
                    <div class="font-semibold" style="color: var(--navy-primary);">${ex.title}</div>
                    <div class="text-sm text-muted">${ex.note}</div>
                </div>
            `;
        }).join('');
        container.querySelectorAll('.example-card').forEach(card => {
            card.addEventListener('click', () => {
                const id = card.getAttribute('data-id');
                const ex = examples.find(e => e.id === id);
                if (!ex) return;
                const now = new Date();
                now.setHours(now.getHours() + ex.onsetOffsetH);
                const iso = now.toISOString(); // UTC
                // Simple local iso trick
                const local = new Date(now.getTime() - (now.getTimezoneOffset() * 60000)).toISOString().substring(0, 16);
                document.getElementById('exposure-onset').value = local;
                document.getElementById('exposure-min').value = ex.min;
                document.getElementById('exposure-max').value = ex.max;
                this.calculate();
            });
        });
    }

    // Load a default example
    loadExample() {
        const noroCard = this.containerId ? document.querySelector(`#${this.containerId} .example-card[data-id="noro"]`) : document.querySelector('.example-card[data-id="noro"]');
        if (noroCard) {
            noroCard.click();
        } else {
            // Fallback
            const now = new Date();
            const local = new Date(now.getTime() - (now.getTimezoneOffset() * 60000)).toISOString().substring(0, 16);
            document.getElementById('exposure-onset').value = local;
            document.getElementById('exposure-min').value = 12;
            document.getElementById('exposure-max').value = 48;
            this.calculate();
        }
    }
}


// Global variable for Tools Manager to instantiate
let exposureCalc = null;
const NotesheetGenerator = {
    render: function (containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const html = `
            <div class="notesheet-preview neo-card" style="padding: 1.5rem; background: white; color: black; font-family: 'Arial', sans-serif; font-size: 11px; line-height: 1.4;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; border-bottom: 3px double black; padding-bottom: 0.5rem;">
                    <div>
                        <h1 style="margin: 0; font-size: 1.3rem; font-weight: 800;">DISEASE DETECTIVES REFERENCE SHEET</h1>
                        <div style="font-size: 0.8rem; color: #555;">Science Olympiad • Division B/C</div>
                    </div>
                    <div class="no-print">
                        <button onclick="window.print()" class="neo-btn small primary">
                            <i class="ph-bold ph-printer"></i> Print Notesheet
                        </button>
                    </div>
                </div>
                
                <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 0.75rem;">
                    
                    <!-- COLUMN 1 -->
                    <div>
                        <div style="border: 1px solid #333; padding: 0.5rem; margin-bottom: 0.5rem; background: #f9f9f9;">
                            <strong style="display: block; background: #333; color: white; margin: -0.5rem -0.5rem 0.5rem -0.5rem; padding: 0.25rem 0.5rem;">📐 CORE FORMULAS</strong>
                            <table style="width: 100%; font-size: 10px; border-collapse: collapse;">
                                <tr><td style="padding: 2px;"><b>Attack Rate</b></td><td>= Cases ÷ Population at Risk</td></tr>
                                <tr style="background:#eee;"><td style="padding: 2px;"><b>Relative Risk</b></td><td>= AR<sub>exposed</sub> ÷ AR<sub>unexposed</sub></td></tr>
                                <tr><td style="padding: 2px;"><b>Odds Ratio</b></td><td>= (a × d) ÷ (b × c)</td></tr>
                                <tr style="background:#eee;"><td style="padding: 2px;"><b>Attributable Risk</b></td><td>= AR<sub>exp</sub> − AR<sub>unexp</sub></td></tr>
                                <tr><td style="padding: 2px;"><b>Sensitivity</b></td><td>= TP ÷ (TP + FN) = "Rule Out"</td></tr>
                                <tr style="background:#eee;"><td style="padding: 2px;"><b>Specificity</b></td><td>= TN ÷ (TN + FP) = "Rule In"</td></tr>
                                <tr><td style="padding: 2px;"><b>PPV</b></td><td>= TP ÷ (TP + FP)</td></tr>
                                <tr style="background:#eee;"><td style="padding: 2px;"><b>NPV</b></td><td>= TN ÷ (TN + FN)</td></tr>
                                <tr><td style="padding: 2px;"><b>Vaccine Eff.</b></td><td>= (AR<sub>u</sub> − AR<sub>v</sub>) ÷ AR<sub>u</sub></td></tr>
                            </table>
                        </div>
                        
                        <div style="border: 1px solid #333; padding: 0.5rem; margin-bottom: 0.5rem;">
                            <strong style="display: block; background: #333; color: white; margin: -0.5rem -0.5rem 0.5rem -0.5rem; padding: 0.25rem 0.5rem;">📊 2×2 TABLE</strong>
                            <table style="width: 100%; text-align: center; font-size: 9px; border-collapse: collapse; border: 1px solid #666;">
                                <tr style="background: #ddd;"><td></td><td style="border: 1px solid #666;"><b>Disease+</b></td><td style="border: 1px solid #666;"><b>Disease−</b></td><td></td></tr>
                                <tr><td style="border: 1px solid #666;"><b>Exposed</b></td><td style="border: 1px solid #666; background:#ffe;">a</td><td style="border: 1px solid #666;">b</td><td style="border: 1px solid #666;">a+b</td></tr>
                                <tr><td style="border: 1px solid #666;"><b>Unexposed</b></td><td style="border: 1px solid #666;">c</td><td style="border: 1px solid #666; background:#efe;">d</td><td style="border: 1px solid #666;">c+d</td></tr>
                            </table>
                            <div style="font-size: 9px; margin-top: 0.25rem;"><b>OR</b> = ad/bc | <b>RR</b> = [a/(a+b)] / [c/(c+d)]</div>
                        </div>

                        <div style="border: 1px solid #333; padding: 0.5rem;">
                            <strong style="display: block; background: #333; color: white; margin: -0.5rem -0.5rem 0.5rem -0.5rem; padding: 0.25rem 0.5rem;">📈 EPI CURVES</strong>
                            <ul style="margin: 0; padding-left: 1rem;">
                                <li><b>Point Source:</b> Sharp rise, single peak (potluck)</li>
                                <li><b>Continuous:</b> Plateau shape (contaminated water)</li>
                                <li><b>Propagated:</b> Multiple peaks/waves (person-to-person)</li>
                                <li><b>Intermittent:</b> Irregular peaks (sporadic exposure)</li>
                            </ul>
                            <div style="background:#eee; padding: 2px 4px; margin-top: 4px; font-size: 9px;">
                                <b>Bin Width</b> = ¼ to ⅓ of incubation period
                            </div>
                        </div>
                    </div>
                    
                    <!-- COLUMN 2 -->
                    <div>
                        <div style="border: 1px solid #333; padding: 0.5rem; margin-bottom: 0.5rem; background: #f9f9f9;">
                            <strong style="display: block; background: #333; color: white; margin: -0.5rem -0.5rem 0.5rem -0.5rem; padding: 0.25rem 0.5rem;">🔟 OUTBREAK INVESTIGATION</strong>
                            <ol style="margin: 0; padding-left: 1.2rem; font-size: 10px;">
                                <li><b>Prepare</b> for field work</li>
                                <li><b>Establish</b> existence of outbreak</li>
                                <li><b>Verify</b> diagnosis</li>
                                <li><b>Define</b> case (Person, Place, Time)</li>
                                <li><b>Find</b> cases systematically</li>
                                <li><b>Describe</b> (Time, Place, Person)</li>
                                <li><b>Develop</b> hypotheses</li>
                                <li><b>Evaluate</b> hypotheses (Analytic study)</li>
                                <li><b>Implement</b> control measures</li>
                                <li><b>Communicate</b> findings</li>
                            </ol>
                        </div>
                        
                        <div style="border: 1px solid #333; padding: 0.5rem; margin-bottom: 0.5rem;">
                            <strong style="display: block; background: #333; color: white; margin: -0.5rem -0.5rem 0.5rem -0.5rem; padding: 0.25rem 0.5rem;">⚠️ BIAS & CONFOUNDING</strong>
                            <div style="font-size: 10px;">
                                <div style="margin-bottom: 4px;"><b>Selection Bias:</b> Berkson's (Hospital), Healthy Worker</div>
                                <div style="margin-bottom: 4px;"><b>Information Bias:</b> Recall, Interviewer, Misclassification</div>
                                <div style="margin-bottom: 4px;"><b>Confounding:</b> Associated with E and D, NOT on causal path</div>
                                <div style="background:#fff3cd; padding: 2px 4px;"><b>Fix:</b> Stratify, Match, Restrict, Adjust (MH OR)</div>
                            </div>
                        </div>

                        <div style="border: 1px solid #333; padding: 0.5rem;">
                            <strong style="display: block; background: #333; color: white; margin: -0.5rem -0.5rem 0.5rem -0.5rem; padding: 0.25rem 0.5rem;">🧠 MNEMONICS</strong>
                            <ul style="margin: 0; padding-left: 1rem; font-size: 10px;">
                                <li><b>SNOUT:</b> SeNsitive test rules OUT disease</li>
                                <li><b>SPIN:</b> SPecific test rules IN disease</li>
                                <li><b>HILL:</b> Strength, Consistency, Specificity, Temporality, Dose-Response, Plausibility, Coherence, Experiment, Analogy</li>
                                <li><b>Chain:</b> Agent → Reservoir → Portal Exit → Mode → Portal Entry → Host</li>
                            </ul>
                        </div>
                    </div>
                    
                    <!-- COLUMN 3 -->
                    <div>
                        <div style="border: 1px solid #333; padding: 0.5rem; margin-bottom: 0.5rem; background: #f0fff0;">
                            <strong style="display: block; background: #228b22; color: white; margin: -0.5rem -0.5rem 0.5rem -0.5rem; padding: 0.25rem 0.5rem;">🦠 HIGH-YIELD DISEASES</strong>
                            <table style="width: 100%; font-size: 9px; border-collapse: collapse;">
                                <tr style="background:#ddd;"><th style="text-align:left; padding:2px;">Disease</th><th style="text-align:left; padding:2px;">Incubation</th><th style="text-align:left; padding:2px;">Key Clue</th></tr>
                                <tr><td>Norovirus</td><td>12-48h</td><td>Vomit, Chlorine resistant</td></tr>
                                <tr style="background:#eee;"><td>Staph</td><td>2-4h</td><td>Preformed toxin, fast</td></tr>
                                <tr><td>Salmonella</td><td>12-72h</td><td>Poultry, Eggs, Reptiles</td></tr>
                                <tr style="background:#eee;"><td>E.coli O157</td><td>3-4d</td><td>HUS, NO antibiotics</td></tr>
                                <tr><td>Legionella</td><td>2-10d</td><td>Water aerosols, No P2P</td></tr>
                                <tr style="background:#eee;"><td>Lyme</td><td>3-30d</td><td>Bullseye, Tick &lt;24h safe</td></tr>
                                <tr><td>Measles</td><td>10-12d</td><td>Airborne 2h, Koplik spots</td></tr>
                                <tr style="background:#eee;"><td>Hantavirus</td><td>1-5wk</td><td>Rodent dust, Southwest</td></tr>
                            </table>
                        </div>
                        
                        <div style="border: 1px solid #333; padding: 0.5rem; margin-bottom: 0.5rem;">
                            <strong style="display: block; background: #333; color: white; margin: -0.5rem -0.5rem 0.5rem -0.5rem; padding: 0.25rem 0.5rem;">🔬 STUDY TYPES</strong>
                            <ul style="margin: 0; padding-left: 1rem; font-size: 10px;">
                                <li><b>Cohort:</b> Follow exposed/unexposed → Calculate RR</li>
                                <li><b>Case-Control:</b> Compare cases/controls → Calculate OR</li>
                                <li><b>Cross-Sectional:</b> Snapshot → Prevalence</li>
                                <li><b>Ecologic:</b> Group-level data → Correlation</li>
                                <li><b>RCT:</b> Gold standard, Randomized</li>
                            </ul>
                        </div>

                        <div style="border: 1px solid #333; padding: 0.5rem; background: #fff0f0;">
                            <strong style="display: block; background: #c00; color: white; margin: -0.5rem -0.5rem 0.5rem -0.5rem; padding: 0.25rem 0.5rem;">🚨 EXAM TRAPS</strong>
                            <ul style="margin: 0; padding-left: 1rem; font-size: 10px;">
                                <li>Crypto is CHLORINE RESISTANT</li>
                                <li>Antibiotics WORSEN E.coli O157 (HUS)</li>
                                <li>Legionella is NOT person-to-person</li>
                                <li>Staph = INTOXICATION (not infection)</li>
                                <li>RR needs INCIDENCE (Cohort only)</li>
                                <li>Confounding ≠ Effect Modification</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div class="custom-notes-section" style="margin-top: 0.75rem; border-top: 2px solid #333; padding-top: 0.5rem; page-break-inside: avoid;">
                    <strong style="display: block; font-size: 11px; margin-bottom: 0.25rem;">📝 MY FIELD NOTES</strong>
                    <textarea id="notesheet-memo" 
                        placeholder="Type here... Content saves automatically to this device."
                        style="width: 100%; height: 1.5in; font-family: 'Inter', sans-serif; font-size: 10px; border: 1px dashed #999; padding: 0.25rem; resize: vertical; background: #fffdf0;"
                    ></textarea>
                </div>

                <div style="margin-top: 0.75rem; padding-top: 0.5rem; border-top: 1px solid #999; font-size: 9px; color: #666; display: flex; justify-content: space-between;">
                    <span>Generated by Epidemic Engine v2.3</span>
                    <span>Print: Ctrl+P | Landscape recommended</span>
                </div>
            </div>
            
            <style>
                @media print {
                    /* Orientation specific to Notesheet */
                    @page { size: landscape; margin: 0.25in; }

                    .notesheet-preview {
                        width: 100% !important;
                        margin: 0 !important;
                        padding: 0 !important;
                        border: none !important;
                        font-size: 10px !important;
                    }
                    
                    /* Ensure textarea expands to show all text */
                    #notesheet-memo {
                        border: 1px solid #ccc !important;
                        resize: none !important;
                        overflow: visible !important;
                        height: auto !important;
                        display: block !important;
                        color: black !important;
                        background: transparent !important;
                    }

                    /* Utility to hide specific elements like the print button */
                    .no-print { display: none !important; }
                }
            </style>
        `;

        container.innerHTML = html;

        // Restore saved notes
        const ta = document.getElementById('notesheet-memo');
        const saved = localStorage.getItem('epi_notesheet_memo');
        if (saved) ta.value = saved;

        // Auto-save
        ta.addEventListener('input', () => {
            localStorage.setItem('epi_notesheet_memo', ta.value);
        });
    }
};

/**
 * Quiz Engine Core - Unified Assessment System
 * Replaces ExamEngine and ComprehensiveQuiz with a single flexible architecture.
 * Supports: 'practice' (chapter quizzes) and 'simulation' (timed exams) modes.
 */

class QuizEngine {
    constructor(config) {
        // Configuration
        this.mode = config.mode || 'practice'; // 'practice' | 'simulation'
        this.quizId = config.quizId || 'unknown-quiz'; // Analytics ID
        this.containerId = config.containerId || 'quiz-container';
        this.questions = config.questions || [];
        this.timeLimit = config.timeLimit || (this.mode === 'simulation' ? 50 * 60 : null); // Seconds
        this.onComplete = config.onComplete || null;
        this.enableInstantFeedback = config.enableInstantFeedback || false;

        // State
        this.currentIndex = 0;
        this.answers = {}; // Map { index: optionIndex }
        this.flagged = new Set();
        this.startTime = null;
        this.endTime = null;
        this.timerInterval = null;
        this.isComplete = false;
        this.warningDisplayed = false; // For 5 min warning

        // Exam specific
        this.sectionBoundaries = config.sectionBoundaries || []; // [{index: 0, label: 'Part A'}]
        this.returnChapter = config.returnChapter || null;
    }

    /* ================= INITIALIZATION ================= */

    start() {
        const saved = this.loadLocalProgress();

        let shouldPauseImmediately = false;

        if (saved) {
            // Auto-resume logic
            this.currentIndex = saved.currentIndex || 0;
            this.answers = saved.answers || {};
            // Rehydrate Set
            this.flagged = saved.flagged ? new Set(saved.flagged) : new Set();

            // Restore time state
            this.startTime = Date.now() - (saved.elapsedTime || 0);
            this.isComplete = false;
            shouldPauseImmediately = true;
        } else {
            this.startTime = Date.now();
            this.currentIndex = 0;
            this.answers = {};
            this.flagged = new Set();
            this.isComplete = false;
        }

        // Setup UI
        this.renderFrame();
        this.renderQuestion();

        if (shouldPauseImmediately) {
            this.pauseQuiz();
        } else {
            // Start Timer if needed
            if (this.timeLimit) {
                this.startTimer();
            }
        }

        // Keyboard bindings
        this.handleKeyBound = this.handleKey.bind(this);
        document.addEventListener('keydown', this.handleKeyBound);
    }

    handleKey(e) {
        if (this.isComplete) return;
        // Arrow navigation
        if (e.key === 'ArrowRight') this.nextQuestion();
        if (e.key === 'ArrowLeft') this.previousQuestion();
    }

    /* ================= TIMER LOGIC ================= */

    startTimer() {
        if (this.timerInterval) clearInterval(this.timerInterval);

        const timerCallback = () => {
            const now = Date.now();
            const elapsed = Math.floor((now - this.startTime) / 1000);
            const remaining = this.timeLimit - elapsed;

            if (remaining <= 0) {
                this.submit(true); // Force submit
            } else {
                this.updateTimerDisplay(remaining);

                // 5 Minute Warning (Simulation only)
                if (this.mode === 'simulation' && remaining <= 300 && !this.warningDisplayed) {
                    this.showTimeWarning();
                    this.warningDisplayed = true;
                }
            }
        };

        this.timerInterval = setInterval(timerCallback, 1000);
        timerCallback(); // Immediate update
    }

    updateTimerDisplay(seconds) {
        const el = document.getElementById('quiz-timer');
        if (!el) return;

        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        el.textContent = `${m}:${s.toString().padStart(2, '0')}`;

        // Color coding
        if (seconds < 300) el.style.color = 'var(--danger)';
        else if (seconds < 600) el.style.color = 'var(--warning)';
        else el.style.color = '';
    }

    showTimeWarning() {
        if (document.getElementById('five-minute-warning')) return;
        const banner = document.createElement('div');
        banner.id = 'five-minute-warning';
        Object.assign(banner.style, {
            position: 'fixed', top: '0', left: '0', right: '0',
            padding: '1rem', background: 'rgba(255, 165, 0, 0.95)',
            color: 'black', fontWeight: 'bold', textAlign: 'center', zIndex: '1000'
        });
        banner.textContent = '⚠️ 5 minutes remaining – please review your answers.';
        document.body.appendChild(banner);
        setTimeout(() => banner.remove(), 10000);
    }

    /* ================= CORE ACTIONS ================= */

    selectAnswer(index) {
        if (this.isComplete) return;

        this.answers[this.currentIndex] = index;

        // Save progress to local storage if practice
        if (this.mode === 'practice') {
            this.saveLocalProgress();
        }

        // Re-render only the options part or full question to show selection state
        this.renderQuestion();
        this.updateProgressUI();
    }

    toggleFlag() {
        if (this.flagged.has(this.currentIndex)) {
            this.flagged.delete(this.currentIndex);
        } else {
            this.flagged.add(this.currentIndex);
        }
        this.renderFooter(); // Update flag icon state
    }

    nextQuestion() {
        if (this.currentIndex < this.questions.length - 1) {
            this.currentIndex++;
            this.renderQuestion();
            this.renderFooter();
        }
    }

    previousQuestion() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.renderQuestion();
            this.renderFooter();
        }
    }

    jumpTo(index) {
        if (index >= 0 && index < this.questions.length) {
            this.currentIndex = index;
            this.renderQuestion();
            this.renderFooter();
        }
    }

    /* ================= SUBMISSION & SCORING ================= */

    confirmExit() {
        const doExit = () => {
            // Clear global state to prevent double confirmation
            window.currentQuizEngine = null;
            try {
                if (this.returnChapter && typeof window.loadChapter === 'function') {
                    // console.log("Exiting to: " + this.returnChapter);
                    window.loadChapter(this.returnChapter);
                } else {
                    location.reload();
                }
            } catch (e) {
                console.error("Exit failed, forcing reload", e);
                location.reload();
            }
        };

        if (typeof window.UI !== 'undefined') {
            window.UI.modal('Exit Quiz?', 'Your progress will be lost. Are you sure you want to go back to configuration?', doExit);
        } else if (confirm('Exit? Progress will be lost.')) {
            doExit();
        }
    }

    confirmSubmit() {
        const answeredCount = Object.keys(this.answers).length;
        const total = this.questions.length;
        const unanswered = total - answeredCount;

        let msg = `Ready to submit?\nYou have answered ${answeredCount} of ${total} questions.`;
        if (unanswered > 0) msg += `\n(${unanswered} skipped)`;

        if (typeof window.UI !== 'undefined') {
            window.UI.modal('Submit Exam?', msg.replace(/\n/g, '<br>'), () => this.submit());
        } else if (confirm(msg)) {
            this.submit();
        }
    }

    submit(forced = false) {
        if (this.isComplete) return;

        this.isComplete = true;
        this.endTime = Date.now();
        if (this.timerInterval) clearInterval(this.timerInterval);
        document.removeEventListener('keydown', this.handleKeyBound);

        if (forced) {
            if (typeof window.UI !== 'undefined') window.UI.toast("Time is up! Submitting exam.", "info");
            else alert("Time is up! Submitting exam.");
        }

        const results = this.calculateResults();
        this.renderResults(results);

        // Save local analytics
        this.saveToAnalytics(results);

        // Clear saved progress on completion
        this.clearLocalProgress();
    }

    calculateResults() {
        let correct = 0;
        const byTopic = {};
        const byPart = {}; // For simulation breakdown

        this.questions.forEach((q, idx) => {
            const userAns = this.answers[idx];
            const isCorrect = (userAns === q.answer);

            if (isCorrect) correct++;

            // Topic stats
            const topic = q.topic || 'General';
            if (!byTopic[topic]) byTopic[topic] = { total: 0, correct: 0 };
            byTopic[topic].total++;
            if (isCorrect) byTopic[topic].correct++;

            // Part stats (if simulation)
            if (q.part) {
                if (!byPart[q.part]) byPart[q.part] = { total: 0, correct: 0 };
                byPart[q.part].total++;
                if (isCorrect) byPart[q.part].correct++;
            }
        });

        const total = this.questions.length;
        const elapsedSeconds = Math.floor((this.endTime - this.startTime) / 1000);

        return {
            score: correct,
            total: total,
            percentage: Math.round((correct / total) * 100),
            timeSpent: elapsedSeconds,
            byTopic: byTopic,
            byPart: byPart
        };
    }

    saveToAnalytics(results) {
        // Deprecated: Analytics logging is now handled in renderResults via AnalyticsManager
    }

    /* ================= RENDERING ================= */

    renderFrame() {
        const container = document.getElementById(this.containerId);
        if (!container) return;

        // Common Shell
        container.innerHTML = `
            <div class="quiz-container-v2">
                <div class="quiz-header-v2">
                    <button class="btn btn-outline small" onclick="window.currentQuizEngine.confirmExit()" title="Exit Quiz">
                        <i class="ph-bold ph-sign-out"></i> Exit
                    </button>
                    <!-- Pause moved to footer -->
                    <button class="btn btn-outline small" onclick="window.currentQuizEngine.printView()" title="Print Exam" aria-label="Print Exam" style="margin-left: 0.5rem;">
                        <i class="ph-bold ph-printer"></i>
                    </button>
                    <div class="header-center">
                        <span id="quiz-header-title">${this.mode === 'simulation' ? 'Simulation Exam' : 'Chapter Quiz'}</span>
                        <div class="question-counter">Q <span id="q-num">1</span> / ${this.questions.length}</div>
                    </div>
                    ${this.timeLimit ? `
                    <div class="timer-badge">
                        <i class="ph-fill ph-clock"></i> <span id="quiz-timer" role="timer">--:--</span>
                    </div>` : ''}
                </div>

                <div class="quiz-body-v2" id="quiz-body">
                    <!-- Question injected here -->
                </div>

                <div class="quiz-footer-v2" id="quiz-footer">
                    <!-- Nav buttons injected here -->
                </div>
            </div>
        `;

        // Initial Footer Render
        this.renderFooter();
    }

    renderQuestion() {
        const container = document.getElementById('quiz-body');
        if (!container) return;

        const q = this.questions[this.currentIndex];
        const userAns = this.answers[this.currentIndex];

        // Check for section header (simulation mode)
        let sectionHtml = '';
        if (this.mode === 'simulation' && this.sectionBoundaries) {
            const boundary = this.sectionBoundaries.find(b => b.index === this.currentIndex);
            if (boundary) {
                sectionHtml = `<div class="exam-section-header">${boundary.label}</div>`;
            }
        }

        // Update Header Counter
        const numEl = document.getElementById('q-num');
        if (numEl) numEl.textContent = this.currentIndex + 1;

        // Coach Mode or Instant Feedback Logic
        const urlParams = new URLSearchParams(window.location.search);
        const isCoach = urlParams.get('coach') === '1';
        const isProctor = localStorage.getItem('dd_proctor_mode') === 'true';
        // Feedback is hidden in Proctor Mode even if normally enabled
        const showFeedback = !isProctor && (this.enableInstantFeedback || isCoach) && userAns !== undefined;

        // Render Options
        let optionsHtml = '';
        const labels = ['A', 'B', 'C', 'D', 'E'];

        q.options.forEach((opt, idx) => {
            let className = 'option-card-v2';
            let icon = '';

            if (userAns === idx) className += ' selected';

            if (showFeedback) {
                // Correct answer is always Green
                if (idx === q.answer) {
                    className += ' correct-green'; // Need CSS for this
                    icon = '<i class="ph-bold ph-check-circle" style="margin-left:auto; color:white;"></i>';
                }
                // Wrong selection is Amber
                else if (userAns === idx && idx !== q.answer) {
                    className += ' wrong-amber'; // Need CSS for this
                    icon = '<i class="ph-bold ph-x-circle" style="margin-left:auto; color:white;"></i>';
                }
            } else {
                // Normal behavior
                if (userAns === idx) icon = '<i class="ph-bold ph-check-circle" style="margin-left:auto"></i>';
            }

            optionsHtml += `
                <button class="${className}" 
                     type="button"
                     onclick="window.currentQuizEngine.selectAnswer(${idx})"
                     aria-label="Option ${labels[idx]}: ${opt}"
                     style="${showFeedback && idx === q.answer ? 'background-color: var(--success); color: white; border-color: var(--success);' : ''} 
                            ${showFeedback && userAns === idx && idx !== q.answer ? 'background-color: var(--warning); color: black; border-color: var(--warning);' : ''}">
                    <span class="option-indicator" style="${showFeedback && (idx === q.answer || (userAns === idx && idx !== q.answer)) ? 'background: rgba(255,255,255,0.3); color: white; border: none;' : ''}">${labels[idx] || '?'}</span>
                    <span class="option-content">${opt}</span>
                    ${icon}
                </button>
            `;
        });

        // Feedback Explanation
        let feedbackHtml = '';
        if (showFeedback) {
            const isRight = (userAns === q.answer);
            feedbackHtml = `
                <div class="coach-banner ${isRight ? 'success' : 'info'}" style="margin-top: 1rem; padding: 1rem; background: ${isRight ? '#dcfce7' : '#fff7ed'}; border-radius: 8px; border: 1px solid ${isRight ? '#22c55e' : '#f97316'};">
                    <strong>${isRight ? 'Correct!' : 'Incorrect.'}</strong> The answer is ${labels[q.answer]}.
                    <div class="small-explanation" style="margin-top: 0.5rem; color: #333;">
                        ${q.explain || 'No explanation provided.'}
                        ${!isRight && typeof window.generateReviewLink === 'function' ? window.generateReviewLink(q) : ''}
                    </div>
                </div>
             `;
        }

        container.innerHTML = `
            ${sectionHtml}
            <div class="question-fade-in">
                <h2 class="question-text-v2" tabindex="-1" style="outline: none;">${q.q || q.question}</h2>
                <div class="options-grid-v2">
                    ${optionsHtml}
                </div>
                ${feedbackHtml}
            </div>
        `;

        // Accessibility: Move focus to the new question to announce it
        // Use timeout to ensure DOM is ready and transition doesn't interfere
        setTimeout(() => {
            const h2 = container.querySelector('.question-text-v2');
            if (h2) h2.focus();
        }, 50);
    }

    renderFooter() {
        const container = document.getElementById('quiz-footer');
        if (!container) return;

        const isLast = this.currentIndex === this.questions.length - 1;
        const isFlagged = this.flagged.has(this.currentIndex);
        const progressPct = Math.round(((this.currentIndex) / this.questions.length) * 100);

        container.innerHTML = `
            <div class="footer-left">
                <button class="neo-btn icon-only ${isFlagged ? 'active-flag' : ''}" onclick="window.currentQuizEngine.toggleFlag()" aria-label="Flag Question for Review" title="Flag Question">
                    <i class="ph-fill ph-flag"></i>
                </button>
                <button class="neo-btn icon-only" onclick="window.currentQuizEngine.pauseQuiz()" title="Pause Quiz" aria-label="Pause Quiz" style="margin-left: 0.5rem;">
                    <i class="ph-bold ph-pause"></i>
                </button>
                <div class="progress-mini">
                    <div class="bar" style="width: ${progressPct}%"></div>
                </div>
            </div>

            <div class="footer-right">
                <button class="neo-btn secondary" 
                        onclick="window.currentQuizEngine.previousQuestion()" 
                        ${this.currentIndex === 0 ? 'disabled' : ''}>
                    Prev
                </button>
                
                ${isLast ? `
                    <button class="neo-btn primary" onclick="window.currentQuizEngine.confirmSubmit()">
                        Submit Exam
                    </button>
                ` : `
                    <button class="neo-btn primary" onclick="window.currentQuizEngine.nextQuestion()">
                        Next
                    </button>
                `}
            </div>
        `;
    }

    updateProgressUI() {
        // Redraw footer progress bar if needed, handled in renderFooter mostly for simplicity
        // But we can target specific elements for perf if needed. For now renderFooter is fast enough.
        this.renderFooter();
    }

    /* ================= RESULTS & REVIEW ================= */

    renderResults(results) {
        // Analytics Tracking
        if (window.AnalyticsManager) {
            window.AnalyticsManager.logAttempt(this.quizId, results.score, results.total, this.mode);

            // Log missed questions for "Weak Areas" analysis
            this.questions.forEach((q, idx) => {
                const userAns = this.answers[idx];
                if (userAns !== q.answer) {
                    window.AnalyticsManager.logMissedQuestion(q.topic || 'General', q.q || q.question);
                }
            });
        }

        const container = document.getElementById(this.containerId);

        let analysisHtml = '';

        // Topic Breakdown
        const topics = Object.entries(results.byTopic).sort((a, b) => b[1].total - a[1].total);
        if (topics.length > 0) {
            analysisHtml += `<h3>Topic Breakdown</h3><div class="topic-grid">`;
            topics.forEach(([topic, stats]) => {
                const pct = Math.round((stats.correct / stats.total) * 100);
                const color = pct >= 80 ? 'green' : (pct >= 60 ? 'orange' : 'red');
                analysisHtml += `
                    <div class="stat-card ${color}">
                        <div class="stat-val">${pct}%</div>
                        <div class="stat-label">${topic}</div>
                        <div class="stat-meta">${stats.correct}/${stats.total}</div>
                    </div>
                `;
            });
            analysisHtml += `</div>`;
        }

        const mins = Math.floor(results.timeSpent / 60);
        const secs = results.timeSpent % 60;

        container.innerHTML = `
            <div class="results-view">
                <div class="score-header">
                    <h1>Results</h1>
                    <div class="big-score">${results.percentage}%</div>
                    <div class="score-meta">${results.score} / ${results.total} correct</div>
                    <div class="time-meta">Time: ${mins}m ${secs}s</div>
                </div>

                <div class="analysis-section">
                    ${analysisHtml}
                </div>

                <div class="actions-row">
                    <button class="neo-btn primary" onclick="window.currentQuizEngine.reviewMode()">Review Answers</button>
                    <button class="neo-btn secondary" onclick="window.currentQuizEngine.reviewMode(true)">Missed Only</button>
                    <button class="neo-btn outline" onclick="location.reload()">Exit</button>
                    <button class="neo-btn outline" onclick="window.currentQuizEngine.copyResultsToClipboard()">Copy</button>
                </div>
            </div>
        `;
    }

    reviewMode(missedOnly = false) {
        const container = document.getElementById(this.containerId);

        let questionsHtml = '';
        let count = 0;

        this.questions.forEach((q, idx) => {
            const userAns = this.answers[idx];
            const isCorrect = (userAns === q.answer);

            if (missedOnly && isCorrect) return; // Skip correct ones
            count++;

            const labels = ['A', 'B', 'C', 'D', 'E'];

            questionsHtml += `
                <div class="review-card ${isCorrect ? 'correct' : 'incorrect'}">
                    <div class="review-header">
                        <span class="q-idx">Q${idx + 1}</span>
                        <span class="status-badge">${isCorrect ? 'Correct' : 'Incorrect'}</span>
                    </div>
                    <div class="review-text">${q.q || q.question}</div>
                    
                    <div class="review-options">
                        ${q.options.map((opt, i) => {
                let cls = '';
                if (i === q.answer) cls = 'truth';
                else if (i === userAns) cls = 'selected-wrong';
                return `<div class="rev-opt ${cls}">${labels[i]}. ${opt}</div>`;
            }).join('')}
                    </div>

                    <div class="review-explain">
                        <strong>Explanation:</strong> ${q.explain || 'No explanation available.'}
                        ${!isCorrect && typeof window.generateReviewLink === 'function' ? `<div style="margin-top: 0.75rem; border-top: 1px dashed #ccc; padding-top: 0.5rem;">${window.generateReviewLink(q)}</div>` : ''}
                    </div>
                </div>
            `;
        });

        if (count === 0) {
            if (typeof window.UI !== 'undefined') window.UI.toast("No questions match criteria (e.g. perfect score!).", "info");
            else alert("No questions match criteria (e.g. perfect score!).");
            return;
        }

        container.innerHTML = `
            <div class="review-container">
                <div class="review-top-bar">
                    <h2>Reviewing ${missedOnly ? 'Missed' : 'All'} (${count})</h2>
                    <button class="neo-btn small outline" onclick="window.currentQuizEngine.submit(true)">Back to Results</button>
                </div>
                <div class="review-list">
                    ${questionsHtml}
                </div>
            </div>
        `;
    }

    printView() {
        const container = document.getElementById(this.containerId);

        const questionsHtml = this.questions.map((q, idx) => {
            const labels = ['A', 'B', 'C', 'D', 'E'];
            return `
                <div class="print-question" style="margin-bottom: 2rem; page-break-inside: avoid;">
                    <div style="font-weight: bold; font-size: 1.1em; margin-bottom: 0.5rem;">${idx + 1}. ${q.q || q.question}</div>
                    <div class="print-options" style="margin-left: 1.5rem;">
                        ${q.options.map((opt, i) => `
                            <div style="margin-bottom: 0.25rem;">
                                <span style="font-weight: 600; margin-right: 0.5rem;">${labels[i]})</span> ${opt}
                            </div>
                        `).join('')}
                    </div>
                </div>
             `;
        }).join('');

        const answerKeyRows = this.questions.map((q, idx) => {
            const labels = ['A', 'B', 'C', 'D', 'E'];
            return `<div style="display:inline-block; width: 4rem; margin-bottom: 0.5rem;"><strong>${idx + 1}:</strong> ${labels[q.answer]}</div>`;
        }).join('');

        const html = `
            <div class="print-wrapper">
                <div class="print-header" style="text-align: center; margin-bottom: 2rem; border-bottom: 2px solid black; padding-bottom: 1rem;">
                    <h1 style="margin: 0; font-family:serif;">${this.mode === 'simulation' ? 'Disease Detectives Simulation Exam' : 'Epidemic Engine Practice Quiz'}</h1>
                    <div style="margin-top: 0.5rem; font-family:serif;">Name: ________________________________  Score: _______ / ${this.questions.length}</div>
                </div>

                <div class="print-body">
                    ${questionsHtml}
                </div>

                <div class="print-key" style="page-break-before: always; margin-top: 3rem;">
                    <h2 style="text-align: center; border-bottom: 1px solid black; margin-bottom: 1rem; font-family:serif;">Answer Key</h2>
                    <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                        ${answerKeyRows}
                    </div>
                </div>

                <div class="print-controls" style="position: fixed; top: 20px; right: 20px; background: white; padding: 1rem; border: 1px solid #ccc; box-shadow: 0 4px 12px rgba(0,0,0,0.2);">
                    <button class="neo-btn primary" onclick="window.print()">Print Now</button>
                    <button class="neo-btn outline" onclick="location.reload()">Back to App</button>
                </div>
            </div>
        `;

        container.innerHTML = html;
        setTimeout(() => window.print(), 500);
    }

    copyResultsToClipboard() {
        // Logic from ComprehensiveQuiz
        const results = this.calculateResults();
        let text = `Epidemic Engine Results: ${results.score}/${results.total} (${results.percentage}%)\n`;
        text += `Time: ${Math.floor(results.timeSpent / 60)}m\n\n`;
        Object.entries(results.byTopic).forEach(([topic, stats]) => {
            text += `${topic}: ${Math.round((stats.correct / stats.total) * 100)}%\n`;
        });
        navigator.clipboard.writeText(text).then(() => {
            if (typeof window.UI !== 'undefined') window.UI.toast("Copied!", "success");
            else alert("Copied!");
        });
    }

    /* ================= LOCAL STORAGE ================= */

    saveLocalProgress() {
        if (!this.quizId) return;
        const state = {
            currentIndex: this.currentIndex,
            answers: this.answers,
            flagged: Array.from(this.flagged),
            elapsedTime: Date.now() - this.startTime,
            savedAt: Date.now(),
            mode: this.mode
        };
        localStorage.setItem('quiz_progress_' + this.quizId, JSON.stringify(state));
    }

    loadLocalProgress() {
        try {
            const raw = localStorage.getItem('quiz_progress_' + this.quizId);
            if (!raw) return null;
            return JSON.parse(raw);
        } catch (e) {
            console.error("Failed to load progress", e);
            return null;
        }
    }

    clearLocalProgress() {
        if (this.quizId) {
            localStorage.removeItem('quiz_progress_' + this.quizId);
        }
    }

    pauseQuiz() {
        this.saveLocalProgress();
        if (this.timerInterval) clearInterval(this.timerInterval);

        const container = document.getElementById(this.containerId);
        if (!container) return;

        // Create overlay
        const overlay = document.createElement('div');
        overlay.id = 'quiz-pause-overlay';
        Object.assign(overlay.style, {
            position: 'absolute', top: '0', left: '0', right: '0', bottom: '0',
            background: 'rgba(255,255,255,0.95)', zIndex: '100',
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
        });

        overlay.innerHTML = `
            <h2 style="margin-bottom: 1rem; color: var(--navy-primary);">Quiz Paused</h2>
            <p style="margin-bottom: 2rem;">Your progress has been saved.</p>
            <button class="neo-btn primary large" id="resume-btn">
                <i class="ph-bold ph-play"></i> Resume Quiz
            </button>
            <button class="neo-btn outline" onclick="window.currentQuizEngine.confirmExit()" style="margin-top: 1rem;">
                Exit to Menu
            </button>
        `;

        container.appendChild(overlay);

        // Handle Resume
        document.getElementById('resume-btn').onclick = () => {
            overlay.remove();
            if (this.timeLimit) {
                // Adjust start time to account for pause duration? 
                // Simple version: just restart interval, but that might drift if we don't track pause time.
                // Better: We saved progress. The simplest is to just restart the timer interval logic.

                // The current timer logic usually calcs elapsed based on StartTime. 
                // If we pause, wall clock keeps moving. We need to shift startTime forward by the pause duration.
                // But for now, let's just re-init the timer which updates display.
                // Wait... if logic relies on (Now - StartTime), pausing will effectively count as "time taken".
                // To truly pause the CLOCK, we need to track "PauseStartTime".

                // Correction: The simplest approach for now without refactoring the whole timer:
                // We rely on the fact that the user is NOT exiting.
                // We need to adjust this.startTime so the elapsed calculation remains valid.
                // But since we didn't track "pauseStart", let's just restart for now or rely on the user knowing time ticks?
                // NO, user expects time to stop.

                // Let's effectively "re-start" the session logic similar to a reload, 
                // but we need to know how long we were paused.
                // Let's use a dirty fix: 
                // We don't have pauseStart variable in class state easily without breaking constructor.
                // ACTUALLY: The easiest fix:
                // The `start()` logic handles "resuming" by adjusting startTime based on `saved.elapsedTime`.
                // So we can just call `start()` again? No, that re-renders everything.

                // Let's do this manual fix:
                // 1. When pausing, we saved `elapsedTime`.
                // 2. When resuming, reset `startTime` to `Date.now() - saved.elapsedTime`.

                const saved = this.loadLocalProgress();
                if (saved && saved.elapsedTime) {
                    this.startTime = Date.now() - saved.elapsedTime;
                }
                this.startTimer();
            }
        };
    }
}

// Static Generator for Simulation Exams
// Static Generator for Simulation Exams (Improved Blueprint)
QuizEngine.generateSimulation = function (difficulty = 'balanced') {
    if (typeof QUIZ_BANKS === 'undefined') return { questions: [], boundaries: [] };

    // Helper: Select N random questions with TOPIC BALANCING
    const selectBalanced = (part, totalCount, difficulty = 'balanced') => {
        if (!QUIZ_BANKS[part]) return [];

        // 1. Gather Filtered Pool
        let pool = [];
        ['beginner', 'intermediate', 'advanced'].forEach(lvl => {
            if (QUIZ_BANKS[part][lvl]) {
                const qList = QUIZ_BANKS[part][lvl].map(q => ({ ...q, part: part, difficulty: lvl }));
                pool.push(...qList);
            }
        });

        // Filter by difficulty preference
        if (difficulty === 'beginner') pool = pool.filter(q => q.difficulty !== 'advanced');
        else if (difficulty === 'advanced') pool = pool.filter(q => q.difficulty !== 'beginner');

        // 2. Group by Topic
        const byTopic = {};
        pool.forEach(q => {
            const t = q.topic || 'General';
            if (!byTopic[t]) byTopic[t] = [];
            byTopic[t].push(q);
        });

        const topics = Object.keys(byTopic);
        if (topics.length === 0) return [];

        // 3. Distribute Quota
        // Goal: Even spread across topics
        let selected = [];
        const baseCount = Math.floor(totalCount / topics.length);
        let remainder = totalCount % topics.length;

        // Shuffle topics so the "remainder" (extra questions) distributes randomly each time
        topics.sort(() => Math.random() - 0.5);

        topics.forEach(topic => {
            // Determine how many to take from this topic
            let count = baseCount;
            if (remainder > 0) {
                count++;
                remainder--;
            }

            // Shuffle questions within this topic
            const topicQs = byTopic[topic].sort(() => Math.random() - 0.5);

            // Take the quota (or all if insufficient)
            selected.push(...topicQs.slice(0, count));
        });

        // 4. Fallback if pool was too small to meet totalCount (rare)
        if (selected.length < totalCount) {
            // Fill rest with randoms from full pool (excluding already selected)
            const remainingNeeded = totalCount - selected.length;
            const currentIds = new Set(selected.map(q => q.q)); // using q text as ID proxy

            const leftovers = pool.filter(q => !currentIds.has(q.q)).sort(() => Math.random() - 0.5);
            selected.push(...leftovers.slice(0, remainingNeeded));
        }

        // 5. Final Shuffle
        return selected.sort(() => Math.random() - 0.5);
    };

    // Blueprint: 50 Questions Total (Updated Phase 2)
    // Part I (Foundations): 8 Qs (16%)
    // Part II (Investigation/Math): 30 Qs (60%)
    // Part III (Control/Studies): 12 Qs (24%)

    const part1Qs = selectBalanced('part1', 8, difficulty);
    const part2Qs = selectBalanced('part2', 30, difficulty);
    const part3Qs = selectBalanced('part3', 12, difficulty);

    const finalQuestions = [...part1Qs, ...part2Qs, ...part3Qs];

    const boundaries = [
        { index: 0, label: 'Part I: Scientific Inquiry & Foundations' },
        { index: part1Qs.length, label: 'Part II: Investigation & Statistics' },
        { index: part1Qs.length + part2Qs.length, label: 'Part III: Prevention & Control' }
    ];

    return { questions: finalQuestions, boundaries };
};

// Helper: Select questions for a specific Part
QuizEngine.getQuestionsForPart = function (partId, difficulty = 'balanced') {
    if (typeof QUIZ_BANKS === 'undefined') return [];

    const cleanId = partId.replace('quiz_', '');

    const getQs = (pid, level) => {
        if (!QUIZ_BANKS[pid] || !QUIZ_BANKS[pid][level]) return [];
        return QUIZ_BANKS[pid][level].map(q => ({ ...q, part: pid, difficulty: level }));
    };

    let questions = [];
    const levels = ['beginner', 'intermediate', 'advanced'];

    if (difficulty === 'balanced') {
        levels.forEach(lvl => questions.push(...getQs(cleanId, lvl)));
    } else {
        questions = getQs(cleanId, difficulty);
    }

    return questions;
};

// Validates a single question object against schema
QuizEngine.validateQuestion = function (q) {
    if (!q || typeof q !== 'object') return false;
    if (!q.q || typeof q.q !== 'string' || q.q.length < 5) return false; // "q" is content
    if (!Array.isArray(q.options) || q.options.length < 2) return false;
    if (typeof q.answer !== 'number' || q.answer < 0 || q.answer >= q.options.length) return false;
    return true;
};

// Expose
window.QuizEngine = QuizEngine;
window.currentQuizEngine = null;

class AppendixEngine {
    constructor() {
        this.flashcardIndex = 0;
        this.isFlipped = false;
    }

    getFlashcards() {
        return window.APPENDIX_DATA && window.APPENDIX_DATA.flashcards ? window.APPENDIX_DATA.flashcards : [];
    }

    getGlossary() {
        return window.APPENDIX_DATA && window.APPENDIX_DATA.glossary ? window.APPENDIX_DATA.glossary : [];
    }

    initFlashcards(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const flashcards = this.getFlashcards();
        if (!flashcards || flashcards.length === 0) {
            container.innerHTML = '<p>No flashcards available.</p>';
            return;
        }

        this.renderFlashcardUI(container);
        this.updateFlashcard();
    }

    renderFlashcardUI(container) {
        container.innerHTML = `
            <div style="max-width: 700px; margin: 0 auto; display: flex; flex-direction: column; gap: 4rem;">
                
                <p style="text-align:center; color:#475569; font-style:italic; margin-bottom: -3rem; position: relative; z-index: 5;">
                    <i class="ph-bold ph-hand-tap"></i> Click the card to flip
                </p>

                <!-- Card Container -->
                <div style="perspective: 1000px; width: 100%; height: 350px; position: relative; z-index: 1;">
                    <button id="active-flashcard" onclick="window.appendixEngine.flipCard()"
                         onkeydown="if(event.key==='Enter'||event.key===' ') { event.preventDefault(); window.appendixEngine.flipCard(); }"
                         aria-label="Flashcard. Press Enter or Space to flip."
                         style="width: 100%; height: 100%; position: relative; transform-style: preserve-3d; 
                                transition: transform 0.6s; cursor: pointer; background: transparent; border: none; padding: 0; outline: none;">
                        
                        <div id="face-front" class="flashcard-face flashcard-front" aria-hidden="false"
                             style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; backface-visibility: hidden;
                                    background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
                                    border: 3px solid #000; border-radius: 16px; padding: 2rem;
                                    display: flex; flex-direction: column; align-items: center; justify-content: center;
                                    box-shadow: 8px 8px 0 #000;">
                            <div id="fc-front" style="font-family: 'Space Grotesk', sans-serif; font-size: 2rem; 
                                                      font-weight: 700; text-align: center; color: #1a1a1a; line-height: 1.3;"></div>
                            <div style="position: absolute; bottom: 1.5rem; font-size: 0.9rem; color: #475569; 
                                       font-family: 'Inter', sans-serif; font-style: italic;">Click (or Space) to flip</div>
                        </div>

                        <div id="face-back" class="flashcard-face flashcard-back" aria-hidden="true"
                             style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; backface-visibility: hidden;
                                    background: linear-gradient(135deg, #ddd6fe 0%, #c4b5fd 100%);
                                    border: 3px solid #000; border-radius: 16px; padding: 2rem;
                                    display: flex; flex-direction: column; align-items: center; justify-content: center;
                                    box-shadow: 8px 8px 0 #000; transform: rotateY(180deg);">
                            <div id="fc-back" style="font-family: 'Space Grotesk', sans-serif; font-size: 1.5rem; 
                                                     font-weight: 600; text-align: center; color: #1a1a1a; line-height: 1.4;"></div>
                            <div style="position: absolute; bottom: 1.5rem; font-size: 0.9rem; color: #475569; 
                                       font-family: 'Inter', sans-serif; font-style: italic;">Click (or Space) to flip</div>
                        </div>
                    </button>
                </div>

                <!-- Controls Container -->
                <div style="position: relative; z-index: 10; width: 100%;">
                    <div style="display: flex; justify-content: space-between; align-items: center; gap: 1rem; margin-bottom: 1.5rem;">
                        <button id="fc-prev-btn" onclick="window.appendixEngine.prevCard()" aria-label="Previous Card"
                                style="flex: 1; max-width: 180px; padding: 1rem; border-radius: 8px; font-weight: 800; text-transform: uppercase;
                                       cursor: pointer; border: 3px solid #000; background: #000000; color: #ffffff;
                                       box-shadow: 4px 4px 0 rgba(0,0,0,0.2); font-family: 'Space Grotesk', sans-serif; font-size: 1.2rem;">
                            &#8592; PREV
                        </button>
                        <span id="fc-counter" style="font-family: 'Space Grotesk', sans-serif; font-weight: 700; 
                                                     font-size: 1.5rem; color: #1a1a1a;" aria-live="polite"></span>
                        <button id="fc-next-btn" onclick="window.appendixEngine.nextCard()" aria-label="Next Card"
                                style="flex: 1; max-width: 180px; padding: 1rem; border-radius: 8px; font-weight: 800; text-transform: uppercase;
                                       cursor: pointer; border: 3px solid #000; background: #3b82f6; color: #ffffff;
                                       box-shadow: 4px 4px 0 #000; font-family: 'Space Grotesk', sans-serif; font-size: 1.2rem;">
                            NEXT &#8594;
                        </button>
                    </div>
                    
                    <div style="display: flex; align-items: center; gap: 1rem;">
                        <div style="flex:1; height: 24px; background: #e5e7eb; border: 2px solid #000; border-radius: 999px; 
                                   overflow: hidden; box-shadow: 4px 4px 0 #000;">
                            <div id="fc-progress" style="height: 100%; background: linear-gradient(90deg, #ff5c00 0%, #a855f7 100%); 
                                                         width: 0%; transition: width 0.3s ease;"></div>
                        </div>
                         <button onclick="window.appendixEngine.printFlashcards()" title="Print All Cards"
                                style="width: 40px; height: 40px; border-radius: 50%; border: 2px solid #000; background: white; cursor: pointer; display: flex; align-items: center; justify-content: center; box-shadow: 2px 2px 0 #000;">
                            <i class="ph-bold ph-printer"></i>
                        </button>
                    </div>
                </div>

            </div>
        `;
    }

    updateFlashcard() {
        const flashcards = this.getFlashcards();
        if (this.flashcardIndex >= flashcards.length) this.flashcardIndex = 0;

        const card = flashcards[this.flashcardIndex];
        const frontEl = document.getElementById('fc-front');
        const backEl = document.getElementById('fc-back');
        const counterEl = document.getElementById('fc-counter');
        const progressEl = document.getElementById('fc-progress');
        const flashcardEl = document.getElementById('active-flashcard');
        const faceFront = document.getElementById('face-front');
        const faceBack = document.getElementById('face-back');

        if (!frontEl || !backEl) return;

        this.isFlipped = false;
        if (flashcardEl) {
            flashcardEl.classList.remove('is-flipped');

            // SNAP BACK: Disable transition to instantly show front of NEW card
            // preventing the user from seeing the new answer (back) during rotation
            const originalTransition = flashcardEl.style.transition;
            flashcardEl.style.transition = 'none';
            flashcardEl.style.transform = 'rotateY(0deg)';

            // Force reflow to apply the change
            void flashcardEl.offsetWidth;

            // Restore transition
            flashcardEl.style.transition = originalTransition || 'transform 0.6s';
        }

        // Reset ARIA
        if (faceFront) faceFront.setAttribute('aria-hidden', 'false');
        if (faceBack) faceBack.setAttribute('aria-hidden', 'true');

        frontEl.textContent = card.front;
        backEl.textContent = card.back;
        counterEl.textContent = `${this.flashcardIndex + 1} / ${flashcards.length}`;

        const pct = ((this.flashcardIndex + 1) / flashcards.length) * 100;
        progressEl.style.width = `${pct}%`;
    }

    flipCard() {
        this.isFlipped = !this.isFlipped;
        const flashcardEl = document.getElementById('active-flashcard');
        const faceFront = document.getElementById('face-front');
        const faceBack = document.getElementById('face-back');

        if (flashcardEl) {
            if (this.isFlipped) {
                flashcardEl.style.transform = 'rotateY(180deg)';
                if (faceFront) faceFront.setAttribute('aria-hidden', 'true');
                if (faceBack) faceBack.setAttribute('aria-hidden', 'false');
            } else {
                flashcardEl.style.transform = 'rotateY(0deg)';
                if (faceFront) faceFront.setAttribute('aria-hidden', 'false');
                if (faceBack) faceBack.setAttribute('aria-hidden', 'true');
            }
        }
    }

    nextCard() {
        if (this.flashcardIndex < this.getFlashcards().length - 1) {
            this.flashcardIndex++;
            this.updateFlashcard();
        }
    }

    prevCard() {
        if (this.flashcardIndex > 0) {
            this.flashcardIndex--;
            this.updateFlashcard();
        }
    }

    initGlossary(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        container.innerHTML = `
            <div style="margin-bottom: 2rem;">
                <input type="text" id="glossary-search" placeholder="🔍 Search terms..." onkeyup="window.appendixEngine.filterGlossary()"
                       style="width: 100%; padding: 1rem 1.5rem; font-size: 1.1rem; font-family: 'Inter', sans-serif;
                              border: 3px solid #000; border-radius: 12px; background: white;
                              box-shadow: 4px 4px 0 #000;">
            </div>
            <div id="glossary-list" style="display: grid; gap: 0.75rem;"></div>
        `;

        this.renderGlossaryList(this.getGlossary());
    }

    renderGlossaryList(items) {
        const listContainer = document.getElementById('glossary-list');
        if (!listContainer) return;

        if (!items || items.length === 0) {
            listContainer.innerHTML = '<p style="text-align: center; color: #64748b;">No terms found.</p>';
            return;
        }

        items.sort((a, b) => a.term.localeCompare(b.term));

        let html = '';
        let currentLetter = '';

        // Color Palette for Cycling
        const PALETTE = ['var(--accent-blue)', 'var(--accent-orange)', 'var(--accent-green)', 'var(--accent-purple)', 'var(--accent-pink)'];
        const BG_PALETTE = ['#eff6ff', '#fff7ed', '#f0fdf4', '#faf5ff', '#fdf2f8']; // Matches tailwind 50s
        const BORDER_PALETTE = ['#bfdbfe', '#fed7aa', '#bbf7d0', '#e9d5ff', '#fbcfe8']; // Matches tailwind 200s

        items.forEach((item, idx) => {
            const color = PALETTE[idx % PALETTE.length];
            const firstLetter = item.term.charAt(0).toUpperCase();

            if (firstLetter !== currentLetter) {
                currentLetter = firstLetter;
                html += `<div style="font-family: 'Space Grotesk', sans-serif; font-size: 1.5rem; font-weight: 700;
                                     color: ${color}; margin-top: 2rem; margin-bottom: 1rem; padding-bottom: 0.5rem;
                                     border-bottom: 3px solid #000;">${currentLetter}</div>`;
            }
            html += `
                <div style="background: white; border: 2px solid #000; border-left: 6px solid ${color}; border-radius: 8px; padding: 1rem;
                           box-shadow: 3px 3px 0 #000; margin-bottom: 0.5rem;">
                    <strong style="font-family: 'Space Grotesk', sans-serif; font-size: 1.1rem; font-weight: 700;
                                  color: ${color}; display: block; margin-bottom: 0.5rem;">${item.term}</strong>
                    <span style="font-family: 'Inter', sans-serif; font-size: 1rem; line-height: 1.6;
                                color: #1a1a1a;">${item.definition}</span>
                </div>
            `;
        });

        listContainer.innerHTML = html;
    }

    filterGlossary() {
        const searchInput = document.getElementById('glossary-search');
        if (!searchInput) return;
        const query = searchInput.value.toLowerCase();

        const filtered = this.getGlossary().filter(item =>
            item.term.toLowerCase().includes(query) ||
            item.definition.toLowerCase().includes(query)
        );

        this.renderGlossaryList(filtered);
    }

    printFlashcards() {
        const flashcards = this.getFlashcards();
        if (!flashcards.length) return;

        const container = document.getElementById('flashcard-root');
        if (!container) return;

        // Save current state to restore later if needed (simple reload is easier)
        const originalContent = container.innerHTML;

        const html = `
            <div class="print-wrapper">
                <div class="no-print" style="margin-bottom: 2rem; border-bottom: 1px solid #ccc; padding-bottom: 1rem;">
                    <button class="neo-btn outline" onclick="location.reload()">
                        <i class="ph-bold ph-arrow-left"></i> Back to Deck
                    </button>
                    <button class="neo-btn primary" onclick="window.print()" style="margin-left: 1rem;">
                        <i class="ph-bold ph-printer"></i> Print Now
                    </button>
                </div>

                <div style="text-align: center; margin-bottom: 2rem;">
                    <h1>Epidemic Engine: Flashcards</h1>
                    <p>Total Cards: ${flashcards.length}</p>
                </div>

                <div class="print-grid" style="display: grid; grid-template-columns: 1fr; gap: 1rem;">
                    ${flashcards.map((card, i) => `
                        <div style="border: 2px solid #000; break-inside: avoid; padding: 1rem; display: flex; flex-direction: row; align-items: stretch;">
                            <div style="flex: 0 0 40px; font-weight: bold; border-right: 2px solid #000; margin-right: 1rem; display: flex; align-items: center; justify-content: center; background: #eee;">
                                ${i + 1}
                            </div>
                            <div style="flex: 1; padding-right: 1rem; border-right: 1px dashed #ccc; display: flex; align-items: center;">
                                <strong>${card.front}</strong>
                            </div>
                            <div style="flex: 1; padding-left: 1rem; display: flex; align-items: center;">
                                ${card.back}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
            <style>
                @media print {
                    .no-print { display: none !important; }
                    .app-container, .sidebar, .site-footer { display: none !important; }
                    body { background: white; color: black; }
                    .print-wrapper { position: absolute; top: 0; left: 0; width: 100%; margin: 0; padding: 0.5in; }
                }
            </style>
        `;

        container.innerHTML = html;
    }

    getFormulas() {
        return window.APPENDIX_DATA && window.APPENDIX_DATA.FORMULAS ? window.APPENDIX_DATA.FORMULAS : [];
    }

    getTables() {
        return window.APPENDIX_DATA && window.APPENDIX_DATA.TABLES ? window.APPENDIX_DATA.TABLES : null;
    }

    initFormulas(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const formulas = this.getFormulas();
        if (formulas.length === 0) {
            container.innerHTML = '<p>No formulas found.</p>';
            return;
        }

        let currentCategory = '';
        let html = '';

        formulas.sort((a, b) => {
            if (a.category !== b.category) return a.category.localeCompare(b.category);
            return a.name.localeCompare(b.name);
        });

        // Color Palette for Cycling (Re-declared for scope safety if needed, though closure handles it)
        const PALETTE = ['var(--accent-blue)', 'var(--accent-orange)', 'var(--accent-green)', 'var(--accent-purple)', 'var(--accent-pink)'];
        const BG_PALETTE = ['#eff6ff', '#fff7ed', '#f0fdf4', '#faf5ff', '#fdf2f8'];
        const BORDER_PALETTE = ['#bfdbfe', '#fed7aa', '#bbf7d0', '#e9d5ff', '#fbcfe8'];

        formulas.forEach((f, idx) => {
            const color = PALETTE[idx % PALETTE.length];
            const bg = BG_PALETTE[idx % BG_PALETTE.length];
            const border = BORDER_PALETTE[idx % BORDER_PALETTE.length];

            if (f.category !== currentCategory) {
                currentCategory = f.category;
                html += `<h4 style="margin-top: 1.5rem; color: ${color}; border-bottom: 2px solid #eee; padding-bottom: 0.5rem;">${currentCategory}</h4>`;
            }
            html += `
                <div class="neo-card small" style="margin-bottom: 0.75rem; border-left: 4px solid ${color};">
                    <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.5rem;">
                        <strong style="font-size: 1.1rem; color: ${color};">${f.name}</strong>
                        <span class="neo-badge small" style="background: ${bg}; color: ${color}; border: 1px solid ${border};">${f.use}</span>
                    </div>
                    <code style="display: block; background: #f8f9fa; padding: 0.75rem; border-radius: 4px; font-family: monospace; font-size: 1.1rem; border: 1px solid #e2e8f0;">${f.calc}</code>
                </div>
            `;
        });

        container.innerHTML = html;
    }

    initTables(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const tables = this.getTables();
        if (!tables) {
            container.innerHTML = '<p>No tables found.</p>';
            return;
        }

        let html = '';

        // Render Chi-Square
        if (tables.chiSqure) {
            const t = tables.chiSqure;
            html += `
                <div class="neo-card" style="margin-bottom: 2rem;">
                    <h4 style="margin-top: 0; color: var(--accent-orange);">${t.title}</h4>
                    <div style="overflow-x: auto;">
                        <table style="width: 100%; border-collapse: collapse; font-family: 'Space Grotesk', sans-serif;">
                            <thead>
                                <tr style="background: var(--navy-primary); color: white;">
                                    ${t.headers.map(h => `<th style="padding: 0.75rem; text-align: center;">${h}</th>`).join('')}
                                </tr>
                            </thead>
                            <tbody>
                                ${t.rows.map((row, i) => `
                                    <tr style="${i % 2 === 0 ? 'background: #f8fafc;' : 'background: white;'}">
                                        ${row.map(cell => `<td style="padding: 0.75rem; text-align: center; border-bottom: 1px solid #e2e8f0;">${cell}</td>`).join('')}
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>
                </div>
            `;
        }

        // Render Z-Table
        if (tables.zTable) {
            const t = tables.zTable;
            html += `
                <div class="neo-card">
                    <h4 style="margin-top: 0; color: var(--accent-green);">${t.title}</h4>
                     <div style="overflow-x: auto;">
                        <table style="width: 100%; border-collapse: collapse; font-family: 'Space Grotesk', sans-serif;">
                            <thead>
                                <tr style="background: var(--navy-primary); color: white;">
                                    ${t.headers.map(h => `<th style="padding: 0.75rem; text-align: center;">${h}</th>`).join('')}
                                </tr>
                            </thead>
                            <tbody>
                                ${t.rows.map((row, i) => `
                                    <tr style="${i % 2 === 0 ? 'background: #f8fafc;' : 'background: white;'}">
                                        ${row.map(cell => `<td style="padding: 0.75rem; text-align: center; border-bottom: 1px solid #e2e8f0;">${cell}</td>`).join('')}
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>
                </div>
            `;
        }

        container.innerHTML = html;
    }
}

window.appendixEngine = new AppendixEngine();

/**
 * Epidemic Engine - Visual Components Library
 * Interactive SVGs and Diagrams
 */

window.VisualComponents = {

    // Interactive Epidemiologic Triad
    renderTriad: function (containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const html = `
            <div class="triad-widget neo-card" style="text-align:center; padding: 2rem;">
                <h3 style="color:var(--navy-primary); margin-bottom: 2rem; font-weight: 800; font-size: 1.5rem;">Interactive Triad</h3>
                
                <div style="display:flex; flex-wrap:wrap; align-items:center; justify-content:center; gap: 2rem;">
                    
                    <!-- SVG Diagram -->
                    <div class="triad-svg-container" style="flex: 0 0 300px;">
                        <svg viewBox="0 0 300 260" style="filter: drop-shadow(0 4px 6px rgba(0,0,0,0.1));">
                            <!-- Edges -->
                            <line x1="150" y1="40" x2="40" y2="220" stroke="#cbd5e1" stroke-width="6" stroke-linecap="round" />
                            <line x1="150" y1="40" x2="260" y2="220" stroke="#cbd5e1" stroke-width="6" stroke-linecap="round" />
                            <line x1="40" y1="220" x2="260" y2="220" stroke="#cbd5e1" stroke-width="6" stroke-linecap="round" />

                            <!-- Vector (Center) -->
                            <g class="triad-node" role="button" tabindex="0" onclick="VisualComponents.updateTriad('vector')" onkeydown="if(event.key==='Enter'||event.key===' ')VisualComponents.updateTriad('vector')" style="cursor:pointer;" aria-label="Select Vector">
                                <circle cx="150" cy="150" r="32" fill="#f1f5f9" stroke="#64748b" stroke-width="3" class="node-bg" id="node-vector"/>
                                <text x="150" y="156" text-anchor="middle" font-size="11" font-weight="900" fill="#334155" style="text-transform: uppercase; letter-spacing: 0.5px;">VECTOR</text>
                            </g>

                            <!-- Agent (Top) -->
                            <g class="triad-node" role="button" tabindex="0" onclick="VisualComponents.updateTriad('agent')" onkeydown="if(event.key==='Enter'||event.key===' ')VisualComponents.updateTriad('agent')" style="cursor:pointer;" aria-label="Select Agent">
                                <circle cx="150" cy="40" r="38" fill="#fee2e2" stroke="#ef4444" stroke-width="4" class="node-bg" id="node-agent"/>
                                <text x="150" y="46" text-anchor="middle" font-size="13" font-weight="900" fill="#991b1b" style="text-transform: uppercase;">AGENT</text>
                                <text x="150" y="15" text-anchor="middle" font-size="24">🦠</text>
                            </g>

                            <!-- Host (Left) -->
                            <g class="triad-node" role="button" tabindex="0" onclick="VisualComponents.updateTriad('host')" onkeydown="if(event.key==='Enter'||event.key===' ')VisualComponents.updateTriad('host')" style="cursor:pointer;" aria-label="Select Host">
                                <circle cx="40" cy="220" r="38" fill="#dbeafe" stroke="#3b82f6" stroke-width="4" class="node-bg" id="node-host"/>
                                <text x="40" y="226" text-anchor="middle" font-size="13" font-weight="900" fill="#1e40af" style="text-transform: uppercase;">HOST</text>
                                <text x="40" y="195" text-anchor="middle" font-size="24">👤</text>
                            </g>

                            <!-- Environment (Right) -->
                            <g class="triad-node" role="button" tabindex="0" onclick="VisualComponents.updateTriad('env')" onkeydown="if(event.key==='Enter'||event.key===' ')VisualComponents.updateTriad('env')" style="cursor:pointer;" aria-label="Select Environment">
                                <circle cx="260" cy="220" r="38" fill="#dcfce7" stroke="#22c55e" stroke-width="4" class="node-bg" id="node-env"/>
                                <text x="260" y="226" text-anchor="middle" font-size="12" font-weight="900" fill="#166534" style="text-transform: uppercase;">ENVIRON</text>
                                <text x="260" y="195" text-anchor="middle" font-size="24">🌍</text>
                            </g>
                        </svg>
                    </div>

                    <!-- Info Panel -->
                    <div id="triad-info" role="status" aria-live="polite" style="flex: 1; min-width: 250px; text-align: left; background: #f8fafc; border: 2px solid #e2e8f0; border-radius: 12px; padding: 1.5rem; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);">
                        <h4 style="margin-top:0; color:#334155; border-bottom: 2px solid #e2e8f0; padding-bottom: 0.75rem; font-weight: 800; font-size: 1.1rem;">Select a Node</h4>
                        <p style="color: #475569; font-size: 1rem; line-height: 1.6; font-weight: 500;">Click on the corners of the triangle to explore the components of this model.</p>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML = html;

        // Initial state - Use RAF to avoid synchronous layout thrashing after innerHTML write
        requestAnimationFrame(() => {
            this.updateTriad('agent');
        });
    },

    updateTriad: function (type) {
        const info = document.getElementById('triad-info');
        if (!info) return;

        const content = {
            agent: {
                title: "The Agent ('What')",
                color: "#b91c1c",
                bg: "#fee2e2",
                body: `
                    <p>The cause of the disease. Can be:</p>
                    <ul style="padding-left: 1.25rem;">
                        <li><strong>Biological:</strong> Bacteria, Viruses, Parasites</li>
                        <li><strong>Chemical:</strong> Poisons, Alcohol, Smoke</li>
                        <li><strong>Physical:</strong> Trauma, Radiation, Fire</li>
                        <li><strong>Nutritional:</strong> Lack (Scurvy) or Excess (Obesity)</li>
                    </ul>
                `
            },
            host: {
                title: "The Host ('Who')",
                color: "#1d4ed8",
                bg: "#dbeafe",
                body: `
                    <p>The organism harboring the disease. Risk factors include:</p>
                    <ul style="padding-left: 1.25rem;">
                        <li><strong>Intrinsic:</strong> Age, Sex, Genetics, Immunity</li>
                        <li><strong>Behavioral:</strong> Diet, Exercise, Hygiene</li>
                        <li><strong>Psychological:</strong> Stress levels</li>
                    </ul>
                `
            },
            env: {
                title: "The Environment ('Where')",
                color: "#15803d",
                bg: "#dcfce7",
                body: `
                    <p>External factors allowing transmission:</p>
                    <ul style="padding-left: 1.25rem;">
                        <li><strong>Physical:</strong> Climate, Geography, Water supply</li>
                        <li><strong>Biological:</strong> Vectors (Mosquitoes), Flora</li>
                        <li><strong>Socioeconomic:</strong> Crowding, Sanitation, Access to care</li>
                    </ul>
                `
            },
            vector: {
                title: "The Vector (Center)",
                color: "#475569",
                bg: "#f1f5f9",
                body: `
                    <p><strong>The Transporter.</strong></p>
                    <p>An organism (like a mosquito or tick) that carries the agent from a host or reservoir to a new susceptible host. Not always present in every disease model.</p>
                `
            }
        };

        const data = content[type];

        // Animate Update
        info.style.opacity = '0.5';
        setTimeout(() => {
            info.style.background = data.bg;
            info.style.borderColor = data.color;
            info.innerHTML = `
                <h4 style="margin-top:0; color:${data.color}; border-bottom: 1px solid ${data.color}40; padding-bottom: 0.5rem;">${data.title}</h4>
                <div style="font-size: 0.95rem; color: #334155;">${data.body}</div>
            `;
            info.style.opacity = '1';
        }, 150);

        // Highlight SVG Node
        document.querySelectorAll('.node-bg').forEach(el => el.style.filter = '');

        // Reset Aria-Pressed
        document.querySelectorAll('.triad-node').forEach(el => el.setAttribute('aria-pressed', 'false'));

        const activeNode = document.getElementById(`node-${type}`);
        if (activeNode) {
            activeNode.style.filter = 'brightness(0.9) drop-shadow(0 0 8px rgba(0,0,0,0.2))';
            activeNode.parentElement.setAttribute('aria-pressed', 'true'); // Set on the group
        }
    },

    // ------------------------------------------
    // "Stop the Outbreak" Simulator (R0 Control)
    // ------------------------------------------
    renderControlSimulator: function (containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const html = `
            <div class="control-sim neo-card" style="padding: 2rem; background: linear-gradient(to bottom right, #f8fafc, #f1f5f9);">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 2rem;">
                    <div>
                        <h3 style="color:var(--navy-primary); margin:0;">Stop the Outbreak</h3>
                        <p style="margin:0.25rem 0 0; color:#64748b; font-size:0.9rem;">Adjust interventions to reduce the Reproduction Number (R).</p>
                    </div>
                    <div style="text-align:right;">
                        <div style="font-size:0.8rem; text-transform:uppercase; font-weight:bold; color:#64748b;">Current Status</div>
                        <div id="sim-status" style="font-weight:bold; color:#ef4444;">EXPONENTIAL GROWTH</div>
                    </div>
                </div>

                <div style="display: flex; gap: 2rem; flex-wrap: wrap;">
                    <!-- Controls -->
                    <div style="flex: 1; min-width: 250px;">
                        <!-- Vaccine -->
                        <div style="margin-bottom: 1.5rem;">
                            <label style="display:flex; justify-content:space-between; font-weight:bold; margin-bottom:0.5rem;">
                                <span>Vaccination Rate</span>
                                <span id="val-vac">0%</span>
                            </label>
                            <input type="range" id="range-vac" min="0" max="100" value="0" style="width:100%; accent-color: #3b82f6;">
                            <div style="font-size:0.8rem; color:#64748b;">Reduces susceptible population.</div>
                        </div>

                        <!-- Masks -->
                        <div style="margin-bottom: 1.5rem;">
                            <label style="display:flex; justify-content:space-between; font-weight:bold; margin-bottom:0.5rem;">
                                <span>Mask Usage</span>
                                <span id="val-mask">0%</span>
                            </label>
                            <input type="range" id="range-mask" min="0" max="100" value="0" style="width:100%; accent-color: #10b981;">
                            <div style="font-size:0.8rem; color:#64748b;">Reduces transmission probability.</div>
                        </div>

                        <!-- Distancing -->
                        <div style="margin-bottom: 0;">
                            <label style="display:flex; justify-content:space-between; font-weight:bold; margin-bottom:0.5rem;">
                                <span>Social Distancing</span>
                                <span id="val-dist">Normal</span>
                            </label>
                            <input type="range" id="range-dist" min="0" max="3" step="1" value="0" style="width:100%; accent-color: #f59e0b;">
                            <div style="font-size:0.8rem; color:#64748b;">Reduces contact rate.</div>
                        </div>
                    </div>

                    <!-- Visual Output -->
                    <div style="flex: 0 0 280px; background: white; padding: 1.5rem; border-radius: 12px; border: 1px solid #e2e8f0; text-align: center;">
                        <h4 style="margin-top:0; color:#334155;">Reproduction Number (<span style="font-style:italic;">R</span>)</h4>
                        
                        <div style="position:relative; height: 120px; display:flex; align-items:flex-end; justify-content:center; margin-bottom: 1rem;">
                            <!-- Bar Background -->
                            <div style="width: 40px; height: 100%; background: #f1f5f9; border-radius: 20px; position: relative; overflow: hidden;">
                                <!-- Fill -->
                                <div id="r-bar" style="position:absolute; bottom:0; left:0; right:0; height: 100%; background: #ef4444; transition: height 0.3s, background 0.3s;"></div>
                                <!-- Line at 1.0 -->
                                <div style="position:absolute; bottom: 25%; left: -5px; right: -5px; border-top: 2px dashed #334155; z-index: 2;"></div>
                            </div>
                            <div style="position:absolute; bottom: 25%; right: 70px; font-size: 0.8rem; font-weight:bold; color: #334155;">Target < 1.0</div>
                        </div>

                        <div id="r-value" style="font-size: 3.5rem; font-weight: 800; line-height: 1; color: #ef4444; transition: color 0.3s;">4.00</div>
                        <div style="font-size: 0.9rem; color: #64748b; margin-top: 0.5rem;">Starting R₀ = 4.0</div>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML = html;

        // Logic
        const ranges = {
            vac: document.getElementById('range-vac'),
            mask: document.getElementById('range-mask'),
            dist: document.getElementById('range-dist')
        };
        const displays = {
            vac: document.getElementById('val-vac'),
            mask: document.getElementById('val-mask'),
            dist: document.getElementById('val-dist'),
            r: document.getElementById('r-value'),
            bar: document.getElementById('r-bar'),
            status: document.getElementById('sim-status')
        };

        const R0 = 4.0;
        const distLabels = ["Normal", "Limit Groups", "Stay Home", "Lockdown"];
        // Distancing Factors: 1.0, 0.7, 0.4, 0.1 (Contact reduction)
        const distFactors = [1.0, 0.7, 0.4, 0.1];

        const update = () => {
            const vRate = parseInt(ranges.vac.value) / 100;
            const mRate = parseInt(ranges.mask.value) / 100;
            const dIdx = parseInt(ranges.dist.value);

            displays.vac.textContent = `${(vRate * 100).toFixed(0)}%`;
            displays.mask.textContent = `${(mRate * 100).toFixed(0)}%`;
            displays.dist.textContent = distLabels[dIdx];

            // Formula: R = R0 * (1 - VaccineEff * Coverage) * (1 - MaskEff * Usage) * DistFactor
            // Assumptions: Vaccine is 90% effective, Masks are 50% effective (community)
            const rEff = R0 * (1 - (0.9 * vRate)) * (1 - (0.5 * mRate)) * distFactors[dIdx];

            displays.r.textContent = rEff.toFixed(2);

            // Visual Updates
            // Max height is R=4.0 (100%). Target is 1.0 (25%)
            let hPct = (rEff / 4.0) * 100;
            if (hPct > 100) hPct = 100;
            if (hPct < 5) hPct = 5;
            displays.bar.style.height = `${hPct}%`;

            if (rEff < 1.0) {
                displays.r.style.color = "#10b981"; // Green
                displays.bar.style.background = "#10b981";
                displays.status.textContent = "OUTBREAK CONTROLLED";
                displays.status.style.color = "#10b981";
            } else {
                displays.r.style.color = "#ef4444"; // Red
                displays.bar.style.background = "#ef4444";
                displays.status.textContent = "EXPONENTIAL GROWTH";
                displays.status.style.color = "#ef4444";
            }
        };

        Object.values(ranges).forEach(r => r.addEventListener('input', update));
    },

    // ------------------------------------------
    // Wheel of Causation (Interactive)
    // ------------------------------------------
    renderWheelOfCausation: function (containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const html = `
            <div class="wheel-widget neo-card" style="padding: 2rem; text-align: center;">
                 <h3 style="color:var(--navy-primary); margin-bottom: 2rem; font-weight: 800; font-size: 1.5rem;">Interactive Wheel of Causation</h3>
                 
                 <div style="display:flex; flex-wrap:wrap; align-items:center; justify-content:center; gap: 3rem;">
                    
                    <!-- SVG Wheel -->
                    <div style="flex: 0 0 320px;">
                        <svg viewBox="0 0 320 320" style="filter: drop-shadow(0 4px 6px rgba(0,0,0,0.1)); cursor:pointer;">
                            <defs>
                                <filter id="glow-wheel" x="-20%" y="-20%" width="140%" height="140%">
                                    <feGaussianBlur stdDeviation="3" result="blur"/>
                                    <feComposite in="SourceGraphic" in2="blur" operator="over"/>
                                </filter>
                            </defs>
                            
                            <!-- Outer Ring Segments (Environment) -->
                            <!-- Physical (Top Left) -->
                            <path d="M160,160 L160,10 A150,150 0 0,0 30,85 Z" fill="#93c5fd" stroke="white" stroke-width="2" 
                                  class="wheel-slice" id="slice-physical" onclick="VisualComponents.updateWheel('physical')" role="button" tabindex="0"/>
                            <text x="90" y="80" font-weight="900" font-size="11" fill="#1e3a8a" transform="rotate(-45, 90, 80)">PHYSICAL</text>
                            
                             <!-- Biologic (Right) -->
                            <path d="M160,160 L160,10 A150,150 0 0,1 290,235 L160,160 Z" fill="#86efac" stroke="white" stroke-width="2" 
                                  class="wheel-slice" id="slice-biologic" onclick="VisualComponents.updateWheel('biologic')" role="button" tabindex="0"/>
                            <text x="230" y="100" font-weight="900" font-size="11" fill="#14532d" transform="rotate(45, 230, 100)">BIOLOGICAL</text>

                            <!-- Social (Bottom Left) -->
                            <path d="M160,160 L290,235 A150,150 0 0,1 30,85 L160,160 Z" fill="#fca5a5" stroke="white" stroke-width="2" 
                                  class="wheel-slice" id="slice-social" onclick="VisualComponents.updateWheel('social')" role="button" tabindex="0"/>
                            <text x="130" y="260" font-weight="900" font-size="11" fill="#7f1d1d">SOCIAL ENV.</text>

                            <!-- Core (Host) -->
                            <circle cx="160" cy="160" r="50" fill="#fde047" stroke="white" stroke-width="3" 
                                    class="wheel-slice" id="slice-host" onclick="VisualComponents.updateWheel('host')" role="button" tabindex="0"/>
                            <text x="160" y="160" text-anchor="middle" font-weight="900" font-size="13" fill="#854d0e" dy="5">HOST</text>
                        </svg>
                    </div>

                    <!-- Info Panel -->
                    <div id="wheel-info" role="status" aria-live="polite" style="flex: 1; min-width: 250px; text-align: left; background: #f8fafc; border: 2px solid #e2e8f0; border-radius: 12px; padding: 1.5rem; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);">
                        <h4 style="margin-top:0; color:#334155; border-bottom: 2px solid #e2e8f0; padding-bottom: 0.75rem; font-weight: 800; font-size: 1.1rem;">The Wheel Model</h4>
                        <p style="color: #475569; font-size: 1rem; line-height: 1.6; font-weight: 500;">Click on any section of the wheel to understand its role in multi-factorial causation.</p>
                    </div>

                 </div>
            </div>
        `;
        container.innerHTML = html;

        // Add keyboard support
        container.querySelectorAll('.wheel-slice').forEach(el => {
            el.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    el.click();
                }
            });
        });
    },

    updateWheel: function (type) {
        const info = document.getElementById('wheel-info');
        if (!info) return;

        const content = {
            host: {
                title: "The Core: The Genetically Determined Host",
                bg: "#fef9c3",
                color: "#ca8a04",
                body: "<p>The central hub. Includes genetic makeup, immunity, and intrinsic factors. The wheel model emphasizes that the host interacts with <strong>all</strong> environmental sectors simultaneously.</p>"
            },
            physical: {
                title: "Physical Environment",
                bg: "#eff6ff",
                color: "#1d4ed8",
                body: "<p>Non-living external factors:</p><ul><li>Pollution & Air Quality</li><li>Geography & Climate</li><li>Housing & Urban Design</li><li>Water Sanitation</li></ul>"
            },
            biologic: {
                title: "Biological Environment",
                bg: "#f0fdf4",
                color: "#15803d",
                body: "<p>Living external factors contributing to disease:</p><ul><li>Infectious Agents (Viruses, Bacteria)</li><li>Vectors (Mosquitoes)</li><li>Reservoirs (Animals)</li><li>Flora & Fauna</li></ul>"
            },
            social: {
                title: "Social Environment",
                bg: "#fef2f2",
                color: "#b91c1c",
                body: "<p>The #1 determinant for many chronic diseases:</p><ul><li>Socioeconomic Status (Poverty)</li><li>Culture & Lifestyle</li><li>Stress & Political Stability</li><li>Healthcare Access</li></ul>"
            }
        };

        const data = content[type];

        // Animate
        info.style.opacity = '0.5';
        setTimeout(() => {
            info.style.background = data.bg;
            info.style.borderColor = data.color;
            info.innerHTML = `
                <h4 style="margin-top:0; color:${data.color}; border-bottom: 1px solid ${data.color}40; padding-bottom: 0.5rem;">${data.title}</h4>
                <div style="font-size: 0.95rem; color: #334155;">${data.body}</div>
             `;
            info.style.opacity = '1';
        }, 150);

        // Highlight
        document.querySelectorAll('.wheel-slice').forEach(el => {
            el.style.opacity = '0.6';
            el.style.strokeWidth = '2';
            el.setAttribute('aria-pressed', 'false');
        });
        const active = document.getElementById(`slice-${type}`);
        if (active) {
            active.style.opacity = '1';
            active.style.strokeWidth = '4';
            active.setAttribute('aria-pressed', 'true');
        }
    }
};


/**
 * Epidemic Engine Navigation System
 * Handles sidebar navigation and dynamic content loading
 */

const APP_VERSION = 'v3.0.0';

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
    window.UI = {
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

function loadChapter(chapterId, updateHistory = true) {
    // Safeguard: Prevent accidental exit from active quiz
    // Safeguard: Auto-save active quiz if navigating away
    if (window.currentQuizEngine && !window.currentQuizEngine.isComplete) {
        if (typeof window.currentQuizEngine.saveLocalProgress === 'function') {
            window.currentQuizEngine.saveLocalProgress();
            // Optional: Toast notification that "Progress Saved"
            if (window.UI) window.UI.toast("Quiz progress saved in background.", "info");
        }
        window.currentQuizEngine = null; // Clear active state
    }

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
    let content = getChapterContent(chapterId);
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

                            ${c.lineList ? `
                            <div style="margin-bottom: 1rem;">
                                <strong style="color:var(--navy-primary);"><i class="ph-bold ph-table"></i> Investigation Data (Line List):</strong>
                                <div style="margin-top:0.5rem; overflow-x:auto; max-height:300px; border:1px solid #ddd;">
                                    <table style="width:100%; border-collapse:collapse; font-size:0.8rem;">
                                        <thead style="position:sticky; top:0; background:#f1f5f9;">
                                            <tr>
                                                ${Object.keys(c.lineList[0]).map(k => `<th style="padding:6px; text-transform:capitalize; border:1px solid #ddd;">${k.replace(/_/g, ' ')}</th>`).join('')}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            ${c.lineList.map((row, i) => `
                                                <tr style="background:${i % 2 === 0 ? '#fff' : '#f9fafb'};">
                                                    ${Object.values(row).map(v => `<td style="padding:6px; border:1px solid #ddd; text-align:center;">${v}</td>`).join('')}
                                                </tr>
                                            `).join('')}
                                        </tbody>
                                    </table>
                                </div>
                            </div>` : ''}

                            ${c.twoByTwo ? `
                            <div style="margin-bottom: 1rem;">
                                <strong style="color:var(--navy-primary);"><i class="ph-bold ph-grid-four"></i> Investigation Data (2x2 Table):</strong>
                                <div style="margin-top:0.5rem; display:flex; justify-content:center;">
                                    <table style="border-collapse:collapse; border:1px solid #ddd; background:#fff; font-size:0.9rem;">
                                        <thead>
                                            <tr style="background:#f1f5f9;">
                                                <th style="padding:8px; border:1px solid #ddd;">${c.twoByTwo.exposure}</th>
                                                <th style="padding:8px; border:1px solid #ddd;">Ill (Cases)</th>
                                                <th style="padding:8px; border:1px solid #ddd;">Well (Controls)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th style="padding:8px; border:1px solid #ddd; text-align:left; background:#f9fafb;">Exposed</th>
                                                <td style="padding:8px; border:1px solid #ddd; text-align:center; font-weight:bold; color:#ef4444;">${c.twoByTwo.a}</td>
                                                <td style="padding:8px; border:1px solid #ddd; text-align:center;">${c.twoByTwo.b}</td>
                                            </tr>
                                            <tr>
                                                <th style="padding:8px; border:1px solid #ddd; text-align:left; background:#f9fafb;">Unexposed</th>
                                                <td style="padding:8px; border:1px solid #ddd; text-align:center;">${c.twoByTwo.c}</td>
                                                <td style="padding:8px; border:1px solid #ddd; text-align:center;">${c.twoByTwo.d}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>` : ''}

                            ${c.counterfactual ? `
                            <div style="margin-bottom: 1rem; font-size: 0.9rem;">
                                <strong style="color:var(--navy-primary);"><i class="ph-bold ph-arrows-merge"></i> Counterfactual ("What If"):</strong>
                                <div style="background: #fff; border: 1px solid #eee; padding: 0.5rem; border-radius: 4px; border-left: 2px solid #3b82f6; font-style: italic; margin-top:0.25rem;">${c.counterfactual}</div>
                            </div>` : ''}

                             ${c.questions ? `
                            <div style="margin-top: 1rem;">
                                <strong><i class="ph-bold ph-question"></i> Discussion & Analysis:</strong>
                                ${c.questions.map(q => `
                                    <div style="margin-top: 0.75rem; font-size: 0.9rem; border-bottom:1px dotted #eee; padding-bottom:0.75rem;">
                                        <div style="font-weight:600; color:#333; margin-bottom:0.25rem;">Q: ${q.q}</div>
                                        ${q.hint ? `<div style="font-style:italic; color:#666; font-size:0.85rem; margin-bottom:0.25rem;">ℹ️ Hint: ${q.hint}</div>` : ''}
                                        
                                        ${c.isMegaCase ? `
                                        <details>
                                            <summary style="cursor:pointer; color:var(--accent-blue); font-size:0.85rem; font-weight:600;">Show Solution</summary>
                                            <div style="margin-top: 0.5rem; background:#f0fdf4; padding:0.5rem; border-radius:4px; border:1px solid #bbf7d0;">
                                                <div style="font-weight:bold; color:var(--accent-green);">A: ${q.a}</div>
                                                ${q.explanation ? `<div style="margin-top:0.25rem; font-size:0.85rem; color:#333; line-height:1.4;">${q.explanation}</div>` : ''}
                                            </div>
                                        </details>
                                        ` : `
                                        <div style="color: var(--accent-green); margin-top: 0.25rem;">A: ${q.a}</div>
                                        `}
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
                `}).join('');
            }

            // Initialize all Appendix Subtabs if engine exists
            if (window.appendixEngine) {
                if (chapterId === 'appendix' || chapterId === 'appendix-g' || chapterId === 'appendix-f') {
                    window.appendixEngine.initGlossary('glossary-root');
                    window.appendixEngine.initFlashcards('flashcard-root');
                    window.appendixEngine.initFormulas('formulas-root');
                    window.appendixEngine.initTables('tables-root');
                }
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
                `}).join('');
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

            // setupDiagnosticRendering() is now called via window.renderDiagnosticHub()
            if (typeof window.renderDiagnosticHub === 'function') {
                window.renderDiagnosticHub();
            }



        }, 100);
    }

    // Auto-Resume Logic for Quizzes
    if (window.startQuiz) {
        let resumeQuizId = null;
        if (chapterId === 'quiz_part1') resumeQuizId = 'part1';
        if (chapterId === 'quiz_part2') resumeQuizId = 'part2';
        if (chapterId === 'quiz_part3') resumeQuizId = 'part3';

        if (resumeQuizId) {
            const saved = localStorage.getItem('quiz_progress_' + resumeQuizId);
            if (saved) {
                // Check if not complete
                try {
                    const parsed = JSON.parse(saved);
                    if (!parsed.isComplete) {
                        setTimeout(() => window.startQuiz(resumeQuizId), 50);
                    }
                } catch (e) { console.error('Error parsing quiz progress to resume', e); }
            }
        }
    }

    // Auto-Resume Logic for Simulations
    if (chapterId === 'simulation' && window.startSimulationExam) {
        // Check for any active simulation exam
        for (let i = 1; i <= 4; i++) {
            const key = 'quiz_progress_sim_exam_' + i; // Assuming ID format used by simulation
            const saved = localStorage.getItem(key);
            if (saved) {
                try {
                    const parsed = JSON.parse(saved);
                    if (!parsed.isComplete) {
                        // Found an active exam, resume it
                        setTimeout(() => window.startSimulationExam(i), 50);
                        break; // Resume the first one found (or we could track timestamp for most recent)
                    }
                } catch (e) { }
            }
        }
    }

    // Scroll to top
    const mainContent = document.querySelector('.main-content');
    if (mainContent) {
        mainContent.scrollTop = 0;
    }

    // Render Next Chapter Navigation
    renderChapterNav(chapterId);
}

/**
 * Renders a navigation footer with 'Next Chapter' button
 */
function renderChapterNav(currentId) {
    const navItems = Array.from(document.querySelectorAll('.nav-item'));
    const currentIndex = navItems.findIndex(item => item.getAttribute('data-chapter') === currentId);

    if (currentIndex === -1 || currentIndex >= navItems.length - 1) return;

    const nextItem = navItems[currentIndex + 1];
    const nextId = nextItem.getAttribute('data-chapter');
    const nextTitle = nextItem.innerText.replace(/^[0-9A-Z.]+\s/, ''); // Clean title

    const container = document.getElementById('content-container');
    if (!container) return;

    const navHtml = `
        <div class="chapter-footer-nav" style="margin-top: 4rem; padding: 2rem; border: 2px solid black; border-radius: 12px; background: white; box-shadow: 4px 4px 0 black; display: flex; justify-content: space-between; align-items: center;">
            <div style="text-align: left;">
                <span style="font-size: 0.8rem; text-transform: uppercase; font-weight: 800; color: #64748b; letter-spacing: 0.1em;">Up Next</span>
                <h4 style="margin: 0.25rem 0 0; color: var(--navy-primary);">${nextTitle}</h4>
            </div>
            <button class="neo-btn primary" onclick="loadChapter('${nextId}')" style="display: flex; align-items: center; gap: 0.5rem;">
                Continue <i class="ph-bold ph-arrow-right"></i>
            </button>
        </div>
    `;

    container.insertAdjacentHTML('beforeend', navHtml);
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
    // console.log('Starting quiz for:', partId);

    // Check if new engine is loaded
    if (typeof QuizEngine === 'undefined') {
        console.error('QuizEngine not loaded. Please reloading or check build.');
        return;
    }

    // 1. Get Settings (Before wiping DOM)
    const diffSelect = document.getElementById('difficulty-' + partId);
    const difficulty = diffSelect ? diffSelect.value : 'balanced';

    // 2. Clear Screen for Full-Page Mode
    // This removes the Title, Intro Text, and Difficulty Selector
    const mainContainer = document.getElementById('content-container');
    if (!mainContainer) return;

    mainContainer.innerHTML = '<div id="quiz-fullscreen-root" style="height: 100%;"></div>';

    // Use centralized helper from QuizEngine
    const questions = QuizEngine.getQuestionsForPart(partId, difficulty);

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

    // Initialize unified QuizEngine
    window.currentQuizEngine = new QuizEngine({
        quizId: partId, // Pass ID for analytics
        mode: 'practice',
        containerId: 'quiz-fullscreen-root', // Target new Clean Div
        questions: questions,
        timeLimit: null, // No strict timer for practice
        enableInstantFeedback: true, // Show explanation immediately after answer
        returnChapter: partId.startsWith('quiz_') ? partId : 'quiz_' + partId
    });
    window.currentQuizEngine.start();
};

window.startSimulation = function () {
    window.startSimulationExam(1);
};

// Start one of several simulation exams
window.startSimulationExam = function (examNumber) {
    // console.log('Starting simulation exam', examNumber);

    if (typeof QuizEngine === 'undefined') {
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

    const { questions, boundaries } = QuizEngine.generateSimulation(difficulty);

    if (questions.length === 0) {
        if (typeof window.UI !== 'undefined') window.UI.toast("Failed to generate exam - check content data.", "error");
        else alert("Failed to generate exam - check content data.");

        // Restore content on failure
        loadChapter('simulation');
        return;
    }

    // Initialize unified QuizEngine in exam mode
    window.currentQuizEngine = new QuizEngine({
        quizId: 'simulation-' + examNumber, // Pass ID for analytics
        mode: 'simulation',
        containerId: 'sim-fullscreen-root', // Main container for exam
        questions: questions,
        sectionBoundaries: boundaries,
        timeLimit: 50 * 60, // 50 minutes
        returnChapter: 'simulation'
    });

    window.currentQuizEngine.start();
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
}

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

// Global Tab Visibility Controller
window.showTab = function (tabId) {
    // console.log("[EPIDEMIC ENGINE] Showing tab:", tabId);

    // Hide all tab contents
    document.querySelectorAll(".tab-content").forEach(el => {
        el.style.display = "none";
    });

    // Show target content
    const tabContent = document.getElementById(tabId);
    if (tabContent) {
        tabContent.style.display = "block";
    }

    // Update tab buttons
    document.querySelectorAll(".tabs .neo-btn.small").forEach(el => el.classList.remove("active"));

    // Set active button
    if (typeof event !== "undefined" && event && event.target && event.target.classList.contains("neo-btn")) {
        event.target.classList.add("active");
    } else {
        const btn = document.querySelector(`.tabs button[onclick*="'${tabId}'"]`);
        if (btn) btn.classList.add("active");
    }

    // Specialized Initializations
    if (tabId === "diagnostic") {
        if (typeof window.renderDiagnosticHub === 'function') {
            window.renderDiagnosticHub();
        }
    }

    if (window.appendixEngine) {
        if (tabId === "flashcards") {
            setTimeout(() => window.appendixEngine.initFlashcards("flashcard-root"), 50);
        }
        if (tabId === "glossary") {
            setTimeout(() => window.appendixEngine.initGlossary("glossary-root"), 50);
        }
        if (tabId === "formulas") {
            setTimeout(() => window.appendixEngine.initFormulas("formulas-root"), 50);
        }
        if (tabId === "tables") {
            setTimeout(() => window.appendixEngine.initTables("tables-root"), 50);
        }
    }
};

// Global Diagnostic Engine
window.renderDiagnosticHub = function () {
    const diagContainer = document.getElementById("diagnostic-container");
    if (!diagContainer) return;

    if (!window.APPENDIX_DATA || !window.APPENDIX_DATA.DIAGNOSTIC) {
        console.warn("[EPIDEMIC ENGINE] Diagnostic data missing from APPENDIX_DATA.");
        diagContainer.innerHTML = "<div class='neo-card' style='border-left:4px solid #ef4444;'>Error: Diagnostic data not loaded.</div>";
        return;
    }

    let html = `<div class="neo-card small" style="background: #f8fafc; border-left: 4px solid var(--accent-blue); padding: 1.5rem; margin-bottom: 2rem;">
        <h4 style="margin-top:0;">Key Metrics</h4>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-top: 1rem;">`;

    window.APPENDIX_DATA.DIAGNOSTIC.metrics.forEach(m => {
        html += `<div style="background: white; padding: 0.75rem; border-radius: 6px; border: 1px solid #e2e8f0;">
            <strong style="color: var(--accent-blue);">${m.name}</strong>
            <div style="font-family: monospace; font-size: 0.9rem; margin: 0.25rem 0; color: #334155;">${m.calc}</div>
            <div style="font-size: 0.8rem; color: #64748b;">${m.desc}</div>
        </div>`;
    });

    html += `</div></div> <h4 style="margin-top:2rem;">Mastery Checklist</h4>`;

    window.APPENDIX_DATA.DIAGNOSTIC.checklist.forEach(c => {
        html += `<div class="neo-card small" style="margin-top: 1rem;">
            <strong style="display:block; margin-bottom: 0.5rem; border-bottom: 1px solid #eee;">${c.category}</strong>
            ${c.items.map(item => `
                <label class="neo-check" style="display:block; margin: 0.25rem 0;">
                    <input type="checkbox"> <span>${item}</span>
                </label>
            `).join("")}
        </div>`;
    });

    diagContainer.innerHTML = html;
};

const INTERACTIVE_CASES_DATA = [

    // ========== MEGA-CASES (Advanced National-Level Scenarios) ==========

    {
        id: "MC1",
        title: "The School Cafeteria Outbreak",
        difficulty: "Advanced",
        description: "A multi-day outbreak at a middle school requires comprehensive epidemiological investigation including attack rate calculations, curve analysis, and control measures.",
        steps: [
            {
                id: "step1",
                text: "<h6>Step 1: Initial Report</h6><p>On Wednesday, the school nurse reports that 45 of 300 students who ate lunch on Monday developed nausea, vomiting, and diarrhea starting Tuesday morning. Most recovered within 24 hours.</p><p><strong>Calculate the Attack Rate.</strong></p>",
                options: [
                    { text: "AR = 15%", feedback: "Correct! 45/300 × 100 = 15%", correct: true },
                    { text: "AR = 45%", feedback: "Incorrect. You need to divide cases by total exposed, not just count cases.", correct: false },
                    { text: "AR = 30%", feedback: "Incorrect. Check your calculation: 45/300.", correct: false }
                ]
            },
            {
                id: "step2",
                text: "<h6>Step 2: Incubation Period</h6><p>Lunch was served Monday 12:00 PM. First case onset: Monday 11:00 PM (11 hours). Last case onset: Tuesday 2:00 PM (26 hours). Peak: Tuesday 8:00 AM (20 hours).</p><p><strong>Which pathogen fits this incubation period?</strong></p>",
                options: [
                    { text: "Staphylococcus aureus (1-6 hours)", feedback: "Incorrect. Too short.", correct: false },
                    { text: "Norovirus (12-48 hours)", feedback: "Correct! The 11-26 hour range with peak at 20 hours fits Norovirus perfectly.", correct: true },
                    { text: "Salmonella (6-72 hours, median 12-36)", feedback: "Possible, but Norovirus is more likely given the short duration and vomiting prominence.", correct: false }
                ]
            },
            {
                id: "step3",
                text: "<h6>Step 3: Food History</h6><p>Students who ate the chicken salad: 60 students, 40 ill (AR = 67%). Students who did NOT eat chicken salad: 240 students, 5 ill (AR = 2%).</p><p><strong>Calculate the Relative Risk (RR).</strong></p>",
                options: [
                    { text: "RR = 33.5", feedback: "Correct! RR = 67% / 2% = 33.5. Students who ate chicken salad were 33.5 times more likely to get sick.", correct: true },
                    { text: "RR = 2.0", feedback: "Incorrect. You may have reversed the calculation.", correct: false },
                    { text: "RR = 0.67", feedback: "Incorrect. Check the formula: AR_exposed / AR_unexposed.", correct: false }
                ]
            },
            {
                id: "step4",
                text: "<h6>Step 4: Control Measures</h6><p>Investigation reveals the chicken salad was left at room temperature for 3 hours before serving. A food handler was ill the previous week.</p><p><strong>What is the PRIMARY control measure?</strong></p>",
                options: [
                    { text: "Close the school for deep cleaning", feedback: "Incorrect. Norovirus outbreak is over; this is excessive.", correct: false },
                    { text: "Exclude ill food handlers, enforce time/temperature controls, and educate staff on proper food handling", feedback: "Correct! Multi-pronged approach addresses the source and prevents recurrence.", correct: true },
                    { text: "Administer antibiotics to all students", feedback: "Incorrect. Norovirus is viral; antibiotics don't work.", correct: false }
                ]
            }
        ]
    },

    {
        id: "MC2",
        title: "The Swimming Pool Cryptosporidiosis",
        difficulty: "Advanced",
        description: "A community pool outbreak requires understanding of chlorine-resistant pathogens, prolonged incubation periods, and environmental controls.",
        steps: [
            {
                id: "step1",
                text: "<h6>Step 1: Pattern Recognition</h6><p>Over 2 weeks, 80 children who swam at a community pool developed watery diarrhea lasting 1-2 weeks. Onset ranged from 2-10 days after swimming, with most cases appearing 7 days post-exposure.</p><p><strong>What type of outbreak curve would you expect?</strong></p>",
                options: [
                    { text: "Point Source (sharp peak)", feedback: "Incorrect. The wide range (2-10 days) suggests continuous exposure.", correct: false },
                    { text: "Continuous Common Source (plateau)", feedback: "Correct! Continuous exposure over 2 weeks with a long incubation period creates a plateau pattern.", correct: true },
                    { text: "Propagated (successive waves)", feedback: "Incorrect. Cryptosporidium is waterborne, not person-to-person in this context.", correct: false }
                ]
            },
            {
                id: "step2",
                text: "<h6>Step 2: Agent Identification</h6><p>Stool samples show oocysts. The pathogen is resistant to standard chlorine levels. Incubation: 2-10 days (median 7). Duration: 1-2 weeks.</p><p><strong>What is the most likely agent?</strong></p>",
                options: [
                    { text: "Giardia lamblia", feedback: "Incorrect. Giardia has a longer incubation (1-3 weeks).", correct: false },
                    { text: "Cryptosporidium parvum", feedback: "Correct! Chlorine-resistant, 2-10 day incubation, prolonged diarrhea, and oocysts all point to Crypto.", correct: true },
                    { text: "E. coli O157:H7", feedback: "Incorrect. E. coli is chlorine-sensitive and has shorter incubation.", correct: false }
                ]
            },
            {
                id: "step3",
                text: "<h6>Step 3: Attack Rate Calculation</h6><p>Pool attendance records show 400 children swam during the 2-week period. 80 became ill.</p><p><strong>What is the attack rate?</strong></p>",
                options: [
                    { text: "AR = 20%", feedback: "Correct! 80/400 × 100 = 20%", correct: true },
                    { text: "AR = 25%", feedback: "Incorrect. Recheck: 80/400.", correct: false },
                    { text: "AR = 80%", feedback: "Incorrect. You forgot to divide by total exposed.", correct: false }
                ]
            },
            {
                id: "step4",
                text: "<h6>Step 4: Control Measures</h6><p>Standard chlorination failed. What is the MOST effective control?</p>",
                options: [
                    { text: "Increase chlorine to maximum levels", feedback: "Incorrect. Cryptosporidium is chlorine-resistant even at high levels.", correct: false },
                    { text: "Close pool, hyperchlorinate or use UV treatment, enforce 'no swimming when ill' policy, and improve filtration", feedback: "Correct! Comprehensive approach: UV kills Crypto, policy prevents contamination, filtration removes oocysts.", correct: true },
                    { text: "Ban children under 5 from the pool", feedback: "Incorrect. This doesn't address the contamination source.", correct: false }
                ]
            }
        ]
    },

    {
        id: "MC3",
        title: "The Restaurant Hepatitis A Cluster",
        difficulty: "Advanced",
        description: "A foodborne hepatitis A outbreak with a long incubation period requires understanding of case definitions, secondary transmission, and vaccination strategies.",
        steps: [
            {
                id: "step1",
                text: "<h6>Step 1: Case Definition</h6><p>15 patrons of a restaurant developed jaundice, dark urine, and elevated liver enzymes 28-35 days after dining. All tested positive for Hepatitis A IgM.</p><p><strong>What case classification applies?</strong></p>",
                options: [
                    { text: "Probable cases (clinical symptoms only)", feedback: "Incorrect. They have lab confirmation.", correct: false },
                    { text: "Confirmed cases (clinical + lab confirmation)", feedback: "Correct! Symptoms + positive IgM = confirmed Hepatitis A.", correct: true },
                    { text: "Suspected cases (exposure only)", feedback: "Incorrect. They have both symptoms and lab confirmation.", correct: false }
                ]
            },
            {
                id: "step2",
                text: "<h6>Step 2: Source Investigation</h6><p>A food handler tested positive for Hepatitis A. They worked while symptomatic (jaundice) for 3 days before being sent home. They handled ready-to-eat foods without gloves.</p><p><strong>What is the mode of transmission?</strong></p>",
                options: [
                    { text: "Airborne", feedback: "Incorrect. Hepatitis A is fecal-oral.", correct: false },
                    { text: "Fecal-oral (contaminated food)", feedback: "Correct! Food handler with poor hand hygiene contaminated food.", correct: true },
                    { text: "Bloodborne", feedback: "Incorrect. While Hep A is in blood, transmission here was via contaminated food.", correct: false }
                ]
            },
            {
                id: "step3",
                text: "<h6>Step 3: Secondary Transmission Risk</h6><p>Hepatitis A incubation: 15-50 days (average 28). Infectious period: 2 weeks before to 1 week after jaundice onset.</p><p><strong>What is the risk of secondary household transmission?</strong></p>",
                options: [
                    { text: "Low - Hepatitis A is not contagious person-to-person", feedback: "Incorrect. Hep A IS contagious person-to-person via fecal-oral route.", correct: false },
                    { text: "High - Close contacts are at risk, especially if hygiene is poor", feedback: "Correct! Household members can be infected through shared bathrooms, poor handwashing.", correct: true },
                    { text: "Moderate - Only if blood contact occurs", feedback: "Incorrect. Fecal-oral is the primary route, not blood.", correct: false }
                ]
            },
            {
                id: "step4",
                text: "<h6>Step 4: Post-Exposure Prophylaxis</h6><p>200 patrons ate at the restaurant during the food handler's infectious period. Most are now past the 2-week window for immune globulin.</p><p><strong>What is the best intervention?</strong></p>",
                options: [
                    { text: "Hepatitis A vaccine for all exposed patrons (even if >2 weeks post-exposure)", feedback: "Correct! Vaccine can still provide protection and prevent future exposure. Also educate on symptoms and hygiene.", correct: true },
                    { text: "Immune globulin only (even though window passed)", feedback: "Incorrect. IG is only effective within 2 weeks. Vaccine is better at this point.", correct: false },
                    { text: "No intervention needed - too late", feedback: "Incorrect. Vaccine can still help and prevents future infections.", correct: false }
                ]
            }
        ]
    },

    {
        id: "MC4",
        title: "The Legionnaires' Disease Hotel Outbreak",
        difficulty: "Advanced",
        description: "An environmental outbreak requiring understanding of aerosol transmission, environmental sampling, and engineering controls.",
        steps: [
            {
                id: "step1",
                text: "<h6>Step 1: Clinical Presentation</h6><p>12 hotel guests developed severe pneumonia 2-10 days after staying at the hotel. All required hospitalization. Urine antigen tests confirmed Legionella pneumophila.</p><p><strong>What is the most likely source?</strong></p>",
                options: [
                    { text: "Person-to-person transmission from an ill guest", feedback: "Incorrect. Legionnaires' disease is NOT transmitted person-to-person.", correct: false },
                    { text: "Contaminated water system (cooling towers, hot tubs, showers)", feedback: "Correct! Legionella grows in warm water systems and spreads via aerosols.", correct: true },
                    { text: "Contaminated food in the hotel restaurant", feedback: "Incorrect. Legionella is waterborne/airborne, not foodborne.", correct: false }
                ]
            },
            {
                id: "step2",
                text: "<h6>Step 2: Environmental Investigation</h6><p>Water samples from the hotel's cooling tower, hot tub, and shower heads are collected. Which is MOST likely to be positive?</p>",
                options: [
                    { text: "Cooling tower", feedback: "Correct! Cooling towers are the #1 source of Legionnaires' outbreaks due to aerosolization and ideal growth temperature (25-42°C).", correct: true },
                    { text: "Cold water tap", feedback: "Incorrect. Legionella prefers warm water (25-42°C).", correct: false },
                    { text: "Swimming pool (chlorinated)", feedback: "Incorrect. Proper chlorination kills Legionella.", correct: false }
                ]
            },
            {
                id: "step3",
                text: "<h6>Step 3: Attack Rate</h6><p>500 guests stayed at the hotel during the exposure period. 12 developed Legionnaires' disease.</p><p><strong>Calculate the attack rate.</strong></p>",
                options: [
                    { text: "AR = 2.4%", feedback: "Correct! 12/500 × 100 = 2.4%", correct: true },
                    { text: "AR = 12%", feedback: "Incorrect. You forgot to divide by total exposed.", correct: false },
                    { text: "AR = 0.24%", feedback: "Incorrect. Check your percentage calculation.", correct: false }
                ]
            },
            {
                id: "step4",
                text: "<h6>Step 4: Control Measures</h6><p>What is the PRIMARY engineering control for Legionella in water systems?</p>",
                options: [
                    { text: "Antibiotics in the water supply", feedback: "Incorrect. This is not practical or safe.", correct: false },
                    { text: "Superheat water to >60°C and flush system, maintain hot water >50°C and cold <20°C, regular cleaning/disinfection of cooling towers", feedback: "Correct! Temperature control and maintenance are key engineering controls.", correct: true },
                    { text: "Close the hotel permanently", feedback: "Incorrect. Proper remediation can eliminate the risk.", correct: false }
                ]
            }
        ]
    },

    {
        id: "MC5",
        title: "The Daycare E. coli O157:H7 Outbreak",
        difficulty: "Advanced",
        description: "A person-to-person outbreak in a daycare requiring understanding of HUS complications, exclusion policies, and secondary attack rates.",
        steps: [
            {
                id: "step1",
                text: "<h6>Step 1: Index Case</h6><p>A 3-year-old develops bloody diarrhea after a petting zoo visit. Stool culture: E. coli O157:H7. The child attends daycare.</p><p><strong>What is the IMMEDIATE action?</strong></p>",
                options: [
                    { text: "Wait for more cases before acting", feedback: "Incorrect. E. coli O157:H7 is highly dangerous; immediate action is needed.", correct: false },
                    { text: "Exclude the child from daycare immediately, notify parents of all children, and begin active surveillance", feedback: "Correct! Rapid exclusion prevents secondary transmission. E. coli O157:H7 can cause HUS (hemolytic uremic syndrome).", correct: true },
                    { text: "Prescribe antibiotics to all daycare children", feedback: "Incorrect. Antibiotics may INCREASE HUS risk in E. coli O157:H7.", correct: false }
                ]
            },
            {
                id: "step2",
                text: "<h6>Step 2: Secondary Cases</h6><p>Over the next week, 5 more children (out of 30 total) develop diarrhea. All test positive for E. coli O157:H7. None visited the petting zoo.</p><p><strong>What is the secondary attack rate?</strong></p>",
                options: [
                    { text: "SAR = 17.2%", feedback: "Correct! 5 secondary cases / 29 susceptible contacts × 100 = 17.2%", correct: true },
                    { text: "SAR = 16.7%", feedback: "Incorrect. Don't include the index case in the denominator.", correct: false },
                    { text: "SAR = 20%", feedback: "Incorrect. Check your calculation: 5/29.", correct: false }
                ]
            },
            {
                id: "step3",
                text: "<h6>Step 3: HUS Complication</h6><p>One child develops hemolytic uremic syndrome (HUS): hemolytic anemia, thrombocytopenia, and acute kidney injury.</p><p><strong>What percentage of E. coli O157:H7 cases develop HUS?</strong></p>",
                options: [
                    { text: "5-10%", feedback: "Correct! About 5-10% of E. coli O157:H7 cases progress to HUS, especially in young children.", correct: true },
                    { text: "50%", feedback: "Incorrect. HUS is serious but not that common.", correct: false },
                    { text: "<1%", feedback: "Incorrect. HUS is more common than this in E. coli O157:H7.", correct: false }
                ]
            },
            {
                id: "step4",
                text: "<h6>Step 4: Return-to-Daycare Criteria</h6><p>When can an infected child return to daycare?</p>",
                options: [
                    { text: "After symptoms resolve (no diarrhea for 24 hours)", feedback: "Incorrect. Children can still shed bacteria after symptoms resolve.", correct: false },
                    { text: "After 2 consecutive negative stool cultures, at least 24 hours apart, after diarrhea resolves", feedback: "Correct! This ensures the child is no longer shedding E. coli O157:H7.", correct: true },
                    { text: "After completing a course of antibiotics", feedback: "Incorrect. Antibiotics are NOT recommended for E. coli O157:H7 (may increase HUS risk).", correct: false }
                ]
            }
        ]
    },

    {
        id: "MC6",
        title: "The Measles School Outbreak",
        difficulty: "Advanced",
        description: "A highly contagious airborne outbreak requiring understanding of R0, herd immunity, and vaccination strategies.",
        steps: [
            {
                id: "step1",
                text: "<h6>Step 1: Index Case</h6><p>An unvaccinated 12-year-old returns from international travel with fever, cough, and a rash. Diagnosed with measles. The student attended school for 2 days while infectious.</p><p><strong>What is measles' basic reproduction number (R0)?</strong></p>",
                options: [
                    { text: "R0 = 2-3 (like flu)", feedback: "Incorrect. Measles is MUCH more contagious.", correct: false },
                    { text: "R0 = 12-18 (one of the most contagious diseases)", feedback: "Correct! Measles R0 is 12-18, meaning one case can infect 12-18 susceptible people.", correct: true },
                    { text: "R0 = 5-7 (like chickenpox)", feedback: "Incorrect. Measles is more contagious than chickenpox.", correct: false }
                ]
            },
            {
                id: "step2",
                text: "<h6>Step 2: Exposure Assessment</h6><p>The school has 500 students. Vaccination records show 450 are fully vaccinated (2 doses MMR), 30 have 1 dose, and 20 are unvaccinated.</p><p><strong>How many students are susceptible?</strong></p>",
                options: [
                    { text: "50 students (1 dose + unvaccinated)", feedback: "Correct! 30 with 1 dose + 20 unvaccinated = 50 susceptible. 2 doses = 97% effective.", correct: true },
                    { text: "20 students (only unvaccinated)", feedback: "Incorrect. Students with only 1 dose are also at risk (1 dose = ~93% effective).", correct: false },
                    { text: "500 students (everyone)", feedback: "Incorrect. Vaccinated students have protection.", correct: false }
                ]
            },
            {
                id: "step3",
                text: "<h6>Step 3: Herd Immunity Threshold</h6><p>To achieve herd immunity for measles (R0 = 15), what percentage of the population must be immune?</p><p>Formula: HIT = (1 - 1/R0) Ã— 100</p>",
                options: [
                    { text: "93-95%", feedback: "Correct! HIT = (1 - 1/15) × 100 = 93.3%. This is why measles outbreaks occur when vaccination rates drop below 95%.", correct: true },
                    { text: "70-80%", feedback: "Incorrect. This works for less contagious diseases, but measles needs higher coverage.", correct: false },
                    { text: "50%", feedback: "Incorrect. Much too low for measles.", correct: false }
                ]
            },
            {
                id: "step4",
                text: "<h6>Step 4: Post-Exposure Prophylaxis</h6><p>Unvaccinated students were exposed 3 days ago. What is the best intervention?</p>",
                options: [
                    { text: "MMR vaccine within 72 hours of exposure", feedback: "Correct! MMR vaccine within 72 hours can prevent or modify disease. After 72 hours, use immune globulin for high-risk individuals.", correct: true },
                    { text: "Antibiotics", feedback: "Incorrect. Measles is viral; antibiotics don't work.", correct: false },
                    { text: "Quarantine only, no medical intervention", feedback: "Incorrect. Vaccine can still help if given quickly.", correct: false }
                ]
            }
        ]
    },

    {
        id: "MC7",
        title: "The Nursing Home Influenza Outbreak",
        difficulty: "Advanced",
        description: "A respiratory outbreak in a vulnerable population requiring understanding of vaccine effectiveness, antiviral prophylaxis, and cohorting.",
        steps: [
            {
                id: "step1",
                text: "<h6>Step 1: Outbreak Recognition</h6><p>A nursing home with 100 residents reports 15 cases of fever, cough, and myalgia over 3 days. Rapid flu tests: positive for Influenza A.</p><p><strong>What is the attack rate so far?</strong></p>",
                options: [
                    { text: "AR = 15%", feedback: "Correct! 15/100 × 100 = 15%. But this will likely increase as the outbreak progresses.", correct: true },
                    { text: "AR = 30%", feedback: "Incorrect. Currently 15 cases out of 100.", correct: false },
                    { text: "AR = 5%", feedback: "Incorrect. Check your calculation.", correct: false }
                ]
            },
            {
                id: "step2",
                text: "<h6>Step 2: Vaccination Status</h6><p>Records show 80 residents received flu vaccine this season. Of the 15 ill residents, 10 were vaccinated and 5 were not.</p><p><strong>Calculate Vaccine Effectiveness (VE).</strong></p><p>VE = (ARu - ARv) / ARu × 100</p>",
                options: [
                    { text: "VE = 37.5%", feedback: "Incorrect. VE = (25-12.5)/25 × 100 = 50%. (ARu = 5/20 = 25%, ARv = 10/80 = 12.5%).", correct: false },
                    { text: "VE = 50%", feedback: "Correct! ARu = 25%, ARv = 12.5%, VE = (25-12.5)/25 × 100 = 50%", correct: true },
                    { text: "VE = 75%", feedback: "Incorrect. Recheck the formula and calculations.", correct: false }
                ]
            },
            {
                id: "step3",
                text: "<h6>Step 3: Antiviral Prophylaxis</h6><p>The outbreak is ongoing. What is the recommendation for uninfected residents?</p>",
                options: [
                    { text: "No intervention - let it run its course", feedback: "Incorrect. Elderly residents are at high risk for complications.", correct: false },
                    { text: "Antiviral prophylaxis (oseltamivir) for all uninfected residents, especially unvaccinated", feedback: "Correct! Prophylactic antivirals can prevent infection during an outbreak in high-risk settings.", correct: true },
                    { text: "Antibiotics for all residents", feedback: "Incorrect. Influenza is viral; antibiotics don't work (unless treating secondary bacterial pneumonia).", correct: false }
                ]
            },
            {
                id: "step4",
                text: "<h6>Step 4: Infection Control</h6><p>What is the MOST important infection control measure?</p>",
                options: [
                    { text: "Cohort ill residents together, use droplet precautions, restrict admissions/transfers, vaccinate staff", feedback: "Correct! Multi-pronged approach: cohorting prevents spread, droplet precautions protect staff, vaccination protects everyone.", correct: true },
                    { text: "Airborne isolation for all residents", feedback: "Incorrect. Influenza is droplet, not airborne (except during aerosol-generating procedures).", correct: false },
                    { text: "Close the facility to all visitors", feedback: "Partially correct but not sufficient. Need cohorting and precautions.", correct: false }
                ]
            }
        ]
    },

    {
        id: "MC8",
        title: "The Salmonella Turtle-Associated Outbreak",
        difficulty: "Advanced",
        description: "A multi-state zoonotic outbreak requiring understanding of case-control studies, odds ratios, and public health messaging.",
        steps: [
            {
                id: "step1",
                text: "<h6>Step 1: Multi-State Pattern</h6><p>CDC receives reports of Salmonella infections in children across 15 states. All isolates have the same PFGE pattern (genetic fingerprint).</p><p><strong>What does the identical PFGE pattern suggest?</strong></p>",
                options: [
                    { text: "Unrelated sporadic cases", feedback: "Incorrect. Identical PFGE patterns indicate a common source.", correct: false },
                    { text: "A common source outbreak (same contaminated product/animal)", feedback: "Correct! PFGE (pulsed-field gel electrophoresis) matching indicates cases are related.", correct: true },
                    { text: "Person-to-person transmission chain", feedback: "Incorrect. While possible, the multi-state distribution suggests a distributed product.", correct: false }
                ]
            },
            {
                id: "step2",
                text: "<h6>Step 2: Case-Control Study</h6><p>A case-control study is conducted. Cases: 50 ill children. Controls: 100 healthy children matched by age and location.</p><p>Exposure to pet turtles: Cases = 40 exposed, 10 not. Controls = 20 exposed, 80 not.</p><p><strong>Calculate the Odds Ratio (OR).</strong></p>",
                options: [
                    { text: "OR = 16", feedback: "Correct! OR = (40×80)/(10×20) = 3200/200 = 16. Children with turtles had 16 times the odds of infection.", correct: true },
                    { text: "OR = 4", feedback: "Incorrect. Recheck your calculation: (a×d)/(b×c).", correct: false },
                    { text: "OR = 2", feedback: "Incorrect. Check the 2×2 table setup.", correct: false }
                ]
            },
            {
                id: "step3",
                text: "<h6>Step 3: Biological Plausibility</h6><p>Why are small turtles (<4 inches) a Salmonella risk?</p>",
                options: [
                    { text: "Small turtles are more likely to bite", feedback: "Incorrect. The risk is not from bites.", correct: false },
                    { text: "Small turtles naturally carry Salmonella in their intestines and on their shells; children often put them in their mouths", feedback: "Correct! Reptiles are natural Salmonella carriers. Small turtles are mouthing hazards for young children.", correct: true },
                    { text: "Small turtles are fed contaminated food", feedback: "Incorrect. Turtles naturally carry Salmonella.", correct: false }
                ]
            },
            {
                id: "step4",
                text: "<h6>Step 4: Public Health Action</h6><p>What is the appropriate public health response?</p>",
                options: [
                    { text: "Ban on sale of turtles <4 inches (already exists via FDA), public education on reptile-associated Salmonella, hand hygiene messaging", feedback: "Correct! The FDA banned small turtle sales in 1975, but illegal sales continue. Education is key.", correct: true },
                    { text: "Mandatory Salmonella testing of all pet turtles", feedback: "Incorrect. Not practical; turtles shed Salmonella intermittently.", correct: false },
                    { text: "Antibiotics for all turtle owners", feedback: "Incorrect. Prophylactic antibiotics are not indicated.", correct: false }
                ]
            }
        ]
    },

    {
        id: "MC9",
        title: "The Listeria Cantaloupe Outbreak",
        difficulty: "Advanced",
        description: "A deadly foodborne outbreak requiring understanding of high-risk populations, long incubation periods, and food recalls.",
        steps: [
            {
                id: "step1",
                text: "<h6>Step 1: High-Risk Population</h6><p>33 cases of listeriosis are reported across 12 states. 30 patients are pregnant women, elderly (>65), or immunocompromised. 7 deaths occur.</p><p><strong>What is the case-fatality rate?</strong></p>",
                options: [
                    { text: "CFR = 21.2%", feedback: "Correct! 7 deaths / 33 cases × 100 = 21.2%. Listeria has one of the highest CFRs of foodborne pathogens.", correct: true },
                    { text: "CFR = 7%", feedback: "Incorrect. You calculated deaths as a percentage of the population, not cases.", correct: false },
                    { text: "CFR = 33%", feedback: "Incorrect. Recheck: 7/33.", correct: false }
                ]
            },
            {
                id: "step2",
                text: "<h6>Step 2: Incubation Period</h6><p>Listeria has an unusually long incubation period: 1-4 weeks (can be up to 70 days for invasive disease).</p><p><strong>Why does this complicate outbreak investigation?</strong></p>",
                options: [
                    { text: "Patients may not remember what they ate weeks ago; contaminated food may be gone", feedback: "Correct! Long incubation makes recall difficult and food may be consumed/discarded.", correct: true },
                    { text: "It doesn't complicate investigation", feedback: "Incorrect. Long incubation is a major challenge.", correct: false },
                    { text: "Patients are no longer infectious", feedback: "Incorrect. Listeria is foodborne, not person-to-person anyway.", correct: false }
                ]
            },
            {
                id: "step3",
                text: "<h6>Step 3: Source Identification</h6><p>Whole genome sequencing (WGS) links all cases. Traceback investigation identifies cantaloupes from a single farm.</p><p><strong>Why are cantaloupes a Listeria risk?</strong></p>",
                options: [
                    { text: "Netted rind can harbor bacteria; often eaten without cooking; can be contaminated by soil", feedback: "Correct! The rough rind traps bacteria, and cantaloupes are eaten raw. Listeria can grow at refrigerator temperatures.", correct: true },
                    { text: "Cantaloupes are acidic", feedback: "Incorrect. Cantaloupes are not particularly acidic, and Listeria can tolerate some acidity.", correct: false },
                    { text: "Cantaloupes are always contaminated", feedback: "Incorrect. Contamination is from poor agricultural/packing practices.", correct: false }
                ]
            },
            {
                id: "step4",
                text: "<h6>Step 4: Recall and Prevention</h6><p>What is the appropriate action?</p>",
                options: [
                    { text: "Voluntary recall of implicated cantaloupes, public warning to high-risk groups, investigation of farm practices (sanitation, water sources)", feedback: "Correct! Recall removes product, warning protects vulnerable populations, farm investigation prevents recurrence.", correct: true },
                    { text: "Ban all cantaloupe sales nationwide", feedback: "Incorrect. Only implicated farm's products need recall.", correct: false },
                    { text: "Antibiotics for all cantaloupe consumers", feedback: "Incorrect. Prophylactic antibiotics not indicated.", correct: false }
                ]
            }
        ]
    },

    {
        id: "MC10",
        title: "The Pertussis Daycare Outbreak",
        difficulty: "Advanced",
        description: "A vaccine-preventable disease outbreak requiring understanding of waning immunity, cocooning strategy, and antibiotic prophylaxis.",
        steps: [
            {
                id: "step1",
                text: "<h6>Step 1: Index Case</h6><p>A 2-month-old infant (too young for full vaccination) develops severe coughing fits (paroxysms) with inspiratory 'whoop' and post-tussive vomiting. PCR confirms Bordetella pertussis.</p><p><strong>Why are young infants at highest risk for severe pertussis?</strong></p>",
                options: [
                    { text: "They have no maternal antibodies", feedback: "Partially correct, but the main issue is lack of vaccination.", correct: false },
                    { text: "They are too young to be fully vaccinated (DTaP series starts at 2 months) and have the highest risk of complications (apnea, pneumonia, death)", feedback: "Correct! Infants <6 months are most vulnerable; they haven't completed the primary series.", correct: true },
                    { text: "Their immune systems are overactive", feedback: "Incorrect. The opposite is true.", correct: false }
                ]
            },
            {
                id: "step2",
                text: "<h6>Step 2: Source Investigation</h6><p>The infant's 8-year-old sibling attends daycare and has had a mild cough for 3 weeks. PCR: positive for pertussis. The sibling was fully vaccinated as an infant but hasn't had a booster.</p><p><strong>What does this demonstrate?</strong></p>",
                options: [
                    { text: "Vaccine failure (vaccine doesn't work)", feedback: "Incorrect. The vaccine works but immunity wanes over time.", correct: false },
                    { text: "Waning immunity - pertussis vaccine protection decreases over time, requiring boosters (Tdap at age 11-12)", feedback: "Correct! Pertussis immunity wanes 5-10 years after vaccination. Boosters are essential.", correct: true },
                    { text: "The sibling was never vaccinated", feedback: "Incorrect. The scenario states they were fully vaccinated as an infant.", correct: false }
                ]
            },
            {
                id: "step3",
                text: "<h6>Step 3: Cocooning Strategy</h6><p>What is the 'cocooning' strategy for pertussis prevention?</p>",
                options: [
                    { text: "Isolating sick infants in a separate room", feedback: "Incorrect. Cocooning refers to vaccination strategy.", correct: false },
                    { text: "Vaccinating all close contacts of infants (parents, siblings, grandparents, caregivers) with Tdap to create a protective 'cocoon'", feedback: "Correct! Cocooning protects vulnerable infants by vaccinating everyone around them.", correct: true },
                    { text: "Giving infants extra vaccine doses", feedback: "Incorrect. Infants follow the standard DTaP schedule.", correct: false }
                ]
            },
            {
                id: "step4",
                text: "<h6>Step 4: Post-Exposure Prophylaxis</h6><p>20 children at the daycare were exposed. What is the recommendation?</p>",
                options: [
                    { text: "Azithromycin prophylaxis for all close contacts, regardless of vaccination status; Tdap booster for those due", feedback: "Correct! Antibiotics prevent disease in exposed individuals. Vaccine booster provides long-term protection.", correct: true },
                    { text: "No intervention - pertussis is mild", feedback: "Incorrect. Pertussis can be severe in infants and prophylaxis prevents spread.", correct: false },
                    { text: "Quarantine only", feedback: "Incorrect. Antibiotic prophylaxis is recommended for close contacts.", correct: false }
                ]
            }
        ]
    },


    {
        id: "MC11",
        title: "Mastery Case: The National Nightmare",
        difficulty: "National",
        description: "The ultimate test of epidemiological judgment. This case requires data cleaning, stratified analysis to detect confounding, and identification of advanced biases.",
        steps: [
            {
                id: "step1",
                text: "<h6>Step 1: Data Cleaning</h6><p>You receive a raw line list for a suspected foodborne outbreak at a wedding. Before running stats, you sanity-check the data.</p><table class='table' style='width:100%; font-size:0.85rem; margin-bottom:1rem;'><thead><tr style='background:#eee'><th style='padding:4px;'>ID</th><th style='padding:4px;'>Meal Time</th><th style='padding:4px;'>Onset Time</th><th style='padding:4px;'>Symptoms</th></tr></thead><tbody><tr><td>001</td><td>2:00 PM</td><td>6:00 PM</td><td>Vomiting</td></tr><tr><td>002</td><td>2:00 PM</td><td>12:00 PM</td><td>Vomiting</td></tr><tr><td>003</td><td>2:00 PM</td><td>7:00 PM</td><td>Vomiting</td></tr></tbody></table><p><strong>Which record must be excluded/quarantined?</strong></p>",
                options: [
                    { text: "ID 001", feedback: "Incorrect. 4 hours incubation is consistent with Staph aureus.", correct: false },
                    { text: "ID 002", feedback: "Correct! ID 002 has an onset time (12:00 PM) BEFORE the exposure time (2:00 PM). This violates temporality and is likely a data entry error or a background case.", correct: true },
                    { text: "ID 003", feedback: "Incorrect. 5 hours incubation is consistent with Staph aureus.", correct: false }
                ]
            },
            {
                id: "step2",
                text: "<h6>Step 2: Crude Analysis</h6><p>You investigate a study linking <strong>Coffee Consumption</strong> to <strong>Pancreatic Cancer</strong>. The Crude Odds Ratio (OR) is <strong>3.0</strong> (p < 0.05).</p><p>However, you notice that coffee drinkers in the study are also much more likely to be <strong>Smokers</strong>. Smoking is a known cause of pancreatic cancer.</p><p><strong>What is the relationship between Smoking and Coffee here?</strong></p>",
                options: [
                    { text: "Smoking is an Effect Modifier.", feedback: "Incorrect. We haven't looked at strata yet, but this setup suggests confounding.", correct: false },
                    { text: "Smoking is a potential Confounder.", feedback: "Correct! It is associated with the exposure (Coffee), associated with the outcome (Cancer), and is not on the causal pathway.", correct: true },
                    { text: "Smoking is the Independent Variable.", feedback: "Incorrect. Coffee is the exposure of interest.", correct: false }
                ]
            },
            {
                id: "step3",
                text: "<h6>Step 3: Stratified Analysis</h6><p>You stratify the data by Smoking status.</p><ul><li><strong>Smokers Only:</strong> OR for Coffee = 1.0</li><li><strong>Non-Smokers Only:</strong> OR for Coffee = 1.0</li></ul><p><strong>Compare these stratum-specific odds ratios (1.0) to the crude odds ratio (3.0). What is your conclusion?</strong></p>",
                options: [
                    { text: "Effect Modification is present.", feedback: "Incorrect. Effect Modification would show DIFFERENT ORs in each stratum (e.g., 1.0 vs 5.0). Here they are the same (1.0).", correct: false },
                    { text: "Confounding is present.", feedback: "Correct! The crude OR (3.0) disappears when you control for smoking (OR 1.0). The association was purely due to confounding.", correct: true },
                    { text: "Coffee causes cancer only in smokers.", feedback: "Incorrect. The OR is 1.0 in smokers, meaning NO association.", correct: false }
                ]
            },
            {
                id: "step4",
                text: "<h6>Step 4: Adjustment</h6><p>Since confounding is present, you cannot report the Crude OR. Which statistical method should you use to report a single, summary Odds Ratio that accounts for the confounding?</p>",
                options: [
                    { text: "Pearson's Chi-Square Test", feedback: "Incorrect. This tests significance, it doesn't adjust for confounding.", correct: false },
                    { text: "Mantel-Haenszel Adjusted Odds Ratio", feedback: "Correct! The Mantel-Haenszel method calculates a weighted average of the stratum-specific ORs, effectively removing the confounding bias.", correct: true },
                    { text: "T-Test", feedback: "Incorrect. That compares means, not odds.", correct: false }
                ]
            },
            {
                id: "step5",
                text: "<h6>Step 5: Advanced Bias</h6><p>In a separate hospital-based Case-Control study, you find that controls (patients with broken legs) smoke less than the general population. This artificially inflates the association between smoking and disease in your study.</p><p><strong>What specific type of Selection Bias is this?</strong></p>",
                options: [
                    { text: "Recall Bias", feedback: "Incorrect. That is Information Bias.", correct: false },
                    { text: "Berkson's Bias (Admission Rate Bias)", feedback: "Correct! Hospital controls often have different exposure rates than the general community, leading to spurious associations.", correct: true },
                    { text: "Neyman Bias (Prevalence-Incidence Bias)", feedback: "Incorrect. That relates to survival/mortality.", correct: false }
                ]
            }
        ]
    },

    {
        id: "IC1",
        title: "The Wedding Reception Investigation",
        difficulty: "Intermediate",
        description: "Guests at a summer wedding fall ill with vomiting and diarrhea. Navigate the investigation steps from notification to control.",
        steps: [
            {
                id: "step1",
                text: "<h6>Step 1: Notification</h6><p>On Monday morning, the local health department receives calls from three different attendees of a wedding reception held on Saturday. They report severe nausea, vomiting, and some diarrhea starting Sunday night.</p><p><strong>What is your immediate priority?</strong></p>",
                options: [
                    { text: "Close the wedding venue immediately.", feedback: "Incorrect. You don't have enough evidence to implicate the venue yet.", correct: false },
                    { text: "Collect food samples from the dumpster.", feedback: "Incorrect. While useful later, confirming the diagnosis and establishing an outbreak is first.", correct: false },
                    { text: "Interview the callers to gather clinical details and establish a case definition.", feedback: "Correct. You need to know 'who, what, where, when' and confirm it's an outbreak.", correct: true }
                ]
            },
            {
                id: "step2",
                text: "<h6>Step 2: Case Finding</h6><p>You confirm 55 of 120 guests meet the case definition. Symptoms last 24-48 hours. Stool samples are negative for Salmonella and E. coli. The incubation period is 24-36 hours.</p><p><strong>What is the most likely agent?</strong></p>",
                options: [
                    { text: "Staphylococcus aureus", feedback: "Incorrect. Staph incubation is shorter (2-7 hours).", correct: false },
                    { text: "Norovirus", feedback: "Correct. The incubation (24-48h), duration, and symptoms (vomiting > diarrhea) are classic for Norovirus.", correct: true },
                    { text: "Giardia", feedback: "Incorrect. Incubation is 1-3 weeks.", correct: false }
                ]
            },
            {
                id: "step3",
                text: "<h6>Step 3: Epi Curve Analysis</h6><p>The Epi Curve shows a sharp peak on Monday morning, with a rapid decline. All cases ate at the reception.</p><p><strong>What type of outbreak is this?</strong></p>",
                options: [
                    { text: "Propagated", feedback: "Incorrect. Propagated would show waves of cases over time.", correct: false },
                    { text: "Point Source", feedback: "Correct. A single sharp peak within one incubation period indicates a point source exposure.", correct: true }
                ]
            },
            {
                id: "step4",
                text: "<h6>Step 4: Control Measures</h6><p>Food handlers are suspected. One server reported being ill on Friday but worked anyway.</p><p><strong>What is the best control measure?</strong></p>",
                options: [
                    { text: "Prescribe antibiotics to all guests.", feedback: "Incorrect. Norovirus is viral.", correct: false },
                    { text: "Exclude the ill food handler and disinfect surfaces with bleach.", feedback: "Correct. Exclusion stops the source; bleach kills Norovirus.", correct: true }
                ]
            }
        ]
    },
    {
        id: "IC2",
        title: "The Community Picnic Mystery (Mega-Case)",
        difficulty: "Advanced",
        description: "A comprehensive outbreak scenario covering Epi Curves, Exposure Windows, Stratified Analysis, and Confounding.",
        steps: [
            {
                id: "step1",
                text: "<h6>Step 1: The Pattern</h6><p>Three days after a large community picnic, your office is flooded with reports of fever, cramps, and diarrhea. You plot an Epi Curve of 100 cases. It shows a steep rise to a peak on Monday afternoon, followed by a gradual decline over the next few days. There are no secondary waves.</p><p><strong>What does this curve suggest?</strong></p>",
                options: [
                    { text: "Propagated outbreak (person-to-person).", feedback: "Incorrect. Propagated curves have multiple, progressively larger peaks.", correct: false },
                    { text: "Point Source outbreak (single exposure).", feedback: "Correct. The log-normal (bell) shape with a sharp rise and tail suggests a single common exposure.", correct: true },
                    { text: "Continuous Common Source.", feedback: "Incorrect. A continuous source would have a plateau, not a sharp peak.", correct: false }
                ]
            },
            {
                id: "step2",
                text: "<h6>Step 2: The Window</h6><p>The peak of cases occurred on Monday at 4:00 PM. The suspected pathogen is <em>Salmonella</em> (Incubation 12-48 hours, Median 28 hours). The picnic started Saturday at 11:00 AM and ended at 4:00 PM.</p><p><strong>Does the timing implicate the picnic?</strong></p>",
                options: [
                    { text: "No, the incubation period effectively rules out the picnic.", feedback: "Incorrect. Monday 4PM minus 28 hours is Sunday Noon. Wait, that's 28 hours. Let's calculate: Mon 4PM - 24h = Sun 4PM. -4h = Sun Noon. That's 28 hours. Picnic was Sat.", correct: false },
                    { text: "Yes. Monday 4PM minus 28 hours = Sunday Noon (Wait...). Let's re-calculate: Mon 4PM is ~52 hours after Sat Noon. That is slightly outside the median but within the max (48-72h for some strains). Actually, let's look closer. 12-36h is typical for Salmonella. If peak is Mon 4PM, exposure was likely Sun AM. The picnic was Saturday. This is tricky.", feedback: "Let's check the math. Sat 12PM to Sun 12PM (24h) to Mon 12PM (48h). Mon 4PM is 52 hours. This is a bit long for a median of 28h. Maybe it wasn't the picnic?", correct: false },
                    { text: "Wait, let's look at the data again. Peak Monday 4PM. Min Incubation 6h, Max 72h. If we subtract the median (28h) from Mon 4PM, we get Sunday 12:00 PM. The picnic was Saturday. The timing suggests the exposure might be LATER than the picnic, OR the incubation is longer.", feedback: "Correct. A strict median calculation points to Sunday. However, if we assume the Picnic IS the source, we might be dealing with a long-incubation pathogen or leftover food eaten Sunday.", correct: true }
                ]
            },
            {
                id: "step2_revised",
                text: "<h6>Step 2: Re-evaluating the Agent</h6><p>Okay, let's refine. Stool samples actually come back positive for <em>Campylobacter</em> (Incubation 2-5 days). Peak is Monday. Picnic was Saturday (2 days prior). </p><p><strong>Does this fit?</strong></p>",
                options: [
                    { text: "Yes, 2 days fits perfectly within the incubation period.", feedback: "Correct. Saturday to Monday is 48 hours. This aligns with Campylobacter.", correct: true },
                    { text: "No, it's too short.", feedback: "Incorrect. 48 hours is standard for Campy.", correct: false }
                ]
            },
            {
                id: "step3",
                text: "<h6>Step 3: The Cohort Study</h6><p>You conduct a cohort study. <br><strong>Chicken:</strong> AR(Ill)=40%, AR(Well)=10%. <br><strong>Salad:</strong> AR(Ill)=35%, AR(Well)=35%.</p><p><strong>Calculate the Risk Ratio (RR) for Chicken.</strong></p>",
                options: [
                    { text: "RR = 1.0", feedback: "Incorrect.", correct: false },
                    { text: "RR = 4.0", feedback: "Correct. 40% / 10% = 4.0. People who ate Chicken were 4 times more likely to get sick.", correct: true },
                    { text: "RR = 0.25", feedback: "Incorrect.", correct: false }
                ]
            },
            {
                id: "step4",
                text: "<h6>Step 4: Confounding?</h6><p>Almost everyone who ate Chicken also ate the <strong>Grilled Corn</strong>. You run a stratified analysis.</p><p><strong>Strata 1 (Did NOT eat Corn):</strong> RR for Chicken = 3.9.<br><strong>Strata 2 (Did eat Corn):</strong> RR for Chicken = 4.1.<br><strong>Crude RR for Chicken:</strong> 4.0.</p><p><strong>Is Corn a confounder?</strong></p>",
                options: [
                    { text: "Yes, because the stratum specific RRs are similar.", feedback: "Incorrect logic. If stratum RRs are similar to the crude, there is NO confounding.", correct: false },
                    { text: "No. The stratum-specific RRs (3.9, 4.1) are similar to the crude RR (4.0). Corn did not distort the relationship.", feedback: "Correct. This is not confounding. Chicken is the independent cause.", correct: true },
                    { text: "Yes, it is an Effect Modifier.", feedback: "Incorrect. RRs are not significantly different between strata.", correct: false }
                ]
            },
            {
                id: "step5",
                text: "<h6>Step 5: Recommendation</h6><p>The chicken was undercooked. What is the primary recommendation?</p>",
                options: [
                    { text: "Administer prophylactic antibiotics to the town.", feedback: "Incorrect. Antibiotic stewardship precludes this.", correct: false },
                    { text: "Education on safe cooking temperatures and avoiding cross-contamination.", feedback: "Correct. Prevention for future events.", correct: true }
                ]
            }
        ]
    }
];

class InteractiveCaseEngine {
    constructor() {
        this.containerId = null;
    }

    init(containerId) {
        this.containerId = containerId;
        this.renderList();
    }

    renderList() {
        const container = document.getElementById(this.containerId);
        if (!container) return;

        let html = `
            <div class="interactive-case-list" style="text-align: left;">
                <h3 style="border-bottom: 2px solid var(--accent-color); padding-bottom: 0.5rem; margin-top: 2rem; text-align: left;">Interactive Scenarios</h3>
                <p style="text-align: left;">Test your skills with multi-step investigations. Each decision affects your score.</p>
                <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 1.5rem; margin-top: 1rem;">
        `;

        INTERACTIVE_CASES_DATA.forEach(c => {
            html += `
                <div class="neo-card interactive-card" style="border: 1px solid #ddd; padding: 1.5rem; height: 100%; display: flex; flex-direction: column; cursor: pointer; transition: transform 0.2s, box-shadow 0.2s; text-align: left;" 
                     onclick="if(window.InteractiveEngine) window.InteractiveEngine.startCase('${c.id}')"
                     onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 4px 6px rgba(0,0,0,0.1)'"
                     onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'">
                    
                    <div style="flex: 1;">
                        <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom: 0.5rem;">
                            <h4 style="margin:0; font-size: 1.1rem; color: var(--navy-primary); text-align: left;">${c.title}</h4>
                            <span class="neo-badge small" style="background:${c.difficulty === 'Advanced' ? '#fecaca' : '#dbeafe'}; color:${c.difficulty === 'Advanced' ? '#991b1b' : '#1e40af'};">${c.difficulty}</span>
                        </div>
                        <p style="font-size: 0.95rem; line-height: 1.5; color: #4b5563; margin-top: 0.5rem; text-align: left;">${c.description}</p>
                    </div>

                    <div style="margin-top: auto; padding-top: 1rem; border-top: 1px dashed #eee;">
                        <button class="neo-btn small full-width primary">
                            Start Case <i class="ph-bold ph-caret-right"></i>
                        </button>
                    </div>
                </div>
            `;
        });

        html += `</div></div>`;
        container.innerHTML = html;
    }

    startCase(id) {
        const caseData = INTERACTIVE_CASES_DATA.find(c => c.id === id);
        if (!caseData) return;
        this.currentCase = caseData;
        this.currentStepIndex = 0;
        this.renderStep();
    }

    renderStep() {
        const container = document.getElementById(this.containerId);
        const step = this.currentCase.steps[this.currentStepIndex];
        const isLastStep = this.currentStepIndex === this.currentCase.steps.length - 1;

        let html = `
            <div class="interactive-case-view">
                <button class="btn btn-outline btn-sm" onclick="window.InteractiveEngine.renderList()"><i class="ph-bold ph-arrow-left"></i> Back to Cases</button>
                <div class="neo-card" style="margin-top: 1rem;">
                    <div style="display:flex; justify-content:space-between; align-items:center;">
                        <h3 style="margin:0; text-align: left;">${this.currentCase.title}</h3>
                        <span class="text-sm text-muted">Step ${this.currentStepIndex + 1} of ${this.currentCase.steps.length}</span>
                    </div>
                    <hr>
                    <div class="step-content" style="font-size: 1.1rem; line-height: 1.6;">
                        ${step.text}
                    </div>
                    <div class="options-grid" style="display: flex; flex-direction: column; gap: 0.8rem; margin-top: 1.5rem;">
        `;

        step.options.forEach((opt, idx) => {
            html += `
                <button class="btn btn-outline option-btn" id="opt-${idx}" onclick="window.InteractiveEngine.checkAnswer(${idx})" style="text-align: left; padding: 1rem;">
                    ${opt.text}
                </button>
            `;
        });

        html += `   </div>
                    <div id="step-feedback" style="margin-top: 1.5rem; display: none;" class="callout"></div>
                    <button id="next-step-btn" class="btn btn-primary" onclick="window.InteractiveEngine.nextStep()" style="display: none; margin-top: 1rem; float: right;">
                        ${isLastStep ? 'Finish Case' : 'Next Step <i class="ph-bold ph-arrow-right"></i>'}
                    </button>
                    <div style="clear: both;"></div>
                </div>
            </div>
        `;

        container.innerHTML = html;
    }

    checkAnswer(optionIdx) {
        const step = this.currentCase.steps[this.currentStepIndex];
        const option = step.options[optionIdx];
        const feedbackEl = document.getElementById('step-feedback');
        const nextBtn = document.getElementById('next-step-btn');
        const btns = document.querySelectorAll('.option-btn');

        // Disable all buttons initially so they can't double click
        btns.forEach(b => b.disabled = true);

        // Show feedback
        feedbackEl.style.display = 'block';
        feedbackEl.innerHTML = `<strong>${option.correct ? 'Correct!' : 'Incorrect.'}</strong> ${option.feedback}`;
        feedbackEl.className = option.correct ? 'callout callout-success' : 'callout callout-danger';

        // Highlight selected
        const selectedBtn = document.getElementById(`opt-${optionIdx}`);
        if (option.correct) {
            selectedBtn.style.background = 'rgba(34, 197, 94, 0.1)';
            selectedBtn.style.borderColor = 'var(--success)';
            nextBtn.style.display = 'inline-block';
        } else {
            selectedBtn.style.background = 'rgba(239, 68, 68, 0.1)';
            selectedBtn.style.borderColor = 'var(--danger)';
            // Re-enable other buttons to allow retry, but keep this one disabled
            btns.forEach((b, idx) => {
                if (idx !== optionIdx) b.disabled = false;
            });
        }
    }

    nextStep() {
        if (this.currentStepIndex < this.currentCase.steps.length - 1) {
            this.currentStepIndex++;
            this.renderStep();
        } else {
            // Finish
            const container = document.getElementById(this.containerId);
            container.innerHTML = `
                <div class="interactive-case-view">
                    <div class="neo-card" style="text-align: center; padding: 3rem;">
                        <i class="ph ph-check-circle" style="font-size: 4rem; color: var(--success); margin-bottom: 1rem;"></i>
                        <h2>Case Closed!</h2>
                        <p>You successfully investigated and controlled the outbreak.</p>
                        <button class="btn btn-primary" onclick="window.InteractiveEngine.renderList()">Return to Case Library</button>
                    </div>
                </div>
             `;
        }
    }
}

const interactiveEngine = new InteractiveCaseEngine();
window.InteractiveEngine = interactiveEngine;

class HomeDashboard {
    constructor(containerId = 'content-container') {
        this.containerId = containerId;
        this.injectStyles();

        // Game State
        this.gameState = {
            active: false,
            score: 0,
            frame: 0,
            nodes: []
        };
    }

    init() {
        this.render();
    }

    injectStyles() {
        if (document.getElementById('home-dashboard-styles')) return;
        const style = document.createElement('style');
        style.id = 'home-dashboard-styles';
        style.textContent = `
            .home-wrapper {
                max-width: 1200px;
                margin: 0 auto;
                font-family: var(--font-heading);
                animation: fadeIn 0.5s ease-out;
            }
            .hero-banner {
                background: #ffffff;
                color: #0f172a;
                padding: 3rem;
                border-radius: 12px;
                margin-bottom: 2rem;
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                justify-content: space-between;
                border: 2px solid black;
                box-shadow: 6px 6px 0 black;
                position: relative;
                overflow: hidden;
            }
            /* Decorative strip on left of banner */
            .hero-banner::before {
                content: '';
                position: absolute;
                left: 0;
                top: 0;
                bottom: 0;
                width: 12px;
                background: var(--navy-primary);
                border-right: 2px solid black;
            }
            .stats-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                gap: 1.5rem;
                margin-bottom: 2rem;
            }
            .stat-card {
                padding: 1.5rem;
                border-radius: 12px;
                border: 2px solid black;
                box-shadow: 4px 4px 0 black;
                transition: all 0.1s;
                position: relative;
            }
            .stat-card.accent-green { background: #dcfce7; }
            .stat-card.accent-blue { background: #e0f2fe; }
            .stat-card.accent-purple { background: #fae8ff; }

            .stat-card:hover {
                transform: translate(-2px, -2px);
                box-shadow: 6px 6px 0 black;
            }
            .stat-value {
                font-size: 2.5rem;
                font-weight: 800;
                margin: 0.5rem 0;
                color: var(--navy-primary);
            }
            .stat-label {
                font-size: 0.8rem;
                text-transform: uppercase;
                letter-spacing: 0.05em;
                color: #475569;
                font-weight: 700;
            }
            .quick-actions {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                gap: 1rem;
            }
            .action-card {
                background: white;
                padding: 1.5rem;
                border-radius: 12px;
                border: 2px solid black;
                box-shadow: 4px 4px 0 black;
                cursor: pointer;
                transition: all 0.1s;
            }
            .action-card:hover {
                background: #fff7ed; /* Light Orange Tint */
                transform: translate(-2px, -2px);
                box-shadow: 6px 6px 0 black;
                border-color: black;
            }
            .game-monitor {
                background: #ffffff;
                border-radius: 12px;
                padding: 1.5rem;
                color: #0f172a;
                border: 2px solid black;
                box-shadow: 6px 6px 0 black;
                z-index: 2; /* Above ::before */
            }
            .logo-glow {
                filter: none;
            }
            @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        `;
        document.head.appendChild(style);
    }

    render() {
        const container = document.getElementById(this.containerId);
        if (!container) return;

        const quizStats = window.AnalyticsManager ? window.AnalyticsManager.getGlobalStats() : { totalAttempts: 0, averageScore: 0 };
        const chapters = window.AnalyticsManager ? window.AnalyticsManager.getChapterStats() : { viewed: 0, total: 20 };

        // SVG Logo (Vector) - High Quality
        const svgLogo = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cdefs%3E%3ClinearGradient id='grad1' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23003d6b;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23007acc;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Ccircle cx='50' cy='50' r='45' fill='url(%23grad1)' stroke='%23000' stroke-width='2'/%3E%3Cpath d='M50 15 L50 45 L75 60 L25 60 L50 45' fill='%23ff5c00' stroke='%23fff' stroke-width='2'/%3E%3Ccircle cx='50' cy='50' r='10' fill='%23fff'/%3E%3C/svg%3E`;

        container.innerHTML = `
            <div class="home-wrapper">
                <!-- Hero Banner -->
                <div class="hero-banner">
                    <div style="flex: 1; min-width: 300px; padding-left: 1rem;">
                        <h1 style="color: var(--navy-primary); margin-bottom: 0.5rem; display: flex; align-items: center; gap: 1rem;">
                            <img src="${svgLogo}" class="logo-glow" alt="Logo" style="width: 64px; height: 64px; border-radius: 50%;">
                            Epidemic Engine
                        </h1>
                        <p style="font-size: 1.25rem; opacity: 1; margin-bottom: 0.5rem; color: #334155; font-weight: 500;">
                            Navigate outbreaks, visualize patterns, and master Disease Detectives (v2.5.0).
                        </p>
                        <p style="font-size: 0.9rem; margin-bottom: 1.5rem; color: #475569;">
                            Designed, Created, & Conceived by <strong style="color: var(--navy-primary);">Naveen Minumula, MD</strong>
                        </p>
                        <div style="display: flex; gap: 1rem;">
                            <button class="neo-btn primary" onclick="loadChapter('ch1')">Start Learning</button>
                            <button class="neo-btn outline" onclick="loadChapter('drills')">Open Tools</button>
                        </div>
                    </div>
                    <div class="game-monitor" style="flex: 1; min-width: 300px; max-width: 400px; margin-top: 1rem;">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 1rem;">
                            <strong style="text-transform: uppercase; letter-spacing: 1px; color: var(--navy-primary);">Transmission Sim</strong>
                            <span id="game-score" class="neo-badge">0</span>
                        </div>
                        <div id="game-container" style="position: relative; height: 200px; background: #f8fafc; border-radius: 8px; overflow: hidden; border: 2px solid #000;">
                            <canvas id="bg-canvas" style="display: block; width: 100%; height: 100%;"></canvas>
                            <div id="game-overlay" style="position: absolute; top:0; left:0; width:100%; height:100%; background: rgba(255,255,255,0.7); display: flex; align-items: center; justify-content: center; backdrop-filter: blur(2px);">
                                <button class="neo-btn primary small" onclick="window.HomeDashboard.startGame()">Start Simulation</button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Global Search -->
                <div class="search-section" style="margin-bottom: 2rem; position: relative; z-index: 100;">
                    <div style="position: relative;">
                        <i class="ph-bold ph-magnifying-glass" style="position: absolute; left: 1.2rem; top: 50%; transform: translateY(-50%); font-size: 1.25rem; color: #64748b;"></i>
                        <input type="text" id="global-search-input" placeholder="Search chapters, glossary terms, or cases..." 
                               onkeyup="window.HomeDashboard.performSearch(this.value)"
                               style="width: 100%; padding: 1rem 1rem 1rem 3.5rem; font-size: 1.1rem; border: 2px solid #000; border-radius: 12px; box-shadow: 4px 4px 0 #000; outline: none; transition: all 0.2s;">
                    </div>
                    <div id="search-results" style="display: none; margin-top: 0.5rem; background: white; border: 2px solid #000; border-radius: 12px; overflow: hidden; box-shadow: 6px 6px 0 rgba(0,0,0,0.2); position: absolute; width: 100%;"></div>
                </div>

                <!-- Stats Grid -->
                <!-- Filled in JS below to use variables -->
            </div>
        `;

        container.querySelector('.home-wrapper').insertAdjacentHTML('beforeend', `
                <div class="stats-grid">
                    <div class="stat-card accent-green">
                        <div class="stat-value">${quizStats.averageScore}%</div>
                        <div class="stat-label">Avg Quiz Score</div>
                    </div>
                    <div class="stat-card accent-blue">
                        <div class="stat-value">${chapters.viewed}/${chapters.total}</div>
                        <div class="stat-label">Chapters Read</div>
                    </div>
                    <div class="stat-card accent-purple">
                        <div class="stat-value">${quizStats.totalAttempts}</div>
                        <div class="stat-label">Quizzes Taken</div>
                    </div>
                </div>

                <h2 style="margin-bottom: 1rem; color: var(--navy-primary);">Quick Actions</h2>
                <div class="quick-actions">
                    <div class="action-card" onclick="loadChapter('simulation')">
                        <i class="ph-bold ph-clock" style="font-size: 2rem; color: var(--accent-orange); margin-bottom: 0.5rem;"></i>
                        <h3 style="margin: 0; font-size: 1.25rem;">Timed Exam</h3>
                        <p style="margin: 0.5rem 0 0; font-size: 0.9rem; color: #64748b;">Full 50-minute simulation.</p>
                    </div>
                     <div class="action-card" onclick="loadChapter('case_library')">
                        <i class="ph-bold ph-files" style="font-size: 2rem; color: var(--success); margin-bottom: 0.5rem;"></i>
                        <h3 style="margin: 0; font-size: 1.25rem;">Case Library</h3>
                        <p style="margin: 0.5rem 0 0; font-size: 0.9rem; color: #64748b;">16+ Outbreak Scenarios.</p>
                    </div>
                     <div class="action-card" onclick="loadChapter('drills')">
                        <i class="ph-bold ph-wrench" style="font-size: 2rem; color: var(--accent-purple); margin-bottom: 0.5rem;"></i>
                        <h3 style="margin: 0; font-size: 1.25rem;">Calculators</h3>
                        <p style="margin: 0.5rem 0 0; font-size: 0.9rem; color: #64748b;">2x2, Curves, Exposure.</p>
                    </div>
                    <div class="action-card" onclick="loadChapter('ch12')">
                        <i class="ph-bold ph-eye" style="font-size: 2rem; color: var(--navy-primary); margin-bottom: 0.5rem;"></i>
                        <h3 style="margin: 0; font-size: 1.25rem;">Visual Guides</h3>
                        <p style="margin: 0.5rem 0 0; font-size: 0.9rem; color: #64748b;">Flowcharts & Infographics.</p>
                    </div>
                </div>
        `);
    }

    startGame() {
        const overlay = document.getElementById('game-overlay');
        if (overlay) overlay.style.display = 'none';

        const canvas = document.getElementById('bg-canvas');
        if (!canvas) return;

        this.width = canvas.parentElement.clientWidth;
        this.height = canvas.parentElement.clientHeight;
        canvas.width = this.width;
        canvas.height = this.height;
        this.ctx = canvas.getContext('2d');

        // Reset State
        this.gameState = {
            active: true,
            score: 0,
            frame: 0,
            nodes: []
        };

        this.canvasObj = canvas; // Save for touch handler

        // Spawn Nodes
        for (let i = 0; i < 15; i++) this.spawnNode();

        // Start Loop
        if (this.gameLoopId) clearInterval(this.gameLoopId);
        this.gameLoopId = setInterval(() => this.loop(), 1000 / 30); // 30 FPS

        // Timer
        if (this.timerInterval) clearInterval(this.timerInterval);
        this.timerInterval = setTimeout(() => this.endGame(), 15000); // 15s Game

        // Input
        canvas.onclick = (e) => {
            const rect = canvas.getBoundingClientRect();
            this.handleInput(e.clientX - rect.left, e.clientY - rect.top);
        };
    }

    spawnNode() {
        if (this.gameState.nodes.length > 30) return;
        this.gameState.nodes.push({
            x: Math.random() * this.width,
            y: Math.random() * this.height,
            vx: (Math.random() - 0.5) * 4,
            vy: (Math.random() - 0.5) * 4,
            radius: 8 + Math.random() * 8,
            infected: Math.random() > 0.7 // 30% bad
        });
    }

    handleInput(x, y) {
        this.gameState.nodes.forEach(node => {
            const dist = Math.hypot(node.x - x, node.y - y);
            if (dist < node.radius + 10 && node.infected) {
                // Remove/Quarantine
                const idx = this.gameState.nodes.indexOf(node);
                if (idx > -1) {
                    this.gameState.nodes.splice(idx, 1);
                    this.gameState.score++;
                    document.getElementById('game-score').textContent = this.gameState.score;
                }
            }
        });
    }

    loop() {
        if (!this.gameState.active) return;
        this.updateState();
        this.draw();
    }

    updateState() {
        this.gameState.frame++;
        if (this.gameState.frame % 50 === 0) this.spawnNode();

        this.gameState.nodes.forEach(node => {
            node.x += node.vx;
            node.y += node.vy;

            // Bounce
            if (node.x < 0 || node.x > this.width) node.vx *= -1;
            if (node.y < 0 || node.y > this.height) node.vy *= -1;
        });
    }

    draw() {
        const ctx = this.ctx;
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, this.width, this.height);

        this.gameState.nodes.forEach(node => {
            this.drawNode(node);
        });
    }

    drawNode(node) {
        const ctx = this.ctx;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);

        if (node.infected) {
            ctx.fillStyle = '#dc2626';
            ctx.strokeStyle = '#991b1b';
            ctx.lineWidth = 2;
        } else {
            ctx.fillStyle = '#2563eb';
            ctx.strokeStyle = '#1e40af';
            ctx.lineWidth = 2;
        }

        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }

    endGame() {
        this.gameState.active = false;
        clearInterval(this.gameLoopId);
        clearInterval(this.timerInterval);

        const oldHigh = localStorage.getItem('epi_game_highscore') || 0;
        if (this.gameState.score > oldHigh) localStorage.setItem('epi_game_highscore', this.gameState.score);

        const overlay = document.getElementById('game-overlay');
        if (overlay) {
            overlay.style.display = 'flex';
            overlay.innerHTML = `
                <div style="text-align: center;">
                    <h2 style="color: #16a34a; font-size: 2rem; margin-bottom: 0.5rem;">SUCCESS</h2>
                    <p style="color: #000; margin-bottom: 1.5rem;">Threats Neutralized: ${this.gameState.score}</p>
                    <button class="neo-btn primary" onclick="window.HomeDashboard.startGame()">Re-Deploy</button>
                </div>
            `;
        }
    }

    performSearch(query) {
        const resultsContainer = document.getElementById('search-results');
        if (!query || query.length < 2) {
            resultsContainer.style.display = 'none';
            return;
        }

        const q = query.toLowerCase();
        const matches = [];

        // 1. Search Chapters (Nav Items)
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(item => {
            const text = item.textContent.trim();
            if (text.toLowerCase().includes(q)) {
                matches.push({
                    type: 'Chapter',
                    label: text,
                    action: () => { item.click(); }
                });
            }
        });

        // 2. Search Glossary (if available)
        if (window.APPENDIX_DATA && window.APPENDIX_DATA.glossary) {
            window.APPENDIX_DATA.glossary.forEach(g => {
                if (g.term.toLowerCase().includes(q)) {
                    matches.push({
                        type: 'Glossary',
                        label: g.term,
                        sub: g.definition.substring(0, 50) + '...',
                        action: () => {
                            loadChapter('appendix');
                            setTimeout(() => {
                                window.showTab('glossary');
                                const input = document.getElementById('glossary-search');
                                if (input) {
                                    input.value = g.term;
                                    window.appendixEngine.filterGlossary();
                                }
                            }, 300);
                        }
                    });
                }
            });
        }

        // 3. Search Cases (if available)
        if (window.CASE_LIBRARY) {
            window.CASE_LIBRARY.forEach((c, idx) => {
                if (c.title.toLowerCase().includes(q) || (c.disease && c.disease.toLowerCase().includes(q))) {
                    matches.push({
                        type: 'Case Study',
                        label: c.title,
                        sub: c.disease,
                        action: () => {
                            loadChapter('case_library');
                            setTimeout(() => {
                                if (window.toggleCaseDetails) window.toggleCaseDetails(idx);
                            }, 300);
                        }
                    });
                }
            });
        }

        // 4. Search Interactive Scenarios (Tier 2 Content)
        if (window.SCENARIO_DB) {
            Object.values(window.SCENARIO_DB).forEach(s => {
                const title = s.title || '';
                const desc = s.description || '';
                if (title.toLowerCase().includes(q) || desc.toLowerCase().includes(q)) {
                    matches.push({
                        type: 'Simulation',
                        label: title,
                        sub: (s.difficulty || 'Normal') + ' Mode',
                        action: () => {
                            loadChapter('interactive_scenarios');
                        }
                    });
                }
            });
        }

        // Render Results
        if (matches.length === 0) {
            resultsContainer.style.display = 'block';
            resultsContainer.innerHTML = '<div style="padding: 0.5rem; color: #666; font-style: italic;">No results found.</div>';
            return;
        }

        const topMatches = matches.slice(0, 8); // Limit to 8
        resultsContainer.style.display = 'block';
        resultsContainer.innerHTML = topMatches.map((m, i) => `
            <div class="search-result-item" onclick="window.HomeDashboard.results[${i}].action()" 
                 style="padding: 0.75rem; border-bottom: 1px solid #eee; cursor: pointer; transition: background 0.1s;">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <strong style="color: var(--navy-primary);">${m.label}</strong>
                    <span class="neo-badge small" style="font-size: 0.7rem; background: #f1f5f9; color: #64748b;">${m.type}</span>
                </div>
                ${m.sub ? `<div style="font-size: 0.85rem; color: #666; margin-top: 0.25rem;">${m.sub}</div>` : ''}
            </div>
        `).join('');

        // Store actions slightly differently to access them via index in HTML
        this.results = topMatches;

        // Add hover effect via JS since inline styles are messy for hover
        const items = resultsContainer.querySelectorAll('.search-result-item');
        items.forEach(item => {
            item.onmouseover = () => item.style.background = '#f8fafc';
            item.onmouseout = () => item.style.background = 'white';
        });
    }
}

window.HomeDashboard = new HomeDashboard();

class RulebookWidget {
    constructor() {
        // Wait for DOM
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.init());
        } else {
            this.init();
        }
    }

    init() {
        if (document.getElementById('rulebook-root')) return;
        this.injectStyles();
        this.createElements();
        this.renderContent();
    }

    injectStyles() {
        const style = document.createElement('style');
        style.textContent = `
            #rulebook-fab {
                position: fixed;
                bottom: 2rem;
                right: 2rem;
                width: 56px;
                height: 56px;
                border-radius: 50%;
                background: var(--navy-primary);
                color: white;
                box-shadow: 0 4px 12px rgba(0,0,0,0.3);
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 1.5rem;
                cursor: pointer;
                transition: transform 0.2s, background 0.2s;
                z-index: 1000;
                border: 2px solid white;
            }
            #rulebook-fab:hover {
                transform: scale(1.1);
                background: var(--accent-blue);
            }
            #rulebook-sidebar {
                position: fixed;
                top: 0;
                right: -350px; /* Hidden */
                width: 350px;
                height: 100vh;
                background: white;
                box-shadow: -4px 0 15px rgba(0,0,0,0.1);
                z-index: 1001;
                transition: right 0.3s ease-in-out;
                display: flex;
                flex-direction: column;
                border-left: 1px solid #eee;
            }
            #rulebook-sidebar.open {
                right: 0;
            }
            .rb-header {
                padding: 1.5rem;
                background: var(--navy-primary);
                color: white;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            .rb-content {
                flex: 1;
                overflow-y: auto;
                padding: 1rem;
            }
            .rb-category {
                margin-bottom: 1.5rem;
            }
            .rb-cat-title {
                font-weight: 800;
                color: var(--accent-orange);
                text-transform: uppercase;
                font-size: 0.85rem;
                margin-bottom: 0.5rem;
                border-bottom: 2px solid #eee;
                padding-bottom: 0.25rem;
            }
            .rb-rule-item {
                font-size: 0.9rem;
                margin-bottom: 0.75rem;
                padding: 0.5rem;
                background: #f8fafc;
                border-radius: 6px;
                border-left: 3px solid #ccc;
                cursor: pointer;
                transition: background 0.2s;
            }
            .rb-rule-item:hover {
                background: #eef2ff;
                border-left-color: var(--accent-blue);
            }
            .rb-rule-id {
                font-weight: bold;
                color: var(--navy-primary);
                font-size: 0.8rem;
                display: block;
            }
            .rb-overlay {
                position: fixed;
                top: 0; left: 0; bottom: 0; right: 0;
                background: rgba(0,0,0,0.5);
                z-index: 1000;
                display: none;
                opacity: 0;
                transition: opacity 0.3s;
            }
            .rb-overlay.show {
                display: block;
                opacity: 1;
            }
        `;
        document.head.appendChild(style);
    }

    createElements() {
        const root = document.createElement('div');
        root.id = 'rulebook-root';
        root.innerHTML = `
            <div id="rulebook-fab" title="Open Rulebook Reference" onclick="window.RulebookWidget.toggle()">
                <i class="ph-bold ph-book-bookmark"></i>
            </div>
            <div class="rb-overlay" id="rulebook-overlay" onclick="window.RulebookWidget.toggle()"></div>
            <aside id="rulebook-sidebar">
                <div class="rb-header">
                    <h3 style="margin:0; font-size:1.2rem;">Rulebook Reference</h3>
                    <button onclick="window.RulebookWidget.toggle()" style="background:none; border:none; color:white; cursor:pointer;">
                        <i class="ph-bold ph-x" style="font-size:1.5rem;"></i>
                    </button>
                </div>
                <div class="rb-content" id="rb-content-area">
                    <!-- Dynamic Rules -->
                </div>
                <div style="padding:1rem; border-top:1px solid #eee; font-size:0.8rem; color:#666; text-align:center;">
                    2026 Official Rules Draft (Div B)
                </div>
            </aside>
        `;
        document.body.appendChild(root);
    }

    renderContent() {
        if (!window.RULES_DATA) {
            document.getElementById('rb-content-area').innerHTML = "<p>Rule data not found.</p>";
            return;
        }

        const rules = window.RULES_DATA.rules;
        // Group by prefix (1., 2., etc)
        const groups = {};
        const titles = {
            "1": "Scientific Inquiry",
            "2": "Pattern Recognition",
            "3": "Etiology",
            "4": "Calculations",
            "5": "Prevention & Control",
            "6": "Public Health Systems"
        };

        for (const [id, desc] of Object.entries(rules)) {
            const prefix = id.split('.')[0];
            if (!groups[prefix]) groups[prefix] = [];
            groups[prefix].push({ id, desc });
        }

        let html = "";
        for (const [prefix, list] of Object.entries(groups)) {
            const title = titles[prefix] || "General";
            html += `
                <div class="rb-category">
                    <div class="rb-cat-title">${prefix}. ${title}</div>
                    ${list.map(r => `
                        <div class="rb-rule-item" onclick="window.RulebookWidget.findChapter('${r.id}')">
                            <span class="rb-rule-id">Rule ${r.id}</span>
                            ${r.desc.replace(`${title}: `, '').replace(`${title} `, '')} <!-- Clean desc -->
                        </div>
                    `).join('')}
                </div>
            `;
        }
        document.getElementById('rb-content-area').innerHTML = html;
    }

    toggle() {
        const sb = document.getElementById('rulebook-sidebar');
        const overlay = document.getElementById('rulebook-overlay');
        const fab = document.getElementById('rulebook-fab');

        if (sb.classList.contains('open')) {
            sb.classList.remove('open');
            overlay.classList.remove('show');
            setTimeout(() => overlay.style.display = 'none', 300);
            fab.style.transform = 'scale(1)';
        } else {
            overlay.style.display = 'block';
            setTimeout(() => overlay.classList.add('show'), 10); // Trigger transition
            sb.classList.add('open');
            fab.style.transform = 'scale(0)';
        }
    }

    findChapter(ruleId) {
        // Reverse lookup
        if (!window.RULES_DATA || !window.RULES_DATA.mapping) return;

        const reverseMap = [];
        for (const [chap, rules] of Object.entries(window.RULES_DATA.mapping)) {
            if (rules.includes(ruleId) || rules.includes('*')) {
                reverseMap.push(chap);
            }
        }

        if (reverseMap.length > 0) {
            // Load the first one
            // We assume loadChapter is global
            if (window.loadChapter) {
                window.loadChapter(reverseMap[0]);
                this.toggle(); // Close sidebar
            }
        } else {
            alert("No direct chapter found for Rule " + ruleId);
        }
    }
}

window.RulebookWidget = new RulebookWidget();

class ProctorTimer {
    constructor(containerId) {
        this.containerId = containerId;
        this.duration = 50 * 60; // default 50 mins
        this.timeLeft = this.duration;
        this.interval = null;
        this.isRunning = false;

        // Audio Context lazy init
        this.audioCtx = null;

        this.render();
    }

    render() {
        const container = document.getElementById(this.containerId);
        if (!container) return;

        const m = Math.floor(this.timeLeft / 60);
        const s = this.timeLeft % 60;
        const timeStr = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;

        // Progress percentage for background fill or bar
        const pct = (this.timeLeft / this.duration) * 100;
        let color = '#10b981'; // Green
        if (pct < 20) color = '#ef4444'; // Red
        else if (pct < 50) color = '#f59e0b'; // Output

        container.innerHTML = `
            <div class="proctor-wrapper" style="text-align: center; max-width: 600px; margin: 0 auto;">
                 <h2 style="color: var(--navy-primary); margin-bottom: 2rem;">Exam Proctoring Tool</h2>
                 
                 <div class="timer-display" style="
                    font-size: 8rem; 
                    font-weight: 800; 
                    font-family: monospace; 
                    color: ${color};
                    background: #1e293b;
                    padding: 2rem;
                    border-radius: 16px;
                    box-shadow: 0 10px 25px rgba(0,0,0,0.2);
                    margin-bottom: 2rem;
                    position: relative;
                    overflow: hidden;
                 ">
                    <div style="position: relative; z-index: 2;" role="timer" aria-live="off" id="pt-display-text">${timeStr}</div>
                    <div class="timer-progress" style="
                        position: absolute; bottom: 0; left: 0; height: 6px; background: ${color}; width: ${pct}%; transition: width 1s linear, background 0.3s;
                    "></div>
                 </div>

                 <div class="controls-row" style="display: flex; gap: 1rem; justify-content: center; margin-bottom: 2rem;">
                    <button id="pt-start" class="neo-btn primary large" onclick="window.proctorTimer.start()" aria-label="Start Timer">
                        <i class="ph-bold ph-play"></i> Start
                    </button>
                    <button id="pt-stop" class="neo-btn danger large" onclick="window.proctorTimer.stop()" style="display: none;" aria-label="Stop Timer">
                        <i class="ph-bold ph-stop"></i> Stop
                    </button>
                    <button class="neo-btn outline" onclick="window.proctorTimer.reset()" aria-label="Reset Timer">
                        <i class="ph-bold ph-arrow-counter-clockwise"></i> Reset
                    </button>
                 </div>

                 <div class="presets-row" style="display: flex; gap: 0.5rem; justify-content: center;">
                    <button class="neo-btn small outline" onclick="window.proctorTimer.setDuration(50)">50m (Std)</button>
                    <button class="neo-btn small outline" onclick="window.proctorTimer.setDuration(30)">30m</button>
                    <button class="neo-btn small outline" onclick="window.proctorTimer.setDuration(15)">15m</button>
                    <button class="neo-btn small outline" onclick="window.proctorTimer.setDuration(5)">5m</button>
                 </div>
                 
                 <div style="margin-top: 2rem; font-size: 0.9rem; color: #64748b;">
                    <p><i class="ph-bold ph-speaker-high"></i> Audio cues at Start, 5 min warning, and End.</p>
                 </div>
            </div>
        `;
    }

    start() {
        if (this.isRunning) return;

        // Init Audio
        if (!this.audioCtx) {
            this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        }
        if (this.audioCtx.state === 'suspended') this.audioCtx.resume();

        this.isRunning = true;
        this.playBeep('start');

        document.getElementById('pt-start').style.display = 'none';
        document.getElementById('pt-stop').style.display = 'inline-block';

        this.interval = setInterval(() => {
            this.timeLeft--;
            if (this.timeLeft === 300) {
                this.playBeep('warning');
                // Announce warning
                const disp = document.getElementById('pt-display-text');
                if (disp) disp.setAttribute('aria-live', 'assertive');
            }
            if (this.timeLeft <= 0) {
                this.finish();
            } else {
                this.updateDisplay();
            }
        }, 1000);
    }

    stop() {
        if (!this.isRunning) return;
        this.isRunning = false;
        clearInterval(this.interval);
        document.getElementById('pt-start').style.display = 'inline-block';
        document.getElementById('pt-stop').style.display = 'none';

        document.getElementById('pt-start').innerHTML = '<i class="ph-bold ph-play"></i> Resume';
    }

    reset() {
        this.stop();
        this.timeLeft = this.duration;
        this.updateDisplay();
        document.getElementById('pt-start').innerHTML = '<i class="ph-bold ph-play"></i> Start';
        const disp = document.getElementById('pt-display-text');
        if (disp) {
            disp.setAttribute('aria-live', 'off');
            disp.textContent = this.formatTime(this.duration);
        }
    }

    setDuration(mins) {
        this.stop();
        this.duration = mins * 60;
        this.timeLeft = this.duration;
        this.updateDisplay();
    }

    finish() {
        this.stop();
        this.timeLeft = 0;
        this.updateDisplay();
        this.playBeep('end');
        alert("TIME IS UP!");
    }

    formatTime(sec) {
        const m = Math.floor(sec / 60);
        const s = sec % 60;
        return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    }

    updateDisplay() {
        const container = document.getElementById(this.containerId);
        if (!container) return;

        const timeStr = this.formatTime(this.timeLeft);

        const displayEl = document.getElementById('pt-display-text');
        if (displayEl) displayEl.textContent = timeStr;
        else {
            this.render(); // Fallback
            return;
        }

        const pct = (this.timeLeft / this.duration) * 100;
        let color = '#10b981';
        if (pct < 20) color = '#ef4444';
        else if (pct < 50) color = '#f59e0b';

        const wrapper = container.querySelector('.timer-display');
        if (wrapper) wrapper.style.color = color;

        const bar = container.querySelector('.timer-progress');
        if (bar) {
            bar.style.width = `${pct}%`;
            bar.style.background = color;
        }

        // Ensure buttons sync
        const startBtn = document.getElementById('pt-start');
        const stopBtn = document.getElementById('pt-stop');
        if (this.isRunning) {
            if (startBtn) startBtn.style.display = 'none';
            if (stopBtn) stopBtn.style.display = 'inline-block';
        } else {
            if (startBtn) startBtn.style.display = 'inline-block';
            if (stopBtn) stopBtn.style.display = 'none';
        }
    }

    playBeep(type) {
        if (!this.audioCtx) return;

        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();
        osc.connect(gain);
        gain.connect(this.audioCtx.destination);

        const now = this.audioCtx.currentTime;

        if (type === 'start') {
            osc.frequency.setValueAtTime(880, now); // A5
            gain.gain.setValueAtTime(0.1, now);
            osc.start(now);
            osc.stop(now + 0.1);
        } else if (type === 'warning') {
            osc.frequency.setValueAtTime(660, now);
            osc.start(now);
            osc.stop(now + 0.2);

            const osc2 = this.audioCtx.createOscillator();
            const gain2 = this.audioCtx.createGain();
            osc2.connect(gain2);
            gain2.connect(this.audioCtx.destination);
            osc2.frequency.setValueAtTime(660, now + 0.3);
            osc2.start(now + 0.3);
            osc2.stop(now + 0.5);
        } else if (type === 'end') {
            osc.frequency.setValueAtTime(440, now);
            osc.frequency.linearRampToValueAtTime(110, now + 1);
            gain.gain.setValueAtTime(0.5, now);
            gain.gain.linearRampToValueAtTime(0, now + 1);
            osc.start(now);
            osc.stop(now + 1);
        }
    }
}

window.ProctorTimer = ProctorTimer;
window.proctorTimer = null;

class PacketGenerator {
    static init() {
        // Expose global function
        window.generateStudyGuide = this.generateStudyGuide.bind(this);
    }

    static generateStudyGuide() {
        if (typeof window.EPIDEMIC_ENGINE_CONTENT === 'undefined') {
            alert("Content not loaded.");
            return;
        }

        const chapters = [
            'ch1', 'ch2', 'ch3', 'ch4', 'ch5', 'ch6',
            'ch7', 'ch8', 'ch9', 'ch10', 'ch11', 'ch12', 'ch13',
            'ch14', 'ch15', 'ch16', 'ch17', 'ch18', 'ch19', 'ch20'
        ];

        let htmlContent = '';

        // Generate Table of Contents
        let tocHtml = `<div class="toc-page" style="page-break-after: always;">
            <h2 style="text-align:center; border-bottom: 2px solid black; padding-bottom: 1rem;">Table of Contents</h2>
            <ul style="list-style: none; padding: 0;">`;

        chapters.forEach(id => {
            const ch = window.EPIDEMIC_ENGINE_CONTENT[id];
            if (ch) {
                tocHtml += `<li style="margin-bottom: 0.5rem; border-bottom: 1px dotted #ccc; display: flex; justify-content: space-between;">
                    <span>${ch.title.split(':')[0]}</span>
                    <span>${ch.title.split(':')[1] || ''}</span>
                </li>`;
            }
        });

        tocHtml += `
            <li style="margin-top: 1rem; font-weight: bold;">Appendices</li>
            <li>Glossary</li>
            <li>Formulas</li>
        </ul></div>`;

        htmlContent += tocHtml;

        // Generate Chapters
        chapters.forEach(id => {
            const ch = window.EPIDEMIC_ENGINE_CONTENT[id];
            if (!ch) return;

            // Clean Content
            let cleanBody = this.cleanContent(ch.content);

            htmlContent += `
                <div class="chapter-section" style="page-break-before: always;">
                    <div class="chapter-header" style="border-bottom: 4px solid black; margin-bottom: 2rem; padding-bottom: 0.5rem;">
                        <h2 style="margin: 0; font-size: 2rem;">${ch.title}</h2>
                        <div style="font-style: italic; margin-top: 0.25rem;">Epidemic Engine v2.0 Study Guide</div>
                    </div>
                    <div class="chapter-body" style="line-height: 1.6; font-size: 11pt; text-align: justify;">
                        ${cleanBody}
                    </div>
                </div>
            `;
        });

        // Add Appendices (Glossary/Formulas) if available
        // We'd need to extract them from APPENDIX_DATA usually, but for now we might skip or grab snippets.
        // Let's assume APPENDIX_DATA is available.
        if (typeof window.APPENDIX_DATA !== 'undefined') {
            htmlContent += this.generateGlossary();
        }

        this.openPrintWindow(htmlContent);
    }

    static cleanContent(html) {
        // Create a temporary DOM to manipulate
        const div = document.createElement('div');
        div.innerHTML = html;

        // Remove interactive elements
        const removables = div.querySelectorAll('button, input, select, .tool-container, .tool-tabs, .mobile-only, .video-container');
        removables.forEach(el => el.remove());

        // Replace Drill Boxes with Static versions if possible, or just style them
        const drills = div.querySelectorAll('.drill-box, .neo-card');
        drills.forEach(el => {
            el.style.border = '1px solid black';
            el.style.boxShadow = 'none';
            el.style.background = 'white';
            el.style.padding = '1rem';
            el.style.marginBottom = '1rem';
        });

        // Fix Callouts
        const callouts = div.querySelectorAll('.callout-header, .callout-content');
        callouts.forEach(el => {
            el.style.color = 'black';
            el.style.background = 'transparent';
        });

        // Expand Accordions (Answers)
        const accordions = div.querySelectorAll('.accordion');
        accordions.forEach(acc => {
            const content = acc.querySelector('.accordion-content');
            if (content) {
                const p = document.createElement('div');
                p.innerHTML = content.innerHTML;
                p.style.marginTop = '0.5rem';
                p.style.paddingLeft = '1rem';
                p.style.borderLeft = '2px solid #ccc';
                acc.replaceWith(p);
            } else {
                acc.remove();
            }
        });

        return div.innerHTML;
    }

    static generateGlossary() {
        if (!window.APPENDIX_DATA || !window.APPENDIX_DATA.glossary) return '';

        let html = `<div class="appendix-section" style="page-break-before: always;">
            <h1 style="border-bottom: 4px solid black;">Appendix A: Glossary</h1>
            <dl>`;

        window.APPENDIX_DATA.glossary.forEach(term => {
            html += `<dt style="font-weight: bold; margin-top: 1rem;">${term.term}</dt>
                     <dd style="margin-left: 1.5rem;">${term.def}</dd>`;
        });

        html += `</dl></div>`;
        return html;
    }

    static openPrintWindow(content) {
        const win = window.open('', '_blank');
        win.document.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Epidemic Engine Study Guide</title>
                <style>
                    body { font-family: 'Times New Roman', serif; color: black; max-width: 800px; margin: 0 auto; padding: 2cm; }
                    img { max-width: 100%; height: auto; filter: grayscale(100%); }
                    table { border-collapse: collapse; width: 100%; margin: 1rem 0; }
                    th, td { border: 1px solid black; padding: 0.5rem; text-align: left; }
                    h1, h2, h3 { color: black; page-break-after: avoid; }
                    p { margin-bottom: 1rem; orphans: 3; widows: 3; }
                    .neo-badge { border: 1px solid black; padding: 2px 6px; border-radius: 4px; font-size: 0.8rem; }
                    a { text-decoration: underline; color: black; }
                    @media print {
                         @page { margin: 2cm; }
                         body { margin: 0; padding: 0; max-width: none; }
                    }
                </style>
            </head>
            <body>
                <div class="cover-page" style="text-align: center; page-break-after: always; padding-top: 30%;">
                    <h1 style="font-size: 4rem; margin-bottom: 1rem;">Epidemic Engine</h1>
                    <h2 style="font-size: 2rem; font-weight: normal; margin-bottom: 4rem;">Comprehensive Study Guide</h2>
                    <p><strong>Division B (Middle School)</strong></p>
                    <p>Generated: ${new Date().toLocaleDateString()}</p>
                    <p style="margin-top: 4rem;"><em>This document contains all educational content from the Epidemic Engine application.</em></p>
                </div>
                ${content}
            </body>
            </html>
        `);
        win.document.close();
        // win.print(); // Optional auto-print
    }
}

// Init immediately
// PacketGenerator.init();

/**
 * Epidemic Engine - Interactive Scenario Engine
 * "Choose Your Own Adventure" style outbreak simulations.
 */

class ScenarioEngine {
    constructor(containerId = 'interactive-cases-root') {
        this.containerId = containerId;
        this.currentScenario = null;
        this.currentNodeId = null;
        this.history = [];
        this.state = {
            integrity: 100, // Health/Public Trust
            budget: 1000,
            time: 0 // Days elapsed
        };

        // Scenario Database
        this.scenarios = window.SCENARIO_DB || {};
    }

    init() {
        // Called when chapter loads.
        this.renderMenu();
    }

    renderMenu() {
        const container = document.getElementById(this.containerId);
        if (!container) return; // Not on the right page

        // Group by category
        const categories = {
            'investigation': { title: 'Field Investigation', icon: 'ph-magnifying-glass', color: 'var(--navy-primary)' },
            'intervention': { title: 'Control & Prevention', icon: 'ph-shield-check', color: '#059669' },
            'calc': { title: 'Calculations & Math', icon: 'ph-calculator', color: '#7c3aed' },
            'linelist': { title: 'Data Interpretation', icon: 'ph-table', color: '#ea580c' },
            'graph': { title: 'Visual Analytics', icon: 'ph-chart-line', color: '#2563eb' }
        };

        const grouped = {};
        Object.keys(this.scenarios).forEach(key => {
            const s = this.scenarios[key];
            let cat = s.category || 'investigation';
            // Safety fallback for unknown categories
            if (!categories[cat]) cat = 'investigation';

            if (!grouped[cat]) grouped[cat] = [];
            grouped[cat].push({ key, ...s });
        });

        let html = `<div class="scenarios-container">
            <h2 style="margin-bottom: 0.5rem;"><i class="ph-bold ph-strategy"></i> Simulation Center</h2>
            <p class="lead" style="margin-bottom: 2rem; color: #666;">
                Master key skills through interactive "Choose Your Own Adventure" stations. 
                Each scenario mimics a <strong>Station</strong> you might encounter in a Science Olympiad competition.
            </p>`;

        Object.keys(categories).forEach(catId => {
            const items = grouped[catId];
            if (!items || items.length === 0) return;
            const catConfig = categories[catId];

            html += `
                <div class="category-section" style="margin-bottom: 3rem;">
                    <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem; border-bottom: 2px solid #eee; padding-bottom: 0.5rem;">
                        <div style="background: ${catConfig.color}; color: white; width: 32px; height: 32px; border-radius: 6px; display: flex; align-items: center; justify-content: center;">
                            <i class="ph-bold ${catConfig.icon}"></i>
                        </div>
                        <h3 style="margin: 0; color: #333;">${catConfig.title}</h3>
                    </div>
                    <div class="grid" style="gap: 1.5rem; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));">
            `;

            items.forEach(s => {
                const diffColor = s.difficulty === 'Expert' ? '#dc2626' : (s.difficulty === 'Advanced' ? '#ea580c' : (s.difficulty === 'Intermediate' ? '#d97706' : '#16a34a'));
                const diffBg = s.difficulty === 'Expert' ? '#fef2f2' : (s.difficulty === 'Advanced' ? '#fff7ed' : (s.difficulty === 'Intermediate' ? '#fffbeb' : '#f0fdf4'));

                html += `
                    <button class="neo-card interactive-card" style="display: flex; flex-direction: column; height: 100%; border: 1px solid #e2e8f0; transition: all 0.2s ease; cursor: pointer; width: 100%; text-align: left; background: white; padding: 0; overflow: hidden; position: relative;" onclick="window.ScenarioEngine.startScenario('${s.key}')">
                        <div style="height: 6px; width: 100%; background: ${catConfig.color};"></div>
                        <div style="padding: 1.5rem; flex: 1; display: flex; flex-direction: column;">
                            <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 0.75rem;">
                                <h4 style="margin: 0; color: #1e293b; font-size: 1.15rem; font-weight: 700;">${s.title}</h4>
                            </div>
                            
                            <div style="margin-bottom: 1rem;">
                                <span class="neo-badge small" style="background: ${diffBg}; color: ${diffColor}; border: 1px solid ${diffColor}20;">${s.difficulty || 'Normal'}</span>
                            </div>

                            <p style="font-size: 0.95rem; color: #64748b; line-height: 1.5; margin-bottom: 1.5rem; flex: 1;">
                                ${s.description}
                            </p>

                            <div style="margin-top: auto;">
                                <span class="neo-btn primary full-width" style="display: flex; align-items: center; justify-content: center; width: 100%;">
                                    <i class="ph-bold ph-play" style="margin-right: 8px;"></i> Start
                                </span>
                            </div>
                        </div>
                    </button>
                `;
            });

            html += `</div></div>`;
        });

        html += `</div>`;
        container.innerHTML = html;
        return;
    }

    startScenario(id) {
        this.currentScenario = this.scenarios[id];
        this.currentNodeId = 'start';
        this.history = [];
        this.state = { integrity: 100, budget: 1000, time: 0 };
        this.renderNode();

        // Scroll to top
        const container = document.getElementById(this.containerId);
        if (container) container.scrollIntoView({ behavior: 'smooth' });
    }

    renderNode() {
        const container = document.getElementById(this.containerId);
        if (!container || !this.currentScenario) return;

        const node = this.currentScenario.nodes[this.currentNodeId];

        let choicesHtml = '';

        if (node.type === 'reflection') {
            choicesHtml = `
                <div class="reflection-box" style="margin-top: 2rem;">
                    <label style="display:block; font-weight:bold; margin-bottom:0.5rem; color:var(--accent-color);">
                        <i class="ph-bold ph-pencil-simple"></i> Critical Thinking Challenge
                    </label>
                    <p style="font-size:0.9rem; color:#666;">Type your answer below before revealing the expert analysis.</p>
                    <textarea id="reflection-input" class="neo-input" rows="4" placeholder="Explain your reasoning..." style="width:100%; margin-bottom:1rem; font-family:var(--font-body);"></textarea>
                    
                    <div id="reflection-feedback" role="status" style="display:none; background:#f0fdf4; padding:1.5rem; border-left:4px solid #22c55e; margin-bottom:1rem; border-radius:0 8px 8px 0;">
                        <h4 style="margin-top:0; color:#15803d; font-size:1.1rem;"><i class="ph-bold ph-check-circle"></i> Expert Analysis:</h4>
                        <p style="margin-bottom:0;">${node.feedback || "Good reasoning. Proceed to see the outcome."}</p>
                    </div>

                    <div style="display:flex; gap:1rem; align-items:center;">
                        <button id="reflection-btn" class="neo-btn primary" onclick="
                            const fb = document.getElementById('reflection-feedback');
                            const btn = this;
                            const nextBtn = document.getElementById('reflection-next');
                            const input = document.getElementById('reflection-input');
                            
                            fb.style.display='block';
                            btn.style.display='none';
                            nextBtn.style.display='inline-flex';
                            input.disabled=true;
                            fb.focus();
                        ">Submit Reasoning</button>
                        
                        <button id="reflection-next" class="neo-btn outline" style="display:none;" onclick="window.ScenarioEngine.makeChoice(0)">
                            Continue <i class="ph-bold ph-arrow-right" style="margin-left:0.5rem;"></i>
                        </button>
                    </div>
                </div>
            `;
        } else if (node.choices) {
            choicesHtml = `<div class="scenario-choices" style="display: grid; gap: 1rem; margin-top: 2rem;">`;
            node.choices.forEach((choice, idx) => {
                choicesHtml += `
                    <button class="neo-btn outline" onclick="window.ScenarioEngine.makeChoice(${idx})" style="text-align: left; justify-content: flex-start; padding: 1rem;">
                        <span style="font-weight: bold; color: var(--accent-color); margin-right: 0.5rem;">${String.fromCharCode(65 + idx)}.</span>
                        ${choice.text}
                        <span style="margin-left: auto; font-size: 0.8rem; opacity: 0.7;">
                            ${choice.cost > 0 ? `-$${choice.cost}` : ''} 
                            ${choice.time > 0 ? `+${choice.time}h` : ''}
                        </span>
                    </button>
                `;
            });
            choicesHtml += `</div>`;
        } else if (node.end) {
            choicesHtml = `
                <div style="margin-top: 2rem; text-align: center;">
                    <button class="neo-btn primary large" onclick="window.ScenarioEngine.renderMenu()">Return to Menu</button>
                </div>
             `;
        }

        container.innerHTML = `
            <div class="neo-card" style="max-width: 800px; margin: 0 auto; border-top: 4px solid var(--navy-primary);" role="region" aria-label="Scenario Scenario">
                <div style="display: flex; justify-content: space-between; border-bottom: 1px solid #eee; padding-bottom: 1rem; margin-bottom: 1rem;" aria-live="polite">
                    <div><strong>Case:</strong> ${this.currentScenario.title}</div>
                    <div style="display: flex; gap: 1rem;">
                        <span aria-label="Integrity: ${this.state.integrity} percent"><i class="ph-bold ph-heart" aria-hidden="true"></i> ${this.state.integrity}%</span>
                        <span aria-label="Time Elapsed: ${this.state.time} hours"><i class="ph-bold ph-clock" aria-hidden="true"></i> +${this.state.time}h</span>
                        <span aria-label="Budget Remaining: ${this.state.budget} dollars"><i class="ph-bold ph-money" aria-hidden="true"></i> $${this.state.budget}</span>
                    </div>
                </div>
                
                <div class="scenario-text" tabindex="-1" style="font-size: 1.1rem; line-height: 1.6; outline: none;">
                    ${node.text}
                </div>

                ${choicesHtml}
            </div>
        `;

        // Focus management: move focus to the new text so screen reader starts reading
        setTimeout(() => {
            const textEl = container.querySelector('.scenario-text');
            if (textEl) textEl.focus();
        }, 50);
    }

    makeChoice(index) {
        if (!this.currentScenario) return;
        const node = this.currentScenario.nodes[this.currentNodeId];
        const choice = node.choices[index];

        this.state.budget -= (choice.cost || 0);
        this.state.time += (choice.time || 0);

        // Integrity check? (if budget < 0)

        this.history.push({ nodeId: this.currentNodeId, choiceIndex: index });
        this.currentNodeId = choice.next;
        this.renderNode();
    }
}

window.ScenarioEngine = new ScenarioEngine();

/**
 * Flash Drills - Rapid Fire Practice
 * Pulls random questions from the Quiz Bank for infinite practice.
 */

class FlashDrills {
    constructor(containerId) {
        this.containerId = containerId;
        this.container = document.getElementById(containerId);
        this.currentQuestion = null;
        this.streak = 0;
        this.mode = 'all'; // all, math, logic

        if (this.container) {
            this.renderIntro();
        }
    }

    renderIntro() {
        this.container.innerHTML = `
            <div class="neo-card text-center" style="max-width: 600px; margin: 2rem auto; padding: 3rem;">
                <div style="font-size: 3rem; color: var(--accent-purple); margin-bottom: 1rem;">
                    <i class="ph-bold ph-lightning"></i>
                </div>
                <h2 style="margin-top:0; color:var(--navy-primary);">Flash Drills</h2>
                <p class="lead" style="margin-bottom: 2rem;">Rapid-fire practice to build your speed and intuition.</p>
                
                <div style="margin-bottom: 2rem;">
                    <label style="font-weight:bold; display:block; margin-bottom:0.5rem;">Select Topic:</label>
                    <select id="drill-mode" class="neo-select" style="max-width:300px; margin:0 auto;">
                        <option value="all">Everything (Mix)</option>
                        <option value="math">Calculations Only</option>
                        <option value="content">Concepts & Definitions</option>
                    </select>
                </div>

                <button class="neo-btn primary large" onclick="window.flashDrills.start()">
                    Start Practice <i class="ph-bold ph-play"></i>
                </button>
            </div>
        `;

        // Expose instance for onclick
        window.flashDrills = this;
    }

    start() {
        const select = document.getElementById('drill-mode');
        if (select) this.mode = select.value;
        this.streak = 0;
        this.nextQuestion();
    }

    nextQuestion() {
        this.currentQuestion = this.getRandomQuestion();

        if (!this.currentQuestion) {
            this.container.innerHTML = `<div class="alert alert-error">Error loading questions. Please reload.</div>`;
            return;
        }

        this.renderQuestion();
    }

    getRandomQuestion() {
        if (typeof QUIZ_BANKS === 'undefined') return null;

        let pool = [];

        // Flatten all banks
        Object.keys(QUIZ_BANKS).forEach(key => {
            const bank = QUIZ_BANKS[key];
            if (bank.questions) {
                // Filter by mode
                const validQuestions = bank.questions.filter(q => {
                    if (this.mode === 'all') return true;
                    const isMath = (q.type === 'calculation' || q.question.includes('Calculate') || q.type === 'math');
                    if (this.mode === 'math') return isMath;
                    if (this.mode === 'content') return !isMath;
                    return true;
                });
                pool = pool.concat(validQuestions);
            }
        });

        if (pool.length === 0) return null;
        return pool[Math.floor(Math.random() * pool.length)];
    }

    renderQuestion() {
        const q = this.currentQuestion;
        if (!q) return;

        // Shuffle options but keep track of correct one
        const options = q.options.map((text, idx) => ({ text, isCorrect: idx === q.correct }));
        // Simple shuffle
        for (let i = options.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [options[i], options[j]] = [options[j], options[i]];
        }

        const html = `
            <div style="max-width: 800px; margin: 0 auto; animation: slideUp 0.3s ease;">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem;">
                    <button class="neo-btn small outline" onclick="window.flashDrills.renderIntro()">
                        <i class="ph-bold ph-arrow-left"></i> Exit
                    </button>
                    <div style="font-weight:bold; color:var(--accent-purple);">
                        Current Streak: <span style="font-size:1.2rem;">${this.streak}</span> 🔥
                    </div>
                </div>

                <div class="neo-card">
                    <div style="font-size: 1.2rem; font-weight: 500; margin-bottom: 2rem; border-bottom: 1px solid #eee; padding-bottom: 1.5rem;">
                        ${q.question}
                        ${q.image ? `<img src="${q.image}" style="max-width:100%; margin-top:1rem; border-radius:8px;">` : ''}
                    </div>

                    <div class="drill-options" style="display: grid; gap: 1rem;">
                        ${options.map((opt, idx) => `
                            <button class="drill-option neo-btn outline" 
                                onclick="window.flashDrills.checkAnswer(this, ${opt.isCorrect})"
                                style="text-align:left; padding: 1rem;">
                                <span style="font-weight:bold; margin-right:0.5rem;">${String.fromCharCode(65 + idx)}.</span> ${opt.text}
                            </button>
                        `).join('')}
                    </div>

                    <div id="drill-feedback" style="display:none; margin-top:2rem; padding-top:2rem; border-top:2px solid #eee;">
                        <h4 id="feedback-title" style="margin-top:0;"></h4>
                        <div id="feedback-text" style="margin-bottom:1.5rem;"></div>
                        <button class="neo-btn primary large" style="width:100%;" onclick="window.flashDrills.nextQuestion()">
                            Next Question <i class="ph-bold ph-arrow-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;

        this.container.innerHTML = html;

        // Focus first option for a11y
        setTimeout(() => {
            const first = this.container.querySelector('.drill-option');
            if (first) first.focus();
        }, 50);
    }

    checkAnswer(btn, isCorrect) {
        // Disable all buttons
        const allBtns = this.container.querySelectorAll('.drill-option');
        allBtns.forEach(b => {
            b.disabled = true;
            b.style.pointerEvents = 'none';
        });

        const feedback = document.getElementById('drill-feedback');
        const title = document.getElementById('feedback-title');
        const text = document.getElementById('feedback-text');

        feedback.style.display = 'block';

        if (isCorrect) {
            btn.style.background = '#dcfce7';
            btn.style.borderColor = '#16a34a';
            btn.style.color = '#14532d';
            title.textContent = "Correct! 🎉";
            title.style.color = "#16a34a";
            text.innerHTML = this.currentQuestion.explanation || "Great job!";
            this.streak++;
        } else {
            btn.style.background = '#fee2e2';
            btn.style.borderColor = '#dc2626';
            title.textContent = "Incorrect";
            title.style.color = "#dc2626";

            // Highlight correct one
            // We need to find which button was correct
            // Since we shuffled, we might not know easily unless we stored it in DOM?
            // Actually, we passed isCorrect to the function. We can't find the other button easily
            // unless we store the data-is-correct attribute.
            // Let's just show the explanation which typically contains the answer.
            text.innerHTML = this.currentQuestion.explanation || "Review this concept.";
            this.streak = 0;
        }

        // Focus next button
        const nextBtn = feedback.querySelector('button');
        if (nextBtn) nextBtn.focus();
    }
}

/**
 * Visual Enhancements Module
 * Dynamically injects additional SVG diagrams into chapters
 * v2.5.0 Visual Learning Edition
 */

(function () {
    'use strict';

    const VisualEnhancements = {

        // Initialize on chapter load
        init: function () {
            // Hook into existing loadChapter system
            const originalLoadChapter = window.loadChapter;
            if (typeof originalLoadChapter === 'function') {
                window.loadChapter = function (chapterId, updateHistory) {
                    // Call original function
                    const result = originalLoadChapter.call(this, chapterId, updateHistory);

                    // Add visual enhancements after a short delay (allow DOM to settle)
                    setTimeout(() => {
                        VisualEnhancements.enhanceChapter(chapterId);
                    }, 150);

                    return result;
                };
            }
        },

        enhanceChapter: function (chapterId) {
            switch (chapterId) {
                case 'ch3':
                    this.addTriad();
                    this.addChainOfInfection();
                    break;
                case 'ch6':
                    this.addIncubationLatencyVisual();
                    break;
                case 'ch7':
                    this.addInvestigationRoadmap();
                    break;
                case 'ch10':
                    this.addEpiCurveComparison();
                    break;
                case 'ch11':
                    this.add2x2TableTemplate();
                    break;
                case 'ch12':
                    this.addStudyDesignTree();
                    break;
                case 'ch16':
                    this.addStopTheOutbreakGame();
                    break;
            }
        },

        // Visual 0: Investigation Roadmap (Chapter 7)
        addInvestigationRoadmap: function () {
            const container = document.getElementById('content-container');
            if (!container || document.getElementById('visual-investigation-roadmap')) return;

            // Find the header "The 13 Steps (In Order)"
            const headers = container.querySelectorAll('h2');
            const targetHeader = Array.from(headers).find(h => h.textContent.includes('13 Steps') || h.textContent.includes('In Order'));

            // Should replace the existing placeholder div or insert after header if div is empty
            // In the content file, there is a hardcoded SVG. We will target it to REPLACE it or ENHANCE it.
            // Best approach for "Refactor": If the hardcoded SVG exists, remove it or assume it was removed from content.js
            // But to be safe and "Enhance", let's look for a marker. 
            // In a true refactor, we would delete the SVG from content.js. 
            // For now, let's look for the header and insert our dynamic one, assuming we will clean content.js next.

            if (!targetHeader) return;

            // Check if there's already an SVG immediately after?
            const nextEl = targetHeader.nextElementSibling;
            if (nextEl && nextEl.querySelector('svg')) {
                // It's likely the hardcoded one. We can replace it or leave it. 
                // If the goal is to centralize, we should replace it.
                nextEl.remove();
            }

            const visualDiv = document.createElement('div');
            visualDiv.id = 'visual-investigation-roadmap';
            visualDiv.style.cssText = 'text-align: center; margin: 2rem 0;';
            visualDiv.innerHTML = `
                <svg width="600" height="900" viewBox="0 0 400 900" class="responsive-svg" role="img" aria-label="13-Step Outbreak Investigation Roadmap Flowchart" style="max-width: 100%; height: auto; background: #fafafa; border-radius: 8px; border: 1px solid #eee;">
                    <title>13-Step Outbreak Investigation Roadmap</title>
                    <defs>
                         <marker id="arrowdown" markerWidth="10" markerHeight="7" refX="5" refY="3.5" orient="auto">
                            <polygon points="0 0, 10 3.5, 0 7" fill="#333" />
                        </marker>
                    </defs>

                    <!-- Step 1 -->
                    <rect x="50" y="20" width="300" height="40" rx="5" fill="#eef2ff" stroke="var(--navy-primary)" stroke-width="4"/>
                    <text x="200" y="47" text-anchor="middle" font-weight="900" font-size="15" fill="#333" style="text-transform:uppercase;">1. Prepare for Fieldwork</text>
                    <line x1="200" y1="60" x2="200" y2="80" stroke="#333" stroke-width="4" marker-end="url(#arrowdown)"/>

                    <!-- Step 2 -->
                    <rect x="50" y="80" width="300" height="40" rx="5" fill="#eef2ff" stroke="var(--navy-primary)" stroke-width="4"/>
                    <text x="200" y="107" text-anchor="middle" font-weight="900" font-size="15" fill="#333" style="text-transform:uppercase;">2. Verify Diagnosis</text>
                    <line x1="200" y1="120" x2="200" y2="140" stroke="#333" stroke-width="4" marker-end="url(#arrowdown)"/>

                    <!-- Step 3 -->
                    <rect x="50" y="140" width="300" height="40" rx="5" fill="#eef2ff" stroke="var(--navy-primary)" stroke-width="4"/>
                    <text x="200" y="167" text-anchor="middle" font-weight="900" font-size="15" fill="#333" style="text-transform:uppercase;">3. Establish Existence</text>
                    <line x1="200" y1="180" x2="200" y2="200" stroke="#333" stroke-width="4" marker-end="url(#arrowdown)"/>

                    <!-- Step 4 -->
                    <rect x="50" y="200" width="300" height="40" rx="5" fill="#e0f7fa" stroke="var(--teal-accent)" stroke-width="4"/>
                    <text x="200" y="227" text-anchor="middle" font-weight="900" font-size="15" fill="#333" style="text-transform:uppercase;">4. Defined Case</text>
                    <line x1="200" y1="240" x2="200" y2="260" stroke="#333" stroke-width="4" marker-end="url(#arrowdown)"/>

                    <!-- Step 5 -->
                    <rect x="50" y="260" width="300" height="40" rx="5" fill="#e0f7fa" stroke="var(--teal-accent)" stroke-width="4"/>
                    <text x="200" y="287" text-anchor="middle" font-weight="900" font-size="15" fill="#333" style="text-transform:uppercase;">5. Find Cases & Record</text>
                    <line x1="200" y1="300" x2="200" y2="320" stroke="#333" stroke-width="4" marker-end="url(#arrowdown)"/>

                    <!-- Step 6 -->
                    <rect x="50" y="320" width="300" height="40" rx="5" fill="#e0f7fa" stroke="var(--teal-accent)" stroke-width="4"/>
                    <text x="200" y="347" text-anchor="middle" font-weight="900" font-size="15" fill="#333" style="text-transform:uppercase;">6. Descriptive Epi (PPT)</text>
                    <line x1="200" y1="360" x2="200" y2="380" stroke="#333" stroke-width="4" marker-end="url(#arrowdown)"/>

                    <!-- Step 7 -->
                    <rect x="50" y="380" width="300" height="40" rx="5" fill="#fff3e0" stroke="#f59e0b" stroke-width="4"/>
                    <text x="200" y="407" text-anchor="middle" font-weight="900" font-size="15" fill="#333" style="text-transform:uppercase;">7. Develop Hypotheses</text>
                    <line x1="200" y1="420" x2="200" y2="440" stroke="#333" stroke-width="4" marker-end="url(#arrowdown)"/>

                    <!-- Step 8 -->
                    <rect x="50" y="440" width="300" height="40" rx="5" fill="#fff3e0" stroke="#f59e0b" stroke-width="4"/>
                    <text x="200" y="467" text-anchor="middle" font-weight="900" font-size="15" fill="#333" style="text-transform:uppercase;">8. Evaluate Hypotheses</text>
                    <line x1="200" y1="480" x2="200" y2="500" stroke="#333" stroke-width="4" marker-end="url(#arrowdown)"/>

                    <!-- Step 9 -->
                    <rect x="50" y="500" width="300" height="40" rx="5" fill="#fff3e0" stroke="#f59e0b" stroke-width="4"/>
                    <text x="200" y="527" text-anchor="middle" font-weight="900" font-size="15" fill="#333" style="text-transform:uppercase;">9. Reconsider / Refine</text>
                    <line x1="200" y1="540" x2="200" y2="560" stroke="#333" stroke-width="4" marker-end="url(#arrowdown)"/>

                    <!-- Step 10 -->
                    <rect x="50" y="560" width="300" height="40" rx="5" fill="#f3e5f5" stroke="#9c27b0" stroke-width="4"/>
                    <text x="200" y="587" text-anchor="middle" font-weight="900" font-size="15" fill="#333" style="text-transform:uppercase;">10. Compare with Lab/Env</text>
                    <line x1="200" y1="600" x2="200" y2="620" stroke="#333" stroke-width="4" marker-end="url(#arrowdown)"/>

                    <!-- Step 11 -->
                    <rect x="50" y="620" width="300" height="40" rx="5" fill="#fce4ec" stroke="#e91e63" stroke-width="4"/>
                    <text x="200" y="647" text-anchor="middle" font-weight="900" font-size="15" fill="#333" style="text-transform:uppercase;">11. Implement Control</text>
                    <line x1="200" y1="660" x2="200" y2="680" stroke="#333" stroke-width="4" marker-end="url(#arrowdown)"/>

                    <!-- Step 12 -->
                    <rect x="50" y="680" width="300" height="40" rx="5" fill="#fce4ec" stroke="#e91e63" stroke-width="4"/>
                    <text x="200" y="707" text-anchor="middle" font-weight="900" font-size="15" fill="#333" style="text-transform:uppercase;">12. Maintain Surveillance</text>
                    <line x1="200" y1="720" x2="200" y2="740" stroke="#333" stroke-width="4" marker-end="url(#arrowdown)"/>

                     <!-- Step 13 -->
                    <rect x="50" y="740" width="300" height="40" rx="5" fill="#fce4ec" stroke="#e91e63" stroke-width="4"/>
                    <text x="200" y="767" text-anchor="middle" font-weight="900" font-size="15" fill="#333" style="text-transform:uppercase;">13. Communicate Findings</text>
                    
                    <!-- Side note for Control Measures -->
                    <path d="M370,640 Q390,640 390,400 Q390,100 360,100" fill="none" stroke="#e91e63" stroke-width="4" stroke-dasharray="8,5"/>
                    <text x="395" y="380" transform="rotate(90 395,380)" font-size="13" font-weight="bold" fill="#e91e63">Control can happen ANY time!</text>
                </svg>
            `;

            targetHeader.insertAdjacentElement('afterend', visualDiv);
        },

        // Visual 6: Epidemiologic Triad (Chapter 3)
        addTriad: function () {
            const container = document.getElementById('content-container');
            if (!container || document.getElementById('visual-triad')) return;

            // Find header "The Epidemiologic Triad"
            const headers = container.querySelectorAll('h2');
            const targetHeader = Array.from(headers).find(h => h.textContent.includes('Triad') || h.textContent.includes('Triangle'));

            if (!targetHeader) return;

            const visualDiv = document.createElement('div');
            visualDiv.id = 'visual-triad';
            visualDiv.style.cssText = 'margin: 2rem 0; padding: 1rem; text-align:center;';

            // Dynamic Triad SVG
            visualDiv.innerHTML = `
                <div class="interactive-triad-container" style="max-width: 600px; margin: 0 auto; background: white; padding: 2rem; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); border: 2px solid var(--navy-primary);">
                    <h3 style="color: var(--navy-primary); margin-bottom: 2rem; margin-top:0;">
                        <i class="ph-bold ph-triangle"></i> The Epidemiological Triad
                    </h3>
                    <p style="margin-bottom: 2rem; font-size: 0.9rem; color: #666;">Hover over each corner to see examples.</p>
                    
                    <svg width="100%" height="400" viewBox="0 0 500 400" class="responsive-svg" role="img" aria-label="Epidemiologic Triad">
                        <style>
                            .triad-node { cursor: pointer; transition: all 0.3s ease; }
                            .triad-node:hover { transform: scale(1.05); filter: drop-shadow(0 4px 8px rgba(0,0,0,0.2)); }
                            .triad-node text { font-family: 'Space Grotesk', sans-serif; }
                            .triad-example { opacity: 0; transition: opacity 0.3s; pointer-events: none;}
                            .triad-node:hover ~ .triad-info .triad-default { opacity: 0; }
                            #node-agent:hover ~ .triad-info #info-agent { opacity: 1; }
                            #node-host:hover ~ .triad-info #info-host { opacity: 1; }
                            #node-env:hover ~ .triad-info #info-env { opacity: 1; }
                            #node-vector:hover ~ .triad-info #info-vector { opacity: 1; }
                        </style>

                        <defs>
                             <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                                <feGaussianBlur stdDeviation="3" result="blur" />
                                <feComposite in="SourceGraphic" in2="blur" operator="over" />
                             </filter>
                        </defs>
                        
                        <!-- Triangle Lines -->
                        <path d="M250,50 L50,350 L450,350 Z" fill="none" stroke="#ddd" stroke-width="4" stroke-dasharray="8,4" />
                        
                        <!-- Center: Vector (Optional but often included) -->
                        <g id="node-vector" class="triad-node">
                            <circle cx="250" cy="230" r="40" fill="#f3e8ff" stroke="#9333ea" stroke-width="3" />
                            <text x="250" y="235" text-anchor="middle" font-weight="bold" fill="#7e22ce" font-size="12">VECTOR</text>
                        </g>

                        <!-- Top: Agent -->
                        <g id="node-agent" class="triad-node" transform-origin="250 50">
                            <circle cx="250" cy="50" r="50" fill="#fee2e2" stroke="#dc2626" stroke-width="4" />
                            <text x="250" y="55" text-anchor="middle" font-weight="bold" fill="#991b1b" font-size="14">AGENT</text>
                            <text x="250" y="75" text-anchor="middle" font-size="10" fill="#991b1b" font-weight="bold">(The "What")</text>
                        </g>
                        
                        <!-- Left: Host -->
                        <g id="node-host" class="triad-node" transform-origin="50 350">
                            <circle cx="50" cy="350" r="50" fill="#dbeafe" stroke="#2563eb" stroke-width="4" />
                            <text x="50" y="355" text-anchor="middle" font-weight="bold" fill="#1e40af" font-size="14">HOST</text>
                            <text x="50" y="375" text-anchor="middle" font-size="10" fill="#1e40af" font-weight="bold">(The "Who")</text>
                        </g>

                        <!-- Right: Environment -->
                        <g id="node-env" class="triad-node" transform-origin="450 350">
                            <circle cx="450" cy="350" r="50" fill="#d1fae5" stroke="#059669" stroke-width="4" />
                            <text x="450" y="355" text-anchor="middle" font-weight="bold" fill="#065f46" font-size="12">ENVIRONMENT</text>
                            <text x="450" y="375" text-anchor="middle" font-size="10" fill="#065f46" font-weight="bold">(The "Where")</text>
                        </g>

                        <!-- Info Area (Center Bottom or Overlay) -->
                        <g class="triad-info" transform="translate(250, 430)"> <!-- Actually outside viewbox? No, expand viewbox or put text inside -->
                             <!-- We'll put text in the middle area or below -->
                        </g>
                    </svg>
                    
                    <div class="triad-info" style="min-height: 80px; margin-top: 1rem; padding: 1rem; background: #f8fafc; border-radius: 8px; border-left: 4px solid var(--navy-primary);">
                        <div id="info-agent" class="triad-example" style="display:none;">
                            <strong><i class="ph-bold ph-bug"></i> Agent Examples:</strong> Bacteria, Virus, Fungi, Parasite. <br><em>Key Feature: Virulence, Infectivity.</em>
                        </div>
                        <div id="info-host" class="triad-example" style="display:none;">
                            <strong><i class="ph-bold ph-user"></i> Host Examples:</strong> Age, Sex, Genetics, Immune Status. <br><em>Key Question: Who is susceptible?</em>
                        </div>
                        <div id="info-env" class="triad-example" style="display:none;">
                            <strong><i class="ph-bold ph-plant"></i> Environment Examples:</strong> Crowding, Sanitation, Temperature. <br><em>Key Question: What creates the opportunity?</em>
                        </div>
                        <div id="info-vector" class="triad-example" style="display:none;">
                            <strong><i class="ph-bold ph-butterfly"></i> Vector Examples:</strong> Mosquitoes, Ticks, Fleas. <br><em>Role: The carrier (optional center of triad).</em>
                        </div>
                         <div class="triad-default">
                            <strong>Interactive Guide:</strong> Hover over a circle above to see details.
                        </div>
                    </div>
                    
                    <script>
                        // Simple script to handle hover if CSS fails or for better control
                        // (CSS solution used above for simplicity: adjacent sibling selector)
                        // But DOM structure is: SVG then DIV. SVG nodes hover cannot affect DIV easily without JS.
                        // So let's use a tiny inline script to handle mouseover.
                        
                        document.querySelectorAll('.triad-node').forEach(node => {
                            node.addEventListener('mouseenter', function() {
                                document.querySelectorAll('.triad-example').forEach(el => el.style.display = 'none');
                                document.querySelector('.triad-default').style.display = 'none';
                                const id = this.id.replace('node-', 'info-');
                                document.getElementById(id).style.display = 'block';
                            });
                            node.addEventListener('mouseleave', function() {
                                // Optional: reset on leave? Or keep last selection?
                                // Let's keep last selection or revert to default?
                                // Revert looks cleaner.
                                document.querySelectorAll('.triad-example').forEach(el => el.style.display = 'none');
                                document.querySelector('.triad-default').style.display = 'block';
                            });
                        });
                    </script>
                </div>
             `;

            targetHeader.insertAdjacentElement('afterend', visualDiv);

            // Re-bind the script because innerHTML tags don't run automatically
            setTimeout(() => {
                const container = document.getElementById('visual-triad');
                if (!container) return;
                const nodes = container.querySelectorAll('.triad-node');
                const infos = container.querySelectorAll('.triad-example');
                const def = container.querySelector('.triad-default');

                nodes.forEach(node => {
                    node.addEventListener('mouseenter', function () {
                        infos.forEach(el => el.style.display = 'none');
                        if (def) def.style.display = 'none';
                        const id = this.id.replace('node-', 'info-');
                        const target = container.querySelector('#' + id);
                        if (target) target.style.display = 'block';
                    });
                    node.addEventListener('mouseleave', function () {
                        infos.forEach(el => el.style.display = 'none');
                        if (def) def.style.display = 'block';
                    });
                });
            }, 100);
        },

        // Visual 5: Chain of Infection (Chapter 3)
        addChainOfInfection: function () {
            const container = document.getElementById('content-container');
            if (!container || document.getElementById('visual-chain-infection')) return;

            // Find header with "Chain of Infection"
            const headers = container.querySelectorAll('h2, h3');
            const targetHeader = Array.from(headers).find(h => h.textContent.includes('Chain') || h.textContent.includes('Infection'));

            if (!targetHeader) return;

            const visualDiv = document.createElement('div');
            visualDiv.id = 'visual-chain-infection';
            visualDiv.style.cssText = 'margin: 2rem 0; padding: 1rem;';
            visualDiv.innerHTML = `
                <div style="background: white; border: 3px solid var(--navy-primary); border-radius: 50%; padding: 2rem; max-width: 600px; margin: 0 auto; position: relative; box-shadow: 0 10px 25px rgba(0,0,0,0.1);">
                    <h3 style="text-align: center; color: var(--navy-primary); margin-top: 0; margin-bottom: 2rem;">
                        <i class="ph-bold ph-link"></i> The Chain of Infection
                    </h3>
                    <svg width="100%" height="450" viewBox="0 0 500 500" class="responsive-svg" role="img" aria-label="The Chain of Infection: A 6-link circular diagram showing Pathogen, Reservoir, Exit, Transmission, Entry, and Host">
                        <title>The Chain of Infection Diagram</title>
                        <defs>
                            <marker id="arrowChain" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                                <path d="M0,0 L0,6 L9,3 z" fill="#333" />
                            </marker>
                        </defs>
                        
                        <!-- Center: Germ -->
                        <circle cx="250" cy="250" r="60" fill="#fef3c7" stroke="#d97706" stroke-width="3"/>
                        <text x="250" y="245" text-anchor="middle" font-weight="bold" fill="#b45309" font-size="14">PATHOGEN</text>
                        <text x="250" y="265" text-anchor="middle" font-size="11" fill="#b45309">(Agent)</text>

                        <!-- Link 1: Reservoir (Top) -->
                        <circle cx="250" cy="80" r="50" fill="#e0f2fe" stroke="#0284c7" stroke-width="3"/>
                        <text x="250" y="75" text-anchor="middle" font-weight="bold" font-size="12" fill="#0369a1">1. RESERVOIR</text>
                        <text x="250" y="90" text-anchor="middle" font-size="10" fill="#0369a1">Where it lives</text>
                        
                        <!-- Arrow 1 -> 2 -->
                        <path d="M295,95 Q340,110 370,140" fill="none" stroke="#333" stroke-width="2" marker-end="url(#arrowChain)"/>

                        <!-- Link 2: Portal of Exit (Top Right) -->
                        <circle cx="410" cy="180" r="50" fill="#e0f2fe" stroke="#0284c7" stroke-width="3"/>
                        <text x="410" y="175" text-anchor="middle" font-weight="bold" font-size="12" fill="#0369a1">2. EXIT</text>
                        <text x="410" y="190" text-anchor="middle" font-size="10" fill="#0369a1">How it leaves</text>

                         <!-- Arrow 2 -> 3 -->
                        <path d="M410,230 Q400,280 370,320" fill="none" stroke="#333" stroke-width="2" marker-end="url(#arrowChain)"/>

                        <!-- Link 3: Mode of Transmission (Bottom Right) -->
                        <circle cx="340" cy="380" r="50" fill="#e0f2fe" stroke="#0284c7" stroke-width="3"/>
                        <text x="340" y="375" text-anchor="middle" font-weight="bold" font-size="12" fill="#0369a1">3. TRANSMIT</text>
                        <text x="340" y="390" text-anchor="middle" font-size="10" fill="#0369a1">How it moves</text>
                        
                         <!-- Arrow 3 -> 4 -->
                        <path d="M290,390 Q250,400 210,390" fill="none" stroke="#333" stroke-width="2" marker-end="url(#arrowChain)"/>

                        <!-- Link 4: Portal of Entry (Bottom Left) -->
                        <circle cx="160" cy="380" r="50" fill="#e0f2fe" stroke="#0284c7" stroke-width="3"/>
                        <text x="160" y="375" text-anchor="middle" font-weight="bold" font-size="12" fill="#0369a1">4. ENTRY</text>
                        <text x="160" y="390" text-anchor="middle" font-size="10" fill="#0369a1">How it gets in</text>
                        
                         <!-- Arrow 4 -> 5 -->
                        <path d="M120,350 Q100,300 100,240" fill="none" stroke="#333" stroke-width="2" marker-end="url(#arrowChain)"/>

                        <!-- Link 5: Susceptible Host (Top Left) -->
                        <circle cx="90" cy="180" r="50" fill="#e0f2fe" stroke="#0284c7" stroke-width="3"/>
                        <text x="90" y="175" text-anchor="middle" font-weight="bold" font-size="12" fill="#0369a1">5. HOST</text>
                        <text x="90" y="190" text-anchor="middle" font-size="10" fill="#0369a1">Next victim</text>
                        
                        <!-- Arrow 5 -> 1 -->
                        <path d="M130,150 Q170,110 210,95" fill="none" stroke="#333" stroke-width="2" marker-end="url(#arrowChain)"/>

                        <!-- Breaking the Chain Labels -->
                        <rect x="235" y="130" width="30" height="30" fill="white" stroke="#ef4444" stroke-width="2" transform="rotate(45 250 145)"/>
                        <text x="250" y="150" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="14">X</text>
                        
                        <rect x="360" y="270" width="30" height="30" fill="white" stroke="#ef4444" stroke-width="2" transform="rotate(45 375 285)"/>
                        <text x="375" y="290" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="14">X</text>
                        
                        <rect x="130" y="270" width="30" height="30" fill="white" stroke="#ef4444" stroke-width="2" transform="rotate(45 145 285)"/>
                        <text x="145" y="290" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="14">X</text>
                    </svg>
                    <div style="text-align: center; margin-top: 1rem;">
                        <span style="background: #fee2e2; color: #b91c1c; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.9rem; font-weight: bold;">
                            <i class="ph-bold ph-scissors"></i> BREAK THE CHAIN to stop the outbreak!
                        </span>
                    </div>
                </div>
            `;

            targetHeader.insertAdjacentElement('afterend', visualDiv);
        },

        // Visual 1: Incubation vs Latency Timeline (Chapter 6)
        addIncubationLatencyVisual: function () {
            const container = document.getElementById('content-container');
            if (!container) return;

            // Find the table and insert visual after it
            const tables = container.querySelectorAll('table');
            if (tables.length === 0) return;

            const targetTable = Array.from(tables).find(t =>
                t.textContent.includes('Incubation Period') &&
                t.textContent.includes('Latency Period')
            );

            if (!targetTable || document.getElementById('visual-incubation-latency')) return;

            const visualDiv = document.createElement('div');
            visualDiv.id = 'visual-incubation-latency';
            visualDiv.style.cssText = 'text-align: center; margin: 2rem 0;';
            visualDiv.innerHTML = `
                <svg width="500" height="280" viewBox="0 0 500 280" class="responsive-svg" role="img" aria-label="Timeline comparing Incubation Period (days) versus Latency Period (years)" style="max-width: 100%; height: auto; background: white; border: 2px solid var(--navy-primary); border-radius: 8px; padding: 1rem;">
                    <title>Incubation vs Latency Timeline</title>
                    <text x="250" y="25" text-anchor="middle" font-weight="bold" font-size="16" fill="var(--navy-primary)">Incubation vs Latency</text>
                    
                    <!-- Incubation Period (Top) -->
                    <text x="20" y="55" font-weight="bold" font-size="13" fill="#c2410c">INCUBATION (Infectious)</text>
                    
                    <defs>
                        <marker id="arrowIncub" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                            <path d="M0,0 L0,6 L9,3 z" fill="#c2410c" />
                        </marker>
                        <marker id="arrowLat" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                            <path d="M0,0 L0,6 L9,3 z" fill="#a16207" />
                        </marker>
                    </defs>
                    
                    <line x1="40" y1="75" x2="420" y2="75" stroke="#c2410c" stroke-width="3" marker-end="url(#arrowIncub)"/>
                    <circle cx="40" cy="75" r="6" fill="#ef4444"/>
                    <text x="40" y="95" text-anchor="middle" font-size="11" font-weight="bold">Exposure</text>
                    <rect x="40" y="67" width="180" height="16" fill="#fef3c7" opacity="0.6"/>
                    <text x="130" y="62" text-anchor="middle" font-size="10" fill="#92400e">Incubation</text>
                    <circle cx="220" cy="75" r="6" fill="#22c55e"/>
                    <text x="220" y="95" text-anchor="middle" font-size="11" font-weight="bold">Symptoms</text>
                    <text x="320" y="72" font-size="12" fill="#666">Ex: Flu (1-4 days)</text>
                    
                    <!-- Latency Period (Bottom) -->
                    <text x="20" y="150" font-weight="bold" font-size="13" fill="#a16207">LATENCY (Chronic)</text>
                    <line x1="40" y1="170" x2="420" y2="170" stroke="#a16207" stroke-width="3" marker-end="url(#arrowLat)"/>
                    <circle cx="40" cy="170" r="6" fill="#ef4444"/>
                    <text x="40" y="190" text-anchor="middle" font-size="11" font-weight="bold">Exposure</text>
                    <rect x="40" y="162" width="310" height="16" fill="#fed7aa" opacity="0.6"/>
                    <text x="195" y="157" text-anchor="middle" font-size="10" fill="#92400e">Latency (Years)</text>
                    <circle cx="350" cy="170" r="6" fill="#3b82f6"/>
                    <text x="350" y="190" text-anchor="middle" font-size="11" font-weight="bold">Detectable</text>
                    <text x="260" y="220" font-size="12" fill="#666">Ex: Cancer (20+ years)</text>
                </svg>
                <p style="font-size: 0.9rem; color: #666; margin-top: 0.5rem; font-style: italic;"><strong>Key:</strong> Incubation = <em>days</em>; Latency = <em>years</em>.</p>
            `;

            // Insert after the table's parent container
            const tableContainer = targetTable.closest('.table-container') || targetTable.parentElement;
            tableContainer.insertAdjacentElement('afterend', visualDiv);
        },

        // Visual 2: Epi Curve Pattern Comparison (Chapter 10)
        addEpiCurveComparison: function () {
            const container = document.getElementById('content-container');
            if (!container || document.getElementById('visual-epi-curves')) return;

            // Find h2 with "Curve Logic" or similar
            const headers = container.querySelectorAll('h2');
            const targetHeader = Array.from(headers).find(h => h.textContent.includes('Curve') || h.textContent.includes('10.'));
            if (!targetHeader) return;

            const visualDiv = document.createElement('div');
            visualDiv.id = 'visual-epi-curves';
            visualDiv.style.cssText = 'margin: 2rem 0; padding: 1.5rem; background: #f8fafc; border: 2px solid var(--navy-primary); border-radius: 12px;';
            visualDiv.innerHTML = `
                <h3 style="text-align: center; color: var(--navy-primary); margin-bottom: 1.5rem;">
                    <i class="ph-bold ph-chart-line"></i> Epi Curve Pattern Recognition Guide
                </h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem;">
                    
                    <!-- Point Source -->
                    <div class="neo-card" style="padding: 1rem;">
                        <h4 style="color: #dc2626; margin-top: 0;">Point Source</h4>
                        <svg width="100%" height="120" viewBox="0 0 200 120" role="img" aria-label="Point Source Curve: Single peak, rapid decline">
                            <path d="M10,100 L40,100 L60,40 L80,30 L100,20 L120,40 L140,70 L160,90 L190,100" 
                                  fill="none" stroke="#dc2626" stroke-width="3"/>
                            <text x="100" y="115" text-anchor="middle" font-size="11" fill="#666">Time →</text>
                        </svg>
                        <p style="font-size: 0.85rem; margin: 0.5rem 0 0 0;"><strong>Shape:</strong> Sharp peak, rapid decline</p>
                        <p style="font-size: 0.85rem; margin: 0.25rem 0 0 0;"><em>Example: Wedding buffet outbreak</em></p>
                    </div>
                    
                    <!-- Continuous Source -->
                    <div class="neo-card" style="padding: 1rem;">
                        <h4 style="color: #ea580c; margin-top: 0;">Continuous Source</h4>
                        <svg width="100%" height="120" viewBox="0 0 200 120" role="img" aria-label="Continuous Source Curve: Plateau shape">
                            <rect x="40" y="40" width="120" height="45" fill="#fed7aa" opacity="0.6"/>
                            <path d="M10,100 L40,45 L160,45 L190,100" 
                                  fill="none" stroke="#ea580c" stroke-width="3"/>
                            <text x="100" y="115" text-anchor="middle" font-size="11" fill="#666">Time →</text>
                        </svg>
                        <p style="font-size: 0.85rem; margin: 0.5rem 0 0 0;"><strong>Shape:</strong> Plateau</p>
                        <p style="font-size: 0.85rem; margin: 0.25rem 0 0 0;"><em>Example: Contaminated well</em></p>
                    </div>
                    
                    <!-- Propagated -->
                    <div class="neo-card" style="padding: 1rem;">
                        <h4 style="color: #16a34a; margin-top: 0;">Propagated</h4>
                        <svg width="100%" height="120" viewBox="0 0 200 120" role="img" aria-label="Propagated Curve: Multiple progressive peaks">
                            <path d="M10,100 L30,80 L50,40 L70,70 L90,35 L110,60 L130,30 L150,55 L170,45 L190,65" 
                                  fill="none" stroke="#16a34a" stroke-width="3"/>
                            <text x="100" y="115" text-anchor="middle" font-size="11" fill="#666">Time →</text>
                        </svg>
                        <p style="font-size: 0.85rem; margin: 0.5rem 0 0 0;"><strong>Shape:</strong> Successive peaks</p>
                        <p style="font-size: 0.85rem; margin: 0.25rem 0 0 0;"><em>Example: Measles outbreak</em></p>
                    </div>
                    
                    <!-- Intermittent -->
                    <div class="neo-card" style="padding: 1rem;">
                        <h4 style="color: #7c3aed; margin-top: 0;">Intermittent</h4>
                        <svg width="100%" height="120" viewBox="0 0 200 120" role="img" aria-label="Intermittent Source Curve: Irregular spikes">
                            <path d="M10,100 L30,95 L50,40 L70,95 L90,94 L110,35 L130,96 L150,93 L170,45 L190,97" 
                                  fill="none" stroke="#7c3aed" stroke-width="3"/>
                            <text x="100" y="115" text-anchor="middle" font-size="11" fill="#666">Time →</text>
                        </svg>
                        <p style="font-size: 0.85rem; margin: 0.5rem 0 0 0;"><strong>Shape:</strong> Irregular spikes</p>
                        <p style="font-size: 0.85rem; margin: 0.25rem 0 0 0;"><em>Example: Weekend picnics</em></p>
                    </div>
                </div>
                <div class="study-tip" style="margin-top: 1rem; background: #fffbeb; border-left: 4px solid #f59e0b; padding: 1rem;">
                    <strong><i class="ph-bold ph-lightbulb"></i> Exam Tip:</strong> Look at the overall shape first. Point source = ONE peak. Propagated = MULTIPLE peaks. Continuous = PLATEAU.
                </div>
            `;

            targetHeader.insertAdjacentElement('afterend', visualDiv);
        },

        // Visual 3: 2x2 Table Template (Chapter 11)
        add2x2TableTemplate: function () {
            const container = document.getElementById('content-container');
            if (!container || document.getElementById('visual-2x2-table')) return;

            // Find section about 2x2 tables or attack rates
            const headers = container.querySelectorAll('h2, h3');
            const targetHeader = Array.from(headers).find(h =>
                h.textContent.includes('2') && h.textContent.includes('2') ||
                h.textContent.includes('Attack') ||
                h.textContent.includes('Outbreak Math')
            );
            if (!targetHeader) return;

            const visualDiv = document.createElement('div');
            visualDiv.id = 'visual-2x2-table';
            visualDiv.style.cssText = 'margin: 2rem 0; padding: 1.5rem; background: linear-gradient(135deg, #f8fafc 0%, #e0f2fe 100%); border: 3px solid var(--navy-primary); border-radius: 12px;';
            visualDiv.innerHTML = `
                <h3 style="text-align: center; color: var(--navy-primary); margin-bottom: 1rem;">
                    <i class="ph-bold ph-table"></i> The 2×2 Table: Foundation of Outbreak Math
                </h3>
                <div style="display: flex; justify-content: center; gap: 2rem; flex-wrap: wrap; align-items: center;">
                    <div>
                        <table style="border-collapse: collapse; font-size: 14px; background: white; box-shadow: 4px 4px 0 rgba(0,0,0,0.1);">
                            <tr>
                                <td style="border: 2px solid #333; padding: 0.5rem; background: #f3f4f6;"></td>
                                <td style="border: 2px solid #333; padding: 0.5rem; text-align: center; font-weight: bold; background: #dbeafe;">Exposed</td>
                                <td style="border: 2px solid #333; padding: 0.5rem; text-align: center; font-weight: bold; background: #dbeafe;">Not Exposed</td>
                                <td style="border: 2px solid #333; padding: 0.5rem; text-align: center; font-weight: bold; background: #f3f4f6;">Total</td>
                            </tr>
                            <tr>
                                <td style="border: 2px solid #333; padding: 0.5rem; font-weight: bold; background: #fee2e2;">Ill</td>
                                <td style="border: 2px solid #333; padding: 1.5rem; text-align: center; font-size: 18px; font-weight: bold; background: #fef3c7;">a</td>
                                <td style="border: 2px solid #333; padding: 1.5rem; text-align: center; font-size: 18px; font-weight: bold; background: #fef3c7;">b</td>
                                <td style="border: 2px solid #333; padding: 1rem; text-align: center; font-weight: bold; background: #f3f4f6;">a+b</td>
                            </tr>
                            <tr>
                                <td style="border: 2px solid #333; padding: 0.5rem; font-weight: bold; background: #d1fae5;">Not Ill</td>
                                <td style="border: 2px solid #333; padding: 1.5rem; text-align: center; font-size: 18px; font-weight: bold; background: #e0f2fe;">c</td>
                                <td style="border: 2px solid #333; padding: 1.5rem; text-align: center; font-size: 18px; font-weight: bold; background: #e0f2fe;">d</td>
                                <td style="border: 2px solid #333; padding: 1rem; text-align: center; font-weight: bold; background: #f3f4f6;">c+d</td>
                            </tr>
                            <tr>
                                <td style="border: 2px solid #333; padding: 0.5rem; font-weight: bold; background: #f3f4f6;">Total</td>
                                <td style="border: 2px solid #333; padding: 1rem; text-align: center; font-weight: bold; background: #f3f4f6;">a+c</td>
                                <td style="border: 2px solid #333; padding: 1rem; text-align: center; font-weight: bold; background: #f3f4f6;">b+d</td>
                                <td style="border: 2px solid #333; padding: 1rem; text-align: center; font-weight: bold; background: #e5e7eb;">N</td>
                            </tr>
                        </table>
                    </div>
                    <div style="max-width: 350px;">
                        <div class="formula-box" style="margin-bottom: 1rem; padding: 1rem; background: white; border: 2px solid #10b981; border-radius: 8px;">
                            <strong style="color: #10b981;">Attack Rate (Exposed):</strong>
                            <p style="font-size: 1.2rem; margin: 0.5rem 0;">AR<sub>exp</sub> = a / (a+c)</p>
                        </div>
                        <div class="formula-box" style="margin-bottom: 1rem; padding: 1rem; background: white; border: 2px solid #3b82f6; border-radius: 8px;">
                            <strong style="color: #3b82f6;">Risk Ratio:</strong>
                            <p style="font-size: 1.2rem; margin: 0.5rem 0;">RR = [a/(a+c)] / [b/(b+d)]</p>
                        </div>
                        <div class="formula-box" style="padding: 1rem; background: white; border: 2px solid #8b5cf6; border-radius: 8px;">
                            <strong style="color: #8b5cf6;">Odds Ratio:</strong>
                            <p style="font-size: 1.2rem; margin: 0.5rem 0;">OR = (a×d) / (b×c)</p>
                        </div>
                    </div>
                </div>
                <div class="exam-trap" style="margin-top: 1rem; background: #fef2f2; border-left: 4px solid #dc2626; padding: 1rem;">
                    <strong><i class="ph-bold ph-warning"></i> Common Mistake:</strong> Students often swap rows/columns. Remember: <strong>EXPOSURE goes on TOP</strong>, DISEASE goes on the SIDE.
                </div>
            `;

            // Insert near the beginning of the chapter
            const firstParagraph = container.querySelector('p.lead') || container.querySelector('p');
            if (firstParagraph) {
                firstParagraph.insertAdjacentElement('afterend', visualDiv);
            }
        },

        // Visual 4: Study Design Decision Tree (Chapter 12)
        addStudyDesignTree: function () {
            const container = document.getElementById('content-container');
            if (!container || document.getElementById('visual-study-tree')) return;

            const headers = container.querySelectorAll('h2');
            const targetHeader = Array.from(headers).find(h =>
                h.textContent.includes('Study') || h.textContent.includes('Design') || h.textContent.includes('12.')
            );
            if (!targetHeader) return;

            const visualDiv = document.createElement('div');
            visualDiv.id = 'visual-study-tree';
            visualDiv.style.cssText = 'margin: 2rem 0;';
            visualDiv.innerHTML = `
                <div style="background: linear-gradient(to bottom right, #eff6ff, #dbeafe); border: 3px solid var(--navy-primary); border-radius: 12px; padding: 2rem;">
                    <h3 style="text-align: center; color: var(--navy-primary); margin-bottom: 1.5rem;">
                        <i class="ph-bold ph-tree-structure"></i> Study Design Selection Flowchart
                    </h3>
                    <svg width="100%" height="500" viewBox="0 0 600 500" style="max-width: 100%; height: auto;" role="img" aria-label="Study Design Decision Tree Flowchart">
                        <title>Study Design Selection Flowchart</title>
                        <defs>
                            <marker id="arrowTree" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                                <path d="M0,0 L0,6 L9,3 z" fill="#333" />
                            </marker>
                        </defs>
                        
                        <!-- Start -->
                        <rect x="200" y="20" width="200" height="50" rx="25" fill="#3b82f6" stroke="#1e40af" stroke-width="2"/>
                        <text x="300" y="50" text-anchor="middle" font-weight="bold" fill="white" font-size="16">START</text>
                        
                        <!-- Question 1: Outbreak Now? -->
                        <line x1="300" y1="70" x2="300" y2="100" stroke="#333" stroke-width="2" marker-end="url(#arrowTree)"/>
                        <rect x="150" y="100" width="300" height="60" rx="8" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
                        <text x="300" y="125" text-anchor="middle" font-weight="bold" font-size="14">Is there an outbreak</text>
                        <text x="300" y="145" text-anchor="middle" font-weight="bold" font-size="14">happening NOW?</text>
                        
                        <!-- Yes Branch -->
                        <line x1="250" y1="160" x2="150" y2="200" stroke="#333" stroke-width="2" marker-end="url(#arrowTree)"/>
                        <text x="180" y="185" font-size="12" font-weight="bold" fill="#16a34a">YES</text>
                        
                        <!-- Question 2: Rare Disease? -->
                        <rect x="20" y="200" width="260" height="60" rx="8" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
                        <text x="150" y="225" text-anchor="middle" font-weight="bold" font-size="14">Is the disease</text>
                        <text x="150" y="245" text-anchor="middle" font-weight="bold" font-size="14">RARE?</text>
                        
                        <!-- Case-Control -->
                        <line x1="80" y1="260" x2="80" y2="300" stroke="#333" stroke-width="2" marker-end="url(#arrowTree)"/>
                        <text x="50" y="285" font-size="11" font-weight="bold" fill="#16a34a">YES</text>
                        <rect x="10" y="300" width="140" height="80" rx="8" fill="#d1fae5" stroke="#10b981" stroke-width="3"/>
                        <text x="80" y="330" text-anchor="middle" font-weight="bold" font-size="13" fill="#065f46">CASE-CONTROL</text>
                        <text x="80" y="350" text-anchor="middle" font-size="10">Start with cases,</text>
                        <text x="80" y="365" text-anchor="middle" font-size="10">find controls</text>
                        
                        <!-- Cohort -->
                        <line x1="220" y1="260" x2="220" y2="300" stroke="#333" stroke-width="2" marker-end="url(#arrowTree)"/>
                        <text x="240" y="285" font-size="11" font-weight="bold" fill="#dc2626">NO</text>
                        <rect x="165" y="300" width="140" height="80" rx="8" fill="#e0f2fe" stroke="#0284c7" stroke-width="3"/>
                        <text x="235" y="330" text-anchor="middle" font-weight="bold" font-size="13" fill="#075985">COHORT</text>
                        <text x="235" y="350" text-anchor="middle" font-size="10">Follow exposed</text>
                        <text x="235" y="365" text-anchor="middle" font-size="10">and unexposed</text>
                        
                        <!-- No Branch (No Outbreak) -->
                        <line x1="350" y1="160" x2="450" y2="200" stroke="#333" stroke-width="2" marker-end="url(#arrowTree)"/>
                        <text x="420" y="185" font-size="12" font-weight="bold" fill="#dc2626">NO</text>
                        
                        <!-- Cross-Sectional -->
                        <rect x="320" y="200" width="260" height="60" rx="8" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
                        <text x="450" y="225" text-anchor="middle" font-weight="bold" font-size="14">Need quick snapshot?</text>
                        
                        <line x1="380" y1="260" x2="380" y2="300" stroke="#333" stroke-width="2" marker-end="url(#arrowTree)"/>
                        <text x="350" y="285" font-size="11" font-weight="bold" fill="#16a34a">YES</text>
                        <rect x="320" y="300" width="140" height="80" rx="8" fill="#fef3c7" stroke="#f59e0b" stroke-width="3"/>
                        <text x="390" y="330" text-anchor="middle" font-weight="bold" font-size="13" fill="#78350f">CROSS-SECT.</text>
                        <text x="390" y="350" text-anchor="middle" font-size="10">Survey at one</text>
                        <text x="390" y="365" text-anchor="middle" font-size="10">point in time</text>
                        
                        <line x1="520" y1="260" x2="520" y2="300" stroke="#333" stroke-width="2" marker-end="url(#arrowTree)"/>
                        <text x="540" y="285" font-size="11" font-weight="bold" fill="#dc2626">NO</text>
                        <rect x="470" y="300" width="120" height="80" rx="8" fill="#e0e7ff" stroke="#6366f1" stroke-width="3"/>
                        <text x="530" y="330" text-anchor="middle" font-weight="bold" font-size="13" fill="#3730a3">COHORT</text>
                        <text x="530" y="350" text-anchor="middle" font-size="10">Long-term</text>
                        <text x="530" y="365" text-anchor="middle" font-size="10">follow-up</text>
                        
                        <!-- Legend -->
                        <rect x="20" y="420" width="560" height="70" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>
                        <text x="300" y="445" text-anchor="middle" font-weight="bold" font-size="14">Quick Reference</text>
                        <text x="150" y="465" text-anchor="middle" font-size="11"><tspan font-weight="bold">Outbreak + Rare:</tspan> Case-Control</text>
                        <text x="300" y="465" text-anchor="middle" font-size="11"><tspan font-weight="bold">Outbreak + Common:</tspan> Cohort</text>
                        <text x="450" y="465" text-anchor="middle" font-size="11"><tspan font-weight="bold">No Outbreak:</tspan> Cross-Sectional or Cohort</text>
                    </svg>
                </div>
                <div class="study-tip" style="margin-top: 1rem; background: #eff6ff; border-left: 4px solid #3b82f6; padding: 1rem;">
                    <strong><i class="ph-bold ph-lightbulb"></i> Exam Strategy:</strong> In Division B, you'll mostly see <strong>Case-Control</strong> (for outbreaks of rare diseases like Salmonella) and <strong>Cohort</strong> (for common exposures like food at a picnic).
                </div>
            `;

            targetHeader.insertAdjacentElement('afterend', visualDiv);
        },

        // Visual 7: Stop the Outbreak Mini-Game (Chapter 16)
        addStopTheOutbreakGame: function () {
            const container = document.getElementById('content-container');
            if (!container || document.getElementById('visual-outbreak-sim')) return;

            const headers = container.querySelectorAll('h2, h3');
            // Look for "Control Measures" or similar
            const targetHeader = Array.from(headers).find(h =>
                h.textContent.includes('Control') || h.textContent.includes('Intervention') || h.textContent.includes('16.')
            );

            if (!targetHeader) return;

            const visualDiv = document.createElement('div');
            visualDiv.id = 'visual-outbreak-sim';
            visualDiv.style.cssText = 'margin: 2rem 0;';

            visualDiv.innerHTML = `
                <div class="neo-card" style="border: 3px solid var(--navy-primary); padding: 0; overflow: hidden;">
                    <div style="background: var(--navy-primary); color: white; padding: 1rem; text-align: center;">
                        <h3 style="margin:0; color:white;"><i class="ph-fill ph-shield-check"></i> Simulation: Stop the Outbreak</h3>
                        <p style="margin: 0.5rem 0 0; opacity: 0.9;">Apply control measures to flatten the curve!</p>
                    </div>
                    
                    <div style="padding: 1.5rem; display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; align-items: start;">
                        <!-- Controls -->
                        <div>
                            <div class="sim-stat" style="margin-bottom: 1.5rem; text-align: center;">
                                <div style="font-size: 0.9rem; color: #666;">Effective R (Rt)</div>
                                <div id="sim-r-value" style="font-size: 2.5rem; font-weight: bold; color: #dc2626;">4.0</div>
                                <div id="sim-status" style="font-weight: bold; color: #dc2626;">EXPONENTIAL GROWTH</div>
                            </div>

                            <h4 style="border-bottom: 2px solid #eee; padding-bottom: 0.5rem;">Select Interventions:</h4>
                            <div class="sim-controls">
                                <label class="neo-check" style="display: flex; align-items: center; padding: 0.75rem; border: 1px solid #eee; border-radius: 8px; margin-bottom: 0.5rem; cursor: pointer;">
                                    <input type="checkbox" data-reduce="0.5" onchange="window.VisualEnhancements.updateSim()">
                                    <span style="margin-left: 0.75rem; font-weight: bold;">Mask Mandate</span>
                                    <span style="margin-left: auto; color: #22c55e; font-size: 0.9rem;">-0.5 R</span>
                                </label>
                                <label class="neo-check" style="display: flex; align-items: center; padding: 0.75rem; border: 1px solid #eee; border-radius: 8px; margin-bottom: 0.5rem; cursor: pointer;">
                                    <input type="checkbox" data-reduce="1.2" onchange="window.VisualEnhancements.updateSim()">
                                    <span style="margin-left: 0.75rem; font-weight: bold;">School Closure</span>
                                    <span style="margin-left: auto; color: #22c55e; font-size: 0.9rem;">-1.2 R</span>
                                </label>
                                <label class="neo-check" style="display: flex; align-items: center; padding: 0.75rem; border: 1px solid #eee; border-radius: 8px; margin-bottom: 0.5rem; cursor: pointer;">
                                    <input type="checkbox" data-reduce="1.5" onchange="window.VisualEnhancements.updateSim()">
                                    <span style="margin-left: 0.75rem; font-weight: bold;">Mass Vaccination</span>
                                    <span style="margin-left: auto; color: #22c55e; font-size: 0.9rem;">-1.5 R</span>
                                </label>
                                <label class="neo-check" style="display: flex; align-items: center; padding: 0.75rem; border: 1px solid #eee; border-radius: 8px; margin-bottom: 0.5rem; cursor: pointer;">
                                    <input type="checkbox" data-reduce="0.3" onchange="window.VisualEnhancements.updateSim()">
                                    <span style="margin-left: 0.75rem; font-weight: bold;">Hand Washing</span>
                                    <span style="margin-left: auto; color: #22c55e; font-size: 0.9rem;">-0.3 R</span>
                                </label>
                            </div>
                        </div>

                        <!-- Graph -->
                        <div style="background: #f8fafc; border-radius: 12px; padding: 1rem; border: 1px solid #e2e8f0;">
                            <svg id="sim-graph" width="100%" height="250" viewBox="0 0 300 200" preserveAspectRatio="none">
                                <!-- Axes -->
                                <line x1="20" y1="180" x2="290" y2="180" stroke="#94a3b8" stroke-width="2" />
                                <line x1="20" y1="180" x2="20" y2="20" stroke="#94a3b8" stroke-width="2" />
                                <text x="150" y="195" text-anchor="middle" font-size="10" fill="#64748b">Time (Weeks)</text>
                                <text x="10" y="100" text-anchor="middle" transform="rotate(-90 10 100)" font-size="10" fill="#64748b">Cases</text>
                                
                                <!-- Baseline Curve (Ghost) -->
                                <path d="M20,180 Q100,20 180,180" fill="none" stroke="#cbd5e1" stroke-width="2" stroke-dasharray="4,4" />
                                <text x="185" y="175" font-size="9" fill="#94a3b8">Uncontrolled</text>

                                <!-- Active Curve -->
                                <path id="sim-curve" d="M20,180 Q100,20 180,180" fill="rgba(220, 38, 38, 0.2)" stroke="#dc2626" stroke-width="3" />
                                
                                <!-- Threshold Line -->
                                <line x1="20" y1="100" x2="290" y2="100" stroke="#ef4444" stroke-width="1" stroke-dasharray="2,2" />
                                <text x="290" y="95" text-anchor="end" font-size="9" fill="#ef4444">Hospital Capacity</text>
                            </svg>
                        </div>
                    </div>
                </div>
             `;

            targetHeader.insertAdjacentElement('afterend', visualDiv);

            // Attach Logic
            this.updateSim = function () {
                const inputs = document.querySelectorAll('#visual-outbreak-sim input[type="checkbox"]');
                let R = 4.0; // Base R0
                inputs.forEach(input => {
                    if (input.checked) R -= parseFloat(input.dataset.reduce);
                });

                if (R < 0.5) R = 0.5; // Min floor

                // Update Display
                const rDisplay = document.getElementById('sim-r-value');
                const status = document.getElementById('sim-status');
                const curve = document.getElementById('sim-curve');

                if (!rDisplay) return;

                rDisplay.textContent = R.toFixed(1);

                if (R < 1.0) {
                    rDisplay.style.color = '#16a34a'; // Green
                    status.textContent = "OUTBREAK CONTROLLED";
                    status.style.color = '#16a34a';
                    curve.setAttribute('stroke', '#16a34a');
                    curve.setAttribute('fill', 'rgba(22, 163, 74, 0.2)');
                } else if (R < 2.0) {
                    rDisplay.style.color = '#ea580c'; // Orange
                    status.textContent = "SLOW GROWTH";
                    status.style.color = '#ea580c';
                    curve.setAttribute('stroke', '#ea580c');
                    curve.setAttribute('fill', 'rgba(234, 88, 12, 0.2)');
                } else {
                    rDisplay.style.color = '#dc2626'; // Red
                    status.textContent = "EXPONENTIAL GROWTH";
                    status.style.color = '#dc2626';
                    curve.setAttribute('stroke', '#dc2626');
                    curve.setAttribute('fill', 'rgba(220, 38, 38, 0.2)');
                }

                // Update Curve Shape
                // Simple quadratic bezier control point manipulation based on R
                // Base (R=4) peak at y=20 (high). End at 180 (zero).
                // Capacity line is y=100.
                // Start is (20, 180). End is roughly (200, 180).
                // Control Point X = 110. Control point Y varies.
                // y=180 is baseline. y=20 is max height.

                // Formula: PeakHeight = proportional to R.
                // R=4 -> Peak is high (y=20). Height = 160px.
                // R=1 -> Peak should be low (steady state or slight bump). 
                // R<1 -> Peak immediately drops.

                // Simple viz hack:
                // Y_control = 180 - ( (R / 4.0) * 160 * 1.5 )
                // The *1.5 accentuates the height difference.

                let heightFactor = R / 4.0;
                let peakY = 180 - (heightFactor * 160);
                if (peakY < 10) peakY = 10;
                if (peakY > 175) peakY = 175; // Even R=0.5 has some cases usually

                // If R < 1, curve should arguably not even peak, just drop?
                // But for simplified "Curve Flattening" viz, just lowering the peak is enough to convey the concept.

                // Also extend the duration if flattened?
                // For simplicity, we keep width constant but lower height.

                curve.setAttribute('d', `M20,180 Q110,${peakY} 200,180`);
            };
        }
    };

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => VisualEnhancements.init());
    } else {
        VisualEnhancements.init();
    }

    // Expose to window for debugging
    window.VisualEnhancements = VisualEnhancements;

})();

