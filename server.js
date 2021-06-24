const express = require('express');
const app = express();
const hostname = "http://localhost";
const port = 8000;

const studentControllers = require('./server/routes/student')();
const lecturerControllers = require('./server/routes/lecturer')();
const facultyControllers = require('./server/routes/faculty')();
const departmentControllers = require('./server/routes/department')();
const professionControllers = require('./server/routes/profession')();

app.use('/student', studentControllers);
app.use('/lecturer', lecturerControllers);
app.use('/faculty', facultyControllers);
app.use('/department', departmentControllers);
app.use('/profession', professionControllers);

app.listen(port, () => {
    console.log(`Example app listening at ${hostname}:${port}`)
});