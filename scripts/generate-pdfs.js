import { chromium } from 'playwright';
import { spawn } from 'child_process';
import { mkdirSync, rmSync } from 'fs';

const PORT = 4322;
const BASE_URL = `http://localhost:${PORT}`;
const LANGS = ['es', 'en'];

function startPreviewServer() {
  const server = spawn('npx', ['astro', 'preview', '--port', String(PORT)], {
    stdio: 'pipe',
    shell: true,
  });

  return new Promise((resolve, reject) => {
    server.stdout.on('data', (data) => {
      if (data.toString().includes(String(PORT))) {
        resolve(server);
      }
    });
    server.stderr.on('data', (data) => {
      if (data.toString().includes(String(PORT))) {
        resolve(server);
      }
    });
    setTimeout(() => reject(new Error('Preview server timeout')), 15000);
  });
}

const server = await startPreviewServer();
console.log('Preview server ready');

mkdirSync('public/pdfs', { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });

for (const lang of LANGS) {
  console.log(`Generating cv-${lang}.pdf...`);
  await page.goto(`${BASE_URL}/${lang}`, { waitUntil: 'networkidle' });
  await page.pdf({
    path: `public/pdfs/cv-${lang}.pdf`,
    format: 'A4',
    printBackground: true,
    margin: { top: '16mm', bottom: '16mm', left: '12mm', right: '12mm' },
  });
  console.log(`✓ public/pdfs/cv-${lang}.pdf`);
}

await browser.close();
server.kill();

for (const dir of ['dist', '.vercel']) {
  rmSync(dir, { recursive: true, force: true });
}
console.log('Done.');
