const mongoose = require("mongoose");

const LessonSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },
    description: {
      type: String,
      required: true,
      trim: true,
      maxlength: 1000,
    },
    videoUrl: {
      type: String,
      required: false,
    },
    duration: {
      type: Number,
      required: false,
    },
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
    quizzes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Quiz",
      },
    ],
  },
  { timestamps: true }
);

const Lesson = mongoose.model("Lesson", LessonSchema);

module.exports = Lesson;
