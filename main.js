// ===== قائمة الموبايل =====
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        const isOpen = navMenu.classList.toggle('show');
        navToggle.setAttribute('aria-expanded', isOpen);
    });

    // قفل القائمة بعد الضغط على أي رابط
    navMenu.querySelectorAll('.nav__link').forEach((link) => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('show');
            navToggle.setAttribute('aria-expanded', false);
        });
    });
}

// ===== حركات الظهور =====
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (typeof ScrollReveal !== 'undefined' && !reduceMotion) {
    const sr = ScrollReveal({
        origin: 'top',
        distance: '40px',
        duration: 1000,
        delay: 200,
    });

    sr.reveal('.home__img', { delay: 200 });
    sr.reveal('.home__data', { delay: 300, origin: 'bottom' });
    sr.reveal('.about__data', { origin: 'bottom' });
    sr.reveal('.skills__box', { interval: 100, origin: 'bottom' });
    sr.reveal('.projects__card', { interval: 150, origin: 'bottom' });
}