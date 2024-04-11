/* ACTIVITY -1 CREATE A PROGRAM THAT STORES WHAT YOU EAT TODAY FOR BREAKFAST,LUNCH AND DINNER AND LOG IT INTO THE CONSOLE.
1. Create a program that stores what you eat today for ‘breakfast:’, ‘lunch:’ and ‘dinner:’. 
   console.log the string. Eg (“breakfast:pancakes, lunch:blt, dinner:steakandchips”).     */  

//METHOD: 1 INTILIZE VARIABLES AND DECLARE IN THE CONSOLE 

let breakfast = "Bread and butter"
let lunch = "Ploughman's Sandwich"
let dinner = "Curry and Biryani"

console.log(` Breakfast: ${breakfast},  lunch: ${lunch} , dinner: ${dinner}`);   // OUTPUT SENTENCE USING INTERPOLATED VARIABLES IN STRING LITERAL 

//METHOD 2 :CALLING A FUNCTION WITH A NAME AND PARARMETERS IN BRACKET WITH SYNTAX AS BELOW :

const logFoodInfo = (breakfast,lunch,dinner) => {
    console.log(` Breakfast: ${breakfast},  lunch: ${lunch} , dinner: ${dinner}`);
  }

  // CALL THE FUNCTION LAST WITH DIFFERENT PARAMETERS 

  logFoodInfo('Bread and butter','Ploughmans Sandwich', 'Curry and Biryani');
  logFoodInfo('Pancakes','Cheese and Red Onion SAndwich', 'Pizza and Chips');
  

 