const Student = require('../models/students');

async function getStudentInfo() {
    const students = await Student.find( { professionId : 9}).lean();
    return students;
}
getStudentInfo();

module.exports = getStudentInfo();