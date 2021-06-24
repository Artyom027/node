const Lecturers = require('../models/lecturers');

const LecturersManager = {
    getLecturer: async (params) => {
        const lecturer = await Lecturers.findOne(params).lean();
        if (!lecturer) {
            throw new Error('Lecturers with specified name not found.');
        }
        return lecturer;
    },

    getAllLecturers: async () => {
        const lecturers = await Lecturers.find({}).lean();
        return lecturers;
    },

    createLecturer: async (params) => {
        const lecturer = new Lecturers(params);
        await lecturer.save();
        return lecturer;
    },

    /*updateLecturer: async (params) => {
        const updatedLecturer = await Lecturers.findOneAndUpdate({ lecturerName: params.lecturerName }.lean());
        if (!updatedLecturer) {
            throw new Error('Can not get updated Lecturer.');
        }
        return updatedLecturer;
    },*/

    deleteProject: async (params) => {
        const deletedLecturer = await Lecturers.findOneAndDelete(params).lean();
        if (!deletedLecturer) {
            throw new Error('Can not get deleted lecturer.');
        }
        return deletedLecturer;
    }
};
module.exports = LecturersManager;