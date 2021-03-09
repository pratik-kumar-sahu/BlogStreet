const express = require('express');
const articleController = require('../controllers/articleController');
const router = express.Router();
const middleware = require('../middlewares/middlewares');

router
  .route('/')
  .get(articleController.getHomepage)
  .post(middleware.checkUserSession, articleController.createArticle);

router
  .route('/new')
  .get(middleware.checkUserSession, articleController.newArticleRoute);

router
  .route('/:id/edit')
  .get(middleware.checkUserSession, articleController.getEditRoute);

router
  .route('/:id')
  .get(articleController.getArticle)
  .put(middleware.checkUserSession, articleController.editArticle)
  .delete(middleware.checkUserSession, articleController.deleteArticle);

module.exports = router;
