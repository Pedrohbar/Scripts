        $(document).ready(function () {
                function Gerar_ID(){
   
var lis = $('.flexslider:eq(0) ul li');

    lis.each(function (liuu) {
        var a = $(this).prop('id', $(this).text().trim().replace(" ", "-").replaceAll("\n", "").toLowerCase());

        a.mouseenter(function () {
            $(".Sub_Menu_Marcas").css("display", "block");

            var b = $.ajax({
                url: "https://sdasdsadsadasf.lojaintegrada.com.br/marca/" + a.text().trim().replace(" ", "-").toLowerCase() + ".html", success: function (atoo) {
                    var htmldois = atoo;
                    var htmlElementsDois = $(htmldois);
                    b = $("#listagemProdutos", htmlElementsDois);
                    var Remover_Excesso = $(".Sub_Menu_Marcas").children().length;
                    $(".Sub_Menu_Marcas").append(b);

                    if (Remover_Excesso >= 1) {
                        $(".Sub_Menu_Marcas").children().remove();
                        $(".Sub_Menu_Marcas").append(b);
                    }

                }

            })
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
                        $(".flex-viewport").after($(".Sub_Menu_Marcas")); 
                        Gerar_ID();                        
                    }
                });

                } 
        $(".slides:eq(0)").after($(".Sub_Menu_Marcas")); 
         Gerar_ID();
         $('.flex-direction-nav')[0].remove()
        });
