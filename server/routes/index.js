const express= require('express');
const router = express.Router();
const mainController= require('../controllers/mainController');


router.get('/',mainController.homepage);
router.get('/about',mainController.about);
router.get('/feature',mainController.feature);
router.get('/faq',mainController.faq);

module.exports = router;