// Ensure the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Get references to the hamburger icon and the navigation bar
    const hamburger = document.getElementById('hamburger');
    const navbar = document.getElementById('navbar');

    // Add a click event listener to the hamburger icon
    hamburger.addEventListener('click', () => {
        // Toggle the 'active' class on the navbar
        // The 'active' class will control the visibility (display: flex/none)
        // of the navigation links based on CSS media queries.
        navbar.classList.toggle('active');
    });
});
