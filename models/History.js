var mongoose = require("mongoose");
// require('mongoose-type-url');
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  title: {
    type: String
  },
  date: {
    type: Date
  },
  url: {
    type: String
  }
});

var Article = mongoose.model("Article", ArticleSchema);
module.exports = Article;
