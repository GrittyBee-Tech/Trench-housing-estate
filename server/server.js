const express = require('express');
const morgan = require('morgan');
const uid = require('uuid');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const dotenv = require('dotenv');

// dotenv.config();

const app = express();
// 4. Enable middleware
// app.use(cors()); // Allows frontend (Next.js) to make requests
app.use(express.json()); // Parses incoming JSON data from frontend
app.use(express.urlencoded({ extended: false })); //send file

app.use(morgan('dev'));

const products = [];

// 5. Define routes
app.get('/', function (req, res) {
  console.log('request body:', req.body);
  res.send('sent a request');
});

app.get('/products', function (req, res) {
  console.log(products);
  res.send(products);
});

app.post('/product', function (req, res) {
  const productDetails = req.body;
  const id = uid.v4;

  products.push({
    id,
    name: productDetails.name,
    price: productDetails.price,
  });

  res.send('product added successfully');
});

app.post('/login', function (req, res) {
  console.log('request body:', req.body);
  console.log('Content type', req.header['content type']);
  res.send('sent a request');
});

app.get('/about', function (req, res) {
  res.send('hello barry');
});
// app.use('/api/auth', require('./routes/auth')); // e.g., /api/auth/login

// 6. Connect to the MongoDB database
// const connectDB = require('./config/db');
// connectDB();

// 7. Start the server on PORT (5000 or .env value)
// const PORT = process.env.PORT || 5000;
app.listen(3000, function () {
  console.log('server is up');
});
