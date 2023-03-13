const express = require('express');
const cors = require('cors');

const userRouter = require('../routers/user');

const app = express();

app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/user', userRouter);

module.exports = app;
