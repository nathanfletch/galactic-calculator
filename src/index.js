import Jupiter from "./jupiter.js";
import Venus from "./venus.js";
import Mars from "./mars.js";
import Mercury from "./mercury.js";
import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css"; 

//globals
let jupiter, venus, mars, mercury;

function displayPlanet(planet) {
  const planetHtml = `<div class="card" style="width: 18rem;">
  <div class="card-header">
    ${planet.nameOfPlanet}
  </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Your age on ${planet.nameOfPlanet}: ${planet.getAge()}</li>
    </ul>
  </div>`;
  $("#planets-screen").append(planetHtml);
}

function populateContinents(continents) {
  const continentsHtml = Object.keys(continents).map(key => {
    return `<option value='${key}'>${key}</option>`
  }).join("");
  $("#continent-input").append(continentsHtml);
}

$(document).ready(function() {
  $('#age-form').submit(function(e) {
    e.preventDefault();
    const age = parseInt($('#age-input').val());
    jupiter = new Jupiter(age);
    venus = new Venus(age);
    mars = new Mars(age);
    mercury = new Mercury(age);
    console.log(jupiter, venus, mars, mercury);
    $("#welcome-screen").hide();
    populateContinents(mars.lifeExpectancies);
    displayPlanet(mercury);
    $("#planets-screen").show();
  })
})
