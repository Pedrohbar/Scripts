$( document ).ready(function() {
   $("#header-search, .caret").remove();
   
   $("#header_logo").after($(".texto-menu-ere-bancos"));
   
   $(".texto-menu-ere-bancos").after($(".container-entrar-ou-cadastrar-carrinho"));
   $(".container-entrar-ou-cadastrar-carrinho").append($("#header-right-cart"));
   
   $(".pagebuilder.clearfix").children().eq(0).addClass("container-carrossel");
   $("#header-main").after($("#wbc-mainnav"));
   $("#page").children("br").remove();
   
    $(".dropdown-menu-inner ul li").each(function () {
    var InserirTextoDinamico = $(this).find("a .menu-title").text().replaceAll(" ", "").toLowerCase();
    var GeradorImagem = '<img src="../fotos/'+ InserirTextoDinamico + '.jpg">' + '</img>';
    $(this).find(".menu-title").before(GeradorImagem);

});

   
   if ($(".pagebuilder.clearfix")[0]) {
      
      var Link_Pagina_Cadastro = $("<link />", {
            rel: "stylesheet",
            type: "text/css",
            href: "https://pedrohbar.github.io/Styles/CSS_ERE_BANCOS_INDEX.css"
        });
      
      $("head").append(Link_Pagina_Cadastro);
       
      var  CaixaBordao = '<div class="container-bordao">' +
            '<div class="organizar-texto-e-imagem">' +
            '<div class="icone-moto-e-selecionar-motocicleta">'+
            '<div class="container-icone-moto">'+
            '<img src="https://cdn.awsli.com.br/1803/1803744/arquivos/bike-15_icon-icons.com_66448.png" class="icone-moto">'+
            '</div>'+
            '<div class="container-texto-slogan">'+
            '<div class="texto_selecione_sua_motocicleta">ERE BANCOS - AQUI SE FABRICA O BANCO DO BUM BUM FELIZ.'+'</div>'+
            '</div>'+
            '<div class="container-icone-moto">'+
            '<img src="https://cdn.awsli.com.br/1803/1803744/arquivos/bike-15_icon-icons.com_66448.png" class="icone-moto icone-moto-espelho">'+'</div>'+
            '</div>'+
            '</div>'+
            '</div>';
      $(".container-carrossel").after(CaixaBordao);
      
      
   }
   else if(window.location.pathname.includes("/identificacao")){
        var Link_Pagina_Cadastro = $("<link />", {
            rel: "stylesheet",
            type: "text/css",
            href: "https://pedrohbar.github.io/Styles/CSS_ERE_BANCOS_IDENTIFICACAO.css"
        });
      
      $("head").append(Link_Pagina_Cadastro);


   }
      else if(window.location.pathname.includes("/cadastrar")){
        var Link_Pagina_Cadastro = $("<link />", {
            rel: "stylesheet",
            type: "text/css",
            href: "https://pedrohbar.github.io/Styles/CSS_ERE_BANCOS_CADASTRAR_ORC.css"
        });
      
      $("head").append(Link_Pagina_Cadastro);


   }
   
   if($("#header_user_info .login:eq(0)").text() != " Login ou Cadastre-se"){
      
    var  BotaoSair = '<div class="sair">' +
           '<a href="logoff">Sair'+
            '</a>'+
            '</div>';    


	$(".entrar-ou-cadastrar").children().remove();
   $(".entrar-ou-cadastrar").append(BotaoSair) 
}

});
