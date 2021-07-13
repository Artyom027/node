const Students = require('../models/students');
const Exams = require('../models/exams')

const StudentsManager = {
    getStudent: async (params) => {
        const student = await Students.find(params).lean();
        const exams = await Exams.find({ studentId : params._id }).lean();

        return {student, 
        exams};
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