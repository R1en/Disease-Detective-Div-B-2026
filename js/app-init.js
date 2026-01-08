/**
 * Epidemic Engine - App Init
 * Handles Service Worker registration and UI toggles.
 * Moved from inline script in index.html to satisfy CSP.
 */

// Service Worker Registration
if ('serviceWorker' in navigator && (window.location.protocol === 'http:' || window.location.protocol === 'https:')) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            // .then(reg => console.log('SW Registered!', reg.scope))
            .catch(err => console.log('SW Failure:', err));
    });
} else if (window.location.protocol === 'file:') {
    console.log('Service Workers are not supported on the file:// protocol. Run via a local server to test offline features.');
}

// Sidebar Logic
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
        sidebar.classList.toggle('open');
        // Update aria-expanded for accessibility
        const btn = document.getElementById('mobile-menu-toggle');
        if (btn) btn.setAttribute('aria-expanded', sidebar.classList.contains('open'));
    }
}

// Expose globally for onclick handlers (legacy support)
window.toggleSidebar = toggleSidebar;

// Initializer: Close sidebar when clicking a nav item on mobile
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', () => {
            if (window.innerWidth <= 1024) {
                const sidebar = document.querySelector('.sidebar');
                if (sidebar) sidebar.classList.remove('open');
            }
        });
    });

    // Wire up Sidebar Overlay (using event listener instead of inline onclick)
    const overlay = document.querySelector('.sidebar-overlay');
    if (overlay) {
        overlay.addEventListener('click', toggleSidebar);
        // Accessibility: Allow Enter/Space to close
        overlay.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') toggleSidebar();
        });
    }

    // Wire up Mobile Toggle if not using inline onclick
    const _mobileToggle = document.getElementById('mobile-menu-toggle');
    // Division Toggle Logic
    window.currentDivision = 'B'; // Default
    function toggleDivision(div) {
        window.currentDivision = div;
        document.body.classList.remove('division-b-only', 'division-c-only');

        const btnB = document.getElementById('btn-div-b');
        const btnC = document.getElementById('btn-div-c');

        if (div === 'B') {
            document.body.classList.add('division-b-only');
            if (btnB) btnB.style.opacity = '1';
            if (btnC) btnC.style.opacity = '0.5';
            // Hide C-only elements
            document.querySelectorAll('.div-c-only').forEach(el => el.style.display = 'none');
        } else {
            document.body.classList.add('division-c-only');
            if (btnB) btnB.style.opacity = '0.5';
            if (btnC) btnC.style.opacity = '1';
            // Show all
            document.querySelectorAll('.div-c-only').forEach(el => el.style.display = '');
        }
    }
    window.toggleDivision = toggleDivision;

    // Reset Data Logic
    function resetAppProgress() {
        if (confirm('Are you sure you want to delete all saved progress, quiz scores, and settings? This cannot be undone.')) {
            localStorage.clear();
            alert('All data has been reset.');
            window.location.reload();
        }
    }
    window.resetAppProgress = resetAppProgress;
});
