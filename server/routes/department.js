const express = require('express');
const DepartmentController = require('../controllers/departmentsControllers');
const apiRouter = express.Router();

module.exports = () => {
    apiRouter.get('/get', DepartmentController.getDepartment);
    apiRouter.get('/getAll', DepartmentController.getAllDepartments);
    apiRouter.get('/create', DepartmentController.createDepartment);
    apiRouter.get('/delete', DepartmentController.deleteDepartment);
    return apiRouter;
};