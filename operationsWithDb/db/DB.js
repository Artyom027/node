const mongoose = require('mongoose');
const config = require('../config/config');

const universityDBConnection = mongoose.createConnection(config.dbUri, config.dbOptions);

module.exports = universityDBConnection;
