import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { messages } from "./src/i18n/index.js";

const SITE_URL = "https://studyatinnovative.com";

function buildStructuredData() {
  const org = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": `${SITE_URL}/#organization`,
    name: "Innovative University College",
    alternateName: "Study At Innovative",
    url: SITE_URL,
    logo: `${SITE_URL}/assets/innovative.png`,
    image: `${SITE_URL}/assets/innovative.png`,
    description:
      "MQA-accredited Malaysian private university college offering diploma, bachelor's, master's, and PhD programs online and on-campus.",
    telephone: "+60-11-5981-6620",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Unit GL35, Main Lobby, Block C, Kelana Square, Jalan SS7/26",
      addressLocality: "Petaling Jaya",
      addressRegion: "Selangor",
      postalCode: "47301",
      addressCountry: "MY",
    },
    areaServed: {
      "@type": "Country",
      name: "Malaysia",
    },
    identifier: "DKU054(B)",
  };

  const course = {
    "@context": "https://schema.org",
    "@type": "Course",
    "@id": `${SITE_URL}/#course`,
    name: "Diploma in Business Administration (ODL)",
    description:
      "MQA-accredited online Diploma in Business Administration. 2.5 years, 90 credits, KWSP eligible. Study 100% online from anywhere in Malaysia.",
    provider: { "@id": `${SITE_URL}/#organization` },
    educationalCredentialAwarded: "Diploma in Business Administration",
    inLanguage: ["en-MY", "ms-MY"],
    courseCode: "KPT/JPS (R3/345/4/0866)(A5791)",
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "Online",
      courseWorkload: "P2Y6M",
      inLanguage: ["en-MY", "ms-MY"],
    },
    offers: {
      "@type": "Offer",
      price: "5000",
      priceCurrency: "MYR",
      category: "Tuition",
      url: SITE_URL,
      availability: "https://schema.org/InStock",
    },
  };

  const faqItems = messages.en.faq.items.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  }));
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE_URL}/#faq`,
    mainEntity: faqItems,
  };

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Diploma in Business Administration (ODL)",
        item: `${SITE_URL}/#course`,
      },
    ],
  };

  const blocks = [org, course, faq, breadcrumbs]
    .map(
      (d) =>
        `<script type="application/ld+json">${JSON.stringify(d)}</script>`
    )
    .join("\n    ");
  return `    ${blocks}`;
}

function seoStructuredData() {
  return {
    name: "seo-structured-data",
    transformIndexHtml(html) {
      return html.replace("<!-- __JSON_LD__ -->", buildStructuredData());
    },
  };
}

export default defineConfig({
  plugins: [vue(), seoStructuredData()],
  server: {
    port: 3000,
    open: true,
  },
});
