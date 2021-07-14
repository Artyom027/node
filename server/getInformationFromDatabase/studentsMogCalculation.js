const ExamsResult = require('../getInformationFromDatabase/studentExamsResult');
const Subjects = require('../getInformationFromDatabase/getSubject');
const Student = require('../getInformationFromDatabase/getStudent');

async function dataConsolidation (params) {
    const exams = await ExamsResult(params);
    const student = await Student(params);
    const subjects = await Subjects(student);

    const grades = exams[0].grades;

    let subjectId = [];
    let studentCredits = 0;
    let amountOfCredits = 0;

    for(let i = 0; i < grades.length; i++) {
        subjectId[i] = grades[i].subjectId;
    }

    for (let j = 0; j < grades.length; j++) {
        const creditSize = subjects.find(subject => subject._id === subjectId[j]).credit;
        amountOfCredits += 20 * creditSize;
        studentCredits += grades[j].grade * creditSize;
    }
    return studentCredits * 20 / amountOfCredits;
}

module.exports = dataConsolidation;
