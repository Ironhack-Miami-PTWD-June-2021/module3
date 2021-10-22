const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.json({ test: "example" });
});

module.exports = router;
