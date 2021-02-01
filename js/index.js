//Swiper Slides
var swiperSlides = new Swiper(".swiper-slides", {
  spaceBetween: 30,
  effect: "fade",
  autoplay: {
    delay: 5000,
  },
  navigation: {
    nextEl: ".button-slide-next",
    prevEl: ".button-slide-prev",
  },
});
//end

// code isotop of Room
// var $grid = jQuery(".room-container ul").isotope({
//   filter: ".Classic",
//   layoutMode: 'fitRows',
// });

// // code cho phan nut
// $(".gallery-filters ul li a").click(function (e) {
//   e.preventDefault();
//   var room = $(this).data("room");
//   let index = $(this).attr('data-id');
//   var $grid = jQuery(".room-container ul").isotope({
//     filter: "."+ index,
//     layoutMode: 'fitRows',
//   });
// })

$(function () {
  $(".gallery-container ul").isotope({
    itemSelector: "li",
  });

  // code cho phan nut
  $(".gallery-filters ul li a").click(function (e) {
    e.preventDefault();
    var list = $(this).data("id");

    if (list === "Classic") {
      $(".gallery-container ul").isotope({ filter: "*" });
    } else {
      list = "." + list;
      $(".gallery-container ul").isotope({ filter: list });
    }
  });
});
///end

// Code swiper destination
var swiperDestination = new Swiper(".swiper-desti", {
  slidesPerView: 1,
  loop: true,
  // autoplay: {
  //   delay: 3000,
  // },
  speed: 2000,
  breakpoints: {
    575: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    991: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1170: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});
//end

//code lightGallery
lightGallery(document.getElementById("aniimated-thumbnials"), {
  thumbnail: true,
  animateThumb: false,
  showThumbByDefault: false,
});
//end

// popup js
// let slt = document.querySelectorAll(".gallery-container ul li");
// let popup = document.querySelector(".room .pop-up");
// let close = document.querySelector(".pop-up .close");
// slt.addEventListener("click", function (e) {
//   e.preventDefault();
//   popup.classList.add("active");
// });
// for (var i = 0, c = slt.length; i < c; i++) {
//   slt[i].addEventListener("click", function (e) {
//     e.preventDefault();
//     if (e.target.tagName == "A") {
//       popup.classList.add("active");
//     }
//   });
// }

// close.addEventListener("click", function () {
//   popup.classList.remove("active");
// });

// popup jQuery
$(".gallery-container ul li .btn-2").on("click", function () {
  $(".pop-up").fadeIn();
  var galleryThumbs = new Swiper(".gallery-thumbs", {
    slidesPerView: 4,
    spaceBetween: 5,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });
  var galleryTop = new Swiper(".gallery-top", {
    loop: true,
    thumbs: {
      swiper: galleryThumbs,
    },
  });
  return false;
});

$(".btn-see-more").on("click", function () {
  $(".pop-up").fadeIn();
  var galleryThumbs = new Swiper(".gallery-thumbs", {
    slidesPerView: 4,
    spaceBetween: 5,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });
  var galleryTop = new Swiper(".gallery-top", {
    loop: true,
    thumbs: {
      swiper: galleryThumbs,
    },
  });
  return false;
});

$(".pop-up .close").on("click", function () {
  $(".pop-up").fadeOut();
  return false;
});
//end
//menu moblie
$(".header-bottom ul.header-search-cart li .btn-mobile").on(
  "click",
  function () {
    $(".menu-mobile").fadeIn();
    return false;
  }
);
$(".menu-mobile .close").on("click", function () {
  $(".menu-mobile").fadeOut();
  return false;
});

//Code Swiper review
var swiperReview = new Swiper(".swiper-review", {
  slidesPerView: 3,
  loop: true,
  autoplay: {
    delay: 3000,
  },
  speed: 2000,
  breakpoints: {
    300: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
//end

// back to top
let btn = $(".back-to-top");

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});
