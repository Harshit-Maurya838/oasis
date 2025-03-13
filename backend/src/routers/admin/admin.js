const express = require("express");
const router = express.Router();
const Product = require("../../models/products.js");

router.post("/product", async(req, res) => {
    const formData = req.body.product;
    const newProduct = new Product(formData);
    await newProduct.save();
    res.json({ message: "Product created", newProduct });
});

router.delete("/product/:id", async(req, res) => {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    res.json({ message: "Product deleted", deletedProduct });
});

router.put("/product/:id", async(req, res) => {
    const { id } = req.params;
    const formData = req.body.product;

    const updatedProduct = await Product.findByIdAndUpdate(id, { $set: formData }, { new: true });

    res.json({ message: "Product updated", updatedProduct });
    
});


module.exports = router;