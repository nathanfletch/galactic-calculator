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

  test("should create a planet object with a lifeExpectancy object with life expectancy data", () => {
    expect(myPlanet.lifeExpectancies).toEqual({
      "north america": {
        male: 77,
        female: 81,
      },
      europe: {
        male: 75,
        female: 82,
      },
    });
  });

  test("should return the user's age on the planet", () => {
    expect(myPlanet.getAge()).toEqual(157);
  });

  test("should return the user's years left on the planet", () => {
    expect(myPlanet.getYearsLeft("europe", "male")).toEqual(154);
  });
});
