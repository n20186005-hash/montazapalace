const CACHE = 'montaza-palace-v2';
const CORE = ['/site.webmanifest', '/brand/favicon.svg', '/brand/logo.svg'];
self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(CORE)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (event) => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key.startsWith('montaza-palace-') && key !== CACHE).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET' || new URL(request.url).origin !== self.location.origin) return;
  if (request.mode === 'navigate') {
    event.respondWith(fetch(request).then(async response => {
      if (response.ok && response.type === 'basic') {
        try { const cache = await caches.open(CACHE); await cache.put(request, response.clone()); } catch {}
      }
      return response;
    }).catch(async () => {
      let stored;
      try { const cache = await caches.open(CACHE); stored = await cache.match(request); } catch {}
      if (stored) return stored;
      const en = new URL(request.url).pathname.startsWith('/en/');
      const body = en ? '<!doctype html><html lang="en"><meta name="robots" content="noindex"><meta name="viewport" content="width=device-width"><title>Offline</title><h1>This page is unavailable offline</h1><p>Reconnect and try this address again.</p></html>' : '<!doctype html><html lang="ar" dir="rtl"><meta name="robots" content="noindex"><meta name="viewport" content="width=device-width"><title>غير متصل</title><h1>هذه الصفحة غير متاحة دون اتصال</h1><p>أعد الاتصال ثم حاول فتح العنوان مجدداً.</p></html>';
      return new Response(body, { status: 503, headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store', 'X-Robots-Tag': 'noindex' } });
    }));
    return;
  }
  event.respondWith((async () => {
    let cache, stored;
    try { cache = await caches.open(CACHE); stored = await cache.match(request); } catch {}
    if (stored) return stored;
    const response = await fetch(request);
    if (response.ok && response.type === 'basic' && cache) { try { await cache.put(request, response.clone()); } catch {} }
    return response;
  })());
});
