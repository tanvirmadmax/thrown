(function ($) {
    'use strict';

    new WOW().init();

    // Mobile Menu
    $('.mobile-menu nav').meanmenu({
        meanScreenWidth: "991",
        meanMenuContainer: ".mobile-menu",
        meanMenuOpen: "<span></span> <span></span> <span></span>",
        onePage: false,
    });

    $(document).ready(function () {
        // sticky menu===================
        var wind = $(window);
        var sticky = $('#sticky-header');
        wind.on('scroll', function () {
            var scroll = wind.scrollTop();
            if (scroll < 100) {
                sticky.removeClass('sticky-nav');
            } else {
                sticky.addClass('sticky-nav');
            }
        });

    });

    // Preloader
    $(document).ready(function () {
        setTimeout(function () {
            $('.loader_bg').fadeToggle();
        }, 1000);

    });


    $(document).ready(function () {
        // sticky menu===================
        var wind = $(window);
        var sticky = $('#sticky-mobile');
        wind.on('scroll', function () {
            var scroll = wind.scrollTop();
            if (scroll < 100) {
                sticky.removeClass('sticky-mobile-menu');
            } else {
                sticky.addClass('sticky-mobile-menu');
            }
        });

    });

    $(document).ready(function () {
        // sticky menu===================
        var wind = $(window);
        var sticky = $('#navbar');
        wind.on('scroll', function () {
            var scroll = wind.scrollTop();
            if (scroll < 100) {
                sticky.removeClass('sticky-menu');
            } else {
                sticky.addClass('sticky-menu');
            }
        });

    });



    // Script nav
    $(".team-btn").click(function () {
        $(this).siblings(".team-socail-icon").toggleClass('active');
    });

    // Slider
    $('.banner-carousel').owlCarousel({
        items: 1,
        autoplay: true,
        autoplayTimeout: 5000,
        loop: true,
        animateOut: 'fadeOut',
        dots: false,
        nav: true,
        navText: ["01", "02", "03"],
    });

    // Slider
    $('.banner-carousel').owlCarousel({
        items: 1,
        autoplay: true,
        autoplayTimeout: 5000,
        loop: true,
        animateOut: 'fadeOut',
        dots: false,
        nav: true,
        navText: ["<i class='bi bi-arrow-right''></i>", "<i class='bi bi-arrow-left''></i>"],
    });


    // slider Active
    $('.slider-list').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        dots: false,
        dotsEach: false,
        smartSpeed: 3000,
        nav: false,
        navText: ["<i class='bi bi-arrow-right''></i>", "<i class='bi bi-arrow-left''></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            },
            1000: {
                items: 1
            },
            1920: {
                items: 1
            }
        }
    })

    // slider Active
    $('.slider-list2').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        dots: false,
        dotsEach: false,
        smartSpeed: 3000,
        nav: true,
        navText: ["<i class='bi bi-arrow-right''></i>", "<i class='bi bi-arrow-left''></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            },
            1000: {
                items: 1
            },
            1920: {
                items: 1
            }
        }
    })



    // testimonial Active
    $('.testi_list').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        dots: true,
        nav: false,
        navText: ["<i class='bi bi-chevron-left''></i>", "<i class='bi bi-chevron-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            },
            1000: {
                items: 2
            },
            1920: {
                items: 2
            }
        }
    })

    // testimonial Active
    $('.testi_list2').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        dots: false,
        nav: true,
        navText: ["<i class='bi bi-arrow-left''></i>", "<i class='bi bi-arrow-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            },
            1000: {
                items: 1
            },
            1920: {
                items: 1
            }
        }
    })

    // testimonial Active
    $('.testi_list3').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        dots: false,
        nav: false,
        navText: ["<i class='bi bi-arrow-left''></i>", "<i class='bi bi-arrow-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            },
            1000: {
                items: 1
            },
            1920: {
                items: 1
            }
        }
    })

    // testimonial Active
    $('.testi_list4').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        dots: false,
        nav: true,
        navText: ["<i class='bi bi-chevron-left''></i>", "<i class='bi bi-chevron-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            },
            1000: {
                items: 1
            },
            1920: {
                items: 1
            }
        }
    })


    // brand Active
    // $('.brand_list').owlCarousel({
    //     loop: true,
    //     autoplay: true,
    //     autoplayTimeout: 10000,
    //     dots: false,
    //     nav: false,
    //     navText: ["<i class='fa fa-long-arrow-left''></i>", "<i class='fa fa-long-arrow-right''></i>"],
    //     responsive: {
    //         0: {
    //             items: 2
    //         },
    //         768: {
    //             items: 4
    //         },
    //         992: {
    //             items: 5
    //         },
    //         1000: {
    //             items: 6
    //         },
    //         1920: {
    //             items: 6
    //         }
    //     }
    // })
    $(".brand_list").slick({
        slidesToShow: 1,
        infinite: true,
        autoplay: true,
        draggable: true,
        arrows: true,
        slidesToScroll: 1,
        loop: true,
        dots: true,
        speed: 1500,
        prevArrow:
            "<button type='button' class='slider-arrow-btn prev-btn'><i class='fa fa-long-arrow-left'></i></button>",
        nextArrow:
            "<button type='button' class='slider-arrow-btn next-btn'><i class='fa fa-long-arrow-right'></i></button>",
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    autoplay: true,
                },
            },
        ],
    });

    // brand Active
    $('.blog_list').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        dots: false,
        nav: true,
        navText: ["<i class='bi bi-chevron-left''></i>", "<i class='bi bi-chevron-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            },
            1000: {
                items: 1
            },
            1920: {
                items: 1
            }
        }
    })

    // brand Active
    $('.blog_list-two').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        dots: false,
        nav: true,
        navText: ["<i class='bi bi-chevron-left''></i> Previous", "Next<i class='bi bi-chevron-right''></i> "],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            },
            1000: {
                items: 1
            },
            1920: {
                items: 1
            }
        }
    })

    $(function () {
        $('.header-button')
            .on('mouseenter', function (e) {
                var parentOffset = $(this).offset(),
                    relX = e.pageX - parentOffset.left,
                    relY = e.pageY - parentOffset.top;
                $(this).find('span').css({
                    top: relY,
                    left: relX
                })
            })
            .on('mouseout', function (e) {
                var parentOffset = $(this).offset(),
                    relX = e.pageX - parentOffset.left,
                    relY = e.pageY - parentOffset.top;
                $(this).find('span').css({
                    top: relY,
                    left: relX
                })
            });
    });


    /*---------------------
    WOW active js 
    --------------------- */
    new WOW().init();

    // counterUp
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    //Header Search
    if ($('.search-box-outer').length) {
        $('.search-box-outer').on('click', function () {
            $('body').addClass('search-active');
        });
        $('.close-search').on('click', function () {
            $('body').removeClass('search-active');
        });
    }




    /* Portfolio Isotope  */
    $('.image_load').imagesLoaded(function () {

        if ($.fn.isotope) {

            var $portfolio = $('.image_load');

            $portfolio.isotope({

                itemSelector: '.grid-item',

                filter: '*',

                resizesContainer: true,

                layoutMode: 'masonry',

                transitionDuration: '0.8s'

            });
            $('.menu-filtering li').on('click', function () {

                $('.menu-filtering li').removeClass('current_menu_item');

                $(this).addClass('current_menu_item');

                var selector = $(this).attr('data-filter');

                $portfolio.isotope({

                    filter: selector,

                });

            });

        };

    });



    // Venubox

    $('.venobox').venobox({

        numeratio: true,

        infinigall: true

    });

    /*--------------------------
     scrollUp
    ---------------------------- */
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    })


    jQuery(document).ready(function ($) {
        "use strict";

        // =======< accordion js >========
        $(".accordion > li:eq(0) a").addClass("active").next().slideDown();
        $('.accordion a').on('click', function (j) {
            var dropDown = $(this).closest("li").find("p");

            $(this).closest(".accordion").find("p").not(dropDown).slideUp();

            if ($(this).hasClass("active")) {
                $(this).removeClass("active");
            } else {
                $(this).closest(".accordion").find("a.active").removeClass("active");
                $(this).addClass("active");
            }

            dropDown.stop(false, true).slideToggle();

            j.preventDefault();
        });



        //=====< barfiller script >====
        $('#bar1').barfiller({
            duration: 7000
        });
        $('#bar2').barfiller({
            duration: 7000
        });
        $('#bar3').barfiller({
            duration: 7000
        });
        $('#bar4').barfiller({
            duration: 7000
        });
        $('#bar5').barfiller({
            duration: 7000
        });



        //======< Custom Tab >======
        $('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');

        $(".tab ul.tabs li a").on("click", function (g) {
            var tab = $(this).closest('.tab'),
                index = $(this).closest('li').index();

            tab.find('ul.tabs > li').removeClass('current');
            $(this).closest('li').addClass('current');

            tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
            tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();

            g.preventDefault();
        });

    });





    // <!--jave script -->

    $(window).on('scroll', function () {
        var scrolled = $(window).scrollTop();
        if (scrolled > 300) $('.go-top').addClass('active');
        if (scrolled < 300) $('.go-top').removeClass('active');
    });

    $('.go-top').on('click', function () {
        $("html, body").animate({
            scrollTop: "0"
        }, 1200);
    });


    $(".circle_percent").each(function () {
        var $this = $(this),
            $dataV = $this.data("percent"),
            $dataDeg = $dataV * 3.6,
            $round = $this.find(".round_per");
        $round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");
        $this.append('<div class="circle_inbox"><span class="percent_text"></span></div>');
        $this.prop('Counter', 0).animate({
            Counter: $dataV
        }, {
            duration: 2000,
            easing: 'swing',
            step: function (now) {
                $this.find(".percent_text").text(Math.ceil(now) + "%");
            }
        });
        if ($dataV >= 51) {
            $round.css("transform", "rotate(" + 360 + "deg)");
            setTimeout(function () {
                $this.addClass("percent_more");
            }, 1000);
            setTimeout(function () {
                $round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");
            }, 1000);
        }
    });




})(jQuery);



