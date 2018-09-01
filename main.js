
// Progressive Enhancement (SW supported)

if (navigator.serviceWorker) {


  navigator.serviceWorker.register('/sw.js')
    .then(function(registration){
      console.log('main.js - SW Registered');

      if(registration.active) {
        registration.active.postMessage('Hi.  This is a message generated from main.js');
      }

    }).catch(console.log);
}
