const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
const connection = require('../db/DB');
const { Schema } = mongoose;
const { ObjectId } = Schema;

autoIncrement.initialize(connection);

const DepartmentSchema = new Schema ({
  name :  { type : String, unique: true, required: true },
  headՕfDepartment : { type : String},
  address : { type : String}
});

DepartmentSchema.plugin(autoIncrement.plugin, { model: 'department', startAt: 1 });

module.exports = connection.model('department', DepartmentSchema);

