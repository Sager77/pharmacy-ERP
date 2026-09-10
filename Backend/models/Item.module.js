const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    itemId: {
        type: Number,
        required: [true, 'ID is required'],
        trim: true,
        maxlength: [100, 'Name cannot exceed 100 characters']
    },
    name: {
        type: String,
        required: [true, 'Item name is required'],
        trim: true,
        maxlength: [100, 'Name cannot exceed 100 characters']
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
        trim: true,
        maxlength: [500, 'Description cannot exceed 500 characters']
    },
    category: {
        type: String,
        required: [true, 'Category is required']
    },
    quantity: {
        type: Number,
        required: [true, 'Quantity is required'],
        min: [0, 'Quantity cannot be negative'],
        default: 0
    },
    company: {
        type: String,
        required: [true, 'Company name is required'],
        trim: true,
        maxlength: [100, 'Company name cannot exceed 100 characters']
    },
    price: {
        type: Number,
        required: true, // Make it optional if you don't have it in form
        min: [0, 'Price cannot be negative'],
        default: 0
    },
    expiry: {
        type: Date,
        required: true
    },
    productCode: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});

// Index for better query performance
itemSchema.index({ name: 1, category: 1 });

module.exports = mongoose.model('Item', itemSchema);