import { readFile, readdir, stat, access } from 'node:fs/promises';
import { join, extname } from 'node:path';

const root = process.cwd();
const pkg = JSON.parse(await readFile(join(root, 'package.json'), 'utf8'));
const failures = [];
const pass = (x) => console.log(`PASS  ${x}`);
const fail = (x) => { failures.push(x); console.error(`FAIL  ${x}`); };
const exact = /^\d+\.\d+\.\d+(?:-[0-9A-Za-z.-]+)?$/;
for (const group of ['dependencies','devDependencies']) {
  for (const [name, version] of Object.entries(pkg[group] || {})) exact.test(version) ? pass(`${name} exact ${version}`) : fail(`${name} is not exact: ${version}`);
}
/^pnpm@\d+\.\d+\.\d+$/.test(pkg.packageManager) ? pass(`packageManager ${pkg.packageManager}`) : fail('packageManager not exact');
const nodePin=(await readFile('.node-version','utf8')).trim();
nodePin===pkg.engines.node ? pass(`Node pin ${nodePin}`) : fail('Node pin differs from engines.node');
try { await access('pnpm-workspace.yaml'); fail('pnpm-workspace.yaml exists in single-package project'); } catch { pass('no pnpm-workspace.yaml'); }
const lock=await readFile('pnpm-lock.yaml','utf8');
for (const [group, deps] of Object.entries({dependencies:pkg.dependencies,devDependencies:pkg.devDependencies})) {
  for (const [name, version] of Object.entries(deps || {})) {
    const escaped=name.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
    const re=new RegExp(`['"]?${escaped}['"]?:\\n\\s+specifier: ${version.replaceAll('.','\\.')}`);
    re.test(lock) ? pass(`lock importer matches ${name}@${version}`) : fail(`lock importer mismatch ${name}@${version}`);
  }
}
const required=[
  'astro.config.mjs','wrangler.jsonc','pnpm-lock.yaml','src/pages/index.astro','src/pages/privacy/index.astro','src/pages/terms/index.astro','src/pages/cookies/index.astro','src/styles/global.css','public/brand/logo.svg','public/brand/favicon.svg','public/brand/favicon-16x16.png','public/brand/favicon-32x32.png','public/brand/apple-touch-icon.png','PHOTO-SOURCES.md','REAL-PHOTOS-DOWNLOADER.html'
];
for (const f of required) { try { await access(f); pass(`exists ${f}`); } catch { fail(`missing ${f}`); } }
async function walk(dir){const out=[];for(const ent of await readdir(dir,{withFileTypes:true})){const p=join(dir,ent.name);if(ent.isDirectory())out.push(...await walk(p));else out.push(p);}return out;}
const srcFiles=(await walk('src')).filter(f=>['.astro','.css','.ts','.js','.mjs','.json'].includes(extname(f)));
const forbidden=['example.com','localhost','chrome-extension://'];
for(const f of srcFiles){const t=await readFile(f,'utf8');for(const token of forbidden)if(t.includes(token))fail(`${token} in ${f}`)}
if(!failures.length) pass('source scan clean');
const index=await readFile('src/pages/index.astro','utf8');
for(const marker of ['TouristAttraction','LocalBusiness','FAQPage','G-HXM22WWPKP','!1sar!2seg','id="visit"','id="transport"','id="nearby"','id="faq"']) index.includes(marker) ? pass(`marker ${marker}`) : fail(`missing marker ${marker}`);
const astro=await readFile('astro.config.mjs','utf8');
(astro.includes("const site = ''") && astro.includes('site ? [sitemap()] : []')) ? pass('conditional sitemap / single site config') : fail('site/sitemap configuration unexpected');
if(failures.length){console.error(`\n${failures.length} failure(s)`);process.exit(1)}
console.log('\nSTATIC SOURCE VERIFICATION: PASS');
