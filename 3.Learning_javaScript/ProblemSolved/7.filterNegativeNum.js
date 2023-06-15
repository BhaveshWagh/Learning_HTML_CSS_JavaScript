// 7. Create a function that filters out negative numbers
function filterNegativeNum(arr){
    let newArr = []
    for(let i = 0; i <= arr.length; i++){
        if(arr[i] < 0){
            newArr.push(arr[i])
        }
    }
    return newArr;
  }
  
let array = [0,-2,54,-43]
console.log(filterNegativeNum(array))
  