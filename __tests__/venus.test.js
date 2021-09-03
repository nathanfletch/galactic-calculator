import Venus from "./../src/venus";

describe("Venus", () => {
  let venus;
  beforeEach(() => {
    venus = new Venus(38);
  })
  test("should create a Venus object with the input user age and Venus data: name, number of days in the solar year, and distance from earth, and for .lifeExpectancies to exist", () => {
    expect(venus.earthAgeOfUser).toEqual(38);
    expect(venus.nameOfPlanet).toEqual("Venus");
    expect(venus.daysInSolarYear).toEqual(225);
    expect(venus.distanceFromEarth).toEqual(101);
    expect(venus.lifeExpectancies).not.toBeUndefined();
  });
});
