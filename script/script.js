$(document).ready(function() {
  $('.card-form').hide();

  $('#initial-button').click(function() {
    $('.card-confirm').fadeOut(200, function() {
      $('.card-form').show();
    });
  })
});