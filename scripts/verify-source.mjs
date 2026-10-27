import { readFile, readdir, access } from 'node:fs/promises';
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
try {
  const workspace = await readFile('pnpm-workspace.yaml', 'utf8');
  workspace.includes('allowBuilds') && workspace.includes('esbuild: true')
    ? pass('pnpm-workspace.yaml allowBuilds esbuild')
    : fail('pnpm-workspace.yaml missing allowBuilds: esbuild: true');
} catch { fail('missing pnpm-workspace.yaml (pnpm v11 needs allowBuilds to approve the esbuild build script)'); }
const lock=await readFile('pnpm-lock.yaml','utf8');
for (const deps of Object.values({dependencies:pkg.dependencies,devDependencies:pkg.devDependencies})) {
  for (const [name, version] of Object.entries(deps || {})) {
    const escaped=name.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
    const re=new RegExp(`['"]?${escaped}['"]?:\\s+specifier: ${version.replaceAll('.','\\.')}`);
    re.test(lock) ? pass(`lock importer matches ${name}@${version}`) : fail(`lock importer mismatch ${name}@${version}`);
  }
}
const required=[
  'astro.config.mjs','wrangler.jsonc','pnpm-lock.yaml','pnpm-workspace.yaml','src/pages/index.astro','src/pages/privacy/index.astro','src/pages/terms/index.astro','src/pages/cookies/index.astro','src/styles/global.css','public/brand/logo.svg','public/brand/favicon.svg','public/brand/favicon-16x16.png','public/brand/favicon-32x32.png','public/brand/apple-touch-icon.png','public/robots.txt','public/site.webmanifest','public/sw.js','PHOTO-SOURCES.md'
];
for (const f of required) { try { await access(f); pass(`exists ${f}`); } catch { fail(`missing ${f}`); } }
async function walk(dir){const out=[];for(const ent of await readdir(dir,{withFileTypes:true})){const p=join(dir,ent.name);if(ent.isDirectory())out.push(...await walk(p));else out.push(p);}return out;}
const srcFiles=(await walk('src')).filter(f=>['.astro','.css','.ts','.js','.mjs','.json'].includes(extname(f)));
const forbidden=['example.com','chrome-extension://'];
for(const f of srcFiles){const t=await readFile(f,'utf8');for(const token of forbidden)if(t.includes(token))fail(`${token} in ${f}`)}
if(!failures.length) pass('source scan clean');
const home=await readFile('src/components/Home.astro','utf8');
const layout=await readFile('src/components/Layout.astro','utf8');
for(const marker of ['TouristAttraction','WebSite','WebPage','FAQPage','hasMap','id="about"','id="visit"','id="transport"','id="nearby"','id="map"','id="sources"','id="faq"']) home.includes(marker) ? pass(`home marker ${marker}`) : fail(`missing home marker ${marker}`);
for(const marker of ['hreflang','canonical','/site.webmanifest','/analytics.js']) layout.includes(marker) ? pass(`layout marker ${marker}`) : fail(`missing layout marker ${marker}`);
for(const marker of ['aggregateRating','LocalBusiness','openingHoursSpecification','isAccessibleForFree']) if(home.includes(marker)) fail(`unsupported attraction claim ${marker}`);
for(const f of ['src/pages/en/index.astro','src/pages/404.astro','src/pages/en/404.astro','src/worker.js','public/analytics.js']) { try { await access(f); pass(`exists ${f}`); } catch { fail(`missing ${f}`); } }
const wrangler=await readFile('wrangler.jsonc','utf8');
if(!wrangler.includes('"name": "montazapalace"') || !wrangler.includes('"run_worker_first": true') || !wrangler.includes('"main": "./src/worker.js"')) fail('wrong default Worker configuration');
const astro=await readFile('astro.config.mjs','utf8');
(astro.includes("const site = 'https://montazapalace.com'") && astro.includes('site ? [sitemap({ filter:')) ? pass('production site + filtered sitemap enabled') : fail('site/sitemap configuration unexpected');
if(failures.length){console.error(`\n${failures.length} failure(s)`);process.exit(1)}
console.log('\nSTATIC SOURCE VERIFICATION: PASS');
