const express = require('express');
const { getAllStudents } = require('../controllers/studentController');

// Create a route
const router = express.Router();


// Students Routes
router.get('/', getAllStudents);


// Router Exports
module.exports = router;