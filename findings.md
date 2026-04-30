# Findings — Royal Thai Sportbar

> Running log of discoveries, research, constraints, and API notes.

---

## Project Context
- **Workspace:** `C:\Users\Victor\RoyalThaiSportbar`
- **Initialized:** 2026-03-04
- **Current prototype:** https://thai-sportbar-revamp.lovable.app/

---

## Discovery Answers

| Question | Answer |
|----------|--------|
| **North Star** | Beautiful, simple, mobile-first restaurant website in Swedish. Lets recurring customers browse the menu and order via Foodora. |
| **Integrations** | Foodora (delivery badge — no API key needed), Google Maps iframe (Tunnbygatan 2, Bromölla), future Netlify hosting |
| **Source of Truth** | Static HTML site. Menu data managed manually in code. |
| **Delivery Payload** | Public website — local server for now, Netlify-ready for production |
| **Behavioral Rules** | All text in Swedish. Prices in SEK (kr). Premium, warm design. Mobile-first. |

---

## Real Business Data (Scraped from Lovable Prototype)

### Contact
- **Address:** Tunnbygatan 2, Bromölla
- **Phone:** 0456-226 89 / 076-169 78 85
- **Email:** royalthaisportsbar@gmail.com

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

### Navigation (5 pages — one-page scroll app on Lovable)
HEM → MENY → OM OSS → EVENEMANG → KONTAKT

### Hero Text
- **Title:** Royal Thai SportsBar
- **Tagline:** "Autentisk thailändsk mat, kall öl & sport på storbildsskärm — allt under ett tak i Bromölla."
- **CTAs:** "SE MENYN" + "HITTA HIT"
- **Delivery note:** "🛵 Mat hemkörning från 39 kr"

### Menu Categories (16 total)
1. Specialrätter
2. Förrätter
3. Svenska Rätter
4. Biffrätter
5. Kycklingrätter
6. Fläskrätter
7. Ankrätter
8. Skaldjursrätter
9. Ris och Nudel Rätter
10. Thairätter – Biff
11. Thairätter – Kyckling
12. Thairätter – Räkor
13. Barnmat
14. Vegetariska Rätter
15. Dessert
16. Tillbehör

### Extracted Menu Items
| # | Name | Price (kr) | Category |
|---|------|-----------|----------|
| M3 | Tre små rätter | 125 | Specialrätter |
| M4 | Fyra små rätter | 125 | Specialrätter |
| M5 | Fem små rätter för två personer | 435 | Specialrätter |
| 1 | Kinesisk vågrulle | 55 | Förrätter |

> **Note:** Full menu not scraped — need user to provide or browse more categories.

### Om Oss Text
> "Vi är inte bara en restaurang, vi är gemenskap. Vi håller en fotbollsturnering varje sommar för att stärka sammanhållningen och gemenskapen med våra kära kunder. Halloweenfest varje år där vi utser en vinnare för bästa klädsel. Hos oss hittar du alltid en anledning att fira!"

### Events (Evenemang)
| Event | Details | Schedule |
|-------|---------|----------|
| Biljard & Shuffleboard | "Utmana vännerna och spendera en kväll av öl och skoj efter maten." | Löpande |
| BlackJack | Blackjack-bord | Fredag & Lördag 20:00–02:00 |
| Karaoke | "Ta mikrofonen och sjung loss!" | Varje Fredag & Lördag |

---

## Foodora Integration Research
- Free embeddable HTML badge — no API key required
- Method: `<a href="FOODORA_URL"><img src="badge.png" /></a>`
- **Action needed:** User must provide their Foodora restaurant URL
- Delivery price from site: **39 kr**

---

## Design Inspiration Research
### Key Design Traits for Premium Restaurant Sites
- Full-bleed hero image with overlay gradient
- Bold serif headings (Playfair Display works perfectly here — already used in prototype)
- Dark warm palettes: near-black + burgundy + gold (exact match to current prototype)
- Card-based menu with accordion categories
- Sticky mobile nav + hamburger

### Top Inspirations Used
| Site | Why |
|------|-----|
| Beefbar | Sleek black palette, elegant serif typography |
| Eleven Madison Park | Minimalist, refined |
| Mon Lapin | Earthy warmth, clean layout |
| Noma | Immersive storytelling |

---

## Constraints & Notes
- The Lovable prototype already has great content — we're building a **custom-coded, faster, more polished version**
- Nav has 5 items (not 4 as originally planned) — Evenemang is important, keep it
- Full menu item list is not yet extracted — user should verify or provide
- Foodora URL still needed from user
- "Avhämtningsmeny" subtitle on menu page — keep this label
- Footer note on prototype: "Fråga personalen om allergier & specialkost. Alla priser inkl. moms."

---

## Pending from User
1. 🔗 Foodora restaurant page URL
2. 📋 Full menu items and prices for all 16 categories (optional — we can use real scraped items where available)
