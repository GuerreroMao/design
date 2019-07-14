;
const CACHE_NAME = "v1_cache_programdor-fitnes",
urlsToCache=[
    './',
    'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css',
    'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js'
]

 self.addEventListener('install',e=>{
  e.waitUntil(
      caches.open(CACHE_NAME)
      .then(cache=>{
          return cache.addAll(urlsToCache)
          .then(()=>self.skipWaiting())
      })
      .catch(err=>console.log('Fallo el registro de cache',err))
  )
 })
 self.addEventListener('activate',e=>{
    const cacheWhitelist=[CACHE_NAME]
    e.waitUntil(
        caches.keys()
        .then(cachesNames=>{
            cacheNames.map(cacheName =>{
                if(cacheWhitelist.indexOf(cacheName===-1)){
                    return caches.delete(cacheName)
                }
            })
        })
        .then(()=>self.clients.claim())
    )
 })

 self.addEventListener('fetch',e=>{
    e.respondWith(
        caches.match(e.request)
        .then(res=>{
            if(res){
                return res
            }
            //recuperamos las informacion  de la peticion de la url
            return fetch(e.request) 
        })
    )
})