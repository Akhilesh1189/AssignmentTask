const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    title: String,
    productId: String,
    category: String,
    subcategory: String,
    description: String,
    created_at: { type: Date },
    updated_at: { type: Date, default: Date.now },

}, {
    timestamps: true
});

module.exports = mongoose.model('Product', ProductSchema);