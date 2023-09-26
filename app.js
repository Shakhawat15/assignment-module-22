const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
require('dotenv').config({
    path: 'config.env'
});

// Security Middleware
const cors = require('cors');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const { rateLimit } = require('express-rate-limit');
const hpp = require('hpp');

// Database Middleware
const mongoose = require('mongoose');

// Set Request Limit per minute for 1 IP
const limiter = rateLimit({
    windowMs: 1 * 60 * 1000,
    max: 60
});

// Security Middleware Implement
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(limiter);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(hpp());
app.use(cookieParser());

// Database Connection Implement
const URL = process.env.MONGO_URI;
mongoose
    .connect(URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        user: process.env.MONGO_USER,
        pass: process.env.MONGO_PASSWORD,
    })
    .then(() => {
        console.log('MongoDB Database Connected');
    })
    .catch((err) => {
        console.error('MongoDB Database Not Connected:', err);
    });

// Undefined Route Implement
app.use('*', (req, res) => {
    res.status(404).json({
        error: true,
        message: 'Page Not Found'
    });
});

module.exports = app;
