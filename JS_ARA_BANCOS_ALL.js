$(document).ready(function () {
    function Gerar_ID() {
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

                    $(".Sub_Menu_Marcas").append(b);
                }
            });

            a.mouseenter(function () {
                $(".Sub_Menu_Marcas").css("display", "block");
                $(".Sub_Menu_Marcas > .listagem.borda-alpha").css("display", "none");
                $('#listagemProdutos-' + liId).css('display', 'block');
            });

            $(".flexslider:eq(0)").mouseleave(function () {
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
    $('.flex-direction-nav')[0].remove()
});
