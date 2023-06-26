$(document).ready(function() {
  $('.carousel').carousel({
    interval: 3000  // Slide change interval in milliseconds (3 seconds in this example)
  });

  // Updates the indicator's active class when changing slides
  $('#myCarousel').on('slide.bs.carousel', function(event) {
    var activeIndex = event.to;
    $('.carousel-indicators li').removeClass('active');
    $('.carousel-indicators li[data-bs-slide-to="' + activeIndex + '"]').addClass('active');
  });
});