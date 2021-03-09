const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();
const middleware = require('../middlewares/middlewares');

router
  .route('/register')
  .get(middleware.preventAuthedUser, userController.getRegisterRoute)
  .post(middleware.preventAuthedUser, userController.createUser);

router
  .route('/login')
  .get(middleware.preventAuthedUser, userController.getLoginRoute)
  .post(middleware.preventAuthedUser, userController.loginUser);

router.route('/logout').get(userController.logoutUser);

module.exports = router;
