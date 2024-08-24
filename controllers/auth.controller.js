const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../models');
require('dotenv').config();

// User Registration
exports.register = async (req, res) => {
  try {
    const { name, username, email, password, phoneNumber, address } = req.body;

    // Hash the user's password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the user in the database
    const user = await User.create({
      name,
      username,
      email,
      password: hashedPassword,
      phoneNumber,
      address,
      role: 'user' // default role is 'user'
    });

    // Send back the created user's details (without the password)
    res.status(201).json({
      message: 'User created successfully',
      user: {
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email,
        role: user.role
      }
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// User Login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user by email
    const user = await User.findOne({ where: { email } });

    // If user is not found or password does not match
    if (!user || !await bcrypt.compare(password, user.password)) {
      return res.status(401).json({ error: 'Unauthorized', message: 'Invalid username/password' });
    }

    // Generate a JWT token
    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
    // Send back the token
    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
