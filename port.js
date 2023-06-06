let btn1 = document.querySelector("#btn1");
let saved = [];
let index = -1;

$(function () {
  $("button").hover(function () {
    $("button").animate({ opacity: 1 }, 1000);
    $("button").on("mouseout", function () {
      $("button").animate({ opacity: 0.5 }, "fast");
    });
  });
  
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
  // each time unlike is cliked the image that trigged should display the red heart image and set it's display to none
  $(".unlike").click(function (e) {
    if ($(e.target).css("display") === "block") {
      $(e.target).css({ display: "none" });
      $(e.target).next().show().css({ marginLeft: 0 });
      console.log(e.target.parentElement.querySelector("img").src);
      saved = JSON.parse(sessionStorage.getItem("saves")) || [];
      //I got this Idea from bing's AI bot i asked how i could check the item of a saved page list and it gave me this solution where I could use the include function for arrays
      if (!saved.includes(e.target.parentElement.querySelector("img").src)) {
        saved.push(e.target.parentElement.querySelector("img").src);
        sessionStorage.setItem("saves", JSON.stringify(saved));
      }
      index++;
    }
  });
  //And if it's already like it's display should be set to none and the next image to block and delete the img src from the src array
  $(".like").click(function (e) {
    $(e.target).css({ display: "none" });
    $(e.target).prev().css({ display: "block" });
    saved.splice(index, 1);
    sessionStorage.setItem("saves", JSON.stringify(saved));
  });
});

/*on load of the second page retrive the image src array and for each item in the array create a paragrah element and a list and img tag and get the div meant to be holding
these  items and append them to it.*/
function loaded() {
  if (sessionStorage.getItem("hasCodeRunBefore") === true) {
    saved = JSON.parse(sessionStorage.getItem("displayed"));
    let index = 0;
    saved.forEach((src) => {
      index++;
      let item = document.getElementById("gallery");
      let desc = document.createElement("p");
      let list = document.createElement("ul");
      let listItem = document.createElement("li");
      let image = document.createElement("img");

      image.src = src;
      desc.innerHTML = `Good Choice on SAVED IMAGE ${index}`;
      item.append(list, listItem, image, desc);
    });
    sessionStorage.setItem("displayed", JSON.stringify(saved));
  } else {
    sessionStorage.setItem("hasCodeRunBefore", true);
    saved = JSON.parse(sessionStorage.getItem("saves"));
    let index = 0;
    saved.forEach((src) => {
      index++;
      let item = document.getElementById("gallery");
      let desc = document.createElement("p");
      let list = document.createElement("ul");
      let listItem = document.createElement("li");
      let image = document.createElement("img");

      image.src = src;
      desc.innerHTML = `Good Choice on SAVED IMAGE ${index}`;
      item.append(list, listItem, image, desc);
    });
    sessionStorage.setItem("displayed", JSON.stringify(saved));
  }
}
