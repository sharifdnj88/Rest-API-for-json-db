const {readFileSync, writeFileSync} = require('fs');
const path = require('path');

/**
 * @desc get all users data
 * @name GET
 * @access public
 */ 

const getAllUsers = (req, res) => {
    // Get all data from json db
    const uers = JSON.parse(readFileSync(path.join(__dirname, '../db/users.json')));

    res.status(200).json(uers);
}
/**
 * @desc create a new user
 * @name POST
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

// exports Controllers
module.exports = {
    getAllUsers,
    creatUser
}