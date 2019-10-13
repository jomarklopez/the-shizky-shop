import * as navView from './views/navView'


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

(function () {

    document.getElementById("navCart").addEventListener("click", () => {
        document.querySelector(".shopping-cart").fadeToggle("fast")
    });

})();

/* function cartToggle() {
    $("#navCart").on("click", function () {
        $(".shopping-cart").fadeToggle("fast");
    });
} */