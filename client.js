const axios = require('axios');
const names = require('./client/firstName');
const cities = require('all-the-cities');
 
let a = cities.filter(city => city.name.match());
console.log(a[10].name);

let namesIndex = Math.floor(Math.random() * names.length - 1);
console.log( names [namesIndex] );

let minAge = 17;
let maxAge = 50;
minAge = Math.ceil(minAge);
maxAge = Math.floor(maxAge + 1);
let age = Math.floor(Math.random() * (maxAge - minAge) + minAge);

let professionId = Math.floor(Math.random() * 16);
 

axios.get('http://localhost:8000/student/create', 
{ 
    params : {name : names[namesIndex], age : age, professionId : professionId, address : a[10].name}
})
.then(function (response) { 
    console.log(response.data)
})
.catch(error => {console.log("Something went wrong with the API request ", error)})




    





















  
  

  