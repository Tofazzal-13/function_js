function evenSizeString(str){
    const size = str.length;
    // console.log(str, size);
    if(size % 2 === 0){
        // console.log("even size");
        return true;
    }
    else{
        // console.log("it is odd size");
        return false;
    }
}

const string = evenSizeString("towfique")
// console.log(string);


function doubleOrTriple(number, doDouble){
    if(doDouble === true){
        const result = number * 2;
        return result;
    }
    else{
        const result = number * 3; 
        return result;
    }
}
/* 

console.log(doubleOrTriple(5, true));
console.log(doubleOrTriple(6, false)); */

function numberOfElements(numbers){
    const len = numbers.length;
    return len
}
console.log(numberOfElements([14,58,74,1,2,78,75,4]));
