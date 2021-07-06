const axios = require('axios');
const generateInfo = require('./client/controler/cantroller')

async function createStudents() {
    for (let i = 0; i < 5000; i++){
        const personalInformation = generateInfo();
        console.log(personalInformation);
        try {
            const response = await axios.get('http://localhost:8000/student/create', 
            {
                params : personalInformation
            })
            console.log(response.data)
        } catch (error) {
            console.log("Something went wrong with the API request ", error)
        }
    }
}

createStudents();




    





















  
  

  