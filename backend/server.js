const express = require("express");
const mongoose = require("mongoose");
const app = express();
require('dotenv').config();

const ProductsRoutes = require("./routers/products/products.js");
const AdminRoute = require("./routers/admin/admin.js");

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

app.use("/products", ProductsRoutes);
app.use("/admin", AdminRoute);

app.get("*",(req,res)=>{
    res.send("404 Page Not Found");
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})