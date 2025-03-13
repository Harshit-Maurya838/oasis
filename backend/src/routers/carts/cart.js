const express = require("express");
const authMiddleware = require("../../middlewares/authMiddleware");
const Cart = require("../../models/cart.js");
const Product = require("../../models/products");
const router = express.Router();

router.post("/add", authMiddleware, async (req, res) => {
    try {
        const userId = req.user.userId;
        const { productId, quantity = 1 } = req.body;

        let cart = await Cart.findOne({ user: userId }).populate("cartItems.product");
        if (!cart) {
            cart = new Cart({
                user: userId,
                cartItems: [{ product: productId, quantity, price: 0 }],
            });
        } else {
            const itemIndex = cart.cartItems.findIndex(item => item.product._id.toString() === productId);
            if (itemIndex > -1) {
                cart.cartItems[itemIndex].quantity = quantity;
            } else {
                cart.cartItems.push({ product: productId, quantity, price: 0 });
            }
        }
        await cart.save();

        // Emit event only to the user who updated their cart
        req.app.get("io").to(userId.toString()).emit("cartUpdated", cart);

        return res.status(200).json({ message: "Cart updated", cart });
    } catch (error) {
        console.error("Error adding to cart:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
});

router.delete("/remove", authMiddleware, async (req, res) => {
    try {
        const userId = req.user.userId;
        const { productId } = req.body;

        let cart = await Cart.findOne({ user: userId }).populate("cartItems.product");
        if (!cart) {
            return res.status(404).json({ message: "Cart not found" });
        }

        // Remove the item from cartItems
        cart.cartItems = cart.cartItems.filter(item => item.product._id.toString() !== productId);
        await cart.save();

        // Emit event only to the user who updated their cart
        req.app.get("io").to(userId.toString()).emit("cartUpdated", cart);

        return res.status(200).json({ message: "Item removed from cart", cart });
    } catch (error) {
        console.error("Error removing item from cart:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
});

router.get("/", authMiddleware, async (req, res) => {
    try {
        const userId = req.user.userId;
        const cart = await Cart.findOne({ user: userId }).populate("cartItems.product");
        return res.status(200).json(cart || { cartItems: [] });
    } catch (error) {
        console.error("Error fetching cart:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
});

module.exports = router;
