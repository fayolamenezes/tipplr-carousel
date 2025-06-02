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
      slideChange: function () {
        const bowl = document.querySelector(".food-bowl-overlap-swiper");
        // Adjust index for loop mode: realIndex is the original slide index
        if (swiper.realIndex === 1 || swiper.realIndex === 2) {
          bowl.classList.remove("hidden");
        } else {
          bowl.classList.add("hidden");
        }
      },
    },
  });
});
