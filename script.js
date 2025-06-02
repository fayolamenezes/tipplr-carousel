document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".mySwiper", {
    loop: true,
    autoHeight: true,
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
    on: {
      init: function () {
        toggleBowlVisibility(this.realIndex);
      },
      slideChange: function () {
        toggleBowlVisibility(this.realIndex);
      },
    },
  });

  function toggleBowlVisibility(index) {
    const bowl = document.querySelector(".food-bowl-overlap-swiper");
    if (!bowl) return;
    if (index === 1 || index === 2) {
      bowl.classList.remove("hidden");
    } else {
      bowl.classList.add("hidden");
    }
  }
});
