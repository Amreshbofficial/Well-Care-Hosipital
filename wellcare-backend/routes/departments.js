const express = require('express');
const router = express.Router();
const Department = require('../models/Department');
const auth = require('../middleware/auth');

// GET all departments
router.get('/', async (req, res) => {
  try {
    const departments = await Department.find();
    res.json(departments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new department (protected)
router.post('/', auth, async (req, res) => {
  const department = new Department({
    name: req.body.name,
    description: req.body.description,
    icon: req.body.icon,
  });
  try {
    const newDepartment = await department.save();
    res.status(201).json(newDepartment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT (update) a department (protected)
router.put('/:id', auth, async (req, res) => {
    try {
      const updatedDepartment = await Department.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedDepartment) return res.status(404).json({ message: 'Department not found' });
      res.json(updatedDepartment);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });

// DELETE a department (protected)
router.delete('/:id', auth, async (req, res) => {
    try {
      const department = await Department.findByIdAndDelete(req.params.id);
      if (!department) return res.status(404).json({ message: 'Department not found' });
      res.json({ message: 'Department deleted' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
});


module.exports = router;