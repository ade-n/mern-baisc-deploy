const express = require("express");
const router = express.Router();
const Book = require("../model/index");

//routes
router.get("/", (req, res) => {
  Book.find({})
    .then((data) => {
      console.log("data show", data);
      res.json(data);
    })
    .catch((err) => {
      console.log("hopa err", err);
    });
});

router.post("/add", (req, res) => {
  console.log("body", req.body);
  const data = req.body;

  const newBook = new Book(data);
  newBook.save((err) => {
    if (err) {
      res.status(500).json({ msg: "sorry something went wrong" });
    }
    return res.json({
      msg: "we have received your data",
    });
  });
});

router.get("/name", (req, res) => {
  const data = {
    username: "miau",
    age: 22,
  };
  res.json(data);
});

module.exports = router;
