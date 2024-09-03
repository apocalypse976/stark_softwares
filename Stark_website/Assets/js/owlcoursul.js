$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 3, // Number of items you want to display
        loop: true, // Loop back to the start
        margin: 10, // Margin between items
        autoplay: true, // Autoplay the carousel
        autoplayTimeout: 3000, // Autoplay interval (3 seconds)
        autoplayHoverPause: true, // Pause on hover
        responsive: {
            0: {
                items: 1 // Number of items for screen width 0px
            },
            600: {
                items: 2 // Number of items for screen width 600px
            },
            1000: {
                items: 3 // Number of items for screen width 1000px
            }
        }
    });
});