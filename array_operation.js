function sumOfArray(numbers){
    let sum = 0
    for(let num of numbers){
        sum += num;   
    }
    return sum;
    
}

const array = [45,58,54,87,54,24,23,54]
const sum = sumOfArray(array);
console.log("sum of numbers is:", sum);
