const staticCacheName = 'site-static';
const assets = [
    '/',
    'index.html',
    'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css',
    '/design/images/logo.jpg',
    'https://fonts.googleapis.com/icon?family=Material+Icons',
];
//install service worker
self.addEventListener('install',evt => {
    evt.waitUntil(
        caches.open(staticCacheName).then(cache => {
            cache.addAll(assets);
        })
    );
});
//activate event
self.addEventListener('activate',evt => {
    console.log('service worker has been activated');
});
//fetch event
self.addEventListener('fetch',evt=>{
    evt.respondWith(
        caches.match(evt.request).then(cacheRes => {
            return cacheRes || fetch(evt.request);
        })
    );
});
