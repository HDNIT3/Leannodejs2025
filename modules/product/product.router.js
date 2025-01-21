const express = require("express")
const router = express.Router();
const productController = require("./product.controller")

router.get("/",productController.getAllproduct)
router.get("/:id",productController.getProductId)
router.post("/create",productController.CreateProduct)

module.exports = router;

