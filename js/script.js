$(document).ready(
  function(){
    $(".sibli_menu").click(
      function(){
        $(this).siblings(".sub-menu").toggleClass("active");
      }
    );
  }
)
