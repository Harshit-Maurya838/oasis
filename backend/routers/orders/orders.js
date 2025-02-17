const express = require("express");
const Order = require("../../models/orders");
const Product = require("../../models/products");
const authMiddleware = require("../../middlewares/authMiddleware");
const router = express.Router()

router.post("/",authMiddleware , async (req, res) => {
    try {
        const order = req.body.order;
        order.user = req.user.userId;
        const newOrder = await Order(order);
        const saveOrder = await newOrder.save();
        newOrder.save()
            .then(() => res.status(200).json({ message: "Order added", saveOrder }))
            .catch(err => res.status(400).json("Error: " + err));
    } catch (err) {
        console.error("Error creating an order: ", err);
        res.status(500).json({ message: "Failed to create order" });
    }
})

router.get('/email/:email', authMiddleware , async (req, res) => {
    try {
        const { email } = req.params;
        const userId = req.user.userId;
        const orders = await Order.find({ email, user: userId }).sort({ createdAt: -1 }).populate('productIds');
        
        if (!orders) {
            return res.status(404).json({ message: "Order not found" });
        }
        res.status(200).json(orders);
    } catch (err) {
        console.error("Error getting orders by email: ", err);
        res.status(500).json({ message: "Failed to get orders by email" });
    }
})




module.exports = router