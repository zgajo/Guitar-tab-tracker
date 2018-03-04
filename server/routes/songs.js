var express = require('express');
var router = express.Router();

// Controllers
const AuthenticationController = require('../controllers/AuthenticationController');
const SongsController = require('../controllers/SongsController');

// Policies
const AuthenticationControllerPolicy = require('../middleware/AuthenticationControllerPolicy');

/* GET users listing. */
router.get('/', SongsController.index);

/* POST new song */
router.post('/', SongsController.post);

/* POST new song */
router.put('/:id', SongsController.put);

/* GET specific song */
router.get('/:id', SongsController.view);


module.exports = router;
