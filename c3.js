/* 3. Pass in 2 parameters called num1 and num2. Create an if statement that checks if the result 
of the sum is even, if it is return the number, otherwise return the numbers multiplied together. If 
the parameters are not numbers return the error message 'make sure you enter 2 numbers'.*/

function sumOrProduct(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'make sure you enter 2 numbers';
    }
    let result = num1 + num2;
    return result % 2 === 0 ? result : num1 * num2;
}
console.log(sumOrProduct(5, 7));