const Video = require('../models/Video');
const User = require('../models/User');
const CompletedVideo = require('../models/CompletedVideo');

const MarkVideoAsCompleted = async (req, res) => {
  const { userId, videoId } = req.body;

  try {
    const user = await User.findById(userId);
    const video = await Video.findById(videoId);

    if (!user || !video) {
      return res.status(404).json({ error: 'User or video not found' });
    }

    // Check if the user has already completed the video
    const existingCompletedVideo = await CompletedVideo.findOne({
      user: userId,
      video: videoId
    });

    if (existingCompletedVideo) {
      return res.status(400).json({ error: 'Video already completed' });
    }

    // Add the video to the user's completed videos
    const completedVideo = new CompletedVideo({
      user: userId,
      video: videoId
    });

    await completedVideo.save();

    // Check if the user has completed all videos in the course
    const courseVideos = await Video.find({ course: video.course });

    const completedCourseVideos = await CompletedVideo.find({
      user: userId,
      video: { $in: courseVideos.map(video => video._id) }
    });

    if (courseVideos.length === completedCourseVideos.length) {
      // Give the user a certificate for completing the course
      user.certificates.push({ course: video.course });
      await user.save();
    }

    res.json({ message: 'Video marked as completed' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = MarkVideoAsCompleted;
