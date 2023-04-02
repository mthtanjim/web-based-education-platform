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
  issuedDate: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

const Certificate = mongoose.model('Certificate', CertificateSchema);

module.exports = Certificate;