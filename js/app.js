/* resize */
if ((navigator.userAgent.indexOf('iPhone') > 0 && navigator.userAgent.indexOf('iPad') == -1) ||
  navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
  resizeEvent = "orientationchange";
} else {
  resizeEvent = "resize";
}

/* viwport */
$(function() {
  spView = 'width=device-width, minimum-scale=1, maximum-scale=10, user-scalable=no,initial-scale=1.0';
  tbView = 'width=1200px, maximum-scale=2.0, user-scalable=1';

  if (navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPod') > 0 || (navigator.userAgent.indexOf('Android') > 0 && navigator.userAgent.indexOf('Mobile') > 0)) {
    $('head').prepend('<meta name="viewport" content="' + spView + '" id="viewport">');
  } else if (navigator.userAgent.indexOf('iPad') > 0 || (navigator.userAgent.indexOf('Android') > 0 && navigator.userAgent.indexOf('Mobile') == -1) || navigator.userAgent.indexOf('A1_07') > 0 || navigator.userAgent.indexOf('SC-01C') > 0) {
    $('head').prepend('<meta name="viewport" content="' + tbView + '" id="viewport">');
  }

  if (navigator.userAgent.indexOf('iPhone') > 0) {
    if (window.devicePixelRatio == 3) {

      if (window.orientation == 0) {
        $('#viewport').attr('content', spView);
      } else {
        $('#viewport').attr('content', tbView);
      }

      window.onorientationchange = setView;

      function setView() {
        setTimeout(function() {
          location.reload();
          return false;
        }, 500);
      }
    }
  }
});

/* responsive */
$(function() {
  var w = $(window).width();
  var x = 767;

  if (w <= x) {
    $('.c_btn-list > li > a > span').tile(2);
  } else {
    $('.c_btn-list > li > a > span').tile(4);
  }

  var timer = false;

  $(window).on(resizeEvent, function() {
    if (timer !== false) {
      clearTimeout(timer);
    }
    timer = setTimeout(function() {
      var w = $(window).width();
      var x = 767;

      if (w <= x) {
        $('.l_menu').hide();
        $('.l_menu-btn > .btn').removeClass('is_active');
        $('.c_btn-list > li > a > span').tile(2);

      } else {
        $('.l_menu').show();
        $('.c_btn-list > li > a > span').tile(4);
      }
    }, 0);
  });
});

/* fixed nav */
$(function() {
  $(".js_fixed_trigger").waypoint({
    handler: function(direction) {
      if (direction == 'down') {
        $(".js_fixed-nav").removeClass('is_remove');
        $(".js_fixed-nav").addClass('is_scroll');
        $(".js_fixed-nav.is_scroll").hide().slideDown(300);

      } else {
        $(".js_fixed-nav.is_scroll").slideUp(200, function() {
          $(".js_fixed-nav").removeClass('is_scroll').slideDown(300);
          $(".js_fixed-nav").addClass('is_remove');
        });
      }
    }
  });
});

/* menu */
$(function() {
  $('.l_menu-btn > .btn').click(function() {
    $(this).toggleClass('is_active');
    $('.l_menu').slideToggle(0);
  });

  $('.l_menu-close').click(function() {
    $('.l_menu-btn > .btn').trigger('click');
  });
});

/* scroll */
$(function() {
  $('a[href^=#]' + 'a:not(.js_no-scroll)').click(function() {
    var speed = 500;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - 60;

    $('html, body').animate({
      scrollTop: position
    }, speed, "swing");

    return false;
  });
});
$(function(){
    $(".l_menu-btn > .btn").click(function(){
      if($('.l_header-btn').css('display') === 'none') {
        $('.l_header-btn').css('display', 'block');
      } else {
        $('.l_header-btn').css('display', 'none');
      }
      if($('.l_menu-nav > li:first-child').css('display') === 'none') {
        $('.l_menu-nav > li:first-child').css('display', 'block');
      } else {
        $('.l_menu-nav > li:first-child').css('display', 'none');
      }
      if($('.l_menu-nav').css('background-color') == 'rgb(169, 169, 169)') {
        $('.l_menu-nav').css('background-color',  '#fff');
      } else {
        $('.l_menu-nav').css('background-color',  '#a9a9a9');
      }
      return false;
    });
});
$(function(){
    $('a[href^=#branding]').on('click', function() {
      if($('.st-content','#branding').css('display') == 'none') {
        $('.st-content','#branding').css('display', 'block');
        $('#1').css('margin-top', ($('.images', '#branding').height()));
        // $('#inbound').css('margin', ($('.images', '#branding').height()) + 'px auto 0px auto');
      }else {
        // $('#inbound').css('margin', '3% auto 0px auto');
        $('#1').css('margin-top', '');
      }
      return false;
    });
    $('a[href^=#inbound]').on('click', function() {
      if($('.st-content','#inbound').css('display') == 'none') {
        $('.st-content','#inbound').css('display', 'block');
        $('#2').css('margin-top', ($('.images', '#inbound').height()));
        // $('#innovation').css('margin', ($('.images', '#inbound').height()) + 'px auto 0px auto');
      }else {
        // $('#innovation').css('margin', '3% auto 0px auto');
        $('#2').css('margin-top', '');
      }
      return false;
    });
    $('a[href^=#innovation]').on('click', function() {
      if($('.st-content','#innovation').css('display') == 'none') {
        $('.st-content','#innovation').css('display', 'block');
        $('#3').css('margin-top', ($('.images', '#innovation').height()));
        // $('#culture').css('margin', ($('.images', '#innovation').height()) + 'px auto 0px auto');
      }else {
        // $('#culture').css('margin', '3% auto 0px auto');
        $('#3').css('margin-top', '');
      }
      return false;
    });
});
$(window).on('load resize', function(){
    $('.blue').css('height', ($('.job_category').height()));
});