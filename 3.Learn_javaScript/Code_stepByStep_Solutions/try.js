// This code is not complete half part of solution is done half part is remaining
result = '';
for (let i = 1; i <= 7; i++){
    for (j = 1; j <= i; j++){
        result += i;
    }
    result += '\n';
}
console.log(result)

// result = '';
// for (let i = 5; i <= 10; i++){
    
//     result += i;
//     result += " ,"
// }
// process.stdout.write(result);
// console.log(`${result}`);

// function rangeOfNumbers(start,end){
//     result = 0;
//     if (start < end){
//         for (let i = start; i <= end; i++){
//             // console.log(i);
//             result += i; 
//         }
//         result+= "\n"
//     }
    // else if(start > end){
    //     for (let j = start; j >= end; j--){
    //         // console.log(j);
    //         result += j;
     
    //     }
    //     result+= "\n"
    // }
    // else{
    //     // console.log(start)
    //     result = start;
    // }
    // result+= "\n"
// }

// console.log(rangeOfNumbers(5,10));
// rangeOfNumbers(10,5)
// rangeOfNumbers(10,10)