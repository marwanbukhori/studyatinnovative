<template>
  <div id="app">
    <!-- Navigation -->
    <nav class="navbar">
      <div class="nav-container">
        <div class="nav-brand">
          <a href="#">
            <img src="/assets/innovative.png" alt="Innovative University College" class="nav-logo" width="855" height="292" decoding="async" />
          </a>
        </div>
        <div class="nav-menu" :class="{ active: mobileMenuOpen }">
          <a href="#home" class="nav-link" @click="closeMobileMenu">{{ $t('nav.home') }}</a>
          <a href="#program" class="nav-link" @click="closeMobileMenu">{{ $t('nav.course') }}</a>
          <a href="#apply" class="nav-link" @click="closeMobileMenu">{{ $t('nav.apply') }}</a>
          <a href="#faq" class="nav-link" @click="closeMobileMenu">{{ $t('nav.faq') }}</a>
          <button class="lang-toggle" @click="toggleLocale">
            {{ $i18n.locale === 'ms' ? 'EN' : 'BM' }}
          </button>
        </div>
        <div class="mobile-menu-toggle" @click="toggleMobileMenu" aria-label="Menu" :aria-expanded="mobileMenuOpen ? 'true' : 'false'">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>

    <!-- HERO: Price-first, punchy, one clear CTA -->
    <section id="home" class="hero">
      <div class="hero-background"><div class="hero-overlay"></div></div>
      <div class="hero-container">
        <div class="hero-content">
          <div class="hero-brand">
            <img src="/assets/innovative.png" alt="Innovative University College" class="hero-logo" width="855" height="292" fetchpriority="high" decoding="async" />
            <div class="accreditation-badge">
              <span class="badge-icon">🎓</span>
              <div class="badge-content">
                <span class="badge-text">{{ $t('hero.badge_title') }}</span>
                <span class="badge-code">KPT/JPS (R3/345/4/0866)(A5791)</span>
              </div>
            </div>
          </div>

          <div class="hero-headline">
            <h1 class="hero-title">
              {{ $t('hero.title_1') }}
              <span class="title-highlight">{{ $t('hero.title_2') }}</span>
            </h1>
            <h2 class="hero-subtitle">{{ $t('hero.subtitle') }}</h2>
            <p class="hero-description">{{ $t('hero.description') }}</p>
          </div>

          <!-- Pricing card integrated into hero -->
          <div class="hero-pricing">
            <div class="pricing-main">
              <span class="pricing-label">{{ $t('hero.offer_badge') }}</span>
              <div class="pricing-row">
                <span class="pricing-current">RM5,000</span>
                <span class="pricing-original">RM30,000</span>
              </div>
              <p class="pricing-installment">{{ $t('hero.offer_installment') }} <strong>RM500{{ $t('hero.offer_installment_price').replace('RM500', '') }}</strong></p>
            </div>
            <div class="pricing-perks">
              <span>💰 {{ $t('hero.offer_kwsp') }}</span>
              <span>📚 {{ $t('hero.offer_materials') }}</span>
              <span>🎯 {{ $t('hero.offer_flexible') }}</span>
            </div>
          </div>

          <div class="hero-actions">
            <a
              href="https://wa.me/601159816620?text=I'm%20interested%20in%20the%20Diploma%20in%20Business%20Administration%20course"
              class="btn-whatsapp"
              target="_blank"
              @click="trackWhatsAppClick"
            >
              <svg class="btn-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
              </svg>
              {{ $t('hero.cta_whatsapp') }}
            </a>
            <a href="#program" class="btn-secondary">
              <span>{{ $t('hero.cta_learn') }}</span>
              <svg class="btn-arrow" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13 3l7 7-7 7M7 10h11" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- SOCIAL PROOF BAR: Numbers + Partners -->
    <section class="trust-section">
      <div class="container">
        <div class="trust-stats">
          <div class="trust-stat">
            <div class="trust-number">2,814</div>
            <div class="trust-label">{{ $t('trust.students') }}</div>
          </div>
          <div class="trust-stat">
            <div class="trust-number">11</div>
            <div class="trust-label">{{ $t('trust.convocations') }}</div>
          </div>
          <div class="trust-stat">
            <div class="trust-number">5</div>
            <div class="trust-label">{{ $t('trust.faculties') }}</div>
          </div>
        </div>
        <div class="partners-strip">
          <p class="partners-title">{{ $t('trust.partners') }}</p>
          <div class="partners-logos">
            <div class="partner-item">
              <img src="/assets/partners/yeg.webp" alt="YEG — Young Entrepreneurs Group partner logo" width="2048" height="654" loading="lazy" decoding="async" />
            </div>
            <div class="partner-item">
              <img src="/assets/partners/richworks.jpg" alt="Richworks partner logo" width="2560" height="1235" loading="lazy" decoding="async" />
            </div>
            <div class="partner-item">
              <img src="/assets/partners/seg.png" alt="SEG — Sunway Education Group partner logo" width="400" height="191" loading="lazy" decoding="async" />
            </div>
            <div class="partner-item">
              <img src="/assets/partners/ismsa.webp" alt="ISM Shah Alam partner logo" width="768" height="245" loading="lazy" decoding="async" />
            </div>
            <div class="partner-item">
              <img src="/assets/partners/ypr.jpeg" alt="Yayasan Pendidikan Rakyat (YPR) partner logo" width="900" height="900" loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- WHY CHOOSE US: 3 value props -->
    <section class="features-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">{{ $t('features.title') }}</h2>
          <p class="section-subtitle">{{ $t('features.subtitle') }}</p>
        </div>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3L1 9l11 6 9-4.91V17h2V9M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82Z" /></svg>
            </div>
            <h3>{{ $t('features.mqa_title') }}</h3>
            <p>{{ $t('features.mqa_desc') }}</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" /></svg>
            </div>
            <h3>{{ $t('features.flexible_title') }}</h3>
            <p>{{ $t('features.flexible_desc') }}</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" /></svg>
            </div>
            <h3>{{ $t('features.affordable_title') }}</h3>
            <p>{{ $t('features.affordable_desc') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- TESTIMONIALS -->
    <section class="testimonials-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">{{ $t('testimonials.title') }}</h2>
          <p class="section-subtitle">{{ $t('testimonials.subtitle') }}</p>
        </div>
        <div class="testimonials-grid">
          <div class="testimonial-card" v-for="(t, index) in testimonials" :key="index">
            <div class="testimonial-stars">
              <span v-for="s in t.rating" :key="s">&#9733;</span>
            </div>
            <p class="testimonial-quote">"{{ t.quote }}"</p>
            <div class="testimonial-author">
              <div class="author-info">
                <h4>{{ t.name }}</h4>
                <p>{{ t.role }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- PROGRAM DETAILS: Combined into one clean section -->
    <section id="program" class="program-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">{{ $t('course.title') }}</h2>
          <p class="section-subtitle">{{ $t('course.subtitle') }}</p>
        </div>

        <!-- Program stats row -->
        <div class="program-stats">
          <div class="p-stat">
            <div class="p-stat-value">2.5</div>
            <div class="p-stat-label">{{ $t('modules.years') }}</div>
          </div>
          <div class="p-stat">
            <div class="p-stat-value">90</div>
            <div class="p-stat-label">{{ $t('modules.credits') }}</div>
          </div>
          <div class="p-stat">
            <div class="p-stat-value">100%</div>
            <div class="p-stat-label">{{ $t('modules.online') }}</div>
          </div>
          <div class="p-stat">
            <div class="p-stat-value">32</div>
            <div class="p-stat-label">Subjects</div>
          </div>
        </div>

        <!-- About + highlights -->
        <div class="program-about">
          <div class="program-text">
            <p>{{ $t('course.about_desc') }}</p>
            <div class="program-highlights">
              <div class="highlight-item">
                <span class="highlight-icon">🎓</span>
                <span>{{ $t('course.highlight_mqa') }}</span>
              </div>
              <div class="highlight-item">
                <span class="highlight-icon">📋</span>
                <span>{{ $t('course.highlight_mqa_num') }}</span>
              </div>
              <div class="highlight-item">
                <span class="highlight-icon">🌐</span>
                <span>{{ $t('course.highlight_online') }}</span>
              </div>
              <div class="highlight-item">
                <span class="highlight-icon">💼</span>
                <span>{{ $t('course.highlight_industry') }}</span>
              </div>
              <div class="highlight-item">
                <span class="highlight-icon">💰</span>
                <span>{{ $t('course.highlight_kwsp') }}</span>
              </div>
            </div>
          </div>
          <div class="program-image">
            <img src="/assets/convocation.webp" alt="Innovative University College convocation ceremony graduates" width="2560" height="1437" loading="lazy" decoding="async" />
          </div>
        </div>

        <!-- Curriculum tabs -->
        <div class="curriculum-section">
          <h3>{{ $t('course.subjects_title') }}</h3>
          <div class="curriculum-grid">
            <div class="curriculum-card">
              <h4>{{ $t('course.foundation') }}</h4>
              <ul>
                <li>Principles of Management</li>
                <li>Business Mathematics</li>
                <li>Introduction to Economics</li>
                <li>Business Communication</li>
              </ul>
            </div>
            <div class="curriculum-card">
              <h4>{{ $t('course.core') }}</h4>
              <ul>
                <li>Marketing Management</li>
                <li>Human Resource Management</li>
                <li>Financial Management</li>
                <li>Operations Management</li>
              </ul>
            </div>
            <div class="curriculum-card">
              <h4>{{ $t('course.specialized') }}</h4>
              <ul>
                <li>Strategic Management</li>
                <li>Entrepreneurship</li>
                <li>E-Commerce</li>
                <li>International Business</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Career outcomes as compact list -->
        <div class="careers-section">
          <h3>{{ $t('modules.careers') }}</h3>
          <div class="careers-grid">
            <div class="career-chip" v-for="career in careers" :key="career.title">
              <span class="career-emoji">{{ career.icon }}</span>
              <div>
                <strong>{{ career.title }}</strong>
                <p>{{ career.desc }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Admission -->
        <div class="admission-section">
          <h3>{{ $t('course.admission_title') }}</h3>
          <div class="admission-cards">
            <div class="admission-card">
              <div class="admission-icon">📝</div>
              <p>{{ $t('course.admission_spm') }}</p>
            </div>
            <div class="admission-card">
              <div class="admission-icon">📜</div>
              <p>{{ $t('course.admission_cc') }}</p>
            </div>
            <div class="admission-card">
              <div class="admission-icon">🔗</div>
              <p>{{ $t('course.admission_bridging') }}</p>
            </div>
            <div class="admission-card">
              <div class="admission-icon">📄</div>
              <p>{{ $t('course.admission_docs') }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- PAYMENT OPTIONS -->
    <section class="payment-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">{{ $t('payment.title') }}</h2>
          <p class="section-subtitle">{{ $t('payment.subtitle') }}</p>
        </div>
        <div class="payment-grid">
          <div class="payment-card">
            <div class="payment-icon">💰</div>
            <h3>{{ $t('payment.installment') }}</h3>
            <div class="payment-amount">{{ $t('payment.installment_amount') }}<span>{{ $t('payment.installment_per') }}</span></div>
            <p>{{ $t('payment.installment_desc') }}</p>
          </div>
          <div class="payment-card featured">
            <div class="payment-badge">{{ $t('payment.popular') }}</div>
            <div class="payment-icon">🏦</div>
            <h3>{{ $t('payment.kwsp') }}</h3>
            <div class="payment-amount">{{ $t('payment.kwsp_amount') }}</div>
            <p>{{ $t('payment.kwsp_desc') }}</p>
          </div>
          <div class="payment-card">
            <div class="payment-icon">✅</div>
            <h3>{{ $t('payment.full') }}</h3>
            <div class="payment-amount">{{ $t('payment.full_amount') }}</div>
            <p>{{ $t('payment.full_desc') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- APPLY: Simplified — WhatsApp first, form second -->
    <section id="apply" class="apply-section">
      <div class="container">
        <div class="apply-content">
          <div class="apply-main">
            <h2>{{ $t('apply.title') }}</h2>
            <p class="apply-subtitle">{{ $t('apply.subtitle') }}</p>
            <a
              href="https://wa.me/601159816620?text=I'm%20interested%20in%20the%20Diploma%20in%20Business%20Administration%20course"
              class="btn-whatsapp btn-whatsapp-lg"
              target="_blank"
              @click="trackWhatsAppClick"
            >
              <svg class="btn-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
              </svg>
              {{ $t('hero.cta_whatsapp') }}
            </a>
            <p class="apply-or">{{ $t('apply.contact') }}</p>
            <div class="apply-contacts">
              <a href="tel:+60327262436">📞 +603-2726 2436</a>
              <a href="mailto:info@innovative.edu.my">✉️ info@innovative.edu.my</a>
            </div>
          </div>
          <div class="apply-form-alt">
            <div class="apply-form-card">
              <div class="apply-form-icon">📝</div>
              <h3>{{ $t('apply.form_title') }}</h3>
              <p>{{ $t('apply.form_desc') }}</p>
              <a
                href="https://forms.gle/KfWBWcRkXRZyxq8k7"
                class="btn-primary"
                target="_blank"
              >
                {{ $t('apply.form_btn') }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section id="faq" class="faq-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">{{ $t('faq.title') }}</h2>
          <p class="section-subtitle">{{ $t('faq.subtitle') }}</p>
        </div>
        <div class="faq-list">
          <div
            class="faq-item"
            v-for="(faq, index) in faqItems"
            :key="index"
            :class="{ open: faq.isOpen }"
            @click="toggleFaq(index)"
            role="button"
            tabindex="0"
            @keydown.enter="toggleFaq(index)"
            @keydown.space.prevent="toggleFaq(index)"
          >
            <div class="faq-question">
              <h4>{{ faq.question }}</h4>
              <svg class="faq-icon" :class="{ rotated: faq.isOpen }" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
              </svg>
            </div>
            <div class="faq-answer" :class="{ open: faq.isOpen }">
              <p>{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-brand">
            <img src="/assets/innovative.png" alt="Innovative University College" class="footer-logo" width="855" height="292" loading="lazy" decoding="async" />
            <p>{{ $t('footer.tagline') }}</p>
            <p class="footer-mqa">{{ $t('footer.mqa') }}</p>
            <p class="footer-vc">{{ $t('footer.vc') }}</p>
          </div>
          <div class="footer-links">
            <h4>{{ $t('footer.quick_links') }}</h4>
            <a href="#home">{{ $t('nav.home') }}</a>
            <a href="#program">{{ $t('nav.course') }}</a>
            <a href="#apply">{{ $t('nav.apply') }}</a>
            <a href="#faq">{{ $t('nav.faq') }}</a>
            <a href="https://innovative.edu.my" target="_blank" rel="noopener">{{ $t('footer.official_site') }}</a>
            <a href="https://innovative.vialing.com/sp/login" target="_blank" rel="noopener">{{ $t('footer.student_portal') }}</a>
          </div>
          <div class="footer-contact">
            <h4>{{ $t('footer.contact') }}</h4>
            <p><a href="https://wa.me/601159816620">WhatsApp: +6011-5981 6620</a></p>
            <p><a href="tel:+60327262436">Office: +603-2726 2436</a></p>
            <p><a href="mailto:info@innovative.edu.my">info@innovative.edu.my</a></p>
            <p class="footer-address">{{ $t('footer.address') }}</p>
            <p class="footer-hours">{{ $t('footer.hours') }}</p>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; {{ new Date().getFullYear() }} {{ $t('footer.copyright') }}</p>
        </div>
      </div>
    </footer>

    <WhatsAppWidget />
  </div>
</template>

<script>
import WhatsAppWidget from "./components/WhatsAppWidget.vue";

export default {
  components: { WhatsAppWidget },
  name: "App",
  data() {
    return {
      mobileMenuOpen: false,
      testimonials: [
        {
          name: "Ahmad Razif",
          quote: "Saya boleh belajar sambil bekerja sepenuh masa. Format ODL sangat fleksibel dan sesuai untuk orang dewasa yang bekerja.",
          role: "Executive, Petaling Jaya",
          rating: 5,
        },
        {
          name: "Nurul Aisyah",
          quote: "Proses pengeluaran KWSP sangat mudah dengan bantuan pihak kolej. Yuran RM5,000 sangat berpatutan untuk diploma bertauliah MQA.",
          role: "Admin Officer, Shah Alam",
          rating: 5,
        },
        {
          name: "Muhammad Faiz",
          quote: "Lepas habis diploma, saya terus sambung Bachelor di Innovative. Kini saya sudah naik pangkat di tempat kerja.",
          role: "HR Executive, Kuala Lumpur",
          rating: 5,
        },
      ],
      careers: [
        { icon: "💼", title: "Business Development Executive", desc: "Drive business growth and partnerships" },
        { icon: "📊", title: "Marketing Coordinator", desc: "Execute marketing campaigns" },
        { icon: "👥", title: "HR Manager", desc: "Manage human resources" },
        { icon: "🏢", title: "Administrative Manager", desc: "Oversee operations" },
        { icon: "📞", title: "Sales Representative", desc: "Build client relationships" },
        { icon: "⚙️", title: "Operations Coordinator", desc: "Streamline business processes" },
        { icon: "🎧", title: "Customer Service Manager", desc: "Lead service teams" },
        { icon: "🎓", title: "Pathway to Degree", desc: "Continue to bachelor's" },
      ],
      faqOpen: [false, false, false, false, false, false, false, false],
    };
  },
  computed: {
    faqItems() {
      return Array.from({ length: 8 }, (_, i) => ({
        question: this.$t(`faq.items[${i}].q`),
        answer: this.$t(`faq.items[${i}].a`),
        isOpen: this.faqOpen[i],
      }));
    },
  },
  methods: {
    toggleFaq(index) {
      this.faqOpen[index] = !this.faqOpen[index];
    },
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
    },
    closeMobileMenu() {
      this.mobileMenuOpen = false;
    },
    toggleLocale() {
      const newLocale = this.$i18n.locale === "ms" ? "en" : "ms";
      this.$i18n.locale = newLocale;
      localStorage.setItem("locale", newLocale);
    },
    trackWhatsAppClick() {
      if (typeof fbq !== "undefined") fbq("track", "Contact");
      if (typeof gtag !== "undefined")
        gtag("event", "whatsapp_click", {
          event_category: "engagement",
          event_label: "whatsapp_cta",
        });
      if (typeof ttq !== "undefined") ttq.track("Contact");
    },
  },
};
</script>

<style scoped>
/* Styling in main.css */
</style>
