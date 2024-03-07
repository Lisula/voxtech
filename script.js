// JavaScript for Burger Menu
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded and parsed");
    const navToggle = document.querySelector('.navToggle');
    console.log(navToggle); // Should log the element to the console
    const navMenu = document.getElementById('navMenu');

    navToggle.addEventListener('click', function() {
        console.log("Burger menu icon clicked");
        const isDisplayed = window.getComputedStyle(navMenu).display !== 'none';
        navMenu.style.display = isDisplayed ? 'none' : 'block';
    });
});


