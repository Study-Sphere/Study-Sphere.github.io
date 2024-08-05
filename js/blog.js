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
});

window.addEventListener("resize", checkScreenWidth);
