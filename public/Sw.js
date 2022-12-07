let cacheData = "doctorV1";
const cache_url = [
    "https://doctor-app-3c8e58.netlify.app/",
    "https://doctor-app-3c8e58.netlify.app/index.html",
    "https://doctor-app-3c8e58.netlify.app/assets/css/Reset.css",
    "https://doctor-app-3c8e58.netlify.app/assets/css/global.css",
    "https://doctor-app-3c8e58.netlify.app/Page_2",
    "https://doctor-app-3c8e58.netlify.app/Page_3",
    "https://doctor-app-3c8e58.netlify.app/Page_4",
    "https://doctor-app-3c8e58.netlify.app/Page_5",
    "https://doctor-app-3c8e58.netlify.app/Page_6",
    "https://doctor-app-3c8e58.netlify.app/Page_7",
    "https://doctor-app-3c8e58.netlify.app/Page_8",
    "https://doctor-app-3c8e58.netlify.app/Page_9",
    "https://doctor-app-3c8e58.netlify.app/Page_10",
    "https://doctor-app-3c8e58.netlify.app/Page_11",
    "https://doctor-app-3c8e58.netlify.app/Page_12",
    "https://doctor-app-3c8e58.netlify.app/Page_101",
    "https://doctor-app-3c8e58.netlify.app/Page_102",
    "https://doctor-app-3c8e58.netlify.app/Page_103",
    "https://doctor-app-3c8e58.netlify.app/Page_104",
    "https://doctor-app-3c8e58.netlify.app/static/js/bundle.js",
    "https://doctor-app-3c8e58.netlify.app/static/js/main.chunk.js",
    // "/static/js/0.chunk.js",
    "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap",
    "https://doctor-app-3c8e58.netlify.app/manifest.json",
    "https://doctor-app-3c8e58.netlify.app/favicon.ico",
    "https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css",
    "https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js",
    "https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js",
    // "/static/media/home-screen.bc8948cc0d4703313bd7.png",
    // "/static/media/heart-img.78e4d929b4fe7a4ca9a6.png",
    // "/static/media/heart.881514d5e3a63b4317b1.png",
    "https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLEj6Z1xlFQ.woff2",
    "https://fonts.gstatic.com/s/poppins/v20/pxiEyp8kv8JHgFVrJJfecg.woff2",
    "https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLGT9Z1xlFQ.woff2",
    "https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLCz7Z1xlFQ.woff2",
    // "/static/media/breathing.bcbe5aefdcad7c792905.png",
    // "/static/media/clock.ce4affe6aa1188835afd.png",
    // "/static/media/hand.3824e11620acba2425ef.png",
    // "/static/media/satyamave.081700900b55c9870577.png",
    // "/static/media/10man.5384b1cd5edf74805c85.png",
    // "/static/media/10help-men.099f6d0165d9a8732d66.png",
    // "/static/media/10pils.bc2c00aab84e6face3a6.png",
    // "/static/media/10nose.2c29714906aa04a6b26b.png",
    // "/static/media/tenCheckup.72325f809fbb1f99f812.png",
    // "/static/media/10front.94b8985a0d3330b879a3.png",
    // "/static/media/doctor-helpbreathing.73e41aef3e79c126c778.png",
    // "/static/media/low-heart.e54e37ff3f002fd376eb.png",

]
self.addEventListener('install', (event) => {

    // event.waitUntil(
    //     caches.open(cacheData).then(async (Cache) => {
    //         // console.log("hello", cache_url, cache);
    //         // CI = false 
    //         Cache.addAll(cache_url);
    //     })
    // )

    event.waitUntil(

        (async () => {
            try {
                cache_obj = await caches.open(cacheData)
                cache_obj.addAll(cache_url)
            }
            catch {
                console.log("error occured while caching...")
            }
        })()
    )
});

self.addEventListener("fetch", (event) => {
    if (!navigator.onLine) {
        event.respondWith(
            caches.match(event.request).then((result) => {
                if (result) {
                    return result;
                } else {
                    return false;
                }
            })
        )
    }
});

