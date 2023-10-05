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

/**
 * @desc Get Single Teacher Data
 * @name GET /api/v1/teacher/:id
 * @access public
 */ 

const getSingleTeacher = (req, res) => {
    // Get all data from json db
    const teachers = JSON.parse(readFileSync(path.join(__dirname, '../db/teacher.json')));

    const singleTeacher = teachers.find(data => data.id == req.params.id);

    if (singleTeacher) {
        res.status(200).json(singleTeacher);
    }else{
        res.status(404).json({
            "message"   : "Single user data not"
        });
    }


}

/**
 * @desc Delete Teacher Data
 * @name DELETE /api/v1/teacher/:id
 * @access public
 */ 

const deleteTeacher = (req, res) => {
    // Get all data from json db
    const teachers = JSON.parse(readFileSync(path.join(__dirname, '../db/teacher.json')));
    
    if(teachers.some( data => data.id == req.params.id )) {
        const data = teachers.filter(data => data.id != req.params.id);
        writeFileSync(path.join(__dirname, '../db/teacher.json'), JSON.stringify(data));
        res.status(200).json({
            "message"   : "Teacher data delete successfully"
        });
    }else{
        res.status(404).json({
            "message"   : "Delete Teacher data not found"
        });
    }


}

/**
 * @desc Update Teacher Data
 * @name PUT/PATCH /api/v1/teacher/:id
 * @access public
 */ 

const updateTeacher = (req, res) => {
    // Get all data from json db
    const teachers = JSON.parse(readFileSync(path.join(__dirname, '../db/teacher.json')));
    
    if(teachers.some( data => data.id == req.params.id )) {
        teachers[teachers.findIndex( data => data.id == req.params.id )] = {
            ...teachers[teachers.findIndex( data => data.id == req.params.id )],
            ...req.body
        } 

        writeFileSync(path.join(__dirname, '../db/teacher.json'), JSON.stringify(teachers));
        
        res.status(200).json({
            "message"   : "Teacher data Update Successfully"
        });
        

    }else{
        res.status(404).json({
            "message"   : "Teacher data not found"
        });
    }


}

// Teacher Controller Exports
module.exports = {
    getAllTeacher,
    createTeacher,
    getSingleTeacher,
    deleteTeacher,
    updateTeacher
}