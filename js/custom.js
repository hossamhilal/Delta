/*global $ */
(function ($) {
    "use strict";

    // Pre Loading 
    window.onpaint = preloadFunc();
    function preloadFunc() {
        $('body').addClass('stopScroll');
    }
    
    // Loader 
    $(window).on('load', function () { 
        setTimeout(function () {
            $('.loader').fadeOut(2000, function () {
                $('body').removeClass('stopScroll');
                $(this).remove();
            }); 
        },1000);   
    });

    // sticky navbar
    let viewHeight = window.innerHeight + 100;
    $(window).on('scroll',function () {
       $(window).scrollTop() > viewHeight ? $('.navWrapper').addClass('sticky') : $('.navWrapper').removeClass('sticky');
    });

    // OPEN SIDE  MENU 
    $('.menuBtn').on('click', function () {
        $('.navMenu').toggleClass('show');
        $('.bodyOverlay').addClass('show');
        setTimeout(function () {
            $('body').addClass('stopScroll');
        }, 100);
    });

    // CLOSE SIDE MENU 
    $('.bodyOverlay').on('click', function () {
        $(this).removeClass('show');
        $('.navMenu').removeClass('show');
        $('body').removeClass('stopScroll');
    });

    let isRTL = $('body').hasClass('ar') ? true : false;
    // Header Carousel 
    let owl = $('.owlHeader').owlCarousel({
        rtl:isRTL,
        loop:true,
        margin:0,
        nav:false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000,
        checkVisible: false,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    // Team Carousel 
   $('.owlMaterials').owlCarousel({
        rtl:isRTL,
        loop:true,
        margin:20,
        nav:false,
        dots: false,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:2,
                stagePadding: 50
            },
            1000:{
                items:3,
                stagePadding: 50
            }
        }
    });

    // init WOW Js
    new WOW().init();


})(jQuery);

