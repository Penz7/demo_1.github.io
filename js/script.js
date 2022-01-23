let swiperTestimonial = new Swiper(".mySwiper", {
  loop: true,
  grabCursor: true,
  spaceBetween: 48,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true,
  },
  breakpoints: {
    799: {
      slidesPerView: 1,
    },
    568: {
      slidesPerView: 1,
    },
  },
});
