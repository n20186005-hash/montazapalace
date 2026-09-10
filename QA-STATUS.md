# حالة التحقق قبل التسليم

## ما تم فحصه فعليًا

- المشروع single-package ولا يحتوي `pnpm-workspace.yaml`.
- جميع direct dependency versions في `package.json` أرقام دقيقة بلا `latest` أو `*` أو `^` أو `~`.
- `packageManager` و`engines.pnpm` مثبتان على pnpm `11.25.0`.
- `.node-version` و`engines.node` مثبتان على Node.js `24.20.0`.
- TypeScript `6.0.3` داخل peer range الخاص بـ `@astrojs/check` `0.9.10` (`^5.0.0 || ^6.0.0`).
- `pnpm-lock.yaml` مضمّن كـ lock graph حقيقي سابق الإنشاء؛ importer الجذري مطابق تمامًا لجميع direct dependencies الحالية.
- لا توجد `pnpm-workspace.yaml`.
- إعداد النطاق يوجد مرة واحدة في `astro.config.mjs`، وsitemap مشروط بقيمة النطاق.
- لا توجد sitemap مكتوبة يدويًا ولا `lastmod` مخترع.
- خريطة Google تستخدم العربية/مصر (`ar` / `eg`).
- Logo/Favicon محليان وبنفس الرمز والألوان؛ SVG + 16×16 + 32×32 + 180×180 موجودة.
- JSON-LD يتضمن `TouristAttraction` + `LocalBusiness` و`FAQPage`.
- الصفحة تشمل الرسوم، المواقف، أفضل وقت، مدة الزيارة، النقل، الطعام القريب، المعالم القريبة وFAQ.
- GA4 `G-HXM22WWPKP` لا يُحمّل إلا بعد موافقة التحليلات.
- فحص المصدر المحلي: `STATIC SOURCE VERIFICATION: PASS`؛ راجع `STATIC-VERIFICATION.log`.

## قيد بيئة التنفيذ

بيئة shell الحالية لا تستطيع حل DNS الخاص بـ `registry.npmjs.org` ولا تنزيل ثنائيات Wikimedia. لذلك لا يمكن الادعاء بأن clean install / `pnpm check` / `pnpm build` تمّت بنجاح داخل هذه البيئة، كما لا يمكن إعادة حل أحدث patch versions من registry هنا.

لهذا السبب ثبّتت الحزمة على dependency graph كامل ومتزامن متاح محليًا بدل كتابة lockfile يدوي أو مزيف. عند توفر npm registry نفّذ:

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

إذا كان `site` فارغًا، يجب ألا يوجد sitemap. بعد وضع نطاق الإنتاج الحقيقي في `astro.config.mjs` وإعادة البناء، يجب أن يحتوي sitemap على ذلك النطاق فقط.

## حالة صور JPG

مصادر الصور وتراخيصها مؤكدة، لكن تنزيل الثنائيات تعذر من shell. لا توجد ملفات JPG زائفة. `REAL-PHOTOS-DOWNLOADER.html` و`scripts/fetch-photos.mjs` مضمّنان للحصول على الملفات الأربع الأصلية في بيئة متصلة.
