const Students = require('../models/students');
const Professions = require('../models/professions');

const StudentsManager = {
    getStudent: async (params) => {
        const student = await Students.find(params).lean();
        const profeccion = await Professions.find({_id : student[0].professionId}).lean();

        const Student = {
            firstName : student[0].firstName,
            lastName : student[0].lastName,
            birthday :student[0].birthday,
            profession : profeccion[0].name,
            address : student[0].address,
            grade : student[0].grade,
        }
        return Student;
    },

    getAllStudents: async () => {
        const students = await Students.find({}).lean();
        return students;
    },

    createStudent: async (params) => {
        const student = new Students(params);
        console.log(student)
        await student.save();
        return student;
    },

    deleteStudent: async (params) => {
        const deletedStudent = await Students.findOneAndDelete(params).lean();
        if (!deletedStudent) {
            throw new Error('Can not get deleted Student.');
        }
        return deletedStudent;
    }
};
module.exports = StudentsManager;