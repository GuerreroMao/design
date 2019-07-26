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

// App install banner
// window.addEventListener('beforeinstallprompt', function(e) {
//   e.userChoice.then(function(choiceResult){
//       console.log(choiceResult.outcome);
//       if(choiceResult.outcome == 'dismissed'){
//           console.log('User cancelled home screen install');
//       }else{
//           console.log('User added to home screen');
//       }
//   });
// });
