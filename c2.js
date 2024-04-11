/*  ACTIVITY-2  Pass or create a parameter(variable) called num. If num is a data type of string or num is less than or equal to 0, return the string 'needs to be a positive number’. 
    If num is divisible by 3 return “fizz”, if num is divisible by 5 return “buzz”, if num is divisible by both 3 and 5 return “fizz buzz”. 
    If num is not divisible by 3 or 5 return the value of num. Print the result.*/
/*
      function checkNumber(num) {
        if (typeof num !== 'number' || num <= 0) {
            return 'needs to be a positive number';
        }
        else if (num % 3 === 0 && num % 5 === 0) {
            return 'fizz buzz';
        }
         else if (num % 3 === 0) {
            return 'fizz';
        } 
        else if (num % 5 === 0) {
            return 'buzz';
        } 
        else {
            return num;
        }
    }
    console.log(checkNumber(15)); */

    const divisionBy = (num) => {
   
        if(typeof num === 'string' || typeof num === 'number') {
    
            num = Number(num);
    
            if(num <= 0 ) {
                return 'needs to be a positive number'
            }
    
            if (num % 3 === 0 && num % 5 === 0) {
                return 'fizz buzz';
            }
            
            if (num % 3 === 0) {
                return 'fizz';
            }
    
            if (num % 5 === 0) {
                return 'buzz';
            }
        }
    
        return 'Wrong data type';
    }
    
    console.log(divisionBy(-1));
    console.log(divisionBy(0));
    console.log(divisionBy(15));
    console.log(divisionBy(25));
    console.log(divisionBy(3));
    console.log(divisionBy('hello'));

     
