const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
const connection = require('../db/DB');
const { Schema } = mongoose;
const { ObjectId } = Schema;

autoIncrement.initialize(connection);

const lecturerName = new Schema({
  name :  { type : String},
  age : { type : Number},
  address : { type : String},
  departmentsId : { type : Number },
});

lecturerName.plugin(autoIncrement.plugin, { model: 'lecturer', startAt: 1 });

module.exports = connection.model('lecturer',lecturerName);
