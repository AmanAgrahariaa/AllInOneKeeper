const express = require('express');
const router = express.Router();
const { isLoggedIn } = require('../middleware/checkAuth');
const passwordController = require('../controllers/passwordController');

/**
 * password Routes 
*/

router.get('/password', isLoggedIn, passwordController.password);
router.get('/password/item/:id', isLoggedIn, passwordController.passwordViewNote);
router.put('/password/item/:id', isLoggedIn, passwordController.passwordUpdateNote);
router.delete('/password/item-delete/:id', isLoggedIn, passwordController.passwordDeleteNote);
router.get('/password/add', isLoggedIn, passwordController.passwordAddNote);
router.post('/password/add', isLoggedIn, passwordController.passwordAddNoteSubmit);
router.get('/password/search', isLoggedIn, passwordController.passwordSearch);
router.post('/password/search', isLoggedIn, passwordController.passwordSearchSubmit);


module.exports = router;