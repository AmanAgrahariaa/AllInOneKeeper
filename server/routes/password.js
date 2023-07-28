const express = require('express');
const router = express.Router();
const { isLoggedIn } = require('../middleware/checkAuth');
const { loginSubmit, signupSubmit } = require('../controllers/passwordAuthController');
const passwordController = require('../controllers/passwordController');
const checkPasswordAuth = require('../middleware/checkPasswordAuth');

/**
 * Password Manager Authentication Routes 
*/

// Login form route
router.get('/password/login', (req, res) => {
  res.render('password/login', { error: null });
});

// Login form submission route
router.post('/password/login', loginSubmit);

// Signup form route
router.get('/password/signup', (req, res) => {
  res.render('password/signup', { error: null });
});

// Signup form submission route
router.post('/password/signup', signupSubmit);


/**
 * Password Manager Routes 
*/

// Middleware for checking JWT authentication for password manager routes
router.use('/password', checkPasswordAuth);

// Password manager's main index page
router.get('/password', isLoggedIn, passwordController.password);

router.get('/password/item/:id', isLoggedIn, passwordController.passwordViewNote);
router.put('/password/item/:id', isLoggedIn, passwordController.passwordUpdateNote);
router.delete('/password/item-delete/:id', isLoggedIn, passwordController.passwordDeleteNote);
router.get('/password/add', isLoggedIn, passwordController.passwordAddNote);
router.post('/password/add', isLoggedIn, passwordController.passwordAddNoteSubmit);
router.get('/password/search', isLoggedIn, passwordController.passwordSearch);
router.post('/password/search', isLoggedIn, passwordController.passwordSearchSubmit);

module.exports = router;
