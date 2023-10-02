const { readFileSync, writeFileSync} = require('fs');
const path = require('path');

/**
* @desc Get All Teacher Data
* @name  GET /api/v1/teacher
* @access public
*/

const getAllTeacher = (req, res) => {
    // get Teacher data from json db
    const teachers = JSON.parse(readFileSync(path.join(__dirname, '../db/teacher.json')));

    res.status(200).json(teachers);
}
/**
* @desc Get All Teacher Data
* @name  GET /api/v1/teacher
* @access public
*/

const createTeacher = (req, res) => {
    // get Teacher data from json db
    const teachers = JSON.parse(readFileSync(path.join(__dirname, '../db/teacher.json')));

    // get body data
    const { name, age, cell } = req.body;

    if( !name || !age || !cell ){
        res.status(400).json({
            message : "All fields are require"
        });
    }else{
        teachers.push({
            id  : Math.floor(Math.random() * 100000000).toString(),
            name : name,
            age : age,
            cell : cell
        });
        writeFileSync(path.join(__dirname, '../db/teacher.json'), JSON.stringify(teachers));
        res.status(401).json({
            "message" : "Teacher create successfully"
        });
    }
}

// Teacher Controller Exports
module.exports = {
    getAllTeacher,
    createTeacher
}