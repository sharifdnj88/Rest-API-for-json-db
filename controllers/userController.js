const {readFileSync, writeFileSync} = require('fs');
const path = require('path');

/**
 * @desc get all users data
 * @name GET /api/v1/user
 * @access public
 */ 

const getAllUsers = (req, res) => {
    // Get all data from json db
    const uers = JSON.parse(readFileSync(path.join(__dirname, '../db/users.json')));

    res.status(200).json(uers);
}
/**
 * @desc create a new user
 * @name POST /api/v1/user
 * @access public
 */ 

const creatUser = (req, res) => {
    // Get all data from json db
    const users = JSON.parse(readFileSync(path.join(__dirname, '../db/users.json')));

    // get body data
    const { name, skill } = req.body;

    if( !name || !skill ){
        res.status(400).json({
            message : "All fields are require"
        });
    }else{
        users.push({
            id  : Math.floor(Math.random() * 100000000).toString(),
            name : name,
            skill : skill
        });
        writeFileSync(path.join(__dirname, '../db/users.json'), JSON.stringify(users));
        res.status(401).json({
            "message" : "User create successfully"
        });
    }


}
/**
 * @desc Get Single User Data
 * @name GET /api/v1/user/:id
 * @access public
 */ 

const getSingleUser = (req, res) => {
    // Get all data from json db
    const users = JSON.parse(readFileSync(path.join(__dirname, '../db/users.json')));

    const singleUser = users.find(data => data.id == req.params.id);

    if (singleUser) {
        res.status(200).json(singleUser);
    }else{
        res.status(404).json({
            "message"   : "Single user data not"
        });
    }


}
/**
 * @desc Delete User Data
 * @name DELETE /api/v1/user/:id
 * @access public
 */ 

const deleteUser = (req, res) => {
    // Get all data from json db
    const users = JSON.parse(readFileSync(path.join(__dirname, '../db/users.json')));
    
    if(users.some( data => data.id == req.params.id )) {
        const data = users.filter(data => data.id != req.params.id);
        writeFileSync(path.join(__dirname, '../db/users.json'), JSON.stringify(data));
        res.status(200).json({
            "message"   : "User data delete successfully"
        });
    }else{
        res.status(404).json({
            "message"   : "Delete user data not found"
        });
    }


}
/**
 * @desc Update User Data
 * @name PUT/PATCH /api/v1/user/:id
 * @access public
 */ 

const updateUser = (req, res) => {
    // Get all data from json db
    const users = JSON.parse(readFileSync(path.join(__dirname, '../db/users.json')));
    
    if(users.some( data => data.id == req.params.id )) {
        users[users.findIndex( data => data.id == req.params.id )] = {
            ...users[users.findIndex( data => data.id == req.params.id )],
            ...req.body
        } 

        writeFileSync(path.join(__dirname, '../db/users.json'), JSON.stringify(users));
        
        res.status(200).json({
            "message"   : "User data Update Successfully"
        });
        

    }else{
        res.status(404).json({
            "message"   : "User data not found"
        });
    }


}

// exports Controllers
module.exports = {
    getAllUsers,
    creatUser,
    getSingleUser,
    deleteUser,
    updateUser
}