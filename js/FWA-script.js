$(document).ready(function() {
  $('.emoney').mouseenter(function() {
    $('.emoney-still').hide();
    //$('.emoney-still').fadeout(2000);
    //$('.emoney-go').fadein(2000);
    $('.emoney-go').show();
  })
  .mouseleave(function() {
    $('.emoney-go').hide();
    $('.emoney-still').show();
  })

  $('.team').mouseenter(function() {
    $('.team-still').hide();
    $('.team-go').show();
  })
  .mouseleave(function() {
    $('.team-go').hide();
    $('.team-still').show();
  })

  $('.accts').mouseenter(function() {
    $('.accts-still').hide();
    $('.accts-go').show();
  })
  .mouseleave(function() {
    $('.accts-go').hide();
    $('.accts-still').show();
  })

  $('.services').mouseenter(function() {
    $('.services-still').hide();
    $('.services-go').show();
  })
  .mouseleave(function() {
    $('.services-go').hide();
    $('.services-still').show();
  })
});