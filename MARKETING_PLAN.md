# Automated Marketing Plan — Study At Innovative

## Context

**Problem**: The site is a decent Vue 3 landing page but has critical trust issues (no MQA number, suspicious pricing, no address, no social proof) and zero marketing automation (analytics placeholders not configured, WhatsApp is just wa.me links, no ad pixels active). No data is being collected — we're flying blind.

**Goal**: Fix trust issues → set up tracking → build automated WhatsApp pipeline → run paid ads (Facebook/WhatsApp Status/TikTok) → scale what works.

**Target**: Malaysian working adults 22-45, seeking affordable accredited ODL diploma. Primary channel: WhatsApp.

**Funnel**: Paid Ads (FB/WhatsApp Status/TikTok) → Website → WhatsApp → Close. No social media maintenance.

### Key Decisions (Resolved)
| Decision | Answer |
|----------|--------|
| Pricing story | Ongoing promo (no real deadline) — frame as "Harga Promosi" with limited spots language |
| WhatsApp number | +60135961559 is Marwan's personal/sales line (keep as primary CTA) |
| Office contacts | +603-2726 2436, info@innovative.edu.my (add to footer for credibility) |
| Marwan's role | Staff / marketing team — full authority to represent Innovative UC |
| Existing accounts | Meta Business Suite only. Need to create GA4 + TikTok Ads |
| Live URL | studyatinnovative.com (production, deployed) |
| Language | Bilingual BM + EN with full language toggle (vue-i18n) |
| Payment | KWSP withdrawal, full upfront RM5,000, or installments RM500/month — channel to WhatsApp for details |
| Promo deadline | Ongoing / no real deadline — use "limited spots" framing, not fake countdown |
| Social media | No content posting/maintenance — ads only |

---

## Official Data (from innovative.edu.my)

Reference data crawled from the official website — use throughout the site:

| Field | Value |
|-------|-------|
| **Official name** | Innovative University College |
| **Registration code** | DKU054(B) |
| **DBA ODL MQA number** | KPT/JPS (R3/345/4/0866) (A5791) (5/26) |
| **Address** | Unit GL35, Main Lobby, Block C, Kelana Square, Jalan SS7/26, 47301 Petaling Jaya, Selangor Darul Ehsan, Malaysia |
| **Phone** | +603-2726 2436 (Hunting Line) |
| **Fax** | +603-2726 2437 |
| **Email** | info@innovative.edu.my |
| **Office hours** | Mon-Fri 9:00 AM – 6:00 PM |
| **Vice Chancellor** | Professor Dr. Azri Bin Usman (3rd VC) |
| **Official website** | https://innovative.edu.my |
| **Student portal** | innovative.vialing.com/sp/login |
| **Help desk** | innovativesp.freshdesk.com/support/home |
| **Social media** | FB/IG: @innovative.my, Twitter: @innovative_my, TikTok: @innovative_my, LinkedIn: innovativemy, YouTube: Innovative International College |

**Key Stats (from homepage)**:
- **2,814 active students** (use this on landing page!)
- 11th Convocation held
- Podcast: "JOM SINGGAH PODCAST" — includes "Study While You Work" episode (embed/link for social proof)

**Partner logos (for trust strip — all from official site)**:
- Richworks
- SEG
- YEG (Your Education Guidance)
- ISM Shah Alam
- YPR (Yayasan Pendidikan Rakyat)
- Universiti Utara Malaysia (UUM)
- McDonald's Malaysia (WBL partnership)
- Hong Leong Bank
- SmartAge Group
- Universiti Malaysia Kelantan
- 2M World Sdn. Bhd.

**5 Faculties**: Business/Economics/Finance, Islamic Studies & Management, Hajj & Umrah Management, Liberal Arts/Humanities/Culture, Technology & Applied Sciences

**Centres of Excellence**: Centre of Excellence for Esport and Digital Culture, Baitussaadah Institute of Islamic Studies

**Scholarships (from official site)**:
- **Innovative Dihatiku** — for B40 diploma applicants
- **Yayasan Pendidikan Rakyat** — for B40 diploma applicants
- Must maintain 2.00 CGPA to keep scholarship
- International: 100% tuition fee scholarship for 45+ countries

