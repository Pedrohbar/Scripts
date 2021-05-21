$( document ).ready(function() {
   $("#header-search, .caret").remove();
   $("#header_logo").after($(".texto-menu-ere-bancos"));
   $("#header-right-cart .row").before($(".entrar-ou-cadastrar"));
   $(".pagebuilder.clearfix").children().eq(0).addClass("container-carrossel");
   $("#header-main").after($("#wbc-mainnav"));
   
   if ($(".pagebuilder.clearfix")[0]) {
      
      var Link_Pagina_Cadastro = $("<link />", {
            rel: "stylesheet",
            type: "text/css",
            href: "https://pedrohbar.github.io/Styles/CSS_ERE_BANCOS_INDEX.css"
        });
      
      $("head").append(Link_Pagina_Cadastro);
      
   }

});
