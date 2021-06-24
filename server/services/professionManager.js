const Professions = require('../models/professions');

const ProfessionsManager = {
    getProfession: async (params) => {
        const profession = await Professions.findOne(params).lean();
        if (!profession) {
            throw new Error('Faculty with specified name not found.');
        }
        return profession;
    },

    getAllProfessions: async () => {
        const professions = await Professions.find({}).lean();
        return professions;
    },

    createProfession: async (params) => {
        const profession = new Professions(params);
        await profession.save();
        return profession;
    },

    deleteProfession: async (params) => {
        const deletedProfession = await Professions.findOneAndDelete(params).lean();
        if (!deletedProfession) {
            throw new Error('Can not get deleted Faculty.');
        }
        return deletedProfession;
    }
};
module.exports = ProfessionsManager;