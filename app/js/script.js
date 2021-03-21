let swiperAnimation = new SwiperAnimation();

const sliderFirst = document.querySelector('.swiper-container');
const sliderSecond = document.querySelector('.swiper-container-2');
const sliderThird = document.querySelector('.swiper-container-3');


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

let swiperThird = new Swiper(sliderThird, {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 4,
  spaceBetween: 10,
  navigation: {
    nextEl: '.solutions-slider-next',
    prevEl: '.solutions-slider-prev',
  },
  pagination: {
    el: '.swiper-pagination-3',
    type: 'bullets',
  },
  autoplay: {
    delay: 8000,
  },
})


// Accordion //

document.querySelector('.service-accordion').addEventListener('click', (event) => {
  if (event.target.closest('.service-accordion__item')) {
    event.target.closest('.service-accordion__item').classList.toggle('service-accordion__item--active')
  }
});










