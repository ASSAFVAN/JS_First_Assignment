function nameIntoInitials(str) {
  const arr = str.split(" ");
  let firstLetter = arr[0].toString().substr(0, 1);
  let secondLetter = arr[1].toString().substr(0, 1);
  let myStr = `${firstLetter}.${secondLetter}`;
  return myStr;
}

console.log(nameIntoInitials("Sam Harris"));
console.log(nameIntoInitials("Patrik Feney"));
