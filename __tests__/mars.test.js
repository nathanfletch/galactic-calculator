import Mars from "./../src/mars";

describe("Mars", () => {
  let mars;
  beforeEach(() => {
    mars = new Mars(38);
  })
  test("should create a Mars object with the input user age and Mars data: name, number of days in the solar year, and distance from earth, and for .lifeExpectancies to exist", () => {
    expect(mars.earthAgeOfUser).toEqual(38);
    expect(mars.nameOfPlanet).toEqual("Mars");
    expect(mars.daysInSolarYear).toEqual(687);
    expect(mars.distanceFromEarth).toEqual(245);
    expect(mars.lifeExpectancies).not.toBeUndefined();
  });
});
