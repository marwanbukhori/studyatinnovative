/**
 * Unified tracking: Meta Pixel (browser) + Meta CAPI (server) + GA4 + TikTok.
 * Every event carries a UUID `event_id` so Pixel and CAPI deduplicate in Meta.
 */

const CAPI_ENDPOINT = "/api/meta-capi";

export function captureUTM() {
  const params = new URLSearchParams(window.location.search);
  const utmKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"];
  const utm = {};
  let hasUTM = false;
  utmKeys.forEach((key) => {
    const val = params.get(key);
    if (val) {
      utm[key] = val;
      hasUTM = true;
    }
  });
  if (hasUTM) {
    utm.timestamp = Date.now();
    localStorage.setItem("utm_data", JSON.stringify(utm));
  }
}

export function getUTM() {
  try {
    const data = localStorage.getItem("utm_data");
    if (!data) return {};
    const utm = JSON.parse(data);
    if (Date.now() - utm.timestamp > 30 * 24 * 60 * 60 * 1000) {
      localStorage.removeItem("utm_data");
      return {};
    }
    return utm;
  } catch {
    return {};
  }
}

export function appendUTMToWhatsApp(baseUrl) {
  const utm = getUTM();
  if (utm.utm_source) {
    const source = utm.utm_source;
    const campaign = utm.utm_campaign || "";
    const separator = baseUrl.includes("?text=") ? "%20" : "?text=";
    return `${baseUrl}${separator}[via ${source}${campaign ? "/" + campaign : ""}]`;
  }
  return baseUrl;
}

function readCookie(name) {
  const match = document.cookie.match(new RegExp("(?:^|; )" + name + "=([^;]*)"));
  return match ? decodeURIComponent(match[1]) : null;
}

function newEventId() {
  if (typeof crypto !== "undefined" && crypto.randomUUID) return crypto.randomUUID();
  return "evt_" + Date.now() + "_" + Math.random().toString(36).slice(2, 10);
}

function sendCAPI(eventName, eventId, customData) {
  try {
    const payload = {
      event_name: eventName,
      event_id: eventId,
      event_source_url: window.location.href,
      fbp: readCookie("_fbp"),
      fbc: readCookie("_fbc"),
      custom_data: customData,
    };
    fetch(CAPI_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      keepalive: true,
    }).catch(() => {});
  } catch {
    /* swallow — never break UX for tracking */
  }
}

export function trackEvent(eventName, params = {}) {
  const utm = getUTM();
  const enriched = { ...params, ...utm };
  const eventId = newEventId();

  if (typeof fbq !== "undefined") {
    fbq("track", eventName, enriched, { eventID: eventId });
  }
  sendCAPI(eventName, eventId, enriched);

  if (typeof gtag !== "undefined") gtag("event", eventName, enriched);
  if (typeof ttq !== "undefined") ttq.track(eventName, enriched);
}

export function trackWhatsAppClick(context = "general") {
  trackEvent("Lead", {
    content_name: "WhatsApp_DBA_ODL",
    channel: "whatsapp",
    context,
  });
}

export function trackFormClick(context = "apply_form") {
  trackEvent("Lead", {
    content_name: "GoogleForm_DBA_ODL",
    channel: "google_form",
    context,
  });
}

export function trackPhoneClick() {
  trackEvent("Contact", { content_name: "Phone", channel: "phone" });
}

export function trackEmailClick() {
  trackEvent("Contact", { content_name: "Email", channel: "email" });
}

export function setupViewContentTimer(delayMs = 30000) {
  let fired = false;
  const fire = () => {
    if (fired) return;
    fired = true;
    trackEvent("ViewContent", {
      content_name: "DBA_ODL_Landing",
      engagement: "30s_on_page",
    });
  };
  setTimeout(fire, delayMs);
  document.addEventListener(
    "visibilitychange",
    () => {
      if (document.visibilityState === "hidden") fire();
    },
    { once: true }
  );
}

captureUTM();
if (typeof window !== "undefined") {
  window.addEventListener("load", () => setupViewContentTimer(30000), { once: true });
}
