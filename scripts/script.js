document.addEventListener('DOMContentLoaded', function() {
    var swiper = new Swiper('.swiper', {
      slidesPerView: "auto",
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.slider-next',
        prevEl: '.slider-prev',
      },
    });
  });