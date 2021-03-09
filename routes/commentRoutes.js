const express = require('express');
const commentController = require('../controllers/commentController');
const router = express.Router({ mergeParams: true });

router.route('/').post(commentController.createComment);

module.exports = router;
