const mongoose = require("mongoose");
//Schema

const Schema = mongoose.Schema;
const BookSchema = new Schema({
  title: String,
  body: String,
  date: {
    type: String,
    default: Date.now(),
  },
});

//model
const Book = mongoose.model("books", BookSchema);

module.exports = Book;
