const { Schema, model } = require("mongoose");

const authorSchema = new Schema({
  name: String,
  books: [{ type: Schema.Types.ObjectId, ref: "Book" }],
});

const Author = model("Author", authorSchema);

module.exports = Author;
