import { elements } from './base'


export const renderStickyNav = () => {
    elements.slideNav.style.top = "0";
}

export const removeStickyNav = () => {
    elements.slideNav.style.top = "-100px";
}