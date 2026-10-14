import fs from "node:fs";

async function fetchHtml(url) {
  const res = await fetch(url, {
    headers: { "User-Agent": "CleanWorx-Auditor/1.0" },
  });
  const text = await res.text();
  return { status: res.status, text };
}

async function testRedirectWithParams(initialUrl) {
  let currentUrl = initialUrl;
  const hops = [];
  for (let i = 0; i < 5; i++) {
    const res = await fetch(currentUrl, {
      method: "HEAD",
      redirect: "manual",
      headers: { "User-Agent": "CleanWorx-Auditor/1.0" },
    });
    hops.push({ url: currentUrl, status: res.status, location: res.headers.get("location") });
    if (res.status >= 300 && res.status < 400 && res.headers.get("location")) {
      currentUrl = new URL(res.headers.get("location"), currentUrl).href;
    } else {
      break;
    }
  }
  return { finalUrl: currentUrl, hops };
}

async function runAudit() {
  console.log("==================================================");
  console.log("1. AUDITORÍA DEL SITIO EN VIVO (cleanworxnj.com)");
  console.log("==================================================");
  
  const home = await fetchHtml("https://www.cleanworxnj.com/");
  console.log(`Página principal HTTP status: ${home.status}`);
  
  // Tag G-FRVB9W1H8D count
  const tagMatches = home.text.match(/googletagmanager\.com\/gtag\/js\?id=G-FRVB9W1H8D/g) || [];
  console.log(`Tag G-FRVB9W1H8D presente en HTML: ${tagMatches.length} vez/veces (Esperado: 1)`);
  
  // Find where they are
  let pos = 0;
  while ((pos = home.text.indexOf("googletagmanager.com/gtag/js?id=G-FRVB9W1H8D", pos)) !== -1) {
    const snippet = home.text.substring(Math.max(0, pos - 40), pos + 80);
    console.log(`  Ocurrencia en pos ${pos}: ${JSON.stringify(snippet)}`);
    pos += 45;
  }
  
  // send_page_view: false
  const sendPageViewFalse = home.text.includes("send_page_view: false") || home.text.includes("send_page_view:false");
  console.log(`Configuración send_page_view: false: ${sendPageViewFalse ? "✅ SÍ" : "❌ NO"}`);

  // Contact links
  const hasTel = home.text.includes("tel:");
  const hasMailto = home.text.includes("mailto:");
  const hasSquare = home.text.includes("cleanworx-llc.square.site") || home.text.includes("book.squareup.com");
  console.log(`Enlaces tel: encontrados: ${hasTel ? "✅ SÍ" : "❌ NO"}`);
  console.log(`Enlaces mailto: encontrados: ${hasMailto ? "✅ SÍ" : "❌ NO"}`);
  console.log(`Enlaces hacia Square encontrados: ${hasSquare ? "✅ SÍ" : "❌ NO"}`);

  console.log("\n==================================================");
  console.log("2. AUDITORÍA DE PÁGINA CONTACTO (/contact)");
  console.log("==================================================");
  const contact = await fetchHtml("https://www.cleanworxnj.com/contact");
  console.log(`Página de contacto HTTP status: ${contact.status}`);
  const hasFormspree = contact.text.includes("formspree.io/f/xzedawyg");
  console.log(`Endpoint Formspree (xzedawyg): ${hasFormspree ? "✅ SÍ" : "❌ NO"}`);

  console.log("\n==================================================");
  console.log("3. PRESERVACIÓN DE PARÁMETROS (UTM, gclid) EN REDIRECCIONES");
  console.log("==================================================");
  const testParams = "?utm_source=google&utm_medium=cpc&utm_campaign=test_audit&gclid=testGclid123";
  
  const redirectTests = [
    { name: "HTTP -> HTTPS (sin www)", url: `http://cleanworxnj.com/${testParams}` },
    { name: "HTTP -> HTTPS (con www)", url: `http://www.cleanworxnj.com/${testParams}` },
    { name: "HTTPS sin www -> con www", url: `https://cleanworxnj.com/${testParams}` },
    { name: "Redirección 301 de URL antigua", url: `https://www.cleanworxnj.com/woodbridge-nj-smoke-smell-removal${testParams}` }
  ];

  for (const t of redirectTests) {
    const res = await testRedirectWithParams(t.url);
    const preserves = res.finalUrl.includes("gclid=testGclid123") && res.finalUrl.includes("utm_source=google");
    console.log(`\nTest [${t.name}]:`);
    console.log(`  Inicio: ${t.url}`);
    res.hops.forEach((h, idx) => {
      console.log(`  Salto ${idx + 1}: ${h.status} -> ${h.location || "FINAL"}`);
    });
    console.log(`  URL Final: ${res.finalUrl}`);
    console.log(`  Preserva gclid y UTMs: ${preserves ? "✅ SÍ" : "❌ NO"}`);
  }

  console.log("\n==================================================");
  console.log("4. AUDITORÍA DETALLADA DE SQUARE ONLINE (PUNTO 5)");
  console.log("==================================================");
  const square = await fetchHtml("https://cleanworx-llc.square.site/");
  console.log(`Square Online HTTP status: ${square.status}`);

  const hasDummyPhone = square.text.includes("(555) 555-5555");
  const hasDummyMail = square.text.includes("hi@mystore.com");
  const hasRealPhone = square.text.includes("(908) 899-2832");
  const hasRealMail = square.text.includes("cleanworxnj@gmail.com");

  console.log(`¿Contiene texto visible (908) 899-2832?: ${hasRealPhone ? "✅ SÍ" : "❌ NO"}`);
  console.log(`¿Contiene texto visible cleanworxnj@gmail.com?: ${hasRealMail ? "✅ SÍ" : "❌ NO"}`);
  console.log(`¿Contiene enlace interno (555) 555-5555?: ${hasDummyPhone ? "⚠️ SÍ (DUMMY ACTIVO)" : "✅ NO"}`);
  console.log(`¿Contiene enlace interno hi@mystore.com?: ${hasDummyMail ? "⚠️ SÍ (DUMMY ACTIVO)" : "✅ NO"}`);

  if (hasDummyPhone || hasDummyMail) {
    // Extract exact snippet
    const phoneIdx = square.text.indexOf("(555) 555-5555");
    const snippet = square.text.substring(Math.max(0, phoneIdx - 150), phoneIdx + 200);
    console.log("\nFragmento JSON de Square Online donde está el enlace:");
    console.log(snippet);
  }
}

runAudit().catch(console.error);
