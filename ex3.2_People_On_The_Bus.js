function numOfPeople(arr) {
  let total = 0;
  for (i = 0; i < arr.length; i++) {
    total = total + (arr[i][0] - arr[i][1]);
  }
  return total;
}

const array = [
  [3, 0],
  [0, 3],
  [1, 1],
];
const array2 = [
  [3, 0],
  [9, 1],
  [4, 10],
  [12, 2],
  [6, 1],
  [7, 10],
];
console.log(numOfPeople(array));
console.log(numOfPeople(array2));
