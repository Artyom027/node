const FirstNames = require('../informationAboutStudent/firestName.json');
const LastNames = require('../informationAboutStudent/lastName.json');
const Months = require('../informationAboutStudent/months.json');
const cities = require('all-the-cities');


const generateInfo = () => {
    let firstNames = FirstNames.firstName;
    let lastNames = LastNames.lastName;

    let month = Months.months;
    let monthIndex = Math.floor(Math.random() * month.length );

    let minGrade = 1;
    let maxGrade = 4;
    minGrade = Math.ceil(minGrade);
    maxGrade = Math.floor(maxGrade + 1);
    let grade = Math.floor(Math.random() * (maxGrade - minGrade) + minGrade);

    let minData = 1970;
    let maxData = 2004;
    minData = Math.ceil(minData);
    maxData = Math.floor(maxData + 1);
    let yearOfBirth = Math.floor(Math.random() * (maxData - minData) + minData);

    let firstNamesIndex = Math.floor(Math.random() * firstNames.length );
    let lastNamesIndex = Math.floor(Math.random() * lastNames.length );

    let address = cities.filter(city => city.name.match());
    let addressIndex = Math.floor(Math.random() * address.length );

    let minDay = 1;
    let maxDay = 31;
    minDay = Math.ceil(minDay);
    maxDay = Math.floor(maxDay + 1);
    let day = Math.floor(Math.random() * (maxDay - minDay) + minDay);

    if((month === ("February" || "April" || "June" || "September" || "November")) && (day == 31 )) {
        day -=1;
    }
    if((month === "February") && (day == 30)) {
        day -= 1;
    }

    let minId = 1;
    let maxId = 10;
    minId = Math.ceil(minId);
    maxId = Math.floor(maxId + 1);
    let professionId = Math.floor(Math.random() * (maxId - minId) + minId);
   


    let personalInformation = {

        firstName : firstNames [firstNamesIndex],
        lastName : lastNames [lastNamesIndex],
        birthday : {day, month : month[monthIndex], year : yearOfBirth},
        address : address[addressIndex].name,
        professionId : professionId,
        grade : grade,
        
    }
    return personalInformation;
}
module.exports = generateInfo;



 