$( document ).ready(function() {
 
    $('.clints_slider').owlCarousel({
        loop: true,
        slideBy: 1,
        margin: 23,
        center:true,
        nav: true,
        dots: true,
        navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1000: {
                items: 3
            },
            1200: {
                items: 3
            }
        }
        
      });


      $('.InternationalTour-carousel').owlCarousel({
        loop: true,
        slideBy: 1,
        margin: 23,
        center:true,
        nav: false,
        dots: true,
        navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1000: {
                items: 3
            },
            1200: {
                items: 3
            }
        }
        
      });


      var shapers = $(window);

      shapers.on('scroll', function () {
        if (shapers.scrollTop() > 400) {
            $('.navbar_part').addClass('animated slideInDown fix')
        } else {
            $('.navbar_part').removeClass('animated slideInDown fix')
        }
    });















      
 
});
