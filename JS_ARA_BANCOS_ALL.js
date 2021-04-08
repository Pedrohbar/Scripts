$(document).ready(function () {

    function Gerar_ID() {

        var lis = $('.flexslider.carousel:eq(0) ul li');

        lis.each(function (liuu) {

            var a = $(this).prop("id", $(this).text().trim().replace(" ", "-").replaceAll("\n", "").toLowerCase());

            var liId = $(this).prop("id");

            a.mouseenter(function () {
                $(".Sub_Menu_Marcas").css("display", "block");
                $(".Sub_Menu_Marcas > .listagem.borda-alpha").css("display", "none");
                $('#listagemProdutos-' + liId).css('display', 'block');
            });

            $(".Sub_Menu_Marcas").mouseenter(function () {
                $(".Sub_Menu_Marcas").css("display", "block")
            });

            $(".Sub_Menu_Marcas").mouseleave(function () {
                $(".Sub_Menu_Marcas").css("display", "none")
            });

            a.mouseleave(function () {
                $(".Sub_Menu_Marcas").css("display", "none")
            });
        });

    }


    $('#fb-root').after($('.Container_Menu_Cima')[0]);
    $('.Container_Menu_Cima').after($('.Sub_Menu_Marcas')[0]);


    Gerar_ID();
    $(".Menu").append($("#rodape"));


    //Editar dinamicamente paginas sem acesso
    if (window.location.pathname.includes("/conta/login")) {

        var link = $("<link />", {
            rel: "stylesheet",
            type: "text/css",
            href: "https://pedrohbar.github.io/Styles//CSS_ARA_BANCOS_PAGINA_DO_CADASTRO.css"
        })
        $('head').append(link);
        $("#corpo").after($(".Footer"))


    }
    if (window.location.pathname.includes("/conta/criar")) {

        var Link = $("<link />", {
            rel: "stylesheet",
            type: "text/css",
            href: "https://pedrohbar.github.io/Styles//CSS_ARA_BANCOS_PAGINA_CRIAR_CONTA.css"
        });

        var Div_Botao = $("<div />", {
            class: "Edit_Input_Radio"
        });

        $('head').append(Link);
        $("#id_tipo label").addClass("Inputs_Radio");
        $('#id_tipo li label:eq(0)').append(Div_Botao);
        $("#corpo").after($(".Footer"))


    }

    $("#rodape").children().not(".institucional, .pagamento-selos").remove();
    $('.flex-direction-nav:eq(0), .modal-backdrop, #AcessoRestritoIdade, .institucional .conteiner .row-fluid .span9 .row-fluid .span4 .titulo, .pagamento-selos').remove();

});
