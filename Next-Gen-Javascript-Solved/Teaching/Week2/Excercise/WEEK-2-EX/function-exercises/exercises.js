// Exercise 1: Write a function with a parameter that returns the square of the number and make another one using arrow function.

function square(num) {
    return num * num;
}

const arrowSquare = num => num * num;

console.log(square(5));
console.log(arrowSquare(5));


// Exercise 2: Write a function with a parameter that prints double the number to the console (no return) and make another one using arrow function.

function doubleOf(num) {
    return num * 2;
}

const arrowDoubleOf = num => num * 2;

console.log(doubleOf(5));
console.log(arrowDoubleOf(5));


// Exercise 3: Write a function with no parameter that returns the value of Pi and make another one using arrow function.
    function pi() {
        return Math.PI;
    }

    const arrowPi = pi => Math.PI;

    console.log(pi());
    console.log(arrowPi());
// Exercise 4: Write a function with no parameter and no return that prints "Hello!" to the console and make another one using arrow function.

function hello() {
    console.log("Hello!");
}

const arrowHello = hello => console.log("Hello!");

hello();
arrowHello();

