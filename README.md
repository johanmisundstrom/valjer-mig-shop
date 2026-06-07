# Väljer Mig — React Webbshop

En webbshop byggd med React som en del av en fullstackutbildning. Butiken säljer print-on-demand kläder via Printful och är riktad mot kvinnor 25-40 år.

## Om projektet

Jag ville bygga något på riktigt istället för att använda fejkdata, så jag kopplade ihop projektet med ett riktigt Printful-konto. Det betyder att produkterna är verkliga och att butiken faktiskt skulle kunna användas.

Kursen föreslog DummyJSON som API men jag valde Printful istället eftersom det gav mig riktig produktdata, riktiga priser och varianter att jobba med. Det var svårare att sätta upp men kändes mer meningsfullt.

## Funktioner

- Produktlista hämtad från Printful API
- Produktsida med pris, beskrivning och storleksväljare
- Varukorg som slide-in med lägg till och ta bort
- Orderöversikt med produkter, pris och totalsumma
- Formulär för personuppgifter
- Bekräftelsesida efter lagd order
- Responsiv design för mobil och dator

## Tekniker

- React med Vite
- React Router DOM
- Printful API
- CSS med media queries

## Kom igång

Du behöver Node.js och ett Printful-konto med en API-nyckel.

```bash
git clone https://github.com/johanmisundstrom/valjer-mig-shop.git
cd valjer-mig-shop
npm install
```

Skapa en `.env` fil i projektmappen:

```
VITE_PRINTFUL_API_KEY=din_nyckel_här
```

Starta projektet:

```bash
npm run dev
```

Öppna `http://localhost:5173` i webbläsaren.

## Projektstruktur

```
src/
├── App.jsx          # huvudkomponent, state och routing
├── Header.jsx       # navigering
├── ProductList.jsx  # produktgrid, hämtar från API
├── ProductCard.jsx  # enskilt produktkort
├── ProductPage.jsx  # produktsida med varianter och pris
├── Cart.jsx         # slide-in varukorg
├── Checkout.jsx     # orderöversikt och formulär
├── Confirmation.jsx # bekräftelsesida
├── OmOss.jsx        # om oss-sida
└── printful.js      # API-anrop mot Printful
```

## Noteringar

`.env` filen ingår inte i repot, du måste skapa den själv med din egen API-nyckel.

Betalning är simulerad, ordern skickas inte vidare på riktigt. Nästa steg hade varit att integrera Stripe och koppla ihop det med Printful så att riktiga orders skapas automatiskt.
