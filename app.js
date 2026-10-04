const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
const servicesNavItem = document.querySelector('.services-nav-item');
const servicesMenuToggle = document.querySelector('.services-menu-toggle');
const servicesMenu = document.querySelector('#services-menu');
const heroImages = [...document.querySelectorAll('.hero-visual .hero-image')];
const heroDots = [...document.querySelectorAll('.hero-dot')];
const heroContent = document.querySelector('.hero-content');
const heroEyebrow = document.querySelector('.hero-content .eyebrow [data-fr]');
const heroHeading = document.querySelector('.hero-content h1');
const heroLead = document.querySelector('.hero-content .hero-lead');
const heroNote = document.querySelector('.hero-content .hero-note span:last-child');
const heroSlides = [
  {
    eyebrow: ['FOURNISSEUR D’ACCÈS INTERNET · RDC', 'INTERNET SERVICE PROVIDER · DRC'],
    heading: ['Bienvenue chez<br><em>Nexora Technologie.</em>', 'Welcome to<br><em>Nexora Technologie.</em>'],
    lead: ['Internet haut débit et installations fiables, pensés pour les maisons, commerces et entreprises de Butembo et du Nord-Kivu.', 'High-speed internet and reliable installations for homes, businesses and organizations in Butembo and North Kivu.'],
    note: ['Votre connexion, notre priorité.', 'Your connection is our priority.']
  },
  {
    eyebrow: ['NEXORA TECHNOLOGIE', 'NEXORA TECHNOLOGIE'],
    heading: ['Votre<br><em>Nexora Technologie.</em>', 'Your<br><em>Nexora Technologie.</em>'],
    lead: ['Au cœur de Butembo, dans le Nord-Kivu, nous rapprochons les personnes et les idées grâce à une technologie accessible et un service de proximité.', 'In the heart of Butembo, North Kivu, we bring people and ideas closer with accessible technology and attentive local support.'],
    note: ['Ensemble, construisons votre connexion.', 'Let’s build your connection together.']
  },
  {
    eyebrow: ['FOURNISSEUR D’ACCÈS INTERNET · RDC', 'INTERNET SERVICE PROVIDER · DRC'],
    heading: ['La RDC mérite<br><em>d’être connectée.</em>', 'The DRC deserves<br><em>to be connected.</em>'],
    lead: ['Nexora Technologie vous accompagne avec des solutions Internet fiables, à la maison comme au travail.', 'Nexora Technologie brings reliable internet solutions to your home and workplace.'],
    note: ['Le haut débit, plus près de vous.', 'High-speed internet, closer to you.']
  },
  {
    eyebrow: ['INSTALLATION · CONFIGURATION · ASSISTANCE', 'INSTALLATION · SETUP · SUPPORT'],
    heading: ['Le bon signal,<br><em>au bon endroit.</em>', 'The right signal,<br><em>right where you need it.</em>'],
    lead: ['Starlink, LiteBeam, NanoStation ou Cambium : nos techniciens installent des équipements adaptés à votre terrain.', 'Starlink, LiteBeam, NanoStation or Cambium: our technicians install equipment suited to your site.'],
    note: ['Du matériel bien posé. Un réseau bien pensé.', 'Installed with care. Designed to perform.']
  },
  {
    eyebrow: ['CONNECTIVITÉ · RÉSEAUX · ÉNERGIE', 'CONNECTIVITY · NETWORKS · ENERGY'],
    heading: ['L’énergie avance.<br><em>Votre réseau aussi.</em>', 'Powering progress.<br><em>Keeping you connected.</em>'],
    lead: ['Internet, Wi-Fi et solutions solaires : équipez votre maison ou votre entreprise pour aller plus loin.', 'Internet, Wi-Fi and solar solutions: equip your home or business to go further.'],
    note: ['Connectés à votre avenir.', 'Connected to your future.']
  },
  {
    eyebrow: ['NEXORA · AU CŒUR DU NORD-KIVU', 'NEXORA · AT THE HEART OF NORTH KIVU'],
    heading: ['La connexion qui<br><em>nous rapproche.</em>', 'Connectivity that<br><em>brings us closer.</em>'],
    lead: ['Des solutions Internet et réseau pensées pour les habitants et les entreprises de Butembo.', 'Internet and networking solutions designed for the people and businesses of Butembo.'],
    note: ['Ensemble, restons connectés.', 'Together, let’s stay connected.']
  }
];
let activeHeroSlide = 0;

