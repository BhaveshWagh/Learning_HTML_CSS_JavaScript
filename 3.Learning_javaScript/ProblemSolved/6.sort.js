// 6.Sort an array from lowest to highest

function sortArray(arr){
    for(let i = 0; i <= arr.length - 1; i++){
      for(let j = 0; j <= arr.length - i; j++){
        if (arr[j] > arr[j + 1]){
          let temp = arr[j]
          arr[j] = arr[j + 1]
          arr[j + 1] = temp
        }
      }
    }
  }
  
  arr = [4,3,1,2]
  sortArray(arr)
  console.log(arr)