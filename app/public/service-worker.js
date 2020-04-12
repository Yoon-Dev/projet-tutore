var CACHE_NAME = 'cache';
var urlsToCache = [
  './img/bin.gif',
  './img/front.jpg',
  './img/front2.jpg',
  './img/front2blur15.jpg',
  './img/front2blur30.jpg',
  './img/front2blur45.jpg',
  './img/front2blur60.jpg',
  './img/front2blur75.jpg',
  './img/front3.jpg',
  './img/texture.jpg',
  './img/tuto/tuto1.gif',
  './img/tuto/tuto2.gif',
  './img/tuto/tuto3.gif',
  './img/tuto/tuto4.gif',
  './img/tuto/tuto5.gif',
  './index.html'
];

self.addEventListener('install', function(event) {
    // Perform install steps
    event.waitUntil(
      caches.open(CACHE_NAME)
        .then(function(cache) {
          return cache.addAll(urlsToCache);
        })
    );
    self.skipWaiting()
});

self.addEventListener('activate', function(evt){
    evt.waitUntil(
      caches.keys().then((keyList) => {
        return Promise.all(keyList.map((key) => {
          if (key !== CACHE_NAME) {
            // remove old cache
            return caches.delete(key);
          }
        }));
      })
    );
    self.clients.claim()
  });

  self.addEventListener('fetch', (evt) =>{
    // CODELAB: Add fetch event handler here.
    if (evt.request.mode !== 'navigate') {
      // Not a page navigation, bail.
      return;
    }
    evt.respondWith(
        fetch(evt.request)
            .catch(() => {
              return caches.open(CACHE_NAME)
                  .then((cache) => {
                    return cache.match('./index.html');
                  });
            })
    );
  });