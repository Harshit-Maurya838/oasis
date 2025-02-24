const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require('cookie-parser');
const http = require('http');
const socketIo = require('socket.io');
const app = express();
require('dotenv').config();

const ProductsRoutes = require("./routers/products/products.js");
const OrderRoutes = require("./routers/orders/orders.js");
const AuthRoutes = require("./routers/auth/authRoute.js");
const CartRoutes = require("./routers/carts/cart.js")

const port = process.env.PORT || 5050;

//Database Connection
async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Database Connected");
    }catch(err){
        console.error("Database connection error:", err);
    }
}
connectDB();

// Socket.io
const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"]
    }
});

let onlineUsers = new Map();

io.on("connection", (socket) => {
    console.log("A user connected:", socket.id);

    socket.on("register", (userId) => {
        onlineUsers.set(userId, socket.id);
    });

    socket.on("disconnect", () => {
        console.log("User disconnected:", socket.id);
        onlineUsers.forEach((value, key) => {
            if (value === socket.id) {
                onlineUsers.delete(key);
            }
        });
    });
});

// Pass io to routes
app.set("io", io);

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));
app.use(cookieParser());

app.use("/products", ProductsRoutes);
app.use("/cart", CartRoutes);
app.use("/order", OrderRoutes);
app.use("/auth", AuthRoutes);

app.get("*",(req,res)=>{
    res.send("404 Page Not Found");
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})