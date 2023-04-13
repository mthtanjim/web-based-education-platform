const express = require("express");
const router = express.Router();
const {
  CreateProduct,
  EditProduct,
  getAllProducts,
  DeleteProduct,
  List,
} = require("../controllers/products");
const formidable = require("express-formidable");

router.post("/", formidable(), CreateProduct);
router.put("/", EditProduct)
router.delete("/", DeleteProduct)
router.get("/", getAllProducts);

module.exports = router;