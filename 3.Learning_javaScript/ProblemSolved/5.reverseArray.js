// 5. Create a function that reverses an array

function reverseArray(array) {
  let start = 0;
  let end = array.length - 1;
  while (start < end) {
    let temp = array[start];
    array[start] = array[end];
    array[end] = temp;
    start++;
    end--;
    console.log("*",array);
  }
}

let myarray = [1, 2, 3, 4, 5];
reverseArray(myarray);
console.log(myarray);
