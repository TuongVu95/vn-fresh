var jDocument = $(document), widthWindow = $(window).width(), responsive = widthWindow > 992;

jDocument.ready(function () {
  //slide
  function slideGallery() {
    var swiper = new Swiper(".detailGalleryThumbs", {
      spaceBetween: 32,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
    });

    var swiper2 = new Swiper(".detailGalleryTop", {
      spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      thumbs: {
        swiper: swiper,
      },
    });
  }

  function slideContent() {
    var swiper = new Swiper(".slideContent", {
      pagination: {
        el: ".swiper-pagination",
      },
    });
  }

  function buttonOverlay() {
    var btnOverlay = $('.js--button-overlay');

    btnOverlay.click(function () {
      $('.st-card--article').addClass('full-body');
      $('.st-button-overlay').hide();
    });
  }

  let call = () => {
    slideGallery();

    slideContent();

    buttonOverlay();
  }
  call();
});