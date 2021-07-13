const subjects = require('../controller/getSubjects');
const students = require('../controller/getStudents');
const ExamSchema = require('../models/exams');

async function sendExamResult() {
    const Subject = await subjects;
    const Student = await students;
    let studentId = [];
    let amountOfCredits = 0;
    let studentCredits = 0;
    let grades = [];
    let mog = 0;
    let params;
    
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

    
    for(let i = 0; i < studentId.length; i++) {

        for(let j = 0; j < Subject.length  ; j++) {
            grades[j] = {
                subjectId : Subject[j]._id,
                grade : grade(),
                inspectionType : Subject[j].inspectionType,
                
            }
            studentCredits += (grades[j].grade * Subject[j].credit / 20);
        }
        
        mog = studentCredits * 20 / amountOfCredits;
    
        params = {
            studentId : studentId[i],
            //mog : mog,
            grades : grades,
        };
        const exam = new ExamSchema(params);
        await exam.save();

        studentCredits = 0;
    }

}
sendExamResult();
