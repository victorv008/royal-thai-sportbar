/* ═══════════════════════════════════════════════════════════════
   ROYAL THAI SPORTSBAR — app.js
   Handles: mobile nav, accordion, smooth scroll, active nav, parallax
═══════════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

    /* ── MOBILE NAV ──────────────────────────────────────────── */
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const navOverlay = document.getElementById('nav-overlay');

    function openMenu() {
        hamburger.classList.add('is-open');
        navLinks.classList.add('is-open');
        navOverlay.classList.add('visible');
        hamburger.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
        hamburger.classList.remove('is-open');
        navLinks.classList.remove('is-open');
        navOverlay.classList.remove('visible');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    }

    hamburger.addEventListener('click', () => {
        const isOpen = hamburger.classList.contains('is-open');
        isOpen ? closeMenu() : openMenu();
    });

    navOverlay.addEventListener('click', closeMenu);

    // Close nav when a link is clicked
    navLinks.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Close on Escape key
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') closeMenu();
    });

    /* ── ACCORDION MENU ──────────────────────────────────────── */
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        header.addEventListener('click', () => {
            const isOpen = item.classList.contains('is-open');

            // Close all others
            accordionItems.forEach(i => {
                i.classList.remove('is-open');
                i.querySelector('.accordion-header').setAttribute('aria-expanded', 'false');
            });

            // Toggle clicked
            if (!isOpen) {
                item.classList.add('is-open');
                header.setAttribute('aria-expanded', 'true');
            }
        });
    });

    /* ── ACTIVE NAV LINK ─────────────────────────────────────── */
    const sections = document.querySelectorAll('section[id]');
    const navLinkEls = document.querySelectorAll('.nav-link');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    // On meny.html: mark "Meny" active permanently — no scroll tracking needed
    if (currentPage === 'meny.html') {
        navLinkEls.forEach(link => {
            const href = link.getAttribute('href');
            link.classList.toggle('active', href === 'meny.html');
        });
    } else {
        // On index.html: scroll-based section tracking
        function setActiveNav() {
            const scrollY = window.scrollY;
            let currentId = '';

            sections.forEach(section => {
                const top = section.offsetTop - 90;
                if (scrollY >= top) currentId = section.getAttribute('id');
            });

            navLinkEls.forEach(link => {
                const href = link.getAttribute('href').replace('#', '');
                link.classList.toggle('active', href === currentId);
            });
        }

        window.addEventListener('scroll', setActiveNav, { passive: true });
        setActiveNav();
    }

    /* ── PARALLAX HERO ───────────────────────────────────────── */
    const heroBg = document.querySelector('.hero-bg');

    if (heroBg && window.matchMedia('(min-width: 641px)').matches) {
        function updateParallax() {
            const scrollY = window.scrollY;
            heroBg.style.transform = `translateY(${scrollY * 0.3}px)`;
        }
        window.addEventListener('scroll', updateParallax, { passive: true });
    }

    /* ── SCROLL REVEAL ANIMATIONS ────────────────────────────── */
    const revealEls = document.querySelectorAll(
        '.accordion-item, .event-card, .kontakt-block, .om-oss-text, .om-oss-images, .section-header'
    );

    // Add data-reveal attribute
    revealEls.forEach(el => el.setAttribute('data-reveal', ''));

    const revealObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry, i) => {
                if (entry.isIntersecting) {
                    // Stagger siblings slightly
                    const siblings = entry.target.parentElement.querySelectorAll('[data-reveal]');
                    const index = Array.from(siblings).indexOf(entry.target);
                    setTimeout(() => {
                        entry.target.classList.add('revealed');
                    }, index * 60);
                    revealObserver.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    revealEls.forEach(el => revealObserver.observe(el));

    /* ── STICKY NAV BACKGROUND OPACITY ──────────────────────── */
    const header = document.querySelector('.site-header');

    if (header) {
        window.addEventListener('scroll', () => {
            header.style.background = window.scrollY > 50
                ? 'rgba(13, 13, 13, 0.97)'
                : 'rgba(13, 13, 13, 0.9)';
        }, { passive: true });
    }

});
