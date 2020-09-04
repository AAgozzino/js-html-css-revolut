$(document).ready(function(){
  // apro il menu all'hover sul link
  $(".open-menu").hover(
    function(){
      $(this).children(".dropdown-menu").toggle()
    }
  );

});
