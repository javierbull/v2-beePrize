$(document).ready(function() {
    // Prueba
    $('#owl-carousel-cards-productos').owlCarousel({
        items: 4,
        margin: 0,
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        dots: false,
        nav: true,
        responsive: {
            0: {
              items: 1
            },
            480: {
              items: 1
            },
            568: {
              items: 2
            },
            768: {
              items: 2
            },
            824: {
              items: 3
            },
            1024: {
              items: 3
            },
            1366: {
              items: 4
            }
          }
    });
    // End prueba
});