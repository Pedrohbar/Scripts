$(document).ready(function () {
    $(".carrinho i,.carrinho span, #DelimiterFloat").remove();
    $(".span6:eq(1)").addClass("Edit_Img");
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
    $('.cep:not(:has(form))').remove()
    $(".acoes-flutuante .cep").remove();
    $(".Edit_Container_Produto").before($(".breadcrumbs"));
    $(".produto .row-fluid:eq(0)").addClass("Container_Img_Comprar_Preco");




    if ($(".tab-content").length === 2) {
        $(".abas-custom:eq(0)").before($(".Container_Texto_Descricao_Produto"))
    }
    else {

        $(".Container_Texto_Descricao_Produto").remove()

    }

    if ($(".abas-custom").length === 2) {
        $(".abas-custom:eq(0)").addClass("abas_custom_edit")
    }

    if ($(".cep").length > 1) {
        $(".btn").last().addClass("Btn_Hover");
        $(".Preco_Comprar").not(".disponivel").css("opacity", "0.5");
        $(".input-cep").last().prop("disabled", "true").css("cursor", "auto");
        $(".btn").last().prop("disabled", "true").css("cursor", "auto");
        $(".Container_Preco .acoes-produto").last().find(".comprar").addClass("Comprar_Desabilitado");

    }

    function Interface_Produto_Grade() {

        let Miniatura = $(".miniaturas li a");
        let Produto = $(".atributo-item");
        let i = 0

        Miniatura.each(function () {
            i++;
            let Class_Miniatura_E_Numero = "Produto_Miniatura_Img" + i

            $(this).addClass(Class_Miniatura_E_Numero);


        });
        i = 0

        Produto.each(function () {
            i++;
            let Class_Produto_E_Numero = "Produto_Miniatura_Img" + i

            $(this).addClass(Class_Produto_E_Numero);

        });
    }

    var controleClick = false;
    function Click_Trocar(Numero, Eq_Click_F, Eq_Clicado_Espelho) {

        let Produto_Miniatura_Sem_Numero = $(".Produto_Miniatura_Img" + Numero);

        Produto_Miniatura_Sem_Numero.eq(Eq_Click_F).click(function () {
            if (!controleClick) {
                controleClick = true;

                Produto_Miniatura_Sem_Numero.eq(Eq_Clicado_Espelho).click();
            } else {
                controleClick = false;
            }
        });


    }

    Interface_Produto_Grade();
    Click_Trocar(1, 1, 0);
    Click_Trocar(1, 0, 1);
    Click_Trocar(2, 1, 0);
    Click_Trocar(2, 0, 1);
    Click_Trocar(3, 1, 0);
    Click_Trocar(3, 0, 1);
    Click_Trocar(4, 1, 0);
    Click_Trocar(4, 0, 1);


});
