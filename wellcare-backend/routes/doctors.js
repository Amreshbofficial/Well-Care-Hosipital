const express = require('express');
const router = express.Router();
const Doctor = require('../models/Doctor');
const auth = require('../middleware/auth');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

// Configure multer for file storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = 'uploads/';
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir, { recursive: true }); // Ensure directory is created
    }
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage: storage });

// GET all doctors (public access)
router.get('/', async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.json(doctors);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new doctor (protected route with image upload)
router.post('/', auth, upload.single('image'), async (req, res) => {
  const { name, specialty, profile, timing } = req.body;

  if (!req.file) {
    return res.status(400).json({ message: 'Image is required' });
  }

  const doctor = new Doctor({
    name,
    specialty,
    image: `/uploads/${req.file.filename}`,
    profile,
    timing
  });

  try {
    const newDoctor = await doctor.save();
    res.status(201).json(newDoctor);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT (update) an existing doctor (protected route with image upload)
router.put('/:id', auth, upload.single('image'), async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id);
    if (!doctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }

    const updateData = { ...req.body };

    // If a new image is uploaded, update the image path
    if (req.file) {
      // Optional: Delete the old image file
      if (doctor.image) {
        const oldImagePath = path.join(__dirname, '..', doctor.image);
        if (fs.existsSync(oldImagePath)) {
          fs.unlinkSync(oldImagePath);
        }
      }
      updateData.image = `/uploads/${req.file.filename}`;
    }

    const updatedDoctor = await Doctor.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );

    res.json(updatedDoctor);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE a doctor (protected route)
router.delete('/:id', auth, async (req, res) => {
  try {
    const doctor = await Doctor.findByIdAndDelete(req.params.id);
    if (!doctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }
    // Optional: Delete the image file from the server
    if (doctor.image) {
      const imagePath = path.join(__dirname, '..', doctor.image);
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }
    res.json({ message: 'Doctor deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;