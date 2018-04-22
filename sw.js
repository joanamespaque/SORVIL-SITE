self.addEventListener('install', function (event) {
  var indexPage = new Request('index.html');
  event.waitUntil(
    fetch(indexPage).then(function (response) {
      caches.open('pwabuilder-offline').then(function (cache) {
        console.log('[PWA Builder] Cached index page during Install' + response.url);
        return cache.addAll([
          '/SORVIL-SITE/',
          '/SORVIL-SITE/index.html',
          '/SORVIL-SITE/autores.html',
          '/SORVIL-SITE/cadastro.html',
          '/SORVIL-SITE/editarperfil.html',
          '/SORVIL-SITE/entrar.html',
          '/SORVIL-SITE/faleconosco.html',
          '/SORVIL-SITE/faleconoscoLogado.html',
          '/SORVIL-SITE/indexLogado.html',
          '/SORVIL-SITE/informacoes.html',
          '/SORVIL-SITE/livros.html',
          '/SORVIL-SITE/manifest.json',
          '/SORVIL-SITE/perfil.html',
          '/SORVIL-SITE/js/editarperfil.js',
          '/SORVIL-SITE/js/index.js',
          '/SORVIL-SITE/js/livros.js',
          '/SORVIL-SITE/css/autores.css',
          '/SORVIL-SITE/css/editarperfil.css',
          '/SORVIL-SITE/css/faleconosco.css',
          '/SORVIL-SITE/css/index.css',
          '/SORVIL-SITE/css/livros.css',
          '/SORVIL-SITE/css/login.css',
          '/SORVIL-SITE/css/perfil.css',
          '/SORVIL-SITE/css/img/back.png',
          '/SORVIL-SITE/css/img/circle-google.png',
          '/SORVIL-SITE/css/img/item1.jpeg',
          '/SORVIL-SITE/css/img/item2.jpg',
          '/SORVIL-SITE/css/img/item3.jpg',
          '/SORVIL-SITE/css/img/perfim-imagem.png',
          '/SORVIL-SITE/css/img/perfil.png',
          '/SORVIL-SITE/css/img/autores/autor1.jpg',
          '/SORVIL-SITE/css/img/autores/autor2.jpg',
          '/SORVIL-SITE/css/img/autores/autor3.jpg',
          '/SORVIL-SITE/css/img/autores/autor4.jpg',
          '/SORVIL-SITE/css/img/autores/autor5.jpg',
          '/SORVIL-SITE/css/img/autores/autor6.jpg',
          '/SORVIL-SITE/css/img/autores/autor7.jpg',
          '/SORVIL-SITE/css/img/icons/icon-72x72.png',
          '/SORVIL-SITE/css/img/icons/icon-96x96.png',
          '/SORVIL-SITE/css/img/icons/icon-128x128.png',
          '/SORVIL-SITE/css/img/icons/icon-144x144.png',
          '/SORVIL-SITE/css/img/icons/icon-152x152.png',
          '/SORVIL-SITE/css/img/icons/icon-192x192.png',
          '/SORVIL-SITE/css/img/icons/icon-384x384.png',
          '/SORVIL-SITE/css/img/icons/icon-512x512.png',
          '/SORVIL-SITE/css/img/livros/livro1.jpg',
          '/SORVIL-SITE/css/img/livros/livro2.jpg',
          '/SORVIL-SITE/css/img/livros/livro3.jpg',
          '/SORVIL-SITE/css/img/livros/livro4.jpg',
          '/SORVIL-SITE/css/img/livros/livro5.jpg',
          '/SORVIL-SITE/css/img/livros/livro6.jpg',
          '/SORVIL-SITE/css/img/livros/livro7.jpg',
          '/SORVIL-SITE/css/img/livros/livro8.jpg',
          '/SORVIL-SITE/css/img/livros/livro9.jpg',
          '/SORVIL-SITE/css/img/livros/livro10.jpg',
          '/SORVIL-SITE/css/img/livros/livro11.jpg',
          '/SORVIL-SITE/css/img/livros/livro12.jpg',
          '/SORVIL-SITE/css/img/livros/livro13.jpg',
          '/SORVIL-SITE/css/img/livros/livro14.jpg',
          '/SORVIL-SITE/bootstrap/css/bootstrap.min.css',
          '/SORVIL-SITE/bootstrap/css/bootstrap-social.css',
          '/SORVIL-SITE/bootstrap/css/bootstrap.min.css',
          '/SORVIL-SITE/bootstrap/js/bootstrap.min.js'
        ]);
      });
    })
  );
});


//If any fetch fails, it will look for the request in the cache and serve it from there first
self.addEventListener('fetch', function (event) {
  var updateCache = function (request) {
    return caches.open('pwabuilder-offline').then(function (cache) {
      return fetch(request).then(function (response) {
        console.log('[PWA Builder] add page to offline' + response.url)
        return cache.put(request, response);
      });
    });
  };

  event.waitUntil(updateCache(event.request));

  event.respondWith(
    fetch(event.request).catch(function (error) {
      console.log('[PWA Builder] Network request Failed. Serving content from cache: ' + error);

      //Check to see if you have it in the cache
      //Return response
      //If not in the cache, then return error page
      return caches.open('pwabuilder-offline').then(function (cache) {
        return cache.match(event.request).then(function (matching) {
          var report = !matching || matching.status == 404 ? Promise.reject('no-match') : matching;
          return report
        });
      });
    })
  );
})

