const mongoose = require("mongoose");
const Product = require("../models/products.js");
const Variant = require("../models/variants.js");

// Connect to MongoDB
async function connectDB(){
    try{
        await mongoose.connect("mongodb+srv://44harshmaurya:qSt80WTj07U5m1hF@oasis.1ipcc.mongodb.net/?retryWrites=true&w=majority&appName=Oasis",{useNewUrlParser: true,
            useUnifiedTopology: true,
            tls: true,
            tlsAllowInvalidCertificates: true,});
        console.log("Database Connected");
    }catch(err){
        console.error("Database connection error:", err);
    }
}
connectDB();

// Generate Random Variants
const generateVariants = async () => {
    const variants = [];

    for (let i = 1; i <= 50; i++) { // Generating 50 variants
        const variant = new Variant({
            var_name: `Variant ${i}`,
            var_url: `https://example.com/images/variant${i}.jpg`,
            var_gallery: [
                `https://example.com/images/variant${i}_1.jpg`,
                `https://example.com/images/variant${i}_2.jpg`
            ],
            var_color: ["Red", "Blue", "Green", "Black", "White"][Math.floor(Math.random() * 5)],
            var_Stock: Math.floor(Math.random() * 50) + 1
        });

        await variant.save();
        variants.push(variant._id); // Store the variant ID
    }
    return variants;
};

// Generate Random Products
const generateProducts = async () => {
    const variantIDs = await generateVariants();
    const products = [];

    for (let i = 1; i <= 20; i++) { // Generating 20 products
        products.push({
            name: `Product ${i}`,
            price: (Math.random() * 100).toFixed(2),
            category: `Category ${Math.ceil(Math.random() * 5)}`,
            rating: (Math.random() * 5).toFixed(1),
            discount: Math.floor(Math.random() * 30),
            description: `This is the description for Product ${i}.`,
            tags: ["Best Seller", "Limited Edition", "New Arrival"].slice(0, Math.floor(Math.random() * 3) + 1),
            variants: variantIDs.slice(i * 2, i * 2 + 2) // Assigning 2 random variants per product
        });
    }

    await Product.insertMany(products);
    console.log("20 Products Inserted Successfully!");
};

// Seed Database
const seedDB = async () => {
    try {
        await Product.deleteMany({});
        await Variant.deleteMany({});
        await generateProducts();
    } catch (err) {
        console.log("Error Seeding Database:", err);
    } finally {
        mongoose.connection.close();
    }
};

seedDB();
