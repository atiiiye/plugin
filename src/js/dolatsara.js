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

  // const tabButton = document.querySelectorAll(".tab-navigation__tab-btn");
  // const tabContent = document.querySelectorAll(".tab-navigation__content");

  // tabContent[1].style.display = "block";

  // tabButton.forEach((item, index) => {
  //   item.addEventListener("click", () => {
  //     for (let i = 0; i < tabButton.length; i++)
  //       tabButton[i].classList.remove("selected");
  //     Navigation(item, index);
  //   });
  // });

  // const Navigation = (item, index) => {
  //   const contentTab = tabContent[index].getAttribute("id");
  //   item.classList.add("selected");

  //   for (let i = 0; i < tabContent.length; i++)
  //     tabContent[i].style.display = "none";

  //   document.getElementById(contentTab).style.display = "block";
  // };

  //****search city ****//

  let confirmButton = document.querySelector(
    "button.dolatsara__confirm-button"
  );
  let form = document.querySelector("form.dolatsara__city-modal-form");
  let searchCityInput = document.getElementById("search-city");
  let cityInput = document.querySelectorAll("input.city-name");
  let selectedCity = document.querySelector("span.dolatsara__selected-city");
  let cityNameParent = document.querySelector(
    "div.dolatsara__city-name-parent"
  );
  let cityName = document.querySelectorAll("p.dolatsara__city-name");
  let city = [];

  cityInput.forEach((item) => {
    item.addEventListener("change", () => {
      if (item.checked == true) {
        city.push(item.value);
        let newCity = document.createElement("p");
        newCity.setAttribute("class", "dolatsara__city-name");
        newCity.innerHTML = item.value;
        cityNameParent.appendChild(newCity);
      } else {
        city = city.filter((i) => i !== item.value);
        let cityName = document.querySelectorAll("p.dolatsara__city-name");
        cityName.forEach((i) => {
          if (i.innerHTML == item.id) cityNameParent.removeChild(i);
        });
      }

      if (cityName.length) {
        selectedCity.style.display = "none";
      } else {
        selectedCity.style.display = "block";
      }
    });
  });

  confirmButton.addEventListener("click", () => {
    return form.submit();
  });

  searchCityInput.addEventListener("input", () => {
    searchCity();
  });

  function searchCity() {
    let txtValue;
    let ul = document.getElementById("dolatsara__city-list");
    let li = document.querySelectorAll("li.dolatsara__city-list-item");
    let filter = searchCityInput.value;

    for (let i = 0; i < li.length; i++) {
      let label = li[i].getElementsByTagName("label")[0];
      txtValue = label.textContent || label.innerText;

      if (txtValue.indexOf(filter) > -1) {
        li[i].style.display = "block";
      } else {
        li[i].style.display = "none";
      }
    }
  }
});
