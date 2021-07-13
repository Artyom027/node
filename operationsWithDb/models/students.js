const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
const connection = require('../db/DB');
const { Schema } = mongoose;
const { ObjectId } = Schema;

autoIncrement.initialize(connection);

const informationAboutUser = new Schema ({
  firstName : { type : String, required : true},
  lastName : { type : String, required : true},
  age : { type : Number },
  address : { type : String },
  professionId : { type : Number },
  dateCreated: { type: Date, default : Date.now },
  birthday : {
    type: {
      day: { type: Number, required : true },
      month: { type: String, required : true },
      year: { type: Number, required : true }
    },
    required: true,
  }, 
  grade : {type : Number },
  
});

informationAboutUser.plugin(autoIncrement.plugin, { model: 'students', startAt: 1 });

module.exports = connection.model('students',informationAboutUser)