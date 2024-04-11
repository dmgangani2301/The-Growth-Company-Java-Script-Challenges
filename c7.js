/* Create a JavaScript program that calculates the average grade of a student based on their scores in three subjects: Math, Science, and English.
Define a function named calculateAverage that takes three parameters: mathScore, scienceScore, and englishScore.
Inside the function, calculate the average score by adding up the scores of the three subjects and dividing by 3.
Return the average score from the function.
Call the calculateAverage with the separate score results as arguments and log the result to the console.
Modify the program to also determine and display the corresponding letter grade based on the average score. 
For example, A for scores >= 90, B for scores >= 80, and so on*/

function calculateAverage(mathScore, scienceScore, englishScore) {
    let average = (mathScore + scienceScore + englishScore) / 3;
    return average;
}

function determineLetterGrade(average) {
    if (average >= 90) return 'A';
    else if (average >= 80) return 'B';
    else if (average >= 70) return 'C';
    else if (average >= 60) return 'D';
    else return 'F';
}

const averageScore = calculateAverage(85, 90, 95);
console.log(`Average Score: ${averageScore}`);
console.log(`Letter Grade: ${determineLetterGrade(averageScore)}`);