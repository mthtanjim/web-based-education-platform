const Lesson = require("../models/Lesson");
const Course = require("../models/Course");
const { body, validationResult } = require('express-validator');

const CreateCourse = async (req, res, next) => {
  try {
    const { title, description, level, duration, prerequisites, requirements } =
      req.body;
      validation  
      await body('title').isString().trim().escape().isLength({ min: 1, max: 100 }).run(req);
      await body('description').isString().trim().escape().isLength({ min: 1, max: 1000 }).run(req);
      await body('level').isString().trim().escape().isIn(['beginner', 'intermediate', 'advanced']).optional().run(req);
      await body('duration').isNumeric().toInt().isInt({ min: 1 }).run(req);
      await body('prerequisites.*').isString().trim().escape().isLength({ max: 100 }).optional().run(req);
      await body('requirements.*').isString().trim().escape().isLength({ max: 100 }).optional().run(req);
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
      }

    const course = new Course({
      title,
      description,
      level,
      duration,
      prerequisites,
      requirements,
    });

    await course.save();

    res.status(201).json({ message: "Course created successfully", course });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

const GetCourse = async (req, res) => {
 
  const courseId = req.params.id;
console.log("id, ", courseId)
  try {
    const course = await Course.findById(courseId).populate("lessons");

    if (!course) {
      return res.status(404).json({ error: "Course not found" });
    }

    res.json(course);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

const GetAllCourses = async (req, res) => {
  try {
    const courses = await Course.find().populate("lessons");

    res.json(courses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

const DeleteCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);

    if (!course) {
      return res.status(404).json({ error: "Course not found" });
    }

    await course.remove();

    res.json({ message: "Course deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

const getCourseLessons = async (req, res) => {
  try {
    const courseId = req.params.id;
    const course = await Course.findById(courseId).populate("lessons");

    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    res.json({ lessons: course.lessons });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

const AddCourseLesson = async (req, res) => {
  const { courseId, lessonId } = req.body;

  try {
    const course = await Course.findById(courseId);
    const lesson = await Lesson.findById(lessonId);

    if (!course) {
      return res.status(404).json({ error: "Course not found" });
    }

    if (!lesson) {
      return res.status(404).json({ error: "Lesson not found" });
    }

    // Check if the lesson already exists in the course
    const existingLesson = course.lessons.find(
      (l) => l.toString() === lessonId
    );
    if (existingLesson) {
      return res
        .status(400)
        .json({ error: "Lesson already exists in the course" });
    }

    // Add the lesson to the course and save
    course.lessons.push(lesson);
    await course.save();

    return res.status(200).json({ message: "Lesson added to the course" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server error" });
  }
};

module.exports = {
  CreateCourse,
  GetCourse,
  GetAllCourses,
  DeleteCourse,
  getCourseLessons,
  AddCourseLesson,
};
