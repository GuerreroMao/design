//install service worker
self.addEventListener('install',evt => {
    console.log('create service worker install');
});
self.addEventListener('activate',evt => {
    console.log('service worker has been activated');
})