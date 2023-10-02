const express = require('express');
const { getAllUsers, creatUser } = require('../controllers/userController');

// create a router
const router = express.Router();




// users routes
router.get('/', getAllUsers);
router.post('/', creatUser);


// router exports
module.exports = router