let Grade = [];
let Mog = 0;
let Presence = 0;

let GradeԼength = 20;
let minGrade = 8;
let maxGrade = 20;
let minPresence = 5;
let maxPresence = 100;

minGrade = Math.ceil(minGrade);
maxGrade = Math.floor(maxGrade + 1);

minPresence = Math.ceil(minPresence);
maxPresence = Math.floor(maxPresence + 1);

Presence = Math.floor(Math.random() * (maxGrade - minPresence) + minPresence);
 
for(let i = 0; i < GradeԼength; i++){
   Grade[i] = Math.floor(Math.random() * (maxGrade - minGrade) + minGrade);
   Mog += Grade[i];
}
Mog /= GradeԼength;
let grades = {
    mog : Mog,
    grades : Grade,
    presence : Presence,
}

module.exports = grades;
