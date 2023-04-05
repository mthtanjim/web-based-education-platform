const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
const User = require("./User")

const DownloadSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },
    slug: {
      type: String,
      lowercase: true,
    },
    description: {
      type: {},
      required: true,
      trim: true,
      maxlength: 2000,
    },
    fileUrl: {
      type: String,
      required: false,
    },
    photo: {
      data: Buffer,
      contentType: String,
    },
    price: {
      type: Number,
      required: false,
    },
    category: {
      type: ObjectId,
      ref: "Category",
      required: false,
    },

    isPaid: {
      type: Boolean,
      required: false,
      default: true,
    },
    buyers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    seller: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Products", DownloadSchema);
