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

const activeIntervals = new Map();

io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    const userId = socket.handshake.auth.userId;
    if (!userId) {
        console.log("User not authenticated, disconnecting...");
        socket.disconnect();
        return;
    }

    socket.join(userId.toString());

    if (!activeIntervals.has(userId)) {
        const intervalId = setInterval(async () => {
            await saveCartToDB(userId);
        }, 60000); // Run every 60 sec

        activeIntervals.set(userId, intervalId);
    }
    
    // add to cart
    socket.on("addToCart", async (data) => {
        await updateCart(userId, data, io);
    });

    // remove from cart
    socket.on("removeFromCart", async (data) => {
        await updateCart(userId, data, io);
    });

    socket.on("disconnect", () => {
        console.log("User disconnected:", socket.id);

        // Clear interval when the user disconnects
        if (activeIntervals.has(userId)) {
            clearInterval(activeIntervals.get(userId));
            activeIntervals.delete(userId);
        }

    });
});

module.exports = { io, app, server };
