document.getElementById("confirmLogoutBtn").addEventListener("click", function() {
  // Add your logout logic here
  window.location.href = "logout-url.html";
});
function openNav() {
  document.getElementById("sidebar").style.width = "250px";
  document.getElementById("main-content").style.marginLeft = "250px";
  document.querySelector(".openbtn").style.display = "none";
  document.getElementById("prev-button").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("sidebar").style.width = "0";
  document.getElementById("main-content").style.marginLeft = "0";
  document.querySelector(".openbtn").style.display = "block";
  document.querySelector(".closebtn").style.display = "block";
  document.getElementById("prev-button").style.marginLeft = "0";
}

function checkScreenWidth() {
  if (window.innerWidth <= 600) {
    closeNav();
  } else {
    document.getElementById("sidebar").style.width = "250px";
    document.getElementById("main-content").style.marginLeft = "250px";
    document.querySelector(".openbtn").style.display = "none";
    document.querySelector(".closebtn").style.display = "none";
    document.getElementById("prev-button").style.marginLeft = "250px";
  }
}

document.addEventListener("DOMContentLoaded", function() {
  checkScreenWidth();
  const themeToggleButton = document.getElementById('theme-toggle');

    function toggleTheme() {
        const bodyElement = document.body;
        bodyElement.classList.toggle('dark-theme');
        bodyElement.classList.toggle('light-theme');

        const isDarkTheme = bodyElement.classList.contains('dark-theme');
        localStorage.setItem('theme', isDarkTheme ? 'dark-theme' : 'light-theme');
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

window.addEventListener("resize", checkScreenWidth);
