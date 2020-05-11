const mongoose = require('mongoose');

const CategorySchema = mongoose.Schema({
    Id: String,
    category: String,
    subcategory: String,
    description: String,
    created_at: { type: Date },
    updated_at: { type: Date, default: Date.now },

}, {
    timestamps: true
});

module.exports = mongoose.model('Product', CategorySchema);