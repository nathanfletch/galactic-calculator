import Jupiter from "./jupiter.js";
import Venus from "./venus.js";
import Mars from "./mars.js";
import Mercury from "./mercury.js";

//globals
let jupiter, venus, mars, mercury;

$(document).ready(function() {
  $('#age-form').submit(function(e) {
    e.preventDefault();
    const age = parseInt($('#age-input').val());
    jupiter = new Jupiter(age);
    venus = new Venus(age);
    mars = new Mars(age);
    mercury = new Mercury(age);
    console.log(jupiter, venus, mars, mercury);
    $("#intro-screen").hide();
    $("planets-screen").show();
  })
})
