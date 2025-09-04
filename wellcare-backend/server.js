const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/wellcare_hospital')
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.error('MongoDB connection error:', err));

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Import and use routes
const authRouter = require('./routes/auth');
const adminAuthRouter = require('./routes/adminAuth'); // <-- இந்த வரியைச் சேர்க்கவும்
const doctorsRouter = require('./routes/doctors');
const appointmentsRouter = require('./routes/appointments');
const patientsRouter = require('./routes/patients');
const departmentsRouter = require('./routes/departments');
const statsRouter = require('./routes/stats');

app.use('/api/auth', authRouter);
app.use('/api/admin/auth', adminAuthRouter); // <-- இந்த வரியைச் சேர்க்கவும்
app.use('/api/doctors', doctorsRouter);
app.use('/api/appointments', appointmentsRouter);
app.use('/api/patients', patientsRouter);
app.use('/api/departments', departmentsRouter);
app.use('/api/stats', statsRouter);

app.get('/', (req, res) => {
  res.send('Wellcare Hospital Backend is running!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});