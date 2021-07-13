const Exams = require('../models/exams')
async function getStudentExam(params) {
    const exam = await Exams.find({ studentId : params._id}).lean();
    return exam;
}
getStudentExam();

module.exports = getStudentExam();