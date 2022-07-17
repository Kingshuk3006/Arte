const mongoose = require ('mongoose');

const ArticleSchema = new mongoose.Schema ({
  images: [{imageURL: String}],
  description: {
    type: String,
    require: true,
    default: null,
    maxLength: [4000, 'Please keep Article smaller'],
  },
  author: {
    type: String,
    required: true,
    default: 'Anonymous Writer',
  },
  author: {
    type: String,
    required: true,
    default: 'Article Heading',
  },
  dateofpublish: {
    type: Date,
    required: true,
    default: Date.now()
  },
});

module.exports =
  mongoose.models.Article || mongoose.model ('Article', ArticleSchema);
