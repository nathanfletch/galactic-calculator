import Planet from "./../src/planet";

describe("Planet", () => {
  test("should create a planet object with the input age and number of days in the solar year for the planet", () => {
    const myPlanet = new Planet(38, 88);
    expect(myPlanet.earthAgeOfUser).toEqual(38);
    expect(myPlanet.daysInSolarYear).toEqual(88);
  });
});
