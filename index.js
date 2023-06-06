$(function () {
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

  $("button").hover(function () {
    $("button").animate({ opacity: 1 }, 1000);
    $("button").on("mouseout", function () {
      $("button").animate({ opacity: 0.5 }, "fast");
    });
  });
});
