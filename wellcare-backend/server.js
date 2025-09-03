const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 5000;

// Middleware for CORS and JSON parsing
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/wellcare_hospital')
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

// Import and use routes
const authRouter = require('./routes/auth');
app.use('/api/auth', authRouter);

const doctorsRouter = require('./routes/doctors');
app.use('/api/doctors', doctorsRouter);

// Basic test route
app.get('/', (req, res) => {
  res.send('Wellcare Hospital Backend is running!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// In server.js, after the existing middleware
app.use('/uploads', express.static('uploads'));