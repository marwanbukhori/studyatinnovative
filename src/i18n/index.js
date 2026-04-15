import { createI18n } from "vue-i18n";

export const messages = {
  en: {
    nav: {
      home: "Home",
      course: "Course Details",
      apply: "Apply Now",
      faq: "FAQ",
    },
    hero: {
      badge_title: "MQA Accredited Program",
      title_1: "Get Your Diploma",
      title_2: "While You Work",
      subtitle: "Diploma in Business Administration (ODL)",
      description:
        "No need to quit your job. Study online, at your own pace, and graduate with an MQA-accredited diploma.",
      offer_badge: "Promotional Price — Limited Spots",
      offer_installment: "Or as low as",
      offer_installment_price: "RM500/month",
      offer_kwsp: "KWSP Withdrawal Eligible",
      offer_materials: "All Study Materials Included",
      offer_flexible: "Flexible Self-Paced Learning",
      cta_whatsapp: "Contact Us on WhatsApp",
      cta_learn: "Learn More",
    },
    carousel: {
      title: "Experience Modern Learning",
      subtitle:
        "Discover our state-of-the-art facilities, online learning platform and convocations",
      slide1_title: "Modern Campus",
      slide1_desc:
        "State-of-the-art facilities designed for contemporary learning",
      slide2_title: "Graduation Ceremony",
      slide2_desc: "Celebrating our students' achievements and success",
      slide3_title: "Student Life",
      slide3_desc: "Vibrant campus community and student activities",
    },
    features: {
      title: "Why Choose Our Diploma?",
      subtitle: "Accredited, flexible, and designed for working professionals",
      mqa_title: "MQA Accredited Program",
      mqa_desc:
        "Fully accredited by MQA — KPT/JPS (R3/345/4/0866)(A5791). 90 credits. Recognized for career advancement. Registration: DKU054(B).",
      flexible_title: "Flexible Learning",
      flexible_desc:
        "Study at your own pace with our Online Distance Learning (ODL) format. Perfect for working adults.",
      affordable_title: "Affordable Fees",
      affordable_desc:
        "Promotional price RM5,000 or as low as RM500/month. KWSP withdrawal accepted. Scholarships available for B40 students.",
    },
    trust: {
      students: "Active Students",
      convocations: "Convocations",
      faculties: "Faculties",
      credits: "Credits",
      partners: "Collaboration & Partnerships",
    },
    testimonials: {
      title: "What Our Students Say",
      subtitle: "Real experiences from Innovative University College students",
    },
    payment: {
      title: "Flexible Payment Options",
      subtitle: "Choose the payment method that suits you",
      installment: "Monthly Installment",
      installment_amount: "RM500",
      installment_per: "/month",
      installment_desc: "Easy monthly payments",
      kwsp: "KWSP Withdrawal",
      kwsp_amount: "RM5,000",
      kwsp_desc:
        "Use your KWSP/EPF savings — we'll guide the withdrawal process",
      full: "Full Payment",
      full_amount: "RM5,000",
      full_desc: "Pay once, start learning immediately",
      popular: "Popular",
      cta: "Contact Us for More Info",
    },
    course: {
      title: "Diploma in Business Administration (ODL)",
      subtitle: "Comprehensive Program Overview",
      about_title: "About This Program",
      about_desc:
        "The Diploma in Business Administration (ODL) is designed for working professionals who want to advance their careers. Learners engage through online discussion threads and participate in synchronous and asynchronous meetings with lecturers — study at your own pace, from anywhere.",
      highlight_mqa: "Fully Accredited by Malaysian Qualifications Agency (MQA)",
      highlight_mqa_num: "MQA/FA: KPT/JPS (R3/345/4/0866)(A5791)",
      highlight_online: "100% Online Distance Learning Format",
      highlight_industry: "Industry-Relevant Curriculum",
      highlight_kwsp: "KWSP Withdrawal Eligible",
      subjects_title: "Key Subjects",
      foundation: "Foundation",
      core: "Core Business",
      specialized: "Specialized",
      admission_title: "Admission Requirements",
      admission_academic: "Academic Qualifications",
      admission_spm: "SPM with minimum 3 credits OR equivalent recognized by Government of Malaysia",
      admission_cc: "Community College Certificate + SPM with at least 1 credit in the same field",
      admission_bridging: "Bridging programs available for skills-to-academic transition",
      admission_docs: "Documents: Copy of IC, SPM/O-Level certificate, passport photos",
    },
    modules: {
      title: "Course Modules & Career Outcomes",
      subtitle: "Industry-relevant curriculum designed for real-world application",
      overview: "Program Overview",
      diploma: "Diploma Level",
      years: "Years",
      credits: "Credits",
      online: "Online",
      key_modules: "Key Modules",
      careers: "Career Opportunities",
    },
    apply: {
      title: "Ready to Start Your Journey?",
      subtitle: "Take the first step towards your diploma today",
      contact: "Or contact us directly:",
      whatsapp: "WhatsApp",
      form_title: "Application Form",
      form_desc: "Fill out our short application form. We'll contact you within 24 hours.",
      form_btn: "Open Application Form",
    },
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "Everything you need to know about our program",
      items: [
        { q: "Is this diploma recognized?", a: "Yes. Our Diploma in Business Administration is fully accredited by the Malaysian Qualifications Agency (MQA) with registration number KPT/JPS (R3/345/4/0866)(A5791). Innovative University College is registered as DKU054(B)." },
        { q: "Can I study while working?", a: "Absolutely. Our ODL format uses synchronous and asynchronous meetings with lecturers, plus online discussion threads. Study at your own pace, from anywhere." },
        { q: "What are the payment options?", a: "You can pay the full fee of RM5,000 upfront, pay in installments of RM500/month, or use your KWSP (EPF) savings. Contact us on WhatsApp for details." },
        { q: "What are the study hours?", a: "Fully flexible. Access learning materials 24/7 through our online platform. Attend live sessions or watch recordings at your convenience. 100% online — no physical attendance required." },
        { q: "Is there a pathway to a degree?", a: "Yes. Upon completing the Diploma, you can progress to the Bachelor of Business Administration (Honours) at Innovative University College, or apply to other universities including UUM." },
        { q: "When can I start?", a: "Multiple intakes are available throughout the year. We recommend applying at least one month before the intake starts. Contact us on WhatsApp for the next intake date." },
        { q: "Are there scholarships available?", a: "Yes. We offer the Innovative Dihatiku scholarship and Yayasan Pendidikan Rakyat (YPR) scholarship for B40 students. Must maintain 2.00 CGPA." },
        { q: "How many students are enrolled?", a: "Innovative University College has 2,814 active students across 5 faculties with diploma, bachelor's, master's, and PhD programs. We have held 11 convocations." },
      ],
    },
    footer: {
      tagline: "Innovative University College — DKU054(B)",
      mqa: "MQA/FA: KPT/JPS (R3/345/4/0866)(A5791)",
      quick_links: "Quick Links",
      official_site: "Official Website",
      student_portal: "Student Portal",
      contact: "Contact Us",
      address:
        "Unit GL35, Main Lobby, Block C, Kelana Square, Jalan SS7/26, 47301 Petaling Jaya, Selangor",
      hours: "Mon-Fri: 9:00 AM – 6:00 PM",
      vc: "Vice Chancellor: Prof. Dr. Azri Bin Usman",
      copyright: "Innovative University College. All rights reserved.",
    },
    widget: {
      online: "Usually replies instantly",
      greeting:
        "Hi! 👋 Interested in the Diploma in Business Administration? Choose an option below or type your question.",
      btn_interest: "📚 I'm interested in the Diploma",
      btn_payment: "💰 Payment & KWSP info",
      btn_question: "❓ I have a question",
      prefill_interest:
        "Hi, I'm interested in the Diploma in Business Administration (ODL). Can you tell me more?",
      prefill_payment:
        "Hi, I'd like to know about payment options and KWSP withdrawal for the Diploma in Business Administration.",
      prefill_question:
        "Hi, I have a question about the Diploma in Business Administration (ODL).",
    },
  },
  ms: {
    nav: {
      home: "Utama",
      course: "Maklumat Kursus",
      apply: "Mohon Sekarang",
      faq: "Soalan Lazim",
    },
    hero: {
      badge_title: "Bertauliah MQA",
      title_1: "Dapat Diploma",
      title_2: "Sambil Bekerja",
      subtitle: "Diploma in Business Administration (ODL)",
      description:
        "Tak perlu berhenti kerja. Belajar dalam talian, ikut kadar sendiri, dan graduat dengan diploma bertauliah MQA.",
      offer_badge: "Harga Promosi — Tempat Terhad",
      offer_installment: "Atau serendah",
      offer_installment_price: "RM500/bulan",
      offer_kwsp: "Pengeluaran KWSP Diterima",
      offer_materials: "Semua Bahan Pengajian Termasuk",
      offer_flexible: "Pembelajaran Kendiri Fleksibel",
      cta_whatsapp: "Hubungi Kami di WhatsApp",
      cta_learn: "Ketahui Lebih Lanjut",
    },
    carousel: {
      title: "Alami Pembelajaran Moden",
      subtitle:
        "Terokai kemudahan terkini, platform pembelajaran dalam talian dan konvokesyen kami",
      slide1_title: "Kampus Moden",
      slide1_desc: "Kemudahan terkini direka untuk pembelajaran kontemporari",
      slide2_title: "Majlis Konvokesyen",
      slide2_desc: "Meraikan kejayaan dan pencapaian pelajar kami",
      slide3_title: "Kehidupan Pelajar",
      slide3_desc: "Komuniti kampus yang meriah dan aktiviti pelajar",
    },
    features: {
      title: "Kenapa Pilih Diploma Kami?",
      subtitle:
        "Bertauliah, fleksibel, dan direka khas untuk profesional bekerja",
      mqa_title: "Program Bertauliah MQA",
      mqa_desc:
        "Bertauliah sepenuhnya oleh MQA — KPT/JPS (R3/345/4/0866)(A5791). 90 kredit. Diiktiraf untuk kemajuan kerjaya. Pendaftaran: DKU054(B).",
      flexible_title: "Pembelajaran Fleksibel",
      flexible_desc:
        "Belajar mengikut kadar sendiri dengan format Pembelajaran Jarak Jauh (ODL). Sesuai untuk orang dewasa yang bekerja.",
      affordable_title: "Yuran Berpatutan",
      affordable_desc:
        "Harga promosi RM5,000 atau serendah RM500/bulan. Pengeluaran KWSP diterima. Biasiswa tersedia untuk pelajar B40.",
    },
    trust: {
      students: "Pelajar Aktif",
      convocations: "Konvokesyen",
      faculties: "Fakulti",
      // credits: "Kredit",
      partners: "Rakan Kerjasama & Kolaborasi",
    },
    testimonials: {
      title: "Apa Kata Pelajar Kami",
      subtitle:
        "Pengalaman sebenar daripada pelajar Innovative University College",
    },
    payment: {
      title: "Pilihan Pembayaran Fleksibel",
      subtitle: "Pilih cara bayaran yang sesuai untuk anda",
      installment: "Ansuran Bulanan",
      installment_amount: "RM500",
      installment_per: "/bulan",
      installment_desc: "Bayaran mudah secara bulanan",
      kwsp: "Pengeluaran KWSP",
      kwsp_amount: "RM5,000",
      kwsp_desc:
        "Guna simpanan KWSP/EPF anda — kami bantu proses pengeluaran",
      full: "Bayaran Penuh",
      full_amount: "RM5,000",
      full_desc: "Bayar sekali gus, terus mula belajar",
      popular: "Popular",
      cta: "Hubungi Kami untuk Maklumat Lanjut",
    },
    course: {
      title: "Diploma in Business Administration (ODL)",
      subtitle: "Gambaran Keseluruhan Program",
      about_title: "Tentang Program Ini",
      about_desc:
        "Diploma in Business Administration (ODL) direka khas untuk profesional bekerja yang ingin memajukan kerjaya mereka. Pelajar berinteraksi melalui perbincangan dalam talian dan menyertai sesi segerak dan tak segerak bersama pensyarah — belajar mengikut kadar sendiri, dari mana-mana sahaja.",
      highlight_mqa:
        "Bertauliah Sepenuhnya oleh Agensi Kelayakan Malaysia (MQA)",
      highlight_mqa_num: "MQA/FA: KPT/JPS (R3/345/4/0866)(A5791)",
      highlight_online: "100% Format Pembelajaran Jarak Jauh",
      highlight_industry: "Kurikulum Relevan Industri",
      highlight_kwsp: "Layak Pengeluaran KWSP",
      subjects_title: "Subjek Utama",
      foundation: "Asas",
      core: "Teras Perniagaan",
      specialized: "Pengkhususan",
      admission_title: "Syarat Kemasukan",
      admission_academic: "Kelayakan Akademik",
      admission_spm:
        "SPM dengan minimum 3 kredit ATAU kelayakan setara yang diiktiraf oleh Kerajaan Malaysia",
      admission_cc:
        "Sijil Kolej Komuniti + SPM dengan sekurang-kurangnya 1 kredit dalam bidang yang sama",
      admission_bridging:
        "Program bridging tersedia untuk peralihan kemahiran ke akademik",
      admission_docs: "Dokumen: Salinan IC, sijil SPM/O-Level, gambar pasport",
    },
    modules: {
      title: "Modul Kursus & Peluang Kerjaya",
      subtitle:
        "Kurikulum relevan industri direka untuk aplikasi dunia sebenar",
      overview: "Gambaran Program",
      diploma: "Tahap Diploma",
      years: "Tahun",
      credits: "Kredit",
      online: "Dalam Talian",
      key_modules: "Modul Utama",
      careers: "Peluang Kerjaya",
    },
    apply: {
      title: "Bersedia Memulakan Perjalanan Anda?",
      subtitle: "Ambil langkah pertama ke arah diploma anda hari ini",
      contact: "Atau hubungi kami terus:",
      whatsapp: "WhatsApp",
      form_title: "Borang Permohonan",
      form_desc: "Isi borang permohonan ringkas kami. Kami akan menghubungi anda dalam masa 24 jam.",
      form_btn: "Buka Borang Permohonan",
    },
    faq: {
      title: "Soalan Lazim",
      subtitle: "Semua yang perlu anda tahu tentang program kami",
      items: [
        { q: "Adakah diploma ini diiktiraf?", a: "Ya. Diploma in Business Administration kami bertauliah sepenuhnya oleh Agensi Kelayakan Malaysia (MQA) dengan nombor pendaftaran KPT/JPS (R3/345/4/0866)(A5791). Innovative University College berdaftar sebagai DKU054(B)." },
        { q: "Bolehkah saya belajar sambil bekerja?", a: "Sudah tentu. Format ODL kami menggunakan sesi segerak dan tak segerak bersama pensyarah, serta perbincangan dalam talian. Belajar mengikut kadar sendiri, dari mana-mana sahaja." },
        { q: "Apakah pilihan pembayaran?", a: "Anda boleh bayar penuh RM5,000, ansuran RM500/bulan, atau menggunakan simpanan KWSP/EPF. Hubungi kami di WhatsApp untuk maklumat lanjut." },
        { q: "Bagaimana waktu belajar?", a: "Sepenuhnya fleksibel. Akses bahan pembelajaran 24/7 melalui platform dalam talian kami. Hadir sesi langsung atau tonton rakaman mengikut keselesaan anda. 100% dalam talian — tiada kehadiran fizikal diperlukan." },
        { q: "Adakah laluan ke ijazah?", a: "Ya. Selepas melengkapkan Diploma, anda boleh meneruskan ke Sarjana Muda Pentadbiran Perniagaan (Kepujian) di Innovative University College, atau memohon ke universiti lain termasuk UUM." },
        { q: "Bilakah saya boleh mula?", a: "Pelbagai pengambilan tersedia sepanjang tahun. Kami mengesyorkan memohon sekurang-kurangnya sebulan sebelum pengambilan bermula. Hubungi kami di WhatsApp untuk tarikh pengambilan seterusnya." },
        { q: "Adakah biasiswa tersedia?", a: "Ya. Kami menawarkan biasiswa Innovative Dihatiku dan Yayasan Pendidikan Rakyat (YPR) untuk pelajar B40. Mesti mengekalkan CGPA minimum 2.00." },
        { q: "Berapa ramai pelajar yang mendaftar?", a: "Innovative University College mempunyai 2,814 pelajar aktif merangkumi 5 fakulti dengan program diploma, sarjana muda, sarjana, dan PhD. Kami telah mengadakan 11 konvokesyen." },
      ],
    },
    footer: {
      tagline: "Innovative University College — DKU054(B)",
      mqa: "MQA/FA: KPT/JPS (R3/345/4/0866)(A5791)",
      quick_links: "Pautan Pantas",
      official_site: "Laman Web Rasmi",
      student_portal: "Portal Pelajar",
      contact: "Hubungi Kami",
      address:
        "Unit GL35, Main Lobby, Block C, Kelana Square, Jalan SS7/26, 47301 Petaling Jaya, Selangor",
      hours: "Isnin-Jumaat: 9:00 PG – 6:00 PTG",
      vc: "Naib Canselor: Prof. Dr. Azri Bin Usman",
      copyright: "Innovative University College",
    },
    widget: {
      online: "Biasanya membalas serta-merta",
      greeting:
        "Hai! 👋 Berminat dengan Diploma in Business Administration? Pilih pilihan di bawah atau taip soalan anda.",
      btn_interest: "📚 Saya berminat dengan Diploma",
      btn_payment: "💰 Maklumat bayaran & KWSP",
      btn_question: "❓ Saya ada soalan",
      prefill_interest:
        "Hai, saya berminat dengan Diploma in Business Administration (ODL). Boleh beri maklumat lanjut?",
      prefill_payment:
        "Hai, saya ingin tahu tentang pilihan pembayaran dan pengeluaran KWSP untuk Diploma in Business Administration.",
      prefill_question:
        "Hai, saya ada soalan tentang Diploma in Business Administration (ODL).",
    },
  },
};

let savedLocale = null;
try {
  savedLocale = globalThis.localStorage?.getItem?.("locale") ?? null;
} catch {
  savedLocale = null;
}

const i18n = createI18n({
  legacy: false,
  locale: savedLocale || "ms",
  fallbackLocale: "en",
  messages,
});

export default i18n;
