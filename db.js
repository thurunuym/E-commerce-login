const mongoose = require('mongoose');
//const dotenv = require('dotenv');

//dotenv.config(); // Load environment variables

// Connect to MongoDB
const connectDB =  () => {
  try {
     mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (err) {
    console.log(err);
    console.error('MongoDB connection error:', err);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB; // Export the connection function