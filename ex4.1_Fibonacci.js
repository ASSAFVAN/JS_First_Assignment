function fibonacci(n) {
  let arr = [1, 1];
  for (i = 2; i < n; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  console.log(arr);
  return arr[n - 1];
}
console.log(fibonacci(9));
