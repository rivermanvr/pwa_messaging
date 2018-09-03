
// Progressive Enhancement (SW supported)

if (navigator.serviceWorker) {


  navigator.serviceWorker.register('/sw.js')
    .then(function(registration){
      console.log('main.js - SW Registered');

      // This code is for Example 1, comment it out afterwards.
      // It should be commented out when you are ready to do Example 2.

      // if(registration.active) {
      //   registration.active.postMessage('Hi.  This is a message generated from main.js');
      // }


      // The following is the code for example 2.  ...the update found listener
      // we set a handler function equal to the listener.

      if(registration.active) {
        registration.onupdatefound = () => {
          let newSW = registration.installing;
          //Prompt the user for update
          if (confirm("App update found. Do you want to update now?")) {
            newSW.postMessage('update_self');
          };
        };
      };

    }).catch(console.log);
}