**DBA ODL Program Details**:
- Duration: 2.5 years (6 semesters)
- Credits: 90
- MQA: KPT/JPS (R3/345/4/0866)(5/26)(A5791)
- Mode: ODL — synchronous & asynchronous meetings, online discussion threads, self-learning
- Entry: SPM with 3 credits OR Community College Certificate + SPM with 1 credit
- Bridging programs available for skills-to-academic transition
- Programme Handbook & Brochure PDFs available on official site
- Apply 1 month before intake for smooth registration

**Full Curriculum (from official site)**:
- **Year 1** (14 subjects): English Proficiency, English for Communication, Intro to Business, Intro to IT, Computer Applications, Business Mathematics, Principles of Management, Microeconomics, Legal Framework, Principles of Marketing, Financial Accounting 1, Bahasa Kebangsaan A/B, Malaysian Studies, Moral/Islamic Studies
- **Year 2** (13 subjects): Organizational Behavior, Business Statistics, Macroeconomics, HR Management, Operations Management, Business Law, Financial Accounting 2, E-Commerce, Management Information System, Financial Management, Management Accounting, Business Marketing, Business Communication
- **Year 3** (5 subjects): Consumer Behavior, International Business, Business Strategy, Entrepreneurship, Project Paper

**Career outcomes**: Administration Officer, Payroll Officer, Customer Service Officer, Manager Trainee, HR Manager, Marketing Manager, International Business & Trade Manager, Entrepreneur, Business Leader

---

## Phase 1: Fix Trust & Credibility — DONE ✅

All trust fixes implemented:
- MQA number (KPT/JPS) displayed on badge + features + FAQ + footer
- DKU054(B) registration code in footer
- Pricing framed as "Harga Promosi — Tempat Terhad" with RM500/month installment
- 3 payment options section (installments, KWSP, full)
- 2,814 students / 11 convocations / 5 faculties trust stats bar
- 5 verified partner logos (YEG, Richworks, SEG, ISM Shah Alam, YPR) — downloaded locally
- 3 placeholder testimonials (bilingual)
- Full address, office phone, email, business hours in footer
- VC name (Prof. Dr. Azri Bin Usman) in footer
- Student portal link in footer
- Official website link (innovative.edu.my)
- Dynamic copyright year
- Required documents in admission section
- Full curriculum + career outcomes from official site
- Bilingual BM + EN with full vue-i18n language toggle
- FAQ bilingual (8 Q&A pairs)
- UX revamp: conversion-focused layout, hero pricing card, WhatsApp-first CTA
- Headline: "Dapat Diploma Sambil Bekerja" / "Get Your Diploma While You Work"
- Google Form replaced with external link (no more double-scroll iframe)

---

## Phase 2: Fix Technical Issues & Set Up Tracking — DONE ✅

All technical fixes implemented:
- Open Graph + Twitter Card meta tags
- TikTok Pixel placeholder in index.html
- Microsoft Clarity placeholder in index.html
- Noscript pixel URL fixed
- `lang="en-MY"` set
- Carousel removed (no conversion value) — memory leak fix N/A
- Full CSS rewrite — dead code eliminated, proper spacing, mobile responsive
- FAQ accessibility: role="button", tabindex="0", keyboard support
- Hamburger menu: aria-label, aria-expanded
- Unified tracking (Meta + GA4 + TikTok) in WhatsApp click handler
- UTM tracking utility created (`src/utils/tracking.js`) — auto-captures UTM params, persists in localStorage, enriches analytics events

### Still needs real IDs (manual setup by Marwan):
| Tool | Where to get ID | Plug into |
|------|----------------|-----------|
| Meta Pixel ID | business.facebook.com → Events Manager | `index.html` line ~31 |
| GA4 Measurement ID | analytics.google.com → Create property | `index.html` line ~50, 55 |
| Microsoft Clarity ID | clarity.microsoft.com → New project | `index.html` line ~76 |
| TikTok Pixel ID | ads.tiktok.com → Create account | `index.html` line ~63 |

---

## Phase 3: WhatsApp Automation Pipeline

### Strategy (start free, upgrade when needed):

