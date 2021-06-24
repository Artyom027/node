const express = require('express');
const StudentsController = require('../controllers/studentsControllers');
const apiRouter = express.Router();

module.exports = () => {
    apiRouter.get('/get', StudentsController.getStudent);
    apiRouter.get('/getAll', StudentsController.getAllStudents);
    apiRouter.get('/create', StudentsController.createStudent);
    apiRouter.get('/delete', StudentsController.deleteStudent);
    return apiRouter;
};
