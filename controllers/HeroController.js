const heroRepository = require('../models/HeroRepository');

class HeroController {
  constructor() {
    this.heroRepository = heroRepository;
  }

  // Get all the heroes
  async getHeroes(req, res) {
    const heroes = await this.heroRepository.getHeroes();
    res.render('heroes', { heroes });
  }

  // Get one specific hero
  async getHero(req, res) {
    try {
      const heroId = req.params.id;
      const hero = await this.heroRepository.getHero(parseInt(heroId, 10));
      res.render('heroes', { hero });
    } catch (err) {
      res.status(404).send(`Failed: ${err}`);
    }
  }

  // Add a hero
  async addHero(req, res) {
    try {
      let hero = req.body;
      hero = await this.heroRepository.addHero(hero);
      const urlOfNewHero = `/api/heros/${hero.id}`;
      res.location(urlOfNewHero);
      res.status(201).send(`Created and available at ${urlOfNewHero}`);
    } catch (err) {
      res.status(500).send(err);
    }
  }

  // Update hero
  async updateHero(req, res) {
    try {
      const hero = req.body;
      await this.heroRepository.updateHero(hero);
      res.status(200).send('Hero successfully updated');
    } catch (err) {
      res.status(500).send(err);
    }
  }

  // Delete hero
  async deleteHero(req, res) {
    try {
      const heroId = req.params.id;
      await this.heroRepository.deleteHero(heroId);
      res.status(200).send('Hero deleted');
    } catch (err) {
      res.status(500).send(err);
    }
  }
}

module.exports = new HeroController();
