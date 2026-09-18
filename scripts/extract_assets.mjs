import fs from 'fs';
import path from 'path';

const html = fs.readFileSync('docs/research/autodetail/homepage-2/full_page.html', 'utf8');

// Match img src and data-src and srcset
const imgRegex = /<img[^>]+(?:src|data-src)=["']([^"']+)["']/gi;
const srcsetRegex = /srcset=["']([^"']+)["']/gi;
const bgRegex = /url\(["']?([^"')]+)["']?\)/gi;

const images = new Set();
let m;

while ((m = imgRegex.exec(html)) !== null) {
  if (m[1].startsWith('http') && !m[1].includes('s.w.org/images/core/emoji')) {
    images.add(m[1]);
  }
}

while ((m = srcsetRegex.exec(html)) !== null) {
  const parts = m[1].split(',');
  for (const part of parts) {
    const url = part.trim().split(/\s+/)[0];
    if (url.startsWith('http') && !url.includes('s.w.org/images/core/emoji')) {
      images.add(url);
    }
  }
}

while ((m = bgRegex.exec(html)) !== null) {
  const url = m[1];
  if (url.startsWith('http') && url.match(/\.(png|jpg|jpeg|webp|svg|gif)(\?.*)?$/i)) {
    images.add(url);
  }
}

console.log(`Found ${images.size} unique image URLs:`);
const imgArray = Array.from(images);
fs.writeFileSync('docs/research/autodetail/homepage-2/image_urls.json', JSON.stringify(imgArray, null, 2));

for (const u of imgArray) {
  console.log(u);
}
