// for (i = 1; i <= 5; i++){
//     for(j = 1; j <= i; j++){
//         console.log(i,"\t");
//     }
    
// }



let result = 0;
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    result += i;
    // console.log(i);
  }
  result += "\n";
//   console.log(i);
}
// console.log(result);