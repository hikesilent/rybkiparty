// HEADER
document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.querySelector('.mobile-menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    const burgerLines = document.querySelectorAll('.burger-line');

    toggle.addEventListener('click', function() {
        const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', !isExpanded);
        mobileNav.setAttribute('aria-hidden', isExpanded);
        mobileNav.classList.toggle('active');
        
        // Animacja burgera na X
        burgerLines[0].style.transform = !isExpanded ? 
            'rotate(-45deg) translate(-6px, 7px)' : 'none';
        burgerLines[1].style.opacity = !isExpanded ? '0' : '1';
        burgerLines[2].style.transform = !isExpanded ? 
            'rotate(45deg) translate(-6px, -7px)' : 'none';
    });

    // Zamknij menu po kliknięciu linku
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', () => {
            toggle.setAttribute('aria-expanded', 'false');
            mobileNav.setAttribute('aria-hidden', 'true');
            mobileNav.classList.remove('active');
            burgerLines.forEach(line => {
                line.style.transform = 'none';
                line.style.opacity = '1';
            });
        });
    });
});
