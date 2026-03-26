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
//Variables des images et des fleches
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right")
const nbSlides = slides.length;
const bannerImg = document.querySelector('.banner-img');
const tagLine = document.getElementById('tag-line');
let index = 0;


//Variables des bullets
const dotsContainer = document.getElementById('dotsContainer');
let dotIndex = 0;

//au chargement de la page
slides.forEach((_, index) => {
    const dotsElement = document.createElement('div');
    dotsElement.classList.add('dot');
    if (index === 0) {
        dotsElement.classList.add('dot_selected');
	}
	dotsContainer.appendChild(dotsElement);
})

//Et si on clique sur un bullet
	const dotList = document.querySelectorAll(".dot");
	dotList.forEach((_, dotIndex) => {
		dotList[dotIndex].addEventListener('click', () => {
		updateSlide(dotIndex)
		index = dotIndex;
		console.log(index)
		})
	})
	

//Incrémentation du slider (fleche de droite)
arrowRight.addEventListener('click', () => {
    index++;
    if(index >= nbSlides) {
        index = 0;
	}
	updateSlide(index)
	console.log(index)
})

//décrémentation du slider (fleche de gauche)
arrowLeft.addEventListener('click', () => {
    if(index <= 0) {
        index = nbSlides;
	}
	index--;
    updateSlide(index)
    console.log(index)
})

function updateSlide(i) {
  // fade-out
  bannerImg.classList.add('fade-out');
  tagLine.classList.add('fade-out');

  setTimeout(() => {
    // changement de contenu
    bannerImg.src = slides[i].image;
    tagLine.innerHTML = slides[i].tagLine;
    
    // fade-in
    bannerImg.classList.remove('fade-out');
    tagLine.classList.remove('fade-out');
  }, 400); // même durée que le CSS
  
    //Mise à jour des bullets
    if (document.querySelector('.dot_selected')) {
        document.querySelector('.dot_selected').classList.remove('dot_selected')
	}
    dotsContainer.children[i].classList.add('dot_selected')
    
}








