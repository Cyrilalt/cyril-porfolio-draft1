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
})

//skills drop down
skillsDivs.forEach(skill=> {
  const moreBtn = skill.children[0].children[1].children[0].children[1];

  moreBtn.addEventListener('click', ()=> {
    skill.classList.toggle('active');
  });
});

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

const year = new Date().getFullYear();

yearDiv.innerHTML = year;