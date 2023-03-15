// var twoSum = function(nums, target) {
//     let sum = 0;
//     for(let i = 0; i < nums.length; i++){
//         sum = nums[i] + nums[i + 1]
//         // console.log(sum)
//         if (target == sum){
//         }
//     } 
    
// };

// var twoSum = function(nums, target) {
//     var map = {};
//     // console.log(typeof(map))
//     for(var i = 0 ; i < nums.length ; i++){
//         var n = nums[i];
//         // console.log(n)
//         if(map[target-n] >= 0){
//             // console.log([map[target-n],i])
//             return [map[target-n],i]
//         }
//         else {
//             map[n] = i;   //use map to store the value and index position
//         }
//     }
//     // console.log(map)
// };

var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        let firstNumber = nums[i];
        for (let j = 0; j < nums.length; j++) {
            let secondNumber = nums[j];
            if (firstNumber + secondNumber === target && i !== j) {
                console.log([i, j]) 
            }
        }
    }
};
twoSum([1,2,4,5],9)



// This code is not complete half part of solution is done half part is remaining
// result = '';
// for (let i = 1; i <= 7; i++){
//     for (j = 1; j <= i; j++){
//         result += i;
//     }
//     result += '\n';
// }
// console.log(result)

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