function renderHeroSlide(index) {
  activeHeroSlide = index;
  const slide = heroSlides[index];
  const languageIndex = document.documentElement.lang === 'en' ? 1 : 0;
  [[heroEyebrow, slide.eyebrow], [heroHeading, slide.heading], [heroLead, slide.lead], [heroNote, slide.note]].forEach(([element, translations]) => {
    element.dataset.fr = translations[0];
    element.dataset.en = translations[1];
    element.innerHTML = translations[languageIndex];
  });
  heroImages.forEach((image, imageIndex) => {
    const isActive = imageIndex === index;
    if (isActive && !image.currentSrc && image.dataset.src) {
      image.src = image.dataset.src;
      delete image.dataset.src;
    }
    image.classList.toggle('is-active', isActive);
  });
  heroContent.classList.toggle('hero-welcome', index === 0);
  heroContent.classList.toggle('hero-brand-only', index === 1);
  heroContent.classList.remove('hero-copy-refresh');
  void heroContent.offsetWidth;
  heroContent.classList.add('hero-copy-refresh');
  heroDots.forEach((dot, dotIndex) => {
    const isActive = dotIndex === index;
    dot.classList.toggle('is-active', isActive);
    dot.setAttribute('aria-pressed', String(isActive));
  });
}

heroDots.forEach((dot, index) => dot.addEventListener('click', () => {
  renderHeroSlide(index);
  nextHeroChangeAt = Date.now() + heroSlideDuration;
  startHeroTimer();
}));

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let heroTimer;
const heroSlideDuration = 4000;
let nextHeroChangeAt = Date.now() + heroSlideDuration;

function startHeroTimer() {
  window.clearInterval(heroTimer);
  if (reduceMotion.matches) return;
  const now = Date.now();
  if (now >= nextHeroChangeAt) {
    const elapsedSlides = Math.floor((now - nextHeroChangeAt) / heroSlideDuration) + 1;
    renderHeroSlide((activeHeroSlide + elapsedSlides) % heroSlides.length);
    nextHeroChangeAt += elapsedSlides * heroSlideDuration;
  }
  if (document.hidden) return;
  heroTimer = window.setInterval(() => {
    const currentTime = Date.now();
    if (currentTime < nextHeroChangeAt) return;
    const elapsedSlides = Math.floor((currentTime - nextHeroChangeAt) / heroSlideDuration) + 1;
    renderHeroSlide((activeHeroSlide + elapsedSlides) % heroSlides.length);
    nextHeroChangeAt += elapsedSlides * heroSlideDuration;
  }, 250);
}

document.addEventListener('visibilitychange', startHeroTimer);
reduceMotion.addEventListener?.('change', startHeroTimer);
renderHeroSlide(0);
startHeroTimer();

menuToggle.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Ouvrir le menu' : 'Fermer le menu');
  mainNav.classList.toggle('open', !isOpen);
});

mainNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Ouvrir le menu');
  });
});

function setServicesMenuOpen(isOpen) {
  servicesMenuToggle.setAttribute('aria-expanded', String(isOpen));
  servicesMenu.hidden = !isOpen;
}

const servicesMenuCanHover = window.matchMedia('(hover: hover) and (pointer: fine)');

servicesNavItem.addEventListener('pointerenter', (event) => {
  if (servicesMenuCanHover.matches && event.pointerType !== 'touch') setServicesMenuOpen(true);
});

servicesNavItem.addEventListener('pointerleave', (event) => {
  if (servicesMenuCanHover.matches && event.pointerType !== 'touch') setServicesMenuOpen(false);
});

servicesNavItem.addEventListener('focusout', (event) => {
  if (!servicesNavItem.contains(event.relatedTarget)) setServicesMenuOpen(false);
});

servicesMenuToggle.addEventListener('click', (event) => {
  if (servicesMenuCanHover.matches && event.detail !== 0) return;
  setServicesMenuOpen(servicesMenuToggle.getAttribute('aria-expanded') !== 'true');
});

document.addEventListener('click', (event) => {
  if (!event.target.closest('.services-nav-item')) setServicesMenuOpen(false);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') setServicesMenuOpen(false);
});

servicesMenu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    setServicesMenuOpen(false);
    mainNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Ouvrir le menu');
  });
});

document.querySelectorAll('.lang-btn').forEach((button) => {
  button.addEventListener('click', () => {
    const language = button.dataset.lang;
    document.documentElement.lang = language;
    document.querySelectorAll('[data-fr][data-en]').forEach((element) => {
      const translation = element.dataset[language];
      if (translation !== undefined) element.innerHTML = translation;
    });
    document.querySelectorAll('.lang-btn').forEach((option) => {
      const active = option === button;
      option.classList.toggle('active', active);
      option.setAttribute('aria-pressed', String(active));
    });
    renderHeroSlide(activeHeroSlide);
  });
});

document.querySelector('#year').textContent = new Date().getFullYear();
