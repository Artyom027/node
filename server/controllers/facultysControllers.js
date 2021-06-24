const FacultysManager = require('../services/facultyManager');

const FacultysController = {
    getFaculty : async(req,res) => {
        let response;
        try {
            const result = await FacultysManager.getFaculty(req.query);
            response = {
                code: 200,
                result
            };
        } catch (error) {
            const message = (error instanceof Error) ? error.message : 'Can not get project';
            response = {
                code: 500,
                result: message
            };
        } finally {
            res.status(response.code).send(response.result);
        }
    },
    getAllFacultys : async(req,res) => {
        let response;
        try {
            const result = await FacultysManager.getAllFacultys(req.query);
            response = {
                code: 200,
                result
            };
        } catch (err) {
            const message = (error instanceof Error) ? error.message : 'Can not get projects';
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
            const result = await FacultysManager.createFaculty(req.query);
            response = {
                code: 200,
                result
            };
            
        } catch (error) {
            const message = (error instanceof Error) ? error.message : 'Can not create project';
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
            const result = await FacultysManager.deleteFaculty(req.query);
            response = {
                code: 200,
                result
            };
        } catch (error) {
            const message = (error instanceof Error) ? error.message : 'Can not delete project';
            response = {
                code: 500,
                result: message
            };
        } finally {
            res.status(response.code).send(response.result);
        }
    }
};
module.exports = FacultysController;