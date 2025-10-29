let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlides() {
  slides.forEach(slide => slide.classList.remove('active'));
  slideIndex = (slideIndex + 1) % slides.length; 
  slides[slideIndex].classList.add('active');
  setTimeout(showSlides, 4000);
}
showSlides();

const dropdownLink = document.querySelector('.dropdown > a');
const dropdownContent = document.querySelector('.dropdown-content');

dropdownLink.addEventListener('click', e => {
  e.preventDefault();
  dropdownContent.classList.toggle('show');
});

window.addEventListener('click', e => {
  if (!dropdownContent.contains(e.target) && e.target !== dropdownLink) {
    dropdownContent.classList.remove('show');
  }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const targetId = anchor.getAttribute('href').slice(1);
    const target = document.getElementById(targetId);

    if (target) {
      e.preventDefault();
      window.scrollTo({
        top: target.offsetTop - 70, 
        behavior: 'smooth',
      });
      if (dropdownContent.classList.contains('show')) {
        dropdownContent.classList.remove('show');
      }
    }
  });
});

