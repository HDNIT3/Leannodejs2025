const express = require("express")
const router = express.Router();
const productController = require("./product.controller")

// Get
router.get("/",productController.getAllproduct)
router.get("/product/detail/:id",productController.getProductId)
router.get("/product/create",productController.CreateProduct)
router.get("/apiproduct/detail/:id",productController.getAPIproduct)


// Post
router.post("/product/create",productController.PostProduct)


// Delete
router.delete("/product/detail/:id",productController.deleteproduct)


// Put
router.put("/editproduct/:id",productController.putProduct)

module.exports = router;

