document.addEventListener('DOMContentLoaded', () => {
    const menu = document.getElementById('menu');
    const menuBtn = document.getElementById('menu-btn');
    const menuIcon = menuBtn.querySelector('img');
    const menuItems = menu.querySelectorAll('li');
    const backToTopButton = document.getElementById('back-to-top');
    const contactForm = document.getElementById('contact-form');

    // Toggle menu (svg, aria-label, aria-expanded)
    const toggleMenuState = (isOpen) => {
        menu.classList.toggle('visible', isOpen);
        menuIcon.src = isOpen ? 'assets/xmark.svg' : 'assets/bars.svg';
        menuBtn.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
        menuBtn.setAttribute('aria-expanded', isOpen.toString());

        menuItems.forEach(item => {
            item.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
            item.setAttribute('aria-label', isOpen ? item.textContent : '');
        });
    };

    // Click listener to toggle the menu
    menuBtn.addEventListener('click', () => {
        const isOpen = !menu.classList.contains('visible');
        toggleMenuState(isOpen);
    });

    // Handle form submission
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Form submitted!');
    });

    // "back-to-top" functionality
    window.addEventListener('scroll', () => {
        const isScrolled = window.scrollY > 100; // Changed 500 to 100 since there isn't much content.
        backToTopButton.style.display = isScrolled ? 'block' : 'none';
        backToTopButton.setAttribute('aria-hidden', isScrolled ? 'false' : 'true');
    });

    // smooth scroll to top
    backToTopButton.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
