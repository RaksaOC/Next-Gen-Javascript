// Exercise: Export
// 1. Use any type of export to export this function to import.js
//! No need to touch the code here
const displayStudentInfoSimulation = async (studentInfo) => {
	await new Promise((resolve) => setTimeout(resolve, 2000));
    return {
        name: studentInfo.name,
        age: studentInfo.age,
        gender: studentInfo.gender,
        grade: studentInfo.grade,
        address: "123 Maple Street, Springfield",
        studentId: "STU2024001",
        email: `${studentInfo.name.toLowerCase().replace(/\s/g, '')}@school.edu`
    };
};
