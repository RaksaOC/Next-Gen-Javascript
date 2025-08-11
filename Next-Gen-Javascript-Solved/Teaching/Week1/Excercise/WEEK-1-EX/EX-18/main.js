// EXERCISE 18: Convert C code to JavaScript - count even numbers in range
// Use appropriate JavaScript features to match the logic and output

/*
C Code:
#include <stdio.h>

int main() {
    int count = 0;
    for (int i = 1; i <= 30; i++) {
        if (i % 2 == 0)
            count++;
    }
    printf("Total even numbers: %d", count);
    return 0;
}
*/

// Your JavaScript code here:

let count = 0;

for (let i = 0; i <= 30; i++) {
    if (i % 2 == 0) {
        count++;
    }
}

console.log(count);