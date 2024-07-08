 
//SLIDE SHOW //

let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide img');
const totalSlides = slides.length;

function showSlides() {
  slides.forEach((slide, index) => {
    slide.style.display = index === slideIndex ? 'block' : 'none';
  });
}

function nextSlide(n) {
  slideIndex += n;
  if (slideIndex >= totalSlides) {
    slideIndex = 0;
  } else if (slideIndex < 0) {
    slideIndex = totalSlides - 1;
  }
  showSlides();
}

function autoSlide() {
  slideIndex++;
  if (slideIndex >= totalSlides) {
    slideIndex = 0;
  }
  showSlides();
}

showSlides(); // Initial call to show the first slide
setInterval(autoSlide, 3000); // Change image every 3 seconds

// If you have buttons to manually change slides, you can call nextSlide with +1 or -1
document.querySelector('.prev').addEventListener('click', () => nextSlide(-1));
document.querySelector('.next').addEventListener('click', () => nextSlide(1));


// SCROLL EFFECT

document.addEventListener('DOMContentLoaded', function() {
document.addEventListener('scroll', function() {
  const elements = document.querySelectorAll('.LeftDirection');
  elements.forEach(element => {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
          element.classList.add('visible');
      }
  });
});
});




// NEW

document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll('.LeftDirection');

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
          } else {
              entry.target.classList.remove('visible');
          }
      });
  }, {
      threshold: 0.1
  });

  elements.forEach(element => {
      observer.observe(element);
  });
});