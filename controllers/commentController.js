const Comment = require('../models/commentModel');
const Article = require('../models/articleModel');

exports.createComment = async (req, res) => {
  console.log(req.body);
  await Article.findById(req.params.id, (err, article) => {
    if (err) {
      console.log(err);
      res.redirect('/');
    } else {
      let comment = new Comment({
        content: req.body.content,
      });
      try {
        // comment.author.id = req.user._id;
        // comment.author.username = req.user.username;
        comment.save();
        article.comments.push(comment);
        article.save();
        console.log(comment);
        console.log(comment.content);
        res.redirect(`/articles/${article._id}`);
      } catch (error) {
        console.log(err);
        res.redirect('/');
      }
      //   Comment.create(req.body.content, (err, comment) => {
      //     if (err) {
      //       console.log(err);
      //     } else {
      //       comment.save();
      //       article.comments.push(comment);
      //       article.save();
      //       console.log(article);
      //       res.redirect(`/articles/${article._id}`);
      //     }
      //   });
    }
  });
};
