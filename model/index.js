const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  book: {
    type: String,
    required: [true, "Book field is required"],
  },
  author: {
    type: String,
    required: [true, "Author field is required"],
  },
  link: {
    type: String,
  },
  show: { type: Boolean, default: false },
});

const Book = mongoose.model("item", BookSchema);
module.exports = Book;
