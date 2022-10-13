(function($) {
    "use strict";

    /*===================================================================================*/
    /*  owl carousel
    /*===================================================================================*/
    $(document).ready(function () {
        var dragging = true;
        var owlElementID = "#owl-main";

        function fadeInReset() {
            if (!dragging) {
                $(owlElementID + " .caption .fadeIn-1, " + owlElementID + " .caption .fadeIn-2, " + owlElementID + " .caption .fadeIn-3," + owlElementID + " .caption .fadeIn-4").stop().delay(800).animate({ opacity: 0 }, { duration: 400, easing: "easeInCubic" });
            }
            else {
                $(owlElementID + " .caption .fadeIn-1, " + owlElementID + " .caption .fadeIn-2, " + owlElementID + " .caption .fadeIn-3," + owlElementID + " .caption .fadeIn-4").css({ opacity: 0 });
            }
        }

        function fadeInDownReset() {
            if (!dragging) {
                $(owlElementID + " .caption .fadeInDown-1, " + owlElementID + " .caption .fadeInDown-2, " + owlElementID + " .caption .fadeInDown-3," + owlElementID + " .caption .fadeInDown-4").stop().delay(800).animate({ opacity: 0, top: "-15px" }, { duration: 400, easing: "easeInCubic" });
            }
            else {
                $(owlElementID + " .caption .fadeInDown-1, " + owlElementID + " .caption .fadeInDown-2, " + owlElementID + " .caption .fadeInDown-3," +  owlElementID + " .caption .fadeInDown-4").css({ opacity: 0, top: "-15px" });
            }
        }

        function fadeInUpReset() {
            if (!dragging) {
                $(owlElementID + " .caption .fadeInUp-1, " + owlElementID + " .caption .fadeInUp-2, " + owlElementID + " .caption .fadeInUp-3," + owlElementID + " .caption .fadeInUp-4").stop().delay(800).animate({ opacity: 0, top: "15px" }, { duration: 400, easing: "easeInCubic" });
            }
            else {
                $(owlElementID + " .caption .fadeInUp-1, " + owlElementID + " .caption .fadeInUp-2, " + owlElementID + " .caption .fadeInUp-3," + owlElementID + " .caption .fadeInUp-4").css({ opacity: 0, top: "15px" });
            }
        }

        function fadeInLeftReset() {
            if (!dragging) {
                $(owlElementID + " .caption .fadeInLeft-1, " + owlElementID + " .caption .fadeInLeft-2, " + owlElementID + " .caption .fadeInLeft-3, " + owlElementID + " .caption .fadeInLeft-4").stop().delay(800).animate({ opacity: 0, left: "15px" }, { duration: 400, easing: "easeInCubic" });
            }
            else {
                $(owlElementID + " .caption .fadeInLeft-1, " + owlElementID + " .caption .fadeInLeft-2, " + owlElementID + " .caption .fadeInLeft-3," + owlElementID + " .caption .fadeInLeft-4").css({ opacity: 0, left: "15px" });
            }
        }

        function fadeInRightReset() {
            if (!dragging) {
                $(owlElementID + " .caption .fadeInRight-1, " + owlElementID + " .caption .fadeInRight-2, " + owlElementID + " .caption .fadeInRight-3," + owlElementID + " .caption .fadeInRight-4").stop().delay(800).animate({ opacity: 0, left: "-15px" }, { duration: 400, easing: "easeInCubic" });
            }
            else {
                $(owlElementID + " .caption .fadeInRight-1, " + owlElementID + " .caption .fadeInRight-2, " + owlElementID + " .caption .fadeInRight-3," + owlElementID + " .caption .fadeInRight-4").css({ opacity: 0, left: "-15px" });
            }
        }

        function fadeIn() {
            $(owlElementID + " .active .caption .fadeIn-1").stop().delay(500).animate({ opacity: 1 }, { duration: 800, easing: "easeOutCubic" });
            $(owlElementID + " .active .caption .fadeIn-2").stop().delay(700).animate({ opacity: 1 }, { duration: 800, easing: "easeOutCubic" });
            $(owlElementID + " .active .caption .fadeIn-3").stop().delay(1000).animate({ opacity: 1 }, { duration: 800, easing: "easeOutCubic" });
            $(owlElementID + " .active .caption .fadeIn-4").stop().delay(1000).animate({ opacity: 1 }, { duration: 800, easing: "easeOutCubic" });
        }

        function fadeInDown() {
            $(owlElementID + " .active .caption .fadeInDown-1").stop().delay(500).animate({ opacity: 1, top: "0" }, { duration: 800, easing: "easeOutCubic" });
            $(owlElementID + " .active .caption .fadeInDown-2").stop().delay(700).animate({ opacity: 1, top: "0" }, { duration: 800, easing: "easeOutCubic" });
            $(owlElementID + " .active .caption .fadeInDown-3").stop().delay(1000).animate({ opacity: 1, top: "0" }, { duration: 800, easing: "easeOutCubic" });
            $(owlElementID + " .active .caption .fadeInDown-4").stop().delay(1000).animate({ opacity: 1, top: "0" }, { duration: 800, easing: "easeOutCubic" });
        }

        function fadeInUp() {
            $(owlElementID + " .active .caption .fadeInUp-1").stop().delay(500).animate({ opacity: 1, top: "0" }, { duration: 800, easing: "easeOutCubic" });
            $(owlElementID + " .active .caption .fadeInUp-2").stop().delay(700).animate({ opacity: 1, top: "0" }, { duration: 800, easing: "easeOutCubic" });
            $(owlElementID + " .active .caption .fadeInUp-3").stop().delay(1000).animate({ opacity: 1, top: "0" }, { duration: 800, easing: "easeOutCubic" });
            $(owlElementID + " .active .caption .fadeInUp-4").stop().delay(1000).animate({ opacity: 1, top: "0" }, { duration: 800, easing: "easeOutCubic" });
        }

        function fadeInLeft() {
            $(owlElementID + " .active .caption .fadeInLeft-1").stop().delay(500).animate({ opacity: 1, left: "0" }, { duration: 800, easing: "easeOutCubic" });
            $(owlElementID + " .active .caption .fadeInLeft-2").stop().delay(700).animate({ opacity: 1, left: "0" }, { duration: 800, easing: "easeOutCubic" });
            $(owlElementID + " .active .caption .fadeInLeft-3").stop().delay(1000).animate({ opacity: 1, left: "0" }, { duration: 800, easing: "easeOutCubic" });
            $(owlElementID + " .active .caption .fadeInLeft-4").stop().delay(1000).animate({ opacity: 1, left: "0" }, { duration: 800, easing: "easeOutCubic" });
        }

        function fadeInRight() {
            $(owlElementID + " .active .caption .fadeInRight-1").stop().delay(500).animate({ opacity: 1, left: "0" }, { duration: 800, easing: "easeOutCubic" });
            $(owlElementID + " .active .caption .fadeInRight-2").stop().delay(700).animate({ opacity: 1, left: "0" }, { duration: 800, easing: "easeOutCubic" });
            $(owlElementID + " .active .caption .fadeInRight-3").stop().delay(1000).animate({ opacity: 1, left: "0" }, { duration: 800, easing: "easeOutCubic" });
            $(owlElementID + " .active .caption .fadeInRight-4").stop().delay(1000).animate({ opacity: 1, left: "0" }, { duration: 800, easing: "easeOutCubic" });
        }

        $(owlElementID).owlCarousel({
            animateOut: 'fadeOut',
            autoplay:true,
            autoplayTimeout:5000,
            autoplayHoverPause:false,
            stopOnHover: true,
            loop:true,
            navRewind: true,
            items: 1,
            dots: true,
            nav:false,
            lazyLoad: true,
            stagePadding: 0,
            responsive : {
                0 : {
                    items : 1,
                },
                480: {
                    items : 1,
                },
                768 : {
                    items : 1,
                },
                992 : {
                    items : 1,
                },
                1199 : {
                    items : 1,
                },
                onTranslate : function(){
                      echo.render();
                    }
            },
            

            onInitialize   : function() {
                fadeIn();
                fadeInDown();
                fadeInUp();
                fadeInLeft();
                fadeInRight();
            },

            onInitialized   : function() {
                fadeIn();
                fadeInDown();
                fadeInUp();
                fadeInLeft();
                fadeInRight();
            },

            onResize   : function() {
                fadeIn();
                fadeInDown();
                fadeInUp();
                fadeInLeft();
                fadeInRight();
            },

            onResized   : function() {
                fadeIn();
                fadeInDown();
                fadeInUp();
                fadeInLeft();
                fadeInRight();
            },

            onRefresh   : function() {
                fadeIn();
                fadeInDown();
                fadeInUp();
                fadeInLeft();
                fadeInRight();
            },

            onRefreshed   : function() {
                fadeIn();
                fadeInDown();
                fadeInUp();
                fadeInLeft();
                fadeInRight();
            },

            onUpdate   : function() {
                fadeIn();
                fadeInDown();
                fadeInUp();
                fadeInLeft();
                fadeInRight();
            },

            onUpdated   : function() {
                fadeIn();
                fadeInDown();
                fadeInUp();
                fadeInLeft();
                fadeInRight();
            },

            onDrag : function() {
                dragging = true;
            },

            onTranslate   : function() {
                fadeIn();
                fadeInDown();
                fadeInUp();
                fadeInLeft();
                fadeInRight();
            },
            onTranslated   : function() {
                fadeIn();
                fadeInDown();
                fadeInUp();
                fadeInLeft();
                fadeInRight();
            },

            onTo   : function() {
                fadeIn();
                fadeInDown();
                fadeInUp();
                fadeInLeft();
                fadeInRight();
            },

            onChanged  : function() {
                fadeInReset();
                fadeInDownReset();
                fadeInUpReset();
                fadeInLeftReset();
                fadeInRightReset();
                dragging = false;
            }
        });

        if ($(owlElementID).hasClass("owl-one-item")) {
            $(owlElementID + ".owl-one-item").data('owlCarousel').destroy();
        }
        
        $(owlElementID + ".owl-one-item").owlCarousel({
            items: 1,
            nav: false,
            dots: false
        });
        
        /*===================================================================================*/
        /*  WOW 
        /*===================================================================================*/
        var wow = new WOW(
          {
            boxClass:     'wow',      // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset:       0,          // distance to the element when triggering the animation (default is 0)
            mobile:       true,       // trigger animations on mobile devices (default is true)
            live:         true,       // act on asynchronously loaded content (default is true)
            callback:     function(box) {
                $(box).find('.odometer').html(284);
            }
          }
        );
        wow.init();
            
        /*===================================================================================*/
        /*  LAZY LOAD IMAGES USING ECHO
        /*===================================================================================*/
        echo.init({
            offset: 100,
            throttle: 250,
            unload: false
        });

        /*===================================================================================*/
        /*  DATA HOVER ANIMATION
        /*===================================================================================*/
        $('[data-hover="animate"]').on('mouseenter', function(){
            var $this = $(this), animation = $this.data('animation');
            $this.addClass('animated ' + animation);
        });
        $('[data-hover="animate"]').on('mouseleave', function(){
            var $this = $(this), animation = $this.data('animation');
            $this.removeClass('animated ' + animation);
        });

        /*===================================================================================*/
        /*  OWL CAROUSEL
        /*===================================================================================*/

        $(".lookbook-slider").owlCarousel({
            items : 3,
            nav : false,
            slideSpeed : 300,
            dots: true,
            paginationSpeed : 400,
            navText: ["", ""],
            responsive:{
                0:{
                    items:1,
                },
                600:{
                    items:3,
                },
                1000:{
                    items:5,
                }
            }
        });


        $(".featured-carousel-product").owlCarousel({
            items : 1,
            nav : true,
            slideSpeed : 300,
            dots: false,
            paginationSpeed : 400,
            navText: ["<i class='icon icon-lookbook-arrowleft'></i>", "<i class='icon icon-lookbook-arrowright'></i>"],
            onTranslated: changeImageLeftRight,
            onInitialized: changeImageLeftRight,
            responsive:{
                0:{
                    items:1,
                },
                600:{
                    items:1,
                },
                1000:{
                    items:1,
                }
            }
        });

        $('.featured-post-slider').owlCarousel({
            items           : 1,
            nav             : false,
            slideSpeed      : 300,
            dots            : true,
            paginationSpeed : 400
        });


        $('.brand-slider').owlCarousel({
            items : 5,
            nav : false,
            slideSpeed : 300,
            dots: true,
            paginationSpeed : 400,
            responsive:{
                0:{
                    items:1,
                },
                600:{
                    items:2,
                },
                1000:{
                    items:5,
                }
            }
        });

        $('.single-product-related-products').owlCarousel({
            items : 4,
            nav : false,
            slideSpeed : 300,
            dots: true,
            paginationSpeed : 400,
            responsive:{
                0:{
                    items:1,
                },
                600:{
                    items:2,
                },
                1000:{
                    items:3,
                },
                1280:{
                    items:4,
                }
            }
        });

        /*===================================================================================*/
        /*  BX Slider
        /*===================================================================================*/
       
        $('#product-thumbnails').bxSlider({
            mode: 'vertical',
            slideMargin: 10,
            minSlides : 7,
            pager: false,
            controls : false,
        });

        $('#product-images').bxSlider({
            pager : false,
        });

        /*===================================================================================*/
        /* PRICE SLIDER
        /*===================================================================================*/
        $( "#slider-range" ).slider({
            range: true,
            min: 0,
            max: 300,
            values: [ 50,200 ],
            slide: function( event, ui ) {
                $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
            }
        });
        $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
            " - $" + $( "#slider-range" ).slider( "values", 1 ) );

        /*===================================================================================*/
        /*  ISOTOPE BLOG
        /*===================================================================================*/
        
        var $container = $('.posts');
        
        $container.imagesLoaded(function () {
            $container.isotope({
                itemSelector: '.isotope-item'
            });
        });
        
        $('.category-filter li a, .format-wrapper a').click(function () {
            
            var selector = $(this).attr('data-filter');
            
            $container.isotope({
                filter: selector
            });
            
            $('.category-filter li a').removeClass('active');
            $('.category-filter li a[data-filter="'+selector+'"]').addClass('active');
            
            $('html, body').animate({
                scrollTop: $('.category-filter').offset().top -130
            }, 600);
            
            return false;
            
        });
        
        $(window).on('resize', function () {
            $('.posts').isotope('reLayout')
        });
        

        /*===================================================================================*/
        /* CUSTOM SELECT
        /*===================================================================================*/
        $('#sort-by,#no-of-items').customSelect();
    });

    /*===================================================================================*/
    /* EXPANDING SEARCH BAR
    /*===================================================================================*/
    $('.icon').click(function () {
        $('.search').toggleClass('expanded');
    });

    /*===================================================================================*/
    /* Custom control
    /*===================================================================================*/ 
    //Radio Button
    if($('.le-radio').length>0){
        $('.le-radio').after('<i class="fake-box"></i>');
    }
    // Checkbox
    if($('.le-checkbox').length>0){
        $('.le-checkbox').after('<i class="fake-box"></i>');
    }
    
    /*===================================================================================*/
    /*  Yamm Dropdown
    /*===================================================================================*/
    $(document).on('click', '.yamm .dropdown-menu', function(e) {
        e.stopPropagation()
    });

    /*===================================================================================*/
    /*  Toggle 
    /*===================================================================================*/

    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
        $("body").toggleClass("open-sidebar");
           
    });

    /*===================================================================================*/
    /*  LOOKBOOK IMAGE CHANGER 
    /*===================================================================================*/

    function changeImageLeftRight(event){
        var currentId = $('.featured-carousel-product .owl-item.active').find('img').data('id');
        if(currentId){
            $('.featured-content-holder .featured-product').removeClass('animated');
            $('.featured-content-holder .featured-product').removeClass('zoomOut');
            $('.featured-content-holder .featured-product').addClass('animated zoomOut');
            setTimeout( function(){
                $('.featured-content-holder .featured-product').hide();
                $('.featured-content-holder .featured-image-' + currentId).each(function(){
                    $(this).removeClass('zoomOut');
                    $(this).removeClass('animated');
                    $(this).show();
                    $(this).addClass('animated zoomIn');
                })
            }, 500 );
        }
    }

    $('#single-product-tabs').on('shown.bs.tab', function(){
        $('.single-product-wear-it').owlCarousel({
            items : 4,
            nav : false,
            slideSpeed : 300,
            dots: true,
            paginationSpeed : 400,
            responsive:{
                0:{
                    items:1,
                },
                600:{
                    items:2,
                },
                1000:{
                    items:3,
                },
                1280:{
                    items:4,
                }

            }
        });
    });

    $('.quick-modal').on('shown.bs.modal', function () {
        $(".quick-view-slider").owlCarousel({
            items : 1,
            nav : false,
            slideSpeed : 300,
            dots: true,
            stopOnHover: true,
            paginationSpeed : 400,

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
    });
    
})(jQuery);