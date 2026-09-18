import fs from 'fs';

const html = fs.readFileSync('docs/research/autodetail/homepage-2/full_page.html', 'utf8');

// Let's find all images and their alt or surrounding container
const imgMatches = [...html.matchAll(/<img[^>]+src=["']([^"']+)["'][^>]*>/gi)].map(m => {
  const full = m[0];
  const src = m[1];
  const altMatch = full.match(/alt=["']([^"']*)["']/i);
  const alt = altMatch ? altMatch[1] : '';
  return { src, alt };
});

console.log('--- ALL IMAGES IN PAGE ---');
for (const item of imgMatches) {
  console.log(`${item.src} -> alt="${item.alt}"`);
}

// Let's find all headings h1, h2, h3, h4, h5, h6
const headingMatches = [...html.matchAll(/<(h[1-6])[^>]*>([\s\S]*?)<\/\1>/gi)].map(m => {
  return {
    tag: m[1],
    text: m[2].replace(/<[^>]+>/g, '').trim()
  };
});

console.log('\n--- ALL HEADINGS ---');
for (const h of headingMatches) {
  if (h.text) {
    console.log(`[${h.tag.toUpperCase()}] ${h.text}`);
  }
}
