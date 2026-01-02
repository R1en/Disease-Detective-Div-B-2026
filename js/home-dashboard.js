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
                            Navigate outbreaks, visualize patterns, and master Disease Detectives (v4.0.2).
                        </p>
                        <p style="font-size: 0.9rem; margin-bottom: 1.5rem; color: #475569;">
                            Designed, Created, & Conceived by <strong style="color: var(--navy-primary);">Rishi Reddy</strong>
                        </p>
                        <div style="display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;">
                            <button class="neo-btn primary" onclick="loadChapter('ch1')">Start Learning</button>
                            <button class="neo-btn outline" onclick="loadChapter('simulation')">Simulation Exams</button>
                            <!-- Div Toggle -->
                            <div style="display: flex; align-items: center; background: white; padding: 4px; border: 2px solid #000; border-radius: 8px;">
                                <button id="btn-div-b" class="btn small" style="border:none; box-shadow:none; font-size:0.8rem;" onclick="toggleDivision('B')">Div B</button>
                                <div style="width:1px; height:20px; background:#ccc;"></div>
                                <button id="btn-div-c" class="btn small" style="border:none; box-shadow:none; font-size:0.8rem; opacity: 0.5;" onclick="toggleDivision('C')">Div C</button>
                            </div>
                        </div>
                        <div style="margin-top: 0.5rem;">
                            <button onclick="resetAppProgress()" style="background: none; border: none; font-size: 0.8rem; color: #94a3b8; cursor: pointer; text-decoration: underline;">
                                Reset All Progress & Data
                            </button>
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
