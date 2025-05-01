const CACHE_NAME = "gagan-cache-v1";
const urlsToCache = [
  "/gaganatexture/",
  "/gaganatexture/index.html",
  "/gaganatexture/manifest.json",
  "/gaganatexture/favicon.png",
  "/gaganatexture/icon-192.png",
  "/gaganatexture/icon-512.png",
  // Add other image paths here too
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
