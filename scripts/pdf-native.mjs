// Generates a native vector PDF presentation with crisp text and clickable links using Playwright + Chromium.
import { existsSync, mkdirSync, rmSync } from 'node:fs';
import { execSync } from 'node:child_process';
import { launchBrowser, name, settle as settleOn, startServer } from './lib.mjs';

const DIST = 'dist';
const OUT = 'artifacts/pdf-pages';

rmSync(OUT, { recursive: true, force: true });
mkdirSync(OUT, { recursive: true });

process.env.BEATDECK_BROWSER = process.env.BEATDECK_BROWSER || '/usr/bin/chromium';

console.log('🚀 Building deck for native PDF export...');
execSync('npm run build', { stdio: 'inherit' });

console.log('🌐 Starting local server...');
const { base: BASE, stop } = await startServer({ dist: DIST });
const browser = await launchBrowser();
const context = await browser.newContext({ viewport: { width: 1920, height: 1080 }, deviceScaleFactor: 1 });
const page = await context.newPage();

await page.emulateMedia({ media: 'screen' });

async function load(hash, query = 'capture=1') {
  await page.goto('about:blank');
  await page.goto(`${BASE}?${query}${hash}`);
  await page.waitForFunction(() => window.__beatdeck && document.fonts.status === 'loaded', null, { timeout: 15000 });
}

await load('#1.1');
const { beats } = await page.evaluate(() => ({ beats: window.__beatdeck.beats }));
const all = beats.flatMap((bs, s) => bs.map((_, b) => [s + 1, b + 1]));

console.log(`📄 Generating ${all.length} native vector PDF pages...`);

const pdfFiles = [];
for (const [s, b] of all) {
  await load(`#${s}.${b}`);
  await settleOn(page, { min: 400, max: 6000 });
  
  const pdfPath = `${OUT}/beat-${name(s, b)}.pdf`;
  await page.pdf({
    path: pdfPath,
    width: '1920px',
    height: '1080px',
    printBackground: true,
    preferCSSPageSize: true,
    margin: { top: '0px', right: '0px', bottom: '0px', left: '0px' },
    pageRanges: '1'
  });
  pdfFiles.push(pdfPath);
  console.log(`  ✓ Page ${pdfFiles.length}/${all.length}: Beat #${s}.${b}`);
}

await browser.close();
stop();

console.log('🔗 Merging PDF pages into presentation.pdf with pdfunite...');
const cmd = `pdfunite ${pdfFiles.join(' ')} ../presentation.pdf`;
execSync(cmd, { stdio: 'inherit' });

console.log('✅ Native vector PDF successfully exported to ../presentation.pdf!');

