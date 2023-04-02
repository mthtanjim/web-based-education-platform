const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100
  },
  description: {
    type: String,
    required: true,
    trim: true,
    maxlength: 1000
  },
  level: {
    type: String,
    enum: ['beginner', 'intermediate', 'advanced'],
    default: 'beginner'
  },
  duration: {
    type: Number,
    required: true
  },
  prerequisites: [{
    type: String,
    trim: true,
    maxlength: 100
  }],
  requirements: [{
    type: String,
    trim: true,
    maxlength: 100
  }],
  lessons: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Lesson'
  }]
}, { timestamps: true });

const Course = mongoose.model('Course', CourseSchema);

module.exports = Course;