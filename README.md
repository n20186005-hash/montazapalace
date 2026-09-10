# دليل قصر المنتزه — الإسكندرية

موقع عربي مستقل من صفحة واحدة عن قصر وحدائق المنتزه الملكية في الإسكندرية، بتصميم مستوحى من العمارة الملكية المتوسطية وألوان البحر والحجر والقرميد.

## التقنية المثبتة

- Astro `7.2.4`
- Tailwind CSS و`@tailwindcss/vite` `4.3.3`
- TypeScript `6.0.3`
- `@astrojs/check` `0.9.10`
- `@astrojs/sitemap` `3.7.3`
- pnpm `11.25.0`
- Node.js `24.20.0`
- Wrangler CLI `4.128.0` عبر أمر نشر ذي إصدار دقيق
- Cloudflare Workers Static Assets؛ بلا قاعدة بيانات أو تسجيل دخول أو CMS

جميع إصدارات الاعتماد المباشر أرقام دقيقة، و`pnpm-lock.yaml` مضمّن ومتطابق مع importer الجذري. هذا هو أحدث graph مكتمل أمكن التحقق من تماسكه داخل بيئة التسليم المقيدة بالشبكة؛ راجع `QA-STATUS.md` لمعرفة قيد فحص أحدث patch متاح في registry.

## النطاق في مكان واحد

النطاق الإنتاجي مضبوط مرة واحدة في المتغير `site` داخل `astro.config.mjs`:

```js
const site = 'https://montazapalace.com';
```

هذه القيمة هي مصدر الحقيقة لـ canonical و`og:url` وhreflang وsitemap (`/sitemap-index.xml`، المُعلَن أيضًا في `public/robots.txt`) وعنوان المنشأ داخل البيانات المنظمة. غيّرها في هذا المكان الوحيد فقط عند تغيير النطاق.

## التشغيل

```bash
corepack enable
CI=1 corepack pnpm install --frozen-lockfile
pnpm check
pnpm build
```

للنشر على Cloudflare Workers Static Assets:

```bash
pnpm deploy
```

## الصور الحقيقية

تستخدم الصفحة أربع صور فوتوغرافية حقيقية للمنتزه من Wikimedia Commons، مع توثيق المؤلف والترخيص في `PHOTO-SOURCES.md`.

الملفات الأربعة الأصلية موجودة محليًا في `public/images/` وتُخدَم من داخل النطاق نفسه، لذا فإن `og:image` والبيانات المنظمة وصفحة الويب كلها على نفس الأصل. لتحديثها:

```bash
pnpm photos:fetch
```

أو افتح `REAL-PHOTOS-DOWNLOADER.html` في متصفح متصل بالإنترنت؛ سينشئ ZIP للصور الأربع.

## الخصوصية وGA4

GA4 مضبوط على `G-HXM22WWPKP`، ولا يتم تحميله إلا إذا سمح الزائر بالتحليلات من `/cookies/`. الصفحات القانونية موجودة في `/privacy/` و`/terms/` و`/cookies/`.

## تحسين الظهور (SEO Entity) وPWA

- كيان واحد مُعلَن مرة واحدة (`entity` داخل `src/pages/index.astro`) ويُستهلك في وسوم الرأس والنص المرئي والبيانات المنظمة لضمان تطابق NAP (الاسم/العنوان) مع قائمة المكان على خرائط Google.
- `TouristAttraction` + `LocalBusiness` + `LandmarksOrHistoricalBuildings` مع `@id` و`image` و`sameAs` و`hasMap`، بالإضافة إلى `WebSite` و`Organization` و`BreadcrumbList` و`FAQPage`.
- TDK موسّع: canonical، hreflang (`ar-eg` + `x-default`)، Open Graph، Twitter، ووسوم geo/ICBM.
- قسم `#sources` يعرض مصادر موثوقة: هيئة تنشيط السياحة في مصر، وزارة السياحة والآثار، ويكيبيديا، Wikidata `Q1350295`، Wikimedia Commons.
- PWA: `public/site.webmanifest` + `public/sw.js` مسجَّل من الصفحة لدعم التثبيت والعرض دون اتصال.

## التحقق

- `node scripts/verify-source.mjs` يفحص versions/lockfile/branding/schema/locale وبنية المصدر.
- `scripts/verify-delivery.sh` يعيد تنفيذ بوابة clean-install/build المطلوبة في بيئة لديها وصول إلى npm registry.
- حالة التحقق الفعلية موثقة في `QA-STATUS.md` و`STATIC-VERIFICATION.log`.
