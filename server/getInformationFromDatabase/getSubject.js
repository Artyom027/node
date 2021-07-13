const Subject = require('../models/subjects');

async function getuSubjects(params) {
    const subjects = await Subject.find({ _id : params.professionId }).lean();
    return subjects;
}
getuSubjects();

module.exports = getuSubjects();

