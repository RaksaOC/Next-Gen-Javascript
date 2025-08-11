// Exercise 1: Create a variable called name and use a template literal to print "Hello, <name>!" to the console.

let name = "Tra";
// console.log("Hello, ", name,"!");
console.log(`Hello, ${name}!`);

// Exercise 2: Create two variables, item and price, and use a template literal to print "The price of <item> is $<price>." to the console.

let item = "LapTop";
let price = "600";
// console.log("The price of",item,"is $",price,".");
console.log(`The price of ${item} is $${price}.`);

// Exercise 3: Use a template literal to print a multi-line string that says:
// "Welcome!
// Today is a great day to learn JavaScript."

console.log(`Welcome!\nToday is a great day to learn JavaScript.`);

// Exercise 4: Create two variables, num1 and num2, and use a template literal to print "The sum of <num1> and <num2> is <sum>." to the console.
let num1 = 2;
let num2 = 4;

console.log(`The sum of ${num1} and ${num2} is ${num1 + num2}.`);