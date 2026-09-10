# حالة التحقق قبل التسليم

## ما تم فحصه فعليًا

- المشروع single-package؛ و`pnpm-workspace.yaml` موجود فقط لتفعيل `allowBuilds: esbuild: true` (متطلب pnpm v11 لتشغيل سكربت بناء `esbuild` بدل الفشل بـ `ERR_PNPM_IGNORED_BUILDS`).
- جميع direct dependency versions في `package.json` أرقام دقيقة بلا `latest` أو `*` أو `^` أو `~`.
- `packageManager` و`engines.pnpm` مثبتان على pnpm `11.25.0`.
- `.node-version` و`engines.node` مثبتان على Node.js `24.20.0`.
- TypeScript `6.0.3` داخل peer range الخاص بـ `@astrojs/check` `0.9.10` (`^5.0.0 || ^6.0.0`).
- `pnpm-lock.yaml` مضمّن كـ lock graph حقيقي سابق الإنشاء؛ importer الجذري مطابق تمامًا لجميع direct dependencies الحالية.
- `pnpm-workspace.yaml` موجود كملف إعدادات pnpm v11 (`allowBuilds`) وليس كـ workspace متعدد الحزم.
- النطاق الإنتاجي `https://montazapalace.com` مضبوط مرة واحدة في `astro.config.mjs`، وsitemap مُفعّل بقيمة النطاق ويُخرج `sitemap-index.xml` المُعلَن في `public/robots.txt`.
- لا توجد sitemap مكتوبة يدويًا ولا `lastmod` مخترع.
- خريطة Google تستخدم العربية/مصر (`ar` / `eg`).
- Logo/Favicon محليان وبنفس الرمز والألوان؛ SVG + 16×16 + 32×32 + 180×180 موجودة.
- JSON-LD يتضمن `TouristAttraction` + `LocalBusiness` + `LandmarksOrHistoricalBuildings` مع `@id`/`image`/`sameAs`/`hasMap`، و`WebSite` + `Organization` + `BreadcrumbList` + `FAQPage`.
- الصفحة تشمل الرسوم، المواقف، أفضل وقت، مدة الزيارة، النقل، الطعام القريب، المعالم القريبة وFAQ.
- كيان واحد (`entity`) هو مصدر الحقيقة للاسم والعنوان والإحداثيات، ويظهر في وسوم الرأس والنص المرئي وقسم `#about` لضمان تطابق NAP مع قائمة خرائط Google.
- PWA: `public/site.webmanifest` + `public/sw.js` + وسم manifest ورابط تسجيل الـ service worker في الصفحة.
- GA4 `G-HXM22WWPKP` لا يُحمّل إلا بعد موافقة التحليلات.
- فحص المصدر المحلي: `STATIC SOURCE VERIFICATION: PASS`؛ راجع `STATIC-VERIFICATION.log`.

## حالة بيئة التنفيذ

بيئة shell الحالية لديها وصول إلى registry، وتمّ فعليًا تشغيل:

```bash
pnpm install --frozen-lockfile
pnpm check
pnpm build
node scripts/verify-source.mjs
```

ونجحت جميعها بعد إضافة `allowBuilds: esbuild: true` في `pnpm-workspace.yaml`. لإعادة التحقق من الصفر:

```bash
rm -rf node_modules dist .astro
corepack enable
CI=1 corepack pnpm install --frozen-lockfile
pnpm check
pnpm build
```

ثم افحص الناتج:

```bash
! grep -RIE 'example\.com|localhost|chrome-extension://' dist
! grep -RIE '<lastmod>|lastmod' dist
```

يجب أن يحتوي sitemap على النطاق `https://montazapalace.com` فقط، وأن يشير `dist/robots.txt` إلى `/sitemap-index.xml`.

## حالة صور JPG

الصور الأربع الأصلية موجودة فعليًا في `public/images/` (ملفات JPEG سليمة بأبعاد كاملة) ومصادرها وتراخيصها موثقة في `PHOTO-SOURCES.md`. الصفحة تعرضها من داخل النطاق نفسه، وتُستخدم أيضًا في `og:image` وفي حقل `image` داخل JSON-LD. لا توجد ملفات JPG زائفة. `REAL-PHOTOS-DOWNLOADER.html` و`scripts/fetch-photos.mjs` يبقيان متاحين لتحديث الصور في بيئة متصلة.
