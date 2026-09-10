# Cloudflare Workers Static Assets

هذا المشروع Static Astro ولا يحتاج قاعدة بيانات أو Worker runtime مخصص. ملف `wrangler.jsonc` في الجذر يرفع `./dist` كـ Static Assets.

```bash
corepack enable
CI=1 corepack pnpm install --frozen-lockfile
pnpm check
pnpm build
pnpm deploy
```

عند تحديد النطاق الإنتاجي، غيّر قيمة `site` مرة واحدة فقط في `astro.config.mjs` ثم أعد البناء والنشر.
