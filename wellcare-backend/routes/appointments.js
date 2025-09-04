const express = require('express');
const router = express.Router();
const Appointment = require('../models/Appointment');
const auth = require('../middleware/auth');

// GET all appointments (protected)
router.get('/', auth, async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.json(appointments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new appointment (protected)
router.post('/', auth, async (req, res) => {
  const appointment = new Appointment({
    patientName: req.body.patientName,
    doctorName: req.body.doctorName,
    date: req.body.date,
    time: req.body.time,
  });
  try {
    const newAppointment = await appointment.save();
    res.status(201).json(newAppointment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;