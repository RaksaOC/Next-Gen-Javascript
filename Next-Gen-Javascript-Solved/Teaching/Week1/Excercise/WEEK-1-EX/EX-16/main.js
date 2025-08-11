// EXERCISE 16: Convert C code to JavaScript - if/else comparison
// Use appropriate JavaScript features to match the logic and output

/*
C Code:
#include <stdio.h>

int main() {
    int a = 10, b = 20;
    if (a > b)
        printf("A is greater");
    else
        printf("B is greater");
    return 0;
}
*/

// Your JavaScript code here:

let a = 10, b = 20;

if (a > b) console.log("A is greater");
else if (a < b) console.log("B is greater");
else console.log("A equal B");