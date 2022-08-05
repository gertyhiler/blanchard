const projectSwiper = new Swiper('.partners-slider__wrapper', {

  slideClass: 'projects__item',
  wrapperClass: 'partners__list',
  navigation: {
    nextEl: '.partners-slider__btn_next',
    prevEl: '.partners-slider__btn_prev',
  },

  breakpoints: {
    1600: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    },

    1500: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 20,
    },

    1340: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 35,
    },

    1024: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 50,
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 32,
    },

    590: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 20,
    },

    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 0,
    }
  },
});

const gallerySwiper = new Swiper ('.gallery-slider', {
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

  breakpoints: {
    1600: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    },

    1140: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 25,
    },

    1024: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 35,
    },

    925: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 20,
    },

    774: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 15,
    },

    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 38,
    },
    500: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 20,
    },
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 30,
    }
  },
});

const eventSwiper = new Swiper ('.event-slider__wrapper', {

  slideClass: 'event',
  wrapperClass: 'events__list',

  navigation: {
    nextEl: '.event-slider__btn_next',
    prevEl: '.event-slider__btn_prev',
  },

  pagination: {
    el: '.event-slider__pagination',
    type: 'bullets',
    clickable: true,
  },

  breakpoints: {
    1920: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    },
    1024: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 27,
    },

    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
    },

    500: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 20,
    },

    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 0,
    }

  },
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
