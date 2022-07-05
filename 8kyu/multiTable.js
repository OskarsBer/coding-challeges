// Your goal is to return multiplication table for number that is always an integer from 1 to 10.

// P. S. You can use \n in string to jump to the next line.

// Note: newlines should be added between rows, but there should be no trailing newline at the end. If you're unsure about the format, look at the sample tests.


// number from 1 to 10, multi number with 1 to 10
// num, whole, +
// return 

function multiTable(number) {
    // define string
    // loop
    // concat each loop to string
    // return string
    let result = '';
    for(let i = 1; i <= 10; i++) {
        result += i + ' * ' + number + ' = ' + i*number;
        if(i != 10) {
            result += '\n';
        }
    }
    return result;
}

console.log(multiTable(1))// '1 * 1 = 1\n2 * 1 = 2\n3 * 1 = 3\n4 * 1 = 4\n5 * 1 = 5\n6 * 1 = 6\n7 * 1 = 7\n8 * 1 = 8\n9 * 1 = 9\n10 * 1 = 10'
console.log(multiTable(6))// '1 * 6 = 6\n2 * 6 = 12\n3 * 6 = 18\n4 * 6 = 24\n5 * 6 = 30\n6 * 6 = 36\n7 * 6 = 42\n8 * 6 = 48\n9 * 6 = 54\n10 * 6 = 60'