const express = require("express");
const authMiddleware = require("../../middlewares/authMiddleware");
const { redisClient, saveCartToDB } = require("../../lib/redis.js");
const Cart = require("../../models/cart.js");
const Variants = require("../../models/variants.js")

const router = express.Router();


// Get cart (from Redis first, then DB)

router.get("/", authMiddleware, async (req, res) => {
    try {
        const userId = req.user.userId;
        const cartKey = `cart:${userId}`;

        let cart = await redisClient.get(cartKey);

        if (!cart) {
            console.log("Cart not in Redis, fetching from DB...");
            cart = await Cart.findOne({ user: userId }).populate("cartItems.product").populate({path: "cartItems.product", populate: { path: "variants" }});
            if (!cart) cart = { cartItems: [] };

            // Cache the cart in Redis for future use
            await redisClient.setEx(cartKey, 60, JSON.stringify(cart));
        } else {
            cart = JSON.parse(cart);
        }

        return res.status(200).json(cart);
    } catch (error) {
        console.error("Error fetching cart:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
});


//  Force save cart from Redis to MongoDB (if needed)

router.post("/sync", authMiddleware, async (req, res) => {
    try {
        const userId = req.user.userId;
        await saveCartToDB(userId);
        return res.status(200).json({ message: "Cart saved to DB" });
    } catch (error) {
        console.error("Error syncing cart:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
});

module.exports = router;
