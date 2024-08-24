require('dotenv').config();
const express = require('express');
const app = express();
const authRoutes = require('./routes/auth');
const movieRoutes = require('./routes/movies');

app.use(express.json());
app.use(authRoutes);
app.use(movieRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
