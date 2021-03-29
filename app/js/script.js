
let swiperAnimation = new SwiperAnimation();

const sliderFirst = document.querySelector('.swiper-container');
const sliderSecond = document.querySelector('.swiper-container-2');
const sliderThird = document.querySelector('.swiper-container-3');

let swiper = new Swiper(sliderFirst, {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 10000,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: false,
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
  autoHeight: true,
  loop: true,
  slidesPerView: 4,
  spaceBetween: 30,
  navigation: {
    nextEl: '.solutions-slider-next',
    prevEl: '.solutions-slider-prev',
  },
  pagination: {
    el: '.swiper-pagination-3',
    type: 'bullets',
    dynamicBullets: true,

  },
  autoplay: {
    delay: 3000,
  },
})



// Accordion //

document.querySelector('.service-accordion').addEventListener('click', (event) => {
  if (event.target.closest('.service-accordion__item')) {
    event.target.closest('.service-accordion__item').classList.toggle('service-accordion__item--active')
  }
});




// Nav on scroll

window.addEventListener('scroll', function () {
  const nav = document.querySelector('.header__nav')
  const windowPosition = window.scrollY > 0;

  nav.classList.toggle('header__nav--active', windowPosition)
})

// Burger Menu

const body = document.querySelector('.body')
const header = document.querySelector('.header')
const menuList = document.querySelector('.nav__list')
const burger = document.querySelector('.header__menu-burger')


burger.addEventListener('click', (e) => {
  e.preventDefault()
  header.classList.toggle('open')

  if (header.classList.contains('open')) {
    menuList.classList.add('nav__mobile-menu--active')
    body.classList.add('noscroll')
  } else {
    menuList.classList.remove('nav__mobile-menu--active')
    body.classList.remove('noscroll')
  }
})

// Active links

const links = document.querySelectorAll('.nav__link')

links.forEach(link => link.addEventListener('click', function () {
  links.forEach(activeLink => activeLink.classList.remove('nav__link--active'))
  this.classList.add('nav__link--active')

  if (menuList.classList.contains('nav__mobile-menu--active')) {
    header.classList.remove('open')
    menuList.classList.remove('nav__mobile-menu--active')
  }
}))

// Modul Windows

const cards = document.querySelectorAll('.solutions__card');
const modalOverlay = document.querySelector('.modal-overlay ');
const modals = document.querySelectorAll('.modal');

cards.forEach((el) => {
	el.addEventListener('click', (e) => {
		let path = e.currentTarget.getAttribute('data-path');

		modals.forEach((el) => {
			el.classList.remove('modal--visible');
		});

		document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
		modalOverlay.classList.add('modal-overlay--visible');
	});
});

modalOverlay.addEventListener('click', (e) => {

	if (e.target == modalOverlay) {
		modalOverlay.classList.remove('modal-overlay--visible');
		modals.forEach((el) => {
			el.classList.remove('modal--visible');
		});
	}
});













