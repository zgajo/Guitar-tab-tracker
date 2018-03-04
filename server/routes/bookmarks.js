var express = require('express');
var router = express.Router();

const BookmarksController = require('../controllers/BookmarksController');


/* GET specific bookmark. */
router.get('/', BookmarksController.index);
/* CREATE bookmark. */
router.post('/', BookmarksController.post);
/* DELETE . */
router.delete('/:id', BookmarksController.delete);

module.exports = router;
