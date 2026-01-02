/**
 * SCIENCE OLYMPIAD 2026 - DISEASE DETECTIVES (DIV B)
 * RULES COMPLIANCE MATRIX & SCHEMA
 * 
 * This file acts as the pedagogical source of truth.
 * It maps App Content (Chapters, Tools) to Official Rule IDs.
 */

const RULES_DATA = {
    meta: {
        version: "2026-Draft",
        division: "B"
    },
    // The Core Rules (Simplified for Logic)
    rules: {
        "1.a": "Scientific Inquiry: Hypothesis Generation",
        "1.b": "Scientific Inquiry: Study Design (Cross-Sectional)",
        "1.c": "Scientific Inquiry: Study Design (Case-Control)",
        "1.d": "Scientific Inquiry: Study Design (Cohort)",
        "2.a": "Pattern Recognition: Person, Place, Time",
        "2.b": "Pattern Recognition: Epi Curves (Point Source)",
        "2.c": "Pattern Recognition: Epi Curves (Propagated)",
        "2.d": "Pattern Recognition: Maps & Clustering",
        "3.a": "Etiology: Agents (Bacteria, Virus, Fungi, Prions)",
        "3.b": "Etiology: Modes of Transmission",
        "3.c": "Etiology: Chain of Infection",
        "4.a": "Calculation: Attack Rate",
        "4.b": "Calculation: Relative Risk (Risk Ratio)",
        "4.c": "Calculation: Odds Ratio",
        "4.d": "Calculation: Confidence Intervals (Basic)",
        "5.a": "Prevention: Levels (Prim, Sec, Tert)",
        "5.b": "Prevention: Strategies (Vector, Env, etc.)",
        "5.c": "Prevention: Herd Immunity & R0",
        "6.a": "Public Health: Surveillance Systems",
        "6.b": "Public Health: Outbreak Investigation Steps (13)",
        "6.c": "Public Health: Ethics, Laws, & Privacy"
    },
    // Mapping: Which Chapter Covers Which Rule?
    mapping: {
        "ch1": ["1.a", "6.b"],           // Frameworks -> Inquiry, Steps
        "ch2": ["6.c"],                  // History often touches on ethics/laws context
        "ch3": ["3.a", "3.b", "3.c"],    // Triad & Chain covers Etiology
        "ch4": ["4.a"],                  // Measures of Freq -> Basics
        "ch5": ["6.a", "3.b"],           // Surveillance
        "ch6": ["2.a"],                  // Natural History -> PPT
        "ch7": ["6.b"],                  // Investigation Roadmap -> Steps
        "ch8": ["2.a"],                  // Case Definitions
        "ch9": ["2.a", "2.d"],           // Line Lists -> Data Organization
        "ch10": ["2.b", "2.c"],          // Epi Curves
        "ch11": ["4.a", "4.b"],          // Math I -> AR, RR
        "ch12": ["4.c", "4.d"],          // Math II -> OR, CI
        "ch13": ["1.b", "1.c", "1.d"],   // Hypothesis Testing -> Study Designs
        "ch14": ["2.d"],                 // Data Synthesis
        "ch15": ["5.a"],                 // Prevention Levels
        "ch16": ["5.b"],                 // Control Measures
        "ch17": ["6.c"],                 // Isolation & Ethics
        "ch18": ["5.c"],                 // Pop Dynamics -> Herd Immunity
        "drills": ["2.b", "2.c", "4.b", "4.c"], // Tools cover curves and math
        "simulation": ["*"]              // Exams cover all
    }
};

/**
 * Rules Engine
 * Provides helper functions to check compliance.
 */
window.RulesEngine = {
    /**
     * Returns an array of Rule Objects {id, desc} for a given chapter.
     */
    getRulesForChapter(chapterId) {
        const ruleIds = RULES_DATA.mapping[chapterId];
        if (!ruleIds) return [];
        if (ruleIds[0] === "*") return [{ id: "ALL", desc: "Comprehensive Coverage" }];

        return ruleIds.map(id => ({
            id: id,
            desc: RULES_DATA.rules[id] || "Unknown Rule"
        }));
    },

    /**
     * Generates an HTML badge string for display in the header.
     */
    renderBadges(chapterId) {
        const rules = this.getRulesForChapter(chapterId);
        if (rules.length === 0) return '';

        return `
            <div class="rules-badge-container" style="margin-top: 0.5rem; display:flex; gap:0.5rem; flex-wrap:wrap;">
                ${rules.map(r => `
                    <span class="neo-badge small" title="${r.desc}" style="background:var(--accent-blue); color:var(--text-color); cursor:help;">
                        <i class="ph-bold ph-check-circle"></i> Rule ${r.id}
                    </span>
                `).join('')}
            </div>
        `;
    }
};
