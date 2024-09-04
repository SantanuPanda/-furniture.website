let closer = document.querySelector('#closer');

closer.onclick = () => {
    closer.style.display ='none';
    navbar.classList.remove ('active');
    cart.classList.remove('active');
    loginForm.classList.remove('active');
} 

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    closer.style.display = "block";
    navbar.classList.toggle ('active');
}

let cart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () => {
    closer.style.display = "block";
    cart.classList.toggle ('active');
}

let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () => {
    closer.style.display = "block";
    loginForm.classList.toggle ('active');
}

let searchForm = document.querySelector(' .header .search-form');

document.querySelector(' #search-btn').onclick = () => {
    searchForm.classList.toggle ('active');
}



let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}


function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "flex";  
}


