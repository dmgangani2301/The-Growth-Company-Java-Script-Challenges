/* ACTIVITY-4  Generate 6 random numbers between 1-50, add them to an array and log the array.*/

function generateRandomNumbers() {
    let numbers = [];
    for (let i = 0; i < 6; i++) {            // A for loop is used to generate 6 random numbers. The loop runs from i = 0 to i < 6.
        numbers.push(Math.floor(Math.random() * 50) + 1);
    }
    console.log(numbers);
}
generateRandomNumbers();

