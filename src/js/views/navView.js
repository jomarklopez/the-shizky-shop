import { elements } from './base'


export const renderStickyNav = () => {
    elements.slideNav.style.transition = "0.3s";
    elements.slideNav.style.top = "0";
}

export const removeStickyNav = () => {
    elements.slideNav.style.transition = "0s";
    elements.slideNav.style.top = "-100px";
}

export const updateItemCount = () => {
    elements.item__countInput.value = '1';
}

//CAROUSEL

let slideIndex = 1;
var slideAuto;

export const showSlides = () => {
    slideChanger();
    if (slideIndex === elements.carouselImages.length) {
        slideIndex = 0;
    }
    slideIndex++;
    slideAuto = setTimeout(showSlides, 2000);
}

let slideChanger = () => {
    for (let i = 0; i < elements.carouselImages.length; i++) {
        elements.carouselImages[i].style.display = "none";
    }
    elements.carouselImages[slideIndex - 1].style.display = "block";
}
export const prevSlide = () => {
    if (slideIndex === 1) {
        slideIndex = elements.carouselImages.length;
        slideChanger();
        clearTimeout(slideAuto);
        setTimeout(showSlides, 4000);
    } else {
        slideIndex--;
        slideChanger();
        clearTimeout(slideAuto);
        setTimeout(showSlides, 4000);
    }

}

export const nextSlide = () => {
    if (slideIndex === elements.carouselImages.length) {
        slideIndex = 1;
        slideChanger();
        clearTimeout(slideAuto);
        setTimeout(showSlides, 4000);
    } else {
        slideIndex++;
        slideChanger();
        clearTimeout(slideAuto);
        setTimeout(showSlides, 4000);
    }
}