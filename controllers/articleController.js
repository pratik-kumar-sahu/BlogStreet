const Article = require('../models/articleModel');
const User = require('../models/userModel');

exports.getHomepage = async (req, res) => {
  try {
    const articles = await Article.find().sort({ createdAt: 'asc' });
    // console.log(articles);
    res.render('articles/index', {
      articles: articles,
      message: req.flash('message'),
    });
  } catch (error) {
    console.log(error.message);
  }
};

exports.newArticleRoute = (req, res) => {
  if (req.session.userId) {
    return res.render('articles/new', {
      article: new Article(),
      message: req.flash('message'),
    });
  }
  res.redirect('/auth/login');
};

exports.getArticle = async (req, res) => {
  try {
    const article = await Article.findOne({ _id: req.params.id }).populate(
      'comments'
    );
    const author = await User.findOne({ _id: req.session.userId });
    // console.log(article.authorEmail);
    if (author != null) {
      if (article.authorEmail === author.email) {
        foundAuthor = author;
      } else if (author.role === 'Admin') {
        foundAuthor = author;
      } else {
        foundAuthor = null;
      }
    } else {
      foundAuthor = null;
    }
    res.render('articles/show', {
      article: article,
      foundAuthor: foundAuthor,
      message: req.flash('message'),
    });
  } catch (error) {
    console.log(error.message);
    res.redirect('/');
  }
};

exports.createArticle = async (req, res) => {
  // console.log(req.session.userId);
  const user = await User.findOne({ _id: req.session.userId });
  let article = new Article({
    title: req.body.title,
    image: req.body.image,
    description: req.body.description,
    markdown: req.body.markdown,
    author: user.username,
    authorEmail: user.email,
  });
  try {
    const success = await article.save();
    if (success) {
      req.flash('message', 'Successfully posted');
      res.redirect(`/articles/${article.id}`);
    }
  } catch (err) {
    console.log(err.message);
    req.flash('message', 'Error occurred');
    res.render('articles/new', {
      article: article,
      message: req.flash('message'),
    });
  }
};

exports.getEditRoute = async (req, res) => {
  const article = await Article.findById(req.params.id);
  res.render('articles/edit', { article: article });
};

exports.editArticle = async (req, res) => {
  let article = await Article.findById(req.params.id);
  article.title = req.body.title;
  article.image = req.body.image;
  article.description = req.body.description;
  article.markdown = req.body.markdown;
  try {
    article = await article.save();
    res.redirect(`/articles/${article.id}`);
  } catch (error) {
    res.render('articles/new', { article: article });
  }
};

exports.deleteArticle = async (req, res) => {
  try {
    await Article.findByIdAndDelete(req.params.id);
    res.redirect('/');
  } catch (error) {
    console.log(error.message);
  }
};
