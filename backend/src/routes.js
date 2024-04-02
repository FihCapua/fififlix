const { Router } = require('express');

const MovieController = require('./app/controler/MovieController');

const router = Router();

router.get('/movies', MovieController.index);

module.exports = router;
