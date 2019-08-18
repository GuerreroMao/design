 var cacheVersion = 1;
 var currentCache= {
     offline:'offline-cache' + cacheVersion
 };
 const offlineUrl = 'offline.html';


//install service worker
self.addEventListener('install',evt => {
    event.waitUntil(
        caches.open(currentCache.offline).then(function(cache){
            return cache.addAll([
                'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css',
                offlineUrl
            ])
        })
    )
    console.log('create service worker install');
});
//activate event
self.addEventListener('activate',evt => {
    console.log('service worker has been activated');
});
//fetch event
self.addEventListener('fetch',evt=>{
    //console.log('fetch event',evt);
});
