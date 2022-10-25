const STATIC_CACHE_NAME = "static-cache-v1.1";
const INMUTABLE_CACHE_NAME = "promiseCacheInmutable-v1.1";
const DYNAMIC_CACHE_NAME = "dynamic-cache-v1.1";
const ROOT_PATH = "/AWP-U2-P7";



self.addEventListener('install', (event) => {
    const promiseCache = caches.open(STATIC_CACHE_NAME).then(cache => {
        //añade a la shell
        return cache.addAll(
            [
                `${ROOT_PATH}/`,
                `${ROOT_PATH}/index.html`,
                 `${ROOT_PATH}/manifest.json`,
                  '/-AWP-U2-P7/images/images/icons/android-launchericon-72-72.png',
      '/-AWP-U2-P7/images/icons/android-launchericon-96-96.png',
      '/-AWP-U2-P7/images/icons/android-launchericon-144-144.png',
      '/-AWP-U2-P7/images/icons/android-launchericon-144-144.png',
      '/-AWP-U2-P7/images/icons/android-launchericon-144-144.png',
      '/-AWP-U2-P7/images/icons/android-launchericon-192-192.png',
      '/-AWP-U2-P7/images/icons/android-launchericon-512-512.png',
      '/-AWP-U2-P7/images/icons/android-launchericon-512-512.png',
            ]
        );
    });

    const promiseCacheInmutable = caches.open(INMUTABLE_CACHE_NAME)
        .then(cache => {
            return cache.addAll(
                ['https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css',
                 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js',
                'https://cdn-icons-png.flaticon.com/64/3468/3468377.png',
                 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css',
                 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/webfonts/fa-solid-900.woff2',
                 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/webfonts/fa-solid-900.ttf'
                ]);
        });

    event.waitUntil(Promise.all(
        [promiseCacheInmutable,
            promiseCache]
    ));
});


self.addEventListener('fetch', (event) => {
    const respCache = caches.match(event.request);
    event.respondWith(respCache);
});
