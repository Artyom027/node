const Subject = require('../models/subjects');

async function getuSubjects(params) {
    const subjects = await Subject.find({ professionId : params[0].professionId }).lean();
    return subjects;
}


module.exports = getuSubjects;

