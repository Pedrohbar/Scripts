$( document ).ready(function() {
    $(".carrinho i,.carrinho span, .cep, #DelimiterFloat").remove();
    $( ".span6:eq(1)" ).addClass("Edit_Img");
    $(".produto .row-fluid:eq(0) .span6:eq(1)").addClass("Edit_Comprar");
    $(".conteiner:eq(2)").addClass("Edit_Container_Produto");
    $(".codigo-produto .cor-secundaria:eq(0) ").addClass("Codigo_Produto");
    $(".Icone_Carrinho a .Icone_Carrinho_Edit").after($(".carrinho:eq(0)"));
    $(".conteiner-imagem").before($(".breadcrumbs"));
    $(".Edit_Comprar .principal").not(".botao-comprar").addClass("Editar_div_Comprar");
    $(".acoes-produto").not(".hidden-phone").children().not(".comprar").not(":nth-child(even)").addClass("Espacar_Preco_E_Botao");
    $(".span12.produto>.row-fluid").not(".hide").eq(1).addClass("Container_Descricao");
    if($(".Container_Descricao")){

    
});
