/**
 * Quiz Professional Transformer - FINAL VERSION (AUDITED & SYSTEM-WIDE)
 * - Dynamically rephrases casual questions into exam-style formats
 * - Auto-generates clean, professional HTML tables for data questions
 * - UNIFIES STYLING: Applies robust inline CSS to ALL tables (generated or static)
 * - SYSTEM WIDE: Scans QUIZ_BANKS, SCENARIO_DB, and CASE_LIBRARY.
 * - SAFETY: SVG-Safe regexes and DOM parsing limited to non-SVG content where possible.
 */

window.QUIZ_PROFESSIONAL_TRANSFORM = {
    // 1. Regex patterns to detect casual phrasing key concepts
    patterns: [
        {
            regex: /^What is (.+)\?$/i,
            transform: (match, term) => {
                // Heuristic: If it's a short term, use "BEST defines". If longer, use "BEST describes".
                if (term.split(' ').length < 5) return `Which of the following statements BEST defines "${term.trim()}"?`;
                return `Which of the following options BEST describes ${term.trim()}?`;
            }
        },
        {
            regex: /^Which (.+) is (correct|true|false|incorrect)(\?|:)$/i,
            transform: (match, noun, trueFalse, punc) => `Which of the following ${noun.trim()} is ${trueFalse.toUpperCase()}?`
        },
        // Existing patterns...
        {
            regex: /^(.+)\s+(is|means|are|refers to|suggests|indicates|involves|requires):\s*$/i,
            transform: (match, term, verb) => {
                if (/suggests|indicates/i.test(verb)) return `The scenario described above MOST likely ${verb.toLowerCase()}:`;
                return `In epidemiology, the term "${term.trim()}" is BEST defined as:`;
            }
        },
        {
            regex: /^([A-Za-z\s\.,%'-]{3,60})\?\s*$/i,
            transform: (match, term) => `Which of the following BEST characterizes ${term.trim().toLowerCase()}?`
        },
        {
            regex: /^(.+)\s+include:\s*$/i,
            transform: (match, term) => `Which of the following components are typically included in ${term.trim().toLowerCase()}?`
        },
        {
            regex: /^Definition of (.+):\s*$/i,
            transform: (match, term) => `Which of the following statements BEST defines the term "${term.trim()}"?`
        },
        {
            regex: /^Example of (.+):\s*$/i,
            transform: (match, term) => `Which of the following is a representative example of ${term.trim().toLowerCase()}?`
        },
        {
            regex: /^Advantage of (.+):\s*$/i,
            transform: (match, term) => `What is a PRIMARY advantage of using ${term.trim().toLowerCase()}?`
        },
        {
            regex: /^(Disadvantage|Limitation) of (.+):\s*$/i,
            transform: (match, type, term) => `What is a significant ${type.toLowerCase()} of ${term.trim().toLowerCase()}?`
        },
        {
            regex: /^(Goal|Purpose) of (.+):\s*$/i,
            transform: (match, type, term) => `What is the primary ${type.toLowerCase()} of ${term.trim().toLowerCase()}?`
        },
        {
            regex: /^Why (do|does|is|are) (.+)\?$/i,
            transform: (match, verb, rest) => `What is the PRIMARY reason that ${rest.trim()}?`
        },
        {
            regex: /^How (to|do you) calculate (.+)(\?|:)$/i,
            transform: (match, p1, term, p3) => `Which of the following is the standard method to calculate ${term.trim()}?`
        },
        {
            regex: /^Best way to (.+)(\?|:)$/i,
            transform: (match, rest, p2) => `What is the MOST effective method to ${rest.trim()}?`
        },
        {
            regex: /^Formula for (.+)(\?|:)$/i,
            transform: (match, term, p2) => `Which of the following represents the correct formula for ${term.trim()}?`
        },
        {
            regex: /^(Difference|Compare|Distinguish) (.+) (vs|versus|and) (.+)(\?|:)$/i,
            transform: (match, verb, t1, conj, t2, punc) => `What is the PRIMARY distinction between ${t1.trim()} and ${t2.trim()}?`
        }
    ],

    // 2. Replacements for shortcuts
    clean: [
        { regex: /\b(w\/)\b/gi, replacement: 'with' },
        { regex: /([a-z])\s*\+\s*([a-z])/gi, replacement: '$1 and $2' }, // "fever + rash"
        { regex: /\bvs\.?\b/gi, replacement: 'versus' },
        { regex: /\bDx\b/g, replacement: 'diagnosis' },
        { regex: /\bTx\b/g, replacement: 'treatment' },
        { regex: /\bHx\b/g, replacement: 'history' },
        { regex: /\s*->\s*/g, replacement: ' leads to ' },
        { regex: /\s+&\s+/g, replacement: ' and ' }, // Space required to protect HTML enitities
        { regex: /\s+approx\.?\s+/gi, replacement: ' approximately ' }
    ],

    // 3. Helper to detect and fix informal option formats
    formatOption: function (opt) {
        if (typeof opt !== 'string') return opt;
        const match = opt.match(/^(.+)\s*\((\d+)\/(\d+)\)$/);
        if (match) {
            return `${match[1]} (${match[2]} cases / ${match[3]} exposed)`;
        }
        return opt;
    },

    // NEW: Explanation Transformer
    transformExplain: function (explain) {
        if (!explain) return explain;
        // If it starts with "Correct: ", bold it or make it "Correct Answer:"
        if (explain.startsWith("Correct:")) {
            return explain.replace(/^Correct:\s*/, "<strong>Correct Answer:</strong> ");
        }
        // If it doesn't start with bold text, add "Explanation:"
        if (!explain.startsWith("<") && !explain.startsWith("Correct") && !explain.startsWith("Explanation")) {
            return "<strong>Explanation:</strong> " + explain;
        }
        return explain;
    },

    // 4. Styles definition (central source of truth)
    styles: {
        table: "width:100%; max-width:100%; border-collapse:collapse; margin:15px auto; border:2px solid #333; font-size:0.9rem; box-shadow:0 2px 4px rgba(0,0,0,0.1); background:white;",
        th: "background-color:#1e293b; color:white; padding:8px; border:1px solid #333; text-align:center; font-weight:bold;",
        td: "padding:8px; border:1px solid #ccc; text-align:center; color:#333;",
        rowHead: "padding:8px; border:1px solid #ccc; text-align:left; background-color:#f8fafc; font-weight:600; color:#333;"
    },

    // 5. Helper to add valid HTML table for data questions
    addTableToQuestion: function (q, data) {
        if (!data) return q;
        const tableStart = `<table class="exam-table">`;
        let rows = '';

        if (data.tp !== undefined) {
            rows += `
                <tr><th></th><th>Disease +</th><th>Disease -</th></tr>
                <tr><td>Test +</td><td>${data.tp} <span style="font-size:0.8em; color:#666;">(TP)</span></td><td>${data.fp} <span style="font-size:0.8em; color:#666;">(FP)</span></td></tr>
                <tr><td>Test -</td><td>${data.fn} <span style="font-size:0.8em; color:#666;">(FN)</span></td><td>${data.tn} <span style="font-size:0.8em; color:#666;">(TN)</span></td></tr>
            `;
        }
        return q + tableStart + rows + `</table>`;
    }
};

(function () {
    setTimeout(() => {
        // Run if ANY data source exists
        if (!window.QUIZ_BANKS && !window.AGGREGATED_QUIZ_POOL && !window.SCENARIO_DB && !window.CASE_LIBRARY) return;

        console.log('[PROFESSIONAL TRANSFORM] Starting dynamic optimization (SYSTEM-WIDE AUDIT MODE)...');
        let processed = 0;
        const _tableCount = 0;
        let styleCount = 0;

        const transformer = window.QUIZ_PROFESSIONAL_TRANSFORM;
        const parser = new DOMParser();

        // CORE TRANSFORMATION HELPER
        const transformText = (text, contextItem = null) => {
            if (!text || typeof text !== 'string') return text;
            let transformed = text;
            const original = text;

            // A. Patterns
            for (const p of transformer.patterns) {
                if (p.regex.test(transformed)) {
                    const match = transformed.match(p.regex);
                    transformed = p.transform(match, ...match.slice(1));
                }
            }

            // B. Data Detect
            let tableData = null;
            const hasData = /TP\s*=\s*(\d+)/i.exec(original);

            if (hasData || (contextItem && contextItem.table_data && contextItem.table_data.tp)) {
                const tpM = /TP\s*=\s*(\d+)/i.exec(original);
                const fpM = /FP\s*=\s*(\d+)/i.exec(original);
                const fnM = /FN\s*=\s*(\d+)/i.exec(original);
                const tnM = /TN\s*=\s*(\d+)/i.exec(original);

                if (contextItem && contextItem.table_data && contextItem.table_data.tp) {
                    tableData = contextItem.table_data;
                } else if (tpM && tnM) {
                    tableData = {
                        tp: tpM ? tpM[1] : 0,
                        fp: fpM ? fpM[1] : 0,
                        fn: fnM ? fnM[1] : 0,
                        tn: tnM ? tnM[1] : 0
                    };
                }

                if (tableData) {
                    transformed = transformed
                        .replace(/TP\s*=\s*\d+[,.;]?/gi, '')
                        .replace(/FP\s*=\s*\d+[,.;]?/gi, '')
                        .replace(/FN\s*=\s*\d+[,.;]?/gi, '')
                        .replace(/TN\s*=\s*\d+[,.;]?/gi, '')
                        .replace(/Total\s*=\s*\d+[,.;]?/gi, '')
                        .replace(/,\s*,/g, ',')
                        .replace(/\(\s*\)/g, '')
                        .trim();

                    if (transformed.endsWith(',') || transformed.endsWith(';')) {
                        transformed = transformed.slice(0, -1);
                    }
                    tableCount++;
                }
            }

            // C. Clean 
            for (const c of transformer.clean) {
                if (c.regex && typeof c.replacement === 'string') {
                    transformed = transformed.replace(c.regex, c.replacement);
                }
            }

            transformed = transformed
                .replace(/\s*->\s*/g, ' leads to ')
                .replace(/\?\s*\?+/g, '?')
                .replace(/\s+/g, ' ')
                .trim();

            // D. Append plain table if data exists
            if (tableData) {
                transformed = transformer.addTableToQuestion(transformed, tableData);
            }

            // E. DOM PROCESSING (Styles) - SAFELY
            // Note: We do NOT process 'EPIDEMIC_ENGINE_CONTENT' here to avoid breaking SVGs.
            // This logic is safe for Quizzes and Scenarios which use simpler HTML.
            if (transformed.includes('<table')) {
                const doc = parser.parseFromString(transformed, 'text/html');
                const tables = doc.querySelectorAll('table');
                let modified = false;

                tables.forEach(tbl => {
                    const cls = tbl.className || '';
                    // Target all likely data tables
                    if (cls.includes('exam-table') || cls.includes('line-list-table') || !cls) {
                        modified = true;

                        // Apply Layout
                        if (!tbl.getAttribute('style')) {
                            tbl.setAttribute('style', transformer.styles.table);
                        }

                        // Apply Headers
                        tbl.querySelectorAll('th').forEach(th => {
                            if (!th.getAttribute('style')) {
                                th.setAttribute('style', transformer.styles.th);
                            }
                        });

                        // Apply Cells
                        tbl.querySelectorAll('tr').forEach(tr => {
                            const tds = tr.querySelectorAll('td');
                            tds.forEach((td, index) => {
                                const styleToUse = (index === 0) ? transformer.styles.rowHead : transformer.styles.td;
                                if (!td.getAttribute('style')) {
                                    td.setAttribute('style', styleToUse);
                                }
                            });
                        });
                    }
                });

                if (modified) {
                    transformed = doc.body.innerHTML;
                    styleCount++;
                }
            }

            return transformed;
        };

        // 1. PROCESS QUIZ BANKS & POOL
        const processQuizItem = (item) => {
            if (!item.q) return;
            item.q = transformText(item.q, item);
            processed++;
            // Options
            if (item.options && Array.isArray(item.options)) {
                item.options = item.options.map(o => transformer.formatOption(o));
            }
            // Explain
            if (item.explain) {
                item.explain = transformer.transformExplain ? transformer.transformExplain(item.explain) : item.explain;
            }
        };

        const processList = (list) => {
            if (!list) return;
            list.forEach(processQuizItem);
        };

        if (window.QUIZ_BANKS) {
            Object.keys(window.QUIZ_BANKS).forEach(bankName => {
                const bank = window.QUIZ_BANKS[bankName];
                if (!bank) return;
                ['beginner', 'intermediate', 'advanced'].forEach(tier => {
                    if (bank[tier] && Array.isArray(bank[tier])) processList(bank[tier]);
                });
                Object.keys(bank).forEach(subKey => {
                    if (['beginner', 'intermediate', 'advanced'].includes(subKey)) return;
                    if (Array.isArray(bank[subKey])) processList(bank[subKey]);
                });
            });
        }
        if (window.AGGREGATED_QUIZ_POOL) processList(window.AGGREGATED_QUIZ_POOL);

        // 2. PROCESS SCENARIO DB
        if (window.SCENARIO_DB) {
            Object.keys(window.SCENARIO_DB).forEach(key => {
                const scenario = window.SCENARIO_DB[key];
                if (scenario && scenario.nodes) {
                    Object.keys(scenario.nodes).forEach(nodeId => {
                        const node = scenario.nodes[nodeId];
                        if (node.text) {
                            node.text = transformText(node.text);
                            processed++;
                        }
                    });
                }
            });
        }

        // 3. PROCESS CASE LIBRARY
        if (window.CASE_LIBRARY && Array.isArray(window.CASE_LIBRARY)) {
            window.CASE_LIBRARY.forEach(c => {
                if (c.questions && Array.isArray(c.questions)) {
                    c.questions.forEach(q => {
                        if (q.q) {
                            q.q = transformText(q.q);
                            processed++;
                        }
                    });
                }
            });
        }

        console.log(`[PROFESSIONAL TRANSFORM] Logic Applied to ${processed} items. Table Styles: ${styleCount}.`);

    }, 750);
})();
