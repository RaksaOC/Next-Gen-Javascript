#include <stdio.h>

int main() {
    int age = 20;
    printf("Age: %d\n", age);
    return 0;
}

#include <stdio.h>

int main() {
    int score = 75;

    if (score >= 90)
        printf("Grade A\n");
    else if (score >= 80)
        printf("Grade B\n");
    else
        printf("Grade C or below\n");

    return 0;
}

#include <stdio.h>

int main() {
    int nums[3] = {10, 20, 30};
    for (int i = 0; i < 3; i++) {
        printf("%d\n", nums[i]);
    }
    return 0;
}

#include <stdio.h>

struct Student {
    char name[20];
    int age;
};

int main() {
    struct Student s1 = {"Visal", 18};
    printf("Name: %s\n", s1.name);
    printf("Age: %d\n", s1.age);
    return 0;
}

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

