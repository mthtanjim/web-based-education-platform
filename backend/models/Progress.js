const mongoose = require('mongoose');

const ProgressSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: true
  },
  lessonsCompleted: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Lesson',
    required: true
  }],
  completed: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

const Progress = mongoose.model('Progress', ProgressSchema);

module.exports = Progress;