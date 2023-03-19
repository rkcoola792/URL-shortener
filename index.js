const express = require("express");
const app = express();
const port = 8000;
const db = require("./config/mongoose");
const ShortURL = require("./models/shortUrl");

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));

app.get("/", async (req, res) => {
  const shortUrls = await ShortURL.find({});
  res.render("index", { shortUrls: shortUrls });
});

app.post("/shortUrls", async (req, res) => {
  await ShortURL.create({
    full: req.body.fullURL,
  });
  res.redirect("/");
});

app.get("/:shortUrl", async (req, res) => {

  const shortUrlData = await ShortURL.findOne({ short: req.params.shortUrl });
  shortUrlData.clicks++;
  shortUrlData.save();
  res.redirect(shortUrlData.full);
});



app.listen(port, function (err) {
  if (err) {
    console.log(`Error in running server ${err}`);
    return;
  }
  console.log(`server is up and running on port ${port}`);
});
