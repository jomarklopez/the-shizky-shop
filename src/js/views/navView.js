import { elements } from './base'


export const renderStickyNav = () => {
    elements.slideNav.style.transition = "0.3s";
    elements.slideNav.style.top = "0";
}

export const removeStickyNav = () => {
    elements.slideNav.style.transition = "0s";
    elements.slideNav.style.top = "-100px";
}