# Valjer Mig Shop

En webbshop byggd med React som skolprojekt. Produkterna hämtas från Printful API. Man kan bläddra bland produkter, lägga till i varukorgen och fylla i sina uppgifter för att lägga en order.

## Installera och starta

Klona repot och öppna mappen i terminalen.

git clone https://github.com/johanmisundstrom/valjer-mig-shop.git
cd valjer-mig-shop
npm install 
npm run dev

Sen öppnar du länken som visas i terminalen i webbläsaren.

## API-nyckel

Du behöver en egen API-nyckel i en .env fil i projektmappen:

VITE_PRINTFUL_API_KEY=din_nyckel_här

## Debounce

Sökfunktionen använder debounce. Den väntar 300ms efter att man slutat skriva innan sökningen körs. Det är gjort med setTimeout och clearTimeout i en useEffect.

## Felhantering

API-anropen använder try/catch så att om något går fel visas ett felmeddelande i konsolen istället för att appen kraschar.