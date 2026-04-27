// Mobile nav toggle
const toggle = document.querySelector('.nav__toggle');
const links = document.querySelector('.nav__links');
toggle?.addEventListener('click', () => links.classList.toggle('is-open'));
links?.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => links.classList.remove('is-open'))
);

// Reveal on scroll
const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.style.opacity = 1;
            e.target.style.transform = 'translateY(0)';
            io.unobserve(e.target);
        }
    });
}, { threshold: 0.12 });

document.querySelectorAll('.pain-card, .tech-card, .benefit-card, .process-step, .pricing-card, .compare-col, .pricing-promo__item, .process-results, .pain-bottom, .faq details').forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity .6s ease, transform .6s ease';
    io.observe(el);
});

// Stagger animation for grid children
const staggerIo = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            const children = e.target.querySelectorAll('.pain-card, .tech-card, .benefit-card');
            children.forEach((child, i) => {
                child.style.transitionDelay = `${i * 0.1}s`;
            });
            staggerIo.unobserve(e.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.grid').forEach(grid => staggerIo.observe(grid));

// Nav background change on scroll
const nav = document.querySelector('.nav');
if (nav) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            nav.style.boxShadow = '0 2px 20px rgba(0,0,0,0.08)';
        } else {
            nav.style.boxShadow = 'none';
        }
    }, { passive: true });
}
