(function($) {
    'use strict'

    $('[data-toggle="tooltip"]').tooltip();

    /*========================================
        venobox  js
    ========================================*/
     $('.venobox').venobox(); 
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

        $('.ic-mobile-menu-open').on('click', function() {
            $('.ic-mobile-menu-overlay').addClass('active')
            $('.ic-mobile-menu-wrapper').addClass('active')
        });
        $('.ic-mobile-menu-overlay').on('click', function() {
            $('.ic-mobile-menu-overlay').removeClass('active')
            $('.ic-mobile-menu-wrapper').removeClass('active')
        });
        $('.ic-menu-close').on('click', function() {
            $('.ic-mobile-menu-overlay').removeClass('active')
            $('.ic-mobile-menu-wrapper').removeClass('active')
        });
     /*========================================
        Ic Mobile Menu Toggle
    ========================================*/

    var $icMobileNav = $('.ic-mobile-menu'),
        $icMobileSubMenuNav = $icMobileNav.find('.ic_sub_menu');
    $icMobileSubMenuNav.parent().prepend('<span class="menu-expand"> <i class="icofont-plus"></i></span>');
    $icMobileSubMenuNav.slideUp();
    $icMobileNav.on('click', 'li a, li .menu-expand', function(e) {
        var $this = $(this);
        if (($this.parent().attr('class').match(/\b(ic-menu-item-has-children|has-children|has-ic_sub_menu)\b/)) && ($this.attr('href') === '#' || $this.hasClass('menu-expand'))) {
            e.preventDefault();
            if ($this.siblings('ul:visible').length) {
                $this.siblings('ul').slideUp('slow');
            } else {
                $this.closest('li').siblings('li').find('ul:visible').slideUp('slow');
                $this.siblings('ul').slideDown('slow');
            }
        }
        if ($this.is('a') || $this.is('span') || $this.attr('clas').match(/\b(menu-expand)\b/)) {
            $this.parent().toggleClass('menu-open');
        } else if ($this.is('li') && $this.attr('class').match(/\b('ic-menu-item-has-children')\b/)) {
            $this.toggleClass('menu-open');
        }
    });
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
            autoplaySpeed: 5000,
            arrows:false,
            pauseOnHover:false,
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






