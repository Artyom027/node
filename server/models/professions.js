const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
const connection = require('../db/DB');
const { Schema } = mongoose;
const { ObjectId } = Schema;

autoIncrement.initialize(connection);

const professionSchema = new Schema ({
  name :  { type : String, unique: true, required: true },
  facultyId : { type : Number, required: true }
});

professionSchema.plugin(autoIncrement.plugin, { model: 'profession', startAt: 1 });

module.exports = connection.model('profession',professionSchema);
