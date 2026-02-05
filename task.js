/* task 1 
Take four parameters. Multiply the four numbers and then return the result */

function multiply(num1,num2,num3,num4){
    const multiply = num1 * num2 * num2 * num4;
    return multiply ;
}

const result = multiply(5,9,8,5);
// console.log(result);


/* Task-2
Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result. */


function oddEvenResult(number){
    if(number % 2 === 0){
        const evenMultifly = 2 * number;
        return evenMultifly;
    }
    else{
        const oddDivided = number / 2;
        return oddDivided;
    }
}

const oddResult = oddEvenResult(22);
const evenResult = oddEvenResult(87);
console.log(oddResult);
console.log(evenResult);




