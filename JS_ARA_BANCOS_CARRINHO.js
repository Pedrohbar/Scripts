$( document ).ready(function() {
  $(".produto-info ul li:nth-child(2)").addClass("Li_Estoque");
  $("tbody .hidden-phone").not(".bg-dark").addClass("Preco");
  $(".hidden-phone.bg-dark:eq(0)").addClass("Sub_Total")
  $(".hidden-phone.bg-dark:eq(1)").addClass("Frete")
});

