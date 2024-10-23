/**
* [Table of contents]
  1 header-fixed js
  2 menu-icon js 
  3 lazyload js
  4 wow js
  5 Banner Height Js
  6 Swiper User Section JS
  7 Swiper Our Investors Section JS
  8 Swiper Investment Partners Section JS
  9 Swiper Office Enviroment Section JS
  10 Swiper New Opporunity Section JS
  11 Spark Team Portfolio js
  12 Spinner Loader
  13 AOS Animation
  14 back to top
/**
/* header-fixed js */
$(window).scroll(function () {
  if ($(this).scrollTop() > 20) {
    $("header").addClass("fixed");
  } else {
    $("header").removeClass("fixed");
  }
}); /* header-fixed js */
/* menu-icon js */
function myFunction(x) {
  x.classList.toggle("change");
} /* menu-icon js */
/** Navbar toggler **/
$(".navbar-toggler").click(function () {
  $("html").toggleClass("show-menu");
});
/* Banner Height Js*/
function bannerheight() {
  var head_height = $("header").outerHeight(true);
  $("body").css("padding-top", head_height + "px");
  $(".banner-sec").css("min-height", "calc(100vh - " + head_height + "px)");
}
bannerheight();
$(window).resize(bannerheight);
/* Banner Height Js*/
/* Swiper User Section JS*/
var userExperienceSwiper = new Swiper("#sync2", {
  autoplay: {
    delay: 1500,
  },
  speed: 1000,
  loop: true,
  grabCursor:true,
  navigation: {
    nextEl: ".user-experience-btn-next",
    prevEl: ".user-experience-btn-prev",
  },
});
/* Swiper User Section JS*/
/* Swiper Our Investors Section JS*/
var ourInvestorSwiper = new Swiper(".our-investor", {
  autoplay: {
    delay: 1500,
  },
  speed: 1000,
  loop: true,
  grabCursor:true,
  navigation: {
    nextEl: ".our-investors-swiper-btn-next",
    prevEl: ".our-investors-swiper-btn-prev",
  },
});
/* Swiper Our Investors Section JS*/
/* Swiper Investment Partners Section JS*/
var investmentPartnersSwiper = new Swiper(".investment-partners", {
  autoplay: {
    delay: 1500,
  },
  speed: 1000,
  loop: true,
  grabCursor:true,
  navigation: {
    nextEl: ".investment-partners-swiper-btn-next",
    prevEl: ".investment-partners-swiper-btn-prev",
  },
});
/* Swiper Investment Partners Section JS*/
/* Swiper Office Enviroment Section JS*/
var officeEnviromentSwiper = new Swiper(".office-enviroment", {
  loop: true,
  autoplay: {
    delay: 1500,
  },
  speed: 1000,
  spaceBetween: 30,
  grabCursor:true,
  breakpoints: {
    0: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1000: {
      slidesPerView: 3,
    },
  },
});
/* Swiper Office Enviroment Section JS*/
/* Swiper New Opporunity Section JS*/
var newOppoSwiper = new Swiper(".new-oppo", {
  loop: true,
  autoplay: {
    delay: 1500,
  },
  speed: 1000,
  spaceBetween: 30,
  grabCursor:true,
  breakpoints: {
    0: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 4,
    },
  },
});
/* Swiper New Opporunity Section JS*/
/* Spark Team Portfolio js */
$(".gallary").isotope({
  itemSelector: ".items-img",
});
$(".team-memebr ul li a").click(function () {
  $(".team-memebr ul li a").removeClass("active");
  $(this).addClass("active");
  var selector = $(this).attr("data-filter");
  $(".gallary").isotope({
    filter: selector,
  });
  return false;
});
/* Spark Team Portfolio js */
// Spinner Loader start
$(document).ready(function () {
  $(".loader").fadeOut("1500");
});
// Spinner Loader end

// AOS Animation Start
AOS.init({ offset: 100, once: true });
// AOS Animation End

// Back to top start
let backToTopBtn = document.getElementById("backToTopBtn");
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// Back to top end
