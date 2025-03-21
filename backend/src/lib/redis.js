const { createClient } = require("redis");
const Cart = require("../models/cart.js");

const redisClient = createClient();

// param in createClient is an object with the following properties
// {
//     url: process.env.REDIS_URL || "redis://localhost:6379",
//     socket: {
//         tls: process.env.NODE_ENV === "production", // Enable TLS for cloud Redis
//     },
// }

// redisClient.on("error", (err) => console.error("Redis Error:", err));

// (async () => {
//     try {
//         await redisClient.connect();
//         console.log("Redis connected successfully");
//     } catch (err) {
//         console.error("Redis connection failed:", err);
//     }
// })();

redisClient.connect();

const CACHE_EXPIRY = 60; // 60 seconds

// Add to cart
const updateCart = async (userId, newItem, io) => {
    const cartKey = `cart:${userId}`;
    let cart = await redisClient.get(cartKey);
    cart = cart ? JSON.parse(cart) : { user: userId, cartItems: [] };

    // Find existing item
    const existingItem = cart.cartItems.find(item => item.product === newItem.product);
    if (existingItem) {
        existingItem.quantity += newItem.quantity;
        existingItem.price += newItem.price;
    } else {
        cart.cartItems.push(newItem);
    }

    await redisClient.setEx(cartKey, CACHE_EXPIRY, JSON.stringify(cart));

    // Emit update
    io.to(userId).emit("cartUpdated", cart);
    console.log(`Cart updated for user ${userId}:`, cart);
};

// Remove from cart
const removeFromCart = async (userId, productId, io) => {
    const cartKey = `cart:${userId}`;
    let cart = await redisClient.get(cartKey);
    if (!cart) return;

    cart = JSON.parse(cart);

    // Remove the product
    cart.cartItems = cart.cartItems.filter(item => item.product !== productId);

    if (cart.cartItems.length === 0) {
        await redisClient.del(cartKey);
    } else {
        await redisClient.setEx(cartKey, CACHE_EXPIRY, JSON.stringify(cart));
    }

    // Emit update
    io.to(userId).emit("cartUpdated", cart);
    console.log(`Removed item from cart for user ${userId}:`, cart);
};

// Save cart to MongoDB
const saveCartToDB = async (userId) => {
    const cartKey = `cart:${userId}`;
    let cart = await redisClient.get(cartKey);

    if (cart) {
        console.log(cart)
        cart = JSON.parse(cart);

        if (cart.cartItems.length > 0) {
            await Cart.findOneAndUpdate(
                { user: userId },
                { cartItems: cart.cartItems },
                { upsert: true, new: true }
            );

            console.log(`Cart saved to DB for user ${userId}`);
        }

        await redisClient.del(cartKey); // Remove from Redis after saving
    }
};

module.exports = { redisClient, updateCart, removeFromCart, saveCartToDB };
