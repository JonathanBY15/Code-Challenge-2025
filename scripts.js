// Toggle menu
document.addEventListener('DOMContentLoaded', function () {
    const menu = document.getElementById('menu');
    const menuBtn = document.getElementById('menu-btn');
    const menuIcon = menuBtn.querySelector('img');
    const menuItems = menu.querySelectorAll('li');  // Get all <li> elements in the menu

    const toggleMenuState = (isOpen) => {
        // Toggle visibility of the menu
        menu.classList.toggle('visible', isOpen);

        // Update icon, aria-label, and aria-expanded based on menu state
        menuIcon.src = isOpen ? 'assets/xmark.svg' : 'assets/bars.svg';
        menuBtn.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
        menuBtn.setAttribute('aria-expanded', isOpen.toString());  // Convert boolean to string

        // Update <li> accessibility
        menuItems.forEach(item => {
            item.setAttribute('aria-hidden', isOpen ? 'false' : 'true');  // Show or hide <li> based on menu state
            item.setAttribute('aria-label', isOpen ? item.textContent : '');  // Set descriptive label or empty label
        });
    };

    // Click listener to toggle the menu
    menuBtn.addEventListener('click', () => {
        const isOpen = !menu.classList.contains('visible');
        toggleMenuState(isOpen);
    });
});

document.getElementById('contact-form').addEventListener('submit', function (event) {
	event.preventDefault();
	alert('Form submitted!');
});

// "back-to-top" functionality
window.onscroll = function () {
    const backToTopButton = document.getElementById('back-to-top');
    
    // Display the button when scrolled down
    if (window.scrollY > 100) { // Changed 500 to 100 since there isn't much content.
        backToTopButton.style.display = "block";
        backToTopButton.setAttribute('aria-hidden', 'false'); // Make it accessible
    } else {
        backToTopButton.style.display = "none";
        backToTopButton.setAttribute('aria-hidden', 'true'); // Hide it from screen readers
    }
};

// smooth scroll to top
document.getElementById('back-to-top').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
