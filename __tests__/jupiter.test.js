import Jupiter from "./../src/jupiter";

describe("Jupiter", () => {
  let jupiter;
  beforeEach(() => {
    jupiter = new Jupiter(38);
  })
  test("should create a Jupiter object with the input user age and Jupiter data: name, number of days in the solar year, and distance from earth, and for .lifeExpectancies to exist", () => {
    expect(jupiter.earthAgeOfUser).toEqual(38);
    expect(jupiter.nameOfPlanet).toEqual("Jupiter");
    expect(jupiter.daysInSolarYear).toEqual(4333);
    expect(jupiter.distanceFromEarth).toEqual(376);
    expect(jupiter.lifeExpectancies).not.toBeUndefined();
  });
});
