// EXERCISE 20: Convert C code to JavaScript - struct array iteration
// Use appropriate JavaScript features to match the logic and output

/*
C Code:
#include <stdio.h>

struct Student {
    char name[50];
    int age;
};

int main() {
    struct Student students[3] = {
        {"Alice", 20},
        {"Bob", 22},
        {"Charlie", 21}
    };

    for (int i = 0; i < 3; i++) {
        printf("%s\n", students[i].name);
    }

    return 0;
}
*/

// Your JavaScript code here:

class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

let students = Array(3);
students[0] = new Student("Alice", 20);
students[1] = new Student("Bob", 22);
students[2] = new Student("Charlie", 21);

for (el of students) {
    console.log(el.name);
}