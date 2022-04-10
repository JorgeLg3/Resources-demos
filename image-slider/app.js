let slideIndex = 0;
showSlides(slideIndex);
automaticSlide();

const prev = document.querySelector('.prev');
prev.addEventListener('click', () => showSlides(slideIndex-1));

const next = document.querySelector('.next');
next.addEventListener('click', () => showSlides(slideIndex+1));

function automaticSlide(){
    showSlides(slideIndex+1);
    setTimeout(automaticSlide, 5000);
}

function showSlides(n) {
    let slides = document.querySelectorAll('.slide');
    let dots = document.querySelectorAll('.dot');
    let i = (n < 0) ? slides.length - 1 : n % slides.length;

    slides[slideIndex].style.display = 'none';
    slides[i].style.display = 'block';

    dots[slideIndex].classList.remove('active');
    dots[i].classList.add('active');
    slideIndex = i;
}
