# Handoff — WebPortfolioJACM (Jorge Armando Contreras Mercado)

**Last update:** 2026-08-11
**Owner:** Jorge Armando Contreras Mercado (jorarconmer@gmail.com · @JACM8544)
**Public portfolio:** https://jacm8544.github.io/WebPortfolioJACM/
**GitHub repo:** https://github.com/JACM8544/WebPortfolioJACM

This file exists so that any agent (or Jorge himself) can pick up work in a fresh
session without losing context. Everything below is the current state of the project,
the operating rhythms we've established, and the conventions to keep using.

---

## 1. What this repo is

Two coordinated deliverables:

1. **Public portfolio** — `index.html`, `styles.css`, `assets/` — deployed to GitHub Pages.
2. **CV variants** — one CV per job application, tailored to the role's language and stack.
   These live in `cv-variants/` which is **gitignored** (local-only).

There is also a single **public CV** (`cv.html`) linked from the portfolio's "Download CV"
button; it's the general/default version.

---

## 2. Owner profile (single source of truth)

Facts to keep consistent across every CV, cover letter, and portfolio update:

- **Name:** Jorge Armando Contreras Mercado
- **Location:** Atizapán de Zaragoza, Estado de México, Mexico (Mexico City Metropolitan Area)
- **Nationality:** Mexican
- **Languages:** Spanish (native) · English (B2+, professional working proficiency)
- **Education:**
  - B.Sc. Computer Systems Engineering — IPN ESCOM, 2017–2022
  - Technical Degree in Industrial Processes — IPN, 2014–2017 (metrology, CNC, machine tools, batch manufacturing)
- **GCP training (self-directed):** 2024–2025 — BigQuery, Dataform, Cloud Run, Cloud Storage, Cloud Monitoring
- **Professional experience:** 3+ years total (~2.5 in dedicated Data Engineering)

### Roles (reverse chronological, as shown on CVs)

| # | Company | Role | Dates | Industry |
|---|---|---|---|---|
| 1 | Laboratorios Silanes | Data Engineer | Apr 2025 – Present | Pharmaceutical manufacturer |
| 2 | Freelance (large pharma distributor client) | Data Engineer, sole-owner on Azure | Late 2024 – Early 2026 (~15 mo., parallel) | Pharmaceutical distribution |
| 3 | Algorithia | Data Scientist — Credit & Collections (Banco Azteca) | Jun 2024 – Sep 2024 | Financial |
| 4 | Netlogistik | Software Engineer — WMS (Blue Yonder) & Integrations | Apr 2023 – Apr 2024 | Enterprise consulting |

**Netlogistik clients:** Soriana, Farmacias Guadalajara (pharma retail), DHL, Volkswagen

### Technical stack (verified — all safe to mention)

- **Languages:** Python (production, OOP, Git), SQL (advanced), R (~2 years — Silanes: dataset transformations + CSV/Excel exports feeding **Veeva Vault** suggestion generation), Java, C, C++, Bash, VHDL, Assembly (Microchip PIC)
- **Cloud — GCP:** BigQuery, Dataform, Cloud Run, Cloud Storage, Cloud Monitoring, Cloud Billing
- **Cloud — Azure:** Functions, Azure SQL, Blob Storage, Monitor, Cost Management
- **Cloud — AWS:** Lambda, S3, CloudWatch, Cost Explorer / Budgets, IAM
- **Orchestration & ETL/ELT:** Airflow (production), Dataform (dbt-equivalent on BigQuery), Python ingestion, Docker containers on Cloud Run
- **Warehousing/Modeling:** BigQuery, Azure SQL, SQL Server; star schema and dimensional modeling from scratch; bronze/silver/gold layering
- **Big Data:** Apache Spark, Hadoop (job development at Algorithia on shared cluster)
- **Regulated pharma systems:** Veeva Vault, WHIZ AI (AI-driven analytics pipelines feed both)
- **Integrations:** SharePoint, BOX API, Salesforce, SAP, WMS Blue Yonder
- **BI:** Power BI, Power Apps, Power Automate
- **Governance:** DAMA-aligned practices, ISO 8000 (data quality), data catalogs
- **FinOps:** Multi-cloud billing guardrails, quotas, budget alerts
- **DevOps:** Git / GitHub (branching, code review); monitoring & alerting; Docker

### Verified gaps (do NOT claim these)

- **CI/CD formal pipeline ownership** — has Git and exposure, not formal DevSecOps pipelines
- **Databricks, Snowflake, Redshift** — has BigQuery + Dataform (conceptually transferable; can be framed that way)
- **Kafka, streaming, Dataflow / Apache Beam, CDC** — no
- **NoSQL** (MongoDB, DynamoDB, etc.) — no
- **Oracle PL/SQL** — no (has SQL Server / Azure SQL)
- **SAS** — no
- **Terraform / IaC** — no
- **Kubernetes** — no
- **APIs built with FastAPI/Flask/Django** — declared "yes" in one Darwin AI application; plan is to build a small FastAPI + BigQuery demo project this weekend to make the claim honest

