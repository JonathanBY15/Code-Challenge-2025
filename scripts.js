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

window.onscroll = function () {
	if (window.scrollY > 500) {
		document.getElementById('back-to-top').style.display = "block";
	}
};
