const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/api");
//const cors = require("cors");
const path = require("path");
const morgan = require("morgan");

const app = express();
const PORT = process.env.PORT || 8080;

//const MONGDB_URI =
//  "mongodb+srv://alex_svg:Oliniedecod@test-kanlq.gcp.mongodb.net/blog?retryWrites=true&w=majority";

mongoose.connect(process.env.MONGDB_URI || "mongodb://localhost/blog", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
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
}

app.listen(PORT, console.log(`server is listening to ${PORT}`));
