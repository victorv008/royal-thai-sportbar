# 📱 Så här uppdaterar du menyn för Royal Thai SportsBar från mobilen

Den här guiden är till för dig som driver restaurangen och snabbt vill kunna ändra priser och maträtter direkt från din telefon, utan att behöva kunna någon kodning. 

---

## 🛠️ För dig som sätter upp servern (Kompisen)

Just nu läser hemsidan in alla maträtter från en textfil som heter **`meny-data.json`**. 
För att Pappan ska kunna ändra menyn från sin telefon på absolut enklaste sätt, rekommenderas följande "mål-uppsättning" på den nya servern:

1. **Skapa ett Google Kalkylark (Google Sheets)** med kolumnerna: `Kategori`, `Nummer`, `Namn`, `Beskrivning`, `Pris`.
2. Låt Pappan ladda ner **Google Kalkylark-appen** på sin mobil. Han redigerar nu menyn precis som i Excel.
3. På din server skriver du ett superenkelt skript (t.ex. i Node.js eller Python) som laddar ner det publika Kalkylarket som CSV/JSON.
4. Skriptet sparar ner datan och ersätter filen `meny-data.json` automatiskt (t.ex. via ett Cron-jobb varje natt, eller via en "Uppdatera meny"-knapp).

När detta är uppsatt, behöver Pappan bara följa guiden nedan! 👇

---

## 👨‍🍳 För dig som uppdaterar priserna (Pappan)

När systemet ovan är kopplat, är det busenkelt att ändra ett pris från soffan eller restaurangen. Du kan inte råka förstöra hemsidan hur du än gör!

### Steg 1: Skaffa appen
Ladda ner appen **Google Kalkylark** (Google Sheets) från App Store (iPhone) eller Google Play (Android). 
Logga in med ditt Google-konto.

### Steg 2: Öppna menyn
När du öppnar appen kommer du se ett dokument som heter **"Royal Thai Meny"**. Klicka på det!
Där inne ser du hela din meny i en vanlig tabell. 

### Steg 3: Ändra ett pris eller en rätt
1. Leta upp rätten du vill ändra, till exempel *Biff med röd curry*.
2. Tryck på rutan där priset står (t.ex. `135`).
3. Sudd ut siffran och skriv det nya priset (t.ex. `145`). 
4. Tryck på "Klar" eller bocken för att spara.

*Vill du lägga till en helt ny rätt?* Skriv bara in den på en tom rad längst ner under rätt kategori!

### Steg 4: Klart! ✅
Du behöver inte spara filen manuellt, Google sparar varje knapptryck. 
Servern kommer nu att hämta i dina snabba ändringar från Kalkylarket och automatiskt byta ut priserna ute på den riktiga hemsidan!

---

### ⚠️ Tillfällig lösning tills Google Kalkylark är kopplat
Om du måste ändra ett pris **idag**, innan kompisens server är helt redo:
Du eller Victor behöver öppna filen `meny-data.json` i Github (eller där filerna ligger nu). Filen ser ut så här:

```json
{
    "namn": "Biff med röd curry, grönsaker",
    "pris": 135,
    "nr": "74."
}
```
Ändra bara siffran `135` till din nya siffra och klicka på Spara. Hemsidan uppdateras då i samma sekund.
