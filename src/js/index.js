import * as navView from './views/navView'
import { elements } from './views/base'

// Get the navbar

// Get the offset position of the navbar
var sticky = main.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position


//NAVBAR CONTROLLER

function stickyNavBar() {
    // Change display
    if (window.pageYOffset >= sticky) {
        navView.renderStickyNav();
    } else {
        navView.removeStickyNav();
    }
}

// Main Controllers (Event Listeners etc.)
window.onscroll = () => {
    stickyNavBar();
};

elements.items.addEventListener('click', e => {
    console.log(e.target);
    //
    if (e.target.matches('.item__count-up, .item__count-up *')) {
        //Increase Number of Items

    } else if (e.target.matches('.item__count-down, .item__count-down *')) {
        //Decrease Number of Items
    } else if (e.target.matches('.box, .box *')) {
        //Delete item

    }
});