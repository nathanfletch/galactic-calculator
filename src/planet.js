export default class Planet {
  constructor(age, days) {
    this.earthAgeOfUser = age;
    this.daysInSolarYear = days;
    // this.nameOfPlanet = 
    /*
    birthDay
    birthMonth
    birthYear
    milesFromEarth
    country "database" - country key, life expectancy value
    */
  }
  
  getAge() {
    return Math.floor(this.earthAgeOfUser * 365 / this.daysInSolarYear);
  }
  /*
  getYearsLeft(country, activityLevel)
  getTravelTime

  these should be subclasses of a "Planet" parent class:
  Mercury returns an int
  Venus
  Mars
  Jupiter

  */
}