/* 6. Create a JavaScript program that prints out a multiplication table for a given number.
The program should take a number(can store in a variable), representing the multiplication table they want to generate. Use a for loop to iterate from 1 to 10.
Inside the loop, multiply the current number by the stored number and print out the result in the format: <input number> * <current number> = <result>.*/

3.function printMultiplicationTable(number) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${number} * ${i} = ${number * i}`);
    }
}
printMultiplicationTable(7); // Example with the number 7