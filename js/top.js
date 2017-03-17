/* video position */
$(function() {
  var mv = $('.p_top-video');
  var vw = 1280;
  var vh = 720;
  var sf = vw / vh;

  function videoWrap() {
    var wh = $(window).height();
    var hh = $('.p_top-header-wrap').height();

    mv.height(wh - hh);
  }

  function videoPos() {
    var ww = $(window).width();
    var th = ww / sf;

    if (th < mv.height()) {
      th = mv.height();
      ww = th * sf;
    }

    $('.p_top-video > video').css({
      top: (mv.height() - th) / 2,
      left: (mv.width() - ww) / 2,
      width: ww,
      height: th
    });
  }
  videoWrap();
  videoPos();

  $(window).on(resizeEvent, function() {
    videoWrap();
    videoPos();
  });
});

/* slideshow */
$(function() {
  var $interval = 3000;
  var $fade_speed = 1000;

  $('.p_top-video-sp__item').css({
    "position": "relative",
    "overflow": "hidden"
  });

  $('.p_top-video-sp__item').hide().css({
    "position": "absolute"
  });

  $('.p_top-video-sp__item:first').addClass("is_active").show();

  setInterval(function() {
    var $active = $('.p_top-video-sp__item.is_active');
    var $next = $active.next('div').length ? $active.next('div') : $('.p_top-video-sp__item:first');
    $active.fadeOut($fade_speed).removeClass('is_active');
    $next.fadeIn($fade_speed).addClass('is_active');
  }, $interval);
});

/* scroll button / badge */
$(function() {
  $('.p_top-mv__scroll').fadeIn('fast');

  $('.p_top-mv__scroll a[href^=#]').click(function() {
    $('html, body').animate({
      scrollTop: $('#top-contents').offset().top
    }, 500, "swing");
    return false;
  });

  $('.l_menu-btn').click(function() {
    var active = $(this).attr('class');
    if ( active.match(/is_active/) ) {
      $('.p_top-mv__scroll').fadeOut('fast');
      $('.p_top-badge.u_sp').fadeTo('fast', 0, function() {
        $(this).css({'cssText': 'display: none!important;'});
      });      
    } else {
      $('.p_top-mv__scroll').fadeIn('fast');
      $('.p_top-badge.u_sp').fadeIn('fast');
    }
  });
  $('.l_menu-close').click(function() {
    $('.p_top-mv__scroll').fadeIn('fast');
    $('.p_top-badge.u_sp').fadeIn('fast');
  });

});

/* video wrap */
$(function() {
  var w = $(window).width();
  var h = $(window).height();
  var x = 767;
  var pcHeader = $('.p_top-header-wrap').height();
  var spHeader = $('.p_top-header-wrap__bottom').height();

  if (w <= x) {
    $('.p_top-video-wrap').height(h - spHeader);
  } else {
    $('.p_top-video-wrap').height(h - pcHeader);
  }

  var timer = false;

  $(window).on(resizeEvent, function() {
    if (timer !== false) {
      clearTimeout(timer);
    }
    timer = setTimeout(function() {
      var w = $(window).width();
      var h = $(window).height();
      var x = 767;
      var pcHeader = $('.p_top-header-wrap').height();
      var spHeader = $('.p_top-header-wrap__bottom').height();

      if (w <= x) {
        $('.p_top-video-wrap').height(h - spHeader);
      } else {
        $('.p_top-video-wrap').height(h - pcHeader);
      }
    }, 0);
  });
});

/* people slider */
$(function() {
  $('.js_top-people-slider').slick({
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 300,
    infinite: true,
    appendArrows: $('.p_top-people-slider__arrows'),
    responsive: [{
      breakpoint: 767,
      settings: {
        centerMode: true,
        centerPadding: '84px',
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });
});
