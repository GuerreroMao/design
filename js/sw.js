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
// btnAdd.addEventListener('click', (e) => {
//   // hide our user interface that shows our A2HS button
//   btnAdd.style.display = 'none';
//   // Show the prompt
//   deferredPrompt.prompt();
//   // Wait for the user to respond to the prompt
//   deferredPrompt.userChoice
//     .then((choiceResult) => {
//       if (choiceResult.outcome === 'accepted') {
//         console.log('User accepted the A2HS prompt');
//       } else {
//         console.log('User dismissed the A2HS prompt');
//       }
//       deferredPrompt = null;
//     });
// });