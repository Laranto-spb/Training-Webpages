window.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,

    breakpoints: {

      1920: {
        slidesPerView: 3
      },

      1080: {
        slidesPerView: 2
      },

    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });
})