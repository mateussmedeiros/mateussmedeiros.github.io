---
layout: null
---

const staticCache = 'cache-website-{{ site.time | date: "%Y-%m-%d-%H-%M" }}';

var filesCache = [
 {% for pg in site.pages_to_cache %}
   '{{ pg }}',
 {% endfor %}
 {% for pt in site.posts limit: 10 %}
   '{{ pt.url }}',
 {% endfor %}
 {% for asset in site.files_to_cache %}
   '{{ asset }}',
 {% endfor %}
];

// Cache on install
this.addEventListener("install", event => {
 this.skipWaiting();

 event.waitUntil(
   caches.open(staticCache)
     .then(cache => {
       return cache.addAll(filesCache);
   })
 )
});

// Clear cache on activate
this.addEventListener('activate', event => {
 event.waitUntil(
   caches.keys().then(caches => {
     return Promise.all(
       caches
         .filter(cache => (cache.startsWith('cache-website-')))
         .filter(cache => (cache !== staticCache))
         .map(cache => caches.delete(cache))
     );
   })
 );
});