export default class Planet {
  constructor(age, name, days, dist) {
    this.earthAgeOfUser = age;
    this.nameOfPlanet = name;
    this.daysInSolarYear = days;
    //in millions of miles:
    this.distanceFromEarth = dist;
    // this.lifeExpectancies = {
    //   "north america": {
    //     "male": 77,
    //     "female": 81
    //   },
    //   "europe": {
    //     "male": 75,
    //     "female": 82
    //   }
    // }
  
    /*
    birthDay
    birthMonth
    birthYear
    milesFromEarth
    country "database" - country key, life expectancy value
    */
  }

  getAge() {
    return Math.floor((this.earthAgeOfUser * 365) / this.daysInSolarYear);
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
