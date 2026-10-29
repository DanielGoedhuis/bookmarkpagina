# Bookmarkpagina (webversie)

**Openen:** https://danielgoedhuis.github.io/bookmarkpagina/

Een persoonlijke startpagina met al je werklinks, ingedeeld in tabs (per applicatie) en kopjes. Je hoeft niets te
downloaden of te installeren: open het adres en begin.

## Waar staan mijn links?

- **In je eigen browser, op je eigen pc.** Ze worden nergens naartoe gestuurd: niet naar GitHub, niet naar de
  maker van de pagina en niet naar collega's. De pagina vertelt andere websites ook niet waar je vandaan komt
  als je op een link klikt. Voor de icoontjes haalt de browser bij elke website in je lijst alleen het icoontje op
  (uit te zetten in ☰ → *Instellingen*). Deze website levert alleen de (lege) pagina; iedereen die hem opent heeft
  automatisch zijn eigen, persoonlijke pagina.
- **Back-up (aanrader):** ☰ → *Instellingen* → *Nieuw back-upbestand…* en kies een map in je **OneDrive**
  (Chrome/Edge). Elke wijziging wordt dan ook naar dat bestand geschreven, en OneDrive bewaart eerdere versies.
  Na een herstart van de browser klik je één keer op **Back-up bijwerken** om toestemming te geven.
- **Andere pc:** open de pagina, ☰ → *Instellingen* → *Bestaand back-upbestand kiezen…* en kies hetzelfde
  bestand in je OneDrive.
- **Let op:** wis je de browsergegevens (cookies en sitegegevens) zonder back-up, dan zijn je links weg.

## Gebruik

- **Importeren**: ☰ → *Bookmarks importeren…* met een export uit Chrome/Edge
  (*Bladwijzers beheren → ⋮ → Bladwijzers exporteren*), of sleep het bestand op de pagina.
- **Links toevoegen**: sleep een link naar een tab of kopje, of klik op **+ Link**.
- **Rechtsklik** op een link, kopje of tab voor alle opties; **sleep** tabs, kopjes en links om ze te ordenen.
- **Favorieten**: ☆ achter een link. **Alles openen**: ↗ alle in een kopje.
- **Sneltoetsen**: `Ctrl+K` snel zoeken, `/` zoeken, `1`–`9` tabs, `?` hulp.
- **Terug naar de browser**: ☰ → *Bookmarks exporteren* en importeer het bestand in Chrome/Edge.

## Snel en ook zonder internet

Na het eerste bezoek bewaart de browser de pagina zelf (niet je gegevens: die staan er los van). Daarna opent hij
direct, ook als het netwerk traag is of wegvalt. Staat er een nieuwe versie online, dan verschijnt bovenaan
*"Er is een nieuwe versie van de bookmarkpagina"* met de knop **Vernieuwen**.

## Versies en aanpassen

| Bestand | Wat |
|---|---|
| `bron/index.html` | De leesbare pagina: hier pas je iets aan |
| `index.html` | De verkleinde versie die online staat (wordt gemaakt uit `bron/index.html`) |
| `sw.js` | Service worker: direct openen, ook zonder internet, en melding bij een nieuwe versie |

Na een aanpassing in `bron/index.html`:

```bash
npm install
npm run bouw
```

Commit daarna `bron/index.html` én `index.html`. Een wijziging die op `main` komt, staat binnen een paar minuten
online; gebruikers krijgen de melding *Nieuwe versie* en hun links blijven gewoon staan.
