var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
    '/',
    'https://www.dennisvanriet.nl/ractive_rest/ractive_data.php?size=1000'
];

self.addEventListener('install', function(event) {
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});