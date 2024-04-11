/* Activity- 5 If we can create a loop to put 0-9 on the screen, how can we count from 9-0? Return an array that contains 9-0 using a loop that does this. Print the result*/

function countdown() {
    let numbers = [];
    for (let i = 9; i >= 0; i--) {
        numbers.push(i);
    }
    return numbers;
}
console.log(countdown());