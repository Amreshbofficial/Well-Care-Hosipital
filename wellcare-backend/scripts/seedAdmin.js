require('dotenv').config({ path: '../.env' });
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Admin = require('../models/Admin');

const seedAdmin = async () => {
  try {
    const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/wellcare_hospital';
    await mongoose.connect(mongoUri);
    console.log('MongoDB connected successfully');

    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ email: 'admin@wellcare.com' });
    if (existingAdmin) {
      console.log('Admin user already exists!');
      return;
    }

    const hashedPassword = await bcrypt.hash('adminpassword', 10);

    const adminUser = new Admin({
      username: 'admin',
      email: 'admin@wellcare.com',
      password: hashedPassword,
    });

    await adminUser.save();
    console.log('Admin user created successfully!');
    console.log('Email: admin@wellcare.com');
    console.log('Password: adminpassword');

  } catch (error) {
    console.error('Error creating admin user:', error);
  } finally {
    mongoose.disconnect();
  }
};

seedAdmin();