# Site SOP — Royal Thai SportsBar

> Instruktioner för att uppdatera webbplatsen. Uppdatera alltid denna fil om arkitekturen förändras.

---

## Hur man uppdaterar menyn

1. Öppna `index.html` i valfri textredigerare (VS Code, Notepad++)
2. Hitta rätt kategori-block i `<div class="accordion" id="menu-accordion">`
3. Varje menyartikel ser ut så här:
```html
<li class="menu-item">
  <span class="menu-num">1.</span>
  <span class="menu-name">Kinesisk vågrulle</span>
  <span class="menu-price">55 kr</span>
</li>
```
4. Ändra nummer, namn och pris direkt i HTML
5. Spara filen och ladda om webbläsaren

---

## Hur man uppdaterar öppettider

1. Öppna `index.html`
2. Hitta `<table class="hours-table">` i `#kontakt`-sektionen
3. Uppdatera tider direkt i `<td>`-elementen
4. Om en dag är stängd, se till att `<tr class="closed">` används för den raden

---

## Hur man uppdaterar Foodora-länken

1. Öppna `index.html`
2. Sök (Ctrl+F) på `foodora.se`
3. Du hittar två `<a href="...">` — en i hero-sektionen och en i meny-sektionen
4. Ersätt `https://www.foodora.se` med den faktiska restaurangprofil-URLen
5. Gör samma sak i eventuella framtida filer

---

## Hur man byter bilder

Lägg till riktiga bilder i projektet:
1. Spara bilderna i en `/images/`-mapp i projektkatalogen
2. I `style.css`, sök efter `.hero-bg` och `.event-img--*`
3. Ersätt `background-image: url(...)` med sökvägen till din bild:
```css
.hero-bg {
  background-image: url('images/hero.jpg');
}
.event-img--biljard {
  background-image: url('images/biljard.jpg');
}
```

---

## Driftsättning till Netlify

1. Gå till [netlify.com](https://www.netlify.com) och skapa ett konto
2. Klicka på "Add new site" → "Deploy manually"
3. Dra och släpp hela projektmappen (`RoyalThaiSportbar/`) till Netlify
4. Klart — webbplatsen är live!
5. (Valfritt) Koppla en anpassad domän under "Domain settings"
