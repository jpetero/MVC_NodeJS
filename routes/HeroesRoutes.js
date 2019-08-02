const express = require('express');

const router = express.Router();

const heroController = require('../controllers/HeroController');

router.get('/', (req, res) => heroController.getHeroes(req, res));
router.get('/:id', (req, res) => heroController.getHero(req, res));
router.post('/', (req, res) => heroController.addHero(req, res));
router.put('/:id', (req, res) => heroController.updateHero(req, res));
router.delete('/:id', (req, res) => heroController.deleteHero(req, res));

module.exports = router;
