### **JavaScript Worksheet – Week 1: Fundamentals and C-to-JS Conversion**

#### **Part A: JavaScript Fundamentals (1–15)**

1. Print your full name in the console.
2. Declare a variable to store your age and print it.
3. Create variables for your first name and last name, then combine them into a full name and print it.
4. Declare a variable and assign it a number. Check if it’s greater than 100 using an `if` statement.
5. Use a ternary operator to check if a number is even or odd.
6. Write a program that checks if a number is positive, negative, or zero using `if...else if...else`.
7. Use a `for` loop to print numbers from 1 to 10.
8. Create an array of three favorite movies and print each one using `for...of`.
9. Write a function that prints all even numbers from 1 to 20 using a loop.
10. Use a `while` loop to count from 5 down to 1.
11. Create an object representing a student with properties like name, age, and major. Print each property.
12. Write a `for...in` loop to iterate over the student object you created above.
13. Create an array of numbers and use `forEach` to multiply each number by 2 and print it.
14. Use a `switch` statement to print the day of the week based on a number from 1 to 7.
15. **Bonus**: Create multiple student objects and store them in an array called students.
        Use a combination of for...of and for...in to print each student’s details.

---

#### **Part B: C to JavaScript Conversion – Practice Challenge (16–20)**

**Instructions**: Convert each C code snippet below to JavaScript. Use appropriate JavaScript features to match the logic and output.

---

16. 

```c
#include <stdio.h>

int main() {
    int a = 10, b = 20;
    if (a > b)
        printf("A is greater");
    else
        printf("B is greater");
    return 0;
}
```

---

17. 

```c
#include <stdio.h>

int main() {
    int arr[] = {10, 55, 63, 20, 90};
    for (int i = 0; i < 5; i++) {
        if (arr[i] > 50)
            printf("%d\n", arr[i]);
    }
    return 0;
}
```

---

18. 

```c
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
```

---

19. 

```c
#include <stdio.h>

int main() {
    char grade = 'B';
    switch(grade) {
        case 'A': printf("Excellent"); break;
        case 'B': printf("Good"); break;
        case 'C': printf("Fair"); break;
        default: printf("Fail");
    }
    return 0;
}
```

---

20. 

```c
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
```

---

### 🔹 **JavaScript Cheatsheet – Quick Reference**

- **Variables**
  `let`, `const` (modern) — use `let` for values that change

  ```js
  let age = 20;
  const name = "John";
  ```

- **Conditional Statements**

  ```js
  if (x > 0) { ... } else if (...) { ... } else { ... }
  ```

- **Loops**

  ```js
  for (let i = 0; i < 10; i++) { ... }
  while (condition) { ... }
  ```

- **Arrays**

  ```js
  let nums = [1, 2, 3];
  nums[0];
  nums.length;
  ```

- **Objects**

  ```js
  let student = { name: "Ana", age: 20 };
  console.log(student.name);
  ```

- **Ternary Operator**

  ```js
  let type = x % 2 === 0 ? "even" : "odd";
  ```

- **Switch Statement**

  ```js
  switch (day) { case 1: ...; break; default: ...; }
  ```

- **Loop Helpers**
  `for...of` for arrays
  `for...in` for objects
  `.forEach()` for array iteration

---
