const { Server } = require("socket.io")
const http = require("http")
const express = require("express")
const { redisClient, updateCart, saveCartToDB } = require("./redis");

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        credentials: true,
    }
})

io.on("connection", (socket) => {
    console.log("User connected:", socket.id);
    console.log("Handshake:", socket.handshake);

    const userId = socket.handshake.auth.userId;
    console.log("Received userId:", userId);
    if (!userId) {
        console.log("User not authenticated, disconnecting...");
        socket.disconnect();
        return;
    }

    socket.join(userId.toString());

    // Handle add to cart event
    socket.on("addToCart", async (data) => {
        await updateCart(userId, data, io);
    });

    // Handle remove from cart event
    socket.on("removeFromCart", async (data) => {
        await updateCart(userId, data, io);
    });

    // Periodically save cart to DB if expired
    setInterval(async () => {
        await saveCartToDB(userId);
    }, 60000); // Every 60 seconds

    socket.on("disconnect", () => {
        console.log("User disconnected:", socket.id);
    });
});

module.exports = { io, app, server };
