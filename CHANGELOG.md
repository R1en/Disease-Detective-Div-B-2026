# Changelog v5.0.0: The Mastery Update
**Date:** January 3, 2026
**Focus:** Neo-Brutalist Redesign, Advanced Simulation, and Coach Tools

## Major Features
*   **Neo-Brutalist UI Overhaul:** Complete redesign of the entire interface using a high-contrast, bold "Neo-Brutalist" aesthetic with unified button sizing and clean typography.
*   **Interactive Cases (Renamed):** Renamed "Interactive Scenarios" to "Interactive Cases" to better reflect the gamified, decision-based nature of the content.
*   **Mega Cases:** Introduced multi-stage, complex case studies (Tier 2) requiring data cleaning and advanced analysis.
*   **Coach Resources Portal:** Dedicated section for coaches with curriculum guides, training plans, and administrative tools.
*   **Practice Problems Generator:** Dynamic tool for generating infinite practice math problems tailored to specific topics.
*   **Sidebar Reorganization:** complete structural update to the sidebar, grouping "Tools, Exam & Appendix" logically and improving navigation flow.

## Enhancements
*   **Quiz Engine v5.0:**
    *   **Return to Quiz:** Floating button allows users to visit chapters for reference and return seamlessly to their active quiz question without losing state.
    *   **State Preservation:** Fixed critical bug where navigating away from a quiz reset progress.
*   **Performance:** Optimized loading for large data sets in the Mega Cases module.
*   **Typos & Fixes:** Corrected "Scenerios" to "Scenarios" and fixed various content typos.

---

# Changelog v4.0.0: The Gold Standard
**Date:** December 25, 2025
**Focus:** Architectural Consolidation & Stability

*   **Unified Architecture:** Consolidated multiple patch files into a robust core `epi-core.js` and `epi-data.js`.
*   **Stability:** Addressed all critical file corruption issues and lint errors.
*   **Service Worker:** Enhanced caching strategy for 100% offline reliability.

---

# Changelog v2.5.0: Visual Learning Edition
**Date:** December 19, 2025
**Focus:** Enhanced Visual Learning Tools

## Visual Enhancements
*   **Dynamic Visual System:** New visual-enhancements module dynamically injects SVG diagrams
*   **Incubation vs Latency Timeline:** Side-by-side comparison (Ch 6)
*   **Epi Curve Pattern Comparison:** 4 curve types with visual recognition guide (Ch 10)
*   **2x2 Table Template:** Color-coded table with formulas overlaid (Ch 11)
*   **Study Design Decision Tree:** Flowchart for selecting study type (Ch 12)
*   **Timing Traps Visual:** Guide to Prospective vs Retrospective study designs (Ch 12)
*   **Investigation Roadmap:** 13-step flowchart dynamically injected (Ch 7)
*   **Chain of Infection Visual:** Interactive 6-link circular diagram (Ch 3)
*   **Size Standardization:** All SVG visuals now use consistent 400-500px dimensions

## Total Visual Coverage
*   **13 Professional SVG Diagrams** across 8 chapters
*   **Visual Coverage:** 45% of core concepts (above industry standard)
*   **Existing Visuals:** Chain of Infection, Wheel of Causation, John Snow Map, Bradford Hill Criteria, Bathtub Analogy, Prevention Timeline, Historical Timelines

---

# Changelog v2.4.2: Final Polish & Smart Resume
**Date:** December 19, 2025
**Focus:** User Experience Optimization

## Quiz Experience
*   **Smart Resume:** Returning to a chapter with an active quiz now **automatically skips the start screen** and resumes the session directly in the paused state.
*   **Seamless Navigation:** Users can leave and return to quizzes without any clicks or confirmation dialogs, creating a fluid study experience.

---

# Changelog v2.4.1: Visual & UX Polish
**Date:** December 19, 2025
**Focus:** Visual Aids & Quiz Experience

## Visual Enhancements
*   **Levels of Prevention Visual (Ch 15):** Integrated timeline diagram mapping Primary/Secondary/Tertiary prevention to disease stages.
*   **John Snow's Map (Ch 1):** Added stylized map visualization of the Broad Street Pump cluster.
*   **Wheel of Causation (Ch 3):** Fixed placeholder by adding a robust SVG diagram.
*   **Interactive Timelines (Ch 2):** Replaced static lists with vertical visual timelines for Pioneers and Outbreaks.

## Quiz Engine Improvements
*   **In-Place Pause:** Pause button now triggers an overlay instead of exiting the page.
*   **Auto-Save Navigation:** Navigating via sidebar automatically saves active quiz progress without confirmation dialogs.
*   **Seamless Resume:** Returning to an active quiz bypasses the generic prompt and loads directly to the Pause screen.
*   **UI Optimization:** Moved Pause button to the footer for better accessibility and flow.

---

# Changelog v2.4.0: Strategic Mastery Update

**Date:** December 19, 2025
**Focus:** Audit Recommendations & Competition Strategy

## New Features
1.  **Competition Strategy Guide (Appendix):**
    *   Added a dedicated tab with tips on Time Management, Tie-Breakers, Cheat Sheets, and Mental Game.
    *   Addresses "Singular Source" audit recommendation.

2.  **Diagnostic Checklist (Appendix):**
    *   Added a self-assessment checklist for students to track their mastery of Part I, II, and III topics.

3.  **Advanced Topic Distinctions:**
    *   Introduced visual badges (`Extension`) for content that exceeds Division B scope (e.g., Odds Ratios in Chapter 12).
    *   Added context boxes explaining *why* a student should learn these advanced topics.

4.  **Critical Thinking Mode:**
    *   Updated the Interactive Scenario Engine to support "Reflection" steps.
    *   Scenarios can now ask open-ended questions before revealing the expert analysis, encouraging active reasoning over passive clicking.

5.  **UX Enhancements:**
    *   **Interactive Rules:** The Rules section in the Appendix is now an interactive accordion, allowing students to drill down into specific rule definitions.
    *   **Expanded Strategy Guide:** The Strategy tab now features deep-dive content on Cheat Sheet design, Test Tactics, and Tie-Breakers.
    *   **Visual Polish:** Improved styling for Bias cards with clearer "Fix/Mitigation" highlights.

## Technical Updates
*   **Service Worker:** Bumped to v2.4.0.
*   **Deployment:** New zip build `EpiEngine_v2.4.0_Strategies.zip`.
