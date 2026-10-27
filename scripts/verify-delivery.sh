#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
pnpm install --frozen-lockfile
pnpm check
pnpm build
node scripts/verify-source.mjs
printf '%s\n' 'Source and framework checks passed; native HTTP and browser acceptance are separate.'