$(document).ready(function (o) {
    0 < o(".offset-side-bar").length &&
        o(".offset-side-bar").on("click", function (e) {
            e.preventDefault(), e.stopPropagation(), o(".cart-group").addClass("isActive");
        }),
        0 < o(".close-side-widget").length &&
        o(".close-side-widget").on("click", function (e) {
            e.preventDefault(), o(".cart-group").removeClass("isActive");
        }),
        0 < o(".navSidebar-button").length &&
        o(".navSidebar-button").on("click", function (e) {
            e.preventDefault(), e.stopPropagation(), o(".info-group").addClass("isActive");
        }),
        0 < o(".close-side-widget").length &&
        o(".close-side-widget").on("click", function (e) {
            e.preventDefault(), o(".info-group").removeClass("isActive");
        }),
        o("body").on("click", function (e) {
            o(".info-group").removeClass("isActive"), o(".cart-group").removeClass("isActive");
        }),
        o(".sidebar-widget").on("click", function (e) {
            e.stopPropagation();
        }),
        0 < o(".xs-modal-popup").length &&
        o(".xs-modal-popup").magnificPopup({
            type: "inline",
            fixedContentPos: !2,
            fixedBgPos: !0,
            overflowY: "auto",
            closeBtnInside: !2,
            callbacks: {
                beforeOpen: function () {
                    this.st.mainClass = "my-mfp-slide-bottom xs-promo-popup";
                },
            },
        });


});

var dropdown = document.querySelectorAll('.dropdown');
		var dropdownArray = Array.prototype.slice.call(dropdown, 0);
		dropdownArray.forEach(function (el) {
			var button = el.querySelector('a[data-toggle="dropdown"]'),
				menu = el.querySelector('.dropdown-menu'),
				arrow = button.querySelector('i.icon-arrow');

			button.onclick = function (event) {
				if (!menu.hasClass('show')) {
					menu.classList.add('show');
					menu.classList.remove('hide');
					arrow.classList.add('open');
					arrow.classList.remove('close');
					event.preventDefault();
				} else {
					menu.classList.remove('show');
					menu.classList.add('hide');
					arrow.classList.remove('open');
					arrow.classList.add('close');
					event.preventDefault();
				}
			};
		})

		Element.prototype.hasClass = function (className) {
			return this.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(this.className);
		};