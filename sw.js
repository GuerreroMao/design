
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
    console.log('fetch event',evt);
})

var deferredPrompt;

        window.addEventListener('beforeinstallprompt', function (e) {
          // Prevent Chrome 67 and earlier from automatically showing the prompt
          e.preventDefault();
          // Stash the event so it can be triggered later.
          deferredPrompt = e;

          showAddToHomeScreen();
          alert('hola mundo');
        });
