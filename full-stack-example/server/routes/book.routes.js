const router = require("express").Router();
const Book = require("../models/Book.model");
const Author = require("../models/Author.model");

router.get("/", (req, res, next) => {
  Book.find()
    .populate("author")
    .then((BooksFromDb) => res.status(200).json({ books: BooksFromDb }))
    .catch((err) => res.json({ errorMessage: err }));
});

router.post("/", (req, res, next) => {
  Book.create(req.body)
    .then((BookFromDb) => {
      Author.findByIdAndUpdate(BookFromDb.author, {
        $push: { books: BookFromDb._id },
      }).then(() => res.status(200).json({ book: BookFromDb }));
    })
    .catch((err) => res.json({ errorMessage: err }));
});

router.get("/:id", (req, res, next) => {
  Book.findById(req.params.id)
    .populate("author")
    .then((BookFromDb) => res.status(200).json({ book: BookFromDb }))
    .catch((err) => res.json({ errorMessage: err }));
});

router.post("/:id", (req, res, next) => {
  Book.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((BookFromDb) => res.status(200).json({ book: BookFromDb }))
    .catch((err) => res.json({ errorMessage: err }));
});

router.delete("/:id", (req, res, next) => {
  Book.findByIdAndDelete(req.params.id)
    .then(() =>
      Author.findOneAndUpdate(
        { books: req.params.id },
        { $pull: { books: req.params.id } }
      ).then(() => res.status(200).json({ success: true }))
    )
    .catch((err) => res.json({ errorMessage: err }));
});

module.exports = router;
