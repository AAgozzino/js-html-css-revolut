$(document).ready(function(){
  // apro il menu all'hover sul link
  $(".open-menu").on("mouseover",
    function(){
      $(".dropdown-menu").show()
    }
  );

  $(".open-menu").mouseout(
    function(){
      $(".dropdown-menu").hide()
    }
  );

});
