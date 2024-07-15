// Function for light dark mode toggle
document.getElementById('flexSwitchCheck').addEventListener('change', function () {
    lightDarkMode();
    localStorage.setItem('dark-mode', this.checked);
});

function lightDarkMode() {
    let element = document.body;
    element.classList.toggle('dark-mode');

    // Toggle dark mode for all relevant sections
    let sections = document.querySelectorAll('.navbar, .nav-link, .navbar.bg-success, .card, .btn, .form-check-input, .accordion-item, .modal-content');
    sections.forEach(section => {
        section.classList.toggle('dark-mode');
    });
}

// Initialize dark mode based on local storage
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('dark-mode') === 'true') {
        document.body.classList.add('dark-mode');
        document.getElementById('flexSwitchCheck').checked = true;

        // Ensure all relevant sections are in dark mode
        let sections = document.querySelectorAll('.navbar, .nav-link, .navbar.bg-success, .card, .btn, .form-check-input, .accordion-item, .modal-content');
        sections.forEach(section => {
            section.classList.add('dark-mode');
        });
    }
});




