const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
const connection = require('../db/DB');
const { Schema } = mongoose;
const { ObjectId } = Schema;

autoIncrement.initialize(connection);

const FacultySchema = new Schema ({
  name :  { type : String},
  deanName : { type : String},
  address : { type : String}
});

FacultySchema.plugin(autoIncrement.plugin, { model: 'faculty', startAt: 1 });

module.exports = connection.model('faculty',FacultySchema);
