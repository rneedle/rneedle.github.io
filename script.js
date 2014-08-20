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

$( window ).load( function() {
  
  // Functions to deal with resizing of the page
  var $img = $('img')[0];
  var setBodyScale = function() {
        
    var scaleSource = $img.clientWidth,
      poopFactor = 0.5,
      maxPoop = 500
    console.log(scaleSource);
    var poopHeight = scaleSource * poopFactor;
    if ( poopHeight > maxPoop) poopHeight = maxPoop; 
    $('.slideshow').css('height', poopHeight);
  }

  setBodyScale(); 
  $(window).resize(function(){
       setBodyScale() ;
   });


    
   // Handles the slideshow
   setInterval("slideSwitch()", 3500);
 });
