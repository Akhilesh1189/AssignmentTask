const mongoose = require('mongoose');

const ProductDetailsSchema = mongoose.Schema({
    productId: String,
    title: String,
    size: Number,
    price: Number,
    manufacturing_date: { type: Date },
    description: String,
    created_at: { type: Date },
    updated_at: { type: Date, default: Date.now },

}, {
    timestamps: true
});

module.exports = mongoose.model('Product', ProductDetailsSchema);