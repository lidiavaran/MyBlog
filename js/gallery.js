let currentSlide = 0;

function showSlide(n) {
  let slides = document.querySelectorAll('.slides img');
  if (n >= slides.length) currentSlide = 0;
  else if (n < 0) currentSlide = slides.length - 1;
  else currentSlide = n;

  let slidesContainer = document.querySelector('.slides');
  slidesContainer.style.transform = `translateX(${-currentSlide * 600}px)`;
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

document.addEventListener("DOMContentLoaded", () => {
  showSlide(currentSlide);
});


const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const closeBtn = document.querySelector('.close');
const galleryImages = document.querySelectorAll('.grid-galerie img');


galleryImages.forEach(img => {
  img.addEventListener('click', () => {
    lightboxImg.src = img.src;
    lightbox.classList.add('active');
  });
});


closeBtn.addEventListener('click', () => {
  lightbox.classList.remove('active');
});


lightbox.addEventListener('click', e => {
  if (e.target === lightbox) {
    lightbox.classList.remove('active');
  }
});
