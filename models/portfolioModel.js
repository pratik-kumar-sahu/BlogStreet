const mongoose = require('mongoose');

const portfolioSchema = new mongoose.Schema({
  portfolioAuthor: String,
  fullName: String,
  who: String,
  //
  descOneLine: String,
  fullName: String,
  website: String,
  qualification: String,
  city: String,
  age: Number,
  hobbies: String,
  email: String,
  freelance: String,
  //
  skill1: String,
  skill2: String,
  skill3: String,
  skill4: String,
  skill5: String,
  skill6: String,
  // Summary
  summary: String,
  // Education
  edu1: String,
  year1: String,
  clg1: String,
  desc1: String,
  //
  edu2: String,
  year2: String,
  clg2: String,
  desc2: String,
  //
  edu3: String,
  year3: String,
  clg3: String,
  desc3: String,
  // Experience
  exp1: String,
  inYear1: String,
  location1: String,
  pt1_1: String,
  pt1_2: String,
  pt1_3: String,
  //
  exp2: String,
  inYear2: String,
  location2: String,
  pt2_1: String,
  pt2_2: String,
  pt2_3: String,
  //
  twitter: String,
  facebook: String,
  instagram: String,
  linkedIn: String,
  //
  phone: Number,
  copyName: String,
});

module.exports = mongoose.model('Portfolio', portfolioSchema);
