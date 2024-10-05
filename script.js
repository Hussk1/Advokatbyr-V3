const navbarMenu = document.getElementById("menu");
const burgerMenu = document.getElementById("burger");
const headerMenu = document.getElementById("header");

// Open Close Navbar Menu on Click Burger
if (burgerMenu && navbarMenu) {
    burgerMenu.addEventListener("click", () => {
        burgerMenu.classList.toggle("is-active");
        navbarMenu.classList.toggle("is-active");
    });
}

// Close Navbar Menu on Click Menu Links
document.querySelectorAll(".menu-link").forEach((link) => {
    link.addEventListener("click", () => {
        burgerMenu.classList.remove("is-active");
        navbarMenu.classList.remove("is-active");
    });
});

// Change Header Background on Scrolling
window.addEventListener("scroll", () => {
    if (this.scrollY >= 85) {
        headerMenu.classList.add("on-scroll");
    } else {
        headerMenu.classList.remove("on-scroll");
    }
});

// Fixed Navbar Menu on Window Resize
window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
        if (navbarMenu.classList.contains("is-active")) {
            navbarMenu.classList.remove("is-active");
        }
    }
});


// Scroll back to top btn
window.onscroll = function() {scrollFunction(); updateScrollProgress();};

function scrollFunction() {
  const topBtn = document.getElementById("topBtn");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    topBtn.style.display = "block";
    topBtn.style.opacity = 1;
  } else {
    topBtn.style.opacity = 0;
    setTimeout(() => {
      if (topBtn.style.opacity == 0) {
        topBtn.style.display = "none";
      }
    }, 300);
  }
}

function topFunction() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateScrollProgress() {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
  const clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
  const scrolled = (scrollTop / (scrollHeight - clientHeight)) * 100;

  document.getElementById("scrollProgress").style.width = `${scrolled}%`;
}