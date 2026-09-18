import fs from 'fs';

const html = fs.readFileSync('docs/research/autodetail/homepage-2/full_page.html', 'utf8');

// Split by <details
const detailParts = html.split('<details').slice(1);
const faqs = [];

for (const part of detailParts) {
  const qMatch = part.match(/class="e-n-accordion-item-title-text">\s*([^<]+)/i);
  const pMatch = part.match(/<p>([\s\S]*?)<\/p>/i);
  if (qMatch && pMatch) {
    faqs.push({
      question: qMatch[1].trim(),
      answer: pMatch[1].replace(/<[^>]+>/g, '').trim()
    });
  }
}

console.log(`Found ${faqs.length} FAQs:`);
faqs.forEach((f, i) => console.log(`${i + 1}. ${f.question}\n   ${f.answer}\n`));

// Find testimonial section HTML
const testIdx = html.indexOf('What They Says');
if (testIdx !== -1) {
  const testSection = html.slice(testIdx, testIdx + 15000);
  console.log('--- TESTIMONIAL RAW EXCERPT ---');
  console.log(testSection.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').slice(0, 1000));
}

// Find Why choose our car detailing section
const whyIdx = html.indexOf('Why Choose Our Car Detailing?');
if (whyIdx !== -1) {
  const whySection = html.slice(whyIdx, whyIdx + 10000);
  console.log('--- WHY CHOOSE US EXCERPT ---');
  console.log(whySection.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').slice(0, 800));
}

// Find footer text
const footerIdx = html.indexOf('<footer');
if (footerIdx !== -1) {
  const footerSection = html.slice(footerIdx, footerIdx + 10000);
  console.log('--- FOOTER EXCERPT ---');
  console.log(footerSection.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').slice(0, 1000));
}
