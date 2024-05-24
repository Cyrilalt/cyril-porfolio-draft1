const body = document.querySelector('body');
const hamburger = document.getElementById('hamburger');
const mobileLinks = document.querySelectorAll('.mobileLink');
const skillsDivs = document.querySelectorAll('.skillLi');
const designBtns = document.querySelectorAll('.design');
const closeBtn = document.getElementById('closeBtn');
const yearDiv = document.getElementById('year');

//hamburger menu
hamburger.addEventListener('click', ()=> {
    body.classList.remove('pop');
    body.classList.toggle('burger');
});


//close hamburger menu on mobile link click
mobileLinks.forEach(link => {
  link.addEventListener('click', ()=> {
    body.classList.remove('burger');
  })
});


//skills drop down

const toggleInfo = (element)=> {
  let isActive = element.classList.contains('active');
skillsDivs.forEach(skill=> {
  skill.classList.remove('active');
});
if(!isActive) {
  element.classList.add('active');
}
}



//pop up settings
designBtns.forEach(btn => {
  btn.addEventListener('click', ()=> {
    body.classList.remove('burger');
    body.classList.add('pop');
  });
});

closeBtn.addEventListener('click', ()=> {
  body.classList.remove('pop');
});


// auto slide
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  }
});

//card slides
var swiper = new Swiper(".cardSwipper", {
  effect: "cards",
  grabCursor: true,
  loop: true,
});

//vertical slides in cards
var swiper2 = new Swiper(".mySwiper2", {
  direction: "vertical",
  spaceBetween: 50,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
});

var swiper3 = new Swiper(".mySwiper3", {
  direction: "vertical",
  spaceBetween: 50,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
});

var swiper4 = new Swiper(".mySwiper4", {
  direction: "vertical",
  spaceBetween: 50,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
});

var swiper5 = new Swiper(".mySwiper5", {
  direction: "vertical",
  spaceBetween: 50,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
});

var swiper6 = new Swiper(".mySwiper6", {
  direction: "vertical",
  spaceBetween: 50,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
});

var swiper7 = new Swiper(".mySwiper7", {
  direction: "vertical",
  spaceBetween: 50,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
});

var swiper8 = new Swiper(".mySwiper8", {
  direction: "vertical",
  spaceBetween: 50,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
});

const year = new Date().getFullYear();

yearDiv.innerHTML = year;
