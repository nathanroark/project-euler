/**
 * Is Pentagonal
 *
 * Prove the pentagonally of a number by
 *      simplifying it to the smallest pentagon
 *
 * @param {Number to check for pentagonally} n
 * @returns boolean of true if n is pentagonal
 */
function isPen(n) {
  return Math.sqrt(1 + 24 * n) % 6 === 5;
}

/**
 * Pentagonal Number Formula
 *
 * @param {Number to generate pentagonal number from} n
 * @returns Pentagonal number from the given input param
 */
function penNumFormula(n) {
  return (n * (3 * n - 1)) / 2;
}

/**
 * Driver function for the problem
 * @returns - D = |Pk − Pj|
 *  The pair of pentagonal numbers, Pj and Pk,
 *      for which their sum and difference are pentagonal
 *      and D = |Pk − Pj| is minimized;
 *      what is the value of D?
 */
function solve() {
  for (let j = 2; true; j++) {
    const j_val = penNumFormula(j);

    for (let k = 1; k < j; k++) {
      const k_val = penNumFormula(k);

      if (isPen(k_val + j_val) && isPen(Math.abs(k_val - j_val))) {
        return Math.abs(k_val - j_val);
      }
    }
  }
}

console.log("Solution: ", solve());

/*

// Trideum Laptop
time node main.js 
Solution:  5482660

real	0m0.075s
user	0m0.068s
sys	    0m0.009s


// Personal Computer
time node main.js
Solution:  5482660

real    0m0.039s
user    0m0.040s
sys     0m0.000s

*/
