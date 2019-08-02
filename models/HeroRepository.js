const fs = require('fs');

class HeroRepository {
  constructor() {
    this.fs = fs;
  }

  async getHeroes() {
    const data = await this.fs.readFileSync('./data/hero.json');
    return JSON.parse(data);
  }

  async getHero(heroId) {
    const heroes = await this.getHeroes();
    const hero = heroes.filter(h => h.id === heroId);
    return hero;
  }
}

module.exports = new HeroRepository();
