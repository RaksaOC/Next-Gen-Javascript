// EXERCISE 12: Write a for...in loop to iterate over the student object you created above

// Your code here:

class Person {
    constructor(name, age, major) {
        this.name = name;
        this.age = age;
        this.major = major;
    }
}

let size = 2;

let person = new Array(size);

person[0] = new Person('Tra', 18, 'cybersecurity');
person[1] = new Person('Hong', 19, 'SE');

for (let i = 0; i < size; i++) {
    console.log(person[i])
}