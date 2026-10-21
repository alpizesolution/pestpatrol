# Pest Patrol CDO - Official Website

Modern, high-converting, mobile-responsive local business website for **Pest Patrol CDO**, a professional pest and termite management company based in Cagayan de Oro, Philippines.

- **Facebook**: [facebook.com/PestPatrolCDO](https://www.facebook.com/PestPatrolCDO)
- **Messenger**: [m.me/PestPatrolCDO](https://m.me/PestPatrolCDO)
- **Hotline**: 0917-824-7378 / (088) 850-7378

---

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Lead Intake**: `/api/quote` Next.js Route Handler

---

## 🌟 Key Features

1. **High-Converting Mobile-First Experience**
   - Sticky bottom bar on mobile screens featuring 50/50 split between "Call Hotline" (`tel:+63...`) and "Messenger" (`m.me/PestPatrolCDO`).
   - Sticky desktop navigation with direct CDO phone links and emergency badge.

2. **Cagayan de Oro-Specific Treatments**
   - **Termite Control & Soil Poisoning**: Subterranean termite barrier & wood injection (up to 5 years warranty).
   - **General Pest & Cockroach Elimination**: FDA-approved gel baiting & crack/crevice spray for restaurants, homes, and offices.
   - **Rodent Control & Exclusion**: Tamper-proof bait boxes, attic trapping, and sanitation sealing.
   - **Mosquito Misting & Dengue Fogging**: ULV cold misting and thermal outdoor knock-down.

3. **Local SEO & Schema Integration**
   - Embedded `LocalBusiness` JSON-LD schema with Cagayan de Oro geo-coordinates (`8.4772, 124.6459`), operating hours, service catalog, and contact metadata.
   - Target coverage for key CDO districts: Uptown (Pueblo de Oro, Xavier Estates, Gran Europa), Downtown, Lapasan, Bulua, Bugo, Opol, and Tagoloan.

4. **Lead Generation & Validation**
   - Interactive quote form with client-side PH phone number validation (`09XX` / `+639XX`).
   - Property selector (Residential, Commercial, Industrial) & urgency level.
   - Server-side validation via `POST /api/quote` returning reference IDs.

---

## 🛠️ Project Structure

```text
src/
├── app/
│   ├── layout.tsx         # Global metadata, OpenGraph, JSON-LD schema, Inter font
│   ├── page.tsx           # Landing page assembly
│   ├── globals.css        # Tailwind directives and clean base typography
│   └── api/
│       └── quote/
│           └── route.ts   # POST endpoint validating lead details
├── components/
│   ├── Navbar.tsx         # Sticky navigation with CDO emergency phone link
│   ├── Hero.tsx           # CDO-specific headline, trust badges, primary CTAs
│   ├── Services.tsx       # 4-card grid detailing treatments & warranties
│   ├── WhyUs.tsx          # Certified technicians, comparison table, safety pillars
│   ├── ServiceAreas.tsx   # CDO coverage: Uptown, Downtown, Lapasan, Bulua, Bugo, Opol, Tagoloan
│   ├── QuoteForm.tsx      # Multi-field interactive lead form with state feedback
│   ├── FloatingCTA.tsx    # Mobile-only sticky bar: phone call + FB Messenger
│   └── Footer.tsx         # Operating hours, full coverage list, copyright, FB link
└── data/
    └── services.ts        # Typed service objects, coverage list, contact metadata
```

---

## 💻 Development & Production Build

### Install Dependencies
```bash
npm install
```

### Run Locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production
```bash
npm run build
npm start
```
