/*
 *  Func: getRecurringCycle
 *
 *  Desc: Find the length of longest reoccurring cycle for given denominator under 1
 *
 *  Param:  {den} - denominator to check for cycles
 *  Var:    {quo} - quotient in check
 *  Var:    {rem} - remainder being resolved
 *  Var:    {map} - hashMap of previous quotients
 */
function getRecurringCycle(den) {
    let map = {}, rem = 1;
    for (let quo = 1; rem != 0; quo++) {
        rem = (10 * rem) % den;
        if (map.hasOwnProperty(rem))
            return quo - map[rem]; // if quotient appeared already (cycle)
        map[rem] = quo;
    }
    return 0;
}

let den = 0;    // denominator with longest reoccurring decimal cycle
let len = 0;    // length of longest reoccurring decimal cycle
let i_len = 0;  // current iterator's longest reoccurring decimal cycle

for (let i = 1; i <= 1000; i++) {
    i_len = getRecurringCycle(i);
    if (i_len > len) {
        den = i;
        len = i_len;
    }
}

console.log("denominator with longest cycle: ", den); // solution
console.log("length of cycle: ", len);
