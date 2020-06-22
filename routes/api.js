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

/*
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
*/
