const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    name: {
        type: Object,
        required: true
    },
    email: {
        type: Object,
        required: true
    },
    address: {
        city: {
            type: String,
            required: true,
        },
        country: String,
        state: String,
        zipcode: String,
    },
    phone: {
        type: Number,
        required: true
    },
    productIds:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            required: true,
        }
    ],
},{
    timestamps: true,
});

const Order = new mongoose.model('Order', orderSchema);

module.exports = Order;