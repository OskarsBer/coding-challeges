// Debugging sayHello function
// The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. It is your job to fix the code and get the program working again!

// Example output:

// Hello, Mr. Spock


const sayHello = name => `Hello, ${name}`;


console.log(sayHello('Mr. Spock'), 'Hello, Mr. Spock')
console.log(sayHello('Captain Kirk'), 'Hello, Captain Kirk')
console.log(sayHello('Liutenant Uhura'), 'Hello, Liutenant Uhura')
console.log(sayHello('Dr. McCoy'), 'Hello, Dr. McCoy')


// CC2

// Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.

// This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects (from 0 and above);

// This function should return a number (final grade). There are four types of final grades:

// 100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
// 90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
// 75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
// 0, in other cases
// Examples(Inputs-->Output):

// 100, 12 --> 100
// 99, 0 --> 100
// 10, 15 --> 100

// 85, 5 --> 90

// 55, 3 --> 75

// 55, 0 --> 0
// 20, 2 --> 0
// *Use Comparison and Logical Operators.


function finalGrade (exam, projects) {
    if(exam > 90 || projects > 10) {
        return 100;
    }else if(exam > 75 && projects >= 5) {
        return 90;
    }else if(exam > 50 && projects >= 2) {
        return 75;
    }else{
        return 0;
    }   
}


console.log(finalGrade(100, 12), 100);
console.log(finalGrade(85, 5), 90);


// CC3

// In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.

// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

// Your function will be tested with pre-made examples as well as random ones.

// If you can, try writing it in one line of code.


const findDifference = (a, b) => Math.abs((a.reduce((acc, c) => acc * c)) - (b.reduce((acc, c) => acc * c)));


console.log(findDifference([3, 2, 5], [1, 4, 4]), 14);
console.log(findDifference([9, 7, 2], [5, 2, 2]), 106);
console.log(findDifference([11, 2, 5], [1, 10, 8]), 30);
console.log(findDifference([4, 4, 7], [3, 9, 3]), 31);
console.log(findDifference([15, 20, 25], [10, 30, 25]), 0);