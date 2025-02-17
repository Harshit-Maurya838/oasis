const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    tags: {
        type: Array,
    },
    category: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    discount: {
        type: Number,
        required: true
    },
    variants: [{
        type: Schema.Types.ObjectId,
        ref: "Variant",
    }],
})



const Product = new mongoose.model("Product", productSchema);

module.exports = Product;