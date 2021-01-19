new Swiper('.gallery__box', {
  autoHeight: true,

  slidesPerView: 6,
  spaceBetween: 10,

  breakpoints: {
    320: {
      slidesPerView: 1.7,
      spaceBetween: 10,
    },

    575: {
      slidesPerView: 3.5,
      spaceBetween: 10,
    },

    768: {
      slidesPerView: 6,
      spaceBetween: 10,
    },
  },

  loop: true,
});
