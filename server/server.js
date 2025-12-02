const express = require('express');
const morgan = require('morgan');
const uid = require('uuid');
const mongoose = require('mongoose');
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

//Connect to the MongoDB database
const connectDB = mongoose.connect('mongodb://localhost:27017/trench');
//
connectDB
  .then(() => {
    console.log('connected successfully to mongodb');
  })
  .catch((error) => {
    console.log('an error occured');
  });

const productSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
    },
    productPrice: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const productCollection = mongoose.model('products', productSchema);
// 5. Define routes
app.get('/', function (req, res) {
  console.log('request body:', req.body);
  res.send('sent a request');
});

app.get('/products', async (req, res) => {
  const products = await productCollection.find({});
  res.send(products);
});

app.post('/product', async (req, res) => {
  const productDetails = req.body;
  productCollection.create({
    productName: productDetails.productName,
    productPrice: productDetails.productPrice,
  });

  res.send('product created successfully');
});

// app.post('/login', function (req, res) {
//   console.log('request body:', req.body);
//   console.log('Content type', req.header['content type']);
//   res.send('sent a request');
// });

// app.get('/about', function (req, res) {
//   res.send('hello barry');
// });
// app.use('/api/auth', require('./routes/auth')); // e.g., /api/auth/login

//

// 7. Start the server on PORT (5000 or .env value)
// const PORT = process.env.PORT || 5000;
app.listen(3000, function () {
  console.log('server is up');
});
