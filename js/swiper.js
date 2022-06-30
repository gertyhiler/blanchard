const galleryCounter = document.querySelector('.gallery__counter');

const projectSwiper = new Swiper('.partners__slider', {
  slidesPerView: 3,
  slidesPerGroup: 3,
  slideClass: 'projects__item',
  wrapperClass: 'partners__list',
  navigation: {
    nextEl: '.project-slider__btn_next',
    prevEl: '.project-slider__btn_prev',
  },
});

const gallerySwiper = new Swiper ('.gallery__slider', {
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 50,
  slideClass: 'slider__item',
  wrapperClass: 'gallery__list',

  navigation: {
    nextEl: '.gallery-slider__btn_next',
    prevEl: '.gallery-slider__btn_prev',
  },

  pagination : {
    el: '.gallery__counter',
    type: 'fraction'
  },
});

const eventSwiper = new Swiper ('.event-slider__wrapper', {
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 50,
  slideClass: 'event',
  wrapperClass: 'events__list',

  navigation: {
    nextEl: '.event-slider__btn_next',
    prevEl: '.event-slider__btn_prev',
  }
});

const heroSwiper = new Swiper('.hero-slider', {
  allowTouchMove: false,
  loop: true,
  effect: 'fade',
  speed: 10000,

  autoplay: {
    delay: 10000
  }
});

