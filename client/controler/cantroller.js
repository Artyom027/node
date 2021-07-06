const names = require('../firstName');
const cities = require('all-the-cities');

const generateInfo = () => {
    let namesIndex = Math.floor(Math.random() * names.length - 1);

    let address = cities.filter(city => city.name.match());
    let addressIndex = Math.floor(Math.random() * address.length - 1);

    let minAge = 17;
    let maxAge = 50;
    minAge = Math.ceil(minAge);
    maxAge = Math.floor(maxAge + 1);
    let age = Math.floor(Math.random() * (maxAge - minAge) + minAge);

    let minId = 1;
    let maxId = 10;
    minId = Math.ceil(minId);
    maxId = Math.floor(maxId + 1);
    let professionId = Math.floor(Math.random() * (maxId - minId) + minId);
    
    let personalInformation = {
        name : names [namesIndex],
        address : address[addressIndex].name,
        age : age,
        professionId : professionId,
    }
    return personalInformation;
}
module.exports = generateInfo;



 