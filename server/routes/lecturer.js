const express = require('express');
const LecturersController = require('../controllers/lecturersControllers');
const apiRouter = express.Router();

module.exports = () => {
    apiRouter.get('/get', LecturersController.getLecturer);
    apiRouter.get('/getAll', LecturersController.getAllLecturers);
    apiRouter.get('/create', LecturersController.createLecturer);
    apiRouter.get('/delete',LecturersController.deleteProject);
    return apiRouter;
};