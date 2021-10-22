const router = require("express").Router();
const Author = require("../models/Author.model");

router.get("/", (req, res, next) => {
  Author.find()
    .then((authorsFromDb) => res.status(200).json({ authors: authorsFromDb }))
    .catch((err) => res.json({ errorMessage: err }));
});

router.post("/", (req, res, next) => {
  Author.create(req.body)
    .then((authorFromDb) => res.status(200).json({ author: authorFromDb }))
    .catch((err) => res.json({ errorMessage: err }));
});

router.get("/:id", (req, res, next) => {
  Author.findById(req.params.id)
    .populate("books")
    .then((authorFromDb) => res.status(200).json({ author: authorFromDb }))
    .catch((err) => res.json({ errorMessage: err }));
});

router.post("/:id", (req, res, next) => {
  Author.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((authorFromDb) => res.status(200).json({ author: authorFromDb }))
    .catch((err) => res.json({ errorMessage: err }));
});

router.delete("/:id", (req, res, next) => {
  Author.findByIdAndDelete(req.params.id)
    .then(() => res.status(200).json({ success: true }))
    .catch((err) => res.json({ errorMessage: err }));
});

module.exports = router;
