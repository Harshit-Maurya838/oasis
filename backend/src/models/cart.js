const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    cartItems: [
        {
            product: {
                type: Schema.Types.ObjectId,
                ref: "Product",
                required: true
            },
            quantity: {
                type: Number,
                required: true
            },
            price: {
                type: Number,
                required: true
            }
        }
    ]
}, { timestamps: true });


const Cart = new mongoose.model("Cart", cartSchema);

module.exports = Cart;