const express = require('express');
const { getMovies } = require('../controllers/movies.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const router = express.Router();

router.get('/movies', authMiddleware, getMovies);

module.exports = router;
