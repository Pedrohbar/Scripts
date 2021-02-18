if($('.marcas')[0]){
} else{
var divMenu;

$.ajax({ url: 'https://sdasdsadsadasf.lojaintegrada.com.br/', success: function(data) { 
  var html = data; 
  var htmlElements = $(html);
  divMenu = $('.marcas.hidden-phone', htmlElements);
} });



$('.Menu').append($('.marcas'));
}
