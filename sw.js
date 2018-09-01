
// Service Worker

self.addEventListener('activate', () => {
  console.log('sw.js - SW: Active');
});


self.addEventListener('message', (e) => {
  console.log(e.data);
});
