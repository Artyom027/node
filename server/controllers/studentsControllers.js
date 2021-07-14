//const { query } = require('express');
const StudentsManager = require('../services/studentsManager');
const StudentMog = require('../getInformationFromDatabase/studentsMogCalculation');

const StudentsController = {
    getStudent : async(req,res) => {
        let response;
        try {
            const result = {};
            result.student = await StudentsManager.getStudent(req.query);
            result.mog = await StudentMog(req.query);
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
            req.query.birthday = JSON.parse(req.query.birthday);
            const result = await StudentsManager.createStudent(req.query);
            
            response = {
                code: 200,
                result,
            };
            
        } catch (error) {
            console.log(error)
            const message = (error instanceof Error) ? error.message : 'Can not create student';
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