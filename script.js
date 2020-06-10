import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js'
function myFunction(x) {

  x.classList.toggle("change");

  var y = document.getElementById("navigation-bar");
  if (y.style.visibility === "visible") {
    y.style.visibility = "hidden";
  } else {
    y.style.visibility = "visible";
  }
}



