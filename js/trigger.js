$(function(){
    var $menuElement = $('#btn');

    $('#btn-trigger').on('click', function(){
      if($menuElement.css('display') === 'none') {
        $('#btn').css('display', 'block');
      } else {
        $('#btn').css('display', 'none');
      }
      return false;
    });
});