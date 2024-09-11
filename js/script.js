document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const adminLoginForm = document.getElementById('adminLoginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Implement login logic here (e.g., API call)
            console.log('User logging in:', username);
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // Implement registration logic here (e.g., API call)
            console.log('User registering:', username);
        });
    }

    if (adminLoginForm) {
        adminLoginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('adminUsername').value;
            const password = document.getElementById('adminPassword').value;

            // Implement admin login logic here (e.g., API call)
            console.log('Admin logging in:', username);
        });
    }

// Show the popup modal
function showPopup() {
    $('#popupModal').modal('show');
}

// Redirect to the specified page
function redirectTo(page) {
    window.location.href = page;
}

const themeToggleButton = document.getElementById('theme-toggle');

    function toggleTheme() {
        const bodyElement = document.body;
        bodyElement.classList.toggle('dark-theme');
        bodyElement.classList.toggle('light-theme');

        // const isDarkTheme = bodyElement.classList.contains('dark-theme');
        const isDarkTheme = bodyElement.classList.contains('light-theme');
      
        // localStorage.setItem('theme', isDarkTheme ? 'dark-theme' : 'light-theme');
        localStorage.setItem('theme', isDarkTheme);
    }

    themeToggleButton.addEventListener('click', toggleTheme);
    themeToggleButton.addEventListener('click', updateThemeIcon);

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.classList.add(savedTheme);
    } else {
        document.body.classList.add('light-theme'); // Default to light theme
    }

    // Set the correct icon on load
    updateThemeIcon();
    function updateThemeIcon() {
        const x = document.getElementById('theme-toggle');
        const bodyElement = document.body; // Define bodyElement if not already defined
        const savedTheme = bodyElement.classList.contains('dark-theme') ? 'dark-theme' : 'light-theme'; // Adjust savedTheme as needed
    
        if (bodyElement.classList.contains('dark-theme')) {
            x.textContent = '🌙'; // Moon icon for dark theme
        } else if (savedTheme === 'light-theme') {
            x.textContent = '☀️'; // Sun icon for light theme
        }
    }


    

});
