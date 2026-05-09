// ── Preloader ─────────────────────────────────────────────────────────────────
window.addEventListener('load', () => {
  document.querySelector('.preloader').classList.add('opacity-0');
  setTimeout(() => {
    document.querySelector('.preloader').style.display = 'none';
  }, 1000);
});

// ── Navbar scroll shadow ──────────────────────────────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 10);
}, { passive: true });

// ── Mobile nav toggle ─────────────────────────────────────────────────────────
const navToggler = document.getElementById('nav-toggler');
const navMenu    = document.getElementById('nav-menu');

navToggler.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('open');
  navToggler.classList.toggle('open', isOpen);
  navToggler.setAttribute('aria-expanded', isOpen);
});

document.addEventListener('click', e => {
  if (!navbar.contains(e.target)) {
    navMenu.classList.remove('open');
    navToggler.classList.remove('open');
    navToggler.setAttribute('aria-expanded', 'false');
  }
});

// ── Smooth scroll on nav link click ──────────────────────────────────────────
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    navMenu.classList.remove('open');
    navToggler.classList.remove('open');
    navToggler.setAttribute('aria-expanded', 'false');
    window.scrollTo({ top: target.offsetTop - navbar.offsetHeight - 10, behavior: 'smooth' });
  });
});

// ── Active nav link on scroll ─────────────────────────────────────────────────
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-link');

const navObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + id));
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => navObserver.observe(s));

// ── Section reveal (whole section fade-in) ────────────────────────────────────
const sectionRevealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      sectionRevealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.05 });

sections.forEach(s => sectionRevealObserver.observe(s));

// ── Scroll-to-top button ──────────────────────────────────────────────────────
const scrollTopBtn = document.getElementById('scroll-top');
window.addEventListener('scroll', () => {
  scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
}, { passive: true });
scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ── Element-level reveal (runs after renderer.js DOMContentLoaded) ────────────
// renderer.js registers its DOMContentLoaded listener first (it is loaded first),
// so this listener fires second — all dynamic elements are already in the DOM.
document.addEventListener('DOMContentLoaded', () => {
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // If a stat-item becomes visible, start its counter
        if (entry.target.classList.contains('stat-item')) {
          startStatCounters();
        }
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
});
