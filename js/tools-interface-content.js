/**
 * Tools Interface Content
 * Defines the HTML structure for the "Interactive Drills" (Tools) chapter.
 * This overrides any "Coming Soon" placeholder.
 */

const TOOLS_INTERFACE_HTML = `
<div class="tools-page-wrapper" style="height: 100%; display: flex; flex-direction: column;">
    <div style="margin-bottom: 1rem;">
        <h1><i class="ph-bold ph-wrench"></i> Disease Detective Tools</h1>
        <p style="color: #666; margin: 0;">Interactive calculators, generators, and practice engines.</p>
    </div>

    <div class="tools-container" style="display: flex; gap: 2rem; flex: 1; min-height: 0; border: 1px solid #e2e8f0; border-radius: 8px; background: #fff; overflow: hidden;">
        <!-- Sidebar Tabs -->
        <div class="tool-tabs" style="width: 240px; background: #f8fafc; display: flex; flex-direction: column; gap: 0.25rem; border-right: 1px solid #e2e8f0; padding: 1rem; overflow-y: auto;">
            
            <div class="tab-category" style="font-size:0.75rem; text-transform:uppercase; color:#94a3b8; margin-bottom:0.25rem; font-weight:700; letter-spacing:0.5px;">Calculators</div>
            <button class="tool-tab active" data-tool="2x2">
                <i class="ph-bold ph-grid-four"></i> 2x2 Table
            </button>
            <button class="tool-tab" data-tool="curve">
                <i class="ph-bold ph-chart-bar"></i> Epi Curve
            </button>
            <button class="tool-tab" data-tool="exposure">
                <i class="ph-bold ph-calendar"></i> Exposure Window
            </button>
            <button class="tool-tab" data-tool="herd">
                <i class="ph-bold ph-users-three"></i> Herd Immunity
            </button>
            
            <div class="tab-category" style="font-size:0.75rem; text-transform:uppercase; color:#94a3b8; margin:1rem 0 0.25rem 0; font-weight:700; letter-spacing:0.5px;">Practice</div>
            <button class="tool-tab" data-tool="drills">
                <i class="ph-bold ph-lightning"></i> Flash Drills
            </button>
            <button class="tool-tab" data-tool="problems">
                <i class="ph-bold ph-question"></i> Problems
            </button>
            <button class="tool-tab" data-tool="infinite">
                <i class="ph-bold ph-infinity"></i> Infinite Outbreak
            </button>
            
            <div class="tab-category" style="font-size:0.75rem; text-transform:uppercase; color:#94a3b8; margin:1rem 0 0.25rem 0; font-weight:700; letter-spacing:0.5px;">Utilities</div>
            <button class="tool-tab" data-tool="notesheet">
                <i class="ph-bold ph-file-text"></i> Notesheet Gen
            </button>
            <button class="tool-tab" data-tool="proctor">
                <i class="ph-bold ph-timer"></i> Proctor Timer
            </button>
        </div>

        <!-- Content Area -->
        <div class="tool-content-area" style="flex: 1; overflow-y: auto; padding: 2rem; position: relative; background: #fff;">
            
            <div id="tool-container-2x2" class="tool-content active">
                <div class="alert info">Loading 2x2 Calculator...</div>
            </div>
            
            <div id="tool-container-curve" class="tool-content">
                <div class="alert info">Loading Epi Curve Tool...</div>
            </div>
            
            <div id="tool-container-exposure" class="tool-content">
                <div class="alert info">Loading Exposure Calculator...</div>
            </div>
            
            <div id="tool-container-herd" class="tool-content">
                <div class="alert info">Loading Herd Immunity Tool...</div>
            </div>
            
            <div id="tool-container-drills" class="tool-content">
                <div class="alert info">Loading Flash Drills...</div>
            </div>

            <div id="tool-container-problems" class="tool-content">
                <h2>Interactive Practice Problems</h2>
                <p>Test your understanding of outbreak mathematics (RR, OR, Ve, Sensitivity, etc.).</p>
                <div id="rp-problem-container" style="margin-top: 2rem;"></div>
            </div>
            
            <div id="tool-container-infinite" class="tool-content">
                <div class="alert info">Loading Infinite Engine...</div>
            </div>
            
            <div id="tool-container-notesheet" class="tool-content">
                <div class="alert info">Loading Notesheet Generator...</div>
            </div>
            
            <div id="tool-container-proctor" class="tool-content">
                <div class="alert info">Loading Proctor Tools...</div>
            </div>

        </div>
    </div>
</div>

<style>
/* Tool Tab Styles */
.tool-tab {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem 1rem;
    border: none;
    background: transparent;
    color: #475569;
    font-weight: 500;
    cursor: pointer;
    border-radius: 6px;
    text-align: left;
    transition: all 0.2s;
    font-family: inherit;
    font-size: 0.95rem;
}

.tool-tab:hover {
    background: #e2e8f0;
    color: var(--navy-primary);
}

.tool-tab.active {
    background: var(--navy-primary);
    color: white;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.tool-tab i {
    font-size: 1.25rem;
}

/* Content Visibility */
.tool-content {
    display: none;
    animation: fadeIn 0.3s ease;
}

.tool-content.active {
    display: block;
}
</style>
`;

// Inject into Engine
if (typeof window !== 'undefined') {
    window.addEventListener('load', () => {
        setTimeout(() => {
            // console.log("[TOOLS UI] Injecting Tools Interface...");

            if (window.EPIDEMIC_ENGINE_CONTENT) {
                window.EPIDEMIC_ENGINE_CONTENT['drills'] = {
                    title: "Interactive Tools",
                    content: TOOLS_INTERFACE_HTML
                };
            }

            // Force Re-Init Logic for New Tools
            if (window.TOOLS_MANAGER) {
                const originalLoad = window.TOOLS_MANAGER.loadTool;

                // Monkey Patch loadTool to handle new cases if the main file is stale
                window.TOOLS_MANAGER.loadTool = function (toolId) {
                    // console.log("[PATCH] Loading tool:", toolId);

                    if (toolId === 'herd') {
                        if (typeof HerdImmunityCalculator !== 'undefined') {
                            new HerdImmunityCalculator('tool-container-herd');
                        } else {
                            document.getElementById('tool-container-herd').innerHTML = '<div class="alert error">Herd Calculator Script Missing</div>';
                        }
                        return;
                    }

                    if (toolId === 'infinite') {
                        if (typeof OutbreakGenerator !== 'undefined') {
                            OutbreakGenerator.renderTo('tool-container-infinite');
                        } else {
                            document.getElementById('tool-container-infinite').innerHTML = '<div class="alert error">Infinite Engine Script Missing</div>';
                        }
                        return;
                    }

                    if (originalLoad) originalLoad.call(window.TOOLS_MANAGER, toolId);
                };

                // Re-bind tabs to use the new HTML structure
                window.TOOLS_MANAGER.init();
            }

        }, 500);
    });
}
