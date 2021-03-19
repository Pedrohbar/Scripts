$( document ).ready(function() {
    $(".carrinho i,.carrinho span, #DelimiterFloat").remove();
    $( ".span6:eq(1)" ).addClass("Edit_Img");
    $(".produto .row-fluid:eq(0) .span6:eq(1)").addClass("Edit_Comprar");
    $(".conteiner:eq(2)").addClass("Edit_Container_Produto");
    $(".codigo-produto .cor-secundaria:eq(0) ").addClass("Codigo_Produto");
    $(".Icone_Carrinho a .Icone_Carrinho_Edit").after($(".carrinho:eq(0)"));
    $(".conteiner-imagem").before($(".breadcrumbs"));
    $(".Edit_Comprar .principal").not(".botao-comprar").addClass("Editar_div_Comprar");
    $(".acoes-produto").not(".hidden-phone").children().not(".comprar").not(":nth-child(even)").addClass("Espacar_Preco_E_Botao");
    $(".Edit_Comprar").after($(".Container_Preco"));
    $(".produto .row-fluid:eq(1)").addClass("Descricao");
    $(".info-principal-produto").after($(".Descricao"));
    $(".Editar_div_Comprar .acoes-produto").addClass("Preco_Comprar");
    $(".Container_Preco").append($(".Preco_Comprar"));
    $(".Espacar_Preco_E_Botao").after($(".cep"));
    $(".Edit_Container_Produto").before($(".breadcrumbs"));
    
    
    if($(".tab-content").length === 2){
    $(".abas-custom:eq(0)").before($(".Container_Texto_Descricao_Produto"))
}
else{
    
    $(".Container_Texto_Descricao_Produto").remove()

}
        
        if($(".abas-custom").length === 2){
    $(".abas-custom:eq(0)").addClass("abas_custom_edit")
}


});
