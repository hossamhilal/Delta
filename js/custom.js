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
    let viewHeight = window.innerHeight;
    $(window).on('scroll',function () {
       $(window).scrollTop() > (viewHeight + 100) ? $('.navWrapper').addClass('sticky') : $('.navWrapper').removeClass('sticky');
    });

 
    // Scroll Menu
    $('.navMenu a').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, 2000, 'linear');
        $('.mainMenu li').removeClass('active');
        $(this).parent().addClass('active');
    });  

    $(window).on('scroll',function () {
        var sections = $('section')
        sections.each(function() {
            let top = window.scrollY ;
            var secOffset = $(this).offset().top - 100,
                bottom = top + $(this).outerHeight();
            
            if (top >= secOffset && top <= bottom) {
                let activeId = $(this).attr('id');
                $('.navMenu li').removeClass('active');
                
                $('.navMenu a[href="#'+activeId+'"]').parent().addClass('active');
            }
        });
    });
    
    // Go through a sentence, wrap its characters with spans
    function setUpCharacters() {
        var $sentences = $('.header h1');

        // Run for each sentence
        $sentences.each(function () {
            var $sentence = $(this);
            var newContent = '';

            // Go through all characters of the sentence
            var x = 0.1;
            for (let i = 0; i < $sentence.text().length; i++) {
                var substring = $sentence.text().substr(i, 1);

                // If we have a character, wrap it
                if (substring != " ") {
                    newContent += '<span style="animation-delay:'+x+'s">' + substring + '</span>';
                    x = x + 0.2;
                } else {
                    newContent += substring;
                }
            }

            // Replace content
            $sentence.html(newContent);
        });
    }
    setUpCharacters();

    setTimeout(function(){
        $('.header p').addClass('show');
        setTimeout(function() {
            $('.header .flex').addClass('show');
        }, 1000);
    }, 10000);


    // COUNTER
    let a = 0;
    $(window).scroll(function() {
        var oTop = $('.features').offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
            count();
        }
    });

    function count () {
        $('.statistic h3').each(function () {
            // let countNum = $(this).text();
            $(this).prop('Counter',0).animate({
                Counter: $(this).text()
            }, {
                duration: 7000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
        a = 1;
    }

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

    
    // Partners Carousel 
    let partnerOwl = $('.partnerOwl');
    partnerOwl.owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        dots: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });

    // Go to the previous item
    $('.parntnerPrevious').click(function() {
        partnerOwl.trigger('prev.owl.carousel');
    });

    // Go to the next item
    $('.parntnerNext').click(function() {
        partnerOwl.trigger('next.owl.carousel');
    });

    // Team Carousel 
    let teamOwl = $('.teamOwl');
    teamOwl.owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        dots: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });

     // Go to the previous item
     $('.teamPrevious').click(function() {
        teamOwl.trigger('prev.owl.carousel');
    });

    // Go to the next item
    $('.teamNext').click(function() {
        teamOwl.trigger('next.owl.carousel');
    });
    


    // iniat WOW Js
    new WOW().init();


})(jQuery);

