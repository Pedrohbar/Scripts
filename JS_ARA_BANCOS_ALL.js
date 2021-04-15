$(document).ready(function () {
    if ($('.Container_Cadastrar_e_Entrar_Carrinho .Icone_Carrinho a .carrinho').length == 0) {
        var htmlIconeCarrinho = '<div class="carrinho">' +
            '<a href=' + '"https://' + window.location.hostname + '/carrinho/index"' + '>' +
            '<strong class="qtd-carrinho titulo cor-secundaria">0</strong>' +
            '</a>' +
            '<div id="carrinho-dinamico-ajax" class="carrinho-interno-ajax"></div>' +
            '</div>';

        $('.Container_Cadastrar_e_Entrar_Carrinho .Icone_Carrinho a').append(htmlIconeCarrinho);

        $('.carrinho-interno-ajax:first').load('/carrinho/listar_produtos', function () {
            $('#carrinho-dinamico-ajax').html($('.carrinho-interno-ajax').not('#carrinho-dinamico-ajax').eq(0).html());

            $('#carrinho-dinamico-ajax .carrinho-interno').css('top', '34px');

            var textoInfo = $('.carrinho-interno-ajax .carrinho-interno .carrinho-info i:first').text().split(' ');

            if (textoInfo.length > 0) {
                if (!isNaN(parseInt(textoInfo[0]))) {
                    $('strong.qtd-carrinho').text(textoInfo[0])
                }
            }
        });
    }

    $(".marcas").css('display', 'none');

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

                    $("li", Chamada_Ajax_URL).each(function () {
                        var Valor_Alt = $(this).children().find("img").attr("alt");

                        if (Valor_Alt.toLowerCase().includes(Li_Id.toLowerCase())) {
                            var Div_Texto_Moto = $("<div />", {
                                class: "Texto_Da_Moto"
                            });


                            Div_Texto_Moto.append(Valor_Alt);
                            $(this).append(Div_Texto_Moto);
                        } else {
                            $(this).remove();
                        }
                    });


                    $(".Sub_Menu_Marcas").append(Chamada_Ajax_URL);
                }

            });

            ID_Texto_Li.mouseenter(function () {
                $(".Sub_Menu_Marcas").css("display", "block");
                $(".Sub_Menu_Marcas > .listagem.borda-alpha").css("display", "none");
                $(".Sub_Menu_Marcas > .marcas").css("display", "none");
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
    $('.flex-direction-nav:eq(0), .modal-backdrop, .institucional .conteiner .row-fluid .span9 .row-fluid .span4 .titulo, .pagamento-selos').remove();
    $('#fb-root').after($('.Container_Menu_Cima')[0]);
    $('.Container_Menu_Cima').after($('.Sub_Menu_Marcas')[0]);

    Gerar_ID();
    $(".Menu").append($("#rodape"));

    //Editar dinamicamente paginas sem acesso
    if (window.location.pathname.includes("/conta/login")) {

        var Link_Pagina_Cadastro = $("<link />", {
            rel: "stylesheet",
            type: "text/css",
            href: "https://pedrohbar.github.io/Styles//CSS_ARA_BANCOS_PAGINA_DO_CADASTRO.css"
        })
        $('head').append(Link_Pagina_Cadastro);
        $("#corpo").after($(".Footer"));
        $("#modalRecuperarSenha .modal-footer a").remove();


    }

    if (window.location.pathname.includes("/conta/criar")) {

        var Link_Criar_Conta = $("<link />", {
            rel: "stylesheet",
            type: "text/css",
            href: "https://pedrohbar.github.io/Styles//CSS_ARA_BANCOS_PAGINA_CRIAR_CONTA.css"
        });

        var Div_Botao = $("<div />", {
            class: "Edit_Input_Radio"
        });
        $('head').append(Link_Criar_Conta);
        $("#id_tipo label").addClass("Inputs_Radio");
        $('#id_tipo li label:eq(0)').append(Div_Botao);
        $("#corpo").after($(".Footer"));


    }
    if (window.location.pathname.includes("/marca/")) {

        var Link_Pagina_Marca = $("<link />", {
            rel: "stylesheet",
            type: "text/css",
            href: "https://pedrohbar.github.io/Styles/CSS_ARA_BANCOS_MARCA.css"
        })
        $('head').append(Link_Pagina_Marca);
        $("#corpo").after($(".Footer"));
        $(".image").remove();


    }
        if (window.location.pathname.includes("/conta/index")) {

        var Link_Minha_Conta = $("<link />", {
            rel: "stylesheet",
            type: "text/css",
            href: "https://pedrohbar.github.io/Styles/CSS_ARA_BANCOS_MINHA_CONTA.css"
        })
        $('head').append(Link_Minha_Conta);
        $("#corpo").after($(".Footer"));
        $(".minha-conta .abas-conta ").children().not(".active").addClass("Desativado");


    }
            if (window.location.pathname.includes("/conta/pedido/listar")) {

        var Link_Meus_Pedidos = $("<link />", {
            rel: "stylesheet",
            type: "text/css",
            href: "https://pedrohbar.github.io/Styles/CSS_ARA_BANCOS_MEUS_PEDIDOS.css"
        })
        $('head').append(Link_Meus_Pedidos);
        $("#corpo").after($(".Footer"));
        $(".meus-pedidos .abas-conta").children().not(".active").addClass("Desativado");
            }


});
