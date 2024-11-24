const CACHE_NAME = 'tian-app-v1';
const urlsToCache = [
  '/',
  '/p/',
  'https://tiianprb0.github.io/tian-static-files/manifest.json',
  'https://via.placeholder.com/192',
  'https://via.placeholder.com/512'
];

// Install Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Fetch Service Worker
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
