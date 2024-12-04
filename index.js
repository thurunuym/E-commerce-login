const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const app = express();
const connectDB = require("./db");



connectDB(); // Connect to MongoDB




app.use(cors());
app.use(express.json());

const PORT = process.env.PORT||8080;

// // Define a root route
// app.get('/', (req, res) => {
//   res.send('API is running...');
// });

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));