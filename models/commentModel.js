const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  content: String,
  author: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  article: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Article',
  },
});

module.exports = mongoose.model('Comment', commentSchema);
