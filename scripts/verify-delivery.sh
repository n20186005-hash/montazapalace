#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
rm -rf node_modules dist .astro
CI=1 corepack pnpm install --frozen-lockfile
corepack pnpm check
corepack pnpm build
node scripts/verify-source.mjs
if grep -RIE 'example\.com|localhost|chrome-extension://' dist; then
  echo 'Forbidden token found in dist' >&2; exit 1
fi
if grep -RIE '<lastmod>|lastmod' dist; then
  echo 'Unexpected manual lastmod marker found in dist' >&2; exit 1
fi
SITE_LINE=$(grep -E "^const site = '.*';" astro.config.mjs || true)
if [[ "$SITE_LINE" == "const site = '';" ]]; then
  if find dist -type f -iname '*sitemap*' | grep -q .; then echo 'Sitemap should not exist while site is empty' >&2; exit 1; fi
fi
echo 'DELIVERY VERIFICATION: PASS'
