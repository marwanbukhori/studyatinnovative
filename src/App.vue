<template>
  <div id="app">
    <!-- Navigation -->
    <nav class="navbar">
      <div class="nav-container">
        <div class="nav-brand">
          <a href="#">
            <img
              src="/assets/innovative.png"
              alt="Innovative University College"
              class="nav-logo"
            />
          </a>
        </div>
        <div class="nav-menu" :class="{ active: mobileMenuOpen }">
          <a href="#home" class="nav-link" @click="closeMobileMenu">Home</a>

          <a href="#course-details" class="nav-link" @click="closeMobileMenu"
            >Course Details</a
          >
          <a href="#apply" class="nav-link" @click="closeMobileMenu"
            >Apply Now</a
          >
          <a href="#faq" class="nav-link" @click="closeMobileMenu">FAQ</a>
        </div>
        <div class="mobile-menu-toggle" @click="toggleMobileMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="hero">
      <div class="hero-background">
        <div class="hero-overlay"></div>
      </div>

      <div class="hero-container">
        <div class="hero-content">
          <!-- University Logo -->
          <div class="hero-brand">
            <img
              src="/assets/innovative.png"
              alt="Innovative University College"
              class="hero-logo"
            />
            <div class="accreditation-badge">
              <span class="badge-icon">🎓</span>
              <span class="badge-text">MQA Accredited Program</span>
            </div>
          </div>

          <!-- Main Headline -->
          <div class="hero-headline">
            <h1 class="hero-title">
              Launch Your
              <span class="title-highlight">Business Career</span>
            </h1>

            <h2 class="hero-subtitle">
              <a style="text-decoration: none" href="#course-details">
                Diploma in Business Administration (ODL)
              </a>
            </h2>

            <p class="hero-description">
              Study smart. Graduate faster. Advance your career with Malaysia's
              most flexible business program.
            </p>
          </div>

          <!-- Special Offer Banner -->
          <div class="offer-banner">
            <div class="offer-content">
              <div class="offer-badge">Limited Time Offer</div>
              <div class="offer-price">
                <span class="current-price">RM5,000</span>
                <span class="original-price">RM30,000</span>
                <span class="savings">Save 83%</span>
              </div>
              <div class="offer-features">
                <span>💰 KWSP Withdrawal Eligible</span>
                <span>📚 All Study Materials Included</span>
                <span>🎯 Personalized Learning Path</span>
              </div>
            </div>
          </div>

          <!-- CTA Buttons -->
          <div class="hero-actions">
            <a
              href="https://wa.me/60135961559?text=I'm%20interested%20in%20the%20Diploma%20in%20Business%20Administration%20course"
              class="btn-primary"
              target="_blank"
              @click="trackWhatsAppClick"
            >
              <svg class="btn-icon" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"
                />
              </svg>
              Book your seat
            </a>

            <a href="#course-details" class="btn-secondary">
              <span>Learn More</span>
              <svg class="btn-arrow" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13 3l7 7-7 7M7 10h11" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Image Carousel Section -->
    <section id="gallery" class="carousel-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Experience Modern Learning</h2>
          <p class="section-subtitle">
            Discover our state-of-the-art, facilities, online learning platform
            and convocations
          </p>
        </div>

        <div class="carousel-container">
          <div
            class="carousel-track"
            :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
          >
            <div
              v-for="(slide, index) in carouselSlides"
              :key="index"
              class="carousel-slide"
            >
              <div class="slide-content">
                <div class="slide-image">
                  <img :src="slide.image" :alt="slide.title" />
                </div>
                <div class="slide-info">
                  <h3>{{ slide.title }}</h3>
                  <p>{{ slide.description }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="carousel-controls">
            <button @click="prevSlide" class="carousel-btn carousel-prev">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
              </svg>
            </button>
            <button @click="nextSlide" class="carousel-btn carousel-next">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
              </svg>
            </button>
          </div>

          <div class="carousel-indicators">
            <span
              v-for="(slide, index) in carouselSlides"
              :key="index"
              :class="['indicator', { active: index === currentSlide }]"
              @click="goToSlide(index)"
            ></span>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Why Choose Our Diploma?</h2>
          <p class="section-subtitle">
            Accredited, flexible, and designed for working professionals
          </p>
        </div>

        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M12 3L1 9l11 6 9-4.91V17h2V9M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82Z"
                />
              </svg>
            </div>
            <h3>MQA Accredited Program</h3>
            <p>
              Fully accredited diploma program with 90 credits. Recognized
              qualification for career advancement.
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2M7.5 12.5v-1h9v1h-9Z"
                />
              </svg>
            </div>
            <h3>Flexible Learning</h3>
            <p>
              Study at your own pace with our Online Distance Learning (ODL)
              format. Perfect for working adults.
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M7 15h7v2H7zm0-4h10v2H7zm0-4h10v2H7zm12-4h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-.14 0-.27.01-.4.04-.39.08-.74.28-1.01.55-.18.18-.33.4-.43.64-.1.23-.16.49-.16.77v14c0 .27.06.54.16.78s.25.45.43.64c.27.27.62.47 1.01.55.13.02.26.03.4.03h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7-.25c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75z"
                />
              </svg>
            </div>
            <h3>Affordable Fees</h3>
            <p>
              Pay only RM5,000 (originally RM30,000). KWSP withdrawal eligible
              to ease your financial burden.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Course Details Section -->
    <section id="course-details" class="course-details-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">
            Diploma in Business Administration (ODL)
          </h2>
          <p class="section-subtitle">Comprehensive Program Overview</p>
        </div>

        <div class="course-overview">
          <div class="overview-content">
            <div class="overview-text">
              <h3>About This Program</h3>
              <p>
                The Diploma in Business Administration (ODL) is designed for
                working professionals who want to advance their careers while
                maintaining their current commitments. This comprehensive
                program covers all essential aspects of modern business
                management and administration.
              </p>
              <div class="program-highlights">
                <div class="highlight-item">
                  <span class="highlight-icon">🎓</span>
                  <span
                    >Fully Accredited by Malaysian Qualifications Agency
                    (MQA)</span
                  >
                </div>
                <div class="highlight-item">
                  <span class="highlight-icon">🌐</span>
                  <span>100% Online Distance Learning Format</span>
                </div>
                <div class="highlight-item">
                  <span class="highlight-icon">💼</span>
                  <span>Industry-Relevant Curriculum</span>
                </div>
                <div class="highlight-item">
                  <span class="highlight-icon">💰</span>
                  <span>KWSP Withdrawal Eligible</span>
                </div>
              </div>
            </div>
            <div class="overview-image">
              <img src="/assets/test.png" alt="Business students studying" />
            </div>
          </div>
        </div>

        <div class="curriculum-overview">
          <h3>Key Subjects</h3>
          <div class="subjects-grid">
            <div class="subject-category">
              <h4>Foundation</h4>
              <ul>
                <li>Principles of Management</li>
                <li>Business Mathematics</li>
                <li>Introduction to Economics</li>
                <li>Business Communication</li>
              </ul>
            </div>
            <div class="subject-category">
              <h4>Core Business</h4>
              <ul>
                <li>Marketing Management</li>
                <li>Human Resource Management</li>
                <li>Financial Management</li>
                <li>Operations Management</li>
              </ul>
            </div>
            <div class="subject-category">
              <h4>Specialized</h4>
              <ul>
                <li>Strategic Management</li>
                <li>Entrepreneurship</li>
                <li>E-Commerce</li>
                <li>Project Management</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- <div class="career-outcomes">
          <h3>Career Opportunities</h3>
          <div class="career-grid">
            <div class="career-item">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                alt="Business Manager"
              />
              <h4>Business Manager</h4>
              <p>Lead teams and drive organizational success</p>
            </div>
            <div class="career-item">
              <img
                src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                alt="Marketing Executive"
              />
              <h4>Marketing Executive</h4>
              <p>Develop and execute marketing strategies</p>
            </div>
            <div class="career-item">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                alt="HR Specialist"
              />
              <h4>HR Specialist</h4>
              <p>Manage human resources and talent development</p>
            </div>
            <div class="career-item">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                alt="Entrepreneur"
              />
              <h4>Entrepreneur</h4>
              <p>Start and grow your own business</p>
            </div>
          </div>
        </div> -->

        <div class="admission-info">
          <h3>Admission Requirements</h3>
          <div class="requirements-content">
            <div class="requirements-text">
              <h4>Academic Qualifications</h4>
              <ul>
                <li>SPM with minimum 3 credits OR</li>
                <li>O-Level with minimum 3 credits OR</li>
                <li>Certificate from Community College OR</li>
                <li>Any equivalent qualification recognized by MQA</li>
              </ul>
            </div>
            <div class="requirements-image">
              <img
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Graduation ceremony"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Course Details Section -->
    <section class="details-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Course Modules & Career Outcomes</h2>
          <p class="section-subtitle">
            Industry-relevant curriculum designed for real-world application
          </p>
        </div>

        <div class="details-content-wrapper">
          <!-- Program Overview Card -->
          <div class="program-overview-card">
            <div class="overview-header">
              <h3>Program Overview</h3>
              <div class="program-badge">Diploma Level</div>
            </div>
            <div class="overview-stats">
              <div class="stat-card">
                <div class="stat-icon">⏱️</div>
                <div class="stat-info">
                  <div class="stat-number">2.5</div>
                  <div class="stat-label">Years</div>
                </div>
              </div>
              <div class="stat-card">
                <div class="stat-icon">🎓</div>
                <div class="stat-info">
                  <div class="stat-number">90</div>
                  <div class="stat-label">Credits</div>
                </div>
              </div>
              <div class="stat-card">
                <div class="stat-icon">💻</div>
                <div class="stat-info">
                  <div class="stat-number">100%</div>
                  <div class="stat-label">Online</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Modules & Career Grid -->
          <div class="modules-career-grid">
            <!-- Key Modules -->
            <div class="modules-card">
              <div class="card-header">
                <div class="card-icon">📚</div>
                <h3>Key Modules</h3>
              </div>
              <div class="modules-list">
                <div class="module-item">
                  <div class="module-icon">💼</div>
                  <span>Business Management</span>
                </div>
                <div class="module-item">
                  <div class="module-icon">📈</div>
                  <span>Marketing Principles</span>
                </div>
                <div class="module-item">
                  <div class="module-icon">💰</div>
                  <span>Financial Accounting</span>
                </div>
                <div class="module-item">
                  <div class="module-icon">👥</div>
                  <span>Human Resource Management</span>
                </div>
                <div class="module-item">
                  <div class="module-icon">💬</div>
                  <span>Business Communication</span>
                </div>
                <div class="module-item">
                  <div class="module-icon">🚀</div>
                  <span>Entrepreneurship</span>
                </div>
                <div class="module-item">
                  <div class="module-icon">⚖️</div>
                  <span>Business Law</span>
                </div>
                <div class="module-item">
                  <div class="module-icon">🎯</div>
                  <span>Strategic Management</span>
                </div>
              </div>
            </div>

            <!-- Career Opportunities -->
            <div class="career-card">
              <div class="card-header">
                <div class="card-icon">🎯</div>
                <h3>Career Opportunities</h3>
              </div>
              <div class="career-list">
                <div class="career-item">
                  <div class="career-icon">💼</div>
                  <div class="career-info">
                    <h4>Business Development Executive</h4>
                    <p>Drive business growth and partnerships</p>
                  </div>
                </div>
                <div class="career-item">
                  <div class="career-icon">📊</div>
                  <div class="career-info">
                    <h4>Marketing Coordinator</h4>
                    <p>Execute marketing campaigns and strategies</p>
                  </div>
                </div>
                <div class="career-item">
                  <div class="career-icon">👥</div>
                  <div class="career-info">
                    <h4>HR Assistant</h4>
                    <p>Support human resource operations</p>
                  </div>
                </div>
                <div class="career-item">
                  <div class="career-icon">🏢</div>
                  <div class="career-info">
                    <h4>Administrative Manager</h4>
                    <p>Oversee administrative functions</p>
                  </div>
                </div>
                <div class="career-item">
                  <div class="career-icon">📞</div>
                  <div class="career-info">
                    <h4>Sales Representative</h4>
                    <p>Build client relationships and drive sales</p>
                  </div>
                </div>
                <div class="career-item">
                  <div class="career-icon">⚙️</div>
                  <div class="career-info">
                    <h4>Operations Coordinator</h4>
                    <p>Streamline business operations</p>
                  </div>
                </div>
                <div class="career-item">
                  <div class="career-icon">🎧</div>
                  <div class="career-info">
                    <h4>Customer Service Manager</h4>
                    <p>Lead customer service teams</p>
                  </div>
                </div>
                <div class="career-item">
                  <div class="career-icon">🎓</div>
                  <div class="career-info">
                    <h4>Pathway to Degree Programs</h4>
                    <p>Continue to bachelor's degree</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Application Section -->
    <section id="apply" class="apply-section">
      <div class="container">
        <div class="apply-content">
          <div class="apply-header">
            <h2>Ready to Start Your Journey?</h2>
            <p>
              Complete the
              <a href="https://forms.gle/KfWBWcRkXRZyxq8k7">form below</a>
              and we'll contact you within 24 hours
            </p>
          </div>

          <div class="apply-form">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSd9nQ28V9p_xCF4areiyQOxSCtSLLzy3K9BG4vd6wBEnsY_LA/viewform?embedded=true"
              width="800"
              height="800"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
              >Loading…</iframe
            >
            <!-- <iframe
              src="https://forms.gle/Sbedwzju5mTeyL9FA"
              width="100%"
              height="600"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
            > -->
            <!-- Loading… -->
            <!-- </iframe> -->
          </div>

          <div class="apply-footer">
            <p>Or contact us directly:</p>
            <a
              href="https://wa.me/60135961559?text=I%20have%20questions%20about%20the%20Diploma%20in%20Business%20Administration"
              class="btn-primary"
              target="_blank"
              @click="trackWhatsAppClick"
            >
              <svg class="btn-icon" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"
                />
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section id="faq" class="faq-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Frequently Asked Questions</h2>
          <p class="section-subtitle">
            Everything you need to know about our program
          </p>
        </div>

        <div class="faq-grid">
          <div
            class="faq-item"
            v-for="(faq, index) in faqs"
            :key="index"
            @click="toggleFaq(index)"
          >
            <div class="faq-question">
              <h4>{{ faq.question }}</h4>
              <svg
                class="faq-icon"
                :class="{ rotated: faq.isOpen }"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"
                />
              </svg>
            </div>
            <div class="faq-answer" :class="{ open: faq.isOpen }">
              <p>{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-brand">
            <div>
              <img
                src="/assets/innovative.png"
                alt="Innovative University College"
                class="footer-logo"
              />

              <p>Transforming lives through quality education</p>
            </div>
          </div>
          <div class="footer-links">
            <a href="#home">Home</a>
            <a href="#course-details">Course Details</a>
            <a href="#apply">Apply Now</a>
            <a href="#faq">FAQ</a>
          </div>
          <div class="footer-contact">
            <p>Contact</p>
            <p>
              <a
                href="https://wa.me/60135961559?text=I'm%20interested%20in%20the%20Diploma%20in%20Business%20Administration%20course"
                >WhatsApp: +60135961559</a
              >
            </p>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; My with love, 2025</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      currentSlide: 0,
      mobileMenuOpen: false,
      carouselSlides: [
        {
          title: "Modern Campus",
          description:
            "State-of-the-art facilities designed for contemporary learning",
          image: "/assets/hq.jpg",
        },
        {
          title: "Graduation Ceremony",
          description: "Celebrating our students' achievements and success",
          image: "/assets/convocation.webp",
        },
        {
          title: "Student Life",
          description: "Vibrant campus community and student activities",
          image: "/assets/students.jpg",
        },
      ],
      faqs: [
        {
          question: "Is this diploma recognized?",
          answer:
            "Yes, our Diploma in Business Administration is fully accredited and recognized by relevant authorities.",
          isOpen: false,
        },
        {
          question: "Can I study while working?",
          answer:
            "Absolutely! Our ODL format is designed for working professionals. Study at your own pace and schedule.",
          isOpen: false,
        },
        {
          question: "How do I use KWSP for payment?",
          answer:
            "We'll guide you through the KWSP withdrawal process. Many students successfully use their KWSP savings.",
          isOpen: false,
        },
        {
          question: "What are the study hours?",
          answer:
            "Flexible study hours. You can study anytime, anywhere with our online platform.",
          isOpen: false,
        },
        {
          question: "Is there a pathway to degree?",
          answer:
            "Yes! This diploma provides a pathway to Bachelor's degree programs in Business Administration.",
          isOpen: false,
        },
        {
          question: "When can I start?",
          answer:
            "Intakes are available all year round. Contact us to secure your seat for the next intake.",
          isOpen: false,
        },
      ],
    };
  },
  mounted() {
    this.startCarousel();
  },
  methods: {
    startCarousel() {
      setInterval(() => {
        this.nextSlide();
      }, 5000);
    },
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.carouselSlides.length;
    },
    prevSlide() {
      this.currentSlide =
        this.currentSlide === 0
          ? this.carouselSlides.length - 1
          : this.currentSlide - 1;
    },
    goToSlide(index) {
      this.currentSlide = index;
    },
    toggleFaq(index) {
      this.faqs[index].isOpen = !this.faqs[index].isOpen;
    },
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
    },
    closeMobileMenu() {
      this.mobileMenuOpen = false;
    },
    trackWhatsAppClick() {
      // Track WhatsApp button clicks
      if (typeof fbq !== "undefined") {
        fbq("track", "Contact");
      }

      if (typeof gtag !== "undefined") {
        gtag("event", "whatsapp_click", {
          event_category: "engagement",
          event_label: "whatsapp_cta",
        });
      }
    },
  },
};
</script>

<style scoped>
/* Modern Apple-inspired styling will be in main.css */
</style>
