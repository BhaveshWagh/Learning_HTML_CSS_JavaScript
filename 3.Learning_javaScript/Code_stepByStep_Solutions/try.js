function lessThan100(a, b) {
	let sum = a + b;
  if (sum <= 100){
    return true;
  }
  else{
    return false;
  }
}

console.log(lessThan100(25,23))
// function minAndMax(arr) {
//   try{
//     let min, max;
//   if (arr.length > 0){
//     for (let i = 0; i < arr.length; i++) {
//         // console.log(arr[i]);
//         min = Math.min(...arr);
//         max = Math.max(...arr);
//       }
//       console.log(`Minimum Value = ${min}`);
//       console.log(`Maximum Value = ${max}`);
// }
//   }
//   catch(e){
//         // console.log( "array must contain at least one value")
//         console.error(e)
//   }
// }

// arr = [1, 2, 3, 6, 4, 0, -2, -3, -1];
// arr = []
// // minAndMax();
// minAndMax([]);

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
