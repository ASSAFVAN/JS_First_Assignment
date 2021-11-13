function centuryFromYear(year) {
  let floatCentury = year / 100;
  let century = 0;
  if (floatCentury % 1 === 0) {
    century = floatCentury;
    return century;
  } else {
    century = Math.floor(floatCentury);
  }
  return century + 1;
}

console.log(centuryFromYear(1705));
console.log(centuryFromYear(1900));
console.log(centuryFromYear(1601));
console.log(centuryFromYear(2000));
