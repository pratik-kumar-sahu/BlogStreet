const Comment = require('../models/commentModel');
const Article = require('../models/articleModel');
const User = require('../models/userModel');

exports.createComment = async (req, res) => {
  // console.log(req.body);
  const user = await User.findOne({ _id: req.session.userId });
  await Article.findById(req.params.id, (err, article) => {
    if (err) {
      console.log(err);
      res.redirect('/');
    } else {
      let comment = new Comment({
        content: req.body.content,
        author: user.username,
      });
      try {
        comment.save();
        article.comments.push(comment);
        const success = article.save();
        if (success) {
          req.flash('message', 'Comment posted successfully');
        }
        // console.log(comment.author);
        res.redirect(`/articles/${article._id}`);
      } catch (error) {
        console.log(err);
        res.redirect('/');
      }
    }
  });
};

exports.deleteComment = async (req, res) => {
  try {
    const author = await User.findOne({ _id: req.session.userId });
    if (author.role === 'Admin') {
      await Comment.findByIdAndDelete(req.params.id);
      res.redirect('back');
    }
  } catch (error) {
    console.log(error.message);
  }
};
