// Initialize Swiper with button controls only
const swiper = new Swiper('.swiper', {
  effect: 'coverflow',
  grabCursor: false,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 150,
    modifier: 1,
    slideShadows: true
  },
  spaceBetween: 30,
  loop: false,
  speed: 800,
  allowTouchMove: false,
  simulateTouch: false,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

// Envelope and Modal functionality
const envelope = document.getElementById('envelope');
const modal = document.getElementById('messageModal');
const closeBtn = document.querySelector('.close-btn');

envelope.addEventListener('click', function() {
  envelope.classList.add('open');
  setTimeout(() => {
    modal.classList.add('show');
  }, 400);
});

closeBtn.addEventListener('click', function() {
  modal.classList.remove('show');
  envelope.classList.remove('open');
});

window.addEventListener('click', function(event) {
  if (event.target === modal) {
    modal.classList.remove('show');
    envelope.classList.remove('open');
  }
});
