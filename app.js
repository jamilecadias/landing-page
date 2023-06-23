$(document).ready(function() {
    $('.carousel').carousel({
      interval: 3000  // Intervalo de troca de slides em milissegundos (3 segundos neste exemplo)
    });
  
    // Atualiza a classe ativa do indicador ao trocar de slide
    $('#myCarousel').on('slide.bs.carousel', function(event) {
      var activeIndex = event.to;
      $('.carousel-indicators li').removeClass('active');
      $('.carousel-indicators li[data-bs-slide-to="' + activeIndex + '"]').addClass('active');
    });
  });