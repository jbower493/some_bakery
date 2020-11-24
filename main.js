// javascript

/* mobile nav */

const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobile-nav');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

hamburger.addEventListener('click', () => mobileNav.classList.toggle('closed'));

for(let i = 0; i < mobileNavLinks.length; i++) {
  mobileNavLinks[i].addEventListener('click', () => mobileNav.classList.add('closed'));
}