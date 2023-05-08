const mongoose = require('mongoose');

const CertificateSchema = new mongoose.Schema({
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
  date: {
    type: Date,
    default: Date.now
  },
  grade: {
    type: String,
    required: true
  },
  instructor: {
    type: String,
    required: true
  },
  institution: {
    type: String,
    required: true
  },
  certificateUrl: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Certificate', CertificateSchema);
