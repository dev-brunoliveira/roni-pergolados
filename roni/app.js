const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 10) {
		header.style.backgroundColor = '#333232';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});
let index = 0;

function moveSlide(step) {
  const slides = document.querySelector('.carousel-slide');
  const totalSlides = slides.children.length;

  index += step;

  if (index < 0) {
    index = totalSlides - 1;
  }
  
  if (index >= totalSlides) {
    index = 0;
  }

  slides.style.transform = `translateX(${-index * 100}%)`;
}
