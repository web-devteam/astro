const CACHE_NAME = 'astropages-v3.1';
const urlsToCache = ['/astro/','/astro/index.html','/astro/index.css','/astro/index.js', '/astro/76224fcfb17f74c5437f24376a361e25.jpg', '/astro/adjust_24dp_000000_FILL0_wght400_GRAD0_opsz24 (1).png', '/astro/cast_connected_24dp_000000_FILL0_wght400_GRAD0_opsz24.png', '/astro/do_not_disturb_on_24dp_000000_FILL0_wght400_GRAD0_opsz24.png', '/astro/fullscreen_24dp_000000_FILL0_wght400_GRAD0_opsz24.png', '/astro/graphic_eq_24dp_000000_FILL0_wght400_GRAD0_opsz24.png', '/astro/lightbulb_24dp_000000_FILL0_wght400_GRAD0_opsz24.png', '/astro/play_arrow_24dp_000000_FILL0_wght400_GRAD0_opsz24 (1).png', '/astro/playlist_play_24dp_000000_FILL0_wght400_GRAD0_opsz24.png', '/astro/queue_music_24dp_000000_FILL0_wght400_GRAD0_opsz24.png', '/astro/skip_next_24dp_000000_FILL0_wght400_GRAD0_opsz24.png', '/astro/skip_previous_24dp_000000_FILL0_wght400_GRAD0_opsz24.png', '/astro/low-hum-14645.mp3'];
const urlsToCache2 = ['/astro/5bfc1c0ea645f-2723436d0f517f1d2e2b58510a7b6a72.png', '/astro/alarm_FILL0_wght400_GRAD0_opsz24.png', '/astro/calculate_FILL0_wght400_GRAD0_opsz24.png', '/astro/cancel_presentation_FILL0_wght400_GRAD0_opsz24.png', '/astro/clipboard-computer-icons-copytrans-document-clipboard-7de158a6e2319f0ed3ee3fbdf9e8ac0c.png', '/astro/close_FILL0_wght400_GRAD0_opsz24.png', '/astro/content_paste_FILL0_wght400_GRAD0_opsz24.png', '/astro/library_music_FILL0_wght400_GRAD0_opsz24.png', '/astro/mic_FILL0_wght400_GRAD0_opsz24.png', '/astro/more_FILL0_wght400_GRAD0_opsz48.png', '/astro/notifications_FILL0_wght400_GRAD0_opsz24.png', '/astro/rocket_launch_FILL0_wght400_GRAD0_opsz24.png', '/astro/send_FILL0_wght400_GRAD0_opsz24.png', '/astro/settings_FILL0_wght400_GRAD0_opsz24.png', '/astro/sticky_note_2_FILL0_wght400_GRAD0_opsz24.png', '/astro/volume_up_FILL0_wght400_GRAD0_opsz24.png']
const urlsToCache3 = ['/astro/computer-icons-alarm-clocks-clip-art-clock-icons-no-attribution-44413c43e2dd5f4f467181772ee8a7d5.png', '/astro/alarm.mp3', '/astro/beep-beep-6151.mp3', '/astro/clock-alarm-8761.mp3', '/astro/livechat-129007.mp3', '/astro/marimba-for-smartphone-151931.mp3', '/astro/oversimplified-alarm-clock-113180.mp3', '/astro/ringtone-126505.mp3', '/astro/ringtone-incoming-interface-153265.mp3', '/astro/simple-notification-152054.mp3', '/astro/simple-short-call-loop-153308.mp3', '/astro/tic-tac-27828.mp3', '/astro/Time Up.mp3', '/astro/Wake Up.mp3']
const urlsToCache4 = ['/astro/_68767b25-4b4b-4a41-bd28-91150c1a722b.jpg', '/astro/afd1dc8ece4e386bf5975b0d60578bfc33.jpg', '/astro/abstract-background-with-colorful-symmetric-geometric-print-vibrating-geometry-wallpaper-with-composition-repeat-rectangles-lines-horizontal-illustration-banner-design-generative-ai_9209-12059.avif', '/astro/computer-monitor-cartoon-style-icon-260nw-1391806010.jpg', '/astro/empty.png', '/astro/image1.jpg', '/astro/image5.jpg', '/astro/notification-alert-269289.mp3', '/astro/timer_24dp_000000_FILL0_wght400_GRAD0_opsz24.png', '/astro/music_note_24dp_000000_FILL0_wght400_GRAD0_opsz24.png']
const allurlsToCache = [...urlsToCache, ...urlsToCache2, ...urlsToCache3, ...urlsToCache4]

self.addEventListener('install', event => {
  console.log('[SW] Installing…');
  event.waitUntil(
    caches.open(CACHE_NAME).then(async cache => {
      console.log('[SW] Opened cache:', CACHE_NAME);

      for (const url of allurlsToCache) {
        try {
          const response = await fetch(url, { cache: 'no-store' });
          if (!response.ok) {
            console.warn(`[SW] Skipping ${url} - HTTP ${response.status}`);
            continue;
          }
          await cache.put(url, response.clone());
          console.log(`[SW] Cached: ${url}`);
        } catch (err) {
          console.error(`[SW] Failed to fetch & cache: ${url}`, err);
        }
      }
    }).catch(err => console.error('[SW] Cache open failed:', err))
  );

  self.skipWaiting();
});

// ACTIVATE EVENT - DELETE OLD CACHES
self.addEventListener('activate', event => {
  console.log('[SW] Activating and cleaning old caches…');
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => {
            console.log(`[SW] Deleting old cache: ${key}`);
            return caches.delete(key);
          })
      );
    })
  );
  self.clients.claim();
});

// FETCH EVENT
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
