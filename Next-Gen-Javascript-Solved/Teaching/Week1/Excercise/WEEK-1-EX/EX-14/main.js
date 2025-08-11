// EXERCISE 14: Use a switch statement to print the day of the week based on a number from 1 to 7

// Your code here:

const readline = require('readline');

//create user interface for input/output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// let days = readline("Enter a number (1–7) for the day of the week:");

rl.question('Enter a number (1–7) for the day of the week:' ,(input) => {
    let days = parseInt(input);

    switch(days) {
        case 1:
            console.log("monday");
            break;  
        case 2:
            console.log("tuesday");
            break;
        case 3:
            console.log("wednesday");
            break;
        case 4:
            console.log("thursday");
            break;
        case 5:
            console.log("friday");
            break;
        case 6:
            console.log("saturday");
            break;
        case 7:
            console.log("sunday");
            break;
        default :
            break;
    }

    rl.close();
});

