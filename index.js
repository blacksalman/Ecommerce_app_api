const mongoose = require('mongoose')
const express = require('express')
const app = express();
require('dotenv').config()
const userRoute = require('./routes/user')
const authRoute = require('./routes/auth')
const productRoute = require('./routes/product')
const cartRoute = require('./routes/cart')
const orderRoute = require('./routes/order')
const stripeRoute = require('./routes/stripe')
 const cors = require('cors')



mongoose.connect('mongodb://localhost/Ecommerce')
    .then(() => console.log('Mongodb successfully connected...'))
    .catch(err => console.log('Connection could not connectd...', err));


app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
 app.use("/api/checkout", stripeRoute);

app.listen(5000, () => console.log('Connection Successfull'));