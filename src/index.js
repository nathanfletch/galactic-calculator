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

//ui functions
function populateContinents(continents) {
  const continentsHtml = Object.keys(continents)
    .map((key) => {
      return `<option value='${key}'>${key}</option>`;
    })
    .join("");
  $("#continent-input").append(continentsHtml);
}

function displayPlanet(planet) {
  const planetHtml = `<div class="col-3-md card mx-auto" style="width: 18rem;">
  <div class="card-header">
    ${planet.nameOfPlanet}
  </div>
    <ul class="list-group" id='${planet.nameOfPlanet}'>
      <li class="list-group-item">Your age on ${
        planet.nameOfPlanet
      }: ${planet.getAge()}</li>
    </ul>
  </div>`;
  $("#card-holder").append(planetHtml);
}

$("#age-form").submit(function (e) {
  e.preventDefault();

  const age = parseInt($("#age-input").val());
  jupiter = new Jupiter(age);
  venus = new Venus(age);
  mars = new Mars(age);
  mercury = new Mercury(age);

  $("#welcome-screen").hide();
  [mercury, venus, mars, jupiter].forEach((planet) => displayPlanet(planet));
  populateContinents(mars.lifeExpectancies);
  $("#planets-screen").show();
});

$("#life-form").submit(function (e) {
  e.preventDefault();

  const continent = $("#continent-input").val();
  const gender = $("input:radio[name=gender]:checked").val();
  console.log(continent, gender);
  [mercury, venus, mars, jupiter].forEach((planet) => {
    const years = planet.getYearsLeft(continent, gender);
    let message;
    if (years >= 0) {
      message = `<li class='list-group-item'>You would have ${years} years left to live on ${planet.nameOfPlanet}`;
    } else {
      message = `<li class='list-group-item'>You already exceed your expected life span by ${
        years * -1
      } on this planet</li>`;
    }
    console.log(message);
    $(`#${planet.nameOfPlanet}`).append(message);
  });
  $("#life-form").slideUp();
});
