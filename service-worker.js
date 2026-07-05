const KING_OS_CACHE = "king-os-v313-channel-manager-rate-admin";
const CORE = [
  "./",
  "./admin.html",
  "./ai.html",
  "./assets/ai-concierge/ai-concierge.css",
  "./assets/ai-concierge/ai-concierge.js",
  "./assets/ai-concierge/king-ai-robot-transparent.png",
  "./assets/backoffice-v185/backoffice.css",
  "./assets/backoffice-v185/backoffice.js",
  "./assets/backoffice-v185/cleaning-staff.js",
  "./assets/booking-customer-v300.css",
  "./assets/booking-customer-v300.js",
  "./data/booking-os-seed.json",
  "./api/king-booking-worker-v300.js",
  "./config/booking-api-config-v300.json",
  "./assets/tokyo-seasonal-v285.jpeg",
  "./assets/tokyo-planner-v285.jpeg",
  "./assets/tokyo-today-v285.jpeg",
  "./assets/tokyo-daytrip-v286.jpeg",
  "./assets/tokyo-strategy-v286.jpeg",
  "./assets/cloudpc-cn-v281.webp",
  "./assets/cloudpc-common.webp",
  "./assets/entertainment-v276.jpeg",
  "./assets/game-center.webp",
  "./assets/home-landscape-v262.webp",
  "./assets/king-common-fixes-v249.css",
  "./assets/king-game-phone.css",
  "./assets/king-game-phone.js",
  "./assets/king-gamepad.css",
  "./assets/king-gamepad.js",
  "./assets/king-hot-activate-v247.js",
  "./assets/king-hotfix-v247.css",
  "./assets/secondpage-v290.css",
  "./assets/secondpage-cn-v290.webp",
  "./assets/secondpage-en-v290.webp",
  "./assets/secondpage-ja-v290.webp",
  "./assets/secondpage-ko-v290.webp",
  "./assets/secondpage-zh-v290.webp",
  "./assets/tokyo-guide-v295.webp",
  "./assets/tokyo-map-v284.jpeg",
  "./assets/tokyo-transport-v303.jpeg",
  "./assets/tokyo-food-v303.jpeg",
  "./assets/tokyo-attractions-v303.jpeg",
  "./assets/tokyo-shopping-v303.jpeg",
  "./booking-admin.html",
  "./booking.html",
  "./browser.html",
  "./cast.html",
  "./check.html",
  "./cleaning-staff.html",
  "./cleaning.html",
  "./cloudpc-cn.html",
  "./cloudpc.html",
  "./cn.html",
  "./en.html",
  "./entertainment-cn.html",
  "./entertainment-en.html",
  "./entertainment-ja.html",
  "./entertainment-ko.html",
  "./entertainment-zh.html",
  "./entertainment.html",
  "./game-help.html",
  "./game-phone.html",
  "./gaming.html",
  "./guide-cn.html",
  "./guide-en.html",
  "./guide-ja.html",
  "./guide-ko.html",
  "./guide-zh.html",
  "./guide.html",
  "./index.html",
  "./info.html",
  "./ja.html",
  "./king-memory-safe-v124.js",
  "./ko.html",
  "./logout.html",
  "./main.html",
  "./manifest.webmanifest",
  "./mobile-admin.html",
  "./rate-admin.html",
  "./news-cn.html",
  "./news-en.html",
  "./news-ja.html",
  "./news-ko.html",
  "./news-zh.html",
  "./news.html",
  "./openlink.html",
  "./service-worker.js",
  "./service.html",
  "./staff.html",
  "./style.css",
  "./tokyo-attractions.html",
  "./tokyo-daytrip.html",
  "./tokyo-food.html",
  "./tokyo-map.html",
  "./tokyo-planner.html",
  "./tokyo-seasonal.html",
  "./tokyo-shopping.html",
  "./tokyo-strategy.html",
  "./tokyo-today.html",
  "./tokyo-transport.html",
  "./transfer.html",
  "./wifi.html",
  "./zh.html"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(KING_OS_CACHE).then(cache =>
      Promise.allSettled(CORE.map(url => cache.add(url)))
    )
  );
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== KING_OS_CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())
  );
});

function blackFallback(){
  return new Response('<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>KING HOTEL</title><style>html,body{margin:0;width:100%;height:100%;background:#000;color:#f7ca5a;display:flex;align-items:center;justify-content:center;font:900 8vw Arial,sans-serif;letter-spacing:.08em}</style><div>KING HOTEL</div>', {headers:{"Content-Type":"text/html; charset=utf-8"}});
}

self.addEventListener("fetch", event => {
  const req = event.request;
  if(req.method !== "GET") return;
  const isNavigation = req.mode === "navigate" || (req.headers.get("accept") || "").includes("text/html");
  event.respondWith(
    fetch(req).then(res => {
      const copy = res.clone();
      caches.open(KING_OS_CACHE).then(cache => cache.put(req, copy)).catch(()=>{});
      return res;
    }).catch(async () => {
      const cached = await caches.match(req);
      if(cached) return cached;
      if(isNavigation){
        return (await caches.match("./index.html")) || blackFallback();
      }
      return new Response("", {status: 204});
    })
  );
});