**Stage 1 — Free (0-50 leads/week):** Use WhatsApp Business App (free)
- Set up greeting message (auto-sent on first contact)
- Set up away message (outside business hours)
- Create quick replies for common questions (triggered by "/" shortcuts)
- Create product catalog with program details
- Use labels to organize leads: New → Contacted → Interested → Applied → Enrolled
- Post WhatsApp Status 3-5x/day (only reaches people who saved your number)

**Stage 2 — Paid (50+ leads/week):** Upgrade to WhatsApp Cloud API via WANotifier ($49/mo ≈ RM220/mo)
- 0% markup on Meta's per-message rates (cheapest platform)
- Malaysia rates: ~RM0.16/marketing msg, ~RM0.09/utility msg, FREE for customer-initiated within 24hrs
- For 1,000 marketing messages/month: ~RM160 to Meta + RM220 platform = ~RM380 total

### Auto-reply chatbot flow (configure in WANotifier):
```
First message → "Salam! Terima kasih kerana berminat 🎓
Pilih nombor:
1️⃣ Maklumat kursus
2️⃣ Yuran & pembayaran
3️⃣ Cara memohon
4️⃣ Bercakap dengan penasihat"

"1" / "kursus" / "course" → Program details + MQA number + duration
"2" / "yuran" / "fee" / "harga" → RM5,000 breakdown + KWSP process + installment options
"3" / "mohon" / "apply" → Google Form link + required documents list
"4" / "agent" → Transfer to live agent (business hours) / collect callback info (after hours)
```

### Automated follow-up sequence:
| Day | Message | Purpose |
|-----|---------|---------|
| 0 | Auto-response (immediate) | Capture interest |
| 1 | "Ada soalan lain?" | Re-engage |
| 3 | Student testimonial image | Social proof |
| 7 | "Pendaftaran intake [date] akan ditutup" | Urgency |
| 14 | Final reminder + direct call offer | Last push |

### WhatsApp Status content calendar:
- Mon: Student testimonial quote
- Tue: "Tahukah anda?" program fact
- Wed: Career outcome / salary comparison
- Thu: KWSP withdrawal tip
- Fri: Registration deadline reminder
- Weekend: Motivational content about career growth

### Website widget — `src/components/WhatsAppWidget.vue`:
- Floating button (bottom-right)
- Context-aware pre-filled messages based on page section
- Tracks click source via `src/utils/tracking.js`

### Files to create/modify:
- **New**: `src/components/WhatsAppWidget.vue`
- `src/App.vue` — replace static wa.me links with widget

---

## Phase 4: Paid Advertising

### Channel priority (based on Malaysian market data):

| Channel | Est. Cost Per Lead | Why |
|---------|-------------------|-----|
| **Facebook/WhatsApp Status CTWA ads** | RM15-80 | Largest reach (31.8M users), cheapest CPL, direct to WhatsApp |
| **WhatsApp Status Ads** | Same budget (Meta placement) | Full-screen, high attention, massive usage in MY |
| **TikTok Spark Ads** | ~RM50 | 50%+ of Malaysian TikTok users are 25-45, authentic format |
| **Google Search Ads** | RM50-200+ | High intent but expensive, add later |
| **Instagram Stories** | Included in Meta | Auto-placed via Meta Ads Manager |

