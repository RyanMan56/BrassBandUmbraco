(function($){
  $(function(){
    resizeBanner();
    valignFooter();

    $('.button-collapse').sideNav();
    $('.dropdown-button').dropdown();
    $('.parallax').parallax();
    $('.scrollspy').scrollSpy();

    $('.nav-item').append('<div class="nav-line scale-transition scale-out"></div>');
  }); // end of document ready

  $(window).on('resize', function() {
    var win = $(this);
    resizeBanner();
    valignFooter();
  });

  $(window).scroll(function() {
    if ($(window).scrollTop() < $('#banner').height() - $('.nav-items').outerHeight() / 2) {
      $('#nav-background').removeClass('scale-in');
    } else {
      $('#nav-background').addClass('scale-in');
    }
    if ($(window).scrollTop() < 24) {
      $('.nav-items').removeClass('nav-remove-padding');
      $('#nav-background').addClass('nav-background-height');
    }
    else {
      $('#nav-background').removeClass('nav-background-height');
      $('.nav-items').addClass('nav-remove-padding');
    }
  });

  $('.nav-item').mouseenter(toggleAnimation);
  $('.nav-item').mouseleave(toggleAnimation);

})(jQuery); // end of jQuery name space

function resizeBanner() {
  var image_url = $('#banner').css('background-image'), image;

  // Remove url() or in case of Chrome url("")
  image_url = image_url.match(/^url\("?(.+?)"?\)$/);

  if (image_url[1]) {
      image_url = image_url[1];
      image = new Image();

      image.src = image_url;

      $(image).load(function () {
        var imageIdeal = new Image();
        imageIdeal.width = image.width * (300 / image.height);

        var targetHeight = ($('#banner').width() * image.height / image.width) - 1;
        $('#banner').css('height', targetHeight);

        var logo = document.getElementById('logo');
        $('.my-brand-logo').css('height', targetHeight);
        $('.my-brand-logo').css('width', targetHeight * logo.naturalWidth / logo.naturalHeight);
        $('#logo-container').css('height', targetHeight);
        $('#nav-container').css('height', targetHeight);

        afterBannerResize();
      });
  }
}

function afterBannerResize() {
  setupPushpin();
}

function setupPushpin() {
  $('#most-recent-container').addClass('most-recent-container-reset');
  $('#most-recent-container').pushpin({
    top: $('#most-recent-container').offset().top,
    offset: 75
  });
  $('#most-recent-container').removeClass('most-recent-container-reset');
}

function valignFooter() {
  if (window.innerWidth <= 600) {
    $('#footer-row').removeClass('valign-wrapper');
  } else {
    $('#footer-row').addClass('valign-wrapper');
  }
}

function toggleAnimation() {
  $(this).children('.nav-line').toggleClass('scale-in');
}
