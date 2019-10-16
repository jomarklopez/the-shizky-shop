import { elements } from './base'


export const renderStickyNav = () => {
    elements.slideNav.style.transition = "0.3s";
    elements.slideNav.style.top = "0";
}

export const removeStickyNav = () => {
    elements.slideNav.style.transition = "0s";
    elements.slideNav.style.top = "-40vw";
}

export const updateItemCount = () => {
    elements.item__countInput.value = '1';
}

// ANNOUNCEMENTS CAROUSEL

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

// ITEM CAROUSEL 

let currSet = 0;

export const nextItemSet = () => {
    if (currSet !== 200) {
        currSet += 100;
    } else {
        currSet = 0;
    }
    console.log(currSet);
    elements.itemCarousel.style.marginLeft = `-${currSet}%`;
}

let counter = 0;
const size = elements.itemSlides[0].clientWidth;

elements.itemCarousel.style.transform = 'translateX(' + (-size * counter) + 'px)';

export const prevSLIDE = () => {
    elements.itemCarousel.style.transition = "transform 0.4s ease-in-out";
    counter--;
    elements.itemCarousel.style.transform = 'translateX(' + (-size * counter) + 'px)';
}

export const nextSLIDE = () => {
    elements.itemCarousel.style.transition = "transform 0.4s ease-in-out";
    counter++;
    elements.itemCarousel.style.transform = 'translateX(' + (-size * counter) + 'px)';
}