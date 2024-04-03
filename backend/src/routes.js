const { Router } = require('express');

const MovieController = require('./app/controler/MovieController');

const router = Router();

router.get(
  '/movies',
  MovieController.index,
);

router.get('/movies', MovieController.index);
router.get('/movies/:id', MovieController.show);
router.delete('/movies/:id', MovieController.delete);
router.post('/movies', MovieController.store);

module.exports = router;
