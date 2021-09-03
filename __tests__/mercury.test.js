import Mercury from "./../src/mercury";

describe("Mercury", () => {
  let mercury;
  beforeEach(() => {
    mercury = new Mercury(38);
  })
  test("should create a Mercury object with the input user age and Mercury data: name, number of days in the solar year, and distance from earth", () => {
    expect(mercury.earthAgeOfUser).toEqual(38);
    expect(mercury.nameOfPlanet).toEqual("Mercury");
    expect(mercury.daysInSolarYear).toEqual(88);
    expect(mercury.distanceFromEarth).toEqual(44);
  });
});