### Facebook + WhatsApp Status CTWA Ads (start here):
- **Budget**: RM30-50/day (RM900-1,500/month)
- **Format**: Click-to-WhatsApp — user taps ad, opens WhatsApp chat with your auto-reply bot
- **Placements**: Enable **all Meta placements** including:
  - Facebook Feed + Stories
  - Instagram Feed + Stories
  - **WhatsApp Status** (appears between contacts' Status updates — full-screen, high attention)
- **Why WhatsApp Status ads are powerful in Malaysia**:
  - WhatsApp is THE communication app (95%+ penetration)
  - Users check Status multiple times/day
  - Full-screen vertical format — no competing content
  - CTA button: "Send WhatsApp Message" → opens chat directly with your bot
  - Same ad creative as Instagram Stories — no extra work
  - **Zero maintenance** — created in Meta Ads Manager, runs automatically
- **Targeting**: Age 22-45, Malaysia, interests: "Higher education", "Online learning", "Career development". Separate ad sets for Malay/Chinese/Indian audiences with culturally relevant creative
- **Expected**: 20-65 leads/month at RM30-50/day
- **Requires**: Meta Pixel configured (Phase 2), WhatsApp Business API (Phase 3)

### WhatsApp Status Ad creative tips:
- 9:16 vertical format (1080x1920)
- First 3 seconds must hook — show the price "RM5,000" or pain point immediately
- Keep text minimal (people swipe fast)
- Use Malay language for wider reach: "Diploma Bisnes RM5,000 — KWSP Boleh!"
- CTA: "Hubungi Kami di WhatsApp" (Contact Us on WhatsApp)
- The ad → WhatsApp → bot auto-reply flow is seamless (user never leaves WhatsApp ecosystem)

### TikTok Spark Ads (add after Facebook proves ROI):
- **Budget**: RM50/day minimum per campaign, RM20/day per ad group
- **Format**: Boost organic TikTok content (student testimonials, "day in life of ODL student"). 30-50% lower CPC than standard in-feed because it feels authentic
- **Creative structure**: Hook (3s) → Problem (5s) → Solution (10s) → Social proof (5s) → CTA (5s)
- **Hook examples**:
  - "Gaji RM3,000 tapi nak naik pangkat? Ini caranya..."
  - "SPM je? Sekarang boleh dapat Diploma dengan RM5,000"
  - "Kerja sambil belajar — ini pengalaman saya"
- **Targeting**: Malaysia, age 22-45, interests: education, career, business
- **No education ad restrictions** in Malaysia on TikTok (unlike Australia/US)

### TikTok-optimized landing page — `src/views/TikTokLanding.vue`:
- No nav bar (remove distractions)
- Price + "KWSP Eligible" badge above the fold
- Short video testimonial at top
- 3-bullet value proposition (not paragraphs)
- Sticky bottom CTA: "WhatsApp Kami Sekarang"
- Target: under 363 words total (education landing page optimal)

### Retargeting (set up after 1,000+ visitors):
- **Meta**: Custom Audience — visitors who didn't convert (30 days) + Lookalike from WhatsApp converters
- **TikTok**: Pixel-based — viewed course details section + Lookalike

### Vue Router setup for landing variants — `src/router/index.js`:
- `/` → Main landing (current page)
- `/tiktok` → TikTok-optimized variant
- `/wa` → WhatsApp traffic variant (FAQ-heavy, direct chat CTA)

### Files to create/modify:
- `index.html` — TikTok Pixel script
- `src/main.js` — add Vue Router
- `vite.config.js` — path aliases
- `package.json` — add `vue-router@4`
- **New**: `src/router/index.js`
- **New**: `src/views/TikTokLanding.vue`
- **New**: `src/views/WhatsAppLanding.vue`
- **New**: `src/views/MainLanding.vue` (current page extracted)

---

## Phase 5: Scale & Optimize

### Email capture (only after you have traffic):
- Lead magnet: "FREE: Panduan Lengkap KWSP untuk Bayar Yuran Pengajian" (PDF)
- Tool: Brevo (free — 300 emails/day, 100K contacts) or MailerLite (free up to 1,000 subs)
- 6-email drip over 14 days: welcome → value → testimonial → KWSP guide → urgency → final
- **New**: `src/components/EmailCapture.vue`

### Blog/SEO (long-term organic play):
- Target keywords: "diploma perniagaan online malaysia", "belajar sambil kerja diploma", "KWSP bayar yuran pengajian"
- Store posts as JSON in `src/data/posts.json` (no CMS needed)
- **New**: `src/views/BlogIndex.vue`, `src/views/BlogPost.vue`

### Analytics dashboard:
- Google Looker Studio (free) connected to GA4
- Track: visitors by source, WhatsApp click rate, form submissions, cost per lead, campaign ROI

### Website live chat (when volume justifies it):
- Start with Tawk.to (completely free) — AI chatbot with FAQ training, mobile app for responding on-the-go
- Later: custom chatbot using Claude API if volume grows

### Telegram channel (free organic reach):
- 62.2% penetration in Malaysia — "Join for free business tips" → nurture → convert
- Unlimited subscribers, no algorithm throttling

---

## Budget Model

### Minimum viable (RM2,000/month):
| Item | Monthly (RM) | Expected Output |
|------|-------------|-----------------|
| WANotifier | 220 | Platform + ~500 messages |
| Facebook CTWA Ads | 1,000 | 20-65 leads |
| TikTok Ads (test) | 500 | 10-33 leads |
| Brevo + Clarity + GA4 | 0 | Email + heatmaps + analytics |
| Buffer | 280 | Content/contingency |
| **Total** | **2,000** | **30-100 leads/month** |

### Revenue math:
- At 5-10% lead-to-enrollment conversion: 1.5-10 enrollments/month
- At RM5,000/enrollment: **RM7,500 — RM50,000 revenue**
- ROI: **3.75x — 25x** on RM2,000 spend

### Tool costs summary:
| Tool | Cost | Purpose |
|------|------|---------|
| WANotifier | RM220/mo | WhatsApp automation (0% API markup) |
| WhatsApp Cloud API | ~RM0.16/marketing msg | Per-message to Meta |
| Brevo | Free | Email (300/day, 100K contacts) |
| Tawk.to | Free | Website live chat |
| Microsoft Clarity | Free | Heatmaps + session recordings |
| Google Analytics 4 | Free | Website analytics |
| Google Looker Studio | Free | Dashboard |
| Canva | Free | Content creation |

---

## Conversion Benchmarks to Track

| Metric | Target | Industry Average |
|--------|--------|-----------------|
| Landing page conversion (any action) | 8-12% | 6.3% (higher ed) |
| WhatsApp CTA click rate | 15-25% | — |
| Form submission rate | 10-15% (short form) | 3-5% (long form) |
| WhatsApp broadcast open rate | 95%+ | 95-98% |
| Lead → Enrollment | 5-10% | — |
| Facebook CTWA cost per lead | RM15-80 | — |
| TikTok cost per lead | ~RM50 | — |

---

## Implementation Order

```
Week 1:  Phase 1 (trust fixes) + Phase 2 (tracking/bugs)
         → Site is credible and measurable

Week 2:  Phase 3 (WhatsApp automation)
         → Leads get auto-replied, followed up

Week 3:  Phase 4 (Facebook CTWA ads first)
         → Paid traffic flowing, leads coming in

Week 4:  Phase 4 (TikTok ads + landing variant)
         → Second channel live, A/B testing starts

Week 5+: Phase 5 (email, blog, optimize based on data)
         → Scale what works, cut what doesn't
```

---

## All Files Changed/Created

### Modified:
| File | Phase |
|------|-------|
| `src/App.vue` | 1, 2 |
| `src/styles/main.css` | 1, 2 |
| `index.html` | 2, 4 |
| `src/main.js` | 4 |
| `vite.config.js` | 4 |
| `package.json` | 4 |

### Created:
| File | Phase |
|------|-------|
| `src/utils/tracking.js` | 2 |
| `src/components/WhatsAppWidget.vue` | 3 |
| `src/router/index.js` | 4 |
| `src/views/MainLanding.vue` | 4 |
| `src/views/TikTokLanding.vue` | 4 |
| `src/views/WhatsAppLanding.vue` | 4 |
| `src/components/EmailCapture.vue` | 5 |
| `src/views/BlogIndex.vue` | 5 |
| `src/views/BlogPost.vue` | 5 |
| `src/data/posts.json` | 5 |

---

## Verification

1. **After Phase 1-2**: Open site → trust signals visible, MQA number shown, address in footer, GA4 real-time shows visits, Clarity records sessions, OG tags work (test at opengraph.xyz)
2. **After Phase 3**: Send WhatsApp message → auto-reply triggers, follow-up sequence fires on schedule, widget tracks clicks in GA4
3. **After Phase 4**: Facebook ad → user lands on site → clicks WhatsApp → auto-reply fires → lead captured. Check: Meta Pixel fires (use FB Pixel Helper extension), TikTok Pixel fires (TikTok Pixel Helper), UTM params persist to WhatsApp message
4. **After Phase 5**: Email captured → drip sequence starts in Brevo, blog posts render at /blog/:slug, Looker Studio dashboard shows all metrics
