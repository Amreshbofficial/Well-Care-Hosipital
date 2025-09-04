const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User');

const createAdmin = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/wellcare_hospital');
    console.log('MongoDB connected successfully');

    const hashedPassword = await bcrypt.hash('adminpassword', 10); // Change 'adminpassword' to your desired password

    const adminUser = new User({
      username: 'admin',
      email: 'admin@wellcare.com',
      password: hashedPassword,
    });

    await adminUser.save();
    console.log('Admin user created successfully!');

  } catch (error) {
    console.error('Error creating admin user:', error);
  } finally {
    mongoose.disconnect();
  }
};

createAdmin();