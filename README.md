# Epidemic Engine v5.0.0

**The Ultimate Offline Mastery Guide for Science Olympiad Disease Detectives**

## Overview
Epidemic Engine is a comprehensive, offline-first web application designed to help students master the "Disease Detectives" event in Science Olympiad (Division B & C). It combines a digital textbook, interactive simulations, and precision calculators into a single portable tool.

## Features
- **Comprehensive Curriculum:** 21 Chapters covering the entire 2026 Rules Manual.
- **Offline Capable:** Runs without internet using Service Worker technology.
- **Simulation Center:**
  - **Infinite Outbreak Generator:** Practice mathematical problems with randomized data.
  - **Mega Cases:** Complex multi-stage outbreaks requiring data cleaning and analysis.
  - **Case Library:** 50+ real-world case studies with interactive Q&A.
  - **Interactive Cases:** Gamified scenarios for engaging practice.
- **Tools Suite:**
  - 2x2 Contingency Table Calculator (Risk Ratio, Odds Ratio, Chi-Square).
  - Epi Curve Generator.
  - Exposure Window Calculator.
  - Herd Immunity Threshold Calculator.
- **Advanced Practice:**
  - **Coach Resources:** Management tools and curriculum guides for coaches.
  - **Practice Problems:** Dynamic problem generator for specific topics.
  - **Quick Quiz:** Rapid-fire testing of key concepts.
  - **Simulation Exams:** Full-length timed exams.

## Installation & Usage

### Online (Vercel)
This project is configured for easy deployment on Vercel.

1.  **Push to GitHub:**
    *   Initialize a git repository: `git init`
    *   Add files: `git add .`
    *   Commit: `git commit -m "Initial commit"`
    *   Push to a new GitHub repository.

2.  **Connect to Vercel:**
    *   Go to [Vercel](https://vercel.com).
    *   Click "Add New..." -> "Project".
    *   Import your GitHub repository.
    *   Vercel will detect the static site configuration. Click **Deploy**.


### Offline (Local Use)
1. Download the `EpidemicEngine_v5.0.0_Vercel_Deploy.zip` file.
2. Extract the contents to a folder.
3. Open `index.html` in Google Chrome or Edge.
4. **Recommended:** Click the "Install App" icon in the address bar to install it as a standalone app.

## Development

### Architecture
The application is a Vanilla JS Single Page Application (SPA).
- `index.html`: The main entry point. Loading logic for bundles and extensions.
- `js/epidemic-engine-content.js`: Core content definition for all chapters.
- `js/quiz_bank_enhanced.js`: Repository of 500+ quiz questions.
- `js/mega-cases-data.js`: Data structures for advanced case studies.
- `sw.js`: Service Worker configuration for offline caching.

### File Structure
```
/
├── index.html          # Main application shell
├── sw.js               # Service Worker
├── js/
│   ├── epidemic-engine-content.js
│   ├── quiz_bank_enhanced.js
│   ├── mega-cases-data.js
│   ├── coach_resources.js
│   └── ...
├── css/                # Stylesheets
└── dist/               # Legacy bundled assets (core logic)
```

### Versioning
- **v3.0**: Major content overhaul (Genomic Epi, Mortality Metrics).
- **v4.0**: Architectural refactor, consolidation of patch files.
- **v5.0.0**: **Current Release**.
    - New Neo-Brutalist UI Design.
    - Added "Coach Resources" portal.
    - Introduced "Interactive Cases" and "Mega Cases".
    - Enhanced Quiz Engine with "Return to Quiz" functionality.
    - Updated sidebar organization for better navigation.

### Building from Source
Since this is a vanilla JS project, "building" simply means creating the distribution zip.
1. Ensure `js/` and `css/` files are up to date.
2. Run your preferred zip utility to archive `index.html`, `js/`, `css/`, `assets/`, `dist/`, and `sw.js`.

## References & Sources
The content in this application is derived from publicly available epidemiological guidelines:
*   **CDC Field Epidemiology Manual**: Primary source for investigation steps and case definitions.
*   **Principles of Epidemiology in Public Health Practice (CDC 3rd Ed.)**: Mathematical formulas and statistical methods.
*   **WHO Outbreak Investigation Guidelines**: Global health context and surveillance standards.
*   **Science Olympiad Rules Manual (2025-2026)**: Curriculum scope and event parameters.

## Credits
Designed, Created, and Conceived by **Rishi Reddy**.
Content based on CDC Field Epidemiology Manual and WHO guidelines.
