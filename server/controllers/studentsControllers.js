const StudentsManager = require('../services/studentsManager');

const StudentsController = {
    getStudent : async(req,res) => {
        let response;
        try {
            const result = await StudentsManager.getStudent(req.query);
            response = {
                code: 200,
                result,
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
    getAllStudents : async(req,res) => {
        let response;
        try {
            const result = await StudentsManager.getAllStudents(req.query);
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
    createStudent : async (req, res) => {
        let response;
        try {
            const result = await StudentsManager.createStudent(req.query);
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
    deleteStudent: async (req, res) => {
        let response, params;
        try {
            const result = await StudentsManager.deleteStudent(req.query);
            response = {
                code: 200,
                result,
            };
        } catch (error) {
            const message = (error instanceof Error) ? error.message : 'Can not delete Student';
            response = {
                code: 500,
                result: message,
            };
        } finally {
            res.status(response.code).send(response.result);
        }
    }
};
module.exports = StudentsController;