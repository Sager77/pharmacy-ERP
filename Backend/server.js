const express = require('express');
const cors = require('cors');
const app = express();
const connectDB = require('./DBConnect');


require('dotenv').config();



const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware

app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({ extended: true })); https only


// Routes
app.use('/api/items', require('./routes/items.routes'));

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Something went wrong!',
    
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found at server side'
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});