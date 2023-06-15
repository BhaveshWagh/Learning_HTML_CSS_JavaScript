// 10. Return the number of vowels in a string

function countVowels(str) {
    var vowelRegex = /[aeiou]/gi; // Regular expression to match vowels (case-insensitive)
    var matches = str.match(vowelRegex); // Array of matched vowels
    var count = matches ? matches.length : 0; // Number of matched vowels (or 0 if no matches found)
    return count;
  }
  let str = "bhavesh"
  var vowelCount = countVowels(str);
  console.log(vowelCount); // Output: 3