const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// 4. Enable middleware
app.use(cors()); // Allows frontend (Next.js) to make requests
app.use(express.json()); // Parses incoming JSON data from frontend

// 5. Define routes
app.use('/api/auth', require('./routes/auth')); // e.g., /api/auth/login

// 6. Connect to the MongoDB database
const connectDB = require('./config/db');
connectDB();

// 7. Start the server on PORT (5000 or .env value)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
