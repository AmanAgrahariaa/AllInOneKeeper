// This controller handles the logic for password manager authentication (login and signup).
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const PasswordUser = require('../models/PasswordUser');
require('dotenv').config();
const saltRounds = 10;
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY; // Replace this with your secret key for JWT

const passwordAuthController = {};

// Common function to render the login form with error message
function renderLoginForm(req, res, error) {
  res.render('password/login', { error });
}

// Handle login form submission
passwordAuthController.loginSubmit = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user in the database
    const user = await PasswordUser.findOne({ email });

    if (!user) {
      return renderLoginForm(req, res, 'Invalid credentials');
    }

    // Compare the passwords
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return renderLoginForm(req, res, 'Invalid credentials');
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, JWT_SECRET_KEY, { expiresIn: '5m' });

    // Set the token in a cookie
    res.cookie('password_jwt', token, { maxAge: 60000, httpOnly: true });

    // Redirect to the password manager's index page
    res.redirect('/password');
  } catch (error) {
    console.error(error);
    renderLoginForm(req, res, 'Server error');
  }
};

// Handle signup form submission
passwordAuthController.signupSubmit = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the email already exists
    const existingUser = await PasswordUser.findOne({ email });

    if (existingUser) {
      return res.render('password/signup', { error: 'Email already registered' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create a new user in the database
    await PasswordUser.create({ email, password: hashedPassword });

    // Redirect to the password manager's index page
    res.redirect('/password');
  } catch (error) {
    console.error(error);
    res.status(500).render('password/signup', { error: 'Server error' });
  }
};

module.exports = passwordAuthController;
