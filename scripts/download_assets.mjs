import fs from 'fs';
import path from 'path';
import https from 'https';

const outDir = path.resolve('public/images/autodetail');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const rawUrls = JSON.parse(fs.readFileSync('docs/research/autodetail/homepage-2/image_urls.json', 'utf8'));

// Filter out resized thumbnail duplicates, keeping full/main images and distinct SVGs/webps
const selectedUrls = new Set();

for (const u of rawUrls) {
  // Avoid very small thumbnail crops if the full/clean version exists
  if (u.match(/-\d+x\d+\.(webp|png|jpg|jpeg)/)) {
    // If the base version is in the list, skip the thumbnail; otherwise keep
    const base = u.replace(/-\d+x\d+(\.\w+)$/, '$1');
    if (rawUrls.includes(base)) {
      selectedUrls.add(base);
      continue;
    }
  }
  selectedUrls.add(u);
}

console.log(`Downloading ${selectedUrls.size} images to ${outDir}...`);

async function download(url, filepath) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location, filepath).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return resolve({ url, error: res.statusCode });
      }
      const fileStream = fs.createWriteStream(filepath);
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        resolve({ url, success: true });
      });
    }).on('error', (err) => resolve({ url, error: err.message }));
  });
}

const manifest = {};

async function run() {
  const entries = Array.from(selectedUrls);
  let count = 0;
  for (const url of entries) {
    const filename = path.basename(new URL(url).pathname);
    const filepath = path.join(outDir, filename);
    const res = await download(url, filepath);
    if (res.success) {
      manifest[url] = `/images/autodetail/${filename}`;
      count++;
    } else {
      console.warn(`Failed: ${url} (${res.error})`);
    }
  }
  fs.writeFileSync('docs/research/autodetail/homepage-2/asset_manifest.json', JSON.stringify(manifest, null, 2));
  console.log(`Successfully downloaded ${count} assets!`);
}

run();
