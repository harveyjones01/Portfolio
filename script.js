function myFunction(x) {

  x.classList.toggle("change");

  //var y = document.getElementById("navigation-bar");
  //if (y.style.display === "block") {
  //  y.style.display = "none";
  //} else {
  //  y.style.display = "block";
  //}

  var y = document.getElementById("navigation-bar");
  if (y.style.visibility === "visible") {
    y.style.visibility = "hidden";
  } else {
    y.style.visibility = "visible";
  }
}



