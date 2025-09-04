const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 5000;

// Middleware for CORS and JSON parsing
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/wellcare_hospital', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

// Serve static files from the 'uploads' directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Import and use routes
const authRouter = require('./routes/auth');
const doctorsRouter = require('./routes/doctors');
const appointmentsRouter = require('./routes/appointments');
const patientsRouter = require('./routes/patients');
const departmentsRouter = require('./routes/departments');
const statsRouter = require('./routes/stats'); // Import stats router

app.use('/api/auth', authRouter);
app.use('/api/doctors', doctorsRouter);
app.use('/api/appointments', appointmentsRouter);
app.use('/api/patients', patientsRouter);
app.use('/api/departments', departmentsRouter);
app.use('/api/stats', statsRouter); // Use stats router

// Basic test route
app.get('/', (req, res) => {
  res.send('Wellcare Hospital Backend is running!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});