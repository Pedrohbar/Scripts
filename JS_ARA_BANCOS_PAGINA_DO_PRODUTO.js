$( document ).ready(function() {
    $(".breadcrumbs, .borda-alpha, .carrinho i,.carrinho span, .cep, #DelimiterFloat").remove();
    $( ".span6:eq(1)" ).addClass("Edit_Img");
    $(".conteiner:eq(2)").addClass("Edit_Container_Produto")
    $(".Icone_Carrinho a .Icone_Carrinho_Edit").after($(".carrinho:eq(0)"))
});
