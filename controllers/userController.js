const User = require('../models/userModel');
const bcrypt = require('bcrypt');

exports.getRegisterRoute = (req, res) => {
  res.render('register', { user: new User() });
};

exports.createUser = async (req, res) => {
  await User.findOne({ email: req.body.email }, (err, foundUser) => {
    if (foundUser) {
      req.flash('message', 'Email already registered. Please login!');
      return res.redirect('/auth/login');
    } else {
      try {
        var user = new User({
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
        });
        const success = user.save();
        req.session.userId = user._id;
        if (success) {
          req.flash('message', 'Registered successfully');
          res.redirect('/');
        }
      } catch (error) {
        console.log(error.message);
        return res.redirect('/auth/register');
      }
    }
  });
};

exports.getLoginRoute = (req, res) => {
  res.render('login', { message: req.flash('message') });
};

exports.loginUser = async (req, res) => {
  await User.findOne({ email: req.body.email }, (err, user) => {
    if (err) return res.redirect('/auth/login');
    if (!user) return res.redirect('/auth/register');
    else {
      bcrypt.compare(req.body.password, user.password, (err, same) => {
        if (err || !same) {
          console.log('password not correct');
          res.redirect('/auth/login');
        } else {
          req.session.userId = user._id;
          req.flash('message', 'Logged In successfully');
          res.redirect('/');
        }
      });
    }
  });
};

exports.logoutUser = (req, res) => {
  req.session.destroy(() => {
    res.redirect('/');
  });
};
