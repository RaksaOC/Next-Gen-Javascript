// Demo EX-5: C to JavaScript Conversion - Logical Operators
// Original C Code:
/*
#include <stdio.h>

int main() {
    int isLoggedIn = 1; // true
    int isAdmin = 0;    // false

    if (isLoggedIn && isAdmin) {
        printf("Access granted\n");
    } else {
        printf("Access denied\n");
    }

    if (!isAdmin) {
        printf("Not an admin\n");
    }

    return 0;
}
*/

// JavaScript Implementation:

let isLoggedIn = 1;
let isAdmin = 0;

if (isLoggedIn && isAdmin) console.log("Access granted\n");
else console.log("Access denied\n");

if (!isAdmin) console.log("Not an admin\n");