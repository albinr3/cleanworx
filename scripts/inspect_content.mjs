import fs from 'fs';

const html = fs.readFileSync('docs/research/autodetail/homepage-2/full_page.html', 'utf8');

// FAQ extraction
const faqRegex = /<div[^>]*class="[^"]*elementor-accordion-item[^"]*"[^>]*>([\s\S]*?)<\/div>\s*<\/div>/gi;
const faqs = [];
// Also look for general accordion items
const accTitleRegex = /<a[^>]*class="[^"]*elementor-accordion-title[^"]*"[^>]*>([\s\S]*?)<\/a>/gi;
const accContentRegex = /<div[^>]*class="[^"]*elementor-tab-content[^"]*"[^>]*>([\s\S]*?)<\/div>/gi;

const titles = [...html.matchAll(accTitleRegex)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
const contents = [...html.matchAll(accContentRegex)].map(m => m[1].replace(/<[^>]+>/g, '').trim());

console.log('--- FAQS ---');
titles.forEach((t, i) => {
  console.log(`Q: ${t}\nA: ${contents[i] || ''}\n`);
});

// Testimonials extraction
console.log('--- TESTIMONIALS ---');
const testMatches = [...html.matchAll(/<div[^>]*class="[^"]*rt-testimonial[^"]*"[^>]*>([\s\S]*?)<\/div>\s*<\/div>/gi)];
const cleanTests = testMatches.map(m => m[0].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim());
console.log(cleanTests.slice(0, 5));

// About Us text
const aboutMatch = html.match(/Restoring Lasting Shine, Inside and Out[\s\S]{1,1000}/);
if (aboutMatch) {
  console.log('--- ABOUT SNIPPET ---');
  console.log(aboutMatch[0].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').slice(0, 500));
}

// Stats counters
const counterMatches = [...html.matchAll(/elementor-counter-number[^>]*>([\d,\+]+)[\s\S]*?elementor-counter-title[^>]*>([^<]+)/gi)];
console.log('--- COUNTERS ---');
for (const c of counterMatches) {
  console.log(`${c[1]} - ${c[2]}`);
}
