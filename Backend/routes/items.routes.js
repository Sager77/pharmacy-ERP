const router = require('express').Router();
const {
  createItem,
  updateItem,
  deleteItem,
  getItem,
  getItembyId
} = require('../controllers/item.controller');

// Routes
router.post('/', createItem);       // POST /api/items
router.get('/', getItem);           // Get/api/items
router.get('/:id', getItembyId)       // Get/api/items
router.put('/update/:id', updateItem);     // PUT /api/items/:id
router.delete('/delete/:id', deleteItem);  // DELETE /api/items/:id

module.exports = router;