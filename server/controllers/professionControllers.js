const ProfessionsManager = require('../services/professionManager');

const ProfessionsController = {
    getProfession : async(req,res) => {
        let response;
        try {
            const result = await ProfessionsManager.getProfession(req.query);
            response = {
                code: 200,
                result
            };
        } catch (error) {
            const message = (error instanceof Error) ? error.message : 'Can not get Profession';
            response = {
                code: 500,
                result: message,
                
            };
        } finally {
            res.status(response.code).send(response.result);
        }
    },
    getAllProfessions : async(req,res) => {
        let response;
        try {
            const result = await ProfessionsManager.getAllProfessions(req.query);
            response = {
                code: 200,
                result,
            };
        } catch (err) {
            const message = (error instanceof Error) ? error.message : 'Can not get Professions';
            response = {
                code: 500,
                result: message,
            };
        } finally {
            res.status(response.code).send(response.result);
        }
    },
    createProfession : async (req, res) => {
        let response;
        try {
            const result = await ProfessionsManager.createProfession(req.query);
            response = {
                code: 200,
                result,
            };
            
        } catch (error) {
            const message = (error instanceof Error) ? error.message : 'Can not create Profession';
            response = {
                code: 500,
                result: message,
            };
        } finally {
            res.status(response.code).send(response.result);
        }
    },
    deleteProfession: async (req, res) => {
        let response, params;
        try {
            const result = await ProfessionsManager.deleteProfession(req.query);
            response = {
                code: 200,
                result,
            };
        } catch (error) {
            const message = (error instanceof Error) ? error.message : 'Can not delete Profession';
            response = {
                code: 500,
                result: message,
            };
        } finally {
            res.status(response.code).send(response.result);
        }
    }
};
module.exports = ProfessionsController;