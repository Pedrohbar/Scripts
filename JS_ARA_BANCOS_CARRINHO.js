$( document ).ready(function() {
  $("#corpo").after($(".Footer"));
  $(".produto-info ul li:nth-child(2)").addClass("Li_Estoque");
  $("tbody .hidden-phone").not(".bg-dark").addClass("Preco");
  $(".hidden-phone.bg-dark:eq(0)").addClass("Sub_Total");
  $(".hidden-phone.bg-dark:eq(1)").addClass("Frete");
  $(".line-18").append($(".selo-ssl img"))
});

