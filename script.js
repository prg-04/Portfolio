const toggleMenu = document.querySelector(".toggle");
const navlinks = document.querySelector(".navlinks");
let menuOpen = false;

toggleMenu.addEventListener("click", (e) => {
  if (!menuOpen) {
    toggleMenu.classList.add("open");
    menuOpen = true;
  } else {
    toggleMenu.classList.remove("open");
    menuOpen = false;
  }

  navlinks.classList.toggle('open');
});



function closeMenu() {
  toggleMenu.classList.remove('open');
  navLinks.classList.remove('open');
  menuOpen = false;
}

 