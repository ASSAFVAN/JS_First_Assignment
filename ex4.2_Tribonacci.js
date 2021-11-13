function tribonacci(n) {
  let arr = [0, 0, 1];
  for (i = 3; i < n; i++) {
    arr.push(arr[i - 3] + arr[i - 2] + arr[i - 1]);
  }
  console.log(arr);
  return arr[n - 1];
}
console.log(tribonacci(9));
