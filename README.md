# Skaledronija

Skaledronija je aplikacija za slanje poruka koja koristi Scaledrone servis za slanje poruka.

## Sadržaj

- [O projektu](#o-projektu)
- [Tehnologije](#tehnologije)
- [Upute za pokretanje](#upute-za-pokretanje)


## O projektu

Ovo je jednostavna frontend aplikacija za slanje poruka preko Scaledrone servisa za slanje poruka. Aplikacija je SPA(single page app) izrađena u Reactu.

## Tehnologije

U projektu su korištene sljedeće tehnologije:

- [Scaledrone](https://www.scaledrone.com/)
- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Vite](https://vitejs.dev/)

## Upute za pokretanje

Za pokretanje projekta na vašem računalu učinite sljedeće:

1. Klonirajte ovaj repozitorij na svoje računalo.
2. Ispunite channelId u .env datoteki(priložena je .env.example kao primjer)

   ```
   VITE_CHANNEL_ID=idkanala
2. Otvorite terminal i navigirajte do direktorija projekta.
3. Instalirajte ovisnosti pomoću naredbe:

   ```shell
   npm install
4. Pokrenite projekt pomocu komande:

   ```shell
   npm run dev