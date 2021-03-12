$(document).ready(function () {
    function Gerar_ID() {

        var lis = $('.flexslider:eq(0) ul li');

        lis.each(function (liuu) {
            var a = $(this).prop('id', $(this).text().trim().replace(" ", "-").replaceAll("\n", "").toLowerCase());
            var liId = $(this).prop('id');

            var b = $.ajax({
                url: "https://sdasdsadsadasf.lojaintegrada.com.br/marca/" + a.text().trim().replace(" ", "-").toLowerCase() + ".html", success: function (atoo) {
                    var htmldois = atoo;
                    var htmlElementsDois = $(htmldois);
                    b = $("#listagemProdutos", htmlElementsDois);


                    b.prop('id', 'listagemProdutos-' + liId);
                    b.css('display', 'none');
                    b.addClass("Edit_Listas_Sub_Menu_Marcas");
                    b.children().find(".preco-produto, .acoes-produto").remove();
                    b.children().find(".span3").addClass("Editar_li_Sub_Marcas");
                    b.children().find(".info-produto").addClass("Editar_Texto_Sub_Marcas");
                    b.children().find(".listagem-item").addClass("Editar_Marcas_Moto");
                    b.children().find(".imagem-produto").addClass("Editar_Img_Sub_Marcas");
                    $(".Sub_Menu_Marcas").append(b);
                }
            });

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

    if ($('.marcas')[0]) {

        $('.Menu').append($('.marcas'));

    }
    else {
        //requisitar ajax para puxar os elementos das outras paginas  
        var Puxar_Menu_Marcas = $.ajax({
            url: 'https://sdasdsadsadasf.lojaintegrada.com.br', success: function (aata) {
                var html = aata;
                var htmlElements = $(html);
                Puxar_Menu_Marcas = $('.marcas', htmlElements);
                $('.Menu').append(Puxar_Menu_Marcas);
                Gerar_ID();
            }
        });

    }
    Gerar_ID();
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

        var link = $("<link />", {
            rel: "stylesheet",
            type: "text/css",
            href: "https://pedrohbar.github.io/Styles//CSS_ARA_BANCOS_PAGINA_CRIAR_CONTA.css"
        });

        var link = $("<div />", {
            class: "Edit_Input_Radio"
        });

        $('head').append(link);
        $("#corpo").after($(".Footer"))


    }
    $('.flex-direction-nav:eq(0), #rodape, .modal-backdrop, #AcessoRestritoIdade').remove()

});
