
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
