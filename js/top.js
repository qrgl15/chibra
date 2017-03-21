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