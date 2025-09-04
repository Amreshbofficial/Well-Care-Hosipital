const express = require('express');
const router = express.Router();
const Appointment = require('../models/Appointment');
const auth = require('../middleware/auth');

// GET all appointments (protected)
router.get('/', auth, async (req, res) => {
  try {
    const appointments = await Appointment.find().sort({ date: -1 });
    res.json(appointments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new appointment (user action, protected)
router.post('/', auth, async (req, res) => {
  const { patientName, doctorName, date, time } = req.body;
  try {
    // Add validation
    if (!patientName || !doctorName || !date || !time) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    
    // Check for existing appointments
    const existingAppointment = await Appointment.findOne({ 
      doctorName, 
      date, 
      time 
    });
    
    if (existingAppointment) {
      return res.status(400).json({ 
        message: 'This time slot is already booked' 
      });
    }

    const newAppointment = new Appointment({ 
      patientName, 
      doctorName, 
      date, 
      time 
    });
    await newAppointment.save();
    res.status(201).json(newAppointment);
  } catch (err) {
    res.status(400).json({ 
      message: 'Error booking appointment', 
      error: err.message 
    });
  }
});

module.exports = router;