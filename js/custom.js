
$(document).ready(function () {

    // loader 
    $(window).on('load', function(){
        $("body").removeClass("loading");
    });

    
    // basic Layout structure
    dynamicVariableAndDimensions();

    $(window).resize(function () {
        dynamicVariableAndDimensions();
    });

    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > 5)
            $("body").addClass("scrolled");
        else
            $("body").removeClass("scrolled");
    })

    // navbar toggler 
    $(".navbar-toggler").click(function () {
        $(this).toggleClass("toggled").parents("body").toggleClass("navbar-open");
    })

    //input select boxes
    $(".input-select-box").click(function () {
        $(this).toggleClass("active");
    })

    // $booking popup

    $(".trigger-booking").click(function () {
        $(".appointment-popup").addClass("open");
        $("body").addClass("popup-open");
    })

    $(".appointment-popup .close").click(function () {
        $(".appointment-popup").removeClass("open");
        $("body").removeClass("popup-open");
    })


    $(".appointment-popup .screen-change").click(function () {
        $(".selection-screen-wrapper").toggleClass("active");
    })

    $(".appointment-popup .selection-screen-wrapper .input-select-box").click(function () {
        $(".appointment-popup .selection-screen-wrapper .input-select-box").removeClass("active");
        $(".appointment-popup .screen-change").click();
    })

    // slider initialize

    var $bannerSlider = $('.banner.slider'),
        bannerSlider = $bannerSlider[0];

    $(".banner.slider").slick({
        arrows: false,
        dots: true
    });

    $(".banner.slider .review-slider").slick({
        arrows: false,
        dots: true
    }).on('mousedown touchstart', function () {
        bannerSlider.slick.setOption({
            swipe: false
        })
    }).on('afterChange', function (event, slick) {
        bannerSlider.slick.setOption({
            swipe: true
        })
    });

    ////

    $(".gallery-slider").slick({
        arrows: true,
        dots: false
    })

    $(".services-slider").slick({
        rows: 2,
        slidesToShow: 5,
        responsive: [{
                breakpoint: 1199,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            }, {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    })

    $(".awards-slider").slick({
        slidesToShow: 6,
        responsive: [{
                breakpoint: 1199,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            }, {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    })

    var servicesSlideItemWidth = $(".services-slider .slick-slide .item").width();
    $(".services-slider .slick-slide .item").height(servicesSlideItemWidth)

    // setting background image via attribute
    $("[data-image-src]").each(function () {
        var imgUrl = $(this).attr("data-image-src");
        $(this).css("background-image", "url(" + imgUrl + ")");
    });


});

/* basic layouts and variables */
function dynamicVariableAndDimensions() {
    dynamicCssVariables();
    settingDynamicDimensions();
}

// dynamic css variables
function dynamicCssVariables() {
    siteHeaderHeight = jQuery(".site-header .navbar").height();

    $("body").get(0).style.setProperty("--siteHeaderHeight", siteHeaderHeight + "px");
}

// dynamic dimensions 
function settingDynamicDimensions() {
    $(".review-slider").width($(".review-slider").width())
}