const express = require('express');
const portfolioController = require('../controllers/portfolioController');
const router = express.Router();
const middleware = require('../middlewares/middlewares');

router
  .route('/')
  .post(
    middleware.notAuthorized,
    middleware.hasPortfolio,
    portfolioController.createPortfolio
  );

router
  .route('/fill')
  .get(
    middleware.notAuthorized,
    middleware.hasPortfolio,
    portfolioController.getFillRoute
  );

router
  .route('/profile')
  .get(middleware.notAuthorized, portfolioController.getProfile);

router
  .route('/:id')
  .get(portfolioController.getPortfolio)
  // .put(portfolioController.editPortfolio)
  .delete(middleware.notAuthorized, portfolioController.deletePortfolio);

// router.route('/:id/edit').get(portfolioController.editPortfolioRoute);

module.exports = router;
