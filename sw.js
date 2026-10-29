// Service worker van de bookmarkpagina: opent de pagina direct uit de eigen opslag van de browser
// (ook zonder internet). Op verzoek van de pagina kijkt hij of er een nieuwe versie op de website staat;
// is die er, dan wordt hij bewaard en krijgt de pagina een seintje ("Nieuwe versie beschikbaar").
// Er gaan hier nooit gegevens van de gebruiker doorheen: alleen de pagina zelf wordt bewaard.

const CACHE = "bookmarkpagina";
const PAGINA = new URL("./", self.registration.scope).href;

self.addEventListener("install", e => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(c => c.add(new Request(PAGINA, { cache: "no-cache" }))));
});

self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));

self.addEventListener("fetch", e => {
  const req = e.request;
  // Alleen het openen van de pagina zelf; al het andere (bijv. links, icoontjes) gaat gewoon zijn gang.
  if (req.method !== "GET" || req.mode !== "navigate" || !req.url.startsWith(self.registration.scope)) return;
  e.respondWith((async () => {
    const cache = await caches.open(CACHE);
    const oud = await cache.match(PAGINA);
    if (oud) return oud;
    const r = await fetch(PAGINA, { cache: "no-cache" });
    if (r.ok) await cache.put(PAGINA, r.clone());
    return r;
  })());
});

// De pagina vraagt na het laden of er een nieuwe versie op de website staat.
self.addEventListener("message", e => {
  if (!e.data || e.data.type !== "controleer") return;
  e.waitUntil((async () => {
    const r = await fetch(PAGINA, { cache: "no-cache" });
    if (!r.ok) return;
    const cache = await caches.open(CACHE);
    const oud = await cache.match(PAGINA);
    const nieuw = await r.clone().text();
    const vorig = oud ? await oud.text() : null;
    if (nieuw === vorig) return;
    await cache.put(PAGINA, r);
    if (vorig !== null && e.source) e.source.postMessage({ type: "nieuwe-versie" });
  })().catch(() => { /* geen internet: later opnieuw */ }));
});
