/* ============================================================
   TONI&GUY Essensuals Perundurai — script.js
   ============================================================ */

/* ------ Scroll-Reveal for offer cards ------ */
const revealCards = document.querySelectorAll('.offer-card');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealCards.forEach((card) => revealObserver.observe(card));

/* ------ Navbar shadow on scroll ------ */
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    navbar.style.boxShadow = '0 4px 24px rgba(0,0,0,0.6)';
  } else {
    navbar.style.boxShadow = 'none';
  }
}, { passive: true });

/* ------ Sticky CTA hide/show on map section ------ */
const stickyCta = document.querySelector('.sticky-cta');
const mapSection = document.querySelector('.map-section');

if (stickyCta && mapSection) {
  const ctaObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        stickyCta.style.opacity = entry.isIntersecting ? '0' : '1';
        stickyCta.style.pointerEvents = entry.isIntersecting ? 'none' : 'auto';
      });
    },
    { threshold: 0.5 }
  );
  ctaObserver.observe(document.querySelector('.booking-section'));
}

/* ------ Smooth transition for sticky CTA ------ */
if (stickyCta) {
  stickyCta.style.transition = 'opacity 0.3s ease';
}
