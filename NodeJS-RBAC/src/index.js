const express = require('express');
const dotenv = require("dotenv").config();
const dbConnect = require('./config/dbConnect');
const authRoute = require('./routes/authRoute');
const userRoute = require('./routes/userRoute');

dbConnect();
const app = express();

//middleware
app.use(express.json());

//Routes
app.use('/api/auth', authRoute);
app.use('/api/user', userRoute);

//Start the server

const PORT = process.env.PORT || 7002;

app.listen(PORT, () => {
  console.log(`server is ready and running at ${PORT}`);
});
