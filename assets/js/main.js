/*===============================================

Theme Name:The Bin Bath HTML Template
Version:1.0
Author: ITclan BD
Support: itclan@gmail.com
Description: The Bin Bath HTML Template

NOTE:
=====
Please DO NOT EDIT THIS JS, you may need to use "custom.js".

===============================================**/


(function($) {
    "use strict";

    

    /*========================================
      class add
    ========================================*/
    let classAdd = $('.ic-card-head');
    if(classAdd.length > 0){
        $('.ic-keep-head').addClass('ic-blast-section');
        $('.ic-blast-head').addClass('ic-blast-custom');
    }

    let footerBefore = $('.ic-contucts-card');
    if(footerBefore.length > 0){
        $('.ic-testimonial-head').addClass('ic-slider-custom-head');
        $('.ic-footer-area').addClass('ic-footer-custom');
    }


    /*========================================
      venobox js
    ========================================*/

    $('.venobox').venobox(); 

    /*========================================
        Preloader
    ========================================*/
    
       $(window).on('load', function () {
           $(".ic-preloader-head").fadeOut(500);
    
       });


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
    		$(".ic-navbar-main").removeClass("ic-sticky animated fadeInDown");
    		$(".ic-mobile-navbar-head").removeClass("ic-sticky animated fadeInDown");
    	} else {
    		$(".ic-navbar-main").addClass("ic-sticky animated fadeInDown");
    		$(".ic-mobile-navbar-head").addClass("ic-sticky animated fadeInDown");
    	}
    });



    /*========================================
    custom  select dropdown
    ========================================*/
    const select = document.querySelectorAll('.selectBtn');
    const option = document.querySelectorAll('.option');
    let index = 1;

    select.forEach(a => {
        a.addEventListener('click', b => {
            const next = b.target.nextElementSibling;
            next.classList.toggle('toggle');
            next.style.zIndex = index++;
            
        })
    })
    option.forEach(a => {
        a.addEventListener('click', b => {
            b.target.parentElement.classList.remove('toggle');

            const parent = b.target.closest('.select').children[0];
            parent.setAttribute('data-type', b.target.getAttribute('data-type'));
            parent.innerText = b.target.innerText;
        })
    })


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

    /*========================================
      Banner Slider
      ========================================*/

    $('.ic-banner-slider-head').owlCarousel({
        items: 1,
        autoplay: false,
        loop: true,
        smartSpeed: 1500,
        margin: 0,
        nav: false,
        dots: true,
        dotsData: true,

    });

    /*========================================
      properties details
    ========================================*/

    $('.ic-properties-details-head').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      });
    /*========================================
      testimonial Slider
      ========================================*/
    jQuery(document).ready(function($) {

        var o2 = $('.carouselOne')
            o2.owlCarousel({
            items: 1,
            singleItem: true,
            loop: true,
            margin: 10,
            dots: false,
            pagination: false,
            smartSpeed: 1000,
            nav: false,
            touchDrag: true,
            slideBy: 2,
            animateOut: 'fadeOut',
            mouseDrag: false
            });

            var o1 = $('.carouselTwo');
            o1.owlCarousel({
            items: 3,
            singleItem: true,
            loop: true,
            margin: 0,
            center:true,
            dots: false,

            smartSpeed: 1000,
            //dots:false,
            pagination: false,
            nav: true,
            touchDrag: true,
            slideBy: 1,
            mouseDrag: true,
            navText: [`<i class="flaticon-right-arrow"><i>`, `<i class="flaticon-left-arrow"><i>`],
            });

            var o1 = $('.carouselTwo'),
            o2 = $('.carouselOne');
            
            //Sync o2 by o1
            o1.on('click onDragged', '.owl-next', function() {
            o2.trigger('next.owl.carousel')
            });

            o1.on('click dragged.owl.carousel', '.owl-prev', function() {
            o2.trigger('prev.owl.carousel')
            });

            //Sync o1 by o2
            o2.on('click onDragged', '.owl-next', function() {
            o1.trigger('next.owl.carousel')
            });

            o2.on('click dragged.owl.carousel', '.owl-prev', function() {
            o1.trigger('prev.owl.carousel')
            });
    
    });

    /*========================================
      testimonial video
      ========================================*/

    $('.ic-video-play').on('click', function () {
        $(this).hide();
        if ($(this).prev(".ic-login-video").get(0).paused) {
            $(this).prev(".ic-login-video").get(0).play();
            $(this).prev(".ic-login-content").fadeOut();
        }
    });
    $('.ic-login-video').on('click', function(){
        $(this).next(".ic-video-play").fadeIn();
        $(this).get(0).pause();
    })

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



})(jQuery);

/*========================================
      Tooltip
    ========================================*/
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
    })