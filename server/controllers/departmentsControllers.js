const DepartmentsManager = require('../services/departmentManager');

const DepartmentsController = {
    getDepartment : async(req,res) => {
        let response;
        try {
            const result = await DepartmentsManager.getDepartment(req.query);
            response = {
                code: 200,
                result
            };
        } catch (error) {
            const message = (error instanceof Error) ? error.message : 'Can not get Department';
            response = {
                code: 500,
                result: message,
                
            };
        } finally {
            res.status(response.code).send(response.result);
        }
    },
    getAllDepartments : async(req,res) => {
        let response;
        try {
            const result = await DepartmentsManager.getAllDepartments(req.query);
            response = {
                code: 200,
                result,
            };
        } catch (err) {
            const message = (error instanceof Error) ? error.message : 'Can not get Departments';
            response = {
                code: 500,
                result: message,
            };
        } finally {
            res.status(response.code).send(response.result);
        }
    },
    createDepartment : async (req, res) => {
        let response;
        try {
            const result = await DepartmentsManager.createDepartment(req.query);
            response = {
                code: 200,
                result,
            };
            
        } catch (error) {
            const message = (error instanceof Error) ? error.message : 'Can not create Department';
            response = {
                code: 500,
                result: message,
            };
        } finally {
            res.status(response.code).send(response.result);
        }
    },
    deleteDepartment: async (req, res) => {
        let response, params;
        try {
            const result = await DepartmentsManager.deleteDepartment(req.query);
            response = {
                code: 200,
                result,
            };
        } catch (error) {
            const message = (error instanceof Error) ? error.message : 'Can not delete Department';
            response = {
                code: 500,
                result: message,
            };
        } finally {
            res.status(response.code).send(response.result);
        }
    }
};
module.exports = DepartmentsController;