const express = require('express');
const commentController = require('../controllers/commentController');
const middleware = require('../middlewares/middlewares');
const router = express.Router({ mergeParams: true });

router.route('/').post(middleware.isLoggedIn, commentController.createComment);

router.route('/:id').delete(commentController.deleteComment);

module.exports = router;
