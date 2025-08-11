// Exercise 1: Make an object called 'person' with properties 'name', 'age', and 'city'.
// And use destructuring to extract these properties into variables and print them to the console.

export const person = {
    name: "Tra",
    age: 18,
    city: "Phnom Penh"
}

//destructuring the object
const {name, age, city} = person;

console.log(name);
console.log(age);
console.log(city);

// Exercise 2. Make an array called 'fruits' with at least 3 elements.
// Use destructuring to extract the first two elements into variables and print them to the console.

const fruits = ["manga", "banana", "apple"];

const [f1, f2] = fruits;

console.log(f1);
console.log(f2);
