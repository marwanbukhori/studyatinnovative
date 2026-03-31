/**
 * Unified tracking utility
 * Fires events to Meta Pixel + GA4 + TikTok Pixel
 * Captures and persists UTM parameters
 */

// Capture UTM params from URL on page load
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

// Get stored UTM data
export function getUTM() {
  try {
    const data = localStorage.getItem("utm_data");
    if (!data) return {};
    const utm = JSON.parse(data);
    // Expire after 30 days
    if (Date.now() - utm.timestamp > 30 * 24 * 60 * 60 * 1000) {
      localStorage.removeItem("utm_data");
      return {};
    }
    return utm;
  } catch {
    return {};
  }
}

// Append UTM params to a WhatsApp URL
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

// Unified event tracking across all platforms
export function trackEvent(eventName, params = {}) {
  const utm = getUTM();
  const enrichedParams = { ...params, ...utm };

  // Meta Pixel
  if (typeof fbq !== "undefined") {
    fbq("track", eventName, enrichedParams);
  }

  // Google Analytics 4
  if (typeof gtag !== "undefined") {
    gtag("event", eventName, enrichedParams);
  }

  // TikTok Pixel
  if (typeof ttq !== "undefined") {
    ttq.track(eventName, enrichedParams);
  }
}

// Specific tracking helpers
export function trackWhatsAppClick(context = "general") {
  trackEvent("Contact", {
    content_name: "WhatsApp",
    event_category: "engagement",
    event_label: "whatsapp_" + context,
  });
}

export function trackLead(source = "website") {
  trackEvent("Lead", {
    content_name: "DBA_ODL",
    source,
  });
}

export function trackFormOpen() {
  trackEvent("InitiateCheckout", {
    content_name: "ApplicationForm",
  });
}

// Auto-capture UTM on load
captureUTM();
