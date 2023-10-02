const express = require('express');
const { getAllTeacher, createTeacher } = require('../controllers/teacherController');

// Create a Router
const router = express.Router();


// Teacher Routes
router.route('/').get(getAllTeacher).post(createTeacher);



// exports routes
module.exports = router;