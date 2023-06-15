// 8. Remove the spaces found in a string

function removeSpaces(str) {
    return str.replace(/\s/g, '');
  }
  
  var inputString = 'Hello, world! This is a test.';
  var cleanedString = removeSpaces(inputString);
  console.log(cleanedString);  // Output: "Hello,world!Thisisatest."