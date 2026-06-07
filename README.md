Valjer Mig Shop

En webbshop byggd med React som skolprojekt. Produkterna hämtas från Printful API. Man kan bläddra bland produkter, lägga till i varukorgen och fylla i sina uppgifter för att lägga en order.

Installera och starta

Klona repot och öppna mappen i terminalen.

npm install
npm run dev

Sen öppnar du länken som visas i terminal i en webbläsare.

API-nyckel

Projektet använder Printful API. Du behöver en egen API-nyckel i en .env fil:

VITE_PRINTFUL_API_KEY=din_nyckel_här

Debounce

Sökfunktionen på startsidan använder debounce. Det betyder att sökningen inte körs direkt när man skriver utan väntar 300 ms efter att man slutat skriva. Det är gjort med setTimeout och clearTimeout i en useEffect.

Felhantering

API-anropen använder try/catch så att om något går fel visas ett felmneddelande i konsolen istället för att appen kraschar. 