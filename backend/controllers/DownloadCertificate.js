const fs = require('fs');
const path = require('path');
const User = require('../models/User');

const DownloadCertificate = async (req, res) => {
  const { userId, courseId } = req.body;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const certificate = user.certificates.find(certificate => certificate.course == courseId);

    if (!certificate) {
      return res.status(404).json({ error: 'Certificate not found' });
    }

    const filePath = path.join(__dirname, '..', 'certificates', `${userId}_${courseId}.pdf`);

    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ error: 'Certificate file not found' });
    }

    res.download(filePath);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = DownloadCertificate;
