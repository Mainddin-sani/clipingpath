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

      $('.ic-banner-slider-head').owlCarousel({
        items: 1,
        autoplay: false,
        loop: true,
        smartSpeed: 1500,
        margin: 0,
        nav: true,
        dots: false,
        navText: ["<i class='flaticon-left-arrow'>","<i class='flaticon-right-arrow'>"],
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
    $(function(){
        $(".twentytwenty-container").twentytwenty({
          default_offset_pct: 0.7, // How much of the before image is visible when the page loads
          orientation: 'horizontal', // Orientation of the before and after images ('horizontal' or 'vertical')
          before_label: 'January 2017', // Set a custom before label
          after_label: 'March 2017', // Set a custom after label
          no_overlay: true, //Do not show the overlay with before and after
          move_slider_on_hover: true, // Move slider on mouse hover?
          move_with_handle_only: true, // Allow a user to swipe anywhere on the image to control slider movement. 
          click_to_move: false // Allow a user to click (or tap) anywhere on the image to move the slider to that location.
        });
      });

    /*========================================
      sync Slider
      ========================================*/

    
    
      
})(jQuery);






