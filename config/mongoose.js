const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

mongoose.connect("mongodb://localhost/url-short-placement");

const db = mongoose.connection;

db.on("error", console.error.bind(console, "error connecting to db"));

// up and running, once the connection (db) is open to access the database
db.once("open", function () {
  console.log(
    "*********** --Succesfully connected to the database-- ***************"
  );
});

module.exports = db;
