const express = require('express');
const { getAllTeacher, createTeacher, getSingleTeacher, deleteTeacher, updateTeacher } = require('../controllers/teacherController');

// Create a Router
const router = express.Router();


// Teacher Routes
router.route('/').get(getAllTeacher).post(createTeacher);
router.route('/:id').get(getSingleTeacher).delete(deleteTeacher).put(updateTeacher).patch(updateTeacher);



// exports routes
module.exports = router;