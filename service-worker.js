workbox.precaching.precacheAndRoute(self.__precacheManifest || []);

workbox.routing.registerRoute(/(?:https:\/\/.*)/, workbox.strategies.networkFirst());
// workbox.routing.registerRoute(/(?:https:\/\/newsapi.org\/.*)/, workbox.strategies.networkFirst());

workbox.routing.registerRoute(
    // Cache image files
    /.*\.(?:png|jpg|jpeg|svg|gif)/,
    // Use the cache if it's available
    workbox.strategies.cacheFirst({
      // Use a custom cache name
      cacheName: 'image-cache',
      plugins: [
        new workbox.expiration.Plugin({
          // Cache only 20 images
          maxEntries: 20,
          // Cache for a maximum of a week
          maxAgeSeconds: 7 * 24 * 60 * 60,
        })
      ],
    })
);