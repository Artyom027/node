const Subject = require('../models/subjects');

async function getSubjectInfo() {
    const subjects = await Subject.find( { professionId : 9}).lean();
    return subjects;
}
getSubjectInfo();

module.exports = getSubjectInfo();

