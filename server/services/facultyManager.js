const Projects = require('../models/faculties');

const FacultysManager = {
    getFaculty: async (params) => {
        const project = await Projects.findOne(params).lean();
        if (!project) {
            throw new Error('Faculty with specified name not found.');
        }
        return project;
    },

    getAllFacultys: async () => {
        const projects = await Projects.find({}).lean();
        return projects;
    },

    createFaculty: async (params) => {
        const project = new Projects(params);
        await project.save();
        return project;
    },

    deleteFaculty: async (params) => {
        const deletedProject = await Projects.findOneAndDelete(params).lean();
        if (!deletedProject) {
            throw new Error('Can not get deleted Faculty.');
        }
        return deletedProject;
    }
};
module.exports = FacultysManager;