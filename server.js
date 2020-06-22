const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/api");
//const cors = require("cors");
const path = require("path");
const morgan = require("morgan");
require("dotenv").config();

console.log(process.env);

const app = express();
const PORT = process.env.PORT || 5000;

mongoose
  .connect("mongodb://localhost/blog", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

/*mongoose.connect(process.env.MONGDB_URI || "mongodb://localhost/blog", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});*/

mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected");
});

//Data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//app.use(cors());

//HTTP logs
app.use(morgan("tiny"));
app.use("/api", routes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, console.log(`server is listening to ${PORT}`));
