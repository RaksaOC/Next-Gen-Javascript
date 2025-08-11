// EXERCISE 11: Create an object representing a student with properties like name, age, and major. Print each property

// Your code here:
class Person {
    constructor(name, age, major) {
        this.name = name;
        this.age = age;
        this.major = major;
    }
}

let person1 = new Person('Tra', 18, 'cybersecurity');
let person2 = new Person('Hong', 19, 'SE');

console.log(person1)    
console.log(person2)    
    