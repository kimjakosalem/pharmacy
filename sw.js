// Minimal service worker: required by Android Chrome to install this app as a
// standalone PWA (no URL bar / tabs) instead of a plain browser shortcut.
// Intentionally no caching — Firebase already handles offline persistence.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
