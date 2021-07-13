const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
const connection = require('../db/DB');
const { Schema } = mongoose;
const { ObjectId } = Schema;

autoIncrement.initialize(connection);

const informationAboutExamAndTest = new Schema ({

  studentId : {type : Number},
  mog : { type : Number},
  inspectionType : {type : String},
  grades : [{ type : Object }],
  
});

informationAboutExamAndTest.plugin(autoIncrement.plugin, { model: 'exams', startAt: 1 });

module.exports = connection.model('exams',informationAboutExamAndTest);