const { createClient } = require("redis");
const Cart = require("../models/cart.js");

// const redisClient = createClient(
//     {
//         url: process.env.REDIS_URL || "redis://localhost:6379",
//     }
// );
// redisClient.on("error", (err) => {
//   console.error("❌ Redis Error:", err.message);
//   if (err.code === "ECONNRESET") {
//     console.warn("⚠️ Redis connection was reset. Consider adding retry logic.");
//   }
// });

// (async () => {
//     try {
//         await redisClient.connect();
//         console.log("Redis connected successfully");
//     } catch (err) {
//         console.error("Redis connection failed:", err);
//     }
// })();

const getRedisClient = async () => {
  const client = createClient({
    url: process.env.REDIS_URL || "redis://localhost:6379",
  });

  client.on("error", (err) => {
    console.error("❌ Redis Error:", err.message);
  });

  await client.connect();
  return client;
};

const CACHE_EXPIRY = 60; // 60 seconds

// Add to cart
const updateCart = async (userId, newItem, io) => {
  const redisClient = await getRedisClient();
  const cartKey = `cart:${userId}`;

  let cart = await redisClient.get(cartKey);
  cart = cart ? JSON.parse(cart) : { user: userId, cartItems: [] };

  const existingItem = cart.cartItems.find(
    (item) =>
      item.product === newItem.product || item.product._id === newItem.product
  );
  if (existingItem) {
    existingItem.quantity += newItem.quantity;
    existingItem.price += newItem.price;
  } else {
    cart.cartItems.push(newItem);
  }

  await redisClient.setEx(cartKey, CACHE_EXPIRY, JSON.stringify(cart));
  await redisClient.disconnect();

  io.to(userId).emit("cartUpdated", cart);
  console.log(`Cart updated for user ${userId}:`, cart);
};

// Remove from cart
const removeFromCart = async (userId, productId, io) => {
  const redisClient = await getRedisClient();
  const cartKey = `cart:${userId}`;

  let cart = await redisClient.get(cartKey);
  if (!cart) {
    await redisClient.disconnect();
    return;
  }

  cart = JSON.parse(cart);
  cart.cartItems = cart.cartItems.filter((item) => item.product !== productId);

  if (cart.cartItems.length === 0) {
    await redisClient.del(cartKey);
  } else {
    await redisClient.setEx(cartKey, CACHE_EXPIRY, JSON.stringify(cart));
  }

  await redisClient.disconnect();
  io.to(userId).emit("cartUpdated", cart);
  console.log(`Removed item from cart for user ${userId}:`, cart);
};

// Save cart to MongoDB
const saveCartToDB = async (userId) => {
  const redisClient = await getRedisClient();
  const cartKey = `cart:${userId}`;

  let cart = await redisClient.get(cartKey);
  await redisClient.disconnect();

  if (cart) {
    cart = JSON.parse(cart);

    if (cart.cartItems.length > 0) {
      await Cart.findOneAndUpdate(
        { user: userId },
        { cartItems: cart.cartItems },
        { upsert: true, new: true }
      );
      console.log(
        "Redis Cart Data Before Saving:",
        JSON.stringify(cart, null, 2)
      );
      console.log(`Cart saved to DB for user ${userId}`);
    }
  }
};

module.exports = { updateCart, removeFromCart, saveCartToDB };
