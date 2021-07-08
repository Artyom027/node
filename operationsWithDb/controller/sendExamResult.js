const subjects = require('../controller/getSubjects');
const students = require('../controller/getStudents');
const Tests = require('../models/exams');

async function sendExamResult() {
    const Subject = await subjects;
    const Student = await students;
    let studentId = [];
    let amountOfCredits = 0;
    let studentCredits = 0;
    let grades = [];
    let mog = 0;

    for(let i = 0; i < Student.length; i++) {
        studentId[i] = Student[i]._id;
    }
    for(let i = 0; i < Subject.length; i++) {
        amountOfCredits += Subject[i].credit;
    }

    function grade() {
        let minGrade = 8;
        let maxGrade = 20;
        minGrade = Math.ceil(minGrade);
        maxGrade = Math.floor(maxGrade + 1);
        let grade = Math.floor(Math.random() * (maxGrade - minGrade) + minGrade);
        return grade;
    }
    let x = 0;
    while(x < studentId.length) {
        x++;
        for(i = 0; i < Subject.length  ; i++) {
            grades[i] = {
                subjectId :  Subject[i]._id,
                grade : grade(),
                inspectionType : Subject[i].inspectionType,
                
            }
            studentCredits += (grades[i].grade * Subject[i].credit / 20);
        }
        
        mog = studentCredits * 20 / amountOfCredits;
    
        let params = {
            studentId : studentId[i],
            mog : mog,
            grades : grades,
        }
        
        const test = new Tests(params);
        await test.save();
        studentCredits = 0;
    }
    
}
sendExamResult();