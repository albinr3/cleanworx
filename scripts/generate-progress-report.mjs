import fs from 'fs';
import path from 'path';

const logoPath = 'C:/Users/Albin Rodriguez/Documents/CleanWorx/public/images/cleanworx-logo.webp';
let logoBase64 = '';
if (fs.existsSync(logoPath)) {
  logoBase64 = 'data:image/webp;base64,' + fs.readFileSync(logoPath).toString('base64');
}

const outputPathEs = 'C:/Users/Albin Rodriguez/Documents/CleanWorx/outputs/reports/CleanWorx_Primer_Mes_Reporte_de_Progreso_Octubre_2026.html';
const outputPathEn = 'C:/Users/Albin Rodriguez/Documents/CleanWorx/outputs/reports/CleanWorx_First_Month_Progress_Report_October_2026.html';

const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CleanWorx | First Month Progress Report</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;700&display=swap" rel="stylesheet">
  <style>
    :root {
      --primary: #0F172A;
      --primary-light: #1E293B;
      --accent: #0284C7;
      --accent-glow: #38BDF8;
      --accent-soft: #E0F2FE;
      --success: #059669;
      --success-soft: #ECFDF5;
      --amber: #D97706;
      --amber-soft: #FFFBEB;
      --text-main: #0F172A;
      --text-muted: #475569;
      --text-light: #64748B;
      --border: #E2E8F0;
      --border-dark: #CBD5E1;
      --bg-page: #F8FAFC;
      --bg-card: #FFFFFF;
      --card-gold: #FEF3C7;
      --card-blue: #E0F2FE;
      --card-green: #DCFCE7;
      --card-grey: #F1F5F9;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      background-color: var(--bg-page);
      color: var(--text-main);
      line-height: 1.55;
      font-size: 14.5px;
      -webkit-font-smoothing: antialiased;
      padding-bottom: 50px;
    }

    /* Top action bar */
    .top-action-bar {
      position: sticky;
      top: 0;
      z-index: 1000;
      background: rgba(15, 23, 42, 0.95);
      backdrop-filter: blur(10px);
      color: #FFFFFF;
      padding: 12px 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
    }

    .top-action-bar .brand-info {
      display: flex;
      align-items: center;
      gap: 12px;
      font-size: 13.5px;
      font-weight: 500;
      color: #94A3B8;
    }

    .top-action-bar .brand-info strong {
      color: #FFFFFF;
      font-weight: 700;
    }

    .btn-print {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: linear-gradient(135deg, #0284C7 0%, #0369A1 100%);
      color: #FFFFFF;
      border: none;
      padding: 9px 18px;
      border-radius: 8px;
      font-size: 13.5px;
      font-weight: 600;
      cursor: pointer;
      box-shadow: 0 2px 10px rgba(2, 132, 199, 0.35);
      transition: all 0.2s ease;
    }

    .btn-print:hover {
      background: linear-gradient(135deg, #0369A1 0%, #075985 100%);
      transform: translateY(-1px);
      box-shadow: 0 4px 14px rgba(2, 132, 199, 0.45);
    }

    /* Report container */
    .report-container {
      max-width: 960px;
      margin: 32px auto;
      background: var(--bg-card);
      border-radius: 16px;
      box-shadow: 0 10px 40px -10px rgba(15, 23, 42, 0.08), 0 0 1px 1px rgba(15, 23, 42, 0.04);
      border: 1px solid var(--border);
      overflow: hidden;
    }

    .report-header {
      background: linear-gradient(135deg, #0F172A 0%, #1E293B 100%);
      color: #FFFFFF;
      padding: 40px 48px;
      position: relative;
    }

    .header-top {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 28px;
      gap: 20px;
    }

    .logo-box {
      background: rgba(255, 255, 255, 0.06);
      border: 1px solid rgba(255, 255, 255, 0.12);
      padding: 12px 18px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      backdrop-filter: blur(8px);
    }

    .logo-img {
      max-height: 48px;
      width: auto;
      object-fit: contain;
    }

    .tag-badge {
      display: inline-block;
      background: rgba(2, 132, 199, 0.25);
      border: 1px solid rgba(56, 189, 248, 0.4);
      color: #38BDF8;
      font-size: 11.5px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.8px;
      padding: 5px 12px;
      border-radius: 999px;
      margin-bottom: 12px;
    }

    .report-title {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 28px;
      font-weight: 700;
      line-height: 1.25;
      letter-spacing: -0.5px;
      color: #FFFFFF;
      margin-bottom: 8px;
    }

    .report-subtitle {
      font-size: 15px;
      color: #94A3B8;
      max-width: 650px;
      line-height: 1.5;
    }

    .meta-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 16px;
      margin-top: 28px;
      padding-top: 24px;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
    }

    .meta-item {
      display: flex;
      flex-direction: column;
      gap: 3px;
    }

    .meta-label {
      font-size: 11px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.6px;
      color: #64748B;
    }

    .meta-value {
      font-size: 13.5px;
      font-weight: 600;
      color: #F1F5F9;
    }

    /* Report body */
    .report-body {
      padding: 44px 48px;
    }

    .section-title {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 20px;
      font-weight: 700;
      color: var(--primary);
      margin-top: 36px;
      margin-bottom: 14px;
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .section-title:first-of-type {
      margin-top: 0;
    }

    .section-title-icon {
      width: 22px;
      height: 22px;
      color: var(--accent);
      flex-shrink: 0;
    }

    .intro-paragraph {
      font-size: 15px;
      line-height: 1.65;
      color: var(--text-muted);
      margin-bottom: 24px;
    }

    /* Bento Cards */
    .bento-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
      margin-bottom: 36px;
    }

    .bento-card {
      padding: 22px;
      border-radius: 12px;
      border: 1px solid var(--border);
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      gap: 8px;
      transition: transform 0.15s ease;
    }

    .bento-card.gold {
      background: var(--card-gold);
      border-color: #FDE68A;
    }

    .bento-card.blue {
      background: var(--card-blue);
      border-color: #BAE6FD;
    }

    .bento-card.green {
      background: var(--card-green);
      border-color: #BBF7D0;
    }

    .bento-card.grey {
      background: var(--card-grey);
      border-color: #E2E8F0;
    }

    .bento-header {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .bento-icon {
      width: 32px;
      height: 32px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(15, 23, 42, 0.08);
      color: var(--primary);
    }

    .bento-title {
      font-size: 15px;
      font-weight: 700;
      color: var(--primary);
      line-height: 1.3;
    }

    .bento-desc {
      font-size: 13px;
      color: #334155;
      line-height: 1.5;
    }

    /* Workstream cards */
    .workstream-list {
      display: flex;
      flex-direction: column;
      gap: 16px;
      margin-bottom: 36px;
    }

    .workstream-card {
      border: 1px solid var(--border);
      border-radius: 12px;
      overflow: hidden;
      background: #FFFFFF;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02);
    }

    .workstream-header {
      padding: 14px 20px;
      background: #F8FAFC;
      border-bottom: 1px solid var(--border);
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 14px;
    }

    .workstream-badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: 11.5px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      padding: 4px 10px;
      border-radius: 6px;
    }

    .workstream-badge.migracion {
      background: #FEF3C7;
      color: #92400E;
      border: 1px solid #FCD34D;
    }

    .workstream-badge.web {
      background: #E0F2FE;
      color: #075985;
      border: 1px solid #7DD3FC;
    }

    .workstream-badge.local {
      background: #DCFCE7;
      color: #166534;
      border: 1px solid #86EFAC;
    }

    .workstream-badge.onpage {
      background: #F3E8FF;
      color: #6B21A8;
      border: 1px solid #D8B4FE;
    }

    .workstream-badge.tecnico {
      background: #F1F5F9;
      color: #334155;
      border: 1px solid #CBD5E1;
    }

    .workstream-badge.analitica {
      background: #FFE4E6;
      color: #9F1239;
      border: 1px solid #FDA4AF;
    }

    .workstream-date {
      font-size: 12px;
      font-weight: 600;
      color: var(--text-light);
    }

    .workstream-body {
      padding: 18px 20px;
    }

    .workstream-h3 {
      font-size: 15.5px;
      font-weight: 700;
      color: var(--primary);
      margin-bottom: 6px;
    }

    .workstream-summary {
      font-size: 13.5px;
      color: var(--text-muted);
      line-height: 1.5;
      margin-bottom: 12px;
    }

    .deliverables-list {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 7px;
    }

    .deliverables-list li {
      position: relative;
      padding-left: 20px;
      font-size: 13px;
      color: #334155;
      line-height: 1.45;
    }

    .deliverables-list li::before {
      content: "✓";
      position: absolute;
      left: 0;
      color: var(--success);
      font-weight: 700;
      font-size: 13px;
    }

    /* Status Table */
    .table-wrapper {
      border: 1px solid var(--border);
      border-radius: 12px;
      overflow: hidden;
      margin-bottom: 32px;
      background: #FFFFFF;
    }

    .status-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 13px;
      text-align: left;
    }

    .status-table th {
      background: var(--primary);
      color: #FFFFFF;
      padding: 12px 18px;
      font-weight: 600;
      font-size: 12.5px;
      letter-spacing: 0.3px;
      border-bottom: 1px solid var(--primary-light);
    }

    .status-table td {
      padding: 12px 18px;
      border-bottom: 1px solid var(--border);
      color: #334155;
      vertical-align: middle;
    }

    .status-table tr:last-child td {
      border-bottom: none;
    }

    .status-table tr:nth-child(even) td {
      background: #F8FAFC;
    }

    .status-pill {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      padding: 4px 10px;
      border-radius: 999px;
      font-size: 11.5px;
      font-weight: 700;
      white-space: nowrap;
    }

    .status-pill.done {
      background: #DCFCE7;
      color: #15803D;
      border: 1px solid #86EFAC;
    }

    .status-pill.active {
      background: #E0F2FE;
      color: #0369A1;
      border: 1px solid #7DD3FC;
    }

    /* Callout Note */
    .callout-box {
      background: #F8FAFC;
      border: 1px solid #CBD5E1;
      border-left: 4px solid var(--accent);
      padding: 18px 22px;
      border-radius: 8px;
      margin-bottom: 36px;
    }

    .callout-box h4 {
      font-size: 14.5px;
      font-weight: 700;
      color: var(--primary);
      margin-bottom: 6px;
    }

    .callout-box p {
      font-size: 13.5px;
      color: var(--text-muted);
      line-height: 1.55;
    }

    /* Next steps */
    .next-steps-list {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-bottom: 24px;
    }

    .next-steps-list li {
      display: flex;
      gap: 12px;
      align-items: flex-start;
      font-size: 13.5px;
      color: var(--text-muted);
      line-height: 1.5;
    }

    .step-num {
      width: 22px;
      height: 22px;
      border-radius: 50%;
      background: var(--accent-soft);
      color: var(--accent);
      font-size: 12px;
      font-weight: 700;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      margin-top: 1px;
    }

    .next-report-banner {
      background: linear-gradient(135deg, #F0F9FF 0%, #E0F2FE 100%);
      border: 1px solid #BAE6FD;
      padding: 16px 20px;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
    }

    .next-report-text {
      font-size: 13.5px;
      color: #0369A1;
      font-weight: 600;
    }

    .next-report-date {
      background: #0284C7;
      color: #FFFFFF;
      padding: 6px 14px;
      border-radius: 6px;
      font-size: 12.5px;
      font-weight: 700;
      white-space: nowrap;
    }

    /* Report footer */
    .report-footer {
      background: #F8FAFC;
      border-top: 1px solid var(--border);
      padding: 24px 48px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 12px;
      color: var(--text-light);
    }

    /* PRINT STYLES */
    @media print {
      body {
        background: #FFFFFF !important;
        padding-bottom: 0 !important;
        font-size: 11.5pt !important;
      }

      .top-action-bar {
        display: none !important;
      }

      .report-container {
        max-width: 100% !important;
        margin: 0 !important;
        border: none !important;
        box-shadow: none !important;
        border-radius: 0 !important;
      }

      .report-header {
        padding: 24pt 28pt !important;
        -webkit-print-color-adjust: exact !important;
        print-color-adjust: exact !important;
      }

      .report-body {
        padding: 24pt 28pt !important;
      }

      .bento-card,
      .workstream-card,
      .table-wrapper,
      .callout-box,
      .next-report-banner {
        -webkit-print-color-adjust: exact !important;
        print-color-adjust: exact !important;
        page-break-inside: avoid !important;
      }

      .section-title {
        page-break-after: avoid !important;
      }

      @page {
        size: letter;
        margin: 12mm 14mm;
      }
    }
  </style>
</head>
<body>

  <!-- Top Action Bar for screen viewing -->
  <div class="top-action-bar">
    <div class="brand-info">
      <span>Client: <strong>CleanWorx Auto Detailing</strong></span>
      <span>•</span>
      <span>Update: <strong>First Month (September – October 2026)</strong></span>
    </div>
    <button class="btn-print" onclick="window.print()">
      <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"></path>
      </svg>
      Print / Save as PDF
    </button>
  </div>

  <div class="report-container">

    <!-- Header Banner -->
    <header class="report-header">
      <div class="header-top">
        <div>
          <span class="tag-badge">Executive Progress Report</span>
          <h1 class="report-title">CleanWorx Auto Detailing & Ceramic Coating</h1>
          <p class="report-subtitle">Foundations setup, new website build, 143-URL technical migration, and commercial analytics tracking.</p>
        </div>
        ${logoBase64 ? `
        <div class="logo-box">
          <img src="${logoBase64}" alt="CleanWorx Logo" class="logo-img">
        </div>
        ` : ''}
      </div>

      <div class="meta-grid">
        <div class="meta-item">
          <span class="meta-label">Client & Business</span>
          <span class="meta-value">CleanWorx LLC</span>
        </div>
        <div class="meta-item">
          <span class="meta-label">Studio Location</span>
          <span class="meta-value">Basking Ridge, NJ</span>
        </div>
        <div class="meta-item">
          <span class="meta-label">Reporting Period</span>
          <span class="meta-value">Sep 17 – Oct 17, 2026</span>
        </div>
        <div class="meta-item">
          <span class="meta-label">Project Scope</span>
          <span class="meta-value">Web Development & Local SEO</span>
        </div>
      </div>
    </header>

    <!-- Main Content Body -->
    <main class="report-body">

      <!-- Executive Intro -->
      <section>
        <p class="intro-paragraph">
          This first month focused on building a solid digital foundation for <strong>CleanWorx</strong>. We redesigned and built a modern website from the ground up, completed a full <strong>143-URL</strong> technical migration to protect historical search rankings, updated the Google Business Profile, and put the tracking infrastructure in place to reliably measure commercial performance moving forward.
        </p>
      </section>

      <!-- Bento Grid: 4 Core Highlights -->
      <section>
        <h2 class="section-title">
          <svg class="section-title-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
          </svg>
          What we put in place during this cycle
        </h2>

        <div class="bento-grid">
          <div class="bento-card gold">
            <div class="bento-header">
              <div class="bento-icon">
                <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 class="bento-title">Modern Web Platform</h3>
            </div>
            <p class="bento-desc">Built a fast Next.js website with responsive mobile layouts and dedicated pages for every detailing service and package.</p>
          </div>

          <div class="bento-card blue">
            <div class="bento-header">
              <div class="bento-icon">
                <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
                </svg>
              </div>
              <h3 class="bento-title">Clean 143-URL Migration</h3>
            </div>
            <p class="bento-desc">Mapped 143 legacy URLs directly to relevant destination pages using permanent 301 redirects, preserving search equity and eliminating 404 errors.</p>
          </div>

          <div class="bento-card green">
            <div class="bento-header">
              <div class="bento-icon">
                <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <h3 class="bento-title">Local Presence & Google Maps</h3>
            </div>
            <p class="bento-desc">Updated the Google Business Profile with accurate detailing categories, synchronized services, verified contact data, and an embedded studio map.</p>
          </div>

          <div class="bento-card grey">
            <div class="bento-header">
              <div class="bento-icon">
                <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              </div>
              <h3 class="bento-title">Commercial Tracking Setup</h3>
            </div>
            <p class="bento-desc">Connected GA4 with Google Business Profile, configured UTM tracking tags, and instrumented core customer actions: phone calls, Square booking clicks, and directions.</p>
          </div>
        </div>
      </section>

      <!-- Work Completed Breakdown by Strategic Workstream -->
      <section>
        <h2 class="section-title">
          <svg class="section-title-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path>
          </svg>
          Detailed breakdown of work completed
        </h2>

        <div class="workstream-list">

          <!-- Workstream 1 -->
          <article class="workstream-card">
            <div class="workstream-header">
              <span class="workstream-badge migracion">Migration & Authority Preservation</span>
              <span class="workstream-date">Phases 1 through 5</span>
            </div>
            <div class="workstream-body">
              <h3 class="workstream-h3">143 Legacy URLs Audited and Mapped with 301 Redirects</h3>
              <p class="workstream-summary">Audited all 143 legacy URLs from previous XML sitemaps and Search Console, structuring a direct 1:1 server-level redirect map to preserve historical search authority and prevent ranking loss.</p>
              <ul class="deliverables-list">
                <li>Locked in the pre-migration baseline and archived historical queries driving search impressions.</li>
                <li>Documented all 143 legacy paths in a redirect ledger mapping each old address directly to its new destination.</li>
                <li>Consolidated duplicate city pages and thin service pages into main service hubs.</li>
                <li>Configured and verified 143 direct server-level 301 rules without redirect hops or intermediate chains.</li>
                <li>Ran static export and pre-launch quality audits to verify zero broken links and zero 404 errors.</li>
              </ul>
            </div>
          </article>

          <!-- Workstream 2 -->
          <article class="workstream-card">
            <div class="workstream-header">
              <span class="workstream-badge web">Web Development & User Experience</span>
              <span class="workstream-date">Core Platform Build</span>
            </div>
            <div class="workstream-body">
              <h3 class="workstream-h3">Next.js Website Build & Deployment</h3>
              <p class="workstream-summary">Built a custom website using Next.js and React with clean layouts, quick load speeds, and straightforward mobile booking.</p>
              <ul class="deliverables-list">
                <li>Rebuilt the homepage with complete auto detailing packages, clear starting prices, and customer reviews.</li>
                <li>Dedicated Ceramic Coating service page with System X certification details, 1, 3, and 6-year package options, and maintenance instructions.</li>
                <li>Paint Correction service page explaining multi-stage defect removal with an assessment-led quoting process.</li>
                <li>Window Tinting page with Carbon (2-year warranty) and Ceramic (10-year warranty) film options, plus an interactive tint-shade visualizer.</li>
                <li>Dedicated service pages for Interior Detailing, Exterior Detailing, Studio Car Odor Treatment, and Headlight Restoration.</li>
                <li>Mobile Detailing page detailing service requirements, covered areas, and mobile travel fee rules ($50 under $400).</li>
                <li>Essential brand pages: About Us, Work Gallery, FAQs, Add-ons, and Contact with an embedded map.</li>
              </ul>
            </div>
          </article>

          <!-- Workstream 3 -->
          <article class="workstream-card">
            <div class="workstream-header">
              <span class="workstream-badge local">Local SEO Expansion</span>
              <span class="workstream-date">Geographic Landing Pages</span>
            </div>
            <div class="workstream-body">
              <h3 class="workstream-h3">5 Specialized Local Service Area Pages</h3>
              <p class="workstream-summary">Built 5 indexable local landing pages to capture search traffic in towns near Basking Ridge, with custom copy and service packages for each location.</p>
              <ul class="deliverables-list">
                <li>Woodbridge, NJ: Tailored for full detailing, engine bay cleaning, and smoke/pet odor treatments.</li>
                <li>Edison, NJ: Focus on interior and exterior detailing, headlight restoration, and ceramic coatings.</li>
                <li>Westfield, NJ: Focused on premium detailing packages, paint correction, and long-term protection.</li>
                <li>Cranford, NJ: Emphasizing complete detailing, engine compartment care, and headlight clarity.</li>
                <li>Bridgewater, NJ: Proximity hub for full detailing, window tinting, and ceramic protection.</li>
                <li>Configured individual canonical tags and contextual internal links leading to core studio services.</li>
              </ul>
            </div>
          </article>

          <!-- Workstream 4 -->
          <article class="workstream-card">
            <div class="workstream-header">
              <span class="workstream-badge onpage">On-Page Optimization & Conversion</span>
              <span class="workstream-date">Content & Media</span>
            </div>
            <div class="workstream-body">
              <h3 class="workstream-h3">Content Optimization, Semantic Hierarchy, and Booking CTAs</h3>
              <p class="workstream-summary">Optimized on-page text and tags for local search queries while making it easier for visitors to book appointments online.</p>
              <ul class="deliverables-list">
                <li>Authored unique, click-oriented title tags and meta descriptions tailored to local search intent across all published pages.</li>
                <li>Enforced a strict semantic heading hierarchy (H1, H2, H3) site-wide without skipped heading levels.</li>
                <li>Optimized and compressed project images into modern WebP format with descriptive local SEO ALT attributes.</li>
                <li>Embedded direct calls-to-action synchronized with CleanWorx's live Square appointment booking portal.</li>
                <li>Configured the general services index (/services) as an internal directory with noindex, follow to concentrate authority on core service pages.</li>
              </ul>
            </div>
          </article>

          <!-- Workstream 5 -->
          <article class="workstream-card">
            <div class="workstream-header">
              <span class="workstream-badge tecnico">Technical SEO & Crawlability</span>
              <span class="workstream-date">Indexation & Structured Data</span>
            </div>
            <div class="workstream-body">
              <h3 class="workstream-h3">Technical Infrastructure, Dynamic Sitemap, and Schema Markup</h3>
              <p class="workstream-summary">Set up technical controls so search engines can crawl and index CleanWorx without errors.</p>
              <ul class="deliverables-list">
                <li>Generated and verified an updated dynamic XML sitemap in Google Search Console.</li>
                <li>Configured and validated robots.txt directives for clean search engine access.</li>
                <li>Implemented rich Schema.org JSON-LD structured data for LocalBusiness, AutomotiveBusiness, Service, and FAQPage.</li>
                <li>Post-implementation QA: Verified HTTP 200 responses, canonical tags, internal links, and page speed benchmarks.</li>
                <li>Integrated the official Google Maps embed on the Contact page.</li>
              </ul>
            </div>
          </article>

          <!-- Workstream 6 -->
          <article class="workstream-card">
            <div class="workstream-header">
              <span class="workstream-badge local">Local Presence & Profile</span>
              <span class="workstream-date">Google Business Profile</span>
            </div>
            <div class="workstream-body">
              <h3 class="workstream-h3">Google Business Profile (GBP) Optimization</h3>
              <p class="workstream-summary">Audited and optimized CleanWorx's Google listing to strengthen visibility on Google Maps and the local map pack.</p>
              <ul class="deliverables-list">
                <li>Unified NAP consistency (Business Name, Physical Address, Phone number) with website data.</li>
                <li>Set primary and secondary business categories aligned with detailing and window tinting services.</li>
                <li>Synchronized the services catalog with approved packages and verified pricing.</li>
                <li>Established an operational routine for regular project updates and structured review replies.</li>
              </ul>
            </div>
          </article>

          <!-- Workstream 7 -->
          <article class="workstream-card">
            <div class="workstream-header">
              <span class="workstream-badge analitica">Analytics & Attribution</span>
              <span class="workstream-date">Commercial Measurement</span>
            </div>
            <div class="workstream-body">
              <h3 class="workstream-h3">Analytics Connection & Conversion Tracking</h3>
              <p class="workstream-summary">Established commercial tracking infrastructure so future reports can accurately measure phone inquiries, appointment clicks, and studio visits.</p>
              <ul class="deliverables-list">
                <li>Directly linked Google Analytics 4 (GA4) with Google Business Profile.</li>
                <li>Configured UTM tracking parameters to distinguish Google Maps traffic from standard organic search visits.</li>
                <li>Instrumented primary conversion events: phone calls initiated, Square booking link clicks, and directions requests.</li>
                <li>Set up continuous indexation and performance monitoring via Google Search Console.</li>
              </ul>
            </div>
          </article>

        </div>
      </section>

      <!-- Foundation Status Matrix Table -->
      <section>
        <h2 class="section-title">
          <svg class="section-title-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
          </svg>
          Core foundations status matrix
        </h2>

        <div class="table-wrapper">
          <table class="status-table">
            <thead>
              <tr>
                <th style="width: 32%;">Strategic Component</th>
                <th style="width: 22%;">Current Status</th>
                <th style="width: 46%;">Operational Impact for CleanWorx</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Next.js Web Platform</strong></td>
                <td><span class="status-pill done">● Implemented</span></td>
                <td>Fast page load speeds, clean mobile experience, and smooth conversion flow to appointments.</td>
              </tr>
              <tr>
                <td><strong>143-URL 301 Migration</strong></td>
                <td><span class="status-pill done">● Active on Server</span></td>
                <td>Retains 100% of historical search equity and prevents broken links or 404 errors.</td>
              </tr>
              <tr>
                <td><strong>Dedicated Service Pages</strong></td>
                <td><span class="status-pill done">● Published</span></td>
                <td>Provides clear answers for high-intent searches (Ceramic Coating, Tinting, Paint Correction, Detailing).</td>
              </tr>
              <tr>
                <td><strong>Geographic Service Area Pages</strong></td>
                <td><span class="status-pill done">● 5 Cities Live</span></td>
                <td>Delivers local search relevance in Woodbridge, Edison, Westfield, Cranford, and Bridgewater.</td>
              </tr>
              <tr>
                <td><strong>Structured Data (Schema JSON-LD)</strong></td>
                <td><span class="status-pill done">● Validated</span></td>
                <td>Helps search engines parse services, hours, studio location, and FAQs for rich results.</td>
              </tr>
              <tr>
                <td><strong>Google Business Profile</strong></td>
                <td><span class="status-pill done">● Optimized</span></td>
                <td>Improves local pack visibility on Google Maps and aligns with real studio offerings.</td>
              </tr>
              <tr>
                <td><strong>Commercial Analytics & Tracking</strong></td>
                <td><span class="status-pill active">● Instrumented</span></td>
                <td>Captures phone calls, Square booking clicks, and customer engagement for future performance reporting.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- Explanatory Note: Why Foundation First -->
      <section>
        <div class="callout-box">
          <h4>Why does this first report focus on structural foundations?</h4>
          <p>
            When launching a new website and executing a <strong>143-URL migration</strong>, search engines take several weeks to crawl, process redirects, and reindex updated pages. This initial period was dedicated to repairing legacy issues, building a modern platform, and setting up clean tracking so upcoming reports measure actual customer actions and inquiries.
          </p>
        </div>
      </section>

      <!-- What Happens Next / Roadmap -->
      <section>
        <h2 class="section-title">
          <svg class="section-title-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
          </svg>
          Next steps (Upcoming cycle roadmap)
        </h2>

        <ul class="next-steps-list">
          <li>
            <span class="step-num">1</span>
            <div><strong>Crawl and redirect monitoring:</strong> Continuously monitor Google Search Console to verify Googlebot processes all 143 redirects smoothly and indexes new service pages.</div>
          </li>
          <li>
            <span class="step-num">2</span>
            <div><strong>Google review collection process:</strong> Reach out to recent clients after their appointments to collect 5-star Google reviews and build local trust.</div>
          </li>
          <li>
            <span class="step-num">3</span>
            <div><strong>Consistent Google Business Profile posts:</strong> Publish photos of completed detailing projects, ceramic coatings, and seasonal studio announcements.</div>
          </li>
          <li>
            <span class="step-num">4</span>
            <div><strong>First comparative commercial report:</strong> Analyze initial user interactions recorded in GA4 (calls initiated, Square booking visits, and quote requests).</div>
          </li>
        </ul>

        <div class="next-report-banner">
          <span class="next-report-text">Next report scheduled: First comparative visibility and customer engagement results.</span>
          <span class="next-report-date">Mid-November, 2026</span>
        </div>
      </section>

    </main>

    <!-- Footer -->
    <footer class="report-footer">
      <span>CleanWorx Auto Detailing & Ceramic Coating • 19 E. Henry Street, Basking Ridge, NJ</span>
      <span>Confidential • Prepared Exclusively for Client</span>
    </footer>

  </div>

</body>
</html>
`;

fs.writeFileSync(outputPathEs, htmlContent, 'utf8');
fs.writeFileSync(outputPathEn, htmlContent, 'utf8');
console.log('Cleaned and de-slopped report written successfully to both paths.');
