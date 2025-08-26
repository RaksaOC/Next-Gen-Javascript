// Exercise:
// 1. Import displayStudentInfoSimulation from 'export.js'.
// 2. Create a student object with properties 'name', 'age', 'gender', and 'grade'.
// 3. Use destructuring to extract the properties from the data returned by the function.
// 4. Use template literals to print the student's information to the console.

import { displayStudentInfoSimulation } from './export.js';

(async() => {
    const student = {
        name: "Tra",
        age: 18,
        gender: "male",
        grade: "year1"
    }
    let studentInfo = await displayStudentInfoSimulation(student);
    console.log(studentInfo);
}) ();


