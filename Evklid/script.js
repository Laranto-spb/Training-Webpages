window.addEventListener('DOMContentLoaded', () => {

  const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 	'bullets',
      clickable: true,
    },
  });

})
