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

// add event listener to sidebar menu links only if we are on products page
if(sidebarLinks.length !== 0) {
  for(let i = 0; i < sidebarLinks.length; i++) {
    sidebarLinks[i].addEventListener('click', snapTo);
  }
}

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

// add event listener to scroll event only if we are on products page
if(sidebarLinks.length !== 0) {
  window.addEventListener('scroll', scroll);
}

// product search filter

const products = document.querySelectorAll('.product');
const searchBar = document.getElementById('search');

// onkeyup event listener
const filter = (e) => {
  for(let i = 0; i < products.length; i++) {
    products[i].style.display = 'block';
  }

  const categories = document.querySelectorAll('.category');
  for(let i = 0; i < categories.length; i++) {
    categories[i].style.display = 'block'
  }

  for(let i = 0; i < products.length; i++) {
    if(!products[i].id.includes(e.target.value.toLowerCase())) {
      products[i].style.display = 'none';
    }
  }

  for(let i = 0; i < categories.length; i++) {
    let count = 0;
    const children = categories[i].lastElementChild.children;
    for(let j = 0; j < children.length; j++) {
      if(children[j].style.display !== 'none') {
        count++;
      }
    }
    if(count === 0) {
      categories[i].style.display = 'none';
    }
  }
};

// add filter event listener to searchbar only if we are on products page
if(sidebarLinks.length !== 0) {
  searchBar.addEventListener('keyup', filter);
}