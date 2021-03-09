const Article = require('../models/articleModel');
const Comment = require('../models/commentModel');
const User = require('../models/userModel');

exports.articleOwner = (req, res) => {};

exports.commentOwner = (req, res) => {};

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
