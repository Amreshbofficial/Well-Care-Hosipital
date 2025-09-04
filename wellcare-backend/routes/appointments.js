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
    const newAppointment = new Appointment({ patientName, doctorName, date, time });
    await newAppointment.save();
    res.status(201).json(newAppointment);
  } catch (err) {
    res.status(400).json({ message: 'Error booking appointment', error: err.message });
  }
});

// PUT to update an appointment status (admin action, protected)
router.put('/:id', auth, async (req, res) => {
    try {
      const { status } = req.body;
      const appointment = await Appointment.findByIdAndUpdate(req.params.id, { status }, { new: true });
      if (!appointment) return res.status(404).json({ message: 'Appointment not found' });
      res.json(appointment);
    } catch (err) {
      res.status(400).json({ message: 'Error updating status', error: err.message });
    }
});

// DELETE an appointment (admin action, protected)
router.delete('/:id', auth, async (req, res) => {
    try {
      const appointment = await Appointment.findByIdAndDelete(req.params.id);
      if (!appointment) return res.status(404).json({ message: 'Appointment not found' });
      res.json({ message: 'Appointment deleted successfully' });
    } catch (err) {
      res.status(500).json({ message: 'Server error', error: err.message });
    }
});

module.exports = router;