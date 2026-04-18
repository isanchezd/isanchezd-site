import { chromium } from 'playwright';
import { execSync } from 'child_process';
import { mkdirSync, rmSync, readFileSync, existsSync, statSync } from 'fs';
import { createServer } from 'http';
import { join, extname } from 'path';

const PORT = 4322;
const BASE_URL = `http://localhost:${PORT}`;
const LANGS = ['es', 'en'];
const DIST = 'dist/client';

const MIME = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.woff2': 'font/woff2',
};

function startServer() {
  const server = createServer((req, res) => {
    let urlPath = req.url.split('?')[0];
    if (urlPath.endsWith('/')) urlPath += 'index.html';

    let filePath = join(DIST, urlPath);
    if (!existsSync(filePath)) filePath = join(DIST, urlPath + '.html');
    if (!existsSync(filePath)) filePath = join(DIST, urlPath, 'index.html');
    if (existsSync(filePath) && statSync(filePath).isDirectory()) filePath = join(filePath, 'index.html');

    if (!existsSync(filePath)) {
      res.writeHead(404);
      res.end('Not found');
      return;
    }

    const ext = extname(filePath);
    res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
    res.end(readFileSync(filePath));
  });

  return new Promise((resolve) => server.listen(PORT, () => resolve(server)));
}

console.log('Building...');
execSync('npx astro build', { stdio: 'inherit' });

console.log('Starting static server...');
const server = await startServer();
console.log(`Server ready at ${BASE_URL}`);

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
server.close();

for (const dir of [DIST, '.vercel']) {
  rmSync(dir, { recursive: true, force: true });
}
console.log('Done.');
