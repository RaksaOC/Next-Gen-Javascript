// let score = 10;
const pi = 3.14;
var name = "Alice";

let age = 25; // Number
let name = "John"; // String
let isOnline = true; // Boolean
let address; // Undefined
let data = null; // Null

// Arithmetic
let a = 4;
let b = 2;

console.log(a ** b); // 16 (Exponentiation: 4^2)
console.log(a % b); // 0  (Remainder)

// Comparison
// let score = 90;
let grade = "90";

console.log(score == grade); // true  (value is the same)
console.log(score === grade); // false (type is different)

console.log(score > 80); // true
console.log(score <= 100); // true

console.log(score != 50); // true
console.log(score !== "90"); // true

// Logical
// let isLoggedIn = true;
let isAdmin = false;

console.log(isLoggedIn && isAdmin); // false (must be both true)
console.log(isLoggedIn || isAdmin); // true  (at least one is true)
console.log(!isAdmin); // true  (not false)

let c = 10;

c += 5; // Same as: c = c + 5
console.log(c); // 15

c -= 3; // c = c - 3
console.log(c); // 12

c *= 2; // c = c * 2
console.log(c); // 24

c /= 4; // c = c / 4
console.log(c); // 6

c %= 5; // c = c % 5
console.log(c); // 1

// let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits[0]); // Apple
console.log(fruits.length); // 3

// let user = {
//   name: "Donald Trump",
//   age: 18,
//   email: "trump@gmail.com",
//   isAdmin: false,
//   hobbies: ["politics", "coding", "gaming"],
//   login: function () {
//     console.log(this.name + " has logged in.");
//   }
// };

console.log(user.name); // Donald Trump
console.log(user.hobbies[1]); // politics
user.login(); // Donald Trump has logged in.

let score = 85;

if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else {
  console.log("C or below");
}

let isLoggedIn = true;

let message = isLoggedIn ? "Welcome!" : "Please log in.";
console.log(message);

for (let i = 0; i < 5; i++) {
  console.log("Step", i);
}

let fruits = ["Apple", "Banana", "Cherry"];

for (let fruit of fruits) {
  console.log(fruit);
}

let user = { name: "Michael", age: 18 };

for (let key in user) {
  console.log(key + ": " + user[key]);
}

// name: Michael
// age: 18

let numbers = [1, 2, 3];

numbers.forEach(function (num) {
  console.log(num * 2);
});

let i = 0;

while (i < 3) {
  console.log("Counting:", i);
  i++;
}

let j = 0;

do {
  console.log("This runs at least once:", j);
  j++;
} while (j < 3);

let role = "editor";

switch (role) {
  case "admin":
    console.log("Full access");
    break;
  case "editor":
    console.log("Edit access");
    break;
  case "viewer":
    console.log("Read-only access");
    break;
  default:
    console.log("No role assigned");
}

console.log("Welcome to JavaScript!"); // Prints a message
console.log(5 + 3); // Prints 8
let myName = "Raksa";
console.log("Hello, " + myName); // Concatenates and prints
console.log("Is 10 > 5?", 10 > 5); // Prints a message + result
