import Mercury from "./../src/mercury";

describe("Mercury", () => {
  let myMercury;
  beforeEach(() => {
    myMercury = new Mercury(38);
  })
  test("should create a Mercury object with the input user age and number of days in the solar year for Mercury", () => {
    expect(myMercury.earthAgeOfUser).toEqual(38);
    expect(myMercury.daysInSolarYear).toEqual(88);
  });
  

});
