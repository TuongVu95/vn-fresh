var jDocument = $(document), widthWindow = $(window).width(), responsive = widthWindow > 992;

jDocument.ready(function () {

});

vnSlide = () => {
    new Swiper(".vnSlide1", {
        cssMode: !0,
        slidesPerView: 4,
        spaceBetween: 0,
        slidesPerGroup: 4,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        }
    })
};

let init = () => {
    vnSlide();
};

init();