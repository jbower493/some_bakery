// javascript

// mobile nav. relevant to all pages so don't need try catch block

const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobile-nav');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

hamburger.addEventListener('click', () => mobileNav.classList.toggle('closed'));

for(let i = 0; i < mobileNavLinks.length; i++) {
  mobileNavLinks[i].addEventListener('click', () => mobileNav.classList.add('closed'));
}

// products sidebar nav. only relevant to products page so needs a try catch block

const sidebarLinks = document.querySelectorAll('.sidebar-link');

const breadLink = document.getElementById('bread-link');
const savouryLink = document.getElementById('savoury-link');
const sweetsLink = document.getElementById('sweets-link');
const pastriesLink = document.getElementById('pastries-link');
const seasonalLink = document.getElementById('seasonal-link');

const breadCategory = document.getElementById('bread-category');
const savouryCategory = document.getElementById('savoury-category');
const sweetsCategory = document.getElementById('sweets-category');
const pastriesCategory = document.getElementById('pastries-category');
const seasonalCategory = document.getElementById('seasonal-category');


// sidebar links onclick event listener
const snapTo = (e) => {
  //e.preventDefault();
  for(let i = 0; i < sidebarLinks.length; i++) {
    if(sidebarLinks[i].classList.contains('active')) {
      sidebarLinks[i].classList.remove('active');
    }
  }

  e.target.classList.add('active');
};

// onscorll event listener
const scroll = (e) => {
  for(let i = 0; i < sidebarLinks.length; i++) {
    if(sidebarLinks[i].classList.contains('active')) {
      sidebarLinks[i].classList.remove('active');
    }
  }

  if(seasonalCategory.getBoundingClientRect().top < 100) {
    seasonalLink.classList.add('active');
  } else if(pastriesCategory.getBoundingClientRect().top < 100) {
    pastriesLink.classList.add('active');
  } else if(sweetsCategory.getBoundingClientRect().top < 100) {
    sweetsLink.classList.add('active');
  } else if(savouryCategory.getBoundingClientRect().top < 100) {
    savouryLink.classList.add('active');
  } else {
    breadLink.classList.add('active');
  }
};

for(let i = 0; i < sidebarLinks.length; i++) {
  sidebarLinks[i].addEventListener('click', snapTo);
}

window.addEventListener('scroll', scroll);