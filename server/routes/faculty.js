const express = require('express');
const FacultiesController = require('../controllers/facultiesControllers');
const apiRouter = express.Router();

module.exports = () => {
    apiRouter.get('/get', FacultiesController.getFaculty);
    apiRouter.get('/getAll', FacultiesController.getAllFaculties);
    apiRouter.get('/create', FacultiesController.createFaculty);
    apiRouter.get('/delete', FacultiesController.deleteFaculty);
    return apiRouter;
};