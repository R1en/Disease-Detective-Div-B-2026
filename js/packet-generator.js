class PacketGenerator {
    static init() {
        // Expose global function
        window.generateStudyGuide = this.generateStudyGuide.bind(this);
    }

    static generateStudyGuide() {
        if (typeof window.EPIDEMIC_ENGINE_CONTENT === 'undefined') {
            alert("Content not loaded.");
            return;
        }

        const chapters = [
            'ch1', 'ch2', 'ch3', 'ch4', 'ch5', 'ch6',
            'ch7', 'ch8', 'ch9', 'ch10', 'ch11', 'ch12', 'ch13',
            'ch14', 'ch15', 'ch16', 'ch17', 'ch18', 'ch19', 'ch20'
        ];

        let htmlContent = '';

        // Generate Table of Contents
        let tocHtml = `<div class="toc-page" style="page-break-after: always;">
            <h2 style="text-align:center; border-bottom: 2px solid black; padding-bottom: 1rem;">Table of Contents</h2>
            <ul style="list-style: none; padding: 0;">`;

        chapters.forEach(id => {
            const ch = window.EPIDEMIC_ENGINE_CONTENT[id];
            if (ch) {
                tocHtml += `<li style="margin-bottom: 0.5rem; border-bottom: 1px dotted #ccc; display: flex; justify-content: space-between;">
                    <span>${ch.title.split(':')[0]}</span>
                    <span>${ch.title.split(':')[1] || ''}</span>
                </li>`;
            }
        });

        tocHtml += `
            <li style="margin-top: 1rem; font-weight: bold;">Appendices</li>
            <li>Glossary</li>
            <li>Formulas</li>
        </ul></div>`;

        htmlContent += tocHtml;

        // Generate Chapters
        chapters.forEach(id => {
            const ch = window.EPIDEMIC_ENGINE_CONTENT[id];
            if (!ch) return;

            // Clean Content
            let cleanBody = this.cleanContent(ch.content);

            htmlContent += `
                <div class="chapter-section" style="page-break-before: always;">
                    <div class="chapter-header" style="border-bottom: 4px solid black; margin-bottom: 2rem; padding-bottom: 0.5rem;">
                        <h2 style="margin: 0; font-size: 2rem;">${ch.title}</h2>
                        <div style="font-style: italic; margin-top: 0.25rem;">Epidemic Engine v2.0 Study Guide</div>
                    </div>
                    <div class="chapter-body" style="line-height: 1.6; font-size: 11pt; text-align: justify;">
                        ${cleanBody}
                    </div>
                </div>
            `;
        });

        // Add Appendices (Glossary/Formulas) if available
        // We'd need to extract them from APPENDIX_DATA usually, but for now we might skip or grab snippets.
        // Let's assume APPENDIX_DATA is available.
        if (typeof window.APPENDIX_DATA !== 'undefined') {
            htmlContent += this.generateGlossary();
        }

        this.openPrintWindow(htmlContent);
    }

    static cleanContent(html) {
        // Create a temporary DOM to manipulate
        const div = document.createElement('div');
        div.innerHTML = html;

        // Remove interactive elements
        const removables = div.querySelectorAll('button, input, select, .tool-container, .tool-tabs, .mobile-only, .video-container');
        removables.forEach(el => el.remove());

        // Replace Drill Boxes with Static versions if possible, or just style them
        const drills = div.querySelectorAll('.drill-box, .neo-card');
        drills.forEach(el => {
            el.style.border = '1px solid black';
            el.style.boxShadow = 'none';
            el.style.background = 'white';
            el.style.padding = '1rem';
            el.style.marginBottom = '1rem';
        });

        // Fix Callouts
        const callouts = div.querySelectorAll('.callout-header, .callout-content');
        callouts.forEach(el => {
            el.style.color = 'black';
            el.style.background = 'transparent';
        });

        // Expand Accordions (Answers)
        const accordions = div.querySelectorAll('.accordion');
        accordions.forEach(acc => {
            const content = acc.querySelector('.accordion-content');
            if (content) {
                const p = document.createElement('div');
                p.innerHTML = content.innerHTML;
                p.style.marginTop = '0.5rem';
                p.style.paddingLeft = '1rem';
                p.style.borderLeft = '2px solid #ccc';
                acc.replaceWith(p);
            } else {
                acc.remove();
            }
        });

        return div.innerHTML;
    }

    static generateGlossary() {
        if (!window.APPENDIX_DATA || !window.APPENDIX_DATA.glossary) return '';

        let html = `<div class="appendix-section" style="page-break-before: always;">
            <h1 style="border-bottom: 4px solid black;">Appendix A: Glossary</h1>
            <dl>`;

        window.APPENDIX_DATA.glossary.forEach(term => {
            html += `<dt style="font-weight: bold; margin-top: 1rem;">${term.term}</dt>
                     <dd style="margin-left: 1.5rem;">${term.def}</dd>`;
        });

        html += `</dl></div>`;
        return html;
    }

    static openPrintWindow(content) {
        const win = window.open('', '_blank');
        win.document.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Epidemic Engine Study Guide</title>
                <style>
                    body { font-family: 'Times New Roman', serif; color: black; max-width: 800px; margin: 0 auto; padding: 2cm; }
                    img { max-width: 100%; height: auto; filter: grayscale(100%); }
                    table { border-collapse: collapse; width: 100%; margin: 1rem 0; }
                    th, td { border: 1px solid black; padding: 0.5rem; text-align: left; }
                    h1, h2, h3 { color: black; page-break-after: avoid; }
                    p { margin-bottom: 1rem; orphans: 3; widows: 3; }
                    .neo-badge { border: 1px solid black; padding: 2px 6px; border-radius: 4px; font-size: 0.8rem; }
                    a { text-decoration: underline; color: black; }
                    @media print {
                         @page { margin: 2cm; }
                         body { margin: 0; padding: 0; max-width: none; }
                    }
                </style>
            </head>
            <body>
                <div class="cover-page" style="text-align: center; page-break-after: always; padding-top: 30%;">
                    <h1 style="font-size: 4rem; margin-bottom: 1rem;">Epidemic Engine</h1>
                    <h2 style="font-size: 2rem; font-weight: normal; margin-bottom: 4rem;">Comprehensive Study Guide</h2>
                    <p><strong>Division B (Middle School)</strong></p>
                    <p>Generated: ${new Date().toLocaleDateString()}</p>
                    <p style="margin-top: 4rem;"><em>This document contains all educational content from the Epidemic Engine application.</em></p>
                </div>
                ${content}
            </body>
            </html>
        `);
        win.document.close();
        // win.print(); // Optional auto-print
    }
}

// Init immediately
PacketGenerator.init();
