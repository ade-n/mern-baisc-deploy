const express = require("express");
const router = express.Router();
const Book = require("../model/index");

router.get("/", (req, res, next) => {
  Book.find({}).then((item) => {
    res.send(item);
  });
});

router.post("/add", (req, res, next) => {
  Book.create(req.body)
    .then((item) => {
      res.send(item);
    })
    .catch(next);
});

router.get("/:id", (req, res, next) => {
  Book.findById(req.params.id)
    .then((item) => res.json(item))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.put("/update/:id", (req, res, next) => {
  Book.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true }).then(
    (book) => {
      res.send(book);
    }
  );
});

router.delete("/:id", (req, res, next) => {
  Book.findByIdAndRemove({ _id: req.params.id }).then((item) => {
    res.send(item);
  });
});

module.exports = router;
