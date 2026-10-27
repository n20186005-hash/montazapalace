const canonicalHost = 'montazapalace.com';
const normal = new Set(['/', '/en/', '/cookies/', '/privacy/', '/terms/', '/en/cookies/', '/en/privacy/', '/en/terms/']);
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const head = request.method === 'HEAD';
    if (url.hostname === 'www.' + canonicalHost || (url.hostname === canonicalHost && url.protocol === 'http:')) {
      url.protocol = 'https:'; url.host = canonicalHost;
      return new Response(null, { status: 308, headers: { Location: url.href } });
    }
    if (request.method !== 'GET' && !head) return new Response(null, { status: 405, headers: { Allow: 'GET, HEAD' } });
    const alias = url.pathname.replace(/index(?:\.html)?$/, '');
    if (normal.has(alias) && alias !== url.pathname) {
      url.pathname = alias; return new Response(null, { status: 308, headers: { Location: url.href } });
    }
    if (normal.has(url.pathname + '/')) {
      url.pathname += '/'; return new Response(null, { status: 308, headers: { Location: url.href } });
    }
    const explicitError = /^\/(?:en\/)?404(?:\.html|\/)?$/.test(url.pathname);
    const response = explicitError ? null : await env.ASSETS.fetch(request);
    if (!response || response.status === 404) {
      const errorURL = new URL(url); errorURL.pathname = url.pathname.startsWith('/en/') ? '/en/404/' : '/404'; errorURL.search = '';
      const page = await env.ASSETS.fetch(new Request(errorURL, { method: 'GET', redirect: 'manual' }));
      const headers = new Headers(page.headers); headers.delete('location'); headers.set('X-Robots-Tag', 'noindex, follow'); headers.set('Cache-Control', 'no-store'); headers.set('Content-Type','text/html; charset=utf-8');
      const fallback = errorURL.pathname.startsWith('/en/') ? '<!doctype html><html lang="en"><meta name="robots" content="noindex"><title>Page not found</title><h1>Page not found</h1><a href="/en/">Montaza guide</a></html>' : '<!doctype html><html lang="ar" dir="rtl"><meta name="robots" content="noindex"><title>الصفحة غير موجودة</title><h1>الصفحة غير موجودة</h1><a href="/">دليل المنتزه</a></html>';
      const body = await page.text();
      return new Response(head ? null : (body.trim() || fallback), { status: 404, headers });
    }
    return head ? new Response(null, { status: response.status, headers: response.headers }) : response;
  }
};
