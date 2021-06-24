const Faculties = require('../models/faculties');

const FacultiesManager = {
    getFaculty: async (params) => {
        const faculty = await Faculties.findOne(params).lean();
        if (!faculty) {
            throw new Error('Faculty with specified name not found.');
        }
        return faculty;
    },

    getAllFaculties: async () => {
        const faculties = await Faculties.find({}).lean();
        return faculties;
    },

    createFaculty: async (params) => {
        const faculty = new Faculties(params);
        await faculty.save();
        return faculty;
    },

    deleteFaculty: async (params) => {
        const deletedFaculty = await Faculties.findOneAndDelete(params).lean();
        if (!deletedFaculty) {
            throw new Error('Can not get deleted Faculty.');
        }
        return deletedFaculty;
    }
};
module.exports = FacultiesManager;