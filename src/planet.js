export default class Planet {
  constructor(age, name, days, dist) {
    this.earthAgeOfUser = age;
    this.nameOfPlanet = name;
    this.daysInSolarYear = days;
    //in millions of miles:
    this.distanceFromEarth = dist;
    this.lifeExpectancies = {
      "europe": {
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
      }
    };

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
  
  getYearsLeft(continent, gender) {
    const yearsLeftEarth = this.lifeExpectancies[continent][gender] - this.earthAgeOfUser;
    
    return Math.floor(yearsLeftEarth * 365 / this.daysInSolarYear);
  }


  /*
  getTravelTime

  these should be subclasses of a "Planet" parent class:
  Mercury returns an int
  Venus
  Mars
  Jupiter

  */
}
