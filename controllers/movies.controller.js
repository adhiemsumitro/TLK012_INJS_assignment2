const { Movie } = require('../models');

// Get List of Movies
exports.getMovies = async (req, res) => {
  try {
    // Fetch all movies from the database
    const movies = await Movie.findAll();

    // Send the movies back in the response
    res.json(movies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
