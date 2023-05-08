const Lesson = require("../models/Lesson")

const CreateLesson = async (req, res, next) => {
    try {
        const { title, description, videoUrl, duration, courseId, quizzes } = req.body;
    
        // Create a new lesson object
        const newLesson = new Lesson({
          title,
          description,
          videoUrl,
          duration,
          courseId,
          quizzes
        });
        // Save the new lesson object to the database
        const savedLesson = await newLesson.save();
        res.status(201).json({ lesson: savedLesson });
        // res.status(201).json({ lesson: "success post lesson" });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error: failed to upload lesson." });
      }
}

const DeleteLesson = async (req, res, next) => {
    try {
        const { id } = req.params;
    
        // Find the lesson to delete
        const lessonToDelete = await Lesson.findById(id);
    
        // Check if the lesson exists
        if (!lessonToDelete) {
          return res.status(404).json({ message: 'Lesson not found' });
        }
    
        // Delete the lesson
        await lessonToDelete.deleteOne({_id: id});
    
        return res.json({ message: 'Lesson deleted successfully' });
      } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
      }
}

const GetAllLesson = async (req, res) => {
    try {
        const lessons = await Lesson.find({});
        res.json(lessons);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
      }
    };

module.exports = {CreateLesson, DeleteLesson, GetAllLesson}