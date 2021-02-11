window.addEventListener('DOMContentLoaded', () => {
  // Swiper for hero

  const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
  });

  //Tabs for working 

  document.querySelectorAll('.tabs-btn').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path;

      document.querySelectorAll('.working__more').forEach(function (tabContent) {
        tabContent.classList.remove('working__more-active');
      })

      document.querySelector(`[data-target="${path}"]`).classList.add('working__more-active');

      document.querySelectorAll('.tabs-btn').forEach(function (tabs) { // When clicked removes active (color) from all btns
        tabs.classList.remove('working__link-active');
      })

      tabsBtn.classList.add('working__link-active'); // Adds color to clicked btn

    })



  })





})
