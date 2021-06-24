const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
const connection = require('../db/DB');
const { Schema } = mongoose;
const { ObjectId } = Schema;

autoIncrement.initialize(connection);

const informationAboutUser = new Schema ({
  name :  { type : String},
  age : { type : Number},
  address : { type : String},
  professionId : { type : Number},
  /*mog: [
    {
      year: { type : Number},
      grade: { type : Number},
    }
  ]*/
});

informationAboutUser.plugin(autoIncrement.plugin, { model: 'student', startAt: 1 });

module.exports = connection.model('student',informationAboutUser);
