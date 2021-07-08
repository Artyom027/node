const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
const connection = require('../db/DB');
const { Schema } = mongoose;
const { ObjectId } = Schema;

autoIncrement.initialize(connection);

const informationAboutSubject = new Schema ({
  name : { type : String},
  professionId : [{type : Number}],
  departmentsId : { type : Number},
  credit : {type : Number},
  inspectionType : {type : String},
});

informationAboutSubject.plugin(autoIncrement.plugin, { model: 'subjects', startAt: 1 });

module.exports = connection.model('subjects',informationAboutSubject);