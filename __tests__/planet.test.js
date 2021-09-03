import Planet from "./../src/planet";

describe("Planet", () => {
  let myPlanet;
  beforeEach(() => {
    myPlanet = new Planet(38, 88);
  })
  test("should create a planet object with the input age and number of days in the solar year for the planet", () => {
    expect(myPlanet.earthAgeOfUser).toEqual(38);
    expect(myPlanet.daysInSolarYear).toEqual(88);
  });
  
  test("should return the user's age on the planet", () => {
    expect(myPlanet.getAge()).toEqual(157);
    
  })
});
