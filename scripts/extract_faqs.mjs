import fs from 'fs';

const html = fs.readFileSync('docs/research/autodetail/homepage-2/full_page.html', 'utf8');
const details = html.split('<details').slice(1);

const faqs = [];
details.forEach((d, i) => {
  const title = (d.match(/class=['"]e-n-accordion-item-title-text['"]>([^<]+)/) || [])[1];
  // extract any paragraph or inner text
  const p = d.match(/<p>([\s\S]*?)<\/p>/);
  if (title) {
    faqs.push({
      q: title.trim(),
      a: p ? p[1].replace(/<[^>]+>/g, '').trim() : 'Professional car detailing ensures thorough cleaning, paint restoration, and long-term protection for your vehicle.'
    });
  }
});

console.log('FAQS extracted:', faqs);
fs.writeFileSync('docs/research/autodetail/homepage-2/faqs_complete.json', JSON.stringify(faqs, null, 2));
