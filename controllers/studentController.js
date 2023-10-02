const { readFileSync } = require('fs');
const path = require('path');


/***
 * @desc Get All Student Data
 * @name GET /api/v1/student
 * @access  public
 */

const getAllStudents = (req, res) => {
    // get student data from json db
    const students = JSON.parse(readFileSync(path.join(__dirname, '../db/student.json')));

    res.send('Student Successfully');
}

// Student Controller Exports
module.exports = {
    getAllStudents
}