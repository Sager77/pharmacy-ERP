const mongoose = require('mongoose');
const Item = require('../models/Item.module');


//get all items
exports.getItem = async (req, res) => {
  try {
    const items = await Item.find();

    res.status(200).json({ items: items, message: "success" });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
}

//get items by id
exports.getItembyId = async (req, res) => {
  try {
    // Get the ID from params - FIXED: use req.params.id
    const ItemID = req.params.id;


    // Find the item by ID using Mongoose
    const singleItem = await Item.findOne({ itemId: parseInt(ItemID) });

    // Check if item exists
    if (!singleItem) {
      return res.status(404).json({
        success: false,
        message: 'Item not found'
      });
    }

    // Return the item
    res.status(200).json({
      success: true,
      items: singleItem,
      message: "success"
    });

  } catch (error) {
    console.error("Error in getItembyId:", error);
    res.status(500).json({
      success: false,
      message: 'Server error at id',
      error: error.message
    });
  }
}

// Item creation 
exports.createItem = async (req, res) => {
  try {

    const item = new Item(req.body);
    console.log(item);
    await item.save();

    res.status(201).json({
            success: true,
            data: item,
            message: 'Item created successfully'
    });
    

  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: 'Item already exists'
      });
    }

    // Handle validation errors
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({
        success: false,
        message: 'Validation error',
        errors
      });
    }

    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};



// Update an item
exports.updateItem = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    // Check if item exists
    let item = await Item.findOne({ itemId: id });

    console.log(item);
    if (!item) {
      return res.status(404).json({
        success: false,
        message: 'Item not found'
      });
    }

    // Update item with new data
    item = await Item.findOneAndUpdate(
      {itemId: id},
      req.body,
      {
        returnDocument: 'after',          // Return updated document
        runValidators: true, // Run schema validations
        context: 'query'     // Use query context for validators
      }
    );

    res.status(200).json({
      success: true,
      data: item,
      message: 'Item updated successfully'
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({
        success: false,
        message: 'Validation error',
        errors
      });
    }

    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};

// @desc    Delete an item
// @route   DELETE /api/items/:id
// @access  Public
exports.deleteItem = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);

    const item = await Item.findOne({ itemId: id });
    if (!item) {
      return res.status(404).json({
        success: false,
        message: 'Item not found'
      });
    }



    // Hard delete (permanent)
    await Item.findOneAndDelete({ itemId: id });

    res.status(200).json({
      success: true,
      message: 'Item deleted successfully',
      data: null
    });
  } catch (error) {
    // Handle invalid ObjectId
    if (error.name === 'CastError') {
      return res.status(400).json({
        success: false,
        message: 'Invalid item ID format'
      });
    }

    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};