
$(function () {
    let comments = [];
  let services = $(".cardTitle");
  $("#service").on("click", function () {
    if (services.css("display") == "block") {
      services.slideUp();
    } else {
      $(".cardTitle").slideDown();
      $(".card").each(function () {
        $(this)
          .on("click", function () {
            window.location.href = "services.html";
          })
          .css({ cursor: "pointer" });
      });
    }
  });
  let initate = document.getElementById("post");
console.log(initate)
initate.addEventListener("click" , ()=>{
    $("#display").css({display:"block"})
        let value = document.querySelector("#extra").value;
        console.log(value);
        let comment = document.createElement("p");
        let dive = document.querySelector("#display");
        comment.innerHTML = value;
        dive.append(comment)
        comments = JSON.parse(sessionStorage.getItem("comme")) || [];
        comments.push(value);
        console.log(comments);
        sessionStorage.setItem("comme" , JSON.stringify(comments))
    })
});

function isd() {
    $("#display").css({display:"block"})
    comments = JSON.parse(sessionStorage.getItem("comme"))
    comments.forEach(element => {
        let comment = document.createElement("p");
        let dive = document.querySelector("#display");
        comment.innerHTML = element;
        dive.append(comment)
    });
}

