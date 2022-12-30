const mobileBtn = document.getElementById('mobile-btn');
const nav = document.getElementById('primary-navigation');

mobileBtn.addEventListener('click', (e) => {
  nav.classList.toggle('mobile-menu-hidden')
  e.target.classList.toggle('fa-bars')
  e.target.classList.toggle('fa-xmark')
});


const swiper = new Swiper('#partner-logos .swiper', {
  direction: 'horizontal',
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: '.next-logo',
    prevEl: '.prev-logo',
  },
  height: 50,
  autoHeight: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 8,
      spaceBetween: 10
    },
    1024: {
      slidesPerView: 8,
      spaceBetween: 10
    }
  }
});


const featured = new Swiper('#featured-vehicles .swiper', {
  direction: 'horizontal',
  loop: true,
  spaceBetween: 10,
  slidesPerView: 3,
  navigation: {
    nextEl: '.btn-next',
    prevEl: '.btn-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 10
    }
  }
});
