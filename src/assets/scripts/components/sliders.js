new Swiper('.slider-reviews', {

    slidesPerView: 2.3,
    spaceBetween: 30,
    watchOverflow: false,

    grabCursor: true,

    navigation: {
      nextEl: '.reviews__slider-next',
      prevEl: '.reviews__slider-prev',
    },
  
    scrollbar: {
      el: '.slider-reviews__scrollbar',
      draggable: true,
    },

    breakpoints: {
      // when window width is >= 320px
      321: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      // // when window width is >= 480px
      769: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      // when window width is >= 640px
      993: {
        slidesPerView: 2.3,
        spaceBetween: 30
      }
    }
});

new Swiper('.slider-certificate', {

    slidesPerView: 3.3,
    spaceBetween: 30,
    watchOverflow: false,

    wathOverflow: true,
    grabCursor: true,

    navigation: {
      nextEl: '.certificate__slider-next',
      prevEl: '.certificate__slider-prev',
    },

    scrollbar: {
      el: '.slider-certificate__scrollbar',
      draggable: true,
    },

    breakpoints: {
      // when window width is >= 320px
      321: {
        slidesPerView: 1,
        spaceBetween: 10,
        autoHeight: true
      },
      // // when window width is >= 480px
      769: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      // when window width is >= 640px
      1140: {
        slidesPerView: 3.3,
        spaceBetween: 30
      }
    }
});