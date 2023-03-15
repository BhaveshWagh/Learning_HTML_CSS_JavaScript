function computeSumOfDigits(n) {
    let sum = 0; 
    while(n){
      let remainder = n % 10;
      console.log("rem",remainder);
      sum = sum + remainder;
      n = Math.floor(n/10);
      console.log("floor",n);
    }
    return sum;
  }
  console.log(computeSumOfDigits(827104));