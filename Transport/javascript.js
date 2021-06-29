type = "text/javascript";
var image_tracker = "bigbus1";
var menu = document.getElementById("menu");
var nav = document.getElementById("nav");
var exit = document.getElementById("exit");

function change() {
  var image = document.getElementById("circle");
  if (image_tracker == "bigbus1") {
    image.src = "images/bigtruck1.png";
    image_tracker = "bigtruck1";
  } else if (image_tracker == "bigtruck1") {
    image.src = "images/bigbus2.png";
    image_tracker = "bigbus2";
  } else {
    image.src = "images/bigbus1.png";
    image_tracker = "bigbus1";
  }
}
var timer = setInterval("change();", 2000);
function stop() {
  clearInterval(timer);
}

menu.addEventListener("click", function (e) {
  nav.classList.toggle("hide-mobile");
  e.preventDefault();
});
exit.addEventListener("click", function (e) {
  nav.classList.add("hide-mobile");
  e.preventDefault();
});
