const express = require('express');
const router = express.Router();
const Doctor = require('../models/Doctor');
const Appointment = require('../models/Appointment');
const Patient = require('../models/Patient');
const Department = require('../models/Department');
const auth = require('../middleware/auth');

router.get('/', auth, async (req, res) => {
    try {
        const doctorCount = await Doctor.countDocuments();
        const appointmentCount = await Appointment.countDocuments();
        const patientCount = await Patient.countDocuments();
        const departmentCount = await Department.countDocuments();

        res.json({
            doctors: doctorCount,
            appointments: appointmentCount,
            patients: patientCount,
            departments: departmentCount,
        });
    } catch (err) {
        res.status(500).json({ message: 'Server error fetching stats', error: err.message });
    }
});

module.exports = router;