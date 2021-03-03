$( document ).ready(function() {
   $('.secao-banners').after($('.Container_Selecionar_Motocicleta')[0]);
   
   var lis = $('.marcas > div > div > .slides > li');
lis.each(function(li) {
  $(this).prop('id', $(this).text().replaceAll(" ", "").replaceAll("\n", ""));
});
   
   });
