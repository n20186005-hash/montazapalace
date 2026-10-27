# Cloudflare deployment

The static Astro output is `dist`. The root `wrangler.jsonc` selects project `montazapalace` and `src/worker.js`, with the ASSETS binding and Worker-first routing. The guard must run before the asset handler.

Use the exact package toolchain and committed lock. Build with `pnpm build`. The package deployment command remains `pnpm build && pnpm dlx wrangler@4.128.0 deploy`.

Inspect the actual Cloudflare project build/deploy commands and required hostname bindings independently before release; this file is source configuration, not proof of private dashboard settings or activation. Check HTTPS, established www/HTTP aliases, slash/index aliases, localized error status, referenced assets and existing analytics settings in the running version.
