
        $(document).ready(function () {

            $('#fb-root').after($('.Container_Menu_Cima')[0]);
            $('.Container_Menu_Cima').after($('.Sub_Menu_Marcas')[0]);



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
            var lis = $('.marcas > div > div > .slides > li');
            lis.each(function(li) {
                $(this).prop('id', $(this).text().replaceAll(" ", "").replaceAll("\n", ""));
                });
            $('.flex-direction-nav')[0].remove()
        });
