//Carrossel de imagens
let currentIndex = 0;

function changeSlide(direction) {
    const desktopCarousel = document.querySelector('.carousel-desktop .carousel-images');
    const mobileCarousel = document.querySelector('.carousel-mobile .carousel-images');
    const isMobile = window.matchMedia("(max-width: 767px)").matches;

    const carousel = isMobile ? mobileCarousel : desktopCarousel;

    const totalSlides = carousel.children.length;
      currentIndex = (currentIndex + direction + totalSlides) % totalSlides;

    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}


//Volta p/ topo da pag.
const span2 = document.querySelector('.span2')

span2.addEventListener('click', () =>{
    window.scroll({top: window, behavior: "smooth"})
})
