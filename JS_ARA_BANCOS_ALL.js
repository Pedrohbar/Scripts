$( document ).ready(function() {
  if($('.marcas')[0]){

$('.Menu').append($('.marcas'));

} 
else{
var divMenu;

$.ajax({ url: 'https://sdasdsadsadasf.lojaintegrada.com.br/', success: function(data) { 
  var html = data; 
  var htmlElements = $(html);
  divMenu = $('.marcas.hidden-phone', htmlElements);
  $('.Menu').append(divMenu);
} });




}  
   });
