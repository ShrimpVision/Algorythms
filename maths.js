total = 110000;
let a, b, c, d;

c = 1000

a = 3 * c;
b = a + 24200;
d = c + 24200;


perA = a/110000;
perB = b/110000;
perD = d/110000;
perC = 1 - (perA + perB + perD);
perT = perA + perB + perC + perD;

console.log(perA, perB, perC, perD, perT);