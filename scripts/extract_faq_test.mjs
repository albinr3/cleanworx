import fs from 'fs';

const html = fs.readFileSync('docs/research/autodetail/homepage-2/full_page.html', 'utf8');

// FAQ extraction
const detailsRegex = /<details[^>]*>([\s\S]*?)<\/details>/gi;
const faqs = [];
let dm;
while ((dm = detailsRegex.exec(html)) !== null) {
  const block = dm[1];
  const qMatch = block.match(/e-n-accordion-item-title-text">\s*([\s\S]*?)\s*<\/div>/i);
  const aMatch = block.match(/<p>([\s\S]*?)<\/p>/i);
  if (qMatch && aMatch) {
    faqs.push({
      question: qMatch[1].trim(),
      answer: aMatch[1].replace(/<[^>]+>/g, '').trim()
    });
  }
}

// Testimonials extraction
// Let's search for client reviews
const testRegex = /<div class="rts__single__testimonial"[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/gi;
const reviews = [];
// Let's search for the testimonial text
const descRegex = /<p class="rts__testimonial__desc"[^>]*>([\s\S]*?)<\/p>/gi;
const userRegex = /<h5 class="rts__testimonial__user"[^>]*>([\s\S]*?)<\/h5>/gi;
const descs = [...html.matchAll(descRegex)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
const users = [...html.matchAll(userRegex)].map(m => m[1].replace(/<[^>]+>/g, '').trim());

console.log('FAQS:', JSON.stringify(faqs, null, 2));
console.log('TESTIMONIAL USERS:', users);
console.log('TESTIMONIAL DESCS:', descs);

fs.writeFileSync('docs/research/autodetail/homepage-2/faq_data.json', JSON.stringify(faqs, null, 2));
fs.writeFileSync('docs/research/autodetail/homepage-2/testimonial_data.json', JSON.stringify({ users, descs }, null, 2));
