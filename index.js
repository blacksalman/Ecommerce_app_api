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
const BASE_URL = process.env.BASE_URL;

const PORT = process.env.PORT || 5000;



mongoose.connect(`${BASE_URL}`)
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

app.listen(PORT, (e) => console.log(`server is up and running to port: ${PORT}`));