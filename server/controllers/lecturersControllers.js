const LecturersManager = require('../services/lecturersManager');

const LecturersController = {
    getLecturer : async(req,res) => {
        let response;
        try {
            const result = await LecturersManager.getLecturer(req.query);
            response = {
                code: 200,
                result
            };
        } catch (error) {
            const message = (error instanceof Error) ? error.message : 'Can not get project';
            response = {
                code: 500,
                result: message,
                
            };
        } finally {
            res.status(response.code).send(response.result);
        }
    },
    getAllLecturers : async(req,res) => {
        let response;
        try {
            const result = await LecturersManager.getAllLecturers(req.query);
            response = {
                code: 200,
                result,
            };
        } catch (err) {
            const message = (error instanceof Error) ? error.message : 'Can not get projects';
            response = {
                code: 500,
                result: message,
            };
        } finally {
            res.status(response.code).send(response.result);
        }
    },
    createLecturer : async (req, res) => {
        let response;
        try {
            const result = await LecturersManager.createLecturer(req.query);
            response = {
                code: 200,
                result,
            };
            
        } catch (error) {
            const message = (error instanceof Error) ? error.message : 'Can not create project';
            response = {
                code: 500,
                result: message,
            };
        } finally {
            res.status(response.code).send(response.result);
        }
    },
    deleteProject: async (req, res) => {
        let response, params;
        try {
            const result = await LecturersManager.deleteProject(req.query);
            response = {
                code: 200,
                result,
            };
        } catch (error) {
            const message = (error instanceof Error) ? error.message : 'Can not delete project';
            response = {
                code: 500,
                result: message,
            };
        } finally {
            res.status(response.code).send(response.result);
        }
    }
};
module.exports = LecturersController;
