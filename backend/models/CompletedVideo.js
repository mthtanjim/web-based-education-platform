const mongoose = require("mongoose");

const CompletedVideoSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    video: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Video",
      required: true,
    },
  },
  { timestamps: true }
);

const CompletedVideo = mongoose.model("CompletedVideo", CompletedVideoSchema);

module.exports = CompletedVideo;
