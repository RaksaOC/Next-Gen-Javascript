// EXERCISE 15: Create mulple tistudent objects and store them in an array called students. Use a combination of for...of and for...in to print each student's details

// Your code here:

class Student {
    constructor(name, age, major) {
        this.name = name;
        this.age = age;
        this.major = major;
    }
}

let numStudent = 3;
let students = Array(numStudent);

students[0] = new Student("hong", 19, "CS");
students[1] = new Student("sliden", 19, "CS");
students[2] = new Student("javjit", 19, "CS");

//for of 
for (el of students) {
    console.log(el);
}

// for in
for (el in students) {
    console.log(students[el]);
}
