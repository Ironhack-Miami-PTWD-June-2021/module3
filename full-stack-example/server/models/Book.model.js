const { Schema, model } = require("mongoose");

const bookSchema = new Schema({
  title: String,
  author: { type: Schema.Types.ObjectId, ref: "Author" },
  description: String,
  genre: [String],
});

const Book = model("Book", bookSchema);

module.exports = Book;
