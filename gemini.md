# gemini.md — Project Constitution
# Royal Thai Sportbar

> **This file is LAW.** It defines all schemas, behavioral rules, and architectural invariants.
> Only update this file when: (1) a schema changes, (2) a rule is added, (3) architecture is modified.

---

## 🏗️ Project Identity

| Field | Value |
|-------|-------|
| **Project Name** | Royal Thai SportsBar |
| **Type** | Asian Restaurant + Sports Bar — Bromölla, Sweden |
| **Protocol** | B.L.A.S.T. (Blueprint, Link, Architect, Stylize, Trigger) |
| **Architecture** | A.N.T. 3-Layer (Architecture / Navigation / Tools) |
| **Status** | 🟢 Phase 1 — Blueprint Approved, Ready for Execution |
| **Initialized** | 2026-03-04 |
| **Language** | 🇸🇪 Swedish (all visible text) |
| **Currency** | SEK (kr) |

---

## 🎯 North Star

A **beautiful, fast, and simple Swedish-language website** for Royal Thai SportsBar — an Asian restaurant and sports bar in Bromölla, Sweden. The goal is to give recurring customers a frictionless experience to browse the menu and order via Foodora. The site must look premium but remain dead-simple to navigate.

---

## 📍 Real Business Data

| Field | Value |
|-------|-------|
| **Address** | Tunnbygatan 2, Bromölla |
| **Phone 1** | 0456-226 89 |
| **Phone 2** | 076-169 78 85 |
| **Email** | royalthaisportsbar@gmail.com |

### Opening Hours
| Day | Hours |
|-----|-------|
| Måndag | 16:00 – 22:00 |
| Tisdag | Stängt |
| Onsdag | 11:30 – 22:00 |
| Torsdag | 11:30 – 02:00 |
| Fredag | 11:30 – 02:00 |
| Lördag | 12:00 – 02:00 |
| Söndag | 12:00 – 22:00 |

---

## 📐 Data Schema

> **STATUS: DEFINED** — Static HTML site. Menu data lives inline in HTML.

### Menu Item Object
```json
{
  "id": "string (e.g. 'forratter-01')",
  "number": "string (e.g. '1.' as on the menu)",
  "name": "string (Swedish name)",
  "description": "string (Swedish, optional)",
  "price": "number (SEK)",
  "category": "string — see categories below",
  "tags": ["vegetarisk", "stark", "barnmeny"]
}
```

### Menu Categories (16 total — from live site)
```json
[
  "Specialrätter",
  "Förrätter",
  "Svenska Rätter",
  "Biffrätter",
  "Kycklingrätter",
  "Fläskrätter",
  "Ankrätter",
  "Skaldjursrätter",
  "Ris och Nudel Rätter",
  "Thairätter – Biff",
  "Thairätter – Kyckling",
  "Thairätter – Räkor",
  "Barnmat",
  "Vegetariska Rätter",
  "Dessert",
  "Tillbehör"
]
```

### Known Menu Items (from scraping)
```json
[
  { "id": "M3", "name": "Tre små rätter", "price": 125, "category": "Specialrätter" },
  { "id": "M4", "name": "Fyra små rätter", "price": 125, "category": "Specialrätter" },
  { "id": "M5", "name": "Fem små rätter för två personer", "price": 435, "category": "Specialrätter" },
  { "id": "1",  "name": "Kinesisk vågrulle", "price": 55, "category": "Förrätter" }
]
```
> Note: Full menu items to be populated once user shares the complete menu or we extract via browser.

### Page Structure (Sitemap)
```json
{
  "pages": [
    "index.html       → Hero + Välkommen + CTA (Beställ via Foodora)",
    "meny.html        → Full menu by category (accordion / tabs)",
    "om-oss.html      → About + Events (Evenemang merged here or separate section)",
    "hitta-oss.html   → Location, opening hours, map embed, contact"
  ]
}
```

---

## 🎭 Events (Evenemang)

| Event | Description | Schedule |
|-------|-------------|----------|
| Biljard & Shuffleboard | Utmana vännerna och spendera en kväll av öl och skoj efter maten. | Löpande |
| BlackJack | Blackjack-bord | Fredag & Lördag 20:00–02:00 |
| Karaoke | Ta mikrofonen och sjung loss! | Varje Fredag & Lördag |

---

## 🔌 Integrations

| Service | Purpose | Status |
|---------|---------|--------|
| **Foodora** | Home delivery CTA — "Beställ via Foodora" badge | No API key needed — link to restaurant's Foodora page (URL pending from user) |
| **Google Maps** | Embed on Hitta oss page | Tunnbygatan 2, Bromölla — no key needed |
| **Netlify** | Future hosting / CI-CD | Not yet set up (local server first) |

---

## ⚖️ Behavioral Rules

1. All visible text MUST be in Swedish.
2. All prices MUST be displayed in SEK (e.g., `149 kr`).
3. Navigation MUST have max 5 top-level items: **Hem / Meny / Om oss / Evenemang / Kontakt** (matching existing site).
4. The Foodora CTA MUST be visible on the homepage hero and the menu page.
5. The site must be fully mobile-responsive (majority of customers on phones).
6. Design must feel premium, warm, and inviting.
7. No user login, no cart, no checkout — all ordering via Foodora.
8. Delivery price mention: "Mat hemkörning från 39 kr" must appear on hero and/or menu.

---

## 🚫 Do-Not Rules

1. Do NOT add a custom checkout or cart — Foodora handles all ordering.
2. Do NOT write any visible UI text in English (code comments are fine).
3. Do NOT add unnecessary pages or features.
4. Do NOT hardcode API keys or secrets.
5. Do NOT remove the Evenemang section — it's a core identity feature.

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| **Primary Color** | Deep burgundy/crimson — `#8B1A1A` |
| **Accent Color** | Warm gold — `#C9A84C` |
| **Background** | Near-black — `#0D0D0D` |
| **Surface** | Dark charcoal — `#1A1A1A` |
| **Text** | Off-white — `#F5F0E8` |
| **Font — Headings** | `Playfair Display` (elegant serif) |
| **Font — Body** | `Inter` (clean, readable) |
| **Vibe** | Dark, warm, premium — like a high-end Asian fusion bar |

---

## 🗂️ Architecture Invariants

- **Layer 1 (`architecture/`):** All SOPs live here as Markdown files.
- **Layer 2 (Navigation):** Routing between pages via `<nav>` links.
- **Layer 3 (`tools/`):** Not applicable (static HTML site). Reserved for future automation.
- **`.tmp/`:** All intermediate files and logs. Never pushed to production.
- **`.env`:** Reserved for future API keys. Never hardcoded.

---

## 📋 Maintenance Log

| Date | Change | Reason |
|------|--------|--------|
| 2026-03-04 | File created | Protocol 0 initialization |
| 2026-03-04 | Schema defined, rules set | Discovery Questions answered |
| 2026-03-04 | Design system established | Blueprint phase started |
| 2026-03-04 | Real data added — address, hours, menu categories, events | Scraped from live Lovable prototype |
