const express = require("express");
const Product = require("../models/product.model.js");
const router = express.Router();
const { getAllProduct, getOneProduct, postProduct, updateProduct, deleteProduct } = require("../controllers/product.controller.js")

router.get("/", getAllProduct);
router.get("/:id", getOneProduct);
router.post("/", postProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);


module.exports = router;