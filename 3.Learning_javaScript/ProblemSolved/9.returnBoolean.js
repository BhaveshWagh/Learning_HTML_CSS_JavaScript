// 9. Return a Boolean if a number is divisible by 10
// Here, you’ll create a function that’ll give you a “true” or “false” Boolean as its output. The inputted number should only return a “true” if it’s divisible by 10. Otherwise, your program should return a “false” answer.

function returnBoolean(num){
    if(num % 10 == 0){
      return true
    }
    return false
  }
  
  
  console.log(returnBoolean(3))