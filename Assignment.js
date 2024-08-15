// Call the function before it's declared
// 1
console.log(addNumbers(5, 10)); // Output: 15

// Function declaration
function addNumbers(a, b) {
    return a + b;
}
// 2
try {
    console.log(multiplyNumbers(5, 10)); // This will throw an error
} catch (e) {
    console.log(e); // ReferenceError: Cannot access 'multiplyNumbers' before initialization
}

// Function expression
const multiplyNumbers = function(a, b) {
    return a * b;
};

console.log(multiplyNumbers(5, 10)); // Output: 50
// 3
function sumNumbers(a, b) {
    console.log(sum); // Output: undefined (due to hoisting)

    var sum = a + b;
    return sum;
}

console.log(sumNumbers(5, 10)); // Output: 15
// 4
{
    console.log(varVariable); // Output: undefined (due to hoisting)
    try {
        console.log(letVariable); // ReferenceError: Cannot access 'letVariable' before initialization
    } catch (e) {
        console.log(e);
    }
    try {
        console.log(constVariable); // ReferenceError: Cannot access 'constVariable' before initialization
    } catch (e) {
        console.log(e);
    }

    var varVariable = 'I am a var variable';
    let letVariable = 'I am a let variable';
    const constVariable = 'I am a const variable';

    console.log(varVariable); // Output: I am a var variable
    console.log(letVariable); // Output: I am a let variable
    console.log(constVariable); // Output: I am a const variable
}
// 5
{
    try {
        console.log(letVariable); // ReferenceError: Cannot access 'letVariable' before initialization
    } catch (e) {
        console.log(e);
    }

    let letVariable = 'I am a let variable';
    console.log(letVariable); // Output: I am a let variable
}

