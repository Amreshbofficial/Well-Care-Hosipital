const express = require('express');
const router = express.Router();
const Patient = require('../models/Patient');
const auth = require('../middleware/auth');

// GET all patients (protected)
router.get('/', auth, async (req, res) => {
  try {
    const patients = await Patient.find();
    res.json(patients);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new patient (protected)
router.post('/', auth, async (req, res) => {
  const patient = new Patient({
    name: req.body.name,
    age: req.body.age,
    gender: req.body.gender,
    contact: req.body.contact,
    email: req.body.email,
  });
  try {
    const newPatient = await patient.save();
    res.status(201).json(newPatient);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;