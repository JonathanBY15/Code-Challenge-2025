// Navbar Menu Toggle
document.addEventListener('DOMContentLoaded', function () {
    const menu = document.getElementById('menu');
    const menuBtn = document.getElementById('menu-btn');
    const menuIcon = menuBtn.querySelector('img');

    function toggleMenu() {
		// Toggle the visibility
        menu.classList.toggle('visible');
        menu.style.display = menu.classList.contains('visible') ? 'block' : 'none';

        // Toggle the menu icon
        menuIcon.src = menu.classList.contains('visible') ? 'assets/xmark.svg' : 'assets/bars.svg';
    }

	// Click listener for the button
    menuBtn.addEventListener('click', toggleMenu);
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
    } else {
        backToTopButton.style.display = "none";   // Hide the button when scrollY is less than 300
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
