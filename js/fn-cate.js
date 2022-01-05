var jDocument = $(document), widthWindow = $(window).width(), responsive = widthWindow > 992;

jDocument.ready(function () {

});

var vnSlide = () => {
    var swiper = new Swiper(".cate-slide", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
        },
      });
};

let jInit = () => {
    vnSlide();
};

jInit();