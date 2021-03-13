const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    // required: true,
  },
  email: {
    type: String,
    // required: true,
  },
  password: {
    type: String,
    // required: true,
  },
  articles: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Article',
    },
  ],
  role: {
    type: String,
    default: 'Blogger',
  },
});

userSchema.pre('save', async function (next) {
  const user = this;
  var encrypted = await bcrypt.hash(user.password, 8);
  user.password = encrypted;
  next();
});

module.exports = mongoose.model('User', userSchema);
