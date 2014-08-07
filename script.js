function slideSwitch() {
  var $active = $('.slideshow IMG.active');
  if ( $active.length == 0) $active = $('.slideshow IMG.last');
  var $next = $active.next().length ? $active.next() : $('.slideshow IMG.first');

  $active.addClass('last-active');

  $next.css({opacity: 0.0})
    .addClass('active')
    .animate({opacity: 1.0}, 1000, function() {
      $active.removeClass('active last-active');
    });
}

$( document ).ready( function() {
  
  // Functions to deal with resizing of the page
  var $body = $('body');
  var setBodyScale = function() {
    var scaleSource = $body.width(),
      scaleFactor = 0.35,
      maxHeight = 500,
      minHeight = 200;
    var imgHeight = scaleSource * scaleFactor;
    if (imgHeight > maxHeight) imgHeight = maxHeight;
    if (imgHeight < minHeight) imgHeight = minHeight;

    $('.slideshow').css('height', imgHeight);
  }

   $(window).resize(function(){
     setBodyScale();
   });

   setBodyScale();
    
   // Handles the slideshow
   setInterval("slideSwitch()", 5000);
 });
