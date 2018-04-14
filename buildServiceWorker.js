const workboxBuild = require("workbox-build");

// NOTE: This should be run *AFTER* all your assets are built
const buildSW = () => {
  // This will return a Promise
  return workboxBuild.generateSW({
    globDirectory: "app",
    globPatterns: ["**/*.{html,json,js,css,png}"],
    swDest: "app/sw-generated.js",
    ignoreUrlParametersMatching: [/.*/],
    runtimeCaching: [
      {
        urlPattern: /localhost/,
        handler: "cacheFirst"
      },
      {
        urlPattern: /http:\/\/api.20min.ch\/rss\//,
        handler: "networkFirst",
        options: {
          cacheName: "feeds",
          expiration: {
            maxEntries: 10
          }
        }
      },
      {
        urlPattern: /http:\/\/static01.20min.ch\/dyim\//,
        handler: "staleWhileRevalidate",
        options: {
          cacheName: "images",
          expiration: {
            maxEntries: 3,
            maxAgeSeconds: 30
          }
        }
      }
    ]
  });
};

buildSW();
