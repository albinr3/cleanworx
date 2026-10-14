import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const ledgerPath = path.join(root, "docs", "seo", "SEO-MIGRATION-PHASES-AND-URL-LEDGER.md");

async function checkUrl(url, maxRedirects = 5) {
  let currentUrl = url;
  const chain = [];
  try {
    for (let i = 0; i < maxRedirects; i++) {
      const res = await fetch(currentUrl, {
        method: "HEAD",
        redirect: "manual",
        headers: { "User-Agent": "CleanWorx-SEO-Verifier/1.0" },
      });
      chain.push({ url: currentUrl, status: res.status, location: res.headers.get("location") });
      if (res.status >= 300 && res.status < 400 && res.headers.get("location")) {
        const nextUrl = new URL(res.headers.get("location"), currentUrl).href;
        if (chain.some((hop) => hop.url === nextUrl)) {
          return { ok: false, error: "REDIRECT_LOOP", chain };
        }
        currentUrl = nextUrl;
      } else {
        return {
          ok: res.status === 200,
          finalStatus: res.status,
          finalUrl: currentUrl,
          chain,
        };
      }
    }
    return { ok: false, error: "TOO_MANY_REDIRECTS", chain };
  } catch (err) {
    return { ok: false, error: err.message, chain };
  }
}

async function main() {
  const sampleNewPages = [
    "https://www.cleanworxnj.com/",
    "https://www.cleanworxnj.com/about",
    "https://www.cleanworxnj.com/contact",
    "https://www.cleanworxnj.com/services",
    "https://www.cleanworxnj.com/service-areas",
    "https://www.cleanworxnj.com/service-areas/woodbridge-nj",
    "https://www.cleanworxnj.com/service-areas/edison-nj",
    "https://www.cleanworxnj.com/sitemap.xml",
    "https://www.cleanworxnj.com/robots.txt",
  ];

  console.log("=== Verificando páginas clave del nuevo sitio ===");
  for (const url of sampleNewPages) {
    const res = await checkUrl(url);
    const chainStr = res.chain.map((c) => `${c.status}${c.location ? " -> " + c.location : ""}`).join(" | ");
    console.log(`${res.ok ? "✅" : "❌"} ${url}: ${chainStr} (${res.finalStatus ?? res.error})`);
  }

  console.log("\n=== Verificando muestra de redirecciones 301 del Anexo ===");
  const sampleRedirects = [
    "https://www.cleanworxnj.com/woodbridge-nj-smoke-smell-removal",
    "https://www.cleanworxnj.com/cranford-nj-headlight-restoration",
    "https://www.cleanworxnj.com/basking-ridge-nj-auto-detailing",
    "https://www.cleanworxnj.com/edison-nj-full-detailing-services",
    "https://cleanworxnj.com/",
    "http://www.cleanworxnj.com/",
  ];

  for (const url of sampleRedirects) {
    const res = await checkUrl(url);
    const chainStr = res.chain.map((c) => `${c.status}${c.location ? " -> " + c.location : ""}`).join(" | ");
    console.log(`${res.ok ? "✅" : "❌"} ${url}: ${chainStr} (${res.finalStatus ?? res.error})`);
  }
}

main().catch(console.error);
