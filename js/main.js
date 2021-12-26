const navToggle = document.getElementById('nav-toggle');
const menu = document.querySelector('.nav__links');
const closeMenu = document.getElementById('close');
const navLinks = Array.from(document.querySelectorAll('.nav__link'));


// open navigation menu on mobile device
navToggle.addEventListener('click', () => {
  menu.classList.add('active');
});

// close navigaton menu on mobile device
closeMenu.addEventListener('click', () => {
  menu.classList.remove('active');
});

// Closing the menu on mobile after clicking a link
navLinks.forEach(navLink =>{
  navLink.addEventListener('click', () => {
    menu.classList.remove('active');
  })
})