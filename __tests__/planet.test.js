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
    expect(myPlanet.lifeExpectancies).toEqual(
      {
      "europe":{
      "male": 75,
      "female": 82
    },
    "northAmerica": {
      "male": 77,
      "female": 81
    },
    "africa": {
      "male": 62,
      "female": 65
    },
    "oceania": {
      "male": 77,
      "female": 81
    },
    "latinAmerica": {
      "male": 72,
      "female": 79
    },
    "asia": {
      "male": 71,
      "female": 75
    }});
  });

  test("should return the user's age on the planet", () => {
    expect(myPlanet.getAge()).toEqual(157);
  });

  test("should return the user's years left on the planet", () => {
    expect(myPlanet.getYearsLeft("europe", "male")).toEqual(153);
  });

  test("should return a negative number representing the number of years the user has already lived past their life expectancy on the planet", () => {
    myPlanet = new Planet(88, "Mercury", 88, 44);
    expect(myPlanet.getYearsLeft("europe", "male")).toBeLessThan(0);
  })
});
