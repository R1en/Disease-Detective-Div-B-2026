# Release Notes: Epidemic Engine v2.5.0 (Visual Learning Edition)

**Release Date:** December 19, 2025
**Version:** v2.5.0
**Status:** Visual Learning / Final Polish

## Overview
This update focuses on **Visual Learning** and **Accessibility**, maximizing the educational value of the application through high-fidelity diagrams and improved contrast tools.

## Key Enhancements (v2.5.0)
1. **Study Design Visualization**: Replaced the basic flowchart with a massive, high-detail SVG decision tree (1100px) that clearer separates observational vs experimental studies.
2. **Epi Curve Generator**: Upgraded the Visualizer with high-contrast (Navy Blue) bars and fixed missing styles for the Data Plotter mode.
3. **Print Optimization**: Comprehensive CSS overhaul for "Ink Saving" printouts of Chapters, Notesheets, and Flashcards (Linear view).
4. **Code Quality**: Removed all debug logs and finalized the "Factory Reset" logic to ensure a clean slate for competitions.
5. **Exam Tips**: Added "Time Traps" and specific 2026 exam clues to the Study Design chapter.

---

# Release Notes: Epidemic Engine v2.3.1 (National Edition)

**Release Date:** December 19, 2025
**Version:** v2.3.1
**Status:** Field Ready / Offline Capable

## Overview
This release finalizes the "Epidemic Engine" as a comprehensive, offline-first study companion for Science Olympiad (Division B) students. It focuses on tournament compliance (no internet required), field utility (printable resources), and interactive learning (simulations).

## Key Features Added

### 1. Offline & Mobile Readiness (PWA)
*   **Service Worker:** Added `sw.js` to cache all core assets, allowing the app to run without an internet connection after the first load.
*   **Local Dependencies:** Replaced all CDNs (Google Fonts, Phosphor Icons) with local assets to prevent network blocking and ensure offline styling.
*   **Mobile Sidebar:** Improved responsive navigation for "Coach Mode" and mobile revision.

### 2. Interactive Simulations
*   **Wheel of Causation:** New interactive visualization in Chapter 3 to explore Host, Agent, and Environment interactions.
*   **Exposure Window Calculator:** Enhanced tool with visual "drag-to-adjust" handles for calculating incubation periods.
*   **Simulation Exams:** Fully functional 50-question timed exams with "Mark for Review" and analytics.

### 3. Field Tools
*   **Notesheet Generator:** Now includes a **"My Field Notes"** section that persists data (via LocalStorage), allowing students to type custom formulas/notes and print the formatted sheet.
*   **Flashcards:** Added a **"Print All"** feature to generate a physical study deck.

### 4. System Improvements
*   **Hard Reset:** Added a "Factory Reset" option in the About section to clear all user data/progress.
*   **Accessibility:** Improved text contrast ratios (WCAG AA).
*   **Performance:** Stripped debug console logs for cleaner production runtime.

## Installation / Usage
1.  **Extract:** Unzip the folder `Epidemic_Engine_v2.3.1`.
2.  **Run:** Open `index.html` in any modern browser (Chrome/Edge recommended).
3.  **Offline:** To verify offline mode, load the page once, then disconnect internet or toggle "Offline" in DevTools. The app will continue to function.

## Known Issues
*   Charts are rendered via Canvas; screen reader support for specific data points is limited (summary tables provided as fallback).
