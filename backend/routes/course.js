const express = require("express");
const router = express.Router();
const {
    CreateCourse,
    GetCourse,
    GetAllCourses,
    DeleteCourse,
    getCourseLessons,
    AddCourseLesson,
} = require("../controllers/course");
const formidable = require("express-formidable");

// router.post("/", formidable(), CreateLesson);
router.post("/", CreateCourse);
// router.put("/", EditProduct)
router.delete("/:id", DeleteCourse)
router.get("/:id", GetCourse);
router.get("/", GetAllCourses);
router.get("/lesson", getCourseLessons);
router.post("/lessons", AddCourseLesson);

module.exports = router;