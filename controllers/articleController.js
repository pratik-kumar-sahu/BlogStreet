const Article = require('../models/articleModel');

exports.getHomepage = async (req, res) => {
  try {
    const articles = await Article.find().sort({ createdAt: 'desc' });
    res.render('articles/index', { articles: articles });
  } catch (error) {
    console.log(error.message);
  }
};

exports.newArticleRoute = (req, res) => {
  if (req.session.userId) {
    return res.render('articles/new', { article: new Article() });
  }
  res.redirect('/auth/login');
};

exports.getArticle = async (req, res) => {
  try {
    const article = await Article.findOne({ _id: req.params.id }).populate(
      'comments'
    );
    if (article) {
      res.render('articles/show', { article });
    }
  } catch (error) {
    console.log(error.message);
    res.redirect('/');
  }

  // try {
  //   const article = await Article.findById(req.params.id);
  //   if (article == null) res.redirect('/');
  //   res.render('articles/show', { article: article });
  // } catch (error) {
  //   console.log(error.message);
  // }
};

exports.createArticle = async (req, res) => {
  let article = new Article({
    title: req.body.title,
    image: req.body.image,
    description: req.body.description,
    markdown: req.body.markdown,
    // author: {
    //   id: req.user._id,
    //   username: req.user.username,
    // },
  });
  try {
    await article.save();
    res.redirect(`/articles/${article.id}`);
  } catch (err) {
    console.log(err.message);
    res.render('articles/new', { article: article });
  }
};

exports.getEditRoute = (req, res) => {
  Article.findById(req.params.id, (err, article) => {
    res.render('articles/edit', { article: article });
  });
};

exports.editArticle = (req, res) => {
  Article.findByIdAndUpdate(req.params.id, req.body, (err, article) => {
    if (err) {
      res.redirect('/');
    } else {
      res.redirect(`/articles/${req.params.id}`);
    }
  });
};

exports.deleteArticle = async (req, res) => {
  try {
    await Article.findByIdAndDelete(req.params.id);
    res.redirect('/');
  } catch (error) {
    console.log(error.message);
  }
};
