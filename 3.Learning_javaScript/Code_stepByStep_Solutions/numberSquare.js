// This Problem is not solved properly right Now so please dont refer this.
function numberSqaure(min,max) {
    let result = "";
    for (let i = min; i <= max; i++) {
      for (let j = i; j <= max; j++) {
        result += j;
      }
      for (let k = 1; k < i; k++) {
        result += k;
      }
      result += "\n";
    }
    console.log(result);
  }
  
  numberSqaure(1,5);
  