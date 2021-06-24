const FacultiesManager = require('../services/facultyManager');

const FacultiesController = {
    getFaculty : async(req,res) => {
        let response;
        try {
            const result = await FacultiesManager.getFaculty(req.query);
            response = {
                code: 200,
                result
            };
        } catch (error) {
            const message = (error instanceof Error) ? error.message : 'Can not get faculty';
            response = {
                code: 500,
                result: message
            };
        } finally {
            res.status(response.code).send(response.result);
        }
    },
    getAllFaculties : async(req,res) => {
        let response;
        try {
            const result = await FacultiesManager.getAllFaculties(req.query);
            response = {
                code: 200,
                result
            };
        } catch (err) {
            const message = (error instanceof Error) ? error.message : 'Can not get faculties';
            response = {
                code: 500,
                result: message
            };
        } finally {
            res.status(response.code).send(response.result);
        }
    },
    createFaculty : async (req, res) => {
        let response;
        try {
            const result = await FacultiesManager.createFaculty(req.query);
            response = {
                code: 200,
                result
            };
            
        } catch (error) {
            const message = (error instanceof Error) ? error.message : 'Can not create faculty';
            response = {
                code: 500,
                result: message
            };
        } finally {
            res.status(response.code).send(response.result);
        }
    },
    deleteFaculty: async (req, res) => {
        let response, params;
        try {
            const result = await FacultiesManager.deleteFaculty(req.query);
            response = {
                code: 200,
                result
            };
        } catch (error) {
            const message = (error instanceof Error) ? error.message : 'Can not delete faculty';
            response = {
                code: 500,
                result: message
            };
        } finally {
            res.status(response.code).send(response.result);
        }
    }
};
module.exports = FacultiesController;