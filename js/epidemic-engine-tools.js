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
