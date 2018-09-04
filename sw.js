
// Service Worker

self.addEventListener('activate', () => {
  console.log('sw.js - SW: Active');
});


// The following code is the message listener for Example 1.

// self.addEventListener('message', (e) => {
//   console.log(e.data);
// });

// Example 2.  re-comment lines 11-13  and un-comment the following lines:

// self.addEventListener('message', (e) => {
//     if(e.data === 'update_self') {
//       console.log("The service worker is updating");
//       self.skipWaiting();
//     };
// });

//Example 3.  Re-comment lines 17-22 and un-comment the following lines:

// self.addEventListener('message', (e) => {

//   // Respond to all clients of a service worker.
//   self.clients.matchAll()
//     .then(clients => {
//       clients.forEach(client => {
//         client.postMessage("Hi.  This is a message from the service worker to all clients.");
//       })
//     })

// });

//Example 4 (Step 1) Re-comment lines 26-36 above. and un-comment the following lines:

// self.addEventListener('message', (e) => {

//   console.log('calling client: ', e);

//   // Respond to all clients of a service worker.
//   self.clients.matchAll()
//     .then(clients => {

//       console.log(clients)

//       clients.forEach(client => {
//         client.postMessage("Hi.  This is a message from the service worker to all clients.");
//       })
//     })

//Example 5 (Step 2)  RE-comment out lines 40-53 and un-comment out the following:

// self.addEventListener('message', (e) => {

//   // Respond to all clients of a service worker.
//   self.clients.matchAll()
//     .then(clients => {

//       clients.forEach(client => {

//         if(e.source.id === client.id) {
//           client.postMessage("Hi.  This is a message from the service worker to all clients.");
//         }    
//       })
//     })

});