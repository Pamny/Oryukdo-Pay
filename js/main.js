$(document).ready(function () {
    var winWidth = $(window).width();
    $(window).on("resize", function () {
        winWidth = $(window).width();

        if (winWidth >= 1024) {

        }
    });

    $("header .m_tab").on("click", function () {
        $("nav").toggleClass("active");
        $(this).toggleClass("active");
    });


    $("nav .gnb > li > a").on("click", function (e) {
        if (winWidth < 1024) {
            e.preventDefault();
            $(this).siblings(".sub").slideToggle();
            $(this).parent().siblings().find(".sub").slideUp();
        }
    })

    $(".title p").on("click", function () {
        var i = $(this).index();
        $(".content3 .con3_wrap > div").eq(i).show().siblings().hide();
        $(".content3 .con3_wrap > div").eq(i).find("photo").children().eq(0).show().siblings().hide();
        $(this).addClass("on").siblings().removeClass("on");
    })

    $(".title p:first-child a").on("click", function () {
        $(".content3 .photo li:first-child").show().siblings().hide();
    })
    $(".title p:last-child a").on("click", function () {
        $(".content3 .photo li:nth-child(5)").show().siblings().hide();
    })

    $(".content3 .con3_wrap > div .box").on("click", function () {
        var i = $(this).index();
        var idx = $(".title .on").index();
        $(".content3 .photo li").eq(i + 4 * idx).show();
        $(".content3 .photo li").eq(i + 4 * idx).siblings().hide();
    });

    $(".content3 a").on("click", function (e) {
        e.preventDefault();
    })

    $(".content4 .box a").on("click", function (e) {
        e.preventDefault();
    });

    // var swiper = null;
    // var checkMedia = false;
    // var swiperOpt;

    // function setResponsiveSlider() {
    //     var winWidth = $(window).width();
        
    //     if(checkMedia){
    //         if(winWidth <= 767) { //mob
    //             swiperOpt = {
    //                 slidesPerView : 1,
    //                 spaceBetween : 0,
    //                 loop: false
    //             }
    //         } else if(winWidth >= 768 && winWidth < 1023){ //tab
    //             swiperOpt = {
    //                 slidesPerView : 2,
    //                 spaceBetween : 16,
    //                 loop: true
    //             }
    //         } else if(winWidth >= 1024) { //pc
    //             swiperOpt = {
    //                 slidesPerView : 4,
    //                 spaceBetween : 24,
    //                 loop: true
    //             }
    //         }
    //         swiper = new swiper(".my-swiper", swiperOpt);
    //     }
    // }

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 16,
                loop: true,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 24,
                loop: false,
            }
        },
    });


})