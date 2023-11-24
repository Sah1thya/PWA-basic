// Service Worker code for offline support
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("my-pwa-v1").then((cache) => {
      return cache.addAll([
        "/",
        "index.html",
        "styles.css",
        // Add more resources to cache as needed
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
