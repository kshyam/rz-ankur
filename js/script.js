document.addEventListener('DOMContentLoaded', function () {
    const closeButton = document.querySelector('.close-banner');
    const promoBanner = document.querySelector('.promo-banner');
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelectorAll('.nav-links');

    closeButton.addEventListener('click', function () {
        promoBanner.style.display = 'none';
    });

    navToggle.addEventListener('click', function () {
        navLinks.forEach(nav => nav.classList.toggle('open'));
    });
});
