function removeDuplicates(array) {
    let uniqueArray = [];
  
    for (let i = 0; i < array.length; i++) {
      console.log("****",array[i])
      if (uniqueArray.indexOf(array[i]) === -1) {
        console.log(array[i]);
        uniqueArray.push(array[i]);
      }
    }
  
    return uniqueArray;
  }
  
  let myArray = [1, 2, 3, 2, 4, 3, 5];
  let uniqueArray = removeDuplicates(myArray);
  
  console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
  console.log(myArray.indexOf());
  