import Mercury from "./../src/mercury";

describe("Mercury", () => {
  let myMercury;
  beforeEach(() => {
    myMercury = new Mercury(38);
  })
  test("should create a Mercury object with the input user age and Mercury data: name, number of days in the solar year, and distance from earth", () => {
    expect(myMercury.earthAgeOfUser).toEqual(38);
    expect(myMercury.nameOfPlanet).toEqual("Mercury");
    expect(myMercury.daysInSolarYear).toEqual(88);
    expect(myMercury.distanceFromEarth).toEqual(44);
  });
});
