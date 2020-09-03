$(document).ready(function(){
  // apro il menu all'hover sul link
  $(".open-menu").mouseover(
    function(){
      $(this).children(".dropdown-menu").addClass("show")
    }
  );

  $(".open-menu").mouseout(
    function(){
      $(this).children(".dropdown-menu").removeClass("show")
    }
  );

});
