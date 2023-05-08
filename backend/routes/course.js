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
router.get("/getlessonbycourse", getCourseLessons);
router.post("/addlessonincourse", AddCourseLesson);

module.exports = router;