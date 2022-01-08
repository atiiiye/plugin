$(document).ready(function () {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView:1,
    spaceBetween: 10,
    centeredSlides: true,
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
       576: {
          slidesPerView:3,
        },
        991: {
          slidesPerView: 5,
        },
      },
    //   autoplay: {
    //     delay:3000,
    //     disableOnInteraction: false,
    //   },
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
        991:
        {
            slidesPerView: 3,
            grid: {
                rows: 2,
            },
        },
        768:
        {
            slidesPerView: 2,
            grid: {
                rows: 2,
            },
            spaceBetween: 30,
        },
        300:
        {
            slidesPerView: 1,
            grid: {
                rows: 1,
            },
            spaceBetween: 0,
        }
    }
  });
});
