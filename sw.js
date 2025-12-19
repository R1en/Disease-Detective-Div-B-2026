const CACHE_NAME = 'epi-engine-v2.5.0';
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
    './js/vendor/phosphor-icons.js'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('[Service Worker] Caching all assets');
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
        })
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
