$( document ).ready(function() {
    $(".carrinho i,.carrinho span, .cep, #DelimiterFloat").remove();
    $( ".span6:eq(1)" ).addClass("Edit_Img");
    $(".conteiner:eq(2)").addClass("Edit_Container_Produto")
    $(".produto .row-fluid:eq(0)").addClass("Container_Imagem_Do_Produto_Informacoes_Comprar");
    $(".Icone_Carrinho a .Icone_Carrinho_Edit").after($(".carrinho:eq(0)"))
    $(".conteiner-imagem").before($(".breadcrumbs"))
});
