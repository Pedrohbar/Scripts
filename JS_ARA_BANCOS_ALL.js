        $(document).ready(function () {
            function Mudar_Posicao() {
                $('#fb-root').after($('.Container_Menu_Cima')[0]);
                $('.Container_Menu_Cima').after($('.Sub_Menu_Marcas')[0]);
            }
            function Carregar_Menu() {
                if ($('.marcas')[0]) {

                    $('.Menu').append($('.marcas'));

                }
                else {
                    var divMenu;

                    $.ajax({
                        url: 'https://sdasdsadsadasf.lojaintegrada.com.br/', success: function (data) {
                            var html = data;
                            var htmlElements = $(html);
                            divMenu = $('.marcas.hidden-phone', htmlElements);
                            $('.Menu').append(divMenu);
                        }
                    });
                }
            }
            function Remover_Elementos() {
                $('.flex-direction-nav')[0].remove();
            }
            
            function Gerar_ID_Menu() {
                var lis = $('.flex-viewport .slides li');
                lis.each(function (li) {
                    $(this).prop('id', $(this).text().replaceAll(" ", "").replaceAll("\n", ""));
                });
            }
            Mudar_Posicao();
            Carregar_Menu();
            Remover_Elementos();
            Gerar_ID_Menu();



        });
