
// Progressive Enhancement (SW supported)

if (navigator.serviceWorker) {


  navigator.serviceWorker.register('/sw.js')
    .then(function(registration){

      console.log('main.js - SW Registered');

    }).catch(console.log);
}
