

const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
});
sections.forEach(section => {
    observer.observe(section);
});

const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
let currentSlideIndex = 0;

function nextSlide() {
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;
  updateSliderPosition();
}

function updateSliderPosition() {
  const slideWidth = slides[0].offsetWidth;
  slider.style.transition = 'transform 1s ease-in-out';
  slider.style.transform = `translateX(-${currentSlideIndex * slideWidth}px)`;
}

// Auto-advance the slider every 3 seconds
const interval = setInterval(nextSlide, 3000);

slider.addEventListener('transitionend', () => {
  if (currentSlideIndex === slides.length - 1) {
    // Reset to the first slide without a transition
    setTimeout(() => {
      slider.style.transition = 'none';
      currentSlideIndex = 0;
      updateSliderPosition();
      setTimeout(() => {
        slider.style.transition = 'transform 1s ease-in-out';
      }, 0);
    }, 0);
  }
});




