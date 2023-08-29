const { Schema, model } = require('mongoose')

const OrderSchema = new Schema({
    items: {
        type: Array,
        required: true
    },
    totalBill: {
        type: Number,
        required: true
    },
    customerName: {
        type: String,
        required: true,
    },
    customerEmail: {
        type: String,
        required: true,
    },
    customerContact: {
        type: String,
        required: true,
    },
    customerAddress: {
        type: String,
        required: true,
    },
    orderTime: {
        type: Date,
        default: Date.now,
    },
});



const Orders = model('order', OrderSchema)
module.exports = Orders