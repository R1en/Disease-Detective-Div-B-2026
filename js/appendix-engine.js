(() => {
    class AppendixEngine {
        // ... (lines 2-587) ... (Same content from Step 7851)
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
            const _BG_PALETTE = ['#eff6ff', '#fff7ed', '#f0fdf4', '#faf5ff', '#fdf2f8']; // Matches tailwind 50s
            const _BORDER_PALETTE = ['#bfdbfe', '#fed7aa', '#bbf7d0', '#e9d5ff', '#fbcfe8']; // Matches tailwind 200s

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
            const _originalContent = container.innerHTML;

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

        getPathogens() {
            return window.APPENDIX_DATA && window.APPENDIX_DATA.PATHOGENS ? window.APPENDIX_DATA.PATHOGENS : [];
        }

        getCurveTypes() {
            return window.APPENDIX_DATA && window.APPENDIX_DATA.OUTBREAK_CURVES ? window.APPENDIX_DATA.OUTBREAK_CURVES : [];
        }

        initPathogens(containerId) {
            const container = document.getElementById(containerId);
            if (!container) {
                console.warn('[AppendixEngine] Pathogen container not found:', containerId);
                return;
            }

            const pathogens = this.getPathogens();
            if (!pathogens || pathogens.length === 0) {
                container.innerHTML = '<div class="alert alert-warning">No pathogen data available.</div>';
                return;
            }

            // Helper for colors
            const getCategory = (p) => {
                const t = (p.transmission || '').toLowerCase();
                if (t.includes('fecal') || t.includes('food')) return { bg: '#fef9c3', border: '#eab308', label: 'GI/Food' };
                if (t.includes('droplet') || t.includes('air')) return { bg: '#dbeafe', border: '#3b82f6', label: 'Respiratory' };
                if (t.includes('tick') || t.includes('mosquito') || t.includes('flea')) return { bg: '#dcfce7', border: '#22c55e', label: 'Vector' };
                if (t.includes('bite') || t.includes('rodent')) return { bg: '#fce7f3', border: '#ec4899', label: 'Zoonotic' };
                if (t.includes('water') || t.includes('pool')) return { bg: '#e0f2fe', border: '#0ea5e9', label: 'Water' };
                return { bg: '#f3f4f6', border: '#6b7280', label: 'Other' };
            };

            let html = `
                <div style="margin-bottom: 1.5rem;">
                    <input type="text" id="pathogen-search" placeholder="Search pathogens..." 
                           oninput="if(window.appendixEngine) window.appendixEngine.filterPathogens()"
                           style="width: 100%; padding: 1rem; font-size: 1rem; border: 2px solid #000; border-radius: 8px; box-shadow: 3px 3px 0 #000;">
                </div>
                <p style="color: #64748b; margin-bottom: 1rem;">Showing <strong id="pathogen-count">${pathogens.length}</strong> pathogens. Click row to expand.</p>
                <div id="pathogen-list" style="display: grid; gap: 0.75rem;">
            `;

            pathogens.forEach((p) => {
                const cat = getCategory(p);
                // Safe strings
                const pName = p.name || 'Unknown';
                const pDisease = p.disease || pName; // Fallback to name if not specified
                const pInc = p.incubation || '?';
                const pSym = p.symptoms || '';
                const pTrans = p.transmission || '';
                const pFact = p.keyFact || '';

                html += `
                    <div class="pathogen-item" data-name="${pName.toLowerCase()}" data-disease="${pDisease.toLowerCase()}" data-symptoms="${pSym.toLowerCase()}" data-transmission="${pTrans.toLowerCase()}"
                         style="background: white; border: 2px solid #000; border-left: 5px solid ${cat.border}; border-radius: 8px; padding: 1rem; cursor: pointer; box-shadow: 3px 3px 0 #000;"
                         onclick="const d = this.querySelector('.pathogen-details'); d.style.display = (d.style.display === 'none' ? 'grid' : 'none');">
                        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem;">
                            <strong style="font-size: 1.1rem; color: #1e293b;">${pName} <span style="font-weight:normal; color:#64748b; font-size: 0.95rem;">— ${pDisease}</span></strong>
                            <div style="display: flex; gap: 0.5rem; align-items: center;">
                                <span style="background: ${cat.bg}; color: ${cat.border}; padding: 0.25rem 0.5rem; border-radius: 999px; font-size: 0.75rem; font-weight: 600; border: 1px solid ${cat.border};">${cat.label}</span>
                                <span style="background: #f1f5f9; color: #475569; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.8rem; font-weight: 500;">${pInc}</span>
                            </div>
                        </div>
                        <div class="pathogen-details" style="display: none; margin-top: 1rem; padding-top: 1rem; border-top: 1px dashed #e2e8f0; gap: 0.5rem;">
                            <div><strong>Symptoms:</strong> ${pSym}</div>
                            <div><strong>Transmission:</strong> ${pTrans}</div>
                            <div style="background: #fef3c7; padding: 0.5rem; border-radius: 4px; font-size: 0.9rem;"><strong>Key Fact:</strong> ${pFact}</div>
                        </div>
                    </div>
                `;
            });

            html += '</div>';
            container.innerHTML = html;
        }

        filterPathogens() {
            const input = document.getElementById('pathogen-search');
            const countEl = document.getElementById('pathogen-count');
            if (!input) return;

            const query = input.value.toLowerCase();
            const items = document.querySelectorAll('.pathogen-item');
            let visible = 0;

            items.forEach(item => {
                const name = item.dataset.name || '';
                const disease = item.dataset.disease || '';
                const symptoms = item.dataset.symptoms || '';
                const transmission = item.dataset.transmission || '';
                const matches = name.includes(query) || disease.includes(query) || symptoms.includes(query) || transmission.includes(query);
                item.style.display = matches ? 'block' : 'none';
                if (matches) visible++;
            });

            if (countEl) countEl.textContent = visible;
        }

        initCurveTypes(containerId) {
            const container = document.getElementById(containerId);
            if (!container) {
                console.warn('[AppendixEngine] Curve container not found:', containerId);
                return;
            }

            const curves = this.getCurveTypes();
            if (!curves || curves.length === 0) {
                container.innerHTML = '<div class="alert alert-warning">No curve data available.</div>';
                return;
            }

            // Simple icons compatible with all charsets
            const icons = {
                'Point Source': 'P',
                'Continuous': 'C',
                'Propagated': 'W', // Wave
                'Intermittent': 'I',
                'Mixed': 'M'
            };

            let html = '<div style="display: grid; gap: 1rem;">';

            curves.forEach(c => {
                const safeType = c.type || 'Unknown';
                // Use safe key extraction
                let typeKey = '?';
                if (safeType !== 'Unknown') {
                    // Match full keys if possible or just first word
                    typeKey = Object.keys(icons).find(k => safeType.includes(k)) || safeType.split(' ')[0];
                }
                if (icons[safeType]) typeKey = safeType; // Exact match priority

                const badge = icons[typeKey] || icons[safeType.split(' ')[0]] || '?';

                html += `
                    <div class="neo-card small" style="border-left: 4px solid var(--teal-accent);">
                        <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.5rem;">
                            <div style="width: 32px; height: 32px; background: var(--teal-accent); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold;">
                                ${badge}
                            </div>
                            <strong style="font-size: 1.1rem; color: var(--navy-primary);">${safeType}</strong>
                        </div>
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; font-size: 0.95rem;">
                            <div><strong>Shape:</strong> ${c.shape || 'N/A'}</div>
                            <div><strong>Duration:</strong> ${c.duration || 'N/A'}</div>
                        </div>
                        <div style="margin-top: 0.5rem; background: #f0f9ff; padding: 0.5rem; border-radius: 4px; font-size: 0.9rem;">
                            <strong>Example:</strong> ${c.example || 'N/A'}
                        </div>
                    </div>
                `;
            });

            html += '</div>';
            container.innerHTML = html;
        }
    }

    // Expose to window using safe assignment
    window.AppendixEngine = AppendixEngine;
    window.appendixEngine = new AppendixEngine();
})();
