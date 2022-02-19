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


  //**** navigation ****//

  const tabButton = document.querySelectorAll(".tab-navigation__tab-btn");
  const tabContent = document.querySelectorAll(".tab-navigation__content");
  tabContent[1].style.display = "block";

  tabButton.forEach((item, index) => {
    item.addEventListener("click", () => {
      for (let i = 0; i < tabButton.length; i++)
        tabButton[i].classList.remove("selected");
      Navigation(item, index);
    });
  });

  const Navigation = (item, index) => {
    const contentTab = tabContent[index].getAttribute("id");
    item.classList.add("selected");

    for (let i = 0; i < tabContent.length; i++)
      tabContent[i].style.display = "none";

    document.getElementById(contentTab).style.display = "block";
  };


  //****search city ****//

  let confirmButton = document.querySelector('button.dolatsara__confirm-button')
  let form = document.querySelector('form.dolatsara__city-modal-form')

  confirmButton.addEventListener('click', () => {
    console.log('form submited')
    form.submit()
  })

  let searchCityInput = document.getElementById("search-city");
  searchCityInput.addEventListener('input' , (event)=>{
    searchCity()
  })

  function searchCity() {
    let txtValue;
    let ul = document.getElementById("dolatsara__city-list");
    let li = ul.getElementsByTagName("li");
    let filter = searchCityInput.value;

    for (let i = 0; i < li.length; i++) {
        let label = li[i].getElementsByTagName("label")[0];
        txtValue = label.textContent || label.innerText;
        if (txtValue.indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
});
