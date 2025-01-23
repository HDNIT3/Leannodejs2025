const express = require("express")
const router = express.Router();
const productController = require("./product.controller")

router.get("/",productController.getAllproduct)
router.get("/product/detail/:id",productController.getProductId)
router.get("/product/create",productController.CreateProduct)
router.post("/product/create",productController.PostProduct)
router.delete("/product/detail/:id",productController.deleteproduct)

module.exports = router;

