const express = require("express");
const router = express.Router();
const { CreateProduct, getAllProducts, List } = require("../controllers/products");
const formidable = require("express-formidable");


router.post("/", formidable(), CreateProduct);
router.get("/", getAllProducts)

module.exports = router;
