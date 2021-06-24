const express = require('express');
const ProfessionController = require('../controllers/professionControllers');
const apiRouter = express.Router();

module.exports = () => {
    apiRouter.get('/get', ProfessionController.getProfession);
    apiRouter.get('/getAll', ProfessionController.getAllProfessions);
    apiRouter.get('/create', ProfessionController.createProfession);
    apiRouter.get('/delete', ProfessionController.deleteProfession);
    return apiRouter;
};