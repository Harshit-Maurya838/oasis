const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require('cookie-parser');
const app = express();
require('dotenv').config();

const ProductsRoutes = require("./routers/products/products.js");
const OrderRoutes = require("./routers/orders/orders.js");
const AuthRoutes = require("./routers/auth/authRoute.js");

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
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));
app.use(cookieParser());

app.use("/products", ProductsRoutes);
app.use("/order", OrderRoutes);
app.use("/auth", AuthRoutes);

app.get("*",(req,res)=>{
    res.send("404 Page Not Found");
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})