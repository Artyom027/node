const Students = require('../models/students');

const StudentsManager = {
    getStudent: async (params) => {
        const student = await Students.find(params).lean();

        return student;
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