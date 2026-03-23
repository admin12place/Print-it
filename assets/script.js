const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
let index = 0;
const nbSlides = slides.length;
const bannerImg = document.querySelector('.banner-img');
const tagLine = document.getElementById('tag-line');

//Incrémentation du slider (fleche de droite)
arrowRight.addEventListener('click', () => {
    index++;
    if(index >= nbSlides) {
        index = 0;
	}
	updateSlide()
	//bannerImg.src = slides[index].image;
	//tagLine.innerHTML = slides[index].tagLine;
})

//décrémentation du slider (fleche de gauche)
arrowLeft.addEventListener('click', () => {
    
    if(index <= 0) {
        index = nbSlides;
	}
	index--;
    updateSlide()
	
	//bannerImg.src = slides[index].image;
	//tagLine.innerHTML = slides[index].tagLine;
})

function updateSlide() {
  // fade-out
  bannerImg.classList.add('fade-out');
  tagLine.classList.add('fade-out');

  setTimeout(() => {
    // changement de contenu
    bannerImg.src = slides[index].image;
    tagLine.innerHTML = slides[index].tagLine;

    // fade-in
    bannerImg.classList.remove('fade-out');
    tagLine.classList.remove('fade-out');
  }, 400); // même durée que le CSS
}








