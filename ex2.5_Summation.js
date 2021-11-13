function summation(n) {
  let num = 0;
  for (let i = 0; i <= n; i++) {
    num = num + i;
  }
  return num;
}

console.log(summation(8));
