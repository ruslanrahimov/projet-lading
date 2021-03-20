let swiperAnimation = new SwiperAnimation();

const sliderFirst = document.querySelector('.swiper-container');
const sliderSecond = document.querySelector('.swiper-container-2');


let swiper = new Swiper(sliderFirst, {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<div class="indicator"><span class="' + className + '">' + (`0${index + 1}`) + '</span></div>';
    },
  },
  on: {
    init: function () {
      swiperAnimation.init(this).animate();
    },
    slideChange: function () {
      swiperAnimation.init(this).animate();
    }
  },
  
});

let swiperSecond = new Swiper(sliderSecond, {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  navigation: {
    nextEl: '.slider-button-next',
    prevEl: '.slider-button-prev',
  },
  autoplay: {
    delay: 8000,
  },
  
});












