const CACHE_NAME = 'memory-game-v1';
const urlsToCache = [
  '/memory-game/',
  '/memory-game/index.html',
  '/memory-game/assets/index.css',
  '/memory-game/assets/index.js',
  '/memory-game/manifest.json',
  '/memory-game/icons/icon-72x72.png',
  '/memory-game/icons/icon-96x96.png',
  '/memory-game/icons/icon-128x128.png',
  '/memory-game/icons/icon-144x144.png',
  '/memory-game/icons/icon-152x152.png',
  '/memory-game/icons/icon-192x192.png',
  '/memory-game/icons/icon-384x384.png',
  '/memory-game/icons/icon-512x512.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    }),
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response;
      }
      return fetch(event.request);
    }),
  );
});
