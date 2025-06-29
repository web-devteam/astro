const CACHE_NAME = 'astropagesv1';
const urlsToCache = ['/astro/','/astro/index.html','/astro/index.css','/astro/index.js', '/astro/_23adfd5d-c39f-46cd-b02b-9231bbf1374c.jpg', '/astro/5bfc1c0ea645f-2723436d0f517f1d2e2b58510a7b6a72.png', '/astro/176f1bd1e33c7bc1c3ba8412844a22bc - Copy.jpg', '/astro/732e94fb7c20cc483246bffc2d0ccc47 - Copy.jpg', '/astro/abstract-background-with-colorful-symmetric-geometric-print-vibrating-geometry-wallpaper-with-composition-repeat-rectangles-lines-horizontal-illustration-banner-design-generative-ai_9209-12059.avif', '/astro/afd1dc8ece4e386bf5975b0d60578bfc33.jpg', '/astro/alarm_FILL0_wght400_GRAD0_opsz24.png', '/astro/alarm.mp3', '/astro/beep-beep-6151.mp3', '/astro/calculate_FILL0_wght400_GRAD0_opsz24.png', '/astro/cancel_presentation_FILL0_wght400_GRAD0_opsz24.png', '/astro/clipboard-computer-icons-copytrans-document-clipboard-7de158a6e2319f0ed3ee3fbdf9e8ac0c.png', '/astro/clock-alarm-8761.mp3',
     '/astro/close_FILL0_wght400_GRAD0_opsz24.png', '/astro/computer-icons-alarm-clocks-clip-art-clock-icons-no-attribution-44413c43e2dd5f4f467181772ee8a7d5.png', '/astro/computer-monitor-cartoon-style-icon-260nw-1391806010.jpg', '/astro/content_paste_FILL0_wght400_GRAD0_opsz24.png', '/astro/empty.png', '/astro/home_app_logo_FILL0_wght400_GRAD0_opsz48.png', '/astro/image1.jpg', '/astro/image5.jpg', '/astro/img 1.jpg', '/astro/img 4.jpg', '/astro/img 8.jpg', '/astro/img 12.jpg', '/astro/img 14.jpg', '/astro/library_music_FILL0_wght400_GRAD0_opsz24.png', '/astro/livechat-129007.mp3', '/astro/marimba-for-smartphone-151931.mp3', '/astro/mic_FILL0_wght400_GRAD0_opsz24.png', '/astro/more_FILL0_wght400_GRAD0_opsz48.png', '/astro/notifications_FILL0_wght400_GRAD0_opsz24.png', '/astro/OIG (6).jpg', '/astro/oversimplified-alarm-clock-113180.mp3', '/astro/ringtone-126505.mp3', '/astro/ringtone-incoming-interface-153265.mp3', '/astro/rocket_launch_FILL0_wght400_GRAD0_opsz24.png', '/astro/send_FILL0_wght400_GRAD0_opsz24.png', '/astro/settings_FILL0_wght400_GRAD0_opsz24.png', '/astro/simple-notification-152054 - Copy.mp3', '/astro/simple-short-call-loop-153308.mp3', '/astro/stadia_controller_FILL0_wght400_GRAD0_opsz24.png', '/astro/sticky_note_2_FILL0_wght400_GRAD0_opsz24.png', '/astro/tic-tac-27828.mp3', '/astro/Time Up.mp3', '/astro/tic-tac-27828.mp3', '/astro/volume_up_FILL0_wght400_GRAD0_opsz24.png', '/astro/Wake Up.mp3'];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request).then(response => {
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }
          const responseToCache = response.clone();
          caches.open(CACHE_NAME)
            .then(cache => {
              cache.put(event.request, responseToCache);
            });
          return response;
        });
      })
  );
});

self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

