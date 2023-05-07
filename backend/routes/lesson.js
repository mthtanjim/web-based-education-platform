const express = require("express");
const router = express.Router();
const {
    CreateLesson,
    DeleteLesson,
    GetAllLesson
} = require("../controllers/lesson");
const formidable = require("express-formidable");

// router.post("/", formidable(), CreateLesson);
router.post("/", CreateLesson);
// router.put("/", EditProduct)
router.delete("/:id", DeleteLesson)
router.get("/", GetAllLesson);

module.exports = router;