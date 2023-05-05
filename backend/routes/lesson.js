const express = require("express");
const router = express.Router();
const {
    CreateLesson,
    DeleteLesson,
    GetAllLesson
} = require("../controllers/lesson");
const formidable = require("express-formidable");

router.post("/", formidable(), CreateLesson);
// router.put("/", EditProduct)
router.delete("/", DeleteLesson)
router.get("/", GetAllLesson);

module.exports = router;