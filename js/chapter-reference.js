// CHAPTER REFERENCE UTILITY
// Maps chapter IDs to titles and sections for quiz question references

window.CHAPTER_REFERENCE = {
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
    surveillance_systems: {
        title: "Surveillance Types",
        sections: ["5.1", "5.2"],
        topics: ["active", "passive", "syndromic", "sentinel"]
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
    study_design: {
        title: "Study Design Selector",
        sections: ["11.4", "11.5"],
        topics: ["cohort", "case-control", "cross-sectional", "study design selection", "rare outcomes"]
    },
    ch12: {
        title: "Outbreak Math II",
        sections: ["12.1", "12.2", "12.3"],
        topics: ["odds ratio", "confidence intervals", "study designs", "matched pairs", "Mantel-Haenszel"]
    },
    genomic_epi: {
        title: "Genomic Epidemiology",
        sections: ["12.4", "12.5"],
        topics: ["WGS", "SNPs", "phylogenetic trees", "molecular clock", "PulseNet"]
    },
    ch13: {
        title: "Hypothesis Testing",
        sections: ["13.1", "13.2", "13.3", "13.4", "13.5"],
        topics: ["null hypothesis", "p-value", "Type I error", "Type II error", "chi-square", "power"]
    },
    predictive_values: {
        title: "Predictive Values",
        sections: ["13.4"],
        topics: ["PPV", "NPV", "positive predictive value", "negative predictive value", "prevalence"]
    },
    ch14: {
        title: "Data Synthesis",
        sections: ["14.1", "14.2"],
        topics: ["vital statistics", "YPLL", "SMR", "age-adjustment", "crude rates", "specific rates"]
    },
    bias_identification: {
        title: "Bias & Confounding",
        sections: ["14.4"],
        topics: ["bias", "confounding", "selection bias", "recall bias", "information bias"]
    },
    mortality_metrics: {
        title: "Mortality Metrics",
        sections: ["14.3"],
        topics: ["CFR", "case fatality rate", "mortality rate", "severity vs impact"]
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
    ch21: {
        title: "Environmental Toxins",
        sections: ["21.1", "21.2", "21.3"],
        topics: ["chemical epidemiology", "radon", "lead", "arsenic", "pesticides", "sludge", "carbon monoxide", "dose-response"]
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
        'screening': 'ch19',
        'carbon monoxide': 'ch21',
        'radon': 'ch21',
        'lead': 'ch21',
        'arsenic': 'ch21',
        'organophosphate': 'ch21',
        'pesticide': 'ch21',
        'sludge': 'ch21',
        'dose-response': 'ch21'
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
