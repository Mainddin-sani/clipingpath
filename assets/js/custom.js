(function($) {
    'use strict'

    $('[data-toggle="tooltip"]').tooltip();

    /*========================================
        Scroll  top
    ========================================*/

    var scrollTop = $('.ic-back-to-top');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            scrollTop.css({
                'bottom': '12%',
                'opacity': '1',
                'transition': 'all .5s ease-in-out'
            });
        } else {
            scrollTop.css({
                'bottom': '-15%',
                'opacity': '0',
                'transition': 'all .5s ease-in-out'
            })
        }
    });
    scrollTop.on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
        return false;
    });


 /*=====================================
     Sticky Menu
 =========================================*/

     var icWindow=$(window);

     icWindow.on('scroll', function () {
     var icScroll = icWindow.scrollTop();
     if (icScroll < 150) {
         $(".navbar").removeClass("ic-sticky animated fadeInDown");
         $(".ic-mobile-navbar-head").removeClass("ic-sticky animated fadeInDown");
     } else {
         $(".navbar").addClass("ic-sticky animated fadeInDown");
         $(".ic-mobile-navbar-head").addClass("ic-sticky animated fadeInDown");
     }
 });

    /*========================================
    Ic Mobile menu activation
    ========================================*/

    var $navOpen = $(".offcanvas_main_menu li a");  

    $('.ic-mobile-menu-open,.ic-mobile-menu-overlay').on('click', function () {
        $('.ic-mobile-menu-wrapper,.ic-mobile-menu-overlay').addClass('active')
    });
    $('.ic-menu-close,.ic-mobile-menu-overlay').on('click', function () {
        $('.ic-mobile-menu-wrapper,.ic-mobile-menu-overlay').removeClass('active')
    }); 
    // mobile menu hide in any menu click 
    $navOpen.on('click', function(){
        $('.ic-mobile-menu-wrapper,.ic-mobile-menu-overlay').removeClass("active");
    }); 
    // single page menu active  
    $(".nav-item").on("click", function(e){
        $("li.nav-item").removeClass("active");
        $(this).addClass("active");
    });

   /*========================================
      Banner Slider
      ========================================*/

    //   $('.ic-banner-slider-head').owlCarousel({
    //     items: 1,
    //     autoplay: false,
    //     loop: true,
    //     smartSpeed: 1500,
    //     animateIn: 'fadeIn', // add this
    //     animateOut: 'fadeOut', // and this
    //     // animateIn: 'slideInLeft',
    //     margin: 0,
    //     nav: true,
    //     dots: false,
    //     // navText: ["<i class='flaticon-left-arrow'>","<i class='flaticon-right-arrow'>"],
    // });
//     $('.ic-banner-slider-head').owlCarousel({
//     fade: true,
//     items:1,
//     margin:0,
//     smartSpeed:450
// });

        $('.ic-banner-slider-head').slick({
            dots: false,
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear',
            autoplay: true,
            autoplaySpeed: 2000,
            arrows:false,
        });
   /*========================================
      work Slider
      ========================================*/

      $('.ms-work-slider').owlCarousel({
        margin: 30,
        items: 2,
        autoplay: false,
        loop: true,
        smartSpeed: 1500,
        nav: false,
        dots: true,
    });

    /*========================================
      properties details
    ========================================*/
    $(".beforeafterautoslide").cndkbeforeafter(
        {
            autoSliding: true
        }
    );

    /*========================================
      sync Slider
      ========================================*/

    
    
      
})(jQuery);






