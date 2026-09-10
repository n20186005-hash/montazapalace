# Cloudflare Workers Static Assets

هذا المشروع Static Astro ولا يحتاج قاعدة بيانات أو Worker runtime مخصص. ملف `wrangler.jsonc` في الجذر يرفع `./dist` كـ Static Assets.

```bash
corepack enable
CI=1 corepack pnpm install --frozen-lockfile
pnpm check
pnpm build
pnpm deploy
```

النطاق الإنتاجي `https://montazapalace.com` مضبوط بالفعل مرة واحدة في قيمة `site` داخل `astro.config.mjs`. غيّرها في هذا المكان الوحيد فقط عند تغيير النطاق ثم أعد البناء والنشر.
