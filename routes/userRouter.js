const express = require('express');
const { getAllUsers, creatUser, getSingleUser, deleteUser, updateUser } = require('../controllers/userController');

// create a router
const router = express.Router();




// users routes
router.route('/').get(getAllUsers).post(creatUser);
router.route('/:id').get(getSingleUser).delete(deleteUser).put(updateUser).patch(updateUser);


// router exports
module.exports = router