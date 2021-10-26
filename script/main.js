class Scroll {
  constructor(obj) {
    if (typeof obj.el == `string`) {
      this.el = document.querySelector(".header__nav");
    } else if (obj.el instanceof HTMLElement) {
      this.el = obj.el;
    }
    this.top = this.el.offsetTop;
    this.el.style.position = "fixed";
    this.el.style.background = "white";
    this.el.style.width = "100vw";
    window.addEventListener("scroll", () => this.scroll());
    window.addEventListener("resize", () => this.scroll());
  }
  scroll() {
    if (scrollY >= this.top) {
      this.el.style.top = 0;
    } else {
      this.el.style.top = this.top + "px";
    }
  }
}

let header = document.querySelector(".header__top");
const scroll = new Scroll({
  el: " .header__nav",
});

/********************************************************* */
const header__link = document.querySelectorAll(".header__link"),
  header__item = document.querySelectorAll(".header__item");

for (let i = 0; i < header__link.length; i++) {
  header__link[i].addEventListener("mouseover", function () {
    header__link[i].style = `transform: translateY(4px);
                             color: red`;
  })

  header__link[i].addEventListener("mouseout", function () {
    header__link[i].style = "transform: translateY(1px, 1px)";

  });
}

/********************************************************* */
const shop__boosted = document.querySelectorAll(".shop__boosted-img"),
  posit__item = document.querySelectorAll(".posit__item"),
  sect2__shop = document.querySelectorAll(".sect2__shop-tile");



sect2__shop.forEach(item => {
  item.addEventListener("mouseover", function () {

    shop__boosted[i].style = "transform: scale(0.95); ";

  });
})

/***************************************************** */


function random(max, min) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let links = document.querySelectorAll(".links");

function myRandom() {
  let r = random(0, 255);
  let g = random(0, 255);
  let b = random(0, 255);
  return `linear-gradient(to left, rgb(${r},${g},${b}),rgb(${random(
    0,
    255
  )},${random(0, 255)},${random(0, 255)}) )`;
}

let interval = setInterval(() => {
  for (let i = 0; i < links.length; i++) {
    const element = links[i];
    element.style = `background:${myRandom()};`;
  }
}, 600);

/***************************************************** */

let financing = document.querySelector(".financing");
let header__title = document.querySelector(".header__title");
let loking = document.querySelector(".loking");
let electric__skateboards = document.querySelector(".electric__skateboards");
let rev__text = document.querySelector(".rev__text");
let vid__text = document.querySelector(".vid__text");


function textPress(text) {
  let innerText = text.innerHTML;
  text.innerHTML = "";
  let i = 0;

  function typing(text2) {
    text2.innerHTML += innerText[i];
    i++;
    if (i < innerText.length) {
      setTimeout(() => {
        typing(text);
      }, 50);
    }
  }
  typing(text);
}

let checkers = [false, false, false, false, false, false,];

window.addEventListener("scroll", (e) => {
  const scroll = scrollY;
  
  if (scroll + financing.clientHeight >= financing.offsetTop / 1.3) {
    if (!checkers[0]) {
      textPress(financing);
      checkers[0] = true;
    }
  }
  if (scroll + header__title.clientHeight >= header__title.offsetTop / 1.3) {
    if (!checkers[1]) {
      textPress(header__title);
      checkers[1] = true;
    }
  }

  if (scroll + loking.clientHeight >= loking.offsetTop / 1.3) {
    if (!checkers[3]) {
      textPress(loking);
      checkers[3] = true;
    }
  }

  if (scroll + electric__skateboards.clientHeight >= electric__skateboards.offsetTop / 1.3) {
    if (!checkers[5]) {
      textPress(electric__skateboards);
      checkers[5] = true;
    }
  }
  if (scroll + rev__text.clientHeight >= rev__text.offsetTop / 1.3) {
    if (!checkers[6]) {
      textPress(rev__text);
      checkers[6] = true;
    }
  }

  if (scroll + vid__text.clientHeight >= vid__text.offsetTop / 1.3) {
    if (!checkers[8]) {
      textPress(vid__text);
      checkers[8] = true;
    }
  }
});

/******************************************** */

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 11,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  initialSlide: 3,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/***************************************** */

var modal = document.getElementById("myModal1");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg1");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption1");
img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close1")[0];

// When the user clicks on <span> (x), close the modal
span1.onclick = function () {
  modal.style.display = "none";
}

var modal2 = document.getElementById("myModal2");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img2 = document.getElementById("myImg2");
var modalImg2 = document.getElementById("img02");
var captionText2 = document.getElementById("caption2");
img2.onclick = function () {
  modal2.style.display = "block";
  modalImg2.src = this.src;
  captionText2.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close2")[0];

// When the user clicks on <span> (x), close the modal
span2.onclick = function () {
  modal2.style.display = "none";
}

var modal3 = document.getElementById("myModal3");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img3 = document.getElementById("myImg3");
var modalImg3 = document.getElementById("img03");
var captionText3 = document.getElementById("caption3");
img3.onclick = function () {
  modal3.style.display = "block";
  modalImg3.src = this.src;
  captionText3.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span3 = document.getElementsByClassName("close3")[0];

// When the user clicks on <span> (x), close the modal
span3.onclick = function () {
  modal3.style.display = "none";
}

/*************************************************** */


//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

let menuBtn = document.querySelector('.menu__icon'),
menu = document.querySelector('.header__list'),
bg = document.querySelector('.bg')

menuBtn.addEventListener('click', e => {
  menu.classList.toggle('active')
  bg.classList.toggle('active')
})