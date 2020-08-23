$(document).ready(function () {

    $('#meet-the-team .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        dots: true,
        responsive:{
            0:{
                items: 1
            },
            544:{
                items : 2
            }
        }
    })

});