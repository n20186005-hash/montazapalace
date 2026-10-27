# Montaza Palace visitor guide

Independent, unofficial, nonprofit educational visitor information in Arabic and English. This website does not operate the gardens, sell admission or represent a government service.

## Development

Use the declared exact Node 24.20.0 and pnpm 11.25.0. Keep the committed dependency lock and native-build policy.

```sh
pnpm install --frozen-lockfile
pnpm check
pnpm build
pnpm verify:source
```

The site remains static Astro with Tailwind and TypeScript. Eight existing normal pages are paired by topic, with localized error documents. The default Wrangler configuration runs the small Worker before static assets to normalize existing HTTP/www and path aliases and return genuine localized 404 responses. The Worker project is `montazapalace`.

The original deployment command is retained in package.json. A successful build or dry run does not establish production activation or browser acceptance.

## Content and services

Dated Maps information is attributed, not a promise of palace-interior access, admission charges or safety. Sources and editorial check date appear on both homepages. Photograph credit, source, licence, capture date and visual-crop notice appear beside each use; see PHOTO-SOURCES.md for the source inventory.

Existing Google Analytics settings persist permission only after readback; refusal first stops the current runtime. Saving failures state the actual persistence scope. The service worker caches successful same-origin responses under their own addresses and does not substitute a homepage for an unknown offline route. This project has no weather service.
