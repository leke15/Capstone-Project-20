$(function(){
    let services = $(".cardTitle");
    $("#services").on("click", function () {
      if (services.css("display") == "block") {
        services.slideUp();
      } else {
        $(".cardTitle").slideDown();
        $(".card").each(function () {
          $(this).on('click' , function(){
              window.location.href="services.html";
          }).css({cursor : "pointer"})
        });
      }
    });
})