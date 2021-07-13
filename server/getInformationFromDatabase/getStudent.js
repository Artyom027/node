const Student = require('../models/students')
async function getStudent(params) {
    const student = await Student.find({ params }).lean();
    return student;
}
getStudent();

module.exports = getStudent();