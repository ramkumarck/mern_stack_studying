
/* 
 FUNCTIONS 
 1. Abstract out logic in program
 2. Take arguments as an input
 3. Return a value as an output
 4. we can think of them as an independent program that is supposed to do something given an input
 5. Functions can take other functions as input -- (callbacks)

*/

/*
ASSIGNMENT
1. write a function that finds the sum of two numbers
2. write another function that displays this result in a pretty format
3. write another function that takes this sum and prints it in passive tense

*/

/*function sum(a, b) {
    return a + b;
}

const value = sum(1, 2);
console.log(value);*/

/*function sum(num1, num2, fnToCall) {
    let result = num1 + num2;
    fnToCall(result);
}

function displayResult(data) {
    console.log("Result of the sum is : " + data);
}

function displayResultPassive(data) {
    console.log("Sum's result is : " + data);
}

// you are only allowed to call one function after this
// How will you displayResult of a sum

const ans = sum(1,2, displayResult);*/

/*function calculateArithmetic(a, b, arithmeticFinalFunction) {
   const ans = arithmeticFinalFunction(a, b);
   return ans;
}

function sum(a, b) {
    return a + b;
}


const value = calculateArithmetic(1, 2,'sum');
console.log(value); */

function greet() {
    console.log("Hello world!");
}

setTimeout(greet, 3 * 1000);