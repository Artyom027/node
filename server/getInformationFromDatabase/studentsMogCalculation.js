const ExamsResult = require('../getInformationFromDatabase/studentExamsResult');
const Subjects = require('../getInformationFromDatabase/getSubject');
const Student = require('../getInformationFromDatabase/getStudent');

async function dataConsolidation (params) {

    const exams = await ExamsResult(params);
    const student = await Student(params);
    const subject = await Subjects(student);

}
dataConsolidation();
