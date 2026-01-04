const CACHE_NAME = "punch-perm-obasan-v1";
const ASSETS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./main.js",
  "./style.css"
  // 画像・音声・ステージデータもここに追加
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
