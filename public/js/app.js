//- Detectando numero de items dentro del carousel
// var numItems = $(".owl-carousel").find('.owl-img').length;

//Galería de imágenes con owl-carousel
/*$('.owl-carousel').owlCarousel({
  autoplay: true,
  margin: 0,
  nav: true,
  autoWidth: false,
  navText: ['<i class="fa fa-chevron-left" title="Anterior"></i>', '<i class="fa  fa-chevron-right" title="Siguiente"></i>'],
  responsive: {
    0: {
      items: 1
    },
    768: {
      items: 2,
      margin: 20,
      loop: (numItems > 2) ? true : false,
    },
    992: {
      items: 3,
      margin: 15,
      loop: (numItems > 3) ? true : false,
    },
  }
});

$(document).ready(function()
{
   $("#publicityModal").modal("show");
});*/

// Tooltips
$(function () {
  $('[data-toggle="tooltip"]').tooltip({
    html: true
  });
});