### Conventions to remember

- **All CVs in English** (owner directive — no exceptions, even for Spanish-language job postings)
- **All CVs in Harvard 2-page format** — see `cv-variants/cv-iqvia.html` as reference. Serif (Georgia), 10pt, `break-inside: avoid` on `.cv-entry`, letter size, 0.5in vertical / 0.6in horizontal margins
- **Multi-cloud (AWS + Azure + GCP)** as summary anchor for every future CV
- **Never declare gaps in the CV itself** unless absolutely necessary. Reframe as "concepts transferable to X" — reads as flexibility, not weakness
- **Freelance dates:** always **"Late 2024 – Early 2026 (~15 mo.)"** — earlier drafts said 2023–2024 / 18 months; both are wrong
- **Featured Project (portfolio):** framed as showcase of the Freelance engagement, not as personal exploration (that framing caused conflict-of-interest issues with current employer)
- **NEVER use "descontas" or any loss-framing language** in salary discussions — see `~/.claude/projects/-workspaces-WebPortfolioJACM/memory/feedback-salary-framing.md`

---

## 3. Repository layout

```
/workspaces/WebPortfolioJACM/
├── index.html                        # public portfolio (GitHub Pages)
├── styles.css
├── cv.html                           # default CV (linked from portfolio)
├── README.md
├── HANDOFF.md                        # this file
├── handoff-portafolio-completo.md    # earlier handoff from owner
├── assets/
│   ├── img/                          # profile photo, favicon, QR codes
│   ├── logos/                        # company logos (Silanes, Algorithia, Netlogistik)
│   └── alzheimer/                    # MRI samples + clinical.json for the demo
├── cv-variants/                      # GITIGNORED — one CV per job (HTML + PDF)
│   ├── cv-<company>.html             # Harvard 2-page HTML template
│   ├── Jorge_Contreras_CV_<Name>.pdf # generated PDF
│   ├── cover-<company>.html          # cover letter HTML (when requested)
│   └── Jorge_Contreras_Cover_Letter_<Name>.pdf
├── Proyecto Alzheimer/               # GITIGNORED — raw academic dataset
├── CV MAYO 2026 — Jorge...pdf        # UNTRACKED — original owner CV PDF
└── .gitignore                        # excludes: Proyecto Alzheimer/, cv-variants/
```

---

## 4. CV variants inventory (as of last save)

All in `cv-variants/`, all English + Harvard 2-page + break-inside fix applied.

| Company / Role | HTML | PDF |
|---|---|---|
| Base / Default (public) | (top-level) `cv.html` | — |
| IQVIA (DaaS Configurator) | `cv-iqvia.html` | `Jorge_Contreras_CV_IQVIA.pdf` |
| Google YouTube Marketing DE | `cv-google-yt.html` | `Jorge_Contreras_CV_Google_YouTube.pdf` |
| Financial & Insurance sector | `cv-financial.html` | `Jorge_Contreras_CV_Financial_Insurance.pdf` |
| NEAR.HUB (Senior DE) | `cv-near-hub.html` | `Jorge_Contreras_CV_NEAR_HUB.pdf` |
| Clinical Data Engineer (Precision Medicine Group style) | `cv-clinical-data.html` | `Jorge_Contreras_CV_Clinical_Data_Engineer.pdf` |
| Grupo Modelo (Sr DE) | `cv-grupo-modelo.html` | `Jorge_Contreras_CV_Grupo_Modelo.pdf` |
| R Systems (Data Engineer) | `cv-rsystems.html` | `Jorge_Contreras_CV_R_Systems.pdf` |
| Darwin AI (Semi-Senior Analytics Engineer) | `cv-darwin-ai.html` | `Jorge_Contreras_CV_Darwin_AI.pdf` |
| HealthTech Freelance (GCP) | `cv-healthtech-freelance.html` | `Jorge_Contreras_CV_HealthTech_Freelance.pdf` |
| NielsenIQ (Data Engineer) | `cv-niq.html` | `Jorge_Contreras_CV_NielsenIQ.pdf` |
| NielsenIQ cover letter | `cover-niq.html` | `Jorge_Contreras_Cover_Letter_NielsenIQ.pdf` |
| Nexu (Data Engineer) | `cv-nexu.html` | `Jorge_Contreras_CV_Nexu.pdf` |
| Xintec Chile (DE, GCP/BigQuery/Python) | `cv-xintec.html` | `Jorge_Contreras_CV_Xintec.pdf` |
| Oliver Wyman / Marsh (Data Engineer, Databricks stack) | `cv-oliver-wyman.html` | `Jorge_Contreras_CV_Oliver_Wyman.pdf` |
| Takeda ICC (Data Engineer, pharma manufacturing) | `cv-takeda.html` | `Jorge_Contreras_CV_Takeda.pdf` |
| Sngular DBT (Data Engineer, sector financiero) | `cv-sngular.html` | `Jorge_Contreras_CV_Sngular_DBT.pdf` |
| Legacy / early format (not Harvard, 3-page) — do NOT reuse without rewriting | `cv-analytics.html`, `cv-automation.html`, `cv-cloud.html` | — |

---

## 5. Portfolio (public site) — recent state

- Dark black + gold palette
- Bilingual toggle (EN/ES) — 152 i18n keys, 154 defined in both languages
- Sections: Hero (with animated counters), Highlights (carousel), Experience (timeline), Featured Project, Demos (Alzheimer MRI + Live Data), Skills, Education, Certifications
- Hero stats: 7 Programming Languages · 3+ Cloud Platforms · 4+ Industries · 5+ Automation Platforms
- Demos container: Alzheimer MRI project + Live Data (USGS earthquakes + USD/MXN)
- CV button in hero → `cv.html`
- Mobile: hamburger nav, responsive breakpoints
- Font-face: system stack (no custom fonts)

**Deployment:** GitHub Pages from `main` branch. Push to main → GitHub Pages redeploys in ~1-2 min.

---

## 6. PDF generation workflow

We use **WeasyPrint** (installed via `pip install weasyprint pypdf`).

```python
from weasyprint import HTML
from pypdf import PdfReader
import os

src = '/workspaces/WebPortfolioJACM/cv-variants/cv-<company>.html'
dst = '/workspaces/WebPortfolioJACM/cv-variants/Jorge_Contreras_CV_<Name>.pdf'
HTML(filename=src).write_pdf(dst)
pages = len(PdfReader(dst).pages)
print(f'OK -> {os.path.getsize(dst)} bytes, {pages} pages')
```

If a CV overflows to 3 pages, standard fixes (in order of aggression):
1. Consolidate 2 related Silanes bullets into 1
2. Compact the Skills section (merge related lines: Cloud AWS/Azure/GCP into one line, containers+big data into one, etc.)
3. Remove standalone paragraph sections that duplicate info already in the Experience bullets
4. Trim the Summary to 5 lines max

---

## 7. Established rhythms with the owner

- **When a new job posting arrives:** Owner pastes the JD. Agent responds with (1) honest match/gap analysis in 3-6 lines, then (2) creates a tailored CV in Harvard 2-page format, then (3) generates the PDF and previews it.
- **Salary asks:** Owner tends to prefer conservative anchors based on real Mexican market reads. Give a specific number + rationale + backup range. Do NOT push back on their number once they've decided.
- **Cover letters:** 3-4 paragraphs, business-letter format, matches the CV visual style. Fits on 1 page.
- **Portfolio updates:** owner has full ownership. Don't push changes to `main` without explicit confirmation for anything user-facing (portfolio site). CVs in `cv-variants/` are local-only, so no push concern there.
- **Missing info:** If a JD asks for something the owner has done but hasn't mentioned yet (like Docker, R, Veeva Vault), ask before assuming. Owner has surprised us multiple times with skills we didn't know about.

---

## 8. How to clone this repo locally (from Jorge's Windows machine)

```powershell
# In PowerShell / CMD on Windows
cd "C:\Users\Technologic PC\Desktop\CVs\"
git clone https://github.com/JACM8544/WebPortfolioJACM
cd WebPortfolioJACM
```

That gets you the portfolio + `cv.html` + `HANDOFF.md` + everything in git.

**To also get `cv-variants/` (local-only, gitignored):**

Option A — from VS Code with the Codespace open:
- Right-click on `cv-variants/` in the file explorer → **Download...**
- Extract to your local repo folder

Option B — from the Codespace terminal, generate a tar.gz:
```bash
cd /workspaces/WebPortfolioJACM
tar czf cv-variants.tar.gz cv-variants/
```
Then download `cv-variants.tar.gz` from VS Code file explorer and extract locally.

---

## 9. Pending / open threads

- **API demo project (FastAPI + BigQuery):** owner said "yes" to "have you built an API?" in the Darwin AI application. Plan is to build a small FastAPI service exposing BigQuery data this weekend to make the claim honest and give something to reference in interviews.
- **Portfolio metrics (Priority 7 from the earlier handoff):** still no concrete numbers in portfolio (# pipelines, # licitaciones, hours saved, etc.). Owner has been asked but not yet provided.
- **cv-analytics.html / cv-automation.html / cv-cloud.html:** three variants created in the OLD format (3-page sans-serif). Not updated to Harvard 2-page. Do NOT hand these to anyone without rewriting to current standard.
- **Base cv.html:** still in the older sans-serif format. Kept intentionally for the public portfolio download; could be updated to Harvard if the owner requests.

---

## 10. Reference: the earlier handoff

See `handoff-portafolio-completo.md` at repo root. It was the original guidance from owner
about portfolio positioning (Freelance as professional, GCP != GCS, monitoring, FinOps,
Algorithia Spark, GCP training to cover the 2024-2025 gap, ISO 8000, metrics). Most of it
was applied. Remaining item: metrics (owner hasn't provided numbers yet).

---

*End of handoff. Keep this file current when you make structural changes.*
