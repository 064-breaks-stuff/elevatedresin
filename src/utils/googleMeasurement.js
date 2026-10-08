const KEY = "erc-google-consent-v1";
const MAX_AGE = 180 * 24 * 60 * 60 * 1000;
const EVENT = "erc-google-consent-change";
let loaded = false;
let lastPage = null;
let lastLocation = null;

function readChoice() {
  try {
    const value = JSON.parse(localStorage.getItem(KEY));
    if (value && typeof value.accepted === "boolean" &&
        typeof value.savedAt === "number" &&
        Date.now() >= value.savedAt && Date.now() - value.savedAt < MAX_AGE) {
      return value.accepted;
    }
  } catch { /* Storage unavailable: start without optional tracking. */ }
  return null;
}

let choice = readChoice();
window.dataLayer = window.dataLayer || [];
window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };

function state(accepted) {
  return {
    analytics_storage: accepted ? "granted" : "denied",
    ad_storage: accepted ? "granted" : "denied",
    ad_user_data: accepted ? "granted" : "denied",
    ad_personalization: "denied"
  };
}

window.gtag("consent", "default", state(false));

function loadContainer() {
  if (loaded || choice !== true) return;
  if (!["elevatedresin.com", "www.elevatedresin.com"].includes(location.hostname)) return;
  loaded = true;
  window.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
  const script = document.createElement("script");
  script.async = true;
  script.src = "https://www.googletagmanager.com/gtm.js?id=GTM-PBHQ2CRM";
  document.head.appendChild(script);
}

if (choice === true) {
  window.gtag("consent", "update", state(true));
  loadContainer();
}

export function getConsentChoice() { return choice; }

export function subscribeConsent(callback) {
  window.addEventListener(EVENT, callback);
  return () => window.removeEventListener(EVENT, callback);
}

export function saveConsentChoice(accepted) {
  const revoking = loaded && !accepted;
  choice = accepted;
  try {
    localStorage.setItem(KEY, JSON.stringify({ accepted, savedAt: Date.now() }));
  } catch { /* Choice applies to this document if storage is unavailable. */ }
  window.gtag("consent", "update", state(accepted));
  window.dispatchEvent(new Event(EVENT));
  if (accepted) loadContainer();
  if (revoking) window.location.reload();
}

function cleanUrl(value) {
  try {
    const url = new URL(value);
    return url.origin + url.pathname;
  } catch { return ""; }
}

export function sendPageView(routeKey) {
  if (choice !== true || !loaded || lastPage === routeKey) return;
  const current = location.origin + location.pathname;
  const referrer = lastLocation || cleanUrl(document.referrer);
  lastPage = routeKey;
  lastLocation = current;
  window.dataLayer.push({
    event: "site_page_view",
    site_page_location: current,
    site_page_title: document.title,
    site_page_referrer: referrer
  });
}
