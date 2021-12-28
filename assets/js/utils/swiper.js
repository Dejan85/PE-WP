export const newSwiper = new Swiper(".new-swiper", {
  spaceBetween: 24,
  loop: "true",
  slidesPerView: "auto",
  centeredSlides: true,

  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  breakpoints: {
    992: {
      spaceBetween: 80,
      slidesPerView: 2,
    },
  },
});
