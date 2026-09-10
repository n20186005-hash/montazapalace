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

ضع النطاق الإنتاجي فقط في المتغير `site` داخل `astro.config.mjs`:

```js
const site = '';
```

عندما تبقى القيمة فارغة، لا يكتب المشروع نطاقًا تجريبيًا، ولا يخرج canonical مطلقًا أو `og:url` أو sitemap. بعد تسجيل النطاق املأ هذه القيمة فقط وأعد البناء؛ `@astrojs/sitemap` يعمل تلقائيًا عند وجود قيمة حقيقية.

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

بيئة shell المستخدمة في إنشاء هذه الحزمة لا تستطيع تنزيل ثنائيات Wikimedia، لذلك لا أدّعي أن ملفات JPG الأصلية موجودة ماديًا في `public/images/`. لتوطينها دون تغيير أسماء المشروع لديك خياران مضمّنان:

```bash
pnpm photos:fetch
```

أو افتح `REAL-PHOTOS-DOWNLOADER.html` في متصفح متصل بالإنترنت؛ سينشئ ZIP للصور الأربع. إلى أن توضع الصور محليًا، الصفحة تستخدم روابط Wikimedia الأصلية مباشرة كي تبقى الصور حقيقية ولا تظهر ملفات وهمية.

## الخصوصية وGA4

GA4 مضبوط على `G-HXM22WWPKP`، ولا يتم تحميله إلا إذا سمح الزائر بالتحليلات من `/cookies/`. الصفحات القانونية موجودة في `/privacy/` و`/terms/` و`/cookies/`.

## التحقق

- `node scripts/verify-source.mjs` يفحص versions/lockfile/branding/schema/locale وبنية المصدر.
- `scripts/verify-delivery.sh` يعيد تنفيذ بوابة clean-install/build المطلوبة في بيئة لديها وصول إلى npm registry.
- حالة التحقق الفعلية موثقة في `QA-STATUS.md` و`STATIC-VERIFICATION.log`.
