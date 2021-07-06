const axios = require('axios');
let personalInformation = require('./client/controler/cantroller')
console.log(personalInformation)

axios.get('http://localhost:8000/student/create', 
{
    params : personalInformation
})
.then(function (response) { 
    console.log(response.data)
})
.catch(error => {console.log("Something went wrong with the API request ", error)})




    





















  
  

  