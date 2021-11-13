function nb_year(p0, percent, aug, p) {
  let percentInc = percent / 100;
  for (i = 0; p0 < p; i++) {
    p0 = p0 + p0 * percentInc + aug;
  }
  return i;
}

console.log(nb_year(1000, 2, 50, 1200));
console.log(nb_year(1500, 5, 100, 5000));
console.log(nb_year(1500000, 2.5, 10000, 2000000));
