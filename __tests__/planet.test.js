import Planet from "./../src/planet";

describe("Planet", () => {
  let myPlanet;
  beforeEach(() => {
    myPlanet = new Planet(38, "Mercury", 88, 44);
  });
  test("should create a planet object with the input age of user and planet data: name, number of days in the solar year, and distance from earth", () => {
    expect(myPlanet.earthAgeOfUser).toEqual(38);
    expect(myPlanet.nameOfPlanet).toEqual("Mercury");
    expect(myPlanet.daysInSolarYear).toEqual(88);
    expect(myPlanet.distanceFromEarth).toEqual(44);
  });

  test("should return the user's age on the planet", () => {
    expect(myPlanet.getAge()).toEqual(157);
  });
});
