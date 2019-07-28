const version = "1.07",
    preCache = "PRECACHE-" + version,
    cacheList = [
        "/",
        "https://code.jquery.com/jquery-2.1.1.min.js",
    ];

//install service worker
self.addEventListener('install',evt => {
    console.log('create service worker install');
});
//activate event
self.addEventListener('activate',evt => {
    console.log('service worker has been activated');
});
//fetch event
self.addEventListener('fetch',evt=>{

})
