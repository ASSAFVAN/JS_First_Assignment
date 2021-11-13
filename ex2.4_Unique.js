function unique(arr) {
  let num = arr[0];
  let result = 0;

  for (let i = 0; i <= arr.length; i++) {
    if (arr[0] !== arr[i + 1] && arr[0] !== arr[i + 2]) {
      return num;
    }
    if (arr[i] !== num) {
      result = arr[i];
      return result;
    }
  }
}

const array = [1, 1, 1, 2, 1, 1];
const array2 = [0, 0, 0.55, 0, 0];
const array3 = [1, 0, 0, 0, 0];
console.log(unique(array));
console.log(unique(array2));
console.log(unique(array3));
