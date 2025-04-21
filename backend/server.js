const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require('cookie-parser');
require('dotenv').config();
const { io, app, server } =  require("./src/lib/socket.js")

const ProductsRoutes = require("./src/routers/products/products.js");
const OrderRoutes = require("./src/routers/orders/orders.js");
const AuthRoutes = require("./src/routers/auth/authRoute.js");
const CartRoutes = require("./src/routers/carts/cart.js");

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


// Middleware
app.set("io", io);
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors({
    origin: ["http://localhost:5173", "http://192.168.51.219:5173","https://oasis-6gfa.onrender.com"],
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

server.listen(port, "0.0.0.0",()=>{
    console.log(`Server is running on port ${port}`);
})