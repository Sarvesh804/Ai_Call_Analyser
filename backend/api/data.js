const express = require('express');
const router = express.Router();
const mongoController = require('../controllers/mongoController'); // Adjust the path as needed

// Define your routes here
router.use('/', mongoController); // Use your mongo.js routes

module.exports = router;
