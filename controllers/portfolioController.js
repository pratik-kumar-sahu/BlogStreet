const Portfolio = require('../models/portfolioModel');
const User = require('../models/userModel');

exports.getProfile = async (req, res) => {
  try {
    const portfolios = await Portfolio.find().sort({ createdAt: 'asc' });
    const author = await User.findOne({ _id: req.session.userId });
    if (author.role === 'Admin') {
      foundAuthor = author;
    } else {
      foundAuthor = null;
    }
    res.render('portfolio/profile', {
      portfolios: portfolios,
      foundAuthor: foundAuthor,
    });
  } catch (error) {
    console.log(error.message);
    res.redirect('/');
  }
};

exports.getFillRoute = (req, res) => {
  res.render('portfolio/fill', { portfolio: new Portfolio() });
};

exports.getPortfolio = async (req, res) => {
  try {
    const portfolio = await Portfolio.findById({ _id: req.params.id });
    if (portfolio == null) return res.redirect('/');
    res.render(`portfolio/page`, { portfolio: portfolio });
  } catch (error) {
    console.log(error.message);
    res.redirect('/');
  }
};

exports.createPortfolio = async (req, res) => {
  let portfolio = new Portfolio(req.body);
  try {
    await portfolio.save();
    res.redirect(`/portfolio/${portfolio.id}`);
  } catch (error) {
    console.log(error.message);
    res.render('portfolio/fill', { portfolio: portfolio });
  }
};

// exports.editPortfolioRoute = (req, res) => {
//   Portfolio.findById(req.params.id, (err, portfolio) => {
//     res.render('portfolio/edit', { portfolio });
//   });
// };

// exports.editPortfolio = (req, res) => {
//   Portfolio.findByIdAndUpdate(req.params.id, req.body, (err, portfolio) => {
//     if (err) {
//       res.redirect('/');
//     } else {
//       res.redirect(`/portfolio/${req.params.id}`, { portfolio });
//     }
//   });
// };

exports.deletePortfolio = async (req, res) => {
  try {
    await Portfolio.findByIdAndDelete(req.params.id);
    res.redirect('/portfolio/profile');
  } catch (error) {
    console.log(error.message);
  }
};
