const User = require('../models/User');
const Course = require('../models/Course');
const Certificate = require('../models/Certificate');

const GenerateCertificate = async (req, res) => {
  const { userId, courseId } = req.body;

  try {
    const user = await User.findById(userId);
    const course = await Course.findById(courseId);

    if (!user || !course) {
      return res.status(404).json({ error: 'User or course not found' });
    }

    // Check if the user has completed all videos in the course
    const courseVideos = await Video.find({ course: courseId });

    const completedCourseVideos = await CompletedVideo.find({
      user: userId,
      video: { $in: courseVideos.map(video => video._id) }
    });

    if (courseVideos.length !== completedCourseVideos.length) {
      return res.status(400).json({ error: 'User has not completed all videos in the course' });
    }

    // Check if the user already has a certificate for this course
    const existingCertificate = await Certificate.findOne({
      user: userId,
      course: courseId
    });

    if (existingCertificate) {
      return res.status(400).json({ error: 'User already has a certificate for this course' });
    }

    // Generate and save the certificate
    const certificate = new Certificate({
      user: userId,
      course: courseId
    });

    await certificate.save();

    // Add the certificate to the user's certificates list
    user.certificates.push(certificate);
    await user.save();

    res.json({ message: 'Certificate generated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = GenerateCertificate;
