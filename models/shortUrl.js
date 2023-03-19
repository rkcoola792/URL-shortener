const mongoose = require("mongoose");
const shortId = require("shortid");

const shortUrlSchema = new mongoose.Schema(
  {
    full: {
      type: String,
      required: true,
    },

    short: {
      type: String,
      default:shortId.generate,
    },
    clicks: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const ShortURL = mongoose.model("ShortURL", shortUrlSchema);
module.exports = ShortURL;