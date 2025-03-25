const express = require("express");
const Product = require("../../models/products.js");
const Variant = require('../../models/variants.js');
const router = express.Router();


router.get("/",async(req,res)=>{
    try{
        const { page, limit } = req.query;
        const pageNumber= parseInt(page) || 1;
        const limitNumber = parseInt(limit) || 12;

        const products = await Product.find().populate("variants")
        .sort({createdAt: -1})
        .skip((page - 1)*limit)
        .limit(limit);
        res.json({suc:true,data:products});
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
});


router.get("/:id",async(req,res)=>{
    try{
        const { id } = req.params;
        const product = await Product.findById(id).populate("variants");
        res.json({suc: true, data: product})
    }catch (error)  {
        res.status(500).json({message: "Server error", error });
    }
});

module.exports = router;