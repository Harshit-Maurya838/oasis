const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require('cookie-parser');
const http = require('http');
require('dotenv').config();

const ProductsRoutes = require("./routers/products/products.js");
const OrderRoutes = require("./routers/orders/orders.js");
const AuthRoutes = require("./routers/auth/authRoute.js");
const CartRoutes = require("./routers/carts/cart.js");
const setupSocket = require("./src/config/socket.js");

const port = process.env.PORT || 5050;

const app = express();
const server = http.createServer(app);
const io = setupSocket(server); 

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

server.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})