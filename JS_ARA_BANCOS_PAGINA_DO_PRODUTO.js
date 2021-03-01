$( document ).ready(function() {
    $(".carrinho i,.carrinho span, .cep, #DelimiterFloat").remove();
    $( ".span6:eq(1)" ).addClass("Edit_Img");
    $(".produto .row-fluid:eq(0) .span6:eq(1)").addClass("Edit_Comprar")
    $(".conteiner:eq(2)").addClass("Edit_Container_Produto")
    $(".codigo-produto .cor-secundaria:eq(0) ").addClass("Codigo_Produto")
    $(".Icone_Carrinho a .Icone_Carrinho_Edit").after($(".carrinho:eq(0)"))
    $(".conteiner-imagem").before($(".breadcrumbs"))
});
