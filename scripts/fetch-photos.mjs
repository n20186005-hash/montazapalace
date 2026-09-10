import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';

const files = [
  ['public/images/montaza-palace-hero.jpg', 'https://upload.wikimedia.org/wikipedia/commons/9/93/Montazah_Palace_and_Gardens.jpg'],
  ['public/images/montaza-palace-main.jpg', 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Montaza_Palace_-_ALEXANDRIA.jpg'],
  ['public/images/montaza-palace-garden.jpg', 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Montaza_Palace_garden_001.JPG'],
  ['public/images/montaza-palace-coast.jpg', 'https://upload.wikimedia.org/wikipedia/commons/8/80/Montaza_Palace%2C_Alexandria.jpg']
];

for (const [target, url] of files) {
  const full = resolve(target);
  await mkdir(dirname(full), { recursive: true });
  const res = await fetch(url, { headers: { 'User-Agent': 'MontazaPalaceGuide/1.0' } });
  if (!res.ok) throw new Error(`${target}: HTTP ${res.status}`);
  const type = res.headers.get('content-type') || '';
  if (!type.startsWith('image/')) throw new Error(`${target}: unexpected content-type ${type}`);
  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.length < 20_000) throw new Error(`${target}: response is unexpectedly small (${buf.length} bytes)`);
  await writeFile(full, buf);
  console.log(`saved ${target} (${buf.length} bytes)`);
}
console.log('All four real Montaza photo files are now local.');
