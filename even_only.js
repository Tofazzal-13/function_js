function evenNumbersOnly(numbers){
    const evens = []
    for(const number of numbers){
        if(number % 2 === 0){
            evens.push(number)
        }   
    }
    return evens
}

const numbers = [5,6,8,9,42,55,58,56,85,21]
// const evens = evenNumbersOnly(numbers)
// console.log("ever numbers are", evens);

function sumOfEvenNumbers(numbers){
    let sum = 0;
    for(const number of numbers){
        if(number % 2 === 0){
            sum += number;
        }    
    }
    return sum;
}


const sum = sumOfEvenNumbers([12,11,25,32,13,98,56,55]);
console.log("sum of number: ",sum);




