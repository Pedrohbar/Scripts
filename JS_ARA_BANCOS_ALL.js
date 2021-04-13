$(document).ready(function () {

    function Gerar_ID() {

        var Lis_Menu = $(".links-rodape ul li");
        var Lis_Hidden = $(".marcas.flexslider.flex - viewport.slides li a img");

        Lis_Menu.each(function (liuu) {

            var ID_Texto_Li = $(this).prop("id", $(this).text().trim().replace(" ", "-").replaceAll("\n", "").toLowerCase());

            var Valor_Alt = $(".marcas").find("a img").attr("alt");

            var Li_Id = $(this).prop("id");



            var Chamada_Ajax_URL = $.ajax({

                url: "https://sdasdsadsadasf.lojaintegrada.com.br", success: function (atoo) {
                    var htmldois = atoo;
                    var htmlElementsDois = $(htmldois);

                    Chamada_Ajax_URL = $(".marcas", htmlElementsDois);


                    Chamada_Ajax_URL.prop('id', 'listagemProdutos-' + Li_Id);
                    Chamada_Ajax_URL.css('display', 'none');
                    Chamada_Ajax_URL.addClass("Edit_Listas_Sub_Menu_Marcas");
                    Chamada_Ajax_URL.children().find(".preco-produto, .acoes-produto").remove();
                    Chamada_Ajax_URL.children().find(".span3").addClass("Editar_li_Sub_Marcas");
                    Chamada_Ajax_URL.children().find(".info-produto").addClass("Editar_Texto_Sub_Marcas");
                    Chamada_Ajax_URL.children().find(".listagem-item").addClass("Editar_Marcas_Moto");
                    Chamada_Ajax_URL.children().find(".imagem-produto").addClass("Editar_Img_Sub_Marcas");
                    $(".Sub_Menu_Marcas").append(Chamada_Ajax_URL);
                    $(".marcas .slides li").each(function () {
                        var Div_Texto_Moto = $("<div />", {
                            class: "Texto_Da_Moto"
                        });

                        var Valor_Alt = $(this).children().find("img").attr("alt");
                        Div_Texto_Moto.append(Valor_Alt);
                        $(this).append(Div_Texto_Moto);

                    });
                }

            });

            ID_Texto_Li.mouseenter(function () {
                $(".Sub_Menu_Marcas").css("display", "block");
                $(".Sub_Menu_Marcas > .listagem.borda-alpha").css("display", "none");
                $('#listagemProdutos-' + Li_Id).css('display', 'block');
            });

            $(".Sub_Menu_Marcas").mouseenter(function () {
                $(".Sub_Menu_Marcas").css("display", "block")
            });

            $(".Sub_Menu_Marcas").mouseleave(function () {
                $(".Sub_Menu_Marcas").css("display", "none")
            });

            ID_Texto_Li.mouseleave(function () {
                $(".Sub_Menu_Marcas").css("display", "none")
            });
        });

    }

    $("#rodape").children().not(".institucional, .pagamento-selos").remove();
    $('.flex-direction-nav:eq(0), .modal-backdrop, #AcessoRestritoIdade, .institucional .conteiner .row-fluid .span9 .row-fluid .span4 .titulo, .pagamento-selos').remove();
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

});
