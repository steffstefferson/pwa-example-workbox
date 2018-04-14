/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.1.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "custom.css",
    "revision": "a0fbcd3fd8c2019c38150b84db4724e0"
  },
  {
    "url": "feedReader.js",
    "revision": "14e03aee6bff50d17b8e2d0ef73ad5d3"
  },
  {
    "url": "img/jslogo.png",
    "revision": "32e1e05a1be1599842f488647e1d04f0"
  },
  {
    "url": "img/jslogo144.png",
    "revision": "462e755df17ce57c5ad79ff17c1a7f5e"
  },
  {
    "url": "img/jslogo48.png",
    "revision": "f07baf0faf1444ab5185df7038a2b3f9"
  },
  {
    "url": "index.html",
    "revision": "32dd5e4e0b2c90339950e056334cf081"
  },
  {
    "url": "lib/bootstrap.min.css",
    "revision": "ec3bb52a00e176a7181d454dffaea219"
  },
  {
    "url": "lib/jquery.min.js",
    "revision": "c9f5aeeca3ad37bf2aa006139b935f0a"
  },
  {
    "url": "manifest.json",
    "revision": "0885bb47f644ac433ab9012e9c27e7ee"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {
  "ignoreUrlParametersMatching": [/.*/]
});

workbox.routing.registerRoute(/localhost/, workbox.strategies.cacheFirst(), 'GET');
workbox.routing.registerRoute(/http:\/\/api.20min.ch\/rss\//, workbox.strategies.networkFirst({ cacheName: "feeds", plugins: [new workbox.expiration.Plugin({"maxEntries":10})] }), 'GET');
workbox.routing.registerRoute(/http:\/\/static01.20min.ch\/dyim\//, workbox.strategies.staleWhileRevalidate({ cacheName: "images", plugins: [new workbox.expiration.Plugin({"maxEntries":3,"maxAgeSeconds":30})] }), 'GET');
