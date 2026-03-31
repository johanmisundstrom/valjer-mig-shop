# Väljer Mig — React Webbshop

> 🇸🇪 Svenska nedan — 🇬🇧 English translation further down

---

## 🇸🇪 Svenska

En fullt fungerande webbshop byggd med React, riktad mot kvinnor 25-40 år med humor och identitetsdrivna produkter. Butiken säljer print-on-demand produkter (muggar och tote bags) via Printful, med en modern och feminin estetik.

## Om projektet

Det här projektet är byggt som en del av en fullstackutbildning, med målet att skapa något på riktigt. Butiken är kopplad mot ett riktigt Printful-konto, vilket betyder att produkterna är verkliga och att butiken skulle kunna lanseras som en riktig verksamhet.

Målgruppen är kvinnor 25-40 år som gör impulsbaserade köp utifrån identitet och humor. Produkter som muggar och tote bags med tydliga, relaterbara budskap presterar bra i den här målgruppen enligt statistik.

## Funktioner

- Produktlista hämtad från Printful API
- Enskilda produktsidor med kvantitetsväljare
- Slide-in varukorg med lägg till och ta bort funktionalitet
- Checkout-flöde med formulär för personliga uppgifter
- Orderbekräftelsesida
- Responsiv design för mobil och dator
- React Router för navigering mellan sidor

## Tekniker

- React (Vite)
- React Router DOM
- Printful API (riktig print-on-demand integration)
- CSS med media queries för responsiv design

## Kom igång

### Krav

- Node.js (v18 eller högre rekommenderas)
- Ett Printful-konto med en API-token

### Installation

1. Klona repot:
```bash
git clone https://github.com/johanmisundstrom/valjer-mig-shop.git
cd valjer-mig-shop
```

2. Installera beroenden:
```bash
npm install
```

3. Skapa en `.env` fil i projektets rotmapp:
```
VITE_PRINTFUL_API_KEY=din_api_nyckel_här
```

4. Starta utvecklingsservern:
```bash
npm run dev
```

5. Öppna webbläsaren och gå till `http://localhost:5173`

## Projektstruktur

```
src/
├── App.jsx             # Huvudkomponent, state management
├── Header.jsx          # Navigering
├── ProductList.jsx     # Produktgrid, hämtar från Printful API
├── ProductCard.jsx     # Enskilt produktkort
├── ProductPage.jsx     # Produktsida med kvantitetsväljare
├── Cart.jsx            # Slide-in varukorg
├── Checkout.jsx        # Orderöversikt med formulär
├── Confirmation.jsx    # Orderbekräftelsesida
├── OmOss.jsx           # Om oss-sida
├── printful.js         # Printful API integration
└── products.js         # Reservdata för produkter
```

## Noteringar

- `.env` filen ingår inte i repot av säkerhetsskäl. Du måste skapa den manuellt med din egen Printful API-token.
- Orders som läggs i butiken är simulerade och behandlar inga riktiga betalningar. Stripe-integration skulle behövas för en riktig butik.
- Butiken är kopplad mot ett riktigt Printful-konto, vilket betyder att produkterna som visas är riktiga print-on-demand produkter.

## Framtida förbättringar

- Stripe betalningsintegration
- Fler produkter och kategorier
- Sök- och filtreringsfunktionalitet
- Användarkonton och orderhistorik

---

## 🇬🇧 English

A fully functional e-commerce store built with React, targeting women aged 25-40 with humor and identity-driven products. The store sells print-on-demand products (mugs and tote bags) via Printful, with a strong, modern aesthetic.

## About the Project

This project was built as part of a fullstack development education, with the goal of creating something real — not just a school exercise. The store is connected to a live Printful account, meaning products are real and the store could be launched as an actual business.

The target audience is women aged 25-40 who make impulse-driven purchases based on identity and humor. Products like mugs and tote bags with bold, relatable messages perform well in this demographic, especially ahead of the holiday season.

## Features

- Product listing fetched from the Printful API
- Individual product pages with quantity selector
- Slide-in shopping cart with add/remove functionality
- Checkout flow with personal details form
- Order confirmation page
- Responsive design for mobile and desktop
- React Router for client-side navigation

## Tech Stack

- React (Vite)
- React Router DOM
- Printful API (real print-on-demand integration)
- CSS with media queries for responsive design

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- A Printful account with an API token

### Installation

1. Clone the repository:
```bash
git clone https://github.com/johanmisundstrom/valjer-mig-shop.git
cd valjer-mig-shop
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root of the project:
```
VITE_PRINTFUL_API_KEY=your_api_key_here
```

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and go to `http://localhost:5173`

## Project Structure

```
src/
├── App.jsx             # Main app component, state management
├── Header.jsx          # Navigation header
├── ProductList.jsx     # Product grid, fetches from Printful API
├── ProductCard.jsx     # Individual product card
├── ProductPage.jsx     # Single product page with quantity selector
├── Cart.jsx            # Slide-in shopping cart
├── Checkout.jsx        # Order overview with personal details form
├── Confirmation.jsx    # Order confirmation page
├── OmOss.jsx           # About page
├── printful.js         # Printful API integration
└── products.js         # Fallback product data
```

## Notes

- The `.env` file is not included in the repository for security reasons. You need to create it manually with your own Printful API token.
- Orders placed in the store are simulated and do not process real payments. Stripe integration would be needed for a live store.
- The store is connected to a real Printful account, meaning products shown are real print-on-demand products.

## Future Improvements

- Stripe payment integration
- More products and categories
- Search and filtering functionality
- User accounts and order history
