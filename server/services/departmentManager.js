const Departments = require('../models/departments');

const DepartmentManager = {
    getDepartment : async (params) => {
        const department = await Departments.findOne(params).lean();
        if (!department) {
            throw new Error('Department with specified name not found.');
        }
        return department;
    },

    getAllDepartments : async () => {
        const departments = await Departments.find({}).lean();
        return departments;
    },

    createDepartment : async (params) => {
        const department = new Departments(params);
        await department.save();
        return department;
    },

    deleteDepartment : async (params) => {
        const deletedDepartment = await Departments.findOneAndDelete(params).lean();
        if (!deletedDepartment) {
            throw new Error('Can not get deleted Department.');
        }
        return deletedDepartment;
    }
};
module.exports = DepartmentManager;