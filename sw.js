
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

self.addEventListener('message', (e) => {


  
});