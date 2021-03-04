        $(document).ready(function () {
                function Gerar_ID(){
         var lis = $('.flexslider:eq(0) ul li');
                lis.each(function (li) {
                    $(this).prop('id', $(this).text().trim().replace(" ","-").replaceAll("\n", "").toLowerCase());
                     
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
                        $('.Menu').append(Puxar_Menu_Marca);
                        Gerar_ID();                        
                    }
                });

                } 
        Gerar_ID();
         $('.flex-direction-nav')[0].remove()
        });
