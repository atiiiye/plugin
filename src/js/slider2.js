$(document).ready(function () {
  var swiper1 = new Swiper(".mySwiper1", {
    slidesPerView: 1,
    spaceBetween: 10,
    centeredSlides: false,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      1200: {
        slidesPerView: 5,
        centeredSlides: true,
      },
      768: {
        slidesPerView: 3,
        centeredSlides: true,
      },
      576: {
        slidesPerView: 2,
        centeredSlides: false,
      },
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });

  var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 1,
    grid: {
      rows: 2,
    },
    spaceBetween: 30,
    centeredSlides: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      1200: {
        slidesPerView: 4,
        grid: {
          rows: 2,
        },
      },
      991: {
        slidesPerView: 3,
        grid: {
          rows: 2,
        },
      },
      576: {
        slidesPerView: 2,
        grid: {
          rows: 2,
        },
      },
      300: {
        slidesPerView: 1,
        grid: {
          rows: 1,
        },
      },
    },
  });

  var swiper3 = new Swiper(".mySwiper3", {
    slidesPerView: 1,
    spaceBetween: 20,
    centeredSlides: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      1200: {
        slidesPerView: 4,
      },
      991: {
        slidesPerView: 3,
      },
      576: {
        slidesPerView: 2,
      },
      300: {
        slidesPerView: 1,
      },
    },
  });

  var swiper4 = new Swiper(".mySwiper4", {
    slidesPerView: 1,
    centeredSlides: false,
    spaceBetween: 20,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      1300: {
        slidesPerView: 5,
        centeredSlides: true,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 3,
        centeredSlides: true,
        spaceBetween: 0,
      },
      576: {
        slidesPerView: 2,
      },
    },
    // autoplay: {
    //   delay:3000,
    //   disableOnInteraction: false,
    // },
  });
});
