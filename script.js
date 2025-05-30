const swiper = new Swiper(".mySwiper", {
  loop: true,
  autoHeight: true,
  slidesPerView: 1,       // show 1 slide on mobile by default
  spaceBetween: 20,       // space between slides
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
      slidesPerView: 3,   // show 3 slides on desktop
      spaceBetween: 30,
    },
  },
});
