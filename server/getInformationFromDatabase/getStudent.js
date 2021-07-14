const Student = require('../models/students')
async function getStudent(params) {
    const student = await Student.find({_id : params._id }).lean();
    return student;
}

module.exports = getStudent;