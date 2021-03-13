const Article = require('../models/articleModel');
const Comment = require('../models/commentModel');
const User = require('../models/userModel');
const Portfolio = require('../models/portfolioModel');

exports.commentOwner = (req, res, next) => {};

exports.notAuthorized = (req, res, next) => {
  User.findById(req.session.userId, (err, user) => {
    if (err || !user) {
      return res.redirect('/auth/login');
    }
    next();
  });
};

exports.hasPortfolio = async (req, res, next) => {
  const user = await User.findById(req.session.userId);
  const foundPortfolio = await Portfolio.findOne({
    portfolioAuthor: user.email,
  });
  if (foundPortfolio) {
    return res.redirect('/portfolio/profile');
  }
  next();
};

exports.isLoggedIn = (req, res, next) => {
  // console.log(req.session.userId);
  if (req.session.userId) {
    next();
  } else {
    res.redirect('/auth/login');
  }
};

exports.checkUserSession = (req, res, next) => {
  User.findById(req.session.userId, (err, user) => {
    if (err || !user) {
      return res.redirect('/auth/login');
    }
    next();
  });
};

exports.preventAuthedUser = (req, res, next) => {
  if (req.session.userId) {
    return res.redirect('/');
  }
  next();
};

exports.currentUser = (req, res, next) => {
  res.locals.user = req.session.userId;
  next();
};
