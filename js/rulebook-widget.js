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
