const express = require('express');
const FacultysController = require('../controllers/facultysControllers');
const apiRouter = express.Router();

module.exports = () => {
    apiRouter.get('/get', FacultysController.getFaculty);
    apiRouter.get('/getAll', FacultysController.getAllFacultys);
    apiRouter.get('/create', FacultysController.createFaculty);
    apiRouter.get('/delete', FacultysController.deleteFaculty);
    return apiRouter;
};