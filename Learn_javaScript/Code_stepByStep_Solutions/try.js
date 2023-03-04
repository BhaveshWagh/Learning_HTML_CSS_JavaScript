function fibonacci(n) {
  let n1 = 0;
  let n2 = 1;
  for (let i = 1; i <= n; i++){
    process.stdout.write(n1 + ", ");
    let nextIter = n1 + n2;
    n1 = n2;
    n2 = nextIter;
    if (n1 > n){
      break;
    }
    
  }
}

fibonacci(10000)