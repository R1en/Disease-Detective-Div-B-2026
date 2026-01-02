const CACHE_NAME = 'epi-engine-v4.0.2-gold';
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './manifest.json',
    './assets/logo.png',
    './css/styles.css',
    './css/epidemic-engine.css',
    './css/mobile-overrides.css',
    './dist/epi-data.bundle.js',
    './dist/epi-core.bundle.js',
    './js/vendor/phosphor-icons.js',
    // Core & Content
    './js/epidemic-engine-content.js',
    './js/chapter-reference.js',
    './js/epidemic-engine-extensions.js',
    './js/home-dashboard.js',
    // Quizzes & Practice
    './js/quiz_bank_enhanced.js',
    './js/quiz_phase4_additions.js',
    './js/quick_quiz.js',
    './js/random_problems.js',
    './js/custom_flash_drills.js',
    './js/case_quiz.js',
    // Tools & Scenarios
    './js/mega-cases-data.js',
    './js/mega-scenarios-data.js',
    './js/tool-herd-immunity.js',
    './js/procedural-engine.js',
    './js/tools-interface-content.js',
    './js/diagnostic_tools.js',
    './js/coach_resources.js'
];

self.addEventListener('install', (event) => {
    self.skipWaiting(); // Immediate take-over
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('[Service Worker] Caching all assets', CACHE_NAME);
                return cache.addAll(ASSETS_TO_CACHE);
            })
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keyList) => {
            return Promise.all(keyList.map((key) => {
                if (key !== CACHE_NAME) {
                    console.log('[Service Worker] Removing old cache', key);
                    return caches.delete(key);
                }
            }));
        }).then(() => self.clients.claim()) // Immediate control
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                // Return cached response if found
                if (response) {
                    return response;
                }

                // Fetch from network
                return fetch(event.request).then((networkResponse) => {
                    // Check if we received a valid response
                    if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic' && networkResponse.type !== 'cors') {
                        return networkResponse;
                    }

                    // Clone the response
                    var responseToCache = networkResponse.clone();

                    // Open cache and put the new response there
                    caches.open(CACHE_NAME)
                        .then((cache) => {
                            cache.put(event.request, responseToCache);
                        });

                    return networkResponse;
                });
            })
    );
});
