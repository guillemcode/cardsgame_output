'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "ce07eaaa5af7a697c825068816a57c34",
"version.json": "b421c1f943a6514a8328f40f8528b93c",
"index.html": "a6c541ed76d80fcb1ae96ab0335e70f3",
"/": "a6c541ed76d80fcb1ae96ab0335e70f3",
"main.dart.js": "259cf9af9abb06700846751b706a4f8c",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "da89e2f56b21d830a46e7fb9d0af0279",
"assets/AssetManifest.json": "62c9b61c394f34fded88a5d51e0dda67",
"assets/NOTICES": "a62c57d0522da18bc105d7639e40832a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "cfb6a0ef7163de9e79883d43f432009e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "32865a3057791c75ed0f7b3d92d27bad",
"assets/fonts/MaterialIcons-Regular.otf": "18c45b17225c1948f006ad3988d12c6b",
"assets/assets/marks/legendaryMark.gif": "a256b60ddf5f260796749778a3106454",
"assets/assets/marks/basicMark.png": "ce54cab0f602bcf49f9857c10b923ef3",
"assets/assets/cards/yellowBlue%253Fcard.png": "b09fd5ce8a938ac4925ec33dc464ebe0",
"assets/assets/cards/rainbow%253Fcard2.png": "5cf5188dd9c0ff68052664875762e56b",
"assets/assets/cards/rainbow%253Fcard3.png": "d6a6eccde55f0dfdb66a88c3bd11a31c",
"assets/assets/cards/rainbow%253Fcard1.png": "8a9b37c46a8d76e86c1dad9378992bd8",
"assets/assets/cards/blankCard.png": "f6114ffd6c73f2cfbb5d6f1405254303",
"assets/assets/cards/blue%253Fcard.png": "9c6608d7f1e7c52df4ad0545581dd926",
"assets/assets/cards/lockedCard.png": "aaef163f99a76652c5e4055382c46fc7",
"assets/assets/cards/blackBlue%253Fcard.png": "46b91b706adbad2dd58d34899f028f47",
"assets/assets/cards/yellow%253Fcard.png": "7687af0f96ef81ebce70002ee6fb3eec",
"assets/assets/cards/rainbow%253Fcard.gif": "c36a9f18bfa640067e7af21420c3be35",
"assets/assets/indications.txt": "e2cd60e484b3d9700e9594695e255112",
"assets/assets/items/mario-basic.png": "c4973be6ddd789428d795d480eb2ef23",
"assets/assets/items/cheto-rare.png": "508cff31c1a2bb550748a439bf14b392",
"assets/assets/items/oscar-epic.png": "bd5e8bb6349fa55c5d38384e69558943",
"assets/assets/items/moni-basic.png": "e23ccb485e55f041c3986c5bde447ac9",
"assets/assets/items/nai-legendary.png": "7cb12736724aa97855f5e213341037a1",
"assets/assets/items/enaitz-epic.png": "f5d65208fafd0f9f391e720bcc772bc2",
"assets/assets/items/cheto-legendary.png": "da923982381731c51e1e8fa98234f3ec",
"assets/assets/items/dupla-legendary.png": "81912ea5e8dc75c19151b509764529a0",
"assets/assets/items/festa-epic.png": "36fe199a5406a27b99e252be3ecc09b3",
"assets/assets/items/vicky-legendary.png": "cb52422716083fbe8419a989578a4cc9",
"assets/assets/items/dupla-basic.png": "0827dd544082d14fac1e377335508d7e",
"assets/assets/items/moni-legendary.png": "2aff0a817094ba96f33dec345a504613",
"assets/assets/items/guillem-legendary.png": "a5b4f112d1c6bbf72b6d59fc058b4a54",
"assets/assets/items/guillem-basic.png": "f93a8aa40d74d7fd3080d037a21a751a",
"assets/assets/items/guillem-epic.png": "13cc164b1b2ab357843abfc90770b356",
"assets/assets/items/mario-legendary.png": "fa397beea87a98c3b37e3eeea43cbaab",
"assets/assets/items/lluna-epic.png": "b7d7698fa8744c0314b06b2ba266bc78",
"assets/assets/items/ferrando-rare.png": "ed759a5c5f134de941ddcb7b1b9b1560",
"assets/assets/items/moni-epic.png": "0894e6802211b6a78a004aba6ad21e6e",
"assets/assets/items/enaitz-legendary.png": "5f899a8c94f80b3129a2f2c6faaad27b",
"assets/assets/items/mariona-basic.png": "536e8d1b0d36bd33616a4c0a1ae1d2a1",
"assets/assets/items/carlota-basic.png": "455022b69b1dd8225cc6bed87ee4dc5b",
"assets/assets/items/jordi-rare.png": "298e09cf038e58e1ce0015d6225b8901",
"assets/assets/items/jon-epic.png": "0aa5f05e951de673d90421219365c012",
"assets/assets/items/nai-basic.png": "f533f7b339696a7d0b50481d7f6a8e21",
"assets/assets/items/valls-basic.png": "a006a442863026d9b09058d8d1227e41",
"assets/assets/items/jon-basic.png": "8ed61ad5c27ece4a68c8a2265b7c2d18",
"assets/assets/items/dupla-epic.png": "1b76f8768015f976f5e66319a4a18c6f",
"assets/assets/items/mario-epic.png": "c24e991c77d60302013e26490090ff0f",
"assets/assets/items/ferrando-basic.png": "dc9369954140d0f624615c74b5101d54",
"assets/assets/items/iker-basic.png": "716cb43040998796baacedb66f607fe5",
"assets/assets/items/romero-legendary.png": "3bab193203c9b5e50e70d14f2a1c9af2",
"assets/assets/items/festa-legendary.png": "ed43c1f416a28b52f43874e72f9b6bf7",
"assets/assets/items/enaitz-basic.png": "3a61f3570b430044d9a912441a93198b",
"assets/assets/items/nai-epic.png": "52aea4d71f23769340f435db61370722",
"assets/assets/items/jona-epic.png": "c11bbe212a7673ba51fc64973a95007e",
"assets/assets/items/jona-legendary.png": "b364caabe5f4f2d2dda04534eb684100",
"assets/assets/items/marc-epic.png": "95068ef62110796fae974c350ca1eaf8",
"assets/assets/items/vicky-epic.png": "0825e5563892953946c98d502d778591",
"assets/assets/items/romero-epic.png": "d41fe5351c4547f633c74a6db6e4c612",
"assets/assets/items/valls-rare.png": "d59b788c5fb6e0c74fa43fd8872a08a4",
"assets/assets/items/mariona-legendary.png": "fa4cc96099dfd4f4901f4b1358ac90b9",
"assets/assets/items/mariona-rare.png": "6756b6c266042fd912b9d83628793744",
"assets/assets/items/carlota-epic.png": "a0f3c2fd0c0b1e4bd16d7f52efcb6776",
"assets/assets/items/clara-epic.png": "5e0333510ba68bfb0d6dd8281d36a8c1",
"assets/assets/items/iker-rare.png": "a5213231f32817dfa9a0ade0933f47b0",
"assets/assets/items/oscar-basic.png": "41e4f273b4117b3298ba08a17da8fe73",
"assets/assets/items/cheto-basic.png": "8dc5cbac16309f720e9dd8b6794a3dca",
"assets/assets/items/oscar-rare.png": "36fcd7546d72714f27226246dc4dd205",
"assets/assets/items/cheto-epic.png": "e595f91a51695b9f37aee6937d7dbf8a",
"assets/assets/items/jon-legendary.png": "edf2728aa862060b43d2d477e224e51b",
"assets/assets/items/romero-basic.png": "127662d105a55f518cbf337bb33195aa",
"assets/assets/items/vicky-basic.png": "7a7051ef3cbd66d69c2ed0e890dd96b3",
"assets/assets/items/festa-rare.png": "d0ac6c866da72db42a8ba7f08f40dc19",
"assets/assets/items/valls-legendary.png": "deaae3c96ef89d7510e76b9bdc61c25f",
"assets/assets/items/enaitz-rare.png": "61ad766a6e8cc9673a36bfa2f1ba087b",
"assets/assets/items/iker-legendary.png": "71fe71dc72cf999b820ff8a082a0abf2",
"assets/assets/items/ferrando-epic.png": "1e9aca654a03ec072480245548c725ea",
"assets/assets/items/carlota-legendary.png": "ebfb4fd930a32c0b0c8711c27d7f52ed",
"assets/assets/items/moni-rare.png": "e025f5d086d95d0bac645ae50ee00e2d",
"assets/assets/items/ferrando-legendary.png": "d11d6088405129b0fcbc911b4087ecf4",
"assets/assets/items/guillem-rare.png": "934fbf8a7b2910f5cbc36b5988f266c7",
"assets/assets/items/jordi-legendary.png": "ed766304acea3d80cd2041790c88b61f",
"assets/assets/items/jordi-basic.png": "79c5858fbef91e6af1b775930c93f7af",
"assets/assets/items/lluna-rare.png": "5f8c56d20fdfc43c4476d78c1dc9aa9d",
"assets/assets/items/lluna-basic.png": "c70d3fbee0f9fb8eb3ae32c9e05d3a04",
"assets/assets/items/clara-basic.png": "9ccccce322c350d4833eb07829c26d95",
"assets/assets/items/jon-rare.png": "4dd2c2558471cb41cab79e1beebd396f",
"assets/assets/items/jordi-epic.png": "983752cfc4ab59e91baf28b509872f18",
"assets/assets/items/mario-rare.png": "2a9a03cdcf6dbd27ffbde12287878703",
"assets/assets/items/dupla-rare.png": "557ba90b90555a934a1546e4429a5f34",
"assets/assets/items/festa-basic.png": "570b52c6d44d2cac5ef82b8742348459",
"assets/assets/items/marc-basic.png": "e2f93d9fe0d85764805c4a8c6650ce3d",
"assets/assets/items/marc-legendary.png": "68d0d006c0b1adb81a01bd83703f25f2",
"assets/assets/items/romero-rare.png": "a4d38981f40844329a49cac308cd5e18",
"assets/assets/items/vicky-rare.png": "0d8848cb86321cece28626c415a9d8d7",
"assets/assets/items/valls-epic.png": "a1f54d6fabd2c9c3134c53be37f768ec",
"assets/assets/items/jona-rare.png": "aa48a018d17e78573b0e258bb2fe6610",
"assets/assets/items/marc-rare.png": "c7e2b9ab83d3469bbc25c7456cceb19f",
"assets/assets/items/clara-legendary.png": "8ed50e6825850d20bcb1ed2e519e5672",
"assets/assets/items/nai-rare.png": "547591d45717735c06cbe00800158064",
"assets/assets/items/iker-epic.png": "b5216402557870539839ef7575eb4558",
"assets/assets/items/jona-basic.png": "59f07593f79322dff25296dfd16712fc",
"assets/assets/items/lluna-legendary.png": "b53b05b44b9416153436efdef1a9e18b",
"assets/assets/items/carlota-rare.png": "9a448ef16b27dd3ba7d912d2a51c309d",
"assets/assets/items/oscar-legendary.png": "5423d411892834f623e8b67fcab08a8f",
"assets/assets/items/clara-rare.png": "f07fc63af3c688030b862167c98a5881",
"assets/assets/items/mariona-epic.png": "f06d2c361999e0464670ec704ad11954",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
