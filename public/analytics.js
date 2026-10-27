(() => {
  if (window.MontazaAnalytics) return;
  const key = 'montaza-analytics-consent';
  const vetoKey = key + '-session-denied';
  const id = 'G-HXM22WWPKP';
  const ar = document.documentElement.lang === 'ar';
  const status = document.getElementById('status');
  let loaded = false;
  let effective = false;
  let deniedHere = false;
  const read = (area, name) => { try { return window[area].getItem(name); } catch { return undefined; } };
  const say = (arabic, english) => { if (status) status.textContent = ar ? arabic : english; };
  const stop = () => {
    effective = false;
    window['ga-disable-' + id] = true;
    if (loaded && window.gtag) window.gtag('consent', 'update', { analytics_storage: 'denied' });
  };
  const start = () => {
    effective = true;
    window['ga-disable-' + id] = false;
    if (loaded) { window.gtag('consent', 'update', { analytics_storage: 'granted' }); return; }
    loaded = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('consent', 'default', { analytics_storage: 'granted' });
    window.gtag('js', new Date());
    window.gtag('config', id, { anonymize_ip: true });
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + id;
    document.head.appendChild(script);
  };
  const write = (value) => {
    try { window.localStorage.setItem(key, value); return window.localStorage.getItem(key) === value; }
    catch { return false; }
  };
  const revoke = () => {
    if (write('denied')) return 'denied';
    try { window.localStorage.removeItem(key); return window.localStorage.getItem(key) === null ? 'removed' : false; }
    catch { return false; }
  };
  const veto = () => {
    try { window.sessionStorage.setItem(vetoKey, 'yes'); return window.sessionStorage.getItem(vetoKey) === 'yes'; }
    catch { return false; }
  };
  const clearVeto = () => {
    try { window.sessionStorage.removeItem(vetoKey); return window.sessionStorage.getItem(vetoKey) === null; }
    catch { return false; }
  };
  const choose = (allow) => {
    stop();
    if (!allow) {
      deniedHere = true;
      const sessionOff = veto();
      const sharedOff = revoke();
      if (sharedOff === 'denied') say('حُفظ الرفض. التحليلات الإضافية متوقفة هنا؛ لا يمكن استرجاع بيانات سبق إرسالها.', 'Rejection saved. Further analytics are off here; previously sent data cannot be recalled.');
      else if (sharedOff === 'removed') say('تأكد حذف الإذن المخزن. التحليلات متوقفة هنا؛ قد تحتاج إلى اختيار جديد لاحقاً.', 'Stored permission was verifiably removed. Analytics are off here; you may need to choose again later.');
      else if (sessionOff) say('لم يتأكد حفظ الرفض. التحليلات متوقفة في هذه الصفحة وجلسة هذا التبويب، لكن إذناً مخزناً قد يبقى صالحاً في تبويب أو جلسة جديدة.', 'Rejection could not be confirmed saved. Analytics are off on this page and in this tab session, but stored permission may remain usable in another tab or a new session.');
      else say('لم يتأكد حفظ الرفض. التحليلات متوقفة في هذه الصفحة فقط؛ قد يبقى إذن مخزن صالحاً عند فتح صفحة أو تبويب آخر.', 'Rejection could not be confirmed saved. Analytics are off on this page only; stored permission may remain usable on another page or tab.');
      return { saved: sharedOff, effective: false };
    }
    // Clear and verify the tab refusal before publishing shared permission.
    if (!clearVeto() || !write('granted')) {
      deniedHere = true;
      const sessionOff = veto();
      const sharedOff = revoke();
      if (sharedOff) say('لم تُحفظ الموافقة. التحليلات متوقفة هنا وتأكد عدم بقاء إذن مشترك؛ قد تحتاج لاختيار جديد.', 'Permission was not saved. Analytics are off here and shared refusal or permission removal was confirmed; you may need to choose again.');
      else if (sessionOff) say('لم يتأكد حفظ الموافقة. التحليلات متوقفة في الصفحة وجلسة التبويب؛ قد يبقى إذن من هذه المحاولة أو إذن سابق صالحاً في تبويب أو جلسة جديدة.', 'Permission was not confirmed saved. Analytics are off on this page and tab session; permission from this attempt or an earlier choice may remain usable in another tab or new session.');
      else say('لم يتأكد حفظ الموافقة. التحليلات متوقفة في هذه الصفحة فقط؛ قد يبقى إذن من هذه المحاولة أو إذن سابق صالحاً عند الفتح مجدداً أو في تبويب آخر.', 'Permission was not confirmed saved. Analytics are off on this page only; permission from this attempt or an earlier choice may remain usable on reopening or in another tab.');
      return { saved: false, effective: false };
    }
    deniedHere = false;
    start();
    say('حُفظت الموافقة. يمكن تحميل Google Analytics الآن؛ يمكنك سحبها من هذه الإعدادات لاحقاً.', 'Permission saved. Google Analytics may load now; you can withdraw it in these settings later.');
    return { saved: true, effective: true };
  };
  stop();
  const stored = read('localStorage', key);
  const blocked = read('sessionStorage', vetoKey);
  if (stored === 'granted' && blocked === null) {
    start(); say('الاختيار الحالي: التحليلات مسموحة.', 'Current choice: analytics allowed.');
  } else {
    say('التحليلات متوقفة هنا. يمكنك السماح بها أو رفضها؛ لن نفترض الإذن إذا تعذر قراءة الإعداد.', 'Analytics are off here. You can allow or reject them; an unreadable setting is not treated as permission.');
  }
  document.getElementById('allow')?.addEventListener('click', () => choose(true));
  document.getElementById('deny')?.addEventListener('click', () => choose(false));
  window.addEventListener('storage', (event) => {
    if (event.key !== key && event.key !== null) return;
    if (read('localStorage', key) !== 'granted') {
      deniedHere = true; stop(); veto();
      say('توقفت التحليلات هنا بعد تغيير الإذن في تبويب آخر. يلزم السماح من هذه الصفحة لإعادة تشغيلها.', 'Analytics stopped here after a permission change in another tab. Allow from this page to restart them.');
    } else if (deniedHere) stop();
  });
  window.MontazaAnalytics = { choose, state: () => ({ effective, loaded, deniedHere }) };
  if ('serviceWorker' in navigator && location.protocol === 'https:' && !['localhost', '127.0.0.1'].includes(location.hostname)) {
    window.addEventListener('load', () => navigator.serviceWorker.register('/sw.js').catch(() => {}));
  }
})();
