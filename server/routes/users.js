var express = require('express');
var router = express.Router();

// Controllers
const AuthenticationController = require('../controllers/AuthenticationController');

// Policies
const AuthenticationControllerPolicy = require('../middleware/AuthenticationControllerPolicy');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/register', 
            AuthenticationControllerPolicy.register, // middleware
            AuthenticationController.register);

router.post('/login', 
            AuthenticationController.login);

module.exports = router;
