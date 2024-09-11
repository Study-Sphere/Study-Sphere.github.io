document.getElementById('confirmLogoutBtn').addEventListener('click', function() {
    window.location.href = 'index.html';
});
document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('theme-toggle');

    function toggleTheme() {
        const bodyElement = document.body;
        bodyElement.classList.toggle('dark-theme');
        bodyElement.classList.toggle('light-theme');

        const isDarkTheme = bodyElement.classList.contains('dark-theme');
        localStorage.setItem('theme', isDarkTheme ? 'dark-theme' : 'light-theme');

        // Update the theme icon when the theme is toggled
        updateThemeIcon();
    }

    function updateThemeIcon() {
        const x = document.getElementById('theme-toggle');
        const isDarkTheme = document.body.classList.contains('dark-theme');
        
        if (isDarkTheme) {
            x.textContent = '🌙'; // Moon icon for dark theme
        } else {
            x.textContent = '☀️'; // Sun icon for light theme
        }
    }

    themeToggleButton.addEventListener('click', toggleTheme);

    // Check for the saved theme and apply it on page load
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.classList.add(savedTheme);
    } else {
        document.body.classList.add('light-theme'); // Default to light theme
    }

    // Set the correct icon on load
    updateThemeIcon();
});
