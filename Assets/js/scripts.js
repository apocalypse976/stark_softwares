
var whyslider= $('.why-slider')
whyslider.owlCarousel({
    items:4,
    loop:true,
    autoplay:true,
    autoplayTimeout:100,
    autoplayHoverPause:false,
    margin:10,
    responsiveClass:true,
    dots:true,
    nav:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
            loop:false
        }
    }
});
var servicesslider= $('.servicesslider')
servicesslider.owlCarousel({
    items:4,
    loop:true,
    autoplay:true,
    autoplayTimeout:100,
    autoplayHoverPause:false,
    margin:10,
    responsiveClass:true,
    dots:true,
    nav:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
            loop:false
        }
    }
});

var catalougeslider= $('.catalaugeacoursel')
catalougeslider.owlCarousel({
    items:4,
    loop:true,
    autoplay:true,
    autoplayTimeout:100,
    autoplayHoverPause:false,
    margin:10,
    responsiveClass:true,
    dots:true,
    nav:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
            loop:false
        }
    }
});