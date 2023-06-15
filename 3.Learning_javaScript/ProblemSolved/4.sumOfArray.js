// 4. Calculate the sum of numbers within an array

function sumOfArray(array){
    let sum = 0;
    for(let i = 0; i <= array.length - 1; i++){
        sum = array[i] + sum;
    }    
    return sum;
}

array = [1,2,3,4,5]
// console.log(array.length)
console.log(sumOfArray(array))