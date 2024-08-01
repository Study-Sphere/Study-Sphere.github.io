function openNav() {
  document.getElementById("sidebar").style.width = "250px";
  document.getElementById("main-content").style.marginLeft = "250px";
  document.querySelector(".openbtn").style.display = "none";
}

function closeNav() {
  document.getElementById("sidebar").style.width = "0";
  document.getElementById("main-content").style.marginLeft = "0";
  document.querySelector(".openbtn").style.display = "block";
}

document.getElementById('confirmLogoutBtn').addEventListener('click', function() {
  window.location.href = 'index.html';
});
// home.js
document.addEventListener("DOMContentLoaded", function() {
  // Assuming you have the username stored in local storage or fetched from an API
  var userName = localStorage.getItem('userName'); // Or use any method to get the username

  if (userName) {
      document.getElementById('userName').textContent = userName;
  } else {
      document.getElementById('userName').textContent = 'Guest';
  }
});