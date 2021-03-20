const hotelSlider = new Swiper('.hotel-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },

  keyboard: {
    enabled: true,   
  }
});
const reviewsSlider = new Swiper('.reviews-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },

  keyboard: {
    enabled: true,   
  }
});

const menuButton = document.querySelector('.menu-button');
menuButton.addEventListener('click', function () {
  document.querySelector('.navbar-bottom').classList.toggle('navbar-bottom--visible');
})

const modalBtns = document.querySelectorAll('[data-toggle=modal]');
const modalClose = document.querySelector('.modal__close');
const modalOverlay = document.querySelector('.modal__overlay');
const modalDialog = document.querySelector('.modal__dialog');
modalBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    modalOverlay.classList.add('modal__overlay--visible')
    modalDialog.classList.add('modal__dialog--visible')
  })
});
modalClose.addEventListener('click', () => {
  modalOverlay.classList.remove('modal__overlay--visible')
  modalDialog.classList.remove('modal__dialog--visible')
})
document.addEventListener('keydown', (e) => {
  if (e.code = 'Escape') {
    modalOverlay.classList.remove('modal__overlay--visible')
    modalDialog.classList.remove('modal__dialog--visible')    
  }
})