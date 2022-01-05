var jDocument = $(document), widthWindow = $(window).width(), responsive = widthWindow > 992;

jDocument.ready(function () {
    // Init checked radio button
    $('.check-form').checkList();

});

jQuery.fn.extend({
    checkList: function () {
        return this.each(function (e) {
            var option = $(this).find('.radio');
            option.on('click', function () {
                option.removeClass('checked');
                $(this).addClass('checked');
            });
        });
    },
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

vnSlidePast = () => {
    new Swiper(".vnSlidePast", {
        cssMode: !0,
        spaceBetween: 0,
        slidesPerView: 'auto',
        slidesPerGroup: 2,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        breakpoints: {
            992: {
                slidesPerGroup: 4,
                slidesPerView: 4,
            },
        },
    })
}

let init = () => {
    vnSlide();
    vnSlidePast();
};
init();