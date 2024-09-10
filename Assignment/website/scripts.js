const carouselInner = document.querySelector('.carousel-inner');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;
const slideCount = slides.length;

function updateCarousel() {
  const translateX = -currentIndex * 100 + '%';
  carouselInner.style.transform = `translateX(${translateX})`;
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slideCount) % slideCount;
  updateCarousel();
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slideCount;
  updateCarousel();
});
 
updateCarousel(); // Initialize the carousel
