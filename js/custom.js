/*global $ */
(function ($) {
    "use strict";

    // // Pre Loading 
    // window.onpaint = preloadFunc();
    // function preloadFunc() {
    //     $('body').addClass('stopScroll');
    // }
    
    // Loader 
    // $(window).on('load', function () { 
    //     setTimeout(function () {
    //         $('.loader').fadeOut(3000, function () {
    //             $('body').removeClass('stopScroll');
    //             $(this).remove();
    //         }); 
    //     },5000);   
    // });

    // sticky navbar
    // let viewHeight = window.innerHeight;
    // $(window).on('scroll',function () {
    //    $(window).scrollTop() > (viewHeight + 100) ? $('.navWrapper').addClass('sticky') : $('.navWrapper').removeClass('sticky');
    // });

 
    // Scroll Menu
    // $('.navMenu a').on('click', function (e) {
    //     e.preventDefault();
    //     $('html, body').animate({
    //         scrollTop: $($(this).attr('href')).offset().top - 100
    //     }, 2000, 'linear');
    //     $('.mainMenu li').removeClass('active');
    //     $(this).parent().addClass('active');
    // });  

    // $(window).on('scroll',function () {
    //     var sections = $('section')
    //     sections.each(function() {
    //         let top = window.scrollY ;
    //         var secOffset = $(this).offset().top - 100,
    //             bottom = top + $(this).outerHeight();
            
    //         if (top >= secOffset && top <= bottom) {
    //             let activeId = $(this).attr('id');
    //             $('.navMenu li').removeClass('active');
                
    //             $('.navMenu a[href="#'+activeId+'"]').parent().addClass('active');
    //         }
    //     });
    // });
    

    // COUNTER
    // let a = 0;
    // $(window).scroll(function() {
    //     var oTop = $('.features').offset().top - window.innerHeight;
    //     if (a == 0 && $(window).scrollTop() > oTop) {
    //         count();
    //     }
    // });

    // function count () {
    //     $('.statistic h3').each(function () {
    //         // let countNum = $(this).text();
    //         $(this).prop('Counter',0).animate({
    //             Counter: $(this).text()
    //         }, {
    //             duration: 7000,
    //             easing: 'swing',
    //             step: function (now) {
    //                 $(this).text(Math.ceil(now));
    //             }
    //         });
    //     });
    //     a = 1;
    // }

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

    
    // Header Carousel 
    $('.owlHeader').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        dots: true,
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

    // let gridWidth = $('.grid').width();
    // $('.grid').masonry({
    //     // options...
    //     columnWidth: '.grid-sizer',
    //     itemSelector: '.grid-item',
    //     percentPosition: true
    //     // columnWidth: gridWidth/4
    // });



    // iniat WOW Js
    new WOW().init();


})(jQuery);